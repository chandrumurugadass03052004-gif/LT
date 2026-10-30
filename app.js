// Global language selector fallback (available immediately even before DOMContentLoaded)
window.selectSiteLanguage = function(lang) {
  try {
    localStorage.setItem('lisha-lang', lang);
    if (document.documentElement) {
      document.documentElement.classList.add('has-lang', 'hide-lang-modal');
      document.documentElement.classList.remove('lang-en', 'lang-hi', 'lang-ta');
      document.documentElement.classList.add(`lang-${lang}`);
      document.documentElement.setAttribute('lang', lang);
    }
    if (typeof window.setLanguage === 'function') {
      window.setLanguage(lang);
    }
  } catch (e) {
    console.error('[Language] Select error:', e);
  }
  const modals = document.querySelectorAll('#lang-modal, #lang-modal-overlay, .lang-modal-overlay');
  modals.forEach(modal => {
    modal.classList.add('hide');
    modal.style.display = 'none';
  });
  document.body.style.overflow = '';
  setTimeout(() => {
    document.body.classList.add('hero-animate');
  }, 200);
};

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     TRANSLATIONS DICTIONARY (EN, HI, TA)
     ========================================================================== */
  const translations = {
    'en': {
      'footer_about_desc': 'Lisha Traders is a trusted supplier of premium Indian green cardamom, serving wholesalers, retailers, distributors, and exporters with quality-focused sourcing and reliable service.',

      'nav_home': 'Home',
      'nav_products': 'Products',
      'nav_about': 'About Us',
      'nav_process': 'Our Process',
      'nav_pack': 'Packaging',
      'nav_calc': 'Quote Calculator',
      'nav_gallery': 'Gallery',
      'nav_contact': 'Contact',
      'btn_get_quote': 'Get a Quote →',
      'hero_eyebrow': 'Premium Indian Cardamom',
      'hero_title': 'Pure Scent. <br><span>Perfect Grade.</span> Trusted Globally.',
      'hero_desc': 'Lisha Traders delivers premium quality Green Cardamom, Fruit Cardamom (Yellow/Pale), Split Cardamom, and Seeds. Sourced directly from our own private plantations and Spices Board auctions in Bodinayakanur, India.',
      'hero_btn_explore': 'Explore Grades →',
      'hero_btn_sample': 'Request Sample →',
      'hero_btn_calc': 'Calculate Price →',
      'hero_badge_title': '100% Export Quality',
      'hero_badge_desc': 'Handpicked sorting & grade verification',
      'products_eyebrow': 'Product Offerings',
      'products_title': 'Our Cardamom Grades',
      'specs_detail': 'Specs & Detail',
      'tag_popular': 'Popular',
      'tag_royal': 'Royal Selection',
      'btn_calc_bulk': 'Calculate Bulk Quote →',
      'grade_6_lbl': '6.0 mm',
      'grade_7_lbl': '7.0 mm',
      'grade_75_lbl': '7.5 mm',
      'grade_75_8_lbl': '7.5 - 8.0 mm',
      'grade_8_lbl': '8.0 mm',
      'grade_85_lbl': '8.5 mm',
      'grade_9_lbl': '9.0 mm',
      'grade_6_sub': 'Standard Sized (Medium)',
      'grade_7_sub': 'Premium Bold (AGEB)',
      'grade_75_sub': 'Elite Premium Bold',
      'grade_75_8_sub': 'Super Bold Export Mix',
      'grade_8_sub': 'Super Extra Bold (Super Jumbo)',
      'grade_85_sub': 'Imperial Jumbo Bold',
      'grade_9_sub': 'Supreme Royal Jumbo',
      'about_eyebrow': 'Our Brand Legacy',
      'about_founder_desc': 'Established in 2012 by <strong>Murugadass B</strong>, Lisha Traders is rooted in the rich soils of the Bodinayakanur cardamom belt. Backed by over <strong>12 prestigious Spices Board auction permissions</strong> and our own lush <strong>private cardamom plantations</strong>, we deliver the finest Green, Fruit (Yellow), Splits, and Seeds directly from the source.',
      'about_title': 'A Quality You Can Trust, Service You Can Rely On.',
      'feat_1_title': 'Premium Sorter Quality',
      'feat_1_desc': 'Double sorted and handpicked to ensure uniform color and minimal empty pods.',
      'feat_2_title': 'Domestic & Export Shipping',
      'feat_2_desc': 'Reliable packaging and cargo coordination for timely delivery across states and global ports.',
      'feat_3_title': 'Auction & Farmer Sourced',
      'feat_3_desc': 'Direct collection from regulated auctions and licensed farmers ensuring authentic origins.',
      'feat_4_title': 'Flexible Bulk Capabilities',
      'feat_4_desc': 'No requirement is too large. Scalable supply chains from 100 kg up to containers.',
      'feat_5_title': 'Competitive Direct Pricing',
      'feat_5_desc': 'Sourcing directly from the growing belts allows us to provide unmatched pricing structures.',
      'feat_6_title': 'Long-term Business Focus',
      'feat_6_desc': 'We work on transparent parameters to build years of reliable partnership with wholesalers.',
      'process_eyebrow': 'Standard Operating Procedure',
      'process_title': 'From Harvest to Your Inventory',
      'step_1_tab': '1. Sourcing',
      'step_2_tab': '2. Auctioning',
      'step_3_tab': '3. Sorting',
      'step_4_tab': '4. Packaging',
      'step_5_tab': '5. Dispatch',
      'step_details_title': 'Step Details',
      'step_1_title': '1. Selective Plantation Sourcing',
      'step_1_desc': 'We build direct ties with estates located in the Western Ghats (Theni, Idukki, Munnar regions). Cardamom pods are picked when fully ripe. Sourcing from high altitudes guarantees the highest density and concentration of volatile natural oils within the seeds.',
      'step_2_title': '2. Regulated Spices Board Auctions',
      'step_2_desc': 'We actively participate in official auctions supervised by the Spices Board of India in Bodinayakanur and Vandanmettu. This ensures complete transparency, regulatory clearance, chemical testing adherence, and fair pricing mechanics.',
      'step_3_title': '3. Strict Mechanical & Manual Grading',
      'step_3_desc': 'The bought pods undergo sieve sorting to define sizing ranges accurately (5.5mm to 8mm+). Next, visual inspectors sort out light pods, thrips-damaged pods, split pods, and foreign plant material under controlled laboratory grade settings.',
      'step_4_title': '4. Moisture & Aroma Preserving Pack',
      'step_4_desc': 'Graded cardamom is stored under monitored humidity. We pack the orders in food-grade, high-barrier laminates that prevent ambient humidity absorption, safeguarding flavor density and keeping the color green during transit.',
      'step_5_title': '5. Safe Transit Logistics',
      'step_5_desc': 'Whether by container or cargo truck, the shipments are labeled clearly and shipped with dry container liners. We handle complete documentation, tax filings (GST, Export Clearance), and share real-time tracking numbers with our buyers.',
      'pack_eyebrow': 'Packaging Options',
      'pack_title': 'Flavor Preservation Systems',
      'pack_desc': 'Volatile essential oils evaporate when exposed to heat and moisture. Our specialized packing systems ensure the cardamom reaches your warehouse smelling as fresh as the day it was cured.',
      'pack_1kg_tab': '1 kg Pouches',
      'pack_5kg_tab': '5 kg Bags',
      'pack_10kg_tab': '10 kg Cartons',
      'pack_25kg_tab': '25 kg Bulk Gunny',
      'pack_select_lbl': 'Select packaging...',
      'pack_point_1': 'Moisture-Controlled Poly Barrier',
      'pack_point_2': 'Oxygen Absorption Strips',
      'pack_point_3': 'Food-Grade Thick Foil Laminate',
      'pack_point_4': 'Sturdy Outer Cartons for Transit',
      'calc_eyebrow': 'Price & Volume Estimator',
      'calc_title': 'Bulk Quote Request Calculator',
      'calc_label_grade': 'Select Cardamom Size/Grade',
      'calc_label_qty': 'Select Target Quantity',
      'calc_min_label': 'Min: 5 kg',
      'calc_max_label': 'Max: 5000 kg',
      'calc_unit': 'Kilograms (KG)',
      'calc_summary_header': 'ESTIMATE SUMMARY',
      'calc_summary_grade': 'Selected Grade:',
      'calc_summary_vol': 'Total Volume:',
      'calc_summary_pack': 'Recommended Packing:',
      'calc_summary_bags': 'Total Shipping Bags:',
      'calc_summary_range': 'Indicative Value Range:',
      'calc_disclaimer': '*Note: Cardamom prices fluctuate daily according to Bodinayakanur auction indexes. Commercial policy: No free samples are supplied; sample requests are charged at daily pro-rata market rates. Actual price ranges will be locked in upon direct inquiry.',
      'btn_calc_whatsapp': 'Send Quote Request via WhatsApp →',
      'btn_calc_email': 'Send Quote Request via Email',
      'gallery_eyebrow': 'Visual Tour',
      'gallery_title': 'Premium Quality Gallery',
      'btn_gallery_visit': 'Request Factory Visit',
      'gallery_card_1_eyebrow': 'Sourcing',
      'gallery_card_1_title': 'Fresh Harvest',
      'gallery_card_2_eyebrow': 'Mechanical Sorting',
      'gallery_card_2_title': 'Sieve Sizing',
      'gallery_card_3_eyebrow': 'Visual Inspection',
      'gallery_card_3_title': 'Color Sorting',
      'gallery_card_4_eyebrow': 'Logistics',
      'gallery_card_4_title': 'Safe Packing',
      'test_eyebrow': 'Testimonials',
      'test_title': 'Trusted by Spices Wholesalers & Traders',
      'test_1_quote': 'Lisha Traders provides consistently high-quality cardamom. Their sieve measurements are extremely accurate, ensuring uniform sizing in every shipment. Sourcing is fast and reliable.',
      'test_1_role': 'Wholesale Trader, Rajasthan',
      'test_2_quote': 'We have been sourcing 7mm and 8mm cardamom from Lisha Traders for over 2 years. Their moisture level is always below 12%, which is essential for shelf life stability. Exceptional pricing!',
      'test_2_role': 'Spice Exporter, Bengaluru',
      'test_3_quote': 'Reliable, professional, and transparent. We appreciate their packaging options. Even during the peak dry seasons, they deliver premium grades without delays. Recommended wholesaler.',
      'test_3_role': 'Retail Chain Supplier, Kerala',
      'contact_eyebrow': 'Let\'s Connect',
      'contact_title': 'Establish a Reliable Sourcing Channel',
      'contact_desc': 'Speak to our wholesale desk to review sample cards, request customized packaging layouts, or request details on the current Spices Board auction listings.',
      'btn_contact_submit': 'Submit Bulk Inquiry',
      'contact_info_phone_lbl': 'Phone / WhatsApp',
      'contact_info_email_lbl': 'Corporate Email',
      'contact_info_loc_lbl': 'Trading Hub & Factory',
      'contact_info_loc_val': 'Bodinayakanur, Theni District, Tamil Nadu - 625513, India',
      'foot_desc': 'Premium wholesale suppliers of Green Cardamom, Fruit Cardamom, Splits, and Seeds. Sourced from our private plantations and Spices Board auctions, processed in Bodinayakanur, Tamil Nadu.',
      'foot_site_lbl': 'Sitemap',
      'foot_grades_lbl': 'Grades',
      'foot_source_lbl': 'Regulated Sourcing',
      'foot_link_auction': 'Auction Verification',
      'foot_link_certs': 'Quality Certifications',
      'foot_link_desk': 'Bulk Exporter desk',
      'foot_link_factory': 'Factory Inquiry',
      'foot_rights': '┬⌐ 2026 Lisha Traders. All Rights Reserved. Coordinated in Bodinayakanur, India.',
      'foot_policy': 'Spices Board License | Trade & Export Policy | Terms of Supply',
      'modal_spec_sieve_lbl': 'Sieve Size Diameter',
      'modal_spec_moisture_lbl': 'Moisture Content',
      'modal_spec_weight_lbl': 'Liter Weight (g/l)',
      'modal_spec_color_lbl': 'Color Profile',
      'modal_spec_summary_lbl': 'Product Summary',
      'modal_spec_btn_quote': 'Estimate Quantity',
      'modal_spec_btn_sample': 'Request Sample',
      'modal_spec_btn_close': 'Close Specs',
      'calc_pack_1kg': '1 kg Pouches (Packed inside Cartons)',
      'calc_pack_5kg': '5 kg Vacuum Sealed Bags',
      'calc_pack_10kg': '10 kg Multi-Barrier Boxes',
      'calc_pack_25kg': '25 kg Heavy-Duty Gunny Bags with vapour-barrier liners',
      'calc_units_label': 'units',
      'calc_price_contact': 'Contact for pricing',
      'contact_alert_success': 'Thank you for submitting your bulk inquiry! Opening WhatsApp desk for immediate catalog locks.',
      'loading_text': 'Loading',
      'btn_write_review': 'Write a Review',
      'review_modal_title': 'Submit Your Testimonial',
      'review_label_name': 'Your Name',
      'review_label_role': 'Role / Location / Company',
      'review_label_rating': 'Rating',
      'review_label_text': 'Your Review',
      'review_btn_submit': 'Submit Review',
      'review_alert_success': 'Thank you for your testimonial! Your review has been added to our board.',
      'review_delete_confirm': 'Are you sure you want to remove this review?',
      'prod_tab_green': 'Green Cardamom',
      'prod_tab_yellow': 'Fruit Cardamom (Yellow/Pale)',
      'grade_6_sub_yellow': 'Standard Pale Grade (MGB)',
      'grade_7_sub_yellow': 'Premium Bold Pale (MGEB)',
      'grade_75_sub_yellow': 'Elite Premium Pale Bold',
      'grade_75_8_sub_yellow': 'Super Pale Export Mix',
      'grade_8_sub_yellow': 'Super Extra Pale Bold (Jumbo)',
      'grade_85_sub_yellow': 'Imperial Pale Jumbo Bold',
      'grade_9_sub_yellow': 'Supreme Royal Pale Jumbo',
      'calc_label_variety': 'Cardamom Variety',
      'calc_empty_cart': 'No items added yet. Select variety, size, and quantity, then click \'Add to Inquiry List\'.',
      'table_th_item': 'Item',
      'table_th_qty': 'Qty',
      'table_th_bags': 'Bags',
      'table_th_price': 'Price',
      'calc_summary_items': 'Total Items:',
      'btn_calc_add_item': 'Add to Inquiry List +',
      'calc_alert_empty_submit': 'Please add at least one cardamom grade sizing to your estimate list first.',
      'stat_years': 'Years Legacy',
      'stat_tons': 'Tons Distributed',
      'stat_partners': 'Wholesale Partners',
      'why_biz_label': 'WHY CHOOSE US',
      'why_biz_title': 'Trusted by Businesses. <br>Built on <span style="color: #4eb270;">Quality</span>.',
      'why_biz_subheading': 'As a prominent planter and buyer, Lisha Traders supplies a complete range of premium Indian cardamom—including Green, Fruit/Yellow, Splits, and Seeds—sourced directly from our own farms and auction centers.',
      'why_feat_1_title': 'Premium Quality',
      'why_feat_1_desc': 'Every batch is carefully sourced and graded to maintain consistent quality standards.',
      'why_feat_2_title': 'Trusted Procurement',
      'why_feat_2_desc': 'We source premium cardamom from trusted auction markets and verified suppliers.',
      'why_feat_3_title': 'Transparent Business',
      'why_feat_3_desc': 'Clear quotations, honest communication, and straightforward pricing.',
      'why_feat_4_title': 'Secure Packaging',
      'why_feat_4_desc': 'Products are packed carefully to preserve freshness during transportation.',
      'why_feat_5_title': 'Reliable Delivery',
      'why_feat_5_desc': 'Orders are processed efficiently with timely dispatch across India.',
      'why_feat_6_title': 'Customer First',
      'why_feat_6_desc': 'We focus on building long-term relationships through dependable service and support.',
      'why_stat_1_lbl': 'Bulk Orders Delivered',
      'why_stat_2_lbl': 'Quality Checked',
      'why_stat_3_lbl': 'Customer Support',
      'why_trust_title': 'Trusted Business Practices',
      'why_badge_gst': '&#10003; GST Invoice Available',
      'why_badge_wholesale': '&#10003; Wholesale Orders',
      'why_badge_bulk': '&#10003; Bulk Supply',
      'why_badge_quality': '&#10003; Quality Checked',
      'why_badge_packaging': '&#10003; Secure Packaging',
      'why_badge_support': '&#10003; Responsive Support',
      'why_cta_title': 'Let\'s Build a Long-Term Business Relationship.',
      'why_cta_desc': 'Whether you are a wholesaler, distributor, retailer, or exporter, Lisha Traders is committed to supplying premium-quality cardamom with reliable service and transparent communication.',
      'why_cta_btn_quote': 'Request Bulk Quote',
      'why_cta_btn_contact': 'Contact Us',
      'cred_1': '&#10003; GST Registered',
      'cred_2': '&#10003; Wholesale Supplier',
      'cred_3': '&#10003; Bulk Orders Welcome',
      'cred_4': '&#10003; Secure Packaging',
      'cred_5': '&#10003; Quality Checked',
      'cred_6': '&#10003; Reliable Support',
      'faq_eyebrow': 'FAQ',
      'faq_title_p1': 'Frequently Asked',
      'faq_title_p2': 'Questions',
      'faq_1_q': 'What types and grades of cardamom do you supply?',
      'faq_1_a': '<p>We supply a complete range of premium Indian cardamom to meet every requirement:</p><ul style="margin-top:10px; margin-left: 20px; list-style-type: disc;"><li><strong>Green Cardamom:</strong> Multiple grades including 6.0mm, 7.0mm, 7.5mm, 8.0mm, 8.5mm, and 9.0mm jumbo pods.</li><li><strong>Fruit Cardamom (Yellow/Pale):</strong> Specially sourced and sorted pale pods.</li><li><strong>Split Cardamom:</strong> High-quality split pods suitable for grinding and extraction.</li><li><strong>Cardamom Seeds:</strong> Pure cardamom seeds sorted for culinary and commercial use.</li></ul>',
      'faq_2_q': 'Do you accept bulk orders?',
      'faq_2_a': 'Yes. Lisha Traders specializes in wholesale and bulk orders. Contact us with your quantity requirements, and our team will provide a customized quotation.',
      'faq_3_q': 'How can I request a quotation?',
      'faq_3_a': 'You can request a quotation by using our \'Request Bulk Quote\' calculator, submitting the contact form, or reaching out directly via WhatsApp or email.',
      'faq_4_q': 'Do you deliver across India?',
      'faq_4_a': 'Yes, we have a robust logistics network and supply premium cardamom to wholesalers and distributors across all states in India.',
      'faq_5_q': 'How are the products packaged?',
      'faq_5_a': 'Cardamom is securely packed in high-quality gunny bags or custom export-grade packaging to ensure freshness and prevent moisture damage during transit.',
      'faq_6_q': 'Can I customize packaging?',
      'faq_6_a': 'Yes, we offer customized packaging solutions for bulk buyers. Please mention your specific packaging requirements when requesting a quote.',
      'faq_7_q': 'What payment methods do you accept?',
      'faq_7_a': 'We accept standard B2B payment methods including Bank Transfers (NEFT/RTGS). Specific payment terms can be discussed during order finalization.',
      'faq_8_q': 'How can I contact Lisha Traders?',
      'faq_8_a': 'You can connect with us via Phone, WhatsApp, Email, or visit our trading hub in Bodinayakanur. All contact details are available in the \'Contact\' section.',
      'faq_footer_title': 'Still Have Questions?',
      'faq_footer_desc': 'Our team is ready to help you with product information, quotations, and wholesale enquiries.',
      'contact_main_eyebrow': 'CONTACT',
      'contact_main_title_p1': 'Let\'s Build',
      'contact_main_title_p2': 'Business',
      'contact_main_title_p3': 'Together.',
      'contact_lbl_phone': 'Phone Number',
      'contact_lbl_whatsapp': 'WhatsApp',
      'contact_lbl_email': 'Email',
      'contact_lbl_hours': 'Business Hours',
      'contact_val_hours': 'Monday – Saturday<br>9:00 AM – 6:00 PM',
      'contact_lbl_address': 'Business Address',
      'hub_title': 'Find Us',
      'hub_desc': 'Visit our office or connect with us for wholesale enquiries.',
      'hub_cred_title': 'Business Credentials',
      'cta_bottom_title': 'Ready to Source Premium Cardamom?',
      'cta_bottom_btn_quote': 'Request Bulk Quote',
      'cta_bottom_btn_wa': 'WhatsApp Us',
      'footer_links_title': 'Quick Links',
      'fl_home': 'Home',
      'fl_about': 'About Us',
      'fl_prod': 'Products',
      'fl_process': 'Our Process',
      'fl_pack': 'Packaging',
      'fl_gallery': 'Gallery',
      'fl_quote': 'Quote Calculator',
      'fl_contact': 'Contact',
      'footer_legal_title': 'Legal',
      'fl_terms': 'Terms & Conditions',
      'fl_privacy': 'Privacy Policy',
      'fl_disc': 'Disclaimer',
      'footer_contact_title': 'Contact',
      'fc_wa': 'WhatsApp Chat',
      'fc_address': 'Bodinayakanur, Theni District, Tamil Nadu - 625513, India',
      'fc_hours': 'Mon - Sat: 9:00 AM - 6:00 PM',
      'footer_copy': '© 2026 Lisha Traders. All Rights Reserved.',
      'footer_design': 'Designed with Excellence.',
      'modal_grade_type': 'Premium Medium Bold Grade',
      'wa_msg_empty': 'Hello Lisha Traders,\\n\\nI would like to request information about bulk cardamom grade availability and custom quotation feeds.',
      'wa_msg_hello': 'Hello Lisha Traders,\\n\\nI would like to request a formal wholesale quotation for the following bulk cardamom requirements:',
      'wa_msg_id': 'Inquiry ID',
      'wa_msg_items': 'Items Requested',
      'wa_msg_end': 'Please share availability, daily auction rate index, and delivery schedule to our dispatch.\\n\\nThank you!',
      'wa_packed_in': 'packed in',
      'wa_bags': 'bags',
      'contact_legal_terms': 'I have read and agree to the',
      'contact_legal_terms_link': 'Terms &amp; Conditions',
      'contact_legal_privacy': 'I have read and understood the',
      'contact_legal_privacy_link': 'Privacy Policy',
      'contact_legal_confirm': 'I confirm that the information provided is accurate and complete and that I am authorized to submit this business inquiry.',
      'contact_legal_disclaimer': 'By submitting this form, you are requesting a business quotation from Lisha Traders. This submission does not create a purchase contract or obligate either party to complete a transaction. Any sale will be governed by the accepted quotation and, where applicable, a separate sales agreement executed between the parties.',
      'why_eyebrow': 'WHY CHOOSE US',
      'why_title_p1': 'Trusted by',
      'why_title_p2': 'Businesses.',
      'why_title_p3': 'Built on Quality.',
      'why_ft_quality': 'Premium Quality',
      'why_ft_quality_desc': 'Every batch is carefully sourced and graded to maintain consistent quality standards.',
      'why_ft_procure': 'Trusted Procurement',
      'why_ft_procure_desc': 'We source premium cardamom from trusted auction markets and verified suppliers.',
      'why_ft_trans': 'Transparent Business',
      'why_ft_trans_desc': 'Clear quotations, honest communication, and straightforward pricing.',
      'why_ft_pack': 'Secure Packaging',
      'why_ft_pack_desc': 'Products are packed carefully to preserve freshness during transportation.',
      'why_ft_del': 'Reliable Delivery',
      'why_ft_del_desc': 'Orders are processed efficiently with timely dispatch across India.',
      'why_ft_cust': 'Customer First',
      'why_ft_cust_desc': 'We focus on building long-term relationships through dependable service and support.',
      'table_header_grade': 'Grade & Size',
      'table_sub_6': 'Standard / Medium',
      'table_sub_7': 'Premium Bold (AGEB)',
      'table_sub_75': 'Elite Premium Bold',
      'table_sub_75_8': 'Super Bold Export Mix',
      'table_sub_8': 'Super Extra Bold (Super Jumbo)',
      'table_sub_85': 'Imperial Jumbo Bold',
      'table_sub_9': 'Supreme Royal Jumbo',
      'contact_main_title_p3': 'Together.',
      'why_f1_title': 'Direct Auction & Farm Sourced',
      'why_f1_desc': 'Sourced directly from certified Spices Board auctions and private plantations in Bodinayakanur, guaranteeing authentic origin and unblended batches.',
      'why_f2_title': 'Accurate Sieve Grading',
      'why_f2_desc': 'Every lot is machine-graded through precision sieves (6.0mm to 9.0mm) to ensure consistent size distribution, pod density, and visual appeal.',
      'why_f3_title': 'Moisture Controlled (<12%)',
      'why_f3_desc': 'Strict adherence to national spice standards with laboratory-verified moisture levels under 12%, preventing mould and extending storage life.',
      'why_f4_title': 'Flexible Wholesale Supply',
      'why_f4_desc': 'From 50 kg trial orders for regional retail chains to multi-tonne full container loads (FCL) for international spice importers, we scale smoothly.',
      'why_f5_title': 'Protective Aroma-Lock Packaging',
      'why_f5_desc': 'Multi-layer food-grade poly-barrier pouches and corrugated master cartons that lock in natural volatile oils throughout shipping and storage.',
      'why_f6_title': 'Transparent Market-Linked Rates',
      'why_f6_desc': 'Daily pricing benchmarked to real-time Bodinayakanur auction rates, giving buyers clarity, fair value, and reliable procurement cycles.',
      'faq_q1': 'What cardamom grades do you offer?',
      'faq_a1': 'We supply all standard Indian cardamom sizes from 6.0 mm (Medium) up to 9.0 mm (Supreme Royal Jumbo), including AGEB (7.0 mm), Elite Bold (7.5 mm), and Super Extra Bold (8.0 mm). We also offer Fruit Cardamom (Yellow/Pale), Split Cardamom, and Cardamom Seeds.',
      'faq_q2': 'What is the minimum order quantity (MOQ)?',
      'faq_a2': 'Our standard wholesale MOQ is 20 kg (one master carton). For trial orders or regional retail distributors, smaller quantities can be arranged. We also fulfill container loads (FCL) for export.',
      'faq_q3': 'Can I request a sample before placing a bulk order?',
      'faq_a3': 'Yes, sample packs (50g, 100g, 250g, 500g) are available for all grades. In line with our standard wholesale trade policy, sample costs and courier charges apply and are adjusted against your initial bulk commercial shipment.',
      'faq_q4': 'Where is your cardamom sourced from?',
      'faq_a4': 'All our cardamom is sourced from our private plantations in the Western Ghats and certified Spices Board auctions in Bodinayakanur and Vandanmettu — the cardamom capital of India.',
      'faq_q5': 'How do you ensure cardamom freshness during transit?',
      'faq_a5': 'We maintain moisture below 12% and package in high-barrier food-grade poly liners and sealed corrugated master cartons with moisture absorption strips to prevent humidity absorption.',
      'faq_q6': 'Do you support international exports?',
      'faq_a6': 'Yes, we handle complete documentation, phytosanitary certifications, Spices Board export clearance, and port logistics for shipments to the Middle East, Southeast Asia, Europe, and the Americas.'
    },
    'hi': {
      'stat_years': 'वर्षों की विरासत',
      'stat_tons': 'टन वितरित',
      'stat_partners': 'थोक भागीदार',
      'why_biz_label': 'हमें क्यों चुनें',
      'why_feat_1_title': 'प्रीमियम गुणवत्ता',
      'why_feat_1_desc': 'लगातार गुणवत्ता मानकों को बनाए रखने के लिए प्रत्येक बैच को सावधानीपूर्वक प्राप्त और वर्गीकृत किया जाता है।',
      'why_feat_2_title': 'विश्वसनीय खरीद',
      'why_feat_2_desc': 'हम विश्वसनीय नीलामी बाजारों और सत्यापित आपूर्तिकर्ताओं से प्रीमियम इलायची प्राप्त करते हैं।',
      'why_feat_3_title': 'पारदर्शी व्यवसाय',
      'why_feat_3_desc': 'स्पष्ट कोटेशन, ईमानदार संचार, और सीधा मूल्य निर्धारण।',
      'why_feat_4_title': 'सुरक्षित पैकेजिंग',
      'why_feat_4_desc': 'परिवहन के दौरान ताजगी बनाए रखने के लिए उत्पादों को सावधानीपूर्वक पैक किया जाता है।',
      'why_feat_5_title': 'विश्वसनीय वितरण',
      'why_feat_5_desc': 'पूरे भारत में समय पर प्रेषण के साथ ऑर्डर कुशलतापूर्वक संसाधित किए जाते हैं।',
      'why_feat_6_title': 'ग्राहक पहले',
      'why_feat_6_desc': 'हम भरोसेमंद सेवा और समर्थन के माध्यम से दीर्घकालिक संबंध बनाने पर ध्यान केंद्रित करते हैं।',
      'why_stat_1_lbl': 'थोक ऑर्डर वितरित',
      'why_stat_2_lbl': 'गुणवत्ता जांची गई',
      'why_stat_3_lbl': 'ग्राहक सहायता',
      'why_badge_gst': '&#10003; GST इनवॉइस उपलब्ध',
      'why_badge_wholesale': '&#10003; थोक ऑर्डर',
      'why_badge_bulk': '&#10003; थोक आपूर्ति',
      'why_badge_quality': '&#10003; गुणवत्ता जांची गई',
      'why_badge_packaging': '&#10003; सुरक्षित पैकेजिंग',
      'why_badge_support': '&#10003; उत्तरदायी समर्थन',
      'why_cta_btn_quote': 'थोक कोटेशन का अनुरोध करें',
      'why_cta_btn_contact': 'हमसे संपर्क करें',
      'nav_home': 'होम',
      'nav_products': 'उत्पाद',
      'nav_about': 'हमारे बारे में',
      'nav_process': 'हमारी प्रक्रिया',
      'nav_pack': 'पैकेजिंग',
      'nav_calc': 'अनुमान कैलकुलेटर',
      'nav_gallery': 'गैलरी',
      'nav_contact': 'संपर्क',
      'btn_get_quote': 'कोटेशन लें →',
      'hero_eyebrow': 'प्रीमियम भारतीय इलायची',
      'hero_title': 'शुद्ध सुगंध। <br><span>उत्कृष्ट ग्रेड।</span> वैश्विक विश्वसनीय।',
      'hero_desc': 'लीशा ट्रेडर्स प्रीमियम क्वालिटी की हरी इलायची, फ्रूट इलायची (पीली), स्प्लिट इलायची और बीज प्रदान करता है। बोडिनायाकनूर, भारत में हमारे अपने निजी बागानों और स्पाइसेस बोर्ड की नीलामियों से सीधे प्राप्त किया जाता है।',
      'hero_btn_explore': 'ग्रेड देखें →',
      'hero_btn_calc': 'मूल्य गणना →',
      'hero_badge_title': '100% निर्यात गुणवत्ता',
      'hero_badge_desc': 'चुनिंदा छंटाई और ग्रेड सत्यापन',
      'products_eyebrow': 'उत्पाद पोर्टफोलियो',
      'products_title': 'हमारी हरी इलायची के ग्रेड',
      'specs_detail': 'विवरण और स्पेक्स',
      'tag_popular': 'लोकप्रिय',
      'tag_royal': 'शाही चयन',
      'btn_calc_bulk': 'थोक कोटेशन की गणना करें →',
      'grade_6_lbl': '6.0 मिमी',
      'grade_7_lbl': '7.0 मिमी',
      'grade_75_lbl': '7.5 मिमी',
      'grade_75_8_lbl': '7.5 - 8.0 मिमी',
      'grade_8_lbl': '8.0 मिमी',
      'grade_85_lbl': '8.5 मिमी',
      'grade_9_lbl': '9.0 मिमी',
      'grade_6_sub': 'मानक आकार (मध्यम)',
      'grade_7_sub': 'प्रीमियम बोल्ड (AGEB)',
      'grade_75_sub': 'एलीट प्रीमियम बोल्ड',
      'grade_75_8_sub': 'सुपर बोल्ड निर्यात मिक्स',
      'grade_8_sub': 'सुपर एक्स्ट्रा बोल्ड (सुपर जंबो)',
      'grade_85_sub': 'इंपीरियल जंबो बोल्ड',
      'grade_9_sub': 'सुप्रीम रॉयल जंबो',
      'about_eyebrow': 'हमारी विरासत',
      'about_title': 'एक गुणवत्ता जिस पर आप भरोसा कर सकें, एक सेवा जिस पर आप निर्भर हो सकें।',
      'feat_1_title': 'प्रीमियम सॉर्टर गुणवत्ता',
      'feat_1_desc': 'समान रंग और न्यूनतम खाली फली सुनिश्चित करने के लिए डबल सॉर्ट और चुनिंदा हाथ से चुनी गई।',
      'feat_2_title': 'घरेलू और निर्यात शिपिंग',
      'feat_2_desc': 'राज्यों और वैश्विक बंदरगाहों पर समय पर डिलीवरी के लिए विश्वसनीय पैकेजिंग और कार्गो समन्वय।',
      'feat_3_title': 'नीलामी और किसान स्रोत',
      'feat_3_desc': 'विनियमित नीलामियों और लाइसेंस प्राप्त किसानों से प्रत्यक्ष संग्रह प्रामाणिक मूल सुनिश्चित करता है।',
      'feat_4_title': 'लचीली थोक क्षमताएं',
      'feat_4_desc': 'कोई भी आवश्यकता बड़ी नहीं है। 100 किलोग्राम से लेकर कंटेनर तक स्केलेबल आपूर्ति श्रृंखला।',
      'feat_5_title': 'प्रतिस्पर्धी प्रत्यक्ष मूल्य निर्धारण',
      'feat_5_desc': 'सीधे बढ़ते बेल्ट से सोर्सिंग हमें बेजोड़ मूल्य संरचनाएं प्रदान करने की अनुमति देती है।',
      'feat_6_title': 'दीर्घकालिक व्यापार फोकस',
      'feat_6_desc': 'थोक विक्रेताओं के साथ विश्वसनीय साझेदारी बनाने के लिए हम पारदर्शी मानकों पर काम करते हैं।',
      'process_eyebrow': 'मानक संचालन प्रक्रिया',
      'process_title': 'कटाई से लेकर आपके स्टॉक तक',
      'step_1_tab': '1. सोर्सिंग',
      'step_2_tab': '2. नीलामी',
      'step_3_tab': '3. छँटाई',
      'step_4_tab': '4. पैकेजिंग',
      'step_5_tab': '5. प्रेषण (डिस्पैच)',
      'step_details_title': 'चरण विवरण',
      'step_1_title': '1. चुनिंदा वृक्षारोपण सोर्सिंग',
      'step_1_desc': 'हम पश्चिमी घाट (थेनी, इडुक्की, मुन्नार क्षेत्रों) में स्थित सम्पदाओं के साथ सीधे संबंध बनाते हैं। इलायची की फली पूरी तरह से पकने पर तोड़ी जाती है। उच्च ऊंचाई से सोर्सिंग बीजों के भीतर वाष्पशील प्राकृतिक तेलों के उच्चतम घनत्व और एकाग्रता की गारंटी देती है।',
      'step_2_title': '2. विनियमित मसाला बोर्ड नीलामी',
      'step_2_desc': 'हम बोडिनायाकनूर और वंदनमेत्तु में भारतीय मसाला बोर्ड द्वारा पर्यवेक्षित आधिकारिक नीलामियों में सक्रिय रूप से भाग लेते हैं। यह पूर्ण पारदर्शिता, नियामक मंजूरी, रासायनिक परीक्षण अनुपालन और उचित मूल्य निर्धारण यांत्रिकी सुनिश्चित करता है।',
      'step_3_title': '3. सख्त यांत्रिक और मैनुअल ग्रेडिंग',
      'step_3_desc': 'खरीदे गए पॉड्स को आकार सीमा को सटीक रूप से परिभाषित करने के लिए छलनी से छाना जाता है (5.5 मिमी से 8 मिमी+)। इसके बाद, विजुअल इंस्पेक्टर नियंत्रित प्रयोगशाला ग्रेड सेटिंग्स के तहत हल्के पॉड्स, थ्रिप्स-क्षतिग्रस्त पॉड्स, विभाजित पॉड्स और बाहरी सामग्री को छांटते हैं।',
      'step_4_title': '4. नमी और सुगंध संरक्षण पैकेजिंग',
      'step_4_desc': 'वर्गीकृत इलायची को निगरानी वाली आर्द्रता के तहत संग्रहित किया जाता है। हम आर्डरों को खाद्य-ग्रेड, उच्च-बाधा वाले लेमिनेट्स में पैक करते हैं जो परिवेशी नमी के अवशोषण को रोकते हैं, जिससे स्वाद घनत्व सुरक्षित रहता है और पारगमन के दौरान हरा रंग बना रहता है।',
      'step_5_title': '5. सुरक्षित पारगमन रसद',
      'step_5_desc': 'चाहे कंटेनर द्वारा हो या कार्गो ट्रक द्वारा, शिपमेंट को स्पष्ट रूप से लेबल किया जाता है और सूखे कंटेनर लाइनर्स के साथ भेजा जाता. हम पूर्ण दस्तावेज़ीकरण, कर फाइलिंग (जीएसटी, निर्यात निकासी) संभालते हैं और खरीदारों के साथ रीयल-टाइम ट्रैकिंग नंबर साझा करते हैं।',
      'pack_eyebrow': 'पैकेजिंग विकल्प',
      'pack_title': 'ताजगी और सुगंध संरक्षण प्रणाली',
      'pack_desc': 'गर्मी और नमी के संपर्क में आने पर वाष्पशील आवश्यक तेल वाष्पित हो जाते हैं। हमारी विशेष पैकिंग प्रणालियाँ यह सुनिश्चित करती हैं कि इलायची आपके गोदाम तक उतनी ही ताजी सुगंध के साथ पहुँचे जितनी कि उसे सुखाते समय थी।',
      'pack_1kg_tab': '1 किलो पाउच',
      'pack_5kg_tab': '5 किलो बैग',
      'pack_10kg_tab': '10 किलो कार्टन',
      'pack_25kg_tab': '25 किलो थोक बोरी',
      'pack_select_lbl': 'पैकेजिंग का चयन करें...',
      'pack_point_1': 'नमी-नियंत्रित पॉली बैरियर',
      'pack_point_2': 'ऑक्सीजन अवशोषण स्ट्रिप्स',
      'pack_point_3': 'खाद्य-ग्रेड मोटी पन्नी लेमिनेट',
      'pack_point_4': 'पारगमन के लिए मजबूत बाहरी कार्टन',
      'calc_eyebrow': 'मूल्य और मात्रा अनुमानक',
      'calc_title': 'थोक कोटेशन अनुरोध कैलकुलेटर',
      'calc_label_grade': 'इलायची का आकार/ग्रेड चुनें',
      'calc_label_qty': 'लक्षित मात्रा चुनें',
      'calc_min_label': 'न्यूनतम: 5 किलो',
      'calc_max_label': 'अधिकतम: 5000 किलो',
      'calc_unit': 'किलोग्राम (KG)',
      'calc_summary_header': 'अनुमान सारांश',
      'calc_summary_grade': 'चयनित ग्रेड:',
      'calc_summary_vol': 'कुल मात्रा:',
      'calc_summary_pack': 'अनुशंसित पैकिंग:',
      'calc_summary_bags': 'कुल शिपिंग बैग:',
      'calc_summary_range': 'सांकेतिक मूल्य सीमा:',
      'calc_disclaimer': '*नोट: बोडिनायाकनूर नीलामी सूचकांकों के अनुसार इलायची की कीमतें दैनिक रूप से बदलती हैं। व्यापारिक नीति: कोई निःशुल्क नमूना नहीं दिया जाता; सभी नमूना अनुरोध दैनिक बाजार दरों पर सशुल्क हैं। वास्तविक मूल्य प्रत्यक्ष पूछताछ पर तय होगा।',
      'btn_calc_whatsapp': 'व्हाट्सएप के माध्यम से कोटेशन अनुरोध भेजें →',
      'btn_calc_email': 'ईमेल के माध्यम से कोटेशन अनुरोध भेजें',
      'gallery_eyebrow': 'विजुअल टूर',
      'gallery_title': 'प्रीमियम गुणवत्ता गैलरी',
      'btn_gallery_visit': 'फैक्ट्री विजिट का अनुरोध करें',
      'gallery_card_1_eyebrow': 'सोर्सिंग',
      'gallery_card_1_title': 'ताजा फसल',
      'gallery_card_2_eyebrow': 'यांत्रिक छँटाई',
      'gallery_card_2_title': 'छलनी छँटाई',
      'gallery_card_3_eyebrow': 'दृश्य निरीक्षण',
      'gallery_card_3_title': 'रंग छँटाई',
      'gallery_card_4_eyebrow': 'रसद (लॉजिस्टिक्स)',
      'gallery_card_4_title': 'सुरक्षित पैकिंग',
      'test_eyebrow': 'प्रशंसापत्र',
      'test_title': 'मसाला थोक विक्रेताओं और व्यापारियों द्वारा विश्वसनीय',
      'test_1_quote': 'लीशा ट्रेडर्स लगातार उच्च गुणवत्ता वाली इलायची प्रदान करता है। उनके माप अत्यंत सटीक हैं, जो हर शिपमेंट में एक समान आकार सुनिश्चित करते हैं। सोर्सिंग तेज और विश्वसनीय है।',
      'test_1_role': 'थोक व्यापारी, राजस्थान',
      'test_2_quote': 'हम 2 वर्षों से अधिक समय से लीशा ट्रेडर्स से 7 मिमी और 8 मिमी इलायची की सोर्सिंग कर रहे हैं। उनका नमी स्तर हमेशा 12% से नीचे होता है, जो शेल्फ जीवन स्थिरता के लिए आवश्यक है। असाधारण मूल्य निर्धारण!',
      'test_2_role': 'मसाला निर्यातक, बेंगलुरु',
      'test_3_quote': 'विश्वसनीय, पेशेवर और पारदर्शी। हम उनके पैकेजिंग विकल्पों की सराहना करते हैं। सूखे मौसम के दौरान भी, वे बिना किसी देरी के प्रीमियम ग्रेड वितरित करते हैं। अनुशंसित थोक व्यापारी।',
      'test_3_role': 'रिटेल चेन सप्लायर, केरल',
      'contact_eyebrow': 'आइए संपर्क करें',
      'contact_title': 'विश्वसनीय सोर्सिंग चैनल स्थापित करें',
      'contact_desc': 'सैंपल कार्ड देखने, अनुकूलित पैकेजिंग लेआउट का अनुरोध करने, या वर्तमान मसाला बोर्ड नीलामी लिस्टिंग पर विवरण का अनुरोध करने के लिए हमारे थोक डेस्क से बात करें।',
      'btn_contact_submit': 'थोक पूछताछ भेजें',
      'contact_info_phone_lbl': 'फोन / व्हाट्सएप',
      'contact_info_email_lbl': 'कॉर्पोरेट ईमेल',
      'contact_info_loc_lbl': 'ट्रेडिंग हब और फैक्ट्री',
      'contact_info_loc_val': 'बोडिनायाकनूर, थेनी जिला, तमिलनाडु - 625513, भारत',
      'foot_desc': 'हरी इलायची, फ्रूट इलायची, स्प्लिट्स और बीजों के प्रीमियम थोक आपूर्तिकर्ता। हमारे निजी बागानों और स्पाइसेस बोर्ड की नीलामियों से प्राप्त, बोडिनायाकनूर, तमिलनाडु में संसाधित।',
      'foot_site_lbl': 'साइटमैप',
      'foot_grades_lbl': 'इलायची के ग्रेड',
      'foot_source_lbl': 'विनियमित सोर्सिंग',
      'foot_link_auction': 'नीलामी सत्यापन',
      'foot_link_certs': 'गुणवत्ता प्रमाणपत्र',
      'foot_link_desk': 'थोक निर्यातक डेस्क',
      'foot_link_factory': 'फैक्ट्री पूछताछ',
      'foot_rights': '© 2026 लीशा ट्रेडर्स। सर्वाधिकार सुरक्षित। बोडिनायाकनूर, भारत में समन्वित।',
      'foot_policy': 'मसाला बोर्ड लाइसेंस | व्यापार और निर्यात नीति | आपूर्ति की शर्तें',
      'modal_spec_sieve_lbl': 'छलनी का आकार व्यास',
      'modal_spec_moisture_lbl': 'नमी की मात्रा',
      'modal_spec_weight_lbl': 'लीटर वजन (g/l)',
      'modal_spec_color_lbl': 'रंग प्रोफ़ाइल',
      'modal_spec_summary_lbl': 'उत्पाद सारांश',
      'modal_spec_btn_quote': 'मात्रा का अनुमान लगाएं',
      'modal_spec_btn_close': 'स्पेक्स बंद करें',
      'calc_pack_1kg': '1 किलो पाउच (कार्टन के अंदर पैक)',
      'calc_pack_5kg': '5 किलो वैक्यूम सील बैग',
      'calc_pack_10kg': '10 किलो मल्टी-बैरियर बॉक्स',
      'calc_pack_25kg': 'वाष्प-बाधा लाइनर के साथ 25 किलो हेवी-ड्यूटी गनी बैग',
      'calc_units_label': 'यूनिट',
      'calc_price_contact': 'मूल्य निर्धारण के लिए संपर्क करें',
      'contact_alert_success': 'थोक पूछताछ भेजने के लिए धन्यवाद! तत्काल कैटलॉग लॉक के लिए व्हाट्सएप डेस्क खोल रहे हैं।',
      'loading_text': 'लोड हो रहा है',
      'btn_write_review': 'समीक्षा लिखें',
      'review_modal_title': 'अपनी समीक्षा साझा करें',
      'review_label_name': 'आपका नाम',
      'review_label_role': 'भूमिका / स्थान / कंपनी',
      'review_label_rating': 'रेटिंग',
      'review_label_text': 'आपकी समीक्षा',
      'review_btn_submit': 'समीक्षा सबमिट करें',
      'review_alert_success': 'आपकी समीक्षा के लिए धन्यवाद! आपकी समीक्षा बोर्ड पर जोड़ दी गई है।',
      'review_delete_confirm': 'क्या आप वाकई इस समीक्षा को हटाना चाहते हैं?',
      'prod_tab_green': 'हरी इलायची',
      'prod_tab_yellow': 'पीली/हल्की हरी इलायची',
      'grade_6_sub_yellow': 'मानक पीला ग्रेड (MGB)',
      'grade_7_sub_yellow': 'प्रीमियम बोल्ड पीला ग्रेड (MGEB)',
      'grade_75_sub_yellow': 'कुलीन प्रीमियम पीला बोल्ड',
      'grade_75_8_sub_yellow': 'सुपर पीला निर्यात मिश्रण',
      'grade_8_sub_yellow': 'सुपर एक्स्ट्रा पीला बोल्ड (जंबो)',
      'grade_85_sub_yellow': 'शाही पीला जंबो बोल्ड',
      'grade_9_sub_yellow': 'सर्वोच्च रॉयल पीला जंबो',
      'calc_label_variety': 'इलायची की किस्म',
      'calc_empty_cart': 'अभी तक कोई आइटम नहीं जोड़ा गया है। किस्म, आकार और मात्रा का चयन करें, फिर \'पूछताछ सूची में जोड़ें\' पर क्लिक करें।',
      'table_th_item': 'विवरण',
      'table_th_qty': 'मात्रा',
      'table_th_bags': 'बैग',
      'table_th_price': 'मूल्य',
      'calc_summary_items': 'कुल आइटम:',
      'btn_calc_add_item': 'पूछताछ सूची में जोड़ें +',
      'calc_alert_empty_submit': 'कृपया पहले अपनी अनुमान सूची में कम से कम एक इलायची ग्रेड आकार जोड़ें।',
      'hero_btn_sample': 'नमूना अनुरोध करें →',
      'modal_spec_btn_sample': 'नमूना अनुरोध करें',
      'about_founder_desc': '2012 में <strong>मुरुगादास बी</strong> द्वारा स्थापित, लीशा ट्रेडर्स बोडिनायाकनूर इलायची बेल्ट की समृद्ध मिट्टी में निहित है। <strong>12 से अधिक प्रतिष्ठित स्पाइसेस बोर्ड नीलामी अनुमतियों</strong> और हमारे अपने हरे-भरे <strong>निजी इलायची बागानों</strong> के समर्थन के साथ, हम आपको सीधे स्रोत से बेहतरीन हरी, पीली, स्प्लिट और बीज प्रदान करते हैं।',
      'why_biz_subheading': 'एक प्रमुख बागान मालिक और खरीदार के रूप में, लीशा ट्रेडर्स प्रीमियम भारतीय इलायची की एक पूरी श्रृंखला प्रदान करता है—जिसमें हरी, पीली, स्प्लिट और बीज शामिल हैं—जिन्हें सीधे हमारे अपने खेतों और नीलामी केंद्रों से प्राप्त किया जाता है।',
      'why_cta_desc': 'चाहे आप थोक व्यापारी, वितरक, खुदरा विक्रेता या निर्यातक हों, लीशा ट्रेडर्स विश्वसनीय सेवा और पारदर्शी संचार के साथ प्रीमियम-गुणवत्ता वाली इलायची की आपूर्ति करने के लिए प्रतिबद्ध है।',
      'cred_1': '&#10003; GST पंजीकृत',
      'cred_2': '&#10003; थोक आपूर्तिकर्ता',
      'cred_3': '&#10003; थोक ऑर्डर का स्वागत है',
      'cred_4': '&#10003; सुरक्षित पैकेजिंग',
      'cred_5': '&#10003; गुणवत्ता जांची गई',
      'cred_6': '&#10003; विश्वसनीय समर्थन',
      'faq_eyebrow': 'सामान्य प्रश्न',
      'faq_title_p1': 'अक्सर पूछे जाने वाले',
      'faq_title_p2': 'प्रश्न',
      'faq_1_q': 'आप किस प्रकार और ग्रेड की इलायची की आपूर्ति करते हैं?',
      'faq_1_a': '<p>हम हर आवश्यकता को पूरा करने के लिए प्रीमियम भारतीय इलायची की एक पूरी श्रृंखला की आपूर्ति करते हैं:</p><ul style="margin-top:10px; margin-left: 20px; list-style-type: disc;"><li><strong>हरी इलायची:</strong> 6.0 मिमी, 7.0 मिमी, 7.5 मिमी, 8.0 मिमी, 8.5 मिमी और 9.0 मिमी जंबो पॉड्स सहित कई ग्रेड।</li><li><strong>फ्रूट इलायची (पीली/हल्की पीली):</strong> विशेष रूप से प्राप्त और छंटनी की गई हल्की पीली फलियाँ।</li><li><strong>स्प्लिट इलायची:</strong> पीसने और निकालने के लिए उपयुक्त उच्च गुणवत्ता वाली स्प्लिट फलियाँ।</li><li><strong>इलायची के बीज:</strong> पाक और व्यावसायिक उपयोग के लिए छांटे गए शुद्ध इलायची के बीज।</li></ul>',
      'faq_2_q': 'क्या आप थोक ऑर्डर स्वीकार करते हैं?',
      'faq_2_a': 'हाँ। लीशा ट्रेडर्स थोक और बल्क ऑर्डर में माहिर है। अपनी मात्रा आवश्यकताओं के साथ हमसे संपर्क करें, और हमारी टीम एक अनुकूलित उद्धरण प्रदान करेगी।',
      'faq_3_q': 'मैं कोटेशन का अनुरोध कैसे कर सकता हूँ?',
      'faq_3_a': 'आप हमारे \'बल्क कोटेशन का अनुरोध करें\' कैलकुलेटर का उपयोग करके, संपर्क फ़ॉर्म सबमिट करके, या सीधे व्हाट्सएप या ईमेल के माध्यम से संपर्क करके कोटेशन का अनुरोध कर सकते हैं।',
      'faq_4_q': 'क्या आप पूरे भारत में डिलीवरी करते हैं?',
      'faq_4_a': 'हां, हमारे पास एक मजबूत लॉजिस्टिक्स नेटवर्क है और हम भारत के सभी राज्यों में थोक विक्रेताओं और वितरकों को प्रीमियम इलायची की आपूर्ति करते हैं।',
      'faq_5_q': 'उत्पादों की पैकेजिंग कैसे की जाती है?',
      'faq_5_a': 'ताजगी सुनिश्चित करने और पारगमन के दौरान नमी से होने वाले नुकसान को रोकने के लिए इलायची को उच्च गुणवत्ता वाले गनी बैग या कस्टम निर्यात-ग्रेड पैकेजिंग में सुरक्षित रूप से पैक किया जाता है।',
      'faq_6_q': 'क्या मैं पैकेजिंग को कस्टमाइज़ कर सकता हूँ?',
      'faq_6_a': 'हां, हम थोक खरीदारों के लिए अनुकूलित पैकेजिंग समाधान प्रदान करते हैं। कृपया कोटेशन का अनुरोध करते समय अपनी विशिष्ट पैकेजिंग आवश्यकताओं का उल्लेख करें।',
      'faq_7_q': 'आप कौन सी भुगतान विधियां स्वीकार करते हैं?',
      'faq_7_a': 'हम बैंक ट्रांसफर (NEFT/RTGS) सहित मानक B2B भुगतान विधियों को स्वीकार करते हैं। ऑर्डर को अंतिम रूप देने के दौरान विशिष्ट भुगतान शर्तों पर चर्चा की जा सकती है।',
      'faq_8_q': 'मैं लीशा ट्रेडर्स से कैसे संपर्क कर सकता हूँ?',
      'faq_8_a': 'आप फोन, व्हाट्सएप, ईमेल के माध्यम से हमसे जुड़ सकते हैं, या बोडिनायाकनूर में हमारे व्यापारिक केंद्र पर जा सकते हैं। सभी संपर्क विवरण \'संपर्क\' अनुभाग में उपलब्ध हैं।',
      'faq_footer_title': 'क्या अभी भी प्रश्न हैं?',
      'faq_footer_desc': 'हमारी टीम उत्पाद जानकारी, कोटेशन और थोक पूछताछ में आपकी मदद करने के लिए तैयार है।',
      'contact_main_eyebrow': 'संपर्क',
      'contact_main_title_p1': 'आइए मिलकर व्यापार',
      'contact_main_title_p2': 'बनाएं।',
      'contact_main_title_p3': '',
      'contact_lbl_phone': 'फ़ोन नंबर',
      'contact_lbl_whatsapp': 'व्हाट्सएप',
      'contact_lbl_email': 'ईमेल',
      'contact_lbl_hours': 'काम के घंटे',
      'contact_val_hours': 'सोमवार – शनिवार<br>सुबह 9:00 बजे – शाम 6:00 बजे',
      'contact_lbl_address': 'व्यावसायिक पता',
      'hub_title': 'हमें खोजें',
      'hub_desc': 'थोक पूछताछ के लिए हमारे कार्यालय आएं या हमसे जुड़ें।',
      'hub_cred_title': 'व्यावसायिक साख',
      'cta_bottom_title': 'प्रीमियम इलायची प्राप्त करने के लिए तैयार हैं?',
      'cta_bottom_btn_quote': 'थोक कोटेशन का अनुरोध करें',
      'cta_bottom_btn_wa': 'हमें व्हाट्सएप करें',
      'footer_links_title': 'त्वरित लिंक',
      'fl_home': 'होम',
      'fl_about': 'हमारे बारे में',
      'fl_prod': 'उत्पाद',
      'fl_process': 'हमारी प्रक्रिया',
      'fl_pack': 'पैकेजिंग',
      'fl_gallery': 'गैलरी',
      'fl_quote': 'कोट कैलकुलेटर',
      'fl_contact': 'संपर्क',
      'footer_legal_title': 'कानूनी',
      'fl_terms': 'नियम व शर्तें',
      'fl_privacy': 'गोपनीयता नीति',
      'fl_disc': 'अस्वीकरण',
      'footer_contact_title': 'संपर्क',
      'fc_wa': 'व्हाट्सएप चैट',
      'fc_address': 'बोडिनायाकनूर, थेनी जिला, तमिलनाडु - 625513, भारत',
      'fc_hours': 'सोम - शनि: सुबह 9:00 बजे - शाम 6:00 बजे',
      'footer_copy': '© 2026 लीशा ट्रेडर्स। सर्वाधिकार सुरक्षित।',
      'footer_design': 'उत्कृष्टता के साथ डिज़ाइन किया गया।',
      'modal_grade_type': 'प्रीमियम मध्यम बोल्ड ग्रेड',
      'why_trust_title': 'विश्वसनीय व्यावसायिक व्यवहार',
      'wa_msg_empty': 'नमस्ते लीशा ट्रेडर्स,\\n\\nमैं थोक इलायची ग्रेड उपलब्धता और कस्टम कोटेशन के बारे में जानकारी का अनुरोध करना चाहूंगा।',
      'wa_msg_hello': 'नमस्ते लीशा ट्रेडर्स,\\n\\nमैं निम्नलिखित थोक इलायची आवश्यकताओं के लिए औपचारिक थोक कोटेशन का अनुरोध करना चाहूंगा:',
      'wa_msg_id': 'पूछताछ आईडी',
      'wa_msg_items': 'अनुरोधित आइटम',
      'wa_msg_end': 'कृपया उपलब्धता, दैनिक नीलामी दर सूचकांक और हमारे प्रेषण के लिए वितरण कार्यक्रम साझा करें।\\n\\nधन्यवाद!',
      'wa_packed_in': 'पैकेजिंग',
      'wa_bags': 'बैग',
      'contact_legal_terms': 'मैंने पढ़ लिया है और सहमत हूँ',
      'contact_legal_terms_link': 'नियम व शर्तें',
      'contact_legal_privacy': 'मैंने पढ़ लिया है और समझ लिया है',
      'contact_legal_privacy_link': 'गोपनीयता नीति',
      'contact_legal_confirm': 'मैं पुष्टि करता हूँ कि दी गई जानकारी सटीक और पूर्ण है और मुझे यह व्यावसायिक पूछताछ प्रस्तुत करने के लिए अधिकृत किया गया है।',
      'contact_legal_disclaimer': 'यह फॉर्म जमा करके, आप लीशा ट्रेडर्स से व्यावसायिक कोटेशन का अनुरोध कर रहे हैं। यह सबमिशन कोई खरीद अनुबंध नहीं बनाता है या किसी भी पक्ष को लेनदेन पूरा करने के लिए बाध्य नहीं करता है। कोई भी बिक्री स्वीकृत कोटेशन और जहां लागू हो, पार्टियों के बीच निष्पादित एक अलग बिक्री समझौते द्वारा शासित होगी।',
      'why_eyebrow': 'हमें क्यों चुनें',
      'why_biz_title': 'व्यवसायों द्वारा विश्वसनीय। <br><span style="color: #4eb270;">गुणवत्ता</span> पर निर्मित।',
      'footer_about_desc': 'लीशा ट्रेडर्स प्रीमियम भारतीय हरी इलायची का एक विश्वसनीय आपूर्तिकर्ता है, जो थोक विक्रेताओं, खुदरा विक्रेताओं, वितरकों और निर्यातकों को गुणवत्ता-केंद्रित सोर्सिंग और विश्वसनीय सेवा प्रदान करता है।',
      'why_title_p1': 'व्यवसायों द्वारा',
      'why_title_p2': 'विश्वसनीय।',
      'why_title_p3': 'गुणवत्ता पर निर्मित।',
      'why_ft_quality': 'प्रीमियम गुणवत्ता',
      'why_ft_quality_desc': 'लगातार गुणवत्ता मानकों को बनाए रखने के लिए प्रत्येक बैच को सावधानीपूर्वक प्राप्त और वर्गीकृत किया जाता है।',
      'why_ft_procure': 'विश्वसनीय खरीद',
      'why_ft_procure_desc': 'हम विश्वसनीय नीलामी बाजारों और सत्यापित आपूर्तिकर्ताओं से प्रीमियम इलायची प्राप्त करते हैं।',
      'why_ft_trans': 'पारदर्शी व्यवसाय',
      'why_ft_trans_desc': 'स्पष्ट कोटेशन, ईमानदार संचार, और सीधा मूल्य निर्धारण।',
      'why_ft_pack': 'सुरक्षित पैकेजिंग',
      'why_ft_pack_desc': 'परिवहन के दौरान ताजगी बनाए रखने के लिए उत्पादों को सावधानीपूर्वक पैक किया जाता है।',
      'why_ft_del': 'विश्वसनीय वितरण',
      'why_ft_del_desc': 'पूरे भारत में समय पर प्रेषण के साथ ऑर्डर कुशलतापूर्वक संसाधित किए जाते हैं।',
      'why_ft_cust': 'ग्राहक पहले',
      'why_ft_cust_desc': 'हम भरोसेमंद सेवा और समर्थन के माध्यम से दीर्घकालिक संबंध बनाने पर ध्यान केंद्रित करते हैं।',
      'why_cta_title': 'आइए एक दीर्घकालिक व्यावसायिक संबंध बनाएं।',
      'table_header_grade': 'ग्रेड और आकार',
      'table_sub_6': 'स्टैंडर्ड / मध्यम',
      'table_sub_7': 'प्रीमियम बोल्ड (AGEB)',
      'table_sub_75': 'एलीट प्रीमियम बोल्ड',
      'table_sub_75_8': 'सुपर बोल्ड एक्सपोर्ट मिक्स',
      'table_sub_8': 'सुपर एक्स्ट्रा बोल्ड (सुपर जंबो)',
      'table_sub_85': 'इंपीरियल जंबो बोल्ड',
      'table_sub_9': 'सुप्रीम रॉयल जंबो',
      'contact_main_title_p3': 'बनाएं।',
      'why_f1_title': 'सीधे नीलामी और बागानों से प्राप्त',
      'why_f1_desc': 'बोदिनायक्कनूर में प्रमाणित स्पाइसेस बोर्ड नीलामियों और निजी बागानों से सीधे प्राप्त, प्रामाणिक गुणवत्ता और शुद्ध बैच की गारंटी।',
      'why_f2_title': 'सटीक छलनी ग्रेडिंग',
      'why_f2_desc': 'प्रत्येक लॉट को 6.0 मिमी से 9.0 मिमी तक सटीक छलनी से मशीन-ग्रेड किया जाता है ताकि समान आकार, घनत्व और रंग सुनिश्चित हो सके।',
      'why_f3_title': 'नियंत्रित नमी (<12%)',
      'why_f3_desc': '12% से कम प्रयोगशाला-सत्यापित नमी स्तर के साथ राष्ट्रीय मसाला मानकों का कड़ाई से पालन, फफूंद से सुरक्षा और लंबी शेल्फ-लाइफ।',
      'why_f4_title': 'लचीली थोक आपूर्ति',
      'why_f4_desc': 'क्षेत्रीय खुदरा विक्रेताओं के लिए 50 किग्रा ट्रायल ऑर्डर से लेकर अंतरराष्ट्रीय आयातकों के लिए बहु-टन कंटेनर लोड (FCL) तक आसान आपूर्ति।',
      'why_f5_title': 'सुरक्षित सुगंध-सील पैकेजिंग',
      'why_f5_desc': 'मल्टी-लेयर फूड-ग्रेड पॉली-बैरियर पाउच और मास्टर कार्टन जो परिवहन और भंडारण के दौरान प्राकृतिक सुगंधित तेलों को सुरक्षित रखते हैं।',
      'why_f6_title': 'पारदर्शी बाजार-आधारित दरें',
      'why_f6_desc': 'दैनिक मूल्य निर्धारण बोदिनायक्कनूर नीलामी दरों से जुड़ा है, जिससे खरीदारों को स्पष्टता, उचित मूल्य और विश्वसनीय चक्र मिलता है।',
      'faq_q1': 'आप कौन से इलायची ग्रेड पेश करते हैं?',
      'faq_a1': 'हम 6.0 मिमी (मीडियम) से लेकर 9.0 मिमी (सुप्रीम रॉयल जंबो) तक के सभी मानक भारतीय आकार प्रदान करते हैं, जिसमें AGEB (7.0 मिमी), एलीट बोल्ड (7.5 मिमी) और सुपर एक्स्ट्रा बोल्ड (8.0 मिमी) शामिल हैं। हम फ्रूट इलायची (पीली), स्प्लिट इलायची और बीज भी उपलब्ध कराते हैं।',
      'faq_q2': 'न्यूनतम ऑर्डर मात्रा (MOQ) क्या है?',
      'faq_a2': 'हमारा मानक थोक MOQ 20 किग्रा (एक मास्टर कार्टन) है। ट्रायल ऑर्डर या क्षेत्रीय खुदरा वितरकों के लिए छोटी मात्रा की व्यवस्था की जा सकती है। हम निर्यात के लिए पूर्ण कंटेनर लोड (FCL) भी पूरा करते हैं।',
      'faq_q3': 'क्या मैं थोक ऑर्डर देने से पहले सैंपल मांग सकता हूँ?',
      'faq_a3': 'हाँ, सभी ग्रेड के लिए सैंपल पैक (50g, 100g, 250g, 500g) उपलब्ध हैं। मानक थोक व्यापार नीति के अनुसार, सैंपल लागत और कूरियर शुल्क लागू होते हैं जिन्हें आपके शुरुआती व्यावसायिक शिपमेंट में समायोजित किया जाता है।',
      'faq_q4': 'आपकी इलायची कहाँ से प्राप्त की जाती है?',
      'faq_a4': 'हमारी सभी इलायची पश्चिमी घाट में हमारे निजी बागानों और बोदिनायक्कनूर तथा वंदनमेत्तु में प्रमाणित स्पाइसेस बोर्ड नीलामियों से प्राप्त की जाती है — जो भारत की इलायची राजधानी है।',
      'faq_q5': 'परिवहन के दौरान आप इलायची की ताजगी कैसे सुनिश्चित करते हैं?',
      'faq_a5': 'हम 12% से कम नमी बनाए रखते हैं और नमी अवशोषण रोकने के लिए हाई-बैरियर फूड-ग्रेड पॉली लाइनर्स और सीलबंद नालीदार मास्टर कार्टन में पैक करते हैं।',
      'faq_q6': 'क्या आप अंतरराष्ट्रीय निर्यात का समर्थन करते हैं?',
      'faq_a6': 'हाँ, हम मध्य पूर्व, दक्षिण पूर्व एशिया, यूरोप और अमेरिका में शिपमेंट के लिए पूर्ण दस्तावेज़ीकरण, फाइटोसैनिटरी प्रमाणपत्र, स्पाइसेस बोर्ड निर्यात क्लीयरेंस और पोर्ट लॉजिस्टिक्स संभालते हैं।'
    },
    'ta': {
      'stat_years': 'ஆண்டுகளின் பாரம்பரியம்',
      'stat_tons': 'டன்கள் விநியோகிக்கப்பட்டது',
      'stat_partners': 'மொத்த விற்பனை கூட்டாளர்கள்',
      'why_biz_label': 'எங்களை ஏன் தேர்வு செய்ய வேண்டும்',
      'why_feat_1_title': 'பிரீமியம் தரம்',
      'why_feat_1_desc': 'நிலையான தர தரநிலைகளை பராமரிக்க ஒவ்வொரு தொகுதியும் கவனமாக பெறப்பட்டு தரம் பிரிக்கப்படுகிறது.',
      'why_feat_2_title': 'நம்பகமான கொள்முதல்',
      'why_feat_2_desc': 'நம்பகமான ஏல சந்தைகள் மற்றும் சரிபார்க்கப்பட்ட சப்ளையர்களிடமிருந்து பிரீமியம் ஏலக்காயை நாங்கள் பெறுகிறோம்.',
      'why_feat_3_title': 'வெளிப்படையான வணிகம்',
      'why_feat_3_desc': 'தெளிவான மேற்கோள்கள், நேர்மையான தொடர்பு மற்றும் நேரடியான விலை நிர்ணயம்.',
      'why_feat_4_title': 'பாதுகாப்பான பேக்கேஜிங்',
      'why_feat_4_desc': 'போக்குவரத்தின் போது புத்துணர்ச்சியைப் பாதுகாக்க தயாரிப்புகள் கவனமாக பேக் செய்யப்படுகின்றன.',
      'why_feat_5_title': 'நம்பகமான விநியோகம்',
      'why_feat_5_desc': 'இந்தியா முழுவதும் சரியான நேரத்தில் அனுப்புவதன் மூலம் ஆர்டர்கள் திறமையாக செயலாக்கப்படுகின்றன.',
      'why_feat_6_title': 'வாடிக்கையாளருக்கு முன்னுரிமை',
      'why_feat_6_desc': 'நம்பகமான சேவை மற்றும் ஆதரவின் மூலம் நீண்டகால உறவுகளை உருவாக்குவதில் நாங்கள் கவனம் செலுத்துகிறோம்.',
      'why_stat_1_lbl': 'மொத்த ஆர்டர்கள் வழங்கப்பட்டன',
      'why_stat_2_lbl': 'தரம் சரிபார்க்கப்பட்டது',
      'why_stat_3_lbl': 'வாடிக்கையாளர் ஆதரவு',
      'why_badge_gst': '&#10003; GST விலைப்பட்டியல் கிடைக்கும்',
      'why_badge_wholesale': '&#10003; மொத்த ஆர்டர்கள்',
      'why_badge_bulk': '&#10003; மொத்த வழங்கல்',
      'why_badge_quality': '&#10003; தரம் சரிபார்க்கப்பட்டது',
      'why_badge_packaging': '&#10003; பாதுகாப்பான பேக்கேஜிங்',
      'why_badge_support': '&#10003; பொறுப்பான ஆதரவு',
      'why_cta_btn_quote': 'மொத்த விலையைக் கோருங்கள்',
      'why_cta_btn_contact': 'எங்களை தொடர்பு கொள்ள',
      'nav_home': 'முகப்பு',
      'nav_products': 'தயாரிப்புகள்',
      'nav_about': 'எங்களைப் பற்றி',
      'nav_process': 'எங்கள் செயல்முறை',
      'nav_pack': 'பேக்கேஜிங்',
      'nav_calc': 'விலை கால்குலேட்டர்',
      'nav_gallery': 'கேலரி',
      'nav_contact': 'தொடர்பு',
      'btn_get_quote': 'விவரம் பெற →',
      'hero_eyebrow': 'பிரீமியம் இந்திய ஏலக்காய்',
      'hero_title': 'இணையற்ற நறுமணம். <br><span>சரியான தரம்.</span> உலகளவில் நம்பகமானது.',
      'hero_desc': 'லீஷா டிரேடர்ஸ் பிரீமியம் தரமான பச்சை ஏலக்காய், பழ ஏலக்காய் (மஞ்சள்), உடைந்த ஏலக்காய் மற்றும் விதைகளை வழங்குகிறது. போடிநாயக்கனூரில் உள்ள எங்களின் சொந்த தோட்டங்களிலிருந்தும், ஸ்பைசஸ் போர்டு ஏலங்களிலிருந்தும் நேரடியாகப் பெறப்படுகிறது.',
      'hero_btn_explore': 'ரகங்களை ஆராயுங்கள் →',
      'hero_btn_calc': 'விலையை கணக்கிடுங்கள் →',
      'hero_badge_title': '100% ஏற்றுமதி தரம்',
      'hero_badge_desc': 'கைமுறையாக தரம் பிரிக்கப்பட்டது',
      'products_eyebrow': 'தயாரிப்புகள்',
      'products_title': 'எங்கள் ஏலக்காய் ரகங்கள்',
      'specs_detail': 'விவரம் & அளவீடு',
      'tag_popular': 'பிரபலமானது',
      'tag_royal': 'அரச தேர்வு',
      'btn_calc_bulk': 'மொத்த விலை கணக்கிட →',
      'grade_6_lbl': '6.0 மிமீ',
      'grade_7_lbl': '7.0 மிமீ',
      'grade_75_lbl': '7.5 மிமீ',
      'grade_75_8_lbl': '7.5 - 8.0 மிமீ',
      'grade_8_lbl': '8.0 மிமீ',
      'grade_85_lbl': '8.5 மிமீ',
      'grade_9_lbl': '9.0 மிமீ',
      'grade_6_sub': 'சாதாரண நடுத்தர அளவு',
      'grade_7_sub': 'பிரீமியம் போல்ட் (AGEB)',
      'grade_75_sub': 'எலைட் பிரீமியம் போல்ட்',
      'grade_75_8_sub': 'ஏற்றுமதி போல்ட் கலவை',
      'grade_8_sub': 'சூப்பர் எக்ஸ்ட்ரா போல்ட்',
      'grade_85_sub': 'இம்பீரியல் ஜம்போ போல்ட்',
      'grade_9_sub': 'சுப்ரீம் ராயல் ஜம்போ',
      'about_eyebrow': 'எங்கள் பாரம்பரியம்',
      'about_founder_desc': '2012 ஆம் ஆண்டில் <strong>முருகதாஸ் பி</strong> என்பவரால் தொடங்கப்பட்ட லீஷா டிரேடர்ஸ், போடிநாயக்கனூர் ஏலக்காய் பெல்ட்டின் வளமான மண்ணில் வேரூன்றியுள்ளது. <strong>12-க்கும் மேற்பட்ட மதிப்புமிக்க ஸ்பைசஸ் போர்டு ஏல அனுமதிகள்</strong> மற்றும் எங்களின் சொந்த <strong>ஏலக்காய் தோட்டங்களின்</strong> ஆதரவுடன், மிகச்சிறந்த பச்சை, மஞ்சள், உடைந்த ஏலக்காய் மற்றும் விதைகளை நேரடியாக விளைநிலத்திலிருந்தே வழங்குகிறோம்.',
      'about_title': 'நீங்கள் நம்பக்கூடிய தரம், நீங்கள் சார்ந்திருக்கக்கூடிய சேவை.',
      'feat_1_title': 'பிரீமியம் தரம்',
      'feat_1_desc': 'சீரான நிறம் மற்றும் சிறந்த காய்களை உறுதி செய்ய கைமுறையாக தரம் பிரிக்கப்பட்டது.',
      'feat_2_title': 'உள்நாட்டு மற்றும் ஏற்றுமதி கப்பல்',
      'feat_2_desc': 'மாநிலங்கள் மற்றும் உலகளாவிய துறைமுகங்களில் சரியான நேரத்தில் விநியோகிக்க நம்பகமான போக்குவரத்து.',
      'feat_3_title': 'நேரடி விவசாய கொள்முதல்',
      'feat_3_desc': 'அங்கீகரிக்கப்பட்ட ஏல மையங்கள் மற்றும் விவசாயிகளிடமிருந்து நேரடியாக பெறப்படுகிறது.',
      'feat_4_title': 'நெகிழ்வான மொத்த விநியோகம்',
      'feat_4_desc': '100 கிலோ முதல் கொள்கலன்கள் வரை அளவிடக்கூடிய விநியோகச் சங்கிலி.',
      'feat_5_title': 'நேரடி போட்டி விலை',
      'feat_5_desc': 'விவசாய மண்டலங்களில் இருந்து நேரடியாக கொள்முதல் செய்வதால் சிறந்த விலையில் வழங்க முடிகிறது.',
      'feat_6_title': 'நீண்ட கால வணிக கவனம்',
      'feat_6_desc': 'மொத்த வியாபாரிகளுடன் நீண்ட கால மற்றும் நம்பகமான கூட்டாண்மையை உருவாக்க நாங்கள் வெளிப்படையான முறையில் செயல்படுகிறோம்.',
      'process_eyebrow': 'செயல்முறை வழிமுறை',
      'process_title': 'அறுவடை முதல் உங்கள் கிடங்கு வரை',
      'step_1_tab': '1. கொள்முதல்',
      'step_2_tab': '2. ஏலம்',
      'step_3_tab': '3. தரம் பிரித்தல்',
      'step_4_tab': '4. பேக்கேஜிங்',
      'step_5_tab': '5. அனுப்புதல்',
      'step_details_title': 'செயல்முறை விவரங்கள்',
      'step_1_title': '1. சிறந்த தோட்ட கொள்முதல்',
      'step_1_desc': 'மேற்குத் தொடர்ச்சி மலைப் பகுதியில் (தேனி, இடுக்கி, மூணார்) உள்ள தோட்டங்களுடன் நேரடித் தொடர்புகளை ஏற்படுத்துகிறோம். ஏலக்காய் காய்கள் முழுமையாக பழுத்தவுடன் பறிக்கப்படுகின்றன. உயர்ந்த மலைப்பகுதிகளில் இருந்து கொள்முதல் செய்வது விதைகளுக்குள் அதிக அடர்த்தியான அரோமா எண்ணெய்களை உறுதி செய்கிறது.',
      'step_2_title': '2. அங்கீகரிக்கப்பட்ட ஏலங்கள்',
      'step_2_desc': 'போடிநாயக்கனூர் மற்றும் வந்தன்மேடு ஆகிய இடங்களில் இந்திய நறுமணப் பொருள் வாரியத்தின் மேற்பார்வையில் நடைபெறும் ஏலங்களில் நாங்கள் தீவிரமாகப் பங்கேற்கிறோம். இது முழுமையான வெளிப்படைத்தன்மை, தர சோதனைகள் மற்றும் சிறந்த விலையை உறுதி செய்கிறது.',
      'step_3_title': '3. இயந்திர மற்றும் கைமுறை தரம் பிரித்தல்',
      'step_3_desc': 'வாங்கப்பட்ட காய்கள் அளவை துல்லியமாக வரையறுக்க இயந்திரம் மூலம் சல்லடை செய்யப்படுகின்றன. அடுத்து, ஆய்வாளர்கள் சேதமடைந்த காய்கள் மற்றும் பிற பொருட்களை ஆய்வக அமைப்புகளின் கீழ் கைமுறையாக தரம் பிரிக்கிறார்கள்.',
      'step_4_title': '4. ஈரப்பதம் & நறுமணப் பாதுகாப்பு',
      'step_4_desc': 'தரம் பிரிக்கப்பட்ட ஏலக்காய் கட்டுப்படுத்தப்பட்ட ஈரப்பதத்தில் சேமிக்கப்படுகிறது. போக்குவரத்தின் போது நறுமணத்தையும் பச்சை நிறத்தையும் பாதுகாக்க, சுற்றுப்புற ஈரப்பதத்தை தடுக்கும் உணவுத் தரம் வாய்ந்த பேக்குகளில் பேக் செய்கிறோம்.',
      'step_5_title': '5. பாதுகாப்பான போக்குவரத்து',
      'step_5_desc': 'போக்குவரத்து வாகனங்கள் அல்லது கொள்கலன்கள் மூலம் ஏற்றுமதி செய்யப்படும் பொருட்கள் பாதுகாப்பாக லேபிளிடப்பட்டு அனுப்பப்படுகின்றன. தேவையான அனைத்து ஆவணங்கள், ஏற்றுமதி அனுமதிகள் ஆகியவற்றை நாங்கள் கவனித்து கொள்கிறோம்.',
      'pack_eyebrow': 'பேக்கேஜிங் விருப்பங்கள்',
      'pack_title': 'நறுமணப் பாதுகாப்பு அமைப்புகள்',
      'pack_desc': 'வெப்பம் மற்றும் ஈரப்பதம் படும்போது ஏலக்காயின் நறுமண எண்ணெய்கள் ஆவியாகின்றன. எங்கள் சிறப்பு பேக்கிங் அமைப்புகள் ஏலக்காய் புதிய நறுமணத்துடன் உங்கள் கிடங்கை வந்தடைவதை உறுதி செய்கிறது.',
      'pack_1kg_tab': '1 கிலோ பைகள்',
      'pack_5kg_tab': '5 கிலோ வெற்றிட பைகள்',
      'pack_10kg_tab': '10 கிலோ அட்டைப்பெட்டிகள்',
      'pack_25kg_tab': '25 கிலோ மொத்த சாக்குகள்',
      'pack_select_lbl': 'பேக்கேஜிங்கைத் தேர்ந்தெடுக்கவும்...',
      'pack_point_1': 'ஈரப்பதம் கட்டுப்படுத்தப்பட்ட பாலி அடுக்கு',
      'pack_point_2': 'ஆக்ஸிஜன் உறிஞ்சும் பட்டைகள்',
      'pack_point_3': 'உணவு தர தடிமனான அடுக்கு',
      'pack_point_4': 'போக்குவரத்திற்கான வலுவான அட்டைப்பெட்டிகள்',
      'calc_eyebrow': 'விலை மற்றும் அளவு மதிப்பீடு',
      'calc_title': 'மொத்த விலை கால்குலேட்டர்',
      'calc_label_grade': 'ஏலக்காய் அளவு/தரத்தை தேர்ந்தெடுக்கவும்',
      'calc_label_qty': 'தேவையான அளவை தேர்ந்தெடுக்கவும்',
      'calc_min_label': 'குறைந்தது: 5 கிலோ',
      'calc_max_label': 'அதிகபட்சம்: 5000 கிலோ',
      'calc_unit': 'கிலோகிராம் (KG)',
      'calc_summary_header': 'மதிப்பீட்டு சுருக்கம்',
      'calc_summary_grade': 'தேர்ந்தெடுக்கப்பட்ட தரம்:',
      'calc_summary_vol': 'மொத்த அளவு:',
      'calc_summary_pack': 'பரிந்துரைக்கப்பட்ட பேக்கேஜிங்:',
      'calc_summary_bags': 'மொத்த போக்குவரத்து பைகள்:',
      'calc_summary_range': 'மதிப்பிடப்பட்ட விலை வரம்பு:',
      'calc_disclaimer': '*குறிப்பு: போடிநாயக்கனூர் ஏல விலைகளின் அடிப்படையில் ஏலக்காய் விலைகள் தினமும் மாறுபடும். வணிகக் கொள்கை: இலவச மாதிரிகள் வழங்கப்படாது; அனைத்து மாதிரிகளும் தினசரி சந்தை விலையின்படி கட்டண அடிப்படையிலேயே வழங்கப்படும்.',
      'btn_calc_whatsapp': 'வாட்ஸ்அப் மூலம் விவரம் பெற →',
      'btn_calc_email': 'மின்னஞ்சல் மூலம் விவரம் பெற',
      'gallery_eyebrow': 'காட்சிப் பயணம்',
      'gallery_title': 'உயர்தர புகைப்பட தொகுப்பு',
      'btn_gallery_visit': 'தொழிற்சாலை பார்வையிட கோரவும்',
      'gallery_card_1_eyebrow': 'கொள்முதல்',
      'gallery_card_1_title': 'புதிய அறுவடை',
      'gallery_card_2_eyebrow': 'இயந்திர தரம் பிரித்தல்',
      'gallery_card_2_title': 'சல்லடை அளவு பிரித்தல்',
      'gallery_card_3_eyebrow': 'கைமுறை ஆய்வு',
      'gallery_card_3_title': 'நிறம் பிரித்தல்',
      'gallery_card_4_eyebrow': 'போக்குவரத்து',
      'gallery_card_4_title': 'பாதுகாப்பான பேக்கிங்',
      'test_eyebrow': 'உரிமைச்சான்றுகள்',
      'test_title': 'மொத்த வியாபாரிகளால் நம்பப்படுகிறது',
      'test_1_quote': 'லீஷா டிரேடர்ஸ் தொடர்ந்து உயர்தர ஏலக்காயை வழங்குகிறது. அவர்களின் அளவீடுகள் மிகவும் துல்லியமானவை, ஒவ்வொரு சரக்கிலும் ஒரே மாதிரியான அளவை உறுதி செய்கின்றன. கொள்முதல் விரைவானது மற்றும் நம்பகமானது.',
      'test_1_role': 'மொத்த வியாபாரி, ராஜஸ்தான்',
      'test_2_quote': 'நாங்கள் 2 ஆண்டுகளுக்கு மேலாக லீஷா டிரேடர்ஸிடம் இருந்து 7மிமீ மற்றும் 8மிமீ ஏலக்காயை வாங்கி வருகிறோம். ஈரப்பதம் எப்போதும் 12% க்கும் குறைவாக உள்ளது. சிறந்த விலை!',
      'test_2_role': 'மசாலா ஏற்றுமதியாளர், பெங்களூரு',
      'test_3_quote': 'நம்பகமான, தொழில்முறை மற்றும் வெளிப்படையான நிறுவனம். பேக்கேஜிங் விருப்பங்கள் சிறப்பாக உள்ளன. வறண்ட காலங்களிலும் தடையின்றி விநியோகம் செய்கிறார்கள்.',
      'test_3_role': 'சில்லறை சங்கிலி சப்ளையர், கேரளா',
      'contact_eyebrow': 'தொடர்பு கொள்ள',
      'contact_title': 'நம்பகமான கொள்முதல் சேனலை உருவாக்குங்கள்',
      'contact_desc': 'மாதிரிகளைப் பார்க்க, பேக்கேஜிங் வடிவமைப்பைத் தேர்வு செய்ய அல்லது தற்போதைய ஏலங்களின் விவரங்களைப் பெற எங்களைத் தொடர்பு கொள்ளுங்கள்.',
      'btn_contact_submit': 'மொத்த விசாரணை விவரம் சமர்ப்பிக்க',
      'contact_info_phone_lbl': 'தொலைபேசி / வாட்ஸ்அப்',
      'contact_info_email_lbl': 'மின்னஞ்சல் முகவரி',
      'contact_info_loc_lbl': 'வணிக மையம் & தொழிற்சாலை',
      'contact_info_loc_val': 'போடிநாயக்கனூர், தேனி மாவட்டம், தமிழ்நாடு - 625513, இந்தியா',
      'foot_desc': 'பச்சை ஏலக்காய், பழ ஏலக்காய், உடைந்த ஏலக்காய் மற்றும் விதைகளின் பிரீமியம் மொத்த விநியோகஸ்தர்கள். எங்களின் சொந்த தோட்டங்கள் மற்றும் ஸ்பைசஸ் போர்டு ஏலங்களிலிருந்து பெறப்பட்டு, போடிநாயக்கனூரில் பதப்படுத்தப்படுகிறது.',
      'foot_site_lbl': 'இணையதள வரைபடம்',
      'foot_grades_lbl': 'ஏலக்காய் தரங்கள்',
      'foot_source_lbl': 'ஒழுங்குபடுத்தப்பட்ட கொள்முதல்',
      'foot_link_auction': 'ஏலச் சரிபார்ப்பு',
      'foot_link_certs': 'தரச் சான்றிதழ்கள்',
      'foot_link_desk': 'மொத்த ஏற்றுமதி பிரிவு',
      'foot_link_factory': 'தொழிற்சாலை விசாரணை',
      'foot_rights': '© 2026 லீஷா டிரேடர்ஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. போடிநாயக்கனூர், இந்தியா.',
      'foot_policy': 'வாரிய உரிமம் | வர்த்தகம் & ஏற்றுமதிக் கொள்கை | விநியோக விதிமுறைகள்',
      'modal_spec_sieve_lbl': 'சல்லடை அளவு விட்டம்',
      'modal_spec_moisture_lbl': 'ஈரப்பதம் அளவு',
      'modal_spec_weight_lbl': 'லிட்டர் எடை (g/l)',
      'modal_spec_color_lbl': 'நிறம்',
      'modal_spec_summary_lbl': 'தயாரிப்பு சுருக்கம்',
      'modal_spec_btn_quote': 'அளவை மதிப்பிடுங்கள்',
      'modal_spec_btn_close': 'விவரங்களை மூடவும்',
      'calc_pack_1kg': '1 கிலோ பைகள் (அட்டைப்பெட்டிகளுக்குள் பேக் செய்யப்பட்டது)',
      'calc_pack_5kg': '5 கிலோ வெற்றிட சீல் செய்யப்பட்ட பைகள்',
      'calc_pack_10kg': '10 கிலோ பல அடுக்கு பாதுகாப்பு பெட்டிகள்',
      'calc_pack_25kg': '25 கிலோ கனரக சாக்கு பைகள் (நீராவி தடுப்புடன்)',
      'calc_units_label': 'அலகுகள்',
      'calc_price_contact': 'விலை அறிய தொடர்பு கொள்ளவும்',
      'contact_alert_success': 'உங்கள் மொத்த விசாரணை விவரங்களைச் சமர்ப்பித்ததற்கு நன்றி! உடனடி விவரங்களைப் பெற வாட்ஸ்அப் பக்கம் திறக்கப்படுகிறது.',
      'loading_text': 'ஏற்றப்படுகிறது',
      'btn_write_review': 'மதிப்புரை எழுத',
      'review_modal_title': 'உங்கள் மதிப்புரையைப் பகிரவும்',
      'review_label_name': 'உங்கள் பெயர்',
      'review_label_role': 'பதவி / இடம் / நிறுவனம்',
      'review_label_rating': 'மதிப்பீடு',
      'review_label_text': 'உங்கள் மதிப்புரை',
      'review_btn_submit': 'மதிப்புரையைச் சமர்ப்பிக்கவும்',
      'review_alert_success': 'உங்கள் மதிப்புரைக்கு நன்றி! உங்கள் மதிப்புரை எங்களது பலகையில் சேர்க்கப்பட்டுள்ளது.',
      'review_delete_confirm': 'இந்த மதிப்புரையை நீக்க விரும்புகிறீர்களா?',
      'prod_tab_green': 'பச்சை ஏலக்காய்',
      'prod_tab_yellow': 'மஞ்சள்/வெளிர் பச்சை ஏலக்காய்',
      'grade_6_sub_yellow': 'தரமான வெளிர் தரம் (MGB)',
      'grade_7_sub_yellow': 'பிரீமியம் போல்ட் வெளிர் தரம் (MGEB)',
      'grade_75_sub_yellow': 'எலைட் பிரீமியம் வெளிர் தரம்',
      'grade_75_8_sub_yellow': 'சூப்பர் வெளிர் ஏற்றுமதி கலவை',
      'grade_8_sub_yellow': 'சூப்பர் எக்ஸ்ட்ரா வெளிர் தரம்',
      'grade_85_sub_yellow': 'இம்பீரியல் வெளிர் ஜம்போ போல்ட்',
      'grade_9_sub_yellow': 'சுப்ரீம் ராயல் வெளிர் ஜம்போ',
      'calc_label_variety': 'ஏலக்காய் ரகம்',
      'calc_empty_cart': 'இன்னும் பொருட்கள் எதுவும் சேர்க்கப்படவில்லை. ரகம், அளவு மற்றும் எடையைத் தேர்ந்தெடுத்து, \'விசாரணைப் பட்டியலில் சேர்\' என்பதை கிளிக் செய்யவும்.',
      'table_th_item': 'பொருள்',
      'table_th_qty': 'எடை',
      'table_th_bags': 'பைகள்',
      'table_th_price': 'விலை',
      'calc_summary_items': 'மொத்த பொருட்கள்:',
      'btn_calc_add_item': 'விசாரணைப் பட்டியலில் சேர் +',
      'calc_alert_empty_submit': 'தயவுசெய்து முதலில் உங்கள் மதிப்பீட்டுப் பட்டியலில் ஏதேனும் ஒரு ஏலக்காய் அளவைச் சேர்க்கவும்.',
      'hero_btn_sample': 'மாதிரி கோருக →',
      'modal_spec_btn_sample': 'மாதிரி கோருக',
      'why_biz_subheading': 'ஒரு முன்னணி தோட்ட உரிமையாளர் மற்றும் வாங்குபவராக, லீஷா டிரேடர்ஸ் பச்சை, மஞ்சள், உடைந்த ஏலக்காய் மற்றும் விதைகளை உள்ளடக்கிய முழுமையான ஏலக்காய் வகைகளை வழங்குகிறது. இவை நேரடியாக எங்களின் சொந்த பண்ணைகள் மற்றும் ஏல மையங்களிலிருந்து பெறப்படுகின்றன.',
      'why_cta_desc': 'நீங்கள் மொத்த வியாபாரி, விநியோகஸ்தர், சில்லறை வியாபாரி அல்லது ஏற்றுமதியாளராக இருந்தாலும், லீஷா டிரேடர்ஸ் நம்பகமான சேவை மற்றும் வெளிப்படையான தகவல்தொடர்புகளுடன் தரமான ஏலக்காயை வழங்குவதில் உறுதியாக உள்ளது.',
      'cred_1': '&#10003; GST பதிவு செய்யப்பட்டுள்ளது',
      'cred_2': '&#10003; மொத்த விநியோகஸ்தர்',
      'cred_3': '&#10003; மொத்த ஆர்டர்கள் வரவேற்கப்படுகின்றன',
      'cred_4': '&#10003; பாதுகாப்பான பேக்கேஜிங்',
      'cred_5': '&#10003; தரம் சரிபார்க்கப்பட்டது',
      'cred_6': '&#10003; நம்பகமான ஆதரவு',
      'faq_eyebrow': 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
      'faq_title_p1': 'அடிக்கடி கேட்கப்படும்',
      'faq_title_p2': 'கேள்விகள்',
      'faq_1_q': 'நீங்கள் என்ன வகையான மற்றும் தரமான ஏலக்காயை வழங்குகிறீர்கள்?',
      'faq_1_a': '<p>ஒவ்வொரு தேவையையும் பூர்த்தி செய்ய பிரீமியம் இந்திய ஏலக்காயின் முழுமையான வரிசையை நாங்கள் வழங்குகிறோம்:</p><ul style="margin-top:10px; margin-left: 20px; list-style-type: disc;"><li><strong>பச்சை ஏலக்காய்:</strong> 6.0மிமீ, 7.0மிமீ, 7.5மிமீ, 8.0மிமீ, 8.5மிமீ மற்றும் 9.0மிமீ ஜம்போ காய்கள் உட்பட பல தரங்கள்.</li><li><strong>பழ ஏலக்காய் (மஞ்சள்):</strong> பிரத்தியேகமாக பெறப்பட்டு தரம் பிரிக்கப்பட்ட மஞ்சள் காய்கள்.</li><li><strong>உடைந்த ஏலக்காய்:</strong> அரைப்பதற்கும் சாறு எடுப்பதற்கும் ஏற்ற உயர்தர உடைந்த காய்கள்.</li><li><strong>ஏலக்காய் விதைகள்:</strong> சமையல் மற்றும் வணிக பயன்பாட்டிற்காக தரம் பிரிக்கப்பட்ட தூய ஏலக்காய் விதைகள்.</li></ul>',
      'faq_2_q': 'நீங்கள் மொத்த ஆர்டர்களை ஏற்றுக்கொள்கிறீர்களா?',
      'faq_2_a': 'ஆம். லீஷா டிரேடர்ஸ் மொத்த ஆர்டர்களில் நிபுணத்துவம் பெற்றது. உங்கள் அளவு தேவைகளுடன் எங்களை தொடர்பு கொள்ளவும், எங்கள் குழு உங்களுக்கு பிரத்தியேக விலைப்பட்டியலை வழங்கும்.',
      'faq_3_q': 'நான் எப்படி விலைப்பட்டியல் கேட்பது?',
      'faq_3_a': 'எங்கள் \'மொத்த விலைப்பட்டியலைக் கோருக\' கால்குலேட்டரைப் பயன்படுத்துவதன் மூலமும், தொடர்பு படிவத்தை சமர்ப்பிப்பதன் மூலமும், அல்லது வாட்ஸ்அப் அல்லது மின்னஞ்சல் வழியாக நேரடியாக தொடர்புகொள்வதன் மூலமும் நீங்கள் விலைப்பட்டியலைக் கோரலாம்.',
      'faq_4_q': 'நீங்கள் இந்தியா முழுவதும் விநியோகிக்கிறீர்களா?',
      'faq_4_a': 'ஆம், எங்களிடம் வலுவான தளவாட வலைப்பின்னல் உள்ளது மற்றும் இந்தியாவின் அனைத்து மாநிலங்களிலும் உள்ள மொத்த விற்பனையாளர்கள் மற்றும் விநியோகஸ்தர்களுக்கு பிரீமியம் ஏலக்காயை வழங்குகிறோம்.',
      'faq_5_q': 'தயாரிப்புகள் எவ்வாறு பேக்கேஜ் செய்யப்படுகின்றன?',
      'faq_5_a': 'பயணத்தின் போது புத்துணர்ச்சியை உறுதி செய்வதற்கும் ஈரப்பதத்தால் ஏற்படும் சேதத்தைத் தடுப்பதற்கும் ஏலக்காய் உயர்தர கோணிப்பைகள் அல்லது பிரத்தியேக ஏற்றுமதி தர பேக்கேஜிங்கில் பாதுகாப்பாக அடைக்கப்படுகிறது.',
      'faq_6_q': 'நான் பேக்கேஜிங்கை தனிப்பயனாக்க முடியுமா?',
      'faq_6_a': 'ஆம், மொத்த கொள்முதல் செய்பவர்களுக்கு நாங்கள் தனிப்பயனாக்கப்பட்ட பேக்கேஜிங் தீர்வுகளை வழங்குகிறோம். விலைப்பட்டியல் கோரும்போது உங்கள் குறிப்பிட்ட பேக்கேஜிங் தேவைகளை குறிப்பிடவும்.',
      'faq_7_q': 'நீங்கள் எந்த கட்டண முறைகளை ஏற்றுக்கொள்கிறீர்கள்?',
      'faq_7_a': 'பணப்பரிமாற்றங்கள் (NEFT/RTGS) உட்பட நிலையான B2B கட்டண முறைகளை நாங்கள் ஏற்றுக்கொள்கிறோம். ஆர்டரை இறுதி செய்யும் போது குறிப்பிட்ட கட்டண விதிமுறைகளை விவாதிக்கலாம்.',
      'faq_8_q': 'நான் லீஷா டிரேடர்ஸை எவ்வாறு தொடர்புகொள்வது?',
      'faq_8_a': 'தொலைபேசி, வாட்ஸ்அப், மின்னஞ்சல் மூலமாக எங்களைத் தொடர்புகொள்ளலாம் அல்லது போடிநாயக்கனூரில் உள்ள எங்கள் வர்த்தக மையத்தைப் பார்வையிடலாம். அனைத்து தொடர்பு விவரங்களும் \'தொடர்பு\' பிரிவில் உள்ளன.',
      'faq_footer_title': 'இன்னும் கேள்விகள் உள்ளதா?',
      'faq_footer_desc': 'தயாரிப்பு தகவல், விலைப்பட்டியல்கள் மற்றும் மொத்த விசாரணைகளுக்கு உங்களுக்கு உதவ எங்கள் குழு தயாராக உள்ளது.',
      'contact_main_eyebrow': 'தொடர்பு',
      'contact_main_title_p1': 'ஒன்றாக வியாபாரம்',
      'contact_main_title_p2': 'செய்வோம்.',
      'contact_main_title_p3': '',
      'contact_lbl_phone': 'தொலைபேசி எண்',
      'contact_lbl_whatsapp': 'வாட்ஸ்அப்',
      'contact_lbl_email': 'மின்னஞ்சல்',
      'contact_lbl_hours': 'வேலை நேரம்',
      'contact_val_hours': 'திங்கள் – சனி<br>காலை 9:00 மணி – மாலை 6:00 மணி',
      'contact_lbl_address': 'வணிக முகவரி',
      'hub_title': 'எங்களை கண்டுபிடிக்க',
      'hub_desc': 'மொத்த விசாரணைகளுக்காக எங்கள் அலுவலகத்தை பார்வையிடவும் அல்லது எங்களை தொடர்புகொள்ளவும்.',
      'hub_cred_title': 'வணிக சான்றுகள்',
      'cta_bottom_title': 'பிரீமியம் ஏலக்காயை பெற தயாரா?',
      'cta_bottom_btn_quote': 'மொத்த விலைப்பட்டியலைக் கோருக',
      'cta_bottom_btn_wa': 'எங்களுக்கு வாட்ஸ்அப் செய்யவும்',
      'footer_links_title': 'விரைவான இணைப்புகள்',
      'fl_home': 'முகப்பு',
      'fl_about': 'எங்களை பற்றி',
      'fl_prod': 'தயாரிப்புகள்',
      'fl_process': 'எங்கள் செயல்முறை',
      'fl_pack': 'பேக்கேஜிங்',
      'fl_gallery': 'கேலரி',
      'fl_quote': 'விலை கால்குலேட்டர்',
      'fl_contact': 'தொடர்பு',
      'footer_legal_title': 'சட்டப்பூர்வமானது',
      'fl_terms': 'விதிமுறைகள் மற்றும் நிபந்தனைகள்',
      'fl_privacy': 'தனியுரிமை கொள்கை',
      'fl_disc': 'பொறுப்பு துறப்பு',
      'footer_contact_title': 'தொடர்பு',
      'fc_wa': 'வாட்ஸ்அப் அரட்டை',
      'fc_address': 'போடிநாயக்கனூர், தேனி மாவட்டம், தமிழ்நாடு - 625513, இந்தியா',
      'fc_hours': 'திங்கள் - சனி: காலை 9:00 மணி - மாலை 6:00 மணி',
      'footer_copy': '© 2026 லீஷா டிரேடர்ஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      'footer_design': 'சிறப்பாக வடிவமைக்கப்பட்டுள்ளது.',
      'modal_grade_type': 'பிரீமியம் நடுத்தர தடித்த தரம்',
      'why_trust_title': 'நம்பகமான வணிக நடைமுறைகள்',
      'wa_msg_empty': 'வணக்கம் லீஷா டிரேடர்ஸ்,\\n\\nமொத்த ஏலக்காய் தரங்கள் கிடைக்கும் தன்மை மற்றும் தனிப்பயன் விலைப்பட்டியல்கள் பற்றிய தகவலை நான் கோர விரும்புகிறேன்.',
      'wa_msg_hello': 'வணக்கம் லீஷா டிரேடர்ஸ்,\\n\\nபின்வரும் மொத்த ஏலக்காய் தேவைகளுக்கான முறையான மொத்த விலைப்பட்டியலை நான் கோர விரும்புகிறேன்:',
      'wa_msg_id': 'விசாரணை ஐடி',
      'wa_msg_items': 'கோரப்பட்ட பொருட்கள்',
      'wa_msg_end': 'கையிருப்பு, தினசரி ஏல விலை குறியீடு மற்றும் விநியோக அட்டவணையை எங்களிடம் பகிரவும்.\\n\\nநன்றி!',
      'wa_packed_in': 'பேக்கிங்',
      'wa_bags': 'பைகள்',
      'contact_legal_terms': 'நான் படித்து ஏற்றுக்கொள்கிறேன்',
      'contact_legal_terms_link': 'விதிமுறைகள் மற்றும் நிபந்தனைகள்',
      'contact_legal_privacy': 'நான் படித்து புரிந்து கொண்டேன்',
      'contact_legal_privacy_link': 'தனியுரிமை கொள்கை',
      'contact_legal_confirm': 'வழங்கப்பட்ட தகவல்கள் துல்லியமானவை மற்றும் முழுமையானவை என்பதையும், இந்த வணிக விசாரணையை சமர்ப்பிக்க எனக்கு அதிகாரம் உள்ளது என்பதையும் நான் உறுதிப்படுத்துகிறேன்.',
      'contact_legal_disclaimer': 'இந்த படிவத்தை சமர்ப்பிப்பதன் மூலம், நீங்கள் லீஷா டிரேடர்ஸிடமிருந்து வணிக விலைப்பட்டியலைக் கோருகிறீர்கள். இந்த சமர்ப்பிப்பு கொள்முதல் ஒப்பந்தத்தை உருவாக்காது அல்லது பரிவர்த்தனையை முடிக்க எந்தவொரு தரப்பினரையும் கட்டாயப்படுத்தாது. எந்தவொரு விற்பனையும் ஏற்றுக்கொள்ளப்பட்ட விலைப்பட்டியல் மற்றும் தேவைப்பட்டால் தரப்பினருக்கு இடையே நிறைவேற்றப்பட்ட ஒரு தனி விற்பனை ஒப்பந்தத்தால் நிர்வகிக்கப்படும்.',
      'why_eyebrow': 'எங்களை ஏன் தேர்வு செய்ய வேண்டும்',
      'why_biz_title': 'வணிகங்களால் நம்பப்படுகிறது. <br><span style="color: #4eb270;">தரத்தின்</span> அடிப்படையில் உருவாக்கப்பட்டது.',
      'footer_about_desc': 'லீஷா டிரேடர்ஸ் பிரீமியம் இந்திய பச்சை ஏலக்காயின் நம்பகமான சப்ளையர் ஆகும், இது மொத்த விற்பனையாளர்கள், சில்லறை விற்பனையாளர்கள், விநியோகஸ்தர்கள் மற்றும் ஏற்றுமதியாளர்களுக்கு தரம் சார்ந்த ஆதாரம் மற்றும் நம்பகமான சேவையுடன் சேவை செய்கிறது.',
      'why_title_p1': 'வணிகங்களால்',
      'why_title_p2': 'நம்பப்படுகிறது.',
      'why_title_p3': 'தரத்தில் கட்டமைக்கப்பட்டுள்ளது.',
      'why_ft_quality': 'பிரீமியம் தரம்',
      'why_ft_quality_desc': 'நிலையான தரத் தரங்களை பராமரிக்க ஒவ்வொரு தொகுப்பும் கவனமாக பெறப்பட்டு தரம் பிரிக்கப்படுகிறது.',
      'why_ft_procure': 'நம்பகமான கொள்முதல்',
      'why_ft_procure_desc': 'நம்பகமான ஏல சந்தைகள் மற்றும் சரிபார்க்கப்பட்ட சப்ளையர்களிடமிருந்து நாங்கள் பிரீமியம் ஏலக்காயை பெறுகிறோம்.',
      'why_ft_trans': 'வெளிப்படையான வணிகம்',
      'why_ft_trans_desc': 'தெளிவான விலைப்பட்டியல்கள், நேர்மையான தொடர்பு மற்றும் நேரடியான விலை நிர்ணயம்.',
      'why_ft_pack': 'பாதுகாப்பான பேக்கேஜிங்',
      'why_ft_pack_desc': 'பயணத்தின் போது புத்துணர்ச்சியை பாதுகாக்க தயாரிப்புகள் கவனமாக பேக் செய்யப்படுகின்றன.',
      'why_ft_del': 'நம்பகமான விநியோகம்',
      'why_ft_del_desc': 'இந்தியா முழுவதும் சரியான நேரத்தில் அனுப்பப்படுவதன் மூலம் ஆர்டர்கள் திறமையாக செயலாக்கப்படுகின்றன.',
      'why_ft_cust': 'வாடிக்கையாளருக்கு முன்னுரிமை',
      'why_ft_cust_desc': 'நம்பகமான சேவை மற்றும் ஆதரவின் மூலம் நீண்ட கால உறவுகளை உருவாக்குவதில் நாங்கள் கவனம் செலுத்துகிறோம்.',
      'why_cta_title': 'நீண்ட கால வணிக உறவை உருவாக்குவோம்.',
      'table_header_grade': 'தரம் & அளவு',
      'table_sub_6': 'ஸ்டாண்டர்ட் / நடுத்தரம்',
      'table_sub_7': 'பிரீமியம் போல்ட் (AGEB)',
      'table_sub_75': 'எலைட் பிரீமியம் போல்ட்',
      'table_sub_75_8': 'சூப்பர் போல்ட் எக்ஸ்போர்ட் மிக்ஸ்',
      'table_sub_8': 'சூப்பர் எக்ஸ்ட்ரா போல்ட் (சூப்பர் ஜம்போ)',
      'table_sub_85': 'இம்பீரியல் ஜம்போ போல்ட்',
      'table_sub_9': 'சுப்ரீம் ராயல் ஜம்போ',
      'contact_main_title_p3': 'இணைவோம்.',
      'why_f1_title': 'நேரடி ஏலம் & தோட்டம் மூலம் பெறப்பட்டது',
      'why_f1_desc': 'போடிநாயக்கனூரில் உள்ள சான்றளிக்கப்பட்ட ஸ்பைசஸ் போர்டு ஏலங்கள் மற்றும் தனியார் தோட்டங்களிலிருந்து நேரடியாகப் பெறப்பட்டு, உண்மையான தரம் உறுதி செய்யப்படுகிறது.',
      'why_f2_title': 'துல்லியமான சல்லடை தரம் பிரித்தல்',
      'why_f2_desc': 'ஒவ்வொரு தொகுதியும் துல்லியமான சல்லடைகள் (6.0 மிமீ முதல் 9.0 மிமீ வரை) மூலம் இயந்திரத்தால் தரம் பிரிக்கப்பட்டு சீரான அளவு மற்றும் அழகை உறுதி செய்கிறது.',
      'why_f3_title': 'கட்டுப்படுத்தப்பட்ட ஈரப்பதம் (<12%)',
      'why_f3_desc': 'ஆய்வகத்தால் சரிபார்க்கப்பட்ட 12% க்கும் குறைவான ஈரப்பதத்துடன் தேசிய மசாலா தரநிலைகளை கண்டிப்பாக பின்பற்றி பூஞ்சை உருவாகாமல் பாதுகாக்கிறது.',
      'why_f4_title': 'நெகிழ்வான மொத்த விற்பனை வழங்கல்',
      'why_f4_desc': 'சில்லறை விற்பனையாளர்களுக்கான 50 கிலோ சோதனை ஆர்டர்கள் முதல் சர்வதேச இறக்குமதியாளர்களுக்கான பல டன் முழு கொள்கலன் சரக்குகள் வரை தடையற்ற விநியோகம்.',
      'why_f5_title': 'நறுமணம் காக்கும் பாதுகாப்பு பேக்கேஜிங்',
      'why_f5_desc': 'போக்குவரத்து மற்றும் சேமிப்பின் போது இயற்கையான நறுமண எண்ணெய்களை தக்கவைக்கும் பல அடுக்கு உணவு தர பாலி பவுச்சுகள் மற்றும் அட்டைப் பெட்டிகள்.',
      'why_f6_title': 'வெளிப்படையான சந்தை சார்ந்த விலை',
      'why_f6_desc': 'தினசரி விலை போடிநாயக்கனூர் ஏல விலைகளுடன் இணைக்கப்பட்டு, வாங்குபவர்களுக்கு தெளிவு, நியாயமான மதிப்பு மற்றும் நம்பகமான கொள்முதலை வழங்குகிறது.',
      'faq_q1': 'நீங்கள் என்னென்ன ஏலக்காய் தரங்களை வழங்குகிறீர்கள்?',
      'faq_a1': 'நாங்கள் 6.0 மிமீ (மீடியம்) முதல் 9.0 மிமீ (சுப்ரீம் ராயல் ஜம்போ) வரையிலான அனைத்து நிலையான இந்திய ஏலக்காய் அளவுகளையும் வழங்குகிறோம், இதில் AGEB (7.0 மிமீ), எலைட் போல்ட் (7.5 மிமீ) மற்றும் சூப்பர் எக்ஸ்ட்ரா போல்ட் (8.0 மிமீ) அடங்கும். மேலும் பழ ஏலக்காய் (மஞ்சள்), பிளவு ஏலக்காய் மற்றும் ஏலக்காய் விதைகளையும் வழங்குகிறோம்.',
      'faq_q2': 'குறைந்தபட்ச ஆர்டர் அளவு (MOQ) என்ன?',
      'faq_a2': 'எங்கள் நிலையான மொத்த விற்பனை MOQ 20 கிலோ (ஒரு மாஸ்டர் கார்டன்). சோதனை ஆர்டர்கள் அல்லது பிராந்திய சில்லறை விநியோகஸ்தர்களுக்கு சிறிய அளவுகளும் ஏற்பாடு செய்யப்படலாம். ஏற்றுமதிக்கான கொள்கலன் ஏற்றுமதியையும் (FCL) நாங்கள் பூர்த்தி செய்கிறோம்.',
      'faq_q3': 'மொத்த ஆர்டர் செய்வதற்கு முன் நான் மாதிரி (Sample) பெற முடியுமா?',
      'faq_a3': 'ஆம், அனைத்து தரங்களுக்கும் மாதிரிப் பொட்டலங்கள் (50g, 100g, 250g, 500g) கிடைக்கின்றன. எங்கள் நிலையான மொத்த வர்த்தகக் கொள்கையின்படி, மாதிரி கட்டணம் மற்றும் கூரியர் கட்டணம் விதிக்கப்படும், இது உங்களின் தொடக்க மொத்த வணிக ஏற்றுமதியில் கழித்துக் கொள்ளப்படும்.',
      'faq_q4': 'உங்கள் ஏலக்காய் எங்கிருந்து பெறப்படுகிறது?',
      'faq_a4': 'எங்கள் ஏலக்காய் அனைத்தும் மேற்குத் தொடர்ச்சி மலையில் உள்ள எங்கள் தனியார் தோட்டங்கள் மற்றும் போடிநாயக்கனூர் மற்றும் வந்தன்மெட்டுவில் உள்ள சான்றளிக்கப்பட்ட ஸ்பைசஸ் போர்டு ஏலங்கள் மூலம் பெறப்படுகிறது — இது இந்தியாவின் ஏலக்காய் தலைநகரமாகும்.',
      'faq_q5': 'போக்குவரத்தின் போது ஏலக்காயின் புத்துணர்ச்சியை எவ்வாறு உறுதி செய்கிறீர்கள்?',
      'faq_a5': 'நாங்கள் ஈரப்பதத்தை 12% க்கும் குறைவாக பராமரித்து, உணவு தர பாலி லைனர்கள் மற்றும் சீல் செய்யப்பட்ட அட்டைப் பெட்டிகளில் பேக் செய்து ஈரப்பதம் உறிஞ்சப்படாமல் பாதுகாக்கிறோம்.',
      'faq_q6': 'சர்வதேச ஏற்றுமதியை ஆதரிக்கிறீர்களா?',
      'faq_a6': 'ஆம், மத்திய கிழக்கு, தென்கிழக்கு ஆசியா, ஐரோப்பா மற்றும் அமெரிக்க நாடுகளுக்கான முழுமையான ஆவணங்கள், தாவர சுகாதார சான்றிதழ்கள், ஸ்பைசஸ் போர்டு அனுமதி மற்றும் துறைமுக தளவாடங்களை நாங்கள் கையாளுகிறோம்.'
    }
  };

  const placeholders = {
    'en': {
      'contact-name': 'Your Name / Company',
      'contact-email': 'Your Email Address',
      'contact-phone': 'WhatsApp / Phone Number',
      'contact-msg': 'Tell us about your bulk requirement (Grade, Sizing, Target Destination)...'
    },
    'hi': {
      'contact-name': 'आपका नाम / कंपनी',
      'contact-email': 'आपका ईमेल पता',
      'contact-phone': 'व्हाट्सएप / फोन नंबर',
      'contact-msg': 'हमें अपनी थोक आवश्यकता के बारे में बताएं (ग्रेड, आकार, लक्षित गंतव्य)...'
    },
    'ta': {
      'contact-name': 'உங்கள் பெயர் / நிறுவனம்',
      'contact-email': 'உங்கள் மின்னஞ்சல் முகவரி',
      'contact-phone': 'வாட்ஸ்அப் / தொலைபேசி எண்',
      'contact-msg': 'உங்கள் மொத்த தேவையை எங்களுக்குத் தெரிவிக்கவும் (தரம், அளவு, சேருமிடம்)...'
    }
  };

  /* ==========================================================================
     1. SCROLL EVENTS & HEADER STYLING
     ========================================================================== */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  /* ==========================================================================
     2. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const burgerMenu = document.getElementById('burger-menu');
  const navLinks = document.getElementById('nav-links');

  if (burgerMenu && navLinks) {
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Auto-close menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        burgerMenu.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ==========================================================================
     3. SCROLL REVEAL (INTERSECTION OBSERVER)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (typeof IntersectionObserver !== 'undefined') {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  /* ==========================================================================
     4. PRODUCT SPECIFICATIONS MATRIX (MULTI-LANG)
     ========================================================================== */
  const productSpecsEn = {
    '6mm': {
      title: '6.0 mm Green Cardamom',
      subtitle: 'Medium Grade (Standard Sized)',
      sieve: '> 6.0 mm (diameter mesh)',
      moisture: '12.0% Max humidity',
      weight: '360 - 380 g/l test weight',
      color: 'Soft Sage Green',
      desc: 'Selected carefully from official auctions. Our 6mm cardamom represents a highly affordable yet high-grade selection for retail packaging houses and restaurant supply distributors. Well-balanced aroma.'
    },
    '7mm': {
      title: '7.0 mm Green Cardamom',
      subtitle: 'Premium Bold Grade (AGEB)',
      sieve: '> 7.0 mm (diameter mesh)',
      moisture: '11.5% Max humidity',
      weight: '385 - 410 g/l test weight',
      color: 'Vibrant Olive Green',
      desc: 'Exceptionally plump pods filled with high volatile natural oil content. Sorted carefully to exclude damaged units. Represents a premium domestic grade for catering houses and retail branding.'
    },
    '7.5mm': {
      title: '7.5 mm Green Cardamom',
      subtitle: 'Elite Premium Bold',
      sieve: '> 7.5 mm (diameter mesh)',
      moisture: '11.2% Max humidity',
      weight: '410 - 430 g/l test weight',
      color: 'Deep Emerald Green',
      desc: 'Highly sought-after export grade. Visually sorted to guarantee a high color index, minimum thrips spot percentage, and deep seed count. Excellent value for international markets.'
    },
    '7.5-8mm': {
      title: '7.5 - 8.0 mm Green Cardamom',
      subtitle: 'Super Bold Export Mix',
      sieve: '7.5 mm - 8.0 mm range',
      moisture: '11.0% Max humidity',
      weight: '420 - 445 g/l test weight',
      color: 'Rich Emerald Green',
      desc: 'Perfect hybrid grading featuring the largest premium bold pods. Exceptionally filled with black fragrant seeds. Handpicked and double sorted for global shipping.'
    },
    '8mm': {
      title: '8.0 mm Green Cardamom',
      subtitle: 'Super Extra Bold (Super Jumbo)',
      sieve: '> 8.0 mm (diameter mesh)',
      moisture: '10.5% Max humidity',
      weight: '435 - 460 g/l test weight',
      color: 'Rich Deep Forest Green',
      desc: 'The ultimate pinnacle of Indian cardamom quality. Immense pods sorted with dual sieve steps. Exclusively handpicked for international gourmet distributors and premium gifting brands. Robust fragrance profile.'
    },
    '8.5mm': {
      title: '8.5 mm Green Cardamom',
      subtitle: 'Imperial Jumbo Bold',
      sieve: '> 8.5 mm (diameter mesh)',
      moisture: '10.2% Max humidity',
      weight: '455 - 475 g/l test weight',
      color: 'Luxurious Deep Green',
      desc: 'Gourmet grade visual cardamom. Selected exclusively for premium gifting, international luxury packaging, and royal spice blends.'
    },
    '9mm': {
      title: '9.0 mm Green Cardamom',
      subtitle: 'Supreme Royal Jumbo',
      sieve: '> 9.0 mm (diameter mesh)',
      moisture: '10.0% Max humidity',
      weight: '470 - 490 g/l test weight',
      color: 'Exquisite Royal Green',
      desc: 'The rarest cardamom selection in the world. Exceeds 9.0 mm in pod diameter, offering ultimate seed count and supreme volatile oil content.'
    },
    '6mm-yellow': {
      title: '6.0 mm Fruit Cardamom (Yellow/Pale)',
      subtitle: 'Medium Grade (Standard Sized)',
      sieve: '> 6.0 mm (diameter mesh)',
      moisture: '12.0% Max humidity',
      weight: '350 - 370 g/l test weight',
      color: 'Golden Straw Yellow (MGB)',
      desc: 'Sorted to ensure uniform color. Our 6mm Fruit Cardamom (Yellow/Pale) represents a highly affordable yet high-grade selection for retail packaging houses and restaurant supply distributors. Sweet, mild aroma.'
    },
    '7mm-yellow': {
      title: '7.0 mm Fruit Cardamom (Yellow/Pale)',
      subtitle: 'Premium Bold Grade (MGEB)',
      sieve: '> 7.0 mm (diameter mesh)',
      moisture: '11.5% Max humidity',
      weight: '375 - 400 g/l test weight',
      color: 'Golden Straw Yellow',
      desc: 'Exceptionally plump pods filled with high volatile natural oil content. Sorted carefully to exclude damaged units. Represents a premium domestic grade for catering houses and retail branding.'
    },
    '7.5mm-yellow': {
      title: '7.5 mm Fruit Cardamom (Yellow/Pale)',
      subtitle: 'Elite Premium Bold',
      sieve: '> 7.5 mm (diameter mesh)',
      moisture: '11.2% Max humidity',
      weight: '400 - 420 g/l test weight',
      color: 'Rich Golden Pale Yellow',
      desc: 'Highly sought-after export grade. Visually sorted to guarantee a high color index, minimum thrips spot percentage, and deep seed count. Excellent value for international markets.'
    },
    '7.5-8mm-yellow': {
      title: '7.5 - 8.0 mm Fruit Cardamom (Yellow/Pale)',
      subtitle: 'Super Bold Export Mix',
      sieve: '7.5 mm - 8.0 mm range',
      moisture: '11.0% Max humidity',
      weight: '410 - 435 g/l test weight',
      color: 'Golden Pale Yellow',
      desc: 'Perfect hybrid grading featuring the largest premium bold pods. Exceptionally filled with black fragrant seeds. Handpicked and double sorted for global shipping.'
    },
    '8mm-yellow': {
      title: '8.0 mm Fruit Cardamom (Yellow/Pale)',
      subtitle: 'Super Extra Bold (Super Jumbo)',
      sieve: '> 8.0 mm (diameter mesh)',
      moisture: '10.5% Max humidity',
      weight: '425 - 450 g/l test weight',
      color: 'Deep Golden Yellow',
      desc: 'The ultimate pinnacle of Indian cardamom quality. Immense pods sorted with dual sieve steps. Exclusively handpicked for international gourmet distributors and premium gifting brands. Robust fragrance profile.'
    },
    '8.5mm-yellow': {
      title: '8.5 mm Fruit Cardamom (Yellow/Pale)',
      subtitle: 'Imperial Jumbo Bold',
      sieve: '> 8.5 mm (diameter mesh)',
      moisture: '10.2% Max humidity',
      weight: '445 - 465 g/l test weight',
      color: 'Luxurious Golden Yellow',
      desc: 'Gourmet grade visual cardamom. Selected exclusively for premium gifting, international luxury packaging, and royal spice blends.'
    },
    '9mm-yellow': {
      title: '9.0 mm Fruit Cardamom (Yellow/Pale)',
      subtitle: 'Supreme Royal Jumbo',
      sieve: '> 9.0 mm (diameter mesh)',
      moisture: '10.0% Max humidity',
      weight: '460 - 480 g/l test weight',
      color: 'Exquisite Royal Golden Yellow',
      desc: 'The rarest cardamom selection in the world. Exceeds 9.0 mm in pod diameter, offering ultimate seed count and supreme volatile oil content.'
    }
  };

  const productSpecsHi = {
    '6mm': {
      title: '6.0 मिमी हरी इलायची',
      subtitle: 'मध्यम ग्रेड (मानक आकार)',
      sieve: '> 6.0 मिमी (व्यास मेष)',
      moisture: '12.0% अधिकतम नमी',
      weight: '360 - 380 ग्राम/लीटर परीक्षण वजन',
      color: 'नरम सेज ग्रीन',
      desc: 'आधिकारिक नीलामियों से सावधानीपूर्वक चुनी गई। हमारी 6 मिमी इलायची खुदरा पैकेजिंग घरों और थोक विक्रेताओं के लिए एक अत्यधिक किफायती और उच्च-ग्रेड चयन है।'
    },
    '7mm': {
      title: '7.0 मिमी हरी इलायची',
      subtitle: 'प्रीमियम बोल्ड ग्रेड (AGEB)',
      sieve: '> 7.0 मिमी (व्यास मेष)',
      moisture: '11.5% अधिकतम नमी',
      weight: '385 - 410 ग्राम/लीटर परीक्षण वजन',
      color: 'वाइब्रेंट ऑलिव ग्रीन',
      desc: 'उच्च वाष्पशील प्राकृतिक तेल सामग्री से भरे हुए असाधारण रूप से मोटे पॉड्स। खानपान और खुदरा ब्रांडिंग के लिए एक प्रीमियम घरेलू ग्रेड का प्रतिनिधित्व करता है।'
    },
    '7.5mm': {
      title: '7.5 मिमी हरी इलायची',
      subtitle: 'एलीट प्रीमियम बोल्ड',
      sieve: '> 7.5 मिमी (व्यास मेष)',
      moisture: '11.2% अधिकतम नमी',
      weight: '410 - 430 ग्राम/लीटर परीक्षण वजन',
      color: 'गहरी पन्ना हरी (एमेराल्ड)',
      desc: 'अत्यधिक निर्यात ग्रेड। उच्च रंग सूचकांक, न्यूनतम थ्रिप्स स्पॉट और गहरे बीजों की संख्या की गारंटी के लिए सावधानीपूर्वक छांटा गया।'
    },
    '7.5-8mm': {
      title: '7.5 - 8.0 मिमी हरी इलायची',
      subtitle: 'सुपर बोल्ड निर्यात मिक्स',
      sieve: '7.5 मिमी - 8.0 मिमी रेंज',
      moisture: '11.0% अधिकतम नमी',
      weight: '420 - 445 ग्राम/लीटर परीक्षण वजन',
      color: 'गहरी पन्ना हरी',
      desc: 'सटीक हाइब्रिड ग्रेडिंग जिसमें सबसे बड़े प्रीमियम बोल्ड पॉड्स शामिल हैं। काले सुगंधित बीजों से विशेष रूप से भरे हुए। वैश्विक शिपिंग के लिए तैयार।'
    },
    '8mm': {
      title: '8.0 मिमी हरी इलायची',
      subtitle: 'सुपर एक्स्ट्रा बोल्ड (सुपर जंबो)',
      sieve: '> 8.0 मिमी (व्यास मेष)',
      moisture: '10.5% अधिकतम नमी',
      weight: '435 - 460 ग्राम/लीटर परीक्षण वजन',
      color: 'गहरी वन हरी (फॉरेस्ट ग्रीन)',
      desc: 'भारतीय इलायची गुणवत्ता का सर्वोच्च शिखर। दोहरी छलनी छंटाई। अंतरराष्ट्रीय पेटू वितरकों और प्रीमियम उपहार देने वाले ब्रांडों के लिए उत्कृष्ट।'
    },
    '8.5mm': {
      title: '8.5 मिमी हरी इलायची',
      subtitle: 'इंपीरियल जंबो बोल्ड',
      sieve: '> 8.5 मिमी (व्यास मेष)',
      moisture: '10.2% अधिकतम नमी',
      weight: '455 - 475 ग्राम/लीटर परीक्षण वजन',
      color: 'शानदार गहरी हरी',
      desc: 'पेटू ग्रेड दृश्य इलायची। विशेष रूप से प्रीमियम उपहार देने, अंतरराष्ट्रीय लक्जरी पैकेजिंग और शाही मसाला मिश्रणों के लिए चुनी गई।'
    },
    '9mm': {
      title: '9.0 मिमी हरी इलायची',
      subtitle: 'सुप्रीम रॉयल जंबो',
      sieve: '> 9.0 मिमी (व्यास मेष)',
      moisture: '10.0% अधिकतम नमी',
      weight: '470 - 490 ग्राम/लीटर परीक्षण वजन',
      color: 'उत्कृष्ट रॉयल ग्रीन',
      desc: 'दुनिया में सबसे दुर्लभ इलायची चयन। फली व्यास में 9.0 मिमी से अधिक, अंतिम बीज संख्या और सर्वोच्च वाष्पशील तेल सामग्री प्रदान करता है।'
    },
    '6mm-yellow': {
      title: '6.0 मिमी फ्रूट इलायची (पीली/हल्की)',
      subtitle: 'मध्यम ग्रेड (मानक आकार)',
      sieve: '> 6.0 मिमी (व्यास मेष)',
      moisture: '12.0% अधिकतम नमी',
      weight: '350 - 370 ग्राम/लीटर परीक्षण वजन',
      color: 'सुनहरा पुआल पीला (MGB)',
      desc: 'समान रंग सुनिश्चित करने के लिए सावधानीपूर्वक छांटा गया। हमारी 6 मिमी फ्रूट इलायची (पीली/हल्की) खुदरा पैकेजिंग घरों और थोक विक्रेताओं के लिए एक अत्यधिक किफायती चयन है।'
    },
    '7mm-yellow': {
      title: '7.0 मिमी फ्रूट इलायची (पीली/हल्की)',
      subtitle: 'प्रीमियम बोल्ड पीला ग्रेड (MGEB)',
      sieve: '> 7.0 मिमी (व्यास मेष)',
      moisture: '11.5% अधिकतम नमी',
      weight: '375 - 400 ग्राम/लीटर परीक्षण वजन',
      color: 'सुनहरा पुआल पीला',
      desc: 'असाधारण रूप से मोटे पॉड्स। खानपान और खुदरा ब्रांडिंग के लिए एक प्रीमियम घरेलू ग्रेड का प्रतिनिधित्व करता है।'
    },
    '7.5mm-yellow': {
      title: '7.5 मिमी फ्रूट इलायची (पीली/हल्की)',
      subtitle: 'एलीट प्रीमियम पीला बोल्ड',
      sieve: '> 7.5 मिमी (व्यास मेष)',
      moisture: '11.2% अधिकतम नमी',
      weight: '400 - 420 ग्राम/लीटर परीक्षण वजन',
      color: 'गहरी सुनहरी हल्की पीली',
      desc: 'अत्यधिक निर्यात ग्रेड। उच्च रंग सूचकांक, न्यूनतम थ्रिप्स स्पॉट और गहरे बीजों की संख्या की गारंटी के लिए सावधानीपूर्वक छांटा गया।'
    },
    '7.5-8mm-yellow': {
      title: '7.5 - 8.0 मिमी फ्रूट इलायची (पीली/हल्की)',
      subtitle: 'सुपर पीला निर्यात मिश्रण',
      sieve: '7.5 मिमी - 8.0 मिमी वरंभ',
      moisture: '11.0% अधिकतम नमी',
      weight: '410 - 435 ग्राम/लीटर परीक्षण वजन',
      color: 'सुनहरी हल्की पीली',
      desc: 'सटीक हाइब्रिड ग्रेडिंग जिसमें सबसे बड़े प्रीमियम पीला बोल्ड पॉड्स शामिल हैं। काले सुगंधित बीजों से विशेष रूप से भरे हुए।'
    },
    '8mm-yellow': {
      title: '8.0 मिमी फ्रूट इलायची (पीली/हल्की)',
      subtitle: 'सुपर एक्स्ट्रा पीला बोल्ड (जंबो)',
      sieve: '> 8.0 मिमी (व्यास मेष)',
      moisture: '10.5% अधिकतम नमी',
      weight: '425 - 450 ग्राम/लीटर परीक्षण वजन',
      color: 'गहरी सुनहरी पीली',
      desc: 'भारतीय इलायची गुणवत्ता का सर्वोच्च शिखर। दोहरी छलनी छंटाई। अंतरराष्ट्रीय पेटू वितरकों और प्रीमियम उपहार देने वाले ब्रांडों के लिए उत्कृष्ट।'
    },
    '8.5mm-yellow': {
      title: '8.5 मिमी फ्रूट इलायची (पीली/हल्की)',
      subtitle: 'इंपीरियल पीला जंबो बोल्ड',
      sieve: '> 8.5 मिमी (व्यास मेष)',
      moisture: '10.2% अधिकतम नमी',
      weight: '445 - 465 ग्राम/लीटर परीक्षण वजन',
      color: 'शानदार सुनहरी पीली',
      desc: 'पेटू ग्रेड दृश्य इलायची। विशेष रूप से प्रीमियम उपहार देने, अंतरराष्ट्रीय लक्जरी पैकेजिंग और शाही मसाला मिश्रणों के लिए चुनी गई।'
    },
    '9mm-yellow': {
      title: '9.0 मिमी फ्रूट इलायची (पीली/हल्की)',
      subtitle: 'सुप्रीम रॉयल पीला जंबो',
      sieve: '> 9.0 मिमी (व्यास मेष)',
      moisture: '10.0% अधिकतम नमी',
      weight: '460 - 480 ग्राम/लीटर परीक्षण वजन',
      color: 'उत्कृष्ट रॉयल पीला',
      desc: 'दुनिया में सबसे दुर्लभ इलायची चयन। फली व्यास में 9.0 मिमी से अधिक, अंतिम बीज संख्या और सर्वोच्च वाष्पशील तेल सामग्री प्रदान करता है।'
    }
  };

  const productSpecsTa = {
    '6mm': {
      title: '6.0 மிமீ பச்சை ஏலக்காய்',
      subtitle: 'நடுத்தர தரம் (சாதாரண அளவு)',
      sieve: '> 6.0 மிமீ (விட்டம் வலை)',
      moisture: '12.0% அதிகபட்ச ஈரப்பதம்',
      weight: '360 - 380 கிராம்/லிட்டர் எடை',
      color: 'மென்மையான சாம்பல்-பச்சை',
      desc: 'ஏலங்களிலிருந்து கவனமாக தேர்ந்தெடுக்கப்பட்டது. சில்லறை பேக்கேஜிங் மற்றும் உணவக சப்ளையர்களுக்கு மிகவும் மலிவான மற்றும் உயர்தர தேர்வு. சிறந்த நறுமணம்.'
    },
    '7mm': {
      title: '7.0 மிமீ பச்சை ஏலக்காய்',
      subtitle: 'பிரீமியம் போல்ட் தரம் (AGEB)',
      sieve: '> 7.0 மிமீ (விட்டம் வலை)',
      moisture: '11.5% அதிகபட்ச ஈரப்பதம்',
      weight: '385 - 410 கிராம்/லிட்டர் எடை',
      color: 'ஒலிவ் பச்சை தரம்',
      desc: 'அரோமா எண்ணெய்கள் நிறைந்த முழுமையான ஏலக்காய் காய்கள். கேட்டரிங் மற்றும் சில்லறை வர்த்தகத்திற்கு ஏற்ற பிரீமியம் தரம்.'
    },
    '7.5mm': {
      title: '7.5 மிமீ பச்சை ஏலக்காய்',
      subtitle: 'எலைட் பிரீமியம் போல்ட்',
      sieve: '> 7.5 மிமீ (விட்டம் வலை)',
      moisture: '11.2% அதிகபட்ச ஈரப்பதம்',
      weight: '410 - 430 கிராம்/லிட்டர் எடை',
      color: 'அடர்ந்த மரகத பச்சை',
      desc: 'உலகளவில் அதிகம் விரும்பப்படும் ஏற்றுமதி தரம். சிறந்த நிறம், தரம் மற்றும் அதிக விதைகள் நிறைந்த காய்களை உறுதி செய்ய தரம் பிரிக்கப்பட்டது.'
    },
    '7.5-8mm': {
      title: '7.5 - 8.0 மிமீ பச்சை ஏலக்காய்',
      subtitle: 'சூப்பர் போல்ட் ஏற்றுமதி கலவை',
      sieve: '7.5 மிமீ - 8.0 மிமீ வரம்பு',
      moisture: '11.0% அதிகபட்ச ஈரப்பதம்',
      weight: '420 - 445 கிராம்/லிட்டர் எடை',
      color: 'மரகத பச்சை நிறம்',
      desc: 'மிகப்பெரிய பிரீமியம் போல்ட் காய்களைக் கொண்ட சிறந்த ஏற்றுமதி தரம். கறுப்பு நறுமண விதைகள் மற்றும் இரட்டை தரம் பிரிக்கப்பட்டது.'
    },
    '8mm': {
      title: '8.0 மிமீ பச்சை ஏலக்காய்',
      subtitle: 'சூப்பர் எக்ஸ்ட்ரா போல்ட் (சூப்பர் ஜம்போ)',
      sieve: '> 8.0 மிமீ (விட்டம் வலை)',
      moisture: '10.5% அதிகபட்ச ஈரப்பதம்',
      weight: '435 - 460 கிராம்/லிட்டர் எடை',
      color: 'அடர்ந்த காட்டு பச்சை',
      desc: 'இந்திய ஏலக்காய் தரத்தின் உச்சகட்டம். இரட்டை தரம் பிரிக்கும் செயல்முறை மூலம் தேர்ந்தெடுக்கப்பட்டது. பிரீமியம் பரிசு மற்றும் சர்வதேச வாடிக்கையாளர்களுக்கானது.'
    },
    '8.5mm': {
      title: '8.5 மிமீ பச்சை ஏலக்காய்',
      subtitle: 'இம்பீரியல் ஜம்போ போல்ட்',
      sieve: '> 8.5 மிமீ (விட்டம் வலை)',
      moisture: '10.2% அதிகபட்ச ஈரப்பதம்',
      weight: '455 - 475 கிராம்/லிட்டர் எடை',
      color: 'அழகிய அடர் பச்சை',
      desc: 'ஆடம்பர பரிசுப் பொதிகள், சர்வதேச பேக்கேஜிங் மற்றும் பிரீமியம் மசாலா கலவைகளுக்கு ஏற்ற சிறப்புத் தேர்வு.'
    },
    '9mm': {
      title: '9.0 மிமீ பச்சை ஏலக்காய்',
      subtitle: 'சுப்ரீம் ராயல் ஜம்போ',
      sieve: '> 9.0 மிமீ (விட்டம் வலை)',
      moisture: '10.0% அதிகபட்ச ஈரப்பதம்',
      weight: '470 - 490 கிராம்/லிட்டர் எடை',
      color: 'அரச பச்சை நிறம்',
      desc: 'உலகின் மிக அரிய ஏலக்காய் ரகம். 9.0 மிமீ விட்டம் கொண்ட காய்கள், அதிக விதைகளையும் சிறந்த நறுமண எண்ணெய்களையும் கொண்டது.'
    },
    '6mm-yellow': {
      title: '6.0 மிமீ பழ ஏலக்காய் (மஞ்சள்/வெளிர்)',
      subtitle: 'நடுத்தர தரம் (சாதாரண அளவு)',
      sieve: '> 6.0 மிமீ (விட்டம் வலை)',
      moisture: '12.0% அதிகபட்ச ஈரப்பதம்',
      weight: '350 - 370 கிராம்/லிட்டர் எடை',
      color: 'மஞ்சள் நிறம் (MGB)',
      desc: 'சீரான நிறத்தை உறுதி செய்ய கவனமாக தரம் பிரிக்கப்பட்டது. சில்லறை பேக்கேஜிங் மற்றும் உணவக சப்ளையர்களுக்கு மிகவும் மலிவான தேர்வு.'
    },
    '7mm-yellow': {
      title: '7.0 மிமீ பழ ஏலக்காய் (மஞ்சள்/வெளிர்)',
      subtitle: 'பிரீமியம் போல்ட் தரம் (MGEB)',
      sieve: '> 7.0 மிமீ (விட்டம் வலை)',
      moisture: '11.5% அதிகபட்ச ஈரப்பதம்',
      weight: '375 - 400 கிராம்/லிட்டர் எடை',
      color: 'பொன் மஞ்சள் நிறம்',
      desc: 'அரோமா எண்ணெய்கள் நிறைந்த முழுமையான ஏலக்காய் காய்கள். கேட்டரிங் மற்றும் சில்லறை வர்த்தகத்திற்கு ஏற்ற பிரீமியம் தரம்.'
    },
    '7.5mm-yellow': {
      title: '7.5 மிமீ பழ ஏலக்காய் (மஞ்சள்/வெளிர்)',
      subtitle: 'எலைட் பிரீமியம் போல்ட்',
      sieve: '> 7.5 மிமீ (விட்டம் வலை)',
      moisture: '11.2% அதிகபட்ச ஈரப்பதம்',
      weight: '400 - 420 கிராம்/லிட்டர் எடை',
      color: 'அடர்ந்த பொன் மஞ்சள்',
      desc: 'ஏற்றுமதி தரம். சிறந்த நிறம், தரம் மற்றும் அதிக விதைகள் நிறைந்த காய்களை உறுதி செய்ய தரம் பிரிக்கப்பட்டது.'
    },
    '7.5-8mm-yellow': {
      title: '7.5 - 8.0 மிமீ பழ ஏலக்காய் (மஞ்சள்/வெளிர்)',
      subtitle: 'சூப்பர் போல்ட் ஏற்றுமதி கலவை',
      sieve: '7.5 மிமீ - 8.0 மிமீ வரம்பு',
      moisture: '11.0% அதிகபட்ச ஈரப்பதம்',
      weight: '410 - 435 கிராம்/லிட்டர் எடை',
      color: 'மஞ்சள் நிறம்',
      desc: 'மிகப்பெரிய பிரீமியம் போல்ட் காய்களைக் கொண்ட சிறந்த தரம். கறுப்பு நறுமண விதைகள் மற்றும் இரட்டை தரம் பிரிக்கப்பட்டது.'
    },
    '8mm-yellow': {
      title: '8.0 மிமீ பழ ஏலக்காய் (மஞ்சள்/வெளிர்)',
      subtitle: 'சூப்பர் எக்ஸ்ட்ரா போல்ட் (ஜம்போ)',
      sieve: '> 8.0 மிமீ (விட்டம் வலை)',
      moisture: '10.5% அதிகபட்ச ஈரப்பதம்',
      weight: '425 - 450 கிராம்/லிட்டர் எடை',
      color: 'அடர்ந்த பொன் மஞ்சள் நிறம்',
      desc: 'மஞ்சள் ஏலக்காய் தரத்தின் உச்சகட்டம். இரண்டு முறை சல்லடை மூலம் தரம் பிரிக்கப்பட்டு, பிரீமியம் பரிசுப் பெட்டிகளுக்கு ஏற்றது.'
    },
    '8.5mm-yellow': {
      title: '8.5 மிமீ பழ ஏலக்காய் (மஞ்சள்/வெளிர்)',
      subtitle: 'இம்பீரியல் ஜம்போ போல்ட்',
      sieve: '> 8.5 மிமீ (விட்டம் வலை)',
      moisture: '10.2% அதிகபட்ச ஈரப்பதம்',
      weight: '445 - 465 கிராம்/லிட்டர் எடை',
      color: 'சொகுசு பொன் மஞ்சள்',
      desc: 'பரிசுப் பெட்டிகள் மற்றும் இம்பீரியல் நறுமண கலவைகளுக்கு ஏற்ற சிறப்பு தேர்வு.'
    },
    '9mm-yellow': {
      title: '9.0 மிமீ பழ ஏலக்காய் (மஞ்சள்/வெளிர்)',
      subtitle: 'சுப்ரீம் ராயல் ஜம்போ',
      sieve: '> 9.0 மிமீ (விட்டம் வலை)',
      moisture: '10.0% அதிகபட்ச ஈரப்பதம்',
      weight: '460 - 480 கிராம்/லிட்டர் எடை',
      color: 'அரச பொன் மஞ்சள் நிறம்',
      desc: 'உலகின் மிக அரிய மஞ்சள் ஏலக்காய் ரகம். 9.0 மிமீ விட்டம் கொண்ட காய்கள், அதிக விதைகளை கொண்டது.'
    }
  };

  let currentProductSpecs = productSpecsEn;

  const gradeNamesEn = {
    '6mm': '6.0 mm Standard Sized',
    '7mm': '7.0 mm Premium Bold (AGEB)',
    '7.5mm': '7.5 mm Elite Premium Bold',
    '7.5-8mm': '7.5 - 8.0 mm Super Bold Export Mix',
    '8mm': '8.0 mm Super Extra Bold (Jumbo)',
    '8.5mm': '8.5 mm Imperial Jumbo Bold',
    '9mm': '9.0 mm Supreme Royal Jumbo'
  };

  const gradeNamesHi = {
    '6mm': '6.0 मिमी मानक आकार',
    '7mm': '7.0 मिमी प्रीमियम बोल्ड (AGEB)',
    '7.5mm': '7.5 मिमी एलीट प्रीमियम बोल्ड',
    '7.5-8mm': '7.5 - 8.0 मिमी सुपर बोल्ड निर्यात मिक्स',
    '8mm': '8.0 मिमी सुपर एक्स्ट्रा बोल्ड (जंबो)',
    '8.5mm': '8.5 मिमी इंपीरियल जंबो बोल्ड',
    '9mm': '9.0 मिमी सुप्रीम रॉयल जंबो'
  };

  const gradeNamesTa = {
    '6mm': '6.0 மிமீ சாதாரண நடுத்தர அளவு',
    '7mm': '7.0 மிமீ பிரீமியம் போல்ட் (AGEB)',
    '7.5mm': '7.5 மிமீ எலைட் பிரீமியம் போல்ட்',
    '7.5-8mm': '7.5 - 8.0 மிமீ ஏற்றுமதி போல்ட் கலவை',
    '8mm': '8.0 மிமீ சூப்பர் எக்ஸ்ட்ரா போல்ட்',
    '8.5mm': '8.5 மிமீ இம்பீரியல் ஜம்போ போல்ட்',
    '9mm': '9.0 மிமீ சுப்ரீம் ராயல் ஜம்போ'
  };

  let currentGradeNames = gradeNamesEn;
  window.currentGradeNames = currentGradeNames;
  let currentLang = 'en';

  const viewSpecsBtns = document.querySelectorAll('.btn-view-specs');
  const modal = document.getElementById('product-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalBack = document.getElementById('modal-action-back-btn');
  const modalQuote = document.getElementById('modal-action-quote-btn');

  /* ==========================================================================
     PRODUCT CATEGORY TABS SWITCHER
     ========================================================================== */
  const tabGreen = document.getElementById('tab-green-cardamom');
  const tabYellow = document.getElementById('tab-yellow-cardamom');
  const gridGreen = document.getElementById('products-grid-green');
  const gridYellow = document.getElementById('products-grid-yellow');

  if (tabGreen && tabYellow && gridGreen && gridYellow) {
    tabGreen.addEventListener('click', () => {
      tabGreen.classList.add('active');
      tabYellow.classList.remove('active');
      gridGreen.style.display = 'grid';
      gridYellow.style.display = 'none';
      gridGreen.classList.add('active-grid');
      gridYellow.classList.remove('active-grid');
    });

    tabYellow.addEventListener('click', () => {
      tabYellow.classList.add('active');
      tabGreen.classList.remove('active');
      gridYellow.style.display = 'grid';
      gridGreen.style.display = 'none';
      gridYellow.classList.add('active-grid');
      gridGreen.classList.remove('active-grid');
    });
  }

  // Modal elements to update
  const mTitle = document.getElementById('modal-grade-title');
  const mType = document.getElementById('modal-grade-type');
  const mSieve = document.getElementById('modal-spec-sieve');
  const mMoisture = document.getElementById('modal-spec-moisture');
  const mWeight = document.getElementById('modal-spec-weight');
  const mColor = document.getElementById('modal-spec-color');
  const mDesc = document.getElementById('modal-spec-desc');

  let activeModalGradeKey = '';

  const openModal = (gradeKey) => {
    activeModalGradeKey = gradeKey;
    const data = currentProductSpecs[gradeKey];
    if (!data) return;

    mTitle.innerText = data.title;
    mType.innerText = data.subtitle;
    mSieve.innerText = data.sieve;
    mMoisture.innerText = data.moisture;
    mWeight.innerText = data.weight;
    mColor.innerText = data.color;
    mDesc.innerText = data.desc;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  };

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  viewSpecsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const grade = btn.getAttribute('data-grade');
      openModal(grade);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBack) modalBack.addEventListener('click', closeModal);

  // Close when clicking overlay
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Esc key close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });

  /* ---------- WRITE REVIEW MODAL LOGIC ---------- */
  const reviewModal = document.getElementById('review-modal');
  const writeReviewBtn = document.getElementById('write-review-btn');
  const reviewModalClose = document.getElementById('review-modal-close-btn');
  const reviewForm = document.getElementById('review-form');
  const reviewStars = document.getElementById('review-stars');
  const reviewRatingVal = document.getElementById('review-rating-val');
  const testimonialsGrid = document.querySelector('.testimonials-grid');

  // Open review modal
  if (writeReviewBtn && reviewModal) {
    writeReviewBtn.addEventListener('click', () => {
      reviewModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  // Close review modal
  const closeReviewModal = () => {
    if (reviewModal) {
      reviewModal.classList.remove('open');
      document.body.style.overflow = '';
      if (reviewForm) reviewForm.reset();
      // Reset stars to 5 selected
      updateStarsUI(5);
    }
  };

  if (reviewModalClose) {
    reviewModalClose.addEventListener('click', closeReviewModal);
  }

  if (reviewModal) {
    reviewModal.addEventListener('click', (e) => {
      if (e.target === reviewModal) closeReviewModal();
    });
  }

  // Esc key close for review modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && reviewModal && reviewModal.classList.contains('open')) {
      closeReviewModal();
    }
  });

  // Handle rating stars interaction
  const updateStarsUI = (val) => {
    reviewRatingVal.value = val;
    const stars = reviewStars.querySelectorAll('.star');
    stars.forEach(star => {
      const starVal = parseInt(star.getAttribute('data-value'));
      if (starVal <= val) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  };

  if (reviewStars) {
    const stars = reviewStars.querySelectorAll('.star');
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const val = parseInt(star.getAttribute('data-value'));
        updateStarsUI(val);
      });
    });
  }

  // Load reviews from localStorage on page load
  const loadLocalReviews = () => {
    const localReviews = JSON.parse(localStorage.getItem('lisha-local-reviews')) || [];
    localReviews.forEach(rev => {
      appendReviewToDOM(rev.name, rev.role, rev.text, rev.rating, false, true);
    });
  };

  // Helper to generate star HTML string based on rating
  const generateStarsHTML = (rating) => {
    let html = '<div class="star-rating-display" style="color:var(--gold); font-size:16px; margin-bottom:10px;">';
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        html += 'Γÿà';
      } else {
        html += '<span style="color:#ddd;">Γÿà</span>';
      }
    }
    html += '</div>';
    return html;
  };

  // Helper to append a review card dynamically
  const appendReviewToDOM = (name, role, text, rating, isDynamic = false, canDelete = true) => {
    if (!testimonialsGrid) return;
    const card = document.createElement('div');
    card.className = 't-card reveal';
    if (isDynamic) {
      card.classList.add('active');
    }
    
    // Initial letter avatar
    const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'U';
    
    const starsHtml = generateStarsHTML(rating);
    const deleteBtnHtml = canDelete ? `<button class="delete-review-btn" title="Delete Review">🗑️</button>` : '';

    card.innerHTML = `
      ${deleteBtnHtml}
      <div class="quote-mark">ΓÇ£</div>
      ${starsHtml}
      <p style="margin-top:5px;">${text}</p>
      <div class="t-person">
        <div class="avatar">${initials}</div>
        <div>
          <strong>${name}</strong>
          <span>${role}</span>
        </div>
      </div>
    `;
    testimonialsGrid.appendChild(card);

    // Attach listener to delete button
    if (canDelete) {
      const deleteBtn = card.querySelector('.delete-review-btn');
      if (deleteBtn) {
        deleteBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const confirmMsg = translations[currentLang]['review_delete_confirm'] || 'Are you sure you want to remove this review?';
          if (confirm(confirmMsg)) {
            // Remove card from DOM
            card.remove();
            
            // Remove review from localStorage
            const localReviews = JSON.parse(localStorage.getItem('lisha-local-reviews')) || [];
            const updatedReviews = localReviews.filter(rev => 
              !(rev.name === name && rev.role === role && rev.text === text && rev.rating === rating)
            );
            localStorage.setItem('lisha-local-reviews', JSON.stringify(updatedReviews));
          }
        });
      }
    }

    // If it's loaded from storage, observe it to reveal on scroll
    if (!isDynamic && typeof revealObserver !== 'undefined') {
      revealObserver.observe(card);
    }
  };

  // Handle Form Submission
  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('review-name').value.trim();
      const role = document.getElementById('review-role').value.trim();
      const text = document.getElementById('review-text').value.trim();
      const rating = parseInt(reviewRatingVal.value) || 5;

      if (!name || !role || !text) return;

      // Append to UI (pass isDynamic = true, canDelete = true to make it show immediately with delete option)
      appendReviewToDOM(name, role, text, rating, true, true);

      // Save to localStorage
      const localReviews = JSON.parse(localStorage.getItem('lisha-local-reviews')) || [];
      localReviews.push({ name, role, text, rating });
      localStorage.setItem('lisha-local-reviews', JSON.stringify(localReviews));

      // Display alert success message (localized if key exists)
      const successMsg = translations[currentLang]['review_alert_success'] || 'Thank you for your testimonial! Your review has been added to our board.';
      alert(successMsg);

      closeReviewModal();
    });
  }

  // Trigger initial reviews load
  loadLocalReviews();

  // Modal "Add to Cart" click: open Bulk Add modal for current grade
  if (modalQuote) {
    modalQuote.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
      const isYellow = activeModalGradeKey && activeModalGradeKey.includes('-yellow');
      const variety = isYellow ? 'yellow' : 'green';
      
      // openBulkModal comes from HTML injection previously
      if (typeof window.openBulkModal === 'function') {
        window.openBulkModal(activeModalGradeKey, variety);
      }
    });
  }

  /* ==========================================================================
     5. INTERACTIVE PROCESS TIMELINE
     ========================================================================== */
  const stepCards = document.querySelectorAll('.step-card');
  const stepContents = document.querySelectorAll('.step-desc-content');

  stepCards.forEach(card => {
    card.addEventListener('click', () => {
      const stepNum = card.getAttribute('data-step');
      
      // Toggle card state
      stepCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      // Toggle content panel state
      stepContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === `step-desc-${stepNum}`) {
          content.classList.add('active');
        }
      });
    });
  });

  /* ==========================================================================
     6. PACKAGING TAB SELECTOR
     ========================================================================== */
  const weightSelectors = document.querySelectorAll('.weight-selector');
  const pouchLabel = document.getElementById('current-pouch-label');

  const packingLabelsEn = {
    '1kg': 'Packaging: 1 kg Premium Pouch (Master Cartons of 20kg)',
    '5kg': 'Packaging: 5 kg Vacuum bags (Master Cartons of 20kg)',
    '10kg': 'Packaging: 10 kg Custom Box Packs',
    '25kg': 'Packaging: 25 kg Bulk Gunny Sacks with inner vapor liners'
  };

  const packingLabelsHi = {
    '1kg': 'पैकेजिंग: 1 किलोग्राम प्रीमियम पाउच (20 किलोग्राम के मास्टर कार्टन)',
    '5kg': 'पैकेजिंग: 5 किलोग्राम वैक्यूम बैग (20 किलोग्राम के मास्टर कार्टन)',
    '10kg': 'पैकेजिंग: 10 किलोग्राम कस्टम बॉक्स पैक',
    '25kg': 'पैकेजिंग: 25 किलोग्राम थोक गनी बोरी आंतरिक वाष्प लाइनर के साथ'
  };

  const packingLabelsTa = {
    '1kg': 'பேக்கேஜிங்: 1 கிலோ பிரீமியம் பை (20 கிலோ மாஸ்டர் அட்டைப்பெட்டி)',
    '5kg': 'பேக்கேஜிங்: 5 கிலோ வெற்றிடப் பை (20 கிலோ மாஸ்டர் அட்டைப்பெட்டி)',
    '10kg': 'பேக்கேஜிங்: 10 கிலோ தனிப்பயன் பெட்டிப் பொதிகள்',
    '25kg': 'பேக்கேஜிங்: 25 கிலோ மொத்த சாக்குகள் (உள் நீராவி பாதுகாப்புடன்)'
  };

  let currentPackingLabels = packingLabelsEn;

  weightSelectors.forEach(selector => {
    selector.addEventListener('click', () => {
      weightSelectors.forEach(s => s.classList.remove('active'));
      selector.classList.add('active');
      const wKey = selector.getAttribute('data-weight');
      if (pouchLabel) {
        pouchLabel.innerText = currentPackingLabels[wKey] || 'Selected Packaging';
      }
    });
  });

  // Initialize packaging label
  if (pouchLabel) {
    pouchLabel.innerText = currentPackingLabels['1kg'];
  }

  /* ==========================================================================
     7. INTERACTIVE QUOTE CALCULATOR (DYNAMIC DAILY RATES & GOOGLE SHEET SYNC)
     ========================================================================== */
  const calcGradeSelector = document.getElementById('calc-grade-selector');
  const calcQtyRange = document.getElementById('calc-qty-range');
  const calcQtyInput = document.getElementById('calc-qty-input');

  // Outputs
  const sumGrade = document.getElementById('summary-grade');
  const sumQty = document.getElementById('summary-qty');
  const sumPack = document.getElementById('summary-pack');
  const sumBags = document.getElementById('summary-bags');
  const sumPrice = document.getElementById('summary-price');

  // WhatsApp & Email Buttons
  const whatsappBtn = document.getElementById('calc-whatsapp-btn');
  const emailBtn = document.getElementById('calc-email-btn');

  /* ============================================================
     LIVE PRICING ENGINE — Google Apps Script API
     ΓùÅ Fetches on page load + every 30 seconds automatically
     ΓùÅ fetch() with cache:'no-store' + timestamp bust
     ΓùÅ On failure: keeps previous prices, shows ≡ƒö┤ Offline
     ΓùÅ On success: updates all UI sections instantly
     ΓùÅ Validates JSON before applying any prices
     ============================================================ */

  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwACoR0zmSAqRTA9S5ZIaXIiRKnH06d5bwIpYojjZnOQLGTsyWVpjPCkTL2oQ_YvD5s/exec';
  const GVIZ_FALLBACK_URL = 'https://docs.google.com/spreadsheets/d/1PVU_f2-5WpBw84nYviiDAuOk7BC_kL043u9Icxv1X8c/gviz/tq?tqx=out:json';

  // Sheet column mapping (0-indexed):
  // 0=Grade ID | 1=Product | 2=Variety | 3=Min Price/KG | 4=Max Price/KG | 5=Avg Price | 6=Updated Date | 7=Status

  let livePrices          = null;  // { gradeId: { min, max, avg } } — kept on failure
  let pricesLastUpdated   = '';
  let apiFetchFailed      = false;
  let pricePollInterval   = null;  // setInterval handle for 30-sec auto-refresh

  // ── Estimator state ──────────────────────────────────────────
  let calcVariety   = 'green';
  let estimateItems = [];

  // ── DOM references ───────────────────────────────────────────
  const varietyGreenBtn       = document.getElementById('variety-green');
  const varietyYellowBtn      = document.getElementById('variety-yellow');
  const calcAddItemBtn        = document.getElementById('calc-add-item-btn');
  const estimatorEmptyMsg     = document.getElementById('estimator-empty-msg');
  const estimatorTable        = document.getElementById('estimator-table');
  const estimatorTableBody    = document.getElementById('estimator-table-body');
  const estimatorTotalsSection= document.getElementById('estimator-totals-section');
  const summaryItemsCount     = document.getElementById('summary-items-count');

  /* ----------------------------------------------------------
     formatPriceDate — converts any date string to dd-MMM-yyyy
  ---------------------------------------------------------- */
  const formatPriceDate = (raw) => {
    if (!raw) return '';
    try {
      // Already formatted (e.g. "18-Jul-2026")
      if (/^\d{2}-[A-Za-z]{3}-\d{4}$/.test(raw)) return raw;
      const d = new Date(raw);
      if (isNaN(d.getTime())) return raw;
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      return `${String(d.getDate()).padStart(2,'0')}-${months[d.getMonth()]}-${d.getFullYear()}`;
    } catch {
      return raw;
    }
  };

  /* ----------------------------------------------------------
     parseAppsScriptJSON — reads Apps Script response
     Expected shape:
     { "status": "success", "data": [
         { "gradeId": "6mm", "minPrice": 1650, "maxPrice": 1720,
           "avgPrice": 1685, "updatedDate": "18-Jul-2026" }, ...
     ]}
  ---------------------------------------------------------- */
  const parseAppsScriptJSON = (text) => {
    let json;
    try { json = JSON.parse(text); }
    catch (e) { throw new Error('Apps Script response is not valid JSON: ' + e.message); }

    if (typeof json !== 'object' || json === null)
      throw new Error('Apps Script JSON root is not an object');
    if (json.status !== 'success')
      throw new Error('Apps Script returned status="' + json.status + '": ' + (json.message || 'no message'));
    if (!Array.isArray(json.data) || json.data.length === 0)
      throw new Error('Apps Script data array is missing or empty');

    const prices = {};
    let lastDate  = '';

    json.data.forEach((item, idx) => {
      // Validate each row
      const gradeId = typeof item.gradeId === 'string' ? item.gradeId.trim() : null;
      const min     = parseFloat(item.minPrice);
      const max     = parseFloat(item.maxPrice);
      const avg     = item.avgPrice !== undefined && item.avgPrice !== null
        ? parseFloat(item.avgPrice)
        : Math.round((min + max) / 2);
      const date    = item.updatedDate || '';

      if (!gradeId) { console.warn(`[Pricing] Row ${idx}: missing gradeId, skipping`); return; }
      if (isNaN(min))  { console.warn(`[Pricing] ${gradeId}: invalid minPrice "${item.minPrice}", skipping`); return; }
      if (isNaN(max))  { console.warn(`[Pricing] ${gradeId}: invalid maxPrice "${item.maxPrice}", skipping`); return; }
      if (isNaN(avg))  { console.warn(`[Pricing] ${gradeId}: invalid avgPrice "${item.avgPrice}", using computed`); }

      prices[gradeId] = { min, max, avg: isNaN(avg) ? Math.round((min + max) / 2) : avg };
      if (date) lastDate = date;
      console.log(`[Pricing] &#10003; ${gradeId}: min=₹${min} avg=₹${avg} max=₹${max}`);
    });

    return { prices, lastDate };
  };

  /* ----------------------------------------------------------
     parseGvizJSON — reads Gviz fallback response
     Columns: 0=GradeID 3=Min 4=Max 5=Avg 6=Date 7=Status
  ---------------------------------------------------------- */
  const parseGvizJSON = (text) => {
    const start = text.indexOf('{');
    const end   = text.lastIndexOf('}');
    if (start === -1 || end === -1) throw new Error('Gviz response contains no JSON object');

    let data;
    try { data = JSON.parse(text.substring(start, end + 1)); }
    catch (e) { throw new Error('Gviz JSON parse error: ' + e.message); }

    if (!data.table || !Array.isArray(data.table.rows))
      throw new Error('Gviz table.rows is missing');

    const prices = {};
    let lastDate  = '';

    data.table.rows.forEach((row, idx) => {
      if (!row.c || row.c.length < 8) { console.warn(`[Pricing/Gviz] Row ${idx} has <8 columns, skipping`); return; }
      const gradeId = row.c[0]?.v;
      const min     = row.c[3]?.v;
      const max     = row.c[4]?.v;
      const avgRaw  = row.c[5]?.v;
      const date    = row.c[6]?.f || '';
      const status  = row.c[7]?.v;

      if (!gradeId) return;
      if (status !== 'Active') { console.info(`[Pricing/Gviz] ${gradeId} status="${status}", skipping`); return; }
      if (min === null || min === undefined || max === null || max === undefined) {
        console.warn(`[Pricing/Gviz] ${gradeId}: missing min/max, skipping`); return;
      }

      const avg = (avgRaw !== null && avgRaw !== undefined) ? avgRaw : Math.round((min + max) / 2);
      prices[gradeId] = { min, max, avg };
      if (date) lastDate = date;
      console.log(`[Pricing/Gviz] &#10003; ${gradeId}: min=₹${min} avg=₹${avg} max=₹${max}`);
    });

    return { prices, lastDate };
  };

  /* ----------------------------------------------------------
     showStatusBadge — shows ≡ƒƒó Live or ≡ƒö┤ Offline indicator
  ---------------------------------------------------------- */
  const showStatusBadge = (isLive) => {
    const badge = document.getElementById('price-status-badge');
    if (!badge) return;
    badge.style.display = 'inline-flex';
    badge.style.alignItems = 'center';
    badge.style.gap = '5px';
    if (isLive) {
      badge.innerHTML = '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#2d7a4f;"></span> Live Market Data';
      badge.style.color  = '#2d7a4f';
    } else {
      badge.innerHTML = '<span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#c0392b;"></span> Offline — Retrying...';
      badge.style.color  = '#c0392b';
    }
  };

  /* ----------------------------------------------------------
     fetchGoogleSheetPrices — PRODUCTION FETCH
     ΓùÅ cache:'no-store' + ?t=timestamp on every call
     ΓùÅ On success  → apply new prices, update all UI, show ≡ƒƒó
     ΓùÅ On failure  → keep previous prices, show ≡ƒö┤, retry in 30s
  ---------------------------------------------------------- */
  const fetchGoogleSheetPrices = async () => {

    // Clear any old localStorage cache left from previous version
    ['lisha-prices-cache','lisha-prices-cache-time','lisha-prices-cache-date'].forEach(k => localStorage.removeItem(k));

    console.log('[Pricing] ≡ƒöä Fetching fresh prices...');
    const ts = '?t=' + Date.now();
    let parsedResult = null;

    // ── Attempt 1: Apps Script ─────────────────────────────
    try {
      const res = await fetch(APPS_SCRIPT_URL + ts, { cache: 'no-store' });
      console.log('[Pricing] Apps Script HTTP:', res.status);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const text = await res.text();
      console.log('[Pricing] Response preview:', text.substring(0, 200));
      if (!text.trim().startsWith('{')) throw new Error('Not JSON — likely HTML error page');
      parsedResult = parseAppsScriptJSON(text);
      console.log('[Pricing] Γ£à Apps Script OK. Grades:', Object.keys(parsedResult.prices).length);

    } catch (primaryErr) {
      console.warn('[Pricing] ΓÜá∩╕Å Apps Script failed:', primaryErr.message);
      console.warn('[Pricing] Trying Gviz fallback...');

      // ── Attempt 2: Gviz direct sheet query ────────────
      try {
        const res2 = await fetch(GVIZ_FALLBACK_URL + '&t=' + Date.now(), { cache: 'no-store' });
        console.log('[Pricing] Gviz HTTP:', res2.status);
        if (!res2.ok) throw new Error('HTTP ' + res2.status);
        const text2 = await res2.text();
        parsedResult = parseGvizJSON(text2);
        console.log('[Pricing] Γ£à Gviz OK. Grades:', Object.keys(parsedResult.prices).length);

      } catch (fallbackErr) {
        // ── BOTH FAILED: keep previous prices, show Offline ──
        console.error('[Pricing] Γ¥î Both sources failed.');
        console.error('  Apps Script:', primaryErr.message);
        console.error('  Gviz:', fallbackErr.message);

        // Only mark as failed if we have NO previous prices at all
        if (!livePrices) {
          apiFetchFailed = true;
          console.warn('[Pricing] No previous prices available — showing unavailable message');
        } else {
          console.warn('[Pricing] Keeping previous prices until next retry.');
        }

        showStatusBadge(false);
        showLastUpdated();
        updateQuote();
        return;  // Exit — retry happens automatically via setInterval
      }
    }

    // ── Validate parsed data ────────────────────────────────
    if (!parsedResult || Object.keys(parsedResult.prices).length === 0) {
      console.error('[Pricing] Γ¥î No Active grades in response');
      if (!livePrices) apiFetchFailed = true;
      showStatusBadge(false);
      showLastUpdated();
      updateQuote();
      return;
    }

    // ── Apply prices & update ALL UI sections ──────────────
    // IMPORTANT: Set state variables BEFORE calling refresh functions
    livePrices        = parsedResult.prices;
    window.livePrices = livePrices;
    pricesLastUpdated = formatPriceDate(parsedResult.lastDate);
    apiFetchFailed    = false;  // Must be false BEFORE getDailyPriceRange is called

    console.log('[Pricing] Γ£à Prices applied:', livePrices);
    console.log('[Pricing] Last Updated:', pricesLastUpdated);

    // Now refresh all existing items with the new prices (safe: apiFetchFailed=false)
    refreshEstimateItemPrices();

    showStatusBadge(true);
    showLastUpdated();
    updateQuote();  // Re-render table with updated pricePerKg and totals
  };

  /* ----------------------------------------------------------
     showLastUpdated — renders "Last Updated: dd-MMM-yyyy"
  ---------------------------------------------------------- */
  const showLastUpdated = () => {
    const el = document.getElementById('calc-last-updated-val');
    if (!el) return;
    if (pricesLastUpdated && !apiFetchFailed) {
      el.innerText   = 'Last Updated: ' + pricesLastUpdated;
      el.style.display = 'inline';
    } else if (apiFetchFailed && !livePrices) {
      el.innerText   = '';
      el.style.display = 'none';
    }
    // If apiFetchFailed but livePrices still exist (offline fallback) — keep showing last known date
  };

  /* ----------------------------------------------------------
     refreshEstimateItemPrices — re-calculates prices for all
     items already in the inquiry list using latest livePrices.
     Called after every successful price fetch.
  ---------------------------------------------------------- */
  const refreshEstimateItemPrices = () => {
    if (!livePrices || Object.keys(livePrices).length === 0) {
      console.warn('[Pricing] refreshEstimateItemPrices called but livePrices is empty — skipping');
      return;
    }
    estimateItems.forEach(item => {
      // getDailyPriceRange is safe here because livePrices is set and apiFetchFailed=false
      const priceInfo = getDailyPriceRange(item.grade, item.variety);
      if (priceInfo && !isNaN(priceInfo.min) && !isNaN(priceInfo.max)) {
        const avgPerKg = priceInfo.avg && priceInfo.avg > 0
          ? priceInfo.avg
          : Math.round((priceInfo.min + priceInfo.max) / 2);
        item.priceMin      = Math.round(priceInfo.min * item.qty);
        item.priceMax      = Math.round(priceInfo.max * item.qty);
        item.priceAvg      = Math.round(avgPerKg * item.qty);
        item.pricePerKg    = avgPerKg;  // ΓåÉ Avg @ ₹X/kg display
        item.isUnavailable = false;
        console.log(`[Pricing] Updated ${item.variety} ${item.grade}: avgPerKg=₹${avgPerKg}, totalAvg=₹${item.priceAvg}`);
      } else {
        console.warn(`[Pricing] No price found for ${item.variety} ${item.grade} during refresh`);
        item.isUnavailable = true;
      }
    });
  };

  /* ----------------------------------------------------------
     getLivePrice — looks up grade price from fetched data
     Returns { min, max, avg } or null if unavailable
  ---------------------------------------------------------- */
  const getLivePrice = (grade, variety) => {
    if (!livePrices) return null;
    // Green: key = "6mm" | Yellow: key = "Y6mm"
    const key = variety === 'yellow' ? 'Y' + grade : grade;
    const entry = livePrices[key];
    if (!entry) {
      console.warn('[Pricing] No price found for key:', key, '| Available keys:', Object.keys(livePrices));
      return null;
    }
    return entry;
  };

  /* ----------------------------------------------------------
     getDailyPriceRange — wrapper used throughout the calc
  ---------------------------------------------------------- */
  const getDailyPriceRange = (grade, variety = 'green') => {
    if (apiFetchFailed) return null;   // API down — show error
    return getLivePrice(grade, variety); // null if loading/not found
  };
  window.getDailyPriceRange = getDailyPriceRange;

  const getSelectedGrade = () => {
    const activeGradeBtn = calcGradeSelector.querySelector('.grade-radio-btn.selected');
    return activeGradeBtn ? activeGradeBtn.getAttribute('data-val') : '7.5mm';
  };

  // Get or initialize customer number from localStorage (e.g., "001", "002")
  const getCustomerNumber = () => {
    let num = parseInt(localStorage.getItem('lisha-customer-num'));
    if (isNaN(num) || num <= 0) {
      num = 1;
      localStorage.setItem('lisha-customer-num', num);
    }
    return String(num).padStart(3, '0');
  };

  // Increment customer number sequence
  const incrementCustomerNumber = () => {
    let num = parseInt(localStorage.getItem('lisha-customer-num')) || 1;
    localStorage.setItem('lisha-customer-num', num + 1);
    updateQuote();
  };

  const getActiveSelectionDetails = () => {
    const grade = getSelectedGrade();
    const qty = parseInt(calcQtyInput.value) || 5;

    // Packaging logic
    let packagingType = '';
    let totalBags = 0;
    
    if (qty < 100) {
      packagingType = translations[currentLang]['calc_pack_1kg'] || '1 kg Pouches (Packed inside Cartons)';
      totalBags = qty;
    } else if (qty >= 100 && qty < 500) {
      packagingType = translations[currentLang]['calc_pack_5kg'] || '5 kg Vacuum Sealed Bags';
      totalBags = Math.ceil(qty / 5);
    } else if (qty >= 500 && qty < 2000) {
      packagingType = translations[currentLang]['calc_pack_10kg'] || '10 kg Multi-Barrier Boxes';
      totalBags = Math.ceil(qty / 10);
    } else {
      packagingType = translations[currentLang]['calc_pack_25kg'] || '25 kg Heavy-Duty Gunny Bags with vapour-barrier liners';
      totalBags = Math.ceil(qty / 25);
    }

    const priceInfo = getDailyPriceRange(grade, calcVariety);

    return {
      grade,
      qty,
      packagingType,
      totalBags,
      priceMin: priceInfo ? priceInfo.min * qty : 0,
      priceMax: priceInfo ? priceInfo.max * qty : 0,
      priceAvg: priceInfo ? (priceInfo.avg || Math.round((priceInfo.min + priceInfo.max) / 2)) * qty : 0,
      pricePerKg: priceInfo ? (priceInfo.avg || Math.round((priceInfo.min + priceInfo.max) / 2)) : 0,
      isUnavailable: !priceInfo
    };
  };

  const deleteEstimateItem = (id) => {
    if (!id) return;
    const targetId = String(id);
    estimateItems = estimateItems.filter(item => String(item.id) !== targetId);
    window.estimateItems = estimateItems;
    
    // Also remove from myQuoteItems to keep sync
    if (typeof myQuoteItems !== 'undefined') {
      myQuoteItems = myQuoteItems.filter(i => String(i.id) !== targetId);
      if (typeof updateQuoteBadge === 'function') updateQuoteBadge();
      if (typeof renderQuotePanel === 'function') renderQuotePanel();
    }
    
    updateQuote();
  };
  window.deleteEstimateItem = deleteEstimateItem;

  const addEstimateItem = () => {
    const details = getActiveSelectionDetails();
    const newItemId = 'est_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
    
    // Check if item of same variety and grade already exists in cart, if so, merge them
    const existing = estimateItems.find(item => item.variety === calcVariety && item.grade === details.grade);
    if (existing) {
      existing.qty += details.qty;
      // Re-calculate packaging & prices for the merged quantity
      const mergedQty = existing.qty;
      let packagingType = '';
      let totalBags = 0;
      
      if (mergedQty < 100) {
        packagingType = translations[currentLang]['calc_pack_1kg'] || '1 kg Pouches (Packed inside Cartons)';
        totalBags = mergedQty;
      } else if (mergedQty >= 100 && mergedQty < 500) {
        packagingType = translations[currentLang]['calc_pack_5kg'] || '5 kg Vacuum Sealed Bags';
        totalBags = Math.ceil(mergedQty / 5);
      } else if (mergedQty >= 500 && mergedQty < 2000) {
        packagingType = translations[currentLang]['calc_pack_10kg'] || '10 kg Multi-Barrier Boxes';
        totalBags = Math.ceil(mergedQty / 10);
      } else {
        packagingType = translations[currentLang]['calc_pack_25kg'] || '25 kg Heavy-Duty Gunny Bags with vapour-barrier liners';
        totalBags = Math.ceil(mergedQty / 25);
      }
      
      const priceInfo = getDailyPriceRange(existing.grade, existing.variety);
      existing.packaging = packagingType;
      existing.packagingType = packagingType;
      existing.bags = totalBags;
      existing.priceMin = priceInfo ? priceInfo.min * mergedQty : 0;
      existing.priceMax = priceInfo ? priceInfo.max * mergedQty : 0;
      existing.priceAvg = priceInfo ? (priceInfo.avg || Math.round((priceInfo.min + priceInfo.max) / 2)) * mergedQty : 0;
      existing.pricePerKg = priceInfo ? (priceInfo.avg || Math.round((priceInfo.min + priceInfo.max) / 2)) : 0;
      existing.isUnavailable = !priceInfo;

      // Also sync existing item in myQuoteItems
      if (typeof myQuoteItems !== 'undefined') {
        const existingQuote = myQuoteItems.find(i => !i.isSample && i.variety === calcVariety && i.grade === details.grade);
        if (existingQuote) {
          existingQuote.qty = existing.qty;
          existingQuote.qtyKg = existing.qty;
          existingQuote.packagingName = existing.packaging;
          existingQuote.bags = existing.bags;
          existingQuote.pricePerKg = existing.pricePerKg;
          existingQuote.totalPrice = existing.priceAvg;
          existingQuote.priceMin = existing.priceMin;
          existingQuote.priceMax = existing.priceMax;
        }
      }
    } else {
      estimateItems.push({
        id: newItemId,
        variety: calcVariety,
        grade: details.grade,
        qty: details.qty,
        packaging: details.packagingType,
        packagingType: details.packagingType,
        bags: details.totalBags,
        priceMin: details.priceMin,
        priceMax: details.priceMax,
        priceAvg: details.priceAvg,
        pricePerKg: details.pricePerKg,
        isUnavailable: details.isUnavailable
      });

      // Keep myQuoteItems in sync
      if (typeof myQuoteItems !== 'undefined') {
        myQuoteItems.push({
          id: newItemId,
          isSample: false,
          grade: details.grade,
          variety: calcVariety,
          qty: details.qty,
          unit: 'kg',
          qtyKg: details.qty,
          packagingName: details.packagingType,
          packKg: 25,
          bags: details.totalBags,
          pricePerKg: details.pricePerKg,
          totalPrice: details.priceAvg,
          priceMin: details.priceMin,
          priceMax: details.priceMax
        });
      }
    }

    window.estimateItems = estimateItems;
    if (typeof updateQuoteBadge === 'function') updateQuoteBadge();
    if (typeof renderQuotePanel === 'function') renderQuotePanel();
    updateQuote();
  };

  const updateQuote = () => {
    if (!estimatorEmptyMsg || !estimatorTable) return;
    const custNum = getCustomerNumber();

    if (estimateItems.length === 0) {
      estimatorEmptyMsg.style.display = 'block';
      estimatorTable.style.display = 'none';
      estimatorTable.classList.add('hide-table');
      estimatorTableBody.innerHTML = '';
      if (estimatorTotalsSection) estimatorTotalsSection.style.display = 'none';
      const summaryItemsCountEl = document.getElementById('summary-items-count');
      if (summaryItemsCountEl) summaryItemsCountEl.innerText = '0';
      const invoiceIdEl = document.getElementById('invoice-id');
      if (invoiceIdEl) invoiceIdEl.innerText = `LT-EMPTY-${custNum}`;
      return;
    }

    estimatorEmptyMsg.style.display = 'none';
    estimatorTable.style.display = 'table';
    estimatorTable.classList.remove('hide-table');
    estimatorTotalsSection.style.display = 'block';
    estimatorTableBody.innerHTML = '';

    let totalQty = 0;
    let totalBags = 0;
    let totalPriceMin = 0;
    let totalPriceMax = 0;
    let totalPriceAvg = 0;
    let sizeCodes = [];
    let anyUnavailable = apiFetchFailed;

    estimateItems.forEach((item) => {
      if (!item.isSample) {
        totalQty += item.qty;
        totalBags += item.bags;
        totalPriceMin += item.priceMin;
        totalPriceMax += item.priceMax;
        totalPriceAvg += (item.priceAvg || 0);
        
        if (item.isUnavailable) anyUnavailable = true;
        
        const cleanSize = item.grade.replace('.','');
        if (!sizeCodes.includes(cleanSize)) sizeCodes.push(cleanSize);
      } else {
        totalPriceMin += (item.priceMin || item.priceAvg || 0);
        totalPriceMax += (item.priceMax || item.priceAvg || 0);
        totalPriceAvg += (item.priceAvg || 0);
        
        const cleanSize = item.grade ? item.grade.replace('.','') : 'SAMPLE';
        if (!sizeCodes.includes(cleanSize)) sizeCodes.push(cleanSize);
      }

      const tr = document.createElement('tr');
      tr.className = 'est-item-card';
      const varLabel = item.variety === 'yellow' ? 
        (translations[currentLang]['prod_tab_yellow'] || 'Fruit Cardamom (Yellow/Pale)') : 
        (translations[currentLang]['prod_tab_green'] || 'Green Cardamom');

      const sizeLabel = currentGradeNames[item.grade] || item.grade;

      if (item.isSample) {
        const ratePerKg = item.pricePerKg || 0;
        const sampleCost = item.priceAvg || 0;
        const sampleCostText = '₹' + sampleCost.toLocaleString('en-IN');
        const rateText = '₹' + ratePerKg.toLocaleString('en-IN') + '/kg';

        tr.innerHTML = `
          <td class="est-cell-item">
            <strong>${sizeLabel} ${varLabel}</strong>
            <span class="est-item-pack">Aroma-Lock Foil Sample Pouch &mdash; ${item.sampleSize}</span>
            <div style="margin: 4px 0 6px;">
              <span class="sample-paid-pill">Paid Sample &bull; No Free Sample</span>
            </div>
            <div class="est-mobile-stats">
              <div class="est-stat-pill">
                <span>Sample Size</span>
                <strong>${item.sampleSize}</strong>
              </div>
              <div class="est-stat-pill">
                <span>Rate / KG</span>
                <strong>${rateText}</strong>
              </div>
              <div class="est-stat-pill">
                <span>Sample Charge</span>
                <strong style="color:var(--green-900);">${sampleCostText}</strong>
              </div>
            </div>
          </td>
          
          <td class="est-cell-qty" style="text-align:right;">
            <strong>${item.sampleSize}</strong>
          </td>
          
          <td class="est-cell-bags" style="text-align:right;">
            <span>1 Pkt</span>
          </td>
          
          <td class="est-cell-price" style="text-align:right;">
            <span class="est-total-val">${sampleCostText}</span>
            <div style="font-size:11px; color:var(--muted); font-weight:normal;" class="est-desktop-rate">(${rateText})</div>
          </td>
          
          <td class="est-cell-action" style="text-align:center;">
            <button type="button" class="btn btn-sm btn-outline remove-item-btn est-del-btn" style="padding:4px 8px;font-size:12px;color:#dc3545;border:1px solid #dc3545;border-radius:4px;cursor:pointer;display:inline-flex;align-items:center;gap:4px;background:none;transition:all 0.2s ease;" data-id="${item.id}" onclick="window.deleteEstimateItem('${item.id}')" title="Remove sample from inquiry list">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="pointer-events:none;"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              <span>Remove</span>
            </button>
          </td>
        `;
      } else {
        const avg = item.pricePerKg || 0;
        const packName = item.packagingType || item.packaging || '25 kg Heavy-Duty Gunny Bags';
        const displayQty = item.displayQty || `${item.qty} KG`;
        const totalBagsText = `${item.bags} ${item.bags === 1 ? 'Bag' : 'Bags'}`;
        const priceValText = '₹' + (item.priceAvg || 0).toLocaleString('en-IN');
        const rateText = '₹' + avg.toLocaleString('en-IN') + '/kg';

        tr.innerHTML = `
          <td class="est-cell-item">
            <strong>${sizeLabel} ${varLabel}</strong>
            <span class="est-item-pack">${packName}</span>
            <div class="est-mobile-stats">
              <div class="est-stat-pill">
                <span>Quantity</span>
                <strong>${displayQty}</strong>
              </div>
              <div class="est-stat-pill">
                <span>Packaging</span>
                <strong>${totalBagsText}</strong>
              </div>
              <div class="est-stat-pill">
                <span>Rate / KG</span>
                <strong>${rateText}</strong>
              </div>
            </div>
          </td>
          
          <td class="est-cell-qty" style="text-align:right;">
            <strong>${displayQty}</strong>
          </td>
          
          <td class="est-cell-bags" style="text-align:right;">
            <span>${totalBagsText}</span>
          </td>
          
          <td class="est-cell-price" style="text-align:right;">
            <span class="est-total-val">${priceValText}</span>
            <div style="font-size:11px; color:var(--muted); font-weight:normal;" class="est-desktop-rate">(${rateText})</div>
          </td>
          
          <td class="est-cell-action" style="text-align:center;">
            <button type="button" class="btn btn-sm btn-outline remove-item-btn est-del-btn" style="padding:4px 8px;font-size:12px;color:#dc3545;border:1px solid #dc3545;border-radius:4px;cursor:pointer;display:inline-flex;align-items:center;gap:4px;background:none;transition:all 0.2s ease;" data-id="${item.id}" onclick="window.deleteEstimateItem('${item.id}')" title="Remove grade from inquiry list">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="pointer-events:none;"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              <span>Remove</span>
            </button>
          </td>
        `;
      }
      estimatorTableBody.appendChild(tr);
    });

    const removeBtns = estimatorTableBody.querySelectorAll('.remove-item-btn');
    removeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = btn.getAttribute('data-id') || (e.currentTarget && e.currentTarget.getAttribute('data-id'));
        if (id) {
          deleteEstimateItem(id);
        }
      });
    });

    const summaryItemsCountEl = document.getElementById('summary-items-count');
    if (summaryItemsCountEl) summaryItemsCountEl.innerText = String(estimateItems.length);
    
    const bulks = estimateItems.filter(i => !i.isSample);
    const samples = estimateItems.filter(i => i.isSample);
    const bulkKg = bulks.reduce((acc, i) => acc + (i.qty || 0), 0);
    const sampleGrams = samples.reduce((acc, i) => {
      let g = parseFloat(i.sampleSize) || 0;
      if (g <= 0 && i.qty) g = Math.round(i.qty * 1000);
      return acc + (g || 50);
    }, 0);

    let summaryQtyText = '';
    if (bulkKg > 0 && sampleGrams > 0) {
      summaryQtyText = `${bulkKg.toLocaleString('en-IN')} kg + ${sampleGrams}g (Samples)`;
    } else if (bulkKg > 0) {
      summaryQtyText = `${bulkKg.toLocaleString('en-IN')} kg`;
    } else {
      summaryQtyText = `${sampleGrams}g (Sample Request)`;
    }
    const summaryQtyEl = document.getElementById('summary-qty');
    if (summaryQtyEl) summaryQtyEl.innerText = summaryQtyText;

    let summaryBagsText = '';
    if (totalBags > 0 && samples.length > 0) {
      summaryBagsText = `${totalBags} ${totalBags === 1 ? 'Bag' : 'Bags'} + ${samples.length} Sample Pkt${samples.length > 1 ? 's' : ''}`;
    } else if (totalBags > 0) {
      summaryBagsText = `${totalBags} ${totalBags === 1 ? 'unit' : 'units'}`;
    } else {
      summaryBagsText = `${samples.length} Sample Pouch${samples.length > 1 ? 'es' : ''}`;
    }
    const summaryBagsEl = document.getElementById('summary-bags');
    if (summaryBagsEl) summaryBagsEl.innerText = summaryBagsText;
    
    const sumPriceEl = document.getElementById('summary-price');
    if (anyUnavailable) {
      sumPriceEl.innerHTML = 'Pending Inquiry';
      sumPriceEl.style.fontSize = '18px';
      sumPriceEl.style.color = 'var(--muted)';
    } else {
      sumPriceEl.innerHTML = `
        <span style="font-size:22px;font-weight:800;color:var(--green-900);">₹${totalPriceAvg.toLocaleString('en-IN')}</span>
        <div style="font-size:11.5px;color:var(--muted);margin-top:5px;">Estimated Avg Value (based on today's market)</div>
        <div style="font-size:11px;color:var(--muted);margin-top:3px;">Range: ₹${totalPriceMin.toLocaleString('en-IN')} – ₹${totalPriceMax.toLocaleString('en-IN')}</div>
      `;
      sumPriceEl.style.fontSize = '';
      sumPriceEl.style.color = '';
    }

    const sizesJoined = sizeCodes.length > 0 ? sizeCodes.join('-') : 'SAMPLES';
    const formattedId = `LT-${sizesJoined}-${Math.max(1, totalBags)}-${custNum}`;
    document.getElementById('invoice-id').innerText = formattedId;
  };
  window.updateQuote = updateQuote;
  window.estimateItems = estimateItems;
  window.setEstimateItems = (items) => {
    estimateItems = items;
    window.estimateItems = items;
  };
  
  // Variety Button selection actions
  if (varietyGreenBtn && varietyYellowBtn) {
    varietyGreenBtn.addEventListener('click', (e) => {
      e.preventDefault();
      calcVariety = 'green';
      varietyGreenBtn.classList.add('active');
      varietyYellowBtn.classList.remove('active');
    });

    varietyYellowBtn.addEventListener('click', (e) => {
      e.preventDefault();
      calcVariety = 'yellow';
      varietyYellowBtn.classList.add('active');
      varietyGreenBtn.classList.remove('active');
    });
  }

  // Add Item to Estimate cart action
  if (calcAddItemBtn) {
    calcAddItemBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addEstimateItem();
    });
  }

  // Bi-directional quantity inputs
  if (calcQtyRange && calcQtyInput) {
    calcQtyRange.addEventListener('input', (e) => {
      calcQtyInput.value = e.target.value;
    });

    calcQtyInput.addEventListener('input', (e) => {
      const val = parseInt(e.target.value) || 5;
      calcQtyRange.value = val > 5000 ? 5000 : val;
    });
  }

  // Grade selection radios click
  if (calcGradeSelector) {
    const calcGradeBtns = calcGradeSelector.querySelectorAll('.grade-radio-btn');
    calcGradeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        calcGradeBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });
  }

  // Trigger initial calculation and start live price polling from Google Sheets
  updateQuote();
  fetchGoogleSheetPrices(); // Immediate fetch on page load

  // Auto-refresh prices every 5 seconds — updates instantly when sheet changes
  pricePollInterval = setInterval(() => {
    console.log('[Pricing] ΓÅ▒ 5-second auto-refresh triggered');
    fetchGoogleSheetPrices();
  }, 5000);

  // Clean up polling when tab is hidden (battery/network friendly)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (pricePollInterval) { clearInterval(pricePollInterval); pricePollInterval = null; }
      console.log('[Pricing] Tab hidden — polling paused');
    } else {
      fetchGoogleSheetPrices(); // Fetch immediately on tab re-focus
      if (!pricePollInterval) {
        pricePollInterval = setInterval(() => {
          console.log('[Pricing] ΓÅ▒ Auto-refresh (resumed, 5s)');
          fetchGoogleSheetPrices();
        }, 5000);
      }
      console.log('[Pricing] Tab visible — polling resumed');
    }
  });

  /* ==========================================================================
     8. DISPATCH ACTION HANDLERS (WHATSAPP / EMAIL)
     ========================================================================== */
  const buildInquiryText = () => {
    const invoiceId = document.getElementById('invoice-id').innerText;
    const t = translations[currentLang] || translations['en'];

    let itemsDetails = '';
    let sampleDetails = '';
    
    let bulkCount = 1;
    let sampleCount = 1;

    estimateItems.forEach((item) => {
      const varName = item.variety === 'yellow' ? 'Fruit Cardamom' : 'Green Cardamom';
      const gradeName = currentGradeNames[item.grade] || item.grade;
      
      if (item.isSample) {
        const sampleCost = item.priceAvg || 0;
        const ratePerKg = item.pricePerKg || 0;
        sampleDetails += `  ${sampleCount}. ${varName} (${gradeName}) - Sample: ${item.sampleSize} [Paid Sample: Est. ₹${sampleCost.toLocaleString('en-IN')} @ ₹${ratePerKg.toLocaleString('en-IN')}/kg]\n`;
        sampleCount++;
      } else {
        itemsDetails += `  ${bulkCount}. ${varName} (${gradeName}) - ${item.displayQty || item.qty + ' KG'} (${item.bags} bags, ${item.packagingType})\n`;
        bulkCount++;
      }
    });

    let msg = `Hello Lisha Traders,\n\nI would like to request a quotation.\n\n`;
    msg += `INQUIRY ID: ${invoiceId}\n\n`;
    msg += `--- REQUIREMENTS ---\n`;
    if (itemsDetails) {
      msg += `\nBULK REQUIREMENTS:\n${itemsDetails}`;
    }
    if (sampleDetails) {
      msg += `\nPAID SAMPLE REQUESTS:\n${sampleDetails}`;
      msg += `  *Commercial Policy: Samples are charged pro-rata at daily auction rates. No free samples provided.*\n`;
    }
    
    msg += `\nPlease let me know the final pricing and availability.\nThank you!`;
    return msg;
  };
  
  const validateCompliance = () => {
    const terms = document.getElementById('agree-terms');
    const privacy = document.getElementById('agree-privacy');
    const accuracy = document.getElementById('agree-accuracy');
    if (terms && privacy && accuracy) {
      if (!terms.checked || !privacy.checked || !accuracy.checked) {
        alert('Please check all three compliance checkboxes to confirm you agree to our Terms, Privacy Policy, and accuracy statement.');
        return false;
      }
    }
    return true;
  };

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      if (estimateItems.length === 0) {
        alert('Please add at least one product to your quote first.');
        return;
      }
      
      if (!validateCompliance()) return;
      
      const msg = encodeURIComponent(buildInquiryText());
      const whatsappUrl = `https://wa.me/919342153357?text=${msg}`;
      window.open(whatsappUrl, '_blank');
      incrementCustomerNumber();
    });
  }

  if (emailBtn) {
    emailBtn.addEventListener('click', () => {
      if (estimateItems.length === 0) {
        alert('Please add at least one product to your quote first.');
        return;
      }

      if (!validateCompliance()) return;
      
      const invoiceIdEl = document.getElementById('invoice-id');
      const invId = invoiceIdEl ? invoiceIdEl.innerText : 'QUOTE';
      const subject = encodeURIComponent(`Bulk Quotation Request - ${invId}`);
      const body = encodeURIComponent(buildInquiryText());
      const mailtoUrl = `mailto:info@lishatraders.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
      incrementCustomerNumber();
    });
  }

  /* ==========================================================================
     9. INQUIRY FORM SUBMISSION
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const phone = document.getElementById('contact-phone').value;
      const msg = document.getElementById('contact-msg').value;

      // Construct WhatsApp link with form details as well
      const formattedMessage = `Hello Lisha Traders,\n\nMy name is ${name}. I am submitting a contact inquiry:\n\nEmail: ${email}\nPhone: ${phone}\nDetails: ${msg}`;
      const encodedText = encodeURIComponent(formattedMessage);
      
      // Let's redirect to WhatsApp or open it as standard flow
      const successMsg = translations[currentLang]['contact_alert_success'] || 'Thank you for submitting your bulk inquiry! Opening WhatsApp desk for immediate catalog locks.';
      alert(successMsg);
      window.open(`https://wa.me/919342153357?text=${encodedText}`, '_blank');
      
      contactForm.reset();
      incrementCustomerNumber();
    });
  }

  /* ==========================================================================
     9.5 SAMPLE REQUEST LOGIC
     ========================================================================== */
  
  // Handling Modal Sample Button
  const modalSampleBtn = document.getElementById('modal-action-sample-btn');
  if (modalSampleBtn) {
    modalSampleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
      const isYellow = activeModalGradeKey && activeModalGradeKey.includes('-yellow');
      const variety = isYellow ? 'yellow' : 'green';
      
      if (typeof window.openSampleModal === 'function') {
        window.openSampleModal(activeModalGradeKey, variety);
      }
    });
  }

  /* ==========================================================================
     10. 3D TRANSITION LOADER & MOUSE-TILT ANIMATIONS
     ========================================================================== */
  
  // A. Section & Page transition 3D loader
  const loader3d = document.getElementById('loader-3d');
  const loaderStatus = document.getElementById('loader-status');

  // Handle smooth arrival from cross-page transition
  try {
    if (sessionStorage.getItem('lisha_transition_active') === '1') {
      const savedText = sessionStorage.getItem('lisha_transition_text');
      if (savedText && loaderStatus) {
        loaderStatus.innerText = savedText;
      }
      if (loader3d) {
        loader3d.classList.add('active');
      }

      // If URL has a section anchor (e.g. index.html#calculator), scroll directly to it while covered
      if (window.location.hash) {
        const targetEl = document.querySelector(window.location.hash);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'auto' });
        }
      }

      // Reveal new page by sliding open panels
      setTimeout(() => {
        if (document.documentElement) {
          document.documentElement.classList.remove('transition-active');
        }
        if (loader3d) {
          loader3d.classList.remove('active');
        }
        sessionStorage.removeItem('lisha_transition_active');
        sessionStorage.removeItem('lisha_transition_text');
      }, 350);
    }
  } catch (e) {}

  // Helper to resolve friendly destination name in active language
  const getNavDestinationName = (href, linkEl) => {
    const rawHref = (href || '').trim();
    const cleanHref = rawHref.split('#')[0].split('/').pop();
    const hash = rawHref.includes('#') ? rawHref.split('#')[1] : '';

    const t = (typeof translations !== 'undefined' && translations[currentLang]) ? translations[currentLang] : (translations ? translations['en'] : {});

    if (hash === 'hero' || (cleanHref === 'index.html' && !hash) || (cleanHref === '' && hash === '')) {
      return (t && t['nav_home']) || 'Home';
    }
    if (hash === 'products') {
      return (t && t['nav_products']) || 'Products';
    }
    if (hash === 'calculator') {
      return (t && t['nav_calc']) || 'Quote Calculator';
    }
    if (hash === 'contact') {
      return (t && t['nav_contact']) || 'Contact';
    }
    if (cleanHref === 'about.html') {
      return (t && t['nav_about']) || 'About Us';
    }
    if (cleanHref === 'packaging.html') {
      return (t && t['nav_pack']) || 'Packaging';
    }
    if (cleanHref === 'gallery.html') {
      return (t && t['nav_gallery']) || 'Gallery';
    }

    if (linkEl && linkEl.innerText) {
      const txt = linkEl.innerText.replace('→', '').replace('↓', '').trim();
      if (txt) return txt;
    }
    return (t && t['nav_home']) || 'Home';
  };

  // Intercept navigation for Home, Products, Quote Calculator, About Us, Packaging, Gallery, and Contact
  const navTargets = ['hero', 'products', 'calculator', 'contact', 'about.html', 'packaging.html', 'gallery.html', 'index.html'];

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href === '#' || href.startsWith('javascript:') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('https://wa.me')) {
      return;
    }
    if (link.getAttribute('target') === '_blank') return;

    const cleanHref = href.split('#')[0].split('/').pop();
    const hash = href.includes('#') ? href.split('#')[1] : '';

    // Check if this link is a navigation link to our main 7 destinations
    const isNavMenu = link.closest('#nav-links, .nav-links, .footer-links-list') || link.classList.contains('brand-logo') || link.closest('.brand-logo');
    const isTargetDestination = navTargets.includes(hash) || navTargets.includes(cleanHref);

    if (!isNavMenu && !isTargetDestination) return;

    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    const isSamePage = (cleanHref === '' || cleanHref === currentFile || (cleanHref === 'index.html' && currentFile === 'index.html'));

    // Destination name & translated loading text
    const destinationName = getNavDestinationName(href, link);
    const loadingPrefix = (translations && translations[currentLang] && translations[currentLang]['loading_text']) || 'Loading';
    const fullLoadingText = `${loadingPrefix} ${destinationName}...`;

    // 1. In-page section transition
    if (isSamePage && hash) {
      const targetSection = document.getElementById(hash);
      if (targetSection) {
        e.preventDefault();
        if (loaderStatus) loaderStatus.innerText = fullLoadingText;
        if (loader3d) loader3d.classList.add('active');

        if (burgerMenu && navLinks) {
          burgerMenu.classList.remove('open');
          navLinks.classList.remove('open');
        }

        setTimeout(() => {
          targetSection.scrollIntoView({ behavior: 'auto' });
          setTimeout(() => {
            if (loader3d) loader3d.classList.remove('active');
          }, 250);
        }, 400);
        return;
      }
    }

    // 2. Same page top navigation (e.g. clicking Home on index.html)
    if (isSamePage && !hash) {
      e.preventDefault();
      if (loaderStatus) loaderStatus.innerText = fullLoadingText;
      if (loader3d) loader3d.classList.add('active');

      if (burgerMenu && navLinks) {
        burgerMenu.classList.remove('open');
        navLinks.classList.remove('open');
      }

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
        setTimeout(() => {
          if (loader3d) loader3d.classList.remove('active');
        }, 250);
      }, 400);
      return;
    }

    // 3. Cross-page navigation (e.g. index.html to about.html, about.html to index.html#products, etc.)
    const isInternalSitePage = ['index.html', 'about.html', 'packaging.html', 'gallery.html'].includes(cleanHref) || cleanHref === '';
    if (isInternalSitePage) {
      e.preventDefault();
      if (loaderStatus) loaderStatus.innerText = fullLoadingText;
      if (loader3d) loader3d.classList.add('active');

      if (burgerMenu && navLinks) {
        burgerMenu.classList.remove('open');
        navLinks.classList.remove('open');
      }

      try {
        sessionStorage.setItem('lisha_transition_active', '1');
        sessionStorage.setItem('lisha_transition_text', fullLoadingText);
      } catch (err) {}

      setTimeout(() => {
        window.location.href = href;
      }, 420);
    }
  });

  // B. Interactive 3D mouse card tilt
  const tiltElements = document.querySelectorAll('.p-card, .step-card, .t-card, .why-photo, .calculator-box');
  
  tiltElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      
      // Calculate tilt angles (max 10 degrees)
      const rx = ((yc - y) / yc) * 10;
      const ry = ((x - xc) / xc) * 10;
      
      element.style.setProperty('--rx', `${rx}deg`);
      element.style.setProperty('--ry', `${ry}deg`);
      element.style.setProperty('--tz', '15px');
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.setProperty('--rx', '0deg');
      element.style.setProperty('--ry', '0deg');
      element.style.setProperty('--tz', '0px');
    });
  });

  /* ==========================================================================
     11. MULTILINGUAL TRANSLATION & LANGUAGE SELECTOR
     ========================================================================== */
  const langModals = document.querySelectorAll('#lang-modal, #lang-modal-overlay, .lang-modal-overlay');
  const langModal = langModals[0] || null;
  const langDropdownBtn = document.getElementById('lang-dropdown-btn');
  const langDropdownMenu = document.getElementById('lang-dropdown-menu');

  // A. Set and apply active language translations
  const setLanguage = (lang, saveToStorage = true) => {
    // 1. Save state
    if (saveToStorage) {
      localStorage.setItem('lisha-lang', lang);
    }
    currentLang = lang;
    
    // Set html element classes & lang attribute
    if (document.documentElement) {
      if (saveToStorage || localStorage.getItem('lisha-lang')) {
        document.documentElement.classList.add('has-lang');
      }
      document.documentElement.classList.remove('lang-en', 'lang-hi', 'lang-ta');
      document.documentElement.classList.add(`lang-${lang}`);
      document.documentElement.setAttribute('lang', lang);
    }
    
    // 2. Set body styling classes
    document.body.classList.remove('lang-en', 'lang-hi', 'lang-ta');
    document.body.classList.add(`lang-${lang}`);
    
    // 3. Update active pointer references
    if (lang === 'hi') {
      currentProductSpecs = productSpecsHi;
      currentGradeNames = gradeNamesHi;
      currentPackingLabels = packingLabelsHi;
    } else if (lang === 'ta') {
      currentProductSpecs = productSpecsTa;
      currentGradeNames = gradeNamesTa;
      currentPackingLabels = packingLabelsTa;
    } else {
      currentProductSpecs = productSpecsEn;
      currentGradeNames = gradeNamesEn;
      currentPackingLabels = packingLabelsEn;
    }
    window.currentGradeNames = currentGradeNames;

    // 4. Update language indicator text
    if (langDropdownBtn) {
      langDropdownBtn.innerText = lang.toUpperCase();
    }

    // 5. Update static DOM elements with translation mapping
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // 5b. Update form field placeholders dynamically
    const pData = placeholders[lang];
    if (pData) {
      for (const id in pData) {
        const el = document.getElementById(id);
        if (el) el.setAttribute('placeholder', pData[id]);
      }
    }

    // 5c. Update legal links routing
    const suffix = lang === 'en' ? '' : `-${lang}`;
    
    const linkContactTerms = document.getElementById('link-contact-terms');
    if (linkContactTerms) linkContactTerms.href = `terms-and-conditions${suffix}.html`;
    
    const linkFooterTerms = document.getElementById('link-footer-terms');
    if (linkFooterTerms) linkFooterTerms.href = `terms-and-conditions${suffix}.html`;
    
    const linkFooterPrivacy = document.getElementById('link-footer-privacy');
    if (linkFooterPrivacy) linkFooterPrivacy.href = `privacy-policy${suffix}.html`;
    
    const linkFooterDisc = document.getElementById('link-footer-disc');
    if (linkFooterDisc) linkFooterDisc.href = `disclaimer${suffix}.html`;

    // 6. Refresh packaging tab display label
    const activeSelector = document.querySelector('.weight-selector.active');
    if (activeSelector && pouchLabel) {
      const wKey = activeSelector.getAttribute('data-weight');
      pouchLabel.innerText = currentPackingLabels[wKey] || 'Selected Packaging';
    }

    // 7. Refresh pricing calculator totals
    if (typeof updateQuote === 'function' && document.getElementById('calculator')) {
      try {
        updateQuote();
      } catch (e) {
        console.warn('[Calculator] updateQuote skipped:', e);
      }
    }
  };
  window.setLanguage = setLanguage;

  // B. Attach click event to language selector popup buttons
  langModals.forEach(modal => {
    const langModalBtns = modal.querySelectorAll('.lang-btn');
    langModalBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLang = btn.getAttribute('data-lang');
        if (typeof window.selectSiteLanguage === 'function') {
          window.selectSiteLanguage(selectedLang);
        } else {
          try { setLanguage(selectedLang); } catch (err) {}
          modal.classList.add('hide');
          modal.style.display = 'none';
          document.body.style.overflow = '';
        }
      });
    });
  });

  // C. Header dropdown trigger toggle
  if (langDropdownBtn && langDropdownMenu) {
    langDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdownBtn.parentElement.classList.toggle('open');
    });

    // Close dropdown menu if user clicks elsewhere
    document.addEventListener('click', () => {
      langDropdownBtn.parentElement.classList.remove('open');
    });

    // Header dropdown menu options bindings
    const dropdownOptions = langDropdownMenu.querySelectorAll('button');
    dropdownOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        const selectedLang = opt.getAttribute('data-lang');
        setLanguage(selectedLang);
        langDropdownBtn.parentElement.classList.remove('open');
      });
    });
  }

  // D. Initial checks on document load (language applies across the whole website)
  const isInternalTransition = sessionStorage.getItem('lisha_transition_active') === '1' || (document.documentElement && document.documentElement.classList.contains('hide-lang-modal'));
  const savedLang = localStorage.getItem('lisha-lang') || 'en';

  if (document.documentElement) {
    document.documentElement.classList.add('has-lang');
    document.documentElement.classList.remove('lang-en', 'lang-hi', 'lang-ta');
    document.documentElement.classList.add(`lang-${savedLang}`);
    document.documentElement.setAttribute('lang', savedLang);
  }

  // Pre-apply translations to page elements
  try { setLanguage(savedLang, false); } catch (e) {}

  if (langModals.length > 0) {
    // Only index.html has the language modal
    if (isInternalTransition) {
      // Arriving via internal navigation (Home, Products, Quote Calculator, Contact from subpages/sections):
      // Keep modal hidden so it does not interrupt navigation
      if (document.documentElement) {
        document.documentElement.classList.add('hide-lang-modal');
      }
      langModals.forEach(m => {
        m.classList.add('hide');
        m.style.display = 'none';
      });
      document.body.style.overflow = '';
      document.body.classList.add('hero-animate');
    } else {
      // Direct visit / starting of the website: MUST show Choose Your Language modal
      if (document.documentElement) {
        document.documentElement.classList.remove('hide-lang-modal');
      }
      langModals.forEach(m => {
        m.classList.remove('hide');
        m.style.display = '';
      });
      // Lock scroll until user picks a language
      document.body.style.overflow = 'hidden';
    }
  } else {
    // Subpages (about.html, packaging.html, gallery.html): no modal exists, ensure scroll is enabled
    document.body.style.overflow = '';
  }



  // E. Intersection Observer for Scroll-Triggered Motion Graphics
  const animateCounter = (el) => {
    if (el.classList.contains('counted')) return;
    el.classList.add('counted');
    const target = parseInt(el.getAttribute('data-target')) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress); // easeOutQuad
      const currentValue = Math.floor(easeProgress * target);
      el.innerText = currentValue.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        el.innerText = target.toLocaleString() + suffix;
      }
    };
    requestAnimationFrame(updateCount);
  };

  if (typeof IntersectionObserver !== 'undefined') {
    const motionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          if (entry.target.classList.contains('counter-stat')) {
            animateCounter(entry.target);
          }
        }
      });
    }, { threshold: 0.15 });

    // Add reveal-fade-up class dynamically to section layout wrappers
    document.querySelectorAll('.section-head, .why-photo-panel, .reveal-right, .process-steps, .step-desc-box, .packaging-grid, .calculator-box, .gallery-grid, .cta-section').forEach(el => {
      el.classList.add('reveal-fade-up');
      motionObserver.observe(el);
    });

    // Add stagger-reveal class dynamically to grid cards and columns
    document.querySelectorAll('.p-card, .why-photo, .feature, .t-card, .pack-card, .calc-form, .cta-info-item, .contact-card-item, .credential-badge').forEach(el => {
      el.classList.add('stagger-reveal');
      motionObserver.observe(el);
    });

    // Ensure all manually declared reveal elements are observed
    document.querySelectorAll('.reveal-fade-up, .stagger-reveal').forEach(el => {
      motionObserver.observe(el);
    });

    // Watch stats counter elements
    document.querySelectorAll('.counter-stat').forEach(el => {
      motionObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.section-head, .why-photo-panel, .reveal-right, .process-steps, .step-desc-box, .packaging-grid, .calculator-box, .gallery-grid, .cta-section, .p-card, .why-photo, .feature, .t-card, .pack-card, .calc-form, .cta-info-item, .contact-card-item, .credential-badge, .counter-stat').forEach(el => {
      el.classList.add('revealed');
    });
  }

  // G. GALLERY LIGHTBOX POPUP FEATURE (multi-image carousel)
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

  // Register Why Choose Us section layout elements for scroll animations
  if (typeof motionObserver !== 'undefined') {
    document.querySelectorAll('.why-choose-business, .why-image-wrapper, .why-cta-block').forEach(el => {
      el.classList.add('reveal-fade-up');
      motionObserver.observe(el);
    });
    document.querySelectorAll('.why-card, .why-stat-card, .why-trust-bar, .why-choose-business .counter-stat').forEach(el => {
      el.classList.add('stagger-reveal');
      motionObserver.observe(el);
    });
  }

  /* ==========================================================================
     HERO BUTTON ANIMATION
     ========================================================================== */
  const heroExploreBtn = document.getElementById('btn-hero-explore');
  const heroSampleBtn = document.getElementById('btn-hero-sample');
  const heroCalcBtn = document.getElementById('btn-hero-calc');

  if (heroExploreBtn && heroSampleBtn && heroCalcBtn) {
    // Normalize base classes
    heroExploreBtn.className = 'btn btn-outline';
    heroSampleBtn.className = 'btn btn-outline';
    heroCalcBtn.className = 'btn btn-outline';
    
    // Ensure Sample button retains its base inline gold color when not highlighted
    heroSampleBtn.style.borderColor = 'var(--gold)';
    heroSampleBtn.style.color = 'var(--gold)';

    let currentHeroBtnIndex = 0;
    
    const cycleHeroButtons = () => {
      // Remove all highlight classes
      heroExploreBtn.classList.remove('btn-hero-highlight-green');
      heroSampleBtn.classList.remove('btn-hero-highlight-gold');
      heroCalcBtn.classList.remove('btn-hero-highlight-green');
      
      // Apply the highlight to the current button
      if (currentHeroBtnIndex === 0) {
        heroExploreBtn.classList.add('btn-hero-highlight-green');
      } else if (currentHeroBtnIndex === 1) {
        heroSampleBtn.classList.add('btn-hero-highlight-gold');
      } else if (currentHeroBtnIndex === 2) {
        heroCalcBtn.classList.add('btn-hero-highlight-green');
      }
      
      currentHeroBtnIndex = (currentHeroBtnIndex + 1) % 3;
    };

    // Apply the first highlight immediately, then start the interval
    cycleHeroButtons();
    setInterval(cycleHeroButtons, 1000);
  }


  /* ==========================================================================
     MOBILE CATALOG MOCKUP ACCORDION & MODALS
     ========================================================================== */
  const mobileCards = document.querySelectorAll('.m-card-header');
  mobileCards.forEach(header => {
    header.addEventListener('click', () => {
      const parentCard = header.closest('.m-card');
      const isExpanded = parentCard.classList.contains('expanded');
      
      // Close all other cards
      document.querySelectorAll('.m-card.expanded').forEach(card => {
        card.classList.remove('expanded');
      });

      // Expand the clicked one if it wasn't already expanded
      if (!isExpanded) {
        parentCard.classList.add('expanded');
      }
    });
  });

  // Attach modal opening to the new mobile buttons
  const mobileSpecButtons = document.querySelectorAll('.btn-m-specs');
  mobileSpecButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const grade = btn.getAttribute('data-grade');
      if (grade) {
        openModal(grade);
      }
    });
  });

  // Attach modal opening to clickable images and titles
  const clickableSpecs = document.querySelectorAll('.clickable-spec');
  clickableSpecs.forEach(el => {
    el.addEventListener('click', () => {
      const grade = el.getAttribute('data-grade');
      if (grade) {
        openModal(grade);
      }
    });
  });
});


