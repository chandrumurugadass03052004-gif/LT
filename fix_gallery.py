"""
Fix grade machine card: remove from hero, add correctly in gallery-grid.
Handles CRLF line endings.
"""

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# ── Step 1: Fix hero — remove card that was injected inside badge-card ─────
# Find the bad injection by key strings and remove it
start_bad = '          <!-- Card 5: Mechanical Sorting -->'
# Find from hero section (before TESTIMONIALS)
testimonials_idx = content.find('<!-- TESTIMONIALS SECTION -->')
hero_idx = content.find('<section', 0)

bad_start = content.find(start_bad, 0)
if bad_start != -1 and bad_start < testimonials_idx:
    # Find the closing </div> of the bad card + the next </div> that closed badge-card
    # The bad card ends at </div> then there's </div> for badge-card
    bad_end_tag = '</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>'
    bad_end_tag2 = '</div>\n        </div>\n      </div>\n    </div>\n  </section>'
    
    bad_end_idx = content.find(bad_end_tag, bad_start)
    if bad_end_idx == -1:
        bad_end_idx = content.find(bad_end_tag2, bad_start)
        close_len = len(bad_end_tag2) - len('\n      </div>\n    </div>\n  </section>')
    else:
        close_len = len(bad_end_tag) - len('\r\n      </div>\r\n    </div>\r\n  </section>')
    
    # What should be before bad_start (restoring the proper </div> for badge-card content)
    before_bad = content[:bad_start]
    # We need to close the <div> that was opened for badge content — 
    # check what's right before the <!-- Card 5 comment
    after_bad = content[bad_end_idx + close_len:]
    
    content = before_bad + '          </div>\r\n        </div>\r\n' + after_bad
    print('Step 1: hero injection removed')
else:
    print(f'Step 1: bad card found at idx={bad_start}, testimonials at {testimonials_idx}')

# ── Step 2: Add card in gallery-grid ──────────────────────────────────────
gallery_close = '          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- TESTIMONIALS SECTION'
if gallery_close not in content:
    # try LF
    gallery_close = '          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- TESTIMONIALS SECTION'

new_card = (
    '          <!-- Card 5: Mechanical Sorting -->\r\n'
    '          <div class="g-photo g-photo-group"\r\n'
    '               data-gallery-images=\'["assets/grade machine 1.jpg","assets/grade machine 2.jpg"]\'\r\n'
    '               data-gallery-eyebrow="Mechanical Sorting"\r\n'
    '               data-gallery-title="Grade Machine">\r\n'
    '            <img src="assets/grade machine 1.jpg" alt="Lisha Traders Grade Sorting Machine" loading="lazy">\r\n'
    '            <div class="g-overlay">\r\n'
    '              <span>Mechanical Sorting</span>\r\n'
    '              <h4>Grade Machine</h4>\r\n'
    '            </div>\r\n'
    '            <div class="g-multi-badge">\r\n'
    '              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">'
    '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>'
    '<rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>\r\n'
    '              2 Photos\r\n'
    '            </div>\r\n'
    '          </div>\r\n'
)

if gallery_close in content:
    replacement_close = new_card + '        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- TESTIMONIALS SECTION'
    if gallery_close.startswith('          </div>\r\n'):
        # The gallery-grid close is the first </div> in gallery_close
        content = content.replace(gallery_close, '          </div>\r\n' + new_card + '        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- TESTIMONIALS SECTION', 1)
    else:
        content = content.replace(gallery_close, '          </div>\n' + new_card.replace('\r\n','\n') + '        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- TESTIMONIALS SECTION', 1)
    print('Step 2: gallery card inserted')
else:
    # debug
    idx = content.find('Safe Packing</h4>')
    print('Step 2: gallery anchor not found, debug:')
    print(repr(content[idx:idx+300]))

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

# Verify
remaining = [i for i,l in enumerate(content.split('\n')) if 'grade machine' in l.lower()]
print(f'Grade machine appears at lines: {remaining}')
