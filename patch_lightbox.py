"""
Safely replaces ONLY the initGalleryLightbox function in app.js
with a carousel-capable version. Does NOT touch anything else.
"""

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Verify the expected markers exist exactly once
start_tag = '  // G. GALLERY LIGHTBOX POPUP FEATURE'
end_tag = '  initGalleryLightbox();\n'

si = content.find(start_tag)
if si == -1:
    # Try CRLF variant
    end_tag = '  initGalleryLightbox();\r\n'
ei = content.find(end_tag, si) + len(end_tag) if si != -1 else -1

assert si != -1, "START MARKER NOT FOUND"
assert ei > si,  "END MARKER NOT FOUND"

# Confirm only ONE occurrence of the start tag
assert content.count(start_tag) == 1, f"START MARKER appears {content.count(start_tag)} times — aborting"

new_section = '''  // G. GALLERY LIGHTBOX POPUP FEATURE (multi-image carousel)
  const initGalleryLightbox = () => {
    const galleryItems = document.querySelectorAll('.g-photo');
    const lightbox = document.getElementById('lightbox-modal');
    const mediaContainer = document.getElementById('lightbox-media-container');
    const closeBtn = document.getElementById('lightbox-close');
    const captionEyebrow = lightbox?.querySelector('.lightbox-eyebrow');
    const captionTitle = lightbox?.querySelector('.lightbox-title');

    if (!galleryItems.length || !lightbox || !mediaContainer || !closeBtn) return;

    let carouselImages = [];
    let carouselIndex = 0;

    const updateCarouselSlide = (img, dots, counter) => {
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = carouselImages[carouselIndex];
        img.style.opacity = '1';
        dots.querySelectorAll('.lb-dot').forEach((d, i) => d.classList.toggle('active', i === carouselIndex));
        counter.textContent = (carouselIndex + 1) + ' / ' + carouselImages.length;
      }, 150);
    };

    const renderCarousel = () => {
      mediaContainer.innerHTML = '';

      if (carouselImages.length <= 1) {
        const img = document.createElement('img');
        img.src = carouselImages[0] || '';
        img.alt = captionTitle ? captionTitle.textContent : '';
        img.style.cssText = 'max-width:100%;max-height:80vh;border-radius:8px;display:block;margin:0 auto;';
        mediaContainer.appendChild(img);
        return;
      }

      const wrapper = document.createElement('div');
      wrapper.className = 'lb-carousel';

      const img = document.createElement('img');
      img.src = carouselImages[carouselIndex];
      img.alt = 'Photo ' + (carouselIndex + 1);
      img.style.cssText = 'max-width:100%;max-height:75vh;border-radius:8px;display:block;transition:opacity 0.25s ease;';

      const dots = document.createElement('div');
      dots.className = 'lb-dots';

      const counter = document.createElement('div');
      counter.className = 'lb-counter';
      counter.textContent = (carouselIndex + 1) + ' / ' + carouselImages.length;

      carouselImages.forEach((_src, i) => {
        const dot = document.createElement('span');
        dot.className = 'lb-dot' + (i === carouselIndex ? ' active' : '');
        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          carouselIndex = i;
          updateCarouselSlide(img, dots, counter);
        });
        dots.appendChild(dot);
      });

      const prev = document.createElement('button');
      prev.className = 'lb-nav lb-prev';
      prev.innerHTML = '&#8249;';
      prev.setAttribute('aria-label', 'Previous photo');
      prev.addEventListener('click', (e) => {
        e.stopPropagation();
        carouselIndex = (carouselIndex - 1 + carouselImages.length) % carouselImages.length;
        updateCarouselSlide(img, dots, counter);
      });

      const next = document.createElement('button');
      next.className = 'lb-nav lb-next';
      next.innerHTML = '&#8250;';
      next.setAttribute('aria-label', 'Next photo');
      next.addEventListener('click', (e) => {
        e.stopPropagation();
        carouselIndex = (carouselIndex + 1) % carouselImages.length;
        updateCarouselSlide(img, dots, counter);
      });

      wrapper.appendChild(prev);
      wrapper.appendChild(img);
      wrapper.appendChild(next);
      mediaContainer.appendChild(wrapper);
      mediaContainer.appendChild(dots);
      mediaContainer.appendChild(counter);

      // Touch / swipe
      let touchStartX = 0;
      wrapper.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
      wrapper.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) { if (dx < 0) next.click(); else prev.click(); }
      });
    };

    galleryItems.forEach((item) => {
      item.addEventListener('click', () => {
        mediaContainer.innerHTML = '';
        carouselIndex = 0;

        const isGroup = item.classList.contains('g-photo-group');
        const eyebrow = item.dataset.galleryEyebrow
          || item.querySelector('[data-translate*="eyebrow"]')?.textContent || '';
        const title   = item.dataset.galleryTitle
          || item.querySelector('[data-translate*="title"]')?.textContent   || '';

        if (captionEyebrow) captionEyebrow.textContent = eyebrow;
        if (captionTitle)   captionTitle.textContent   = title;

        if (isGroup) {
          try { carouselImages = JSON.parse(item.dataset.galleryImages || '[]'); } catch (_) { carouselImages = []; }
          renderCarousel();
        } else {
          const img = item.querySelector('img');
          const svg = item.querySelector('svg');
          if (img) {
            carouselImages = [img.src];
            renderCarousel();
          } else if (svg) {
            mediaContainer.appendChild(svg.cloneNode(true));
          }
        }

        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') document.querySelector('.lb-next')?.click();
      if (e.key === 'ArrowLeft')  document.querySelector('.lb-prev')?.click();
    });
  };

  initGalleryLightbox();
'''

result = content[:si] + new_section + content[ei:]

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(result)

lines = result.count('\n')
print(f'SUCCESS — app.js written, ~{lines} lines')