/* ==========================================================================
   MY QUOTE SYSTEM & ESTIMATE QUANTITY LOGIC
   ========================================================================== */

const defaultGradeNames = {
  '6mm': '6.0 mm Standard Medium',
  '7mm': '7.0 mm Premium Bold (AGEB)',
  '7.5mm': '7.5 mm Elite Premium Bold',
  '7.5-8mm': '7.5 - 8.0 mm Super Bold Export Mix',
  '8mm': '8.0 mm Super Extra Bold (Jumbo)',
  '8.5mm': '8.5 mm Imperial Jumbo Bold',
  '9mm': '9.0 mm Supreme Royal Jumbo'
};

const defaultGradePrices = {
  '6mm': { min: 1600, max: 1720, avg: 1660 },
  '7mm': { min: 1850, max: 2000, avg: 1925 },
  '7.5mm': { min: 2100, max: 2300, avg: 2200 },
  '7.5-8mm': { min: 2300, max: 2500, avg: 2400 },
  '8mm': { min: 2500, max: 2750, avg: 2625 },
  '8.5mm': { min: 2750, max: 3000, avg: 2875 },
  '9mm': { min: 3000, max: 3350, avg: 3175 },
  'Y6mm': { min: 1400, max: 1550, avg: 1475 },
  'Y7mm': { min: 1650, max: 1800, avg: 1725 },
  'Y7.5mm': { min: 1900, max: 2050, avg: 1975 },
  'Y7.5-8mm': { min: 2100, max: 2250, avg: 2175 },
  'Y8mm': { min: 2300, max: 2500, avg: 2400 },
  'Y8.5mm': { min: 2500, max: 2700, avg: 2600 },
  'Y9mm': { min: 2700, max: 2950, avg: 2825 }
};

