new_card = (
    '          <!-- Card 5: Mechanical Sorting -->\n'
    '          <div class="g-photo g-photo-group"\n'
    '               data-gallery-images=\'["assets/grade machine 1.jpg","assets/grade machine 2.jpg"]\'\n'
    '               data-gallery-eyebrow="Mechanical Sorting"\n'
    '               data-gallery-title="Grade Machine">\n'
    '            <img src="assets/grade machine 1.jpg" alt="Lisha Traders Grade Sorting Machine" loading="lazy">\n'
    '            <div class="g-overlay">\n'
    '              <span>Mechanical Sorting</span>\n'
    '              <h4>Grade Machine</h4>\n'
    '            </div>\n'
    '            <div class="g-multi-badge">\n'
    '              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">'
    '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>'
    '<rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>\n'
    '              2 Photos\n'
    '            </div>\n'
    '          </div>\n'
)

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find last </div> before gallery-grid closes (the Safe Packing card closing </div>)
# and insert after it
marker = '          </div>\n        </div>\n      </div>\n    </div>\n  </section>'
replacement = new_card + '        </div>\n      </div>\n    </div>\n  </section>'

if marker in content:
    content = content.replace(marker, replacement, 1)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print('SUCCESS - card inserted')
else:
    # Try LF only version
    marker2 = '          </div>\n        </div>\n      </div>\n    </div>\n  </section>'
    print('MARKER NOT FOUND, trying debug...')
    idx = content.find('Safe Packing</h4>')
    print(repr(content[idx:idx+200]))
