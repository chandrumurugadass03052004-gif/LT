import re

# Read the file
with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find start and end markers
start_marker = '  // G. GALLERY LIGHTBOX POPUP FEATURE'
end_marker = '  initGalleryLightbox();\r\n'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker, start_idx) + len(end_marker)

if start_idx == -1 or end_idx == -1:
    print('MARKERS NOT FOUND')
    exit(1)

new_code = '''  // G. GALLERY LIGHTBOX POPUP FEATURE (with multi-image carousel support)
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

    const updateCarouselImg = (img, dots, counter) => {
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
      carouselImages.forEach(function(_, i) {
        const dot = document.createElement('span');
        dot.className = 'lb-dot' + (i === carouselIndex ? ' active' : '');
        dot.addEventListener('click', function(e) {
          e.stopPropagation();
          carouselIndex = i;
          updateCarouselImg(img, dots, counter);
        });
        dots.appendChild(dot);
      });

      const counter = document.createElement('div');
      counter.className = 'lb-counter';
      counter.textContent = (carouselIndex + 1) + ' / ' + carouselImages.length;

      const prev = document.createElement('button');
      prev.className = 'lb-nav lb-prev';
      prev.innerHTML = '&#8249;';
      prev.setAttribute('aria-label', 'Previous photo');
      prev.addEventListener('click', function(e) {
        e.stopPropagation();
        carouselIndex = (carouselIndex - 1 + carouselImages.length) % carouselImages.length;
        updateCarouselImg(img, dots, counter);
      });

      const next = document.createElement('button');
      next.className = 'lb-nav lb-next';
      next.innerHTML = '&#8250;';
      next.setAttribute('aria-label', 'Next photo');
      next.addEventListener('click', function(e) {
        e.stopPropagation();
        carouselIndex = (carouselIndex + 1) % carouselImages.length;
        updateCarouselImg(img, dots, counter);
      });

      wrapper.appendChild(prev);
      wrapper.appendChild(img);
      wrapper.appendChild(next);
      mediaContainer.appendChild(wrapper);
      mediaContainer.appendChild(dots);
      mediaContainer.appendChild(counter);

      // Touch/swipe support
      let touchStartX = 0;
      wrapper.addEventListener('touchstart', function(e) { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
      wrapper.addEventListener('touchend', function(e) {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) { if (dx < 0) next.click(); else prev.click(); }
      });
    };

    galleryItems.forEach(function(item) {
      item.addEventListener('click', function() {
        mediaContainer.innerHTML = '';
        carouselIndex = 0;

        const isGroup = item.classList.contains('g-photo-group');
        const eyebrow = item.dataset.galleryEyebrow || (item.querySelector('[data-translate*="eyebrow"]') ? item.querySelector('[data-translate*="eyebrow"]').textContent : '');
        const title   = item.dataset.galleryTitle   || (item.querySelector('[data-translate*="title"]')   ? item.querySelector('[data-translate*="title"]').textContent   : '');

        if (captionEyebrow) captionEyebrow.textContent = eyebrow;
        if (captionTitle)   captionTitle.textContent   = title;

        if (isGroup) {
          try { carouselImages = JSON.parse(item.dataset.galleryImages || '[]'); } catch(e) { carouselImages = []; }
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

    const closeLightbox = function() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', function(e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') { const n = document.querySelector('.lb-next'); if (n) n.click(); }
      if (e.key === 'ArrowLeft')  { const p = document.querySelector('.lb-prev'); if (p) p.click(); }
    });
  };

  initGalleryLightbox();
'''

content = content[:start_idx] + new_code + content[end_idx:]

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('SUCCESS - app.js updated')