window.getDailyPriceRange = function(grade, variety = 'green') {
  if (!grade) return { min: 2000, max: 2400, avg: 2200 };
  let cleanGrade = grade.replace('-yellow', '').trim();
  let cleanVariety = (variety === 'yellow' || grade.includes('-yellow')) ? 'yellow' : 'green';
  const key = cleanVariety === 'yellow' ? 'Y' + cleanGrade : cleanGrade;
  
  if (window.livePrices && window.livePrices[key]) {
    return window.livePrices[key];
  }
  if (defaultGradePrices[key]) {
    return defaultGradePrices[key];
  }
  return { min: 2000, max: 2400, avg: 2200 };
};

let myQuoteItems = [];
window.myQuoteItems = myQuoteItems;

// DOM Elements
const quotePanel = document.getElementById('my-quote-panel');
const quoteBadge = document.getElementById('floating-quote-badge');
const quoteCountText = document.getElementById('my-quote-count-text');
const quoteBulkItems = document.getElementById('quote-bulk-items');
const quoteSampleItems = document.getElementById('quote-sample-items');
const quoteEmptyMsg = document.getElementById('quote-empty-msg');
const quoteBulkList = document.getElementById('quote-bulk-list');
const quoteSampleList = document.getElementById('quote-sample-list');

const modalBulkAdd = document.getElementById('modal-bulk-add');
const modalReqSample = document.getElementById('modal-req-sample');
const bulkModalProduct = document.getElementById('bulk-modal-product');
const sampleModalProduct = document.getElementById('sample-modal-product');
const bulkQtyInput = document.getElementById('bulk-qty-input');
const bulkUnitSelect = document.getElementById('bulk-unit-select');
const bulkPackagingSelect = document.getElementById('bulk-packaging-select');
const sampleCustomInput = document.getElementById('sample-custom-input');

let currentActiveProduct = null;

// Generate unique ID
function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Panel Toggles
function openQuotePanel() {
  if (quotePanel) {
    quotePanel.classList.add('open');
    renderQuotePanel();
  }
}
window.openQuotePanel = openQuotePanel;

function closeQuotePanel() {
  if (quotePanel) {
    quotePanel.classList.remove('open');
  }
}
window.closeQuotePanel = closeQuotePanel;

// Real-time calculation inside the Estimate Quantity Modal
function updateBulkModalCalculations() {
  if (!currentActiveProduct) return;
  const input = document.getElementById('bulk-qty-input');
  const unitSelect = document.getElementById('bulk-unit-select');
  const packSelect = document.getElementById('bulk-packaging-select');
  
  let qty = parseFloat(input ? input.value : 500) || 0;
  if (qty < 0) qty = 0;
  const unit = unitSelect ? unitSelect.value : 'kg';
  
  // Normalize to KG
  let qtyKg = qty;
  if (unit === 'ton') qtyKg = qty * 1000;
  if (unit === 'gram') qtyKg = qty / 1000;
  
  // Package size in KG
  let packKg = 25;
  let packName = '25 kg Heavy-Duty Gunny Bags';
  if (packSelect) {
    packKg = parseFloat(packSelect.value) || 25;
    packName = packSelect.options[packSelect.selectedIndex].text;
  }
  
  // Calculate total bags/boxes/pouches
  let totalBags = 0;
  if (qtyKg > 0) {
    totalBags = Math.ceil(qtyKg / packKg);
  }
  
  let unitText = 'Bags';
  if (packKg === 1) unitText = 'Pouches';
  else if (packKg === 10) unitText = 'Boxes';
  
  // Fetch price per kg
  const priceInfo = (typeof window.getDailyPriceRange === 'function') 
    ? window.getDailyPriceRange(currentActiveProduct.grade, currentActiveProduct.variety) 
    : ((typeof getDailyPriceRange === 'function') ? getDailyPriceRange(currentActiveProduct.grade, currentActiveProduct.variety) : null);
  const ratePerKg = priceInfo ? (priceInfo.avg || Math.round((priceInfo.min + priceInfo.max) / 2)) : 2200;
  const totalPrice = Math.round(qtyKg * ratePerKg);
  
  // Update UI in the modal
  const elRate = document.getElementById('bulk-rate-per-kg');
  const elRange = document.getElementById('bulk-rate-range');
  const elWeight = document.getElementById('bulk-calc-weight');
  const elBags = document.getElementById('bulk-calc-bags');
  const elCalcRate = document.getElementById('bulk-calc-rate');
  const elTotal = document.getElementById('bulk-calc-total');
  
  if (elRate) elRate.innerText = '₹' + ratePerKg.toLocaleString('en-IN') + ' / kg';
  if (elRange && priceInfo) {
    elRange.innerText = `(₹${priceInfo.min.toLocaleString('en-IN')} – ₹${priceInfo.max.toLocaleString('en-IN')})`;
  }
  if (elWeight) elWeight.innerText = `${qtyKg.toLocaleString('en-IN')} kg (${qty} ${unit.toUpperCase()})`;
  if (elBags) elBags.innerText = `${totalBags.toLocaleString('en-IN')} ${unitText} (${packKg} kg each)`;
  if (elCalcRate) elCalcRate.innerText = '₹' + ratePerKg.toLocaleString('en-IN') + ' / kg';
  if (elTotal) elTotal.innerText = '₹' + totalPrice.toLocaleString('en-IN');
}
window.updateBulkModalCalculations = updateBulkModalCalculations;

// Bulk Modal Toggles
function openBulkModal(grade, variety) {
  let isYellow = (variety === 'yellow' || (grade && grade.includes('-yellow')));
  let cleanGrade = grade ? grade.replace('-yellow', '').trim() : '7.5mm';
  let cleanVariety = isYellow ? 'yellow' : 'green';
  
  currentActiveProduct = { grade: cleanGrade, rawGrade: grade, variety: cleanVariety };
  
  const gradeNamesObj = window.currentGradeNames || (typeof currentGradeNames !== 'undefined' ? currentGradeNames : defaultGradeNames);
  const gradeName = (gradeNamesObj && gradeNamesObj[cleanGrade]) || defaultGradeNames[cleanGrade] || cleanGrade;
  const varietyName = cleanVariety === 'yellow' ? 'Fruit Cardamom (Yellow/Pale)' : 'Green Cardamom';
  
  const prodTitleEl = document.getElementById('bulk-modal-product');
  if (prodTitleEl) {
    prodTitleEl.innerText = `${cleanGrade} ${varietyName} · ${gradeName}`;
  }
  
  // Reset initial inputs if needed
  const input = document.getElementById('bulk-qty-input');
  const unitSelect = document.getElementById('bulk-unit-select');
  const packSelect = document.getElementById('bulk-packaging-select');
  
  if (input && (!input.value || parseFloat(input.value) <= 0)) {
    input.value = 500;
  }
  if (unitSelect) unitSelect.value = 'kg';
  if (packSelect) packSelect.value = '25';
  
  updateBulkModalCalculations();
  
  const modal = document.getElementById('modal-bulk-add');
  if (modal) modal.classList.add('open', 'active');
}
window.openBulkModal = openBulkModal;

function closeBulkModal() {
  const modal = document.getElementById('modal-bulk-add');
  if (modal) modal.classList.remove('open', 'active');
  currentActiveProduct = null;
}
window.closeBulkModal = closeBulkModal;

// Stepper adjustment
function changeBulkQty(delta) {
  const input = document.getElementById('bulk-qty-input');
  const unitSelect = document.getElementById('bulk-unit-select');
  const unit = unitSelect ? unitSelect.value : 'kg';
  let val = parseFloat(input ? input.value : 0) || 0;
  
  let step = 50;
  if (unit === 'kg') step = 50;
  if (unit === 'gram') step = 100;
  if (unit === 'ton') step = 1;
  
  val += (delta * step);
  if (val < 1) val = 1;
  if (input) input.value = val;
  updateBulkModalCalculations();
}
window.changeBulkQty = changeBulkQty;

function setBulkPreset(amount) {
  const input = document.getElementById('bulk-qty-input');
  const unitSelect = document.getElementById('bulk-unit-select');
  if (input) input.value = amount;
  if (unitSelect) unitSelect.value = 'kg';
  updateBulkModalCalculations();
}
window.setBulkPreset = setBulkPreset;

function onBulkUnitChange() {
  updateBulkModalCalculations();
}
window.onBulkUnitChange = onBulkUnitChange;

// Sample Modal Toggles & Real-Time Calculation
function openSampleModal(grade, variety) {
  let isYellow = (variety === 'yellow' || (grade && grade.includes('-yellow')));
  let cleanGrade = grade ? grade.replace('-yellow', '').trim() : '7.5mm';
  let cleanVariety = isYellow ? 'yellow' : 'green';
  
  currentActiveProduct = { grade: cleanGrade, rawGrade: grade, variety: cleanVariety };
  const gradeNamesObj = window.currentGradeNames || (typeof currentGradeNames !== 'undefined' ? currentGradeNames : defaultGradeNames);
  const gradeName = (gradeNamesObj && gradeNamesObj[cleanGrade]) || defaultGradeNames[cleanGrade] || cleanGrade;
  const varietyName = cleanVariety === 'yellow' ? 'Fruit Cardamom (Yellow/Pale)' : 'Green Cardamom';
  
  const sampleProdEl = document.getElementById('sample-modal-product');
  if (sampleProdEl) {
    sampleProdEl.innerText = `${cleanGrade} ${varietyName} · ${gradeName}`;
  }
  
  // Set default to 50g
  const defaultRadio = document.querySelector('input[name="sample-qty"][value="50g"]');
  if (defaultRadio) defaultRadio.checked = true;
  const customIn = document.getElementById('sample-custom-input');
  if (customIn) customIn.value = '';

  updateSampleModalCalculations();

  const modal = document.getElementById('modal-req-sample');
  if (modal) modal.classList.add('open', 'active');
}
window.openSampleModal = openSampleModal;

function closeSampleModal() {
  const modal = document.getElementById('modal-req-sample');
  if (modal) modal.classList.remove('open', 'active');
  currentActiveProduct = null;
}
window.closeSampleModal = closeSampleModal;

function updateSampleModalCalculations() {
  if (!currentActiveProduct) return;
  const priceInfo = (typeof window.getDailyPriceRange === 'function')
    ? window.getDailyPriceRange(currentActiveProduct.grade, currentActiveProduct.variety)
    : ((typeof getDailyPriceRange === 'function') ? getDailyPriceRange(currentActiveProduct.grade, currentActiveProduct.variety) : null);
  const ratePerKg = priceInfo ? (priceInfo.avg || Math.round((priceInfo.min + priceInfo.max) / 2)) : 2200;

  // Rate banner
  const rateEl = document.getElementById('sample-rate-per-kg');
  const rangeEl = document.getElementById('sample-rate-range');
  if (rateEl) rateEl.innerText = '₹' + ratePerKg.toLocaleString('en-IN') + ' / kg';
  if (rangeEl && priceInfo) {
    rangeEl.innerText = `(₹${priceInfo.min.toLocaleString('en-IN')} – ₹${priceInfo.max.toLocaleString('en-IN')})`;
  }

  // Update preset prices
  const price50g = Math.round(0.05 * ratePerKg);
  const price100g = Math.round(0.10 * ratePerKg);
  const price250g = Math.round(0.25 * ratePerKg);

  const el50 = document.getElementById('sample-price-50g');
  const el100 = document.getElementById('sample-price-100g');
  const el250 = document.getElementById('sample-price-250g');
  if (el50) el50.innerText = '₹' + price50g.toLocaleString('en-IN');
  if (el100) el100.innerText = '₹' + price100g.toLocaleString('en-IN');
  if (el250) el250.innerText = '₹' + price250g.toLocaleString('en-IN');

  // Determine active selection
  let selectedVal = '50g';
  let weightGrams = 50;
  const radios = document.getElementsByName('sample-qty');
  for (let r of radios) {
    const parentLabel = r.closest('.sample-radio-card');
    if (r.checked) {
      selectedVal = r.value;
      if (parentLabel) parentLabel.classList.add('active');
    } else {
      if (parentLabel) parentLabel.classList.remove('active');
    }
  }

  if (selectedVal === '50g') weightGrams = 50;
  else if (selectedVal === '100g') weightGrams = 100;
  else if (selectedVal === '250g') weightGrams = 250;
  else if (selectedVal === 'custom') {
    const customIn = document.getElementById('sample-custom-input');
    let parsed = parseFloat(customIn ? customIn.value : 0) || 0;
    if (parsed <= 0) parsed = 50;
    weightGrams = parsed;
    const elCustom = document.getElementById('sample-price-custom');
    if (elCustom) {
      const customPrice = Math.round((weightGrams / 1000) * ratePerKg);
      elCustom.innerText = '₹' + customPrice.toLocaleString('en-IN');
    }
  }

  const weightKg = weightGrams / 1000;
  const currentSamplePrice = Math.round(weightKg * ratePerKg);

  const calcQtyEl = document.getElementById('sample-calc-qty');
  const calcRateEl = document.getElementById('sample-calc-rate');
  const calcTotalEl = document.getElementById('sample-calc-total');
  const submitTextEl = document.getElementById('sample-submit-btn-text');

  if (calcQtyEl) calcQtyEl.innerText = `${weightGrams} grams (${weightKg < 1 ? weightKg.toFixed(2) : weightKg} kg)`;
  if (calcRateEl) calcRateEl.innerText = '₹' + ratePerKg.toLocaleString('en-IN') + ' / kg';
  if (calcTotalEl) calcTotalEl.innerText = '₹' + currentSamplePrice.toLocaleString('en-IN');
  if (submitTextEl) submitTextEl.innerText = `Add Paid Sample to Quote (₹${currentSamplePrice.toLocaleString('en-IN')}) →`;
}
window.updateSampleModalCalculations = updateSampleModalCalculations;

function onSampleCustomInput() {
  const customRadio = document.querySelector('input[name="sample-qty"][value="custom"]');
  if (customRadio) customRadio.checked = true;
  updateSampleModalCalculations();
}
window.onSampleCustomInput = onSampleCustomInput;

// Confirm Add to Quote
function confirmAddBulk() {
  if (!currentActiveProduct) return;
  const input = document.getElementById('bulk-qty-input');
  const unitSelect = document.getElementById('bulk-unit-select');
  const packSelect = document.getElementById('bulk-packaging-select');
  
  let qty = parseFloat(input ? input.value : 0) || 0;
  if (qty <= 0) return;
  const unit = unitSelect ? unitSelect.value : 'kg';
  
  let qtyKg = qty;
  if (unit === 'ton') qtyKg = qty * 1000;
  if (unit === 'gram') qtyKg = qty / 1000;
  
  let packKg = 25;
  let packName = '25 kg Heavy-Duty Gunny Bags';
  if (packSelect) {
    packKg = parseFloat(packSelect.value) || 25;
    packName = packSelect.options[packSelect.selectedIndex].text;
  }
  
  const totalBags = Math.ceil(qtyKg / packKg);
  const priceInfo = (typeof window.getDailyPriceRange === 'function')
    ? window.getDailyPriceRange(currentActiveProduct.grade, currentActiveProduct.variety)
    : ((typeof getDailyPriceRange === 'function') ? getDailyPriceRange(currentActiveProduct.grade, currentActiveProduct.variety) : null);
  const ratePerKg = priceInfo ? (priceInfo.avg || Math.round((priceInfo.min + priceInfo.max) / 2)) : 2200;
  const totalPrice = Math.round(qtyKg * ratePerKg);
  const priceMin = priceInfo ? Math.round(priceInfo.min * qtyKg) : 0;
  const priceMax = priceInfo ? Math.round(priceInfo.max * qtyKg) : 0;
  
  // Check if item already exists in quote
  const existing = myQuoteItems.find(i => !i.isSample && i.grade === currentActiveProduct.grade && i.variety === currentActiveProduct.variety);
  if (existing) {
    existing.qty = qty;
    existing.unit = unit;
    existing.qtyKg = qtyKg;
    existing.packagingName = packName;
    existing.packKg = packKg;
    existing.bags = totalBags;
    existing.pricePerKg = ratePerKg;
    existing.totalPrice = totalPrice;
    existing.priceMin = priceMin;
    existing.priceMax = priceMax;
  } else {
    myQuoteItems.push({
      id: generateId(),
      isSample: false,
      grade: currentActiveProduct.grade,
      variety: currentActiveProduct.variety,
      qty: qty,
      unit: unit,
      qtyKg: qtyKg,
      packagingName: packName,
      packKg: packKg,
      bags: totalBags,
      pricePerKg: ratePerKg,
      totalPrice: totalPrice,
      priceMin: priceMin,
      priceMax: priceMax
    });
  }
  
  closeBulkModal();
  updateQuoteBadge();
  animateBadge();
  openQuotePanel();
}
window.confirmAddBulk = confirmAddBulk;

function confirmAddSample() {
  if (!currentActiveProduct) return;
  
  let sampleSize = '50g';
  let weightGrams = 50;
  const radios = document.getElementsByName('sample-qty');
  for (let r of radios) {
    if (r.checked) {
      if (r.value === 'custom') {
        const customIn = document.getElementById('sample-custom-input');
        let parsed = parseFloat(customIn ? customIn.value : 0) || 0;
        if (parsed <= 0) parsed = 50;
        weightGrams = parsed;
        sampleSize = `${parsed}g`;
      } else {
        sampleSize = r.value;
        weightGrams = parseFloat(r.value) || 50;
      }
      break;
    }
  }
  
  const weightKg = weightGrams / 1000;
  const priceInfo = (typeof window.getDailyPriceRange === 'function')
    ? window.getDailyPriceRange(currentActiveProduct.grade, currentActiveProduct.variety)
    : ((typeof getDailyPriceRange === 'function') ? getDailyPriceRange(currentActiveProduct.grade, currentActiveProduct.variety) : null);
  const ratePerKg = priceInfo ? (priceInfo.avg || Math.round((priceInfo.min + priceInfo.max) / 2)) : 2200;
  const samplePrice = Math.round(weightKg * ratePerKg);
  const samplePriceMin = priceInfo ? Math.round(weightKg * priceInfo.min) : samplePrice;
  const samplePriceMax = priceInfo ? Math.round(weightKg * priceInfo.max) : samplePrice;

  // Check if sample item already exists in quote
  const existing = myQuoteItems.find(i => i.isSample && i.grade === currentActiveProduct.grade && i.variety === currentActiveProduct.variety);
  if (existing) {
    existing.sampleSize = sampleSize;
    existing.weightGrams = weightGrams;
    existing.weightKg = weightKg;
    existing.pricePerKg = ratePerKg;
    existing.totalPrice = samplePrice;
    existing.priceMin = samplePriceMin;
    existing.priceMax = samplePriceMax;
  } else {
    myQuoteItems.push({
      id: generateId(),
      isSample: true,
      grade: currentActiveProduct.grade,
      variety: currentActiveProduct.variety,
      sampleSize: sampleSize,
      weightGrams: weightGrams,
      weightKg: weightKg,
      pricePerKg: ratePerKg,
      totalPrice: samplePrice,
      priceMin: samplePriceMin,
      priceMax: samplePriceMax,
      packagingName: 'Aroma-Lock Foil Sample Pouch'
    });
  }
  
  closeSampleModal();
  updateQuoteBadge();
  animateBadge();
  openQuotePanel();
}
window.confirmAddSample = confirmAddSample;

function removeQuoteItem(id) {
  const targetId = String(id);
  myQuoteItems = myQuoteItems.filter(i => String(i.id) !== targetId);
  window.myQuoteItems = myQuoteItems;
  if (typeof window.deleteEstimateItem === 'function') {
    window.deleteEstimateItem(targetId);
  } else if (typeof estimateItems !== 'undefined') {
    estimateItems = estimateItems.filter(i => String(i.id) !== targetId);
    if (typeof updateQuote === 'function') updateQuote();
  }
  updateQuoteBadge();
  renderQuotePanel();
}
window.removeQuoteItem = removeQuoteItem;

// UI Badge Updates
function updateQuoteBadge() {
  const badge = document.getElementById('floating-quote-badge');
  if (!badge) return;
  if (myQuoteItems.length > 0) {
    badge.style.display = 'flex';
    badge.innerText = myQuoteItems.length;
  } else {
    badge.style.display = 'none';
  }
}
window.updateQuoteBadge = updateQuoteBadge;

function animateBadge() {
  const badge = document.getElementById('floating-quote-badge');
  const floatBtn = document.getElementById('floating-quote-btn');
  if (badge) badge.style.transform = 'scale(1.5)';
  if (floatBtn) {
    floatBtn.classList.remove('jiggle');
    void floatBtn.offsetWidth; // trigger reflow
    floatBtn.classList.add('jiggle');
  }
  
  setTimeout(() => {
    if (badge) badge.style.transform = 'scale(1)';
    if (floatBtn) floatBtn.classList.remove('jiggle');
  }, 500);
}
window.animateBadge = animateBadge;

// Render "Build Your Quote" Side Panel
function renderQuotePanel() {
  const bulkItemsEl = document.getElementById('quote-bulk-items');
  const sampleItemsEl = document.getElementById('quote-sample-items');
  const emptyMsgEl = document.getElementById('quote-empty-msg');
  const bulkListEl = document.getElementById('quote-bulk-list');
  const sampleListEl = document.getElementById('quote-sample-list');
  const countTextEl = document.getElementById('my-quote-count-text');
  
  if (bulkItemsEl) bulkItemsEl.innerHTML = '';
  if (sampleItemsEl) sampleItemsEl.innerHTML = '';
  
  const bulks = myQuoteItems.filter(i => !i.isSample);
  const samples = myQuoteItems.filter(i => i.isSample);
  
  if (myQuoteItems.length === 0) {
    if (emptyMsgEl) emptyMsgEl.style.display = 'block';
    if (bulkListEl) bulkListEl.style.display = 'none';
    if (sampleListEl) sampleListEl.style.display = 'none';
    if (countTextEl) countTextEl.innerText = '0 items selected';
    const panelTotalVal = document.getElementById('panel-total-val');
    if (panelTotalVal) panelTotalVal.innerText = '₹0';
    const panelVol = document.getElementById('panel-total-vol');
    if (panelVol) panelVol.innerText = '0 kg';
    const panelBags = document.getElementById('panel-total-bags');
    if (panelBags) panelBags.innerText = '0 Units';
    return;
  }
  
  if (emptyMsgEl) emptyMsgEl.style.display = 'none';
  
  let panelTotal = 0;
  let panelTotalVol = 0;
  let panelTotalBags = 0;
  
  const gradeNamesObj = window.currentGradeNames || (typeof currentGradeNames !== 'undefined' ? currentGradeNames : defaultGradeNames);
  
  if (bulks.length > 0 && bulkListEl && bulkItemsEl) {
    bulkListEl.style.display = 'block';
    bulks.forEach(item => {
      const gradeName = (gradeNamesObj && gradeNamesObj[item.grade]) || defaultGradeNames[item.grade] || item.grade;
      const varietyName = item.variety === 'yellow' ? 'Fruit Cardamom' : 'Green Cardamom';
      const imgPath = item.variety === 'yellow' ? 'assets/images/yellow-cardamom-thumb.jpg' : 'assets/images/green-cardamom-thumb.jpg';
      
      let unitText = 'Bags';
      if (item.packKg === 1) unitText = 'Pouches';
      else if (item.packKg === 10) unitText = 'Boxes';
      
      panelTotal += (item.totalPrice || 0);
      panelTotalVol += (item.qtyKg || item.qty);
      panelTotalBags += (item.bags || 0);
      
      const el = document.createElement('div');
      el.className = 'quote-item';
      el.innerHTML = `
        <img src="${imgPath}" alt="${gradeName}">
        <div class="quote-item-info">
          <h5>${item.grade} ${varietyName}</h5>
          <p class="quote-item-sub">${gradeName}</p>
          <div class="quote-item-details-grid">
            <span class="quote-detail-pill"><strong>Qty:</strong> ${item.qty} ${item.unit.toUpperCase()}</span>
            <span class="quote-detail-pill"><strong>Bags:</strong> ${item.bags} ${unitText} (${item.packKg || 25}kg)</span>
            <span class="quote-detail-pill"><strong>Rate:</strong> ₹${(item.pricePerKg || 0).toLocaleString('en-IN')}/kg</span>
          </div>
          <div class="quote-item-price">
            <span class="quote-price-label">Estimated:</span>
            <span class="quote-price-val">₹${(item.totalPrice || 0).toLocaleString('en-IN')}</span>
          </div>
        </div>
        <div class="quote-item-actions">
          <svg onclick="removeQuoteItem('${item.id}')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" title="Remove Item"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </div>
      `;
      bulkItemsEl.appendChild(el);
    });
  } else if (bulkListEl) {
    bulkListEl.style.display = 'none';
  }
  
  if (samples.length > 0 && sampleListEl && sampleItemsEl) {
    sampleListEl.style.display = 'block';
    samples.forEach(item => {
      const gradeName = (gradeNamesObj && gradeNamesObj[item.grade]) || defaultGradeNames[item.grade] || item.grade;
      const varietyName = item.variety === 'yellow' ? 'Fruit Cardamom' : 'Green Cardamom';
      const imgPath = item.variety === 'yellow' ? 'assets/images/yellow-cardamom-thumb.jpg' : 'assets/images/green-cardamom-thumb.jpg';
      const sampleCost = item.totalPrice || Math.round((item.weightKg || 0.05) * (item.pricePerKg || 2200));
      
      panelTotal += sampleCost;
      panelTotalVol += (item.weightKg || 0.05);

      const el = document.createElement('div');
      el.className = 'quote-item';
      el.innerHTML = `
        <img src="${imgPath}" alt="${gradeName}">
        <div class="quote-item-info">
          <h5>${item.grade} ${varietyName}</h5>
          <p class="quote-item-sub">${gradeName}</p>
          <div style="margin: 4px 0 6px;">
            <span class="sample-paid-pill">Paid Sample &bull; No Free Sample</span>
          </div>
          <div class="quote-item-details-grid">
            <span class="quote-detail-pill"><strong>Size:</strong> ${item.sampleSize}</span>
            <span class="quote-detail-pill"><strong>Rate:</strong> ₹${(item.pricePerKg || 0).toLocaleString('en-IN')}/kg</span>
            <span class="quote-detail-pill"><strong>Pack:</strong> Foil Pouch</span>
          </div>
          <div class="quote-item-price">
            <span class="quote-price-label">Sample Cost:</span>
            <span class="quote-price-val">₹${sampleCost.toLocaleString('en-IN')}</span>
          </div>
        </div>
        <div class="quote-item-actions">
          <svg onclick="removeQuoteItem('${item.id}')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" title="Remove Item"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </div>
      `;
      sampleItemsEl.appendChild(el);
    });
  } else if (sampleListEl) {
    sampleListEl.style.display = 'none';
  }
  
  const bulkKg = bulks.reduce((acc, i) => acc + (i.qtyKg || i.qty || 0), 0);
  const sampleGrams = samples.reduce((acc, i) => acc + (i.weightGrams || (i.weightKg ? Math.round(i.weightKg * 1000) : 50)), 0);

  if (countTextEl) {
    if (bulks.length > 0 && samples.length > 0) {
      countTextEl.innerText = `${myQuoteItems.length} items · ${bulkKg.toLocaleString('en-IN')} kg + ${sampleGrams}g (${panelTotalBags} Bags + ${samples.length} Pouches)`;
    } else if (bulks.length > 0) {
      countTextEl.innerText = `${myQuoteItems.length} items · ${bulkKg.toLocaleString('en-IN')} kg (${panelTotalBags} Bags)`;
    } else {
      countTextEl.innerText = `${samples.length} sample item${samples.length > 1 ? 's' : ''} · ${sampleGrams}g (${samples.length} Pouch${samples.length > 1 ? 'es' : ''})`;
    }
  }
  
  const panelTotalVal = document.getElementById('panel-total-val');
  if (panelTotalVal) {
    panelTotalVal.innerText = panelTotal > 0 ? ('₹' + panelTotal.toLocaleString('en-IN')) : 'Pending Inquiry';
  }
  const panelVol = document.getElementById('panel-total-vol');
  if (panelVol) {
    if (bulkKg > 0 && sampleGrams > 0) {
      panelVol.innerText = `${bulkKg.toLocaleString('en-IN')} kg + ${sampleGrams}g`;
    } else if (bulkKg > 0) {
      panelVol.innerText = `${bulkKg.toLocaleString('en-IN')} kg`;
    } else {
      panelVol.innerText = `${sampleGrams}g (Sample)`;
    }
  }
  const panelBags = document.getElementById('panel-total-bags');
  if (panelBags) {
    if (panelTotalBags > 0 && samples.length > 0) {
      panelBags.innerText = `${panelTotalBags} Bags + ${samples.length} Pouches`;
    } else if (panelTotalBags > 0) {
      panelBags.innerText = `${panelTotalBags} Units`;
    } else {
      panelBags.innerText = `${samples.length} Sample Pouch${samples.length > 1 ? 'es' : ''}`;
    }
  }
}
window.renderQuotePanel = renderQuotePanel;

// Transfer to On-Page Quote Calculator
function continueToCalculator() {
  closeQuotePanel();
  
  const newItems = [];
  myQuoteItems.forEach(qItem => {
    if (!qItem.isSample) {
      newItems.push({
        id: qItem.id,
        isSample: false,
        grade: qItem.grade,
        variety: qItem.variety,
        qty: qItem.qtyKg,
        displayQty: `${qItem.qty} ${qItem.unit.toUpperCase()}`,
        packagingType: qItem.packagingName || '25 kg Heavy-Duty Gunny Bags',
        bags: qItem.bags,
        priceMin: qItem.priceMin || 0,
        priceMax: qItem.priceMax || 0,
        priceAvg: qItem.totalPrice || 0,
        pricePerKg: qItem.pricePerKg || 0,
        isUnavailable: false
      });
    } else {
      newItems.push({
        id: qItem.id,
        isSample: true,
        grade: qItem.grade,
        variety: qItem.variety,
        sampleSize: qItem.sampleSize,
        qty: qItem.weightKg || 0.05,
        displayQty: qItem.sampleSize,
        packagingType: 'Aroma-Lock Foil Sample Pouch (Paid)',
        bags: 1,
        priceMin: qItem.priceMin || 0,
        priceMax: qItem.priceMax || 0,
        priceAvg: qItem.totalPrice || 0,
        pricePerKg: qItem.pricePerKg || 0,
        isUnavailable: false
      });
    }
  });
  
  if (typeof window.setEstimateItems === 'function') {
    window.setEstimateItems(newItems);
  } else if (typeof estimateItems !== 'undefined') {
    estimateItems = newItems;
  }
  
  if (typeof window.updateQuote === 'function') {
    window.updateQuote();
  } else if (typeof updateQuote === 'function') {
    updateQuote();
  }
  
  const calcEl = document.getElementById('calculator');
  if (calcEl && typeof calcEl.scrollIntoView === 'function') {
    calcEl.scrollIntoView({ behavior: 'smooth' });
  }
}
window.continueToCalculator = continueToCalculator;

// Ensure modal closing when clicking outside
window.addEventListener('click', (e) => {
  const modalBulk = document.getElementById('modal-bulk-add');
  const modalSample = document.getElementById('modal-req-sample');
  if (e.target === modalBulk) closeBulkModal();
  if (e.target === modalSample) closeSampleModal();
});

