document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     TRANSLATIONS DICTIONARY (EN, HI, TA)
     ========================================================================== */
  const translations = {
    'en': {
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
      'hero_desc': 'Lisha Traders delivers premium quality green cardamom sourced directly from authentic auction houses and high-altitude plantations in Bodinayakanur, India.',
      'hero_btn_explore': 'Explore Grades →',
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
      'calc_disclaimer': '*Note: Cardamom prices fluctuate daily according to Bodinayakanur auction indexes. This is an estimated volume breakdown for supply planning. Actual price ranges will be locked in upon direct inquiry.',
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
      'test_1_quote': 'Lisha Traders provides consistently high-quality green cardamom. Their sieve measurements are extremely accurate, ensuring uniform sizing in every shipment. Sourcing is fast and reliable.',
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
      'foot_desc': 'Premium wholesale suppliers & sorting house of green cardamom. Sourced from Kerala plantations, sorting in Bodinayakanur, Tamil Nadu.',
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
      'why_biz_subheading': 'Lisha Traders supplies premium Indian green cardamom with a commitment to consistent quality, transparent business practices, and long-term customer relationships.',
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
      'why_badge_gst': 'Γ£ô GST Invoice Available',
      'why_badge_wholesale': 'Γ£ô Wholesale Orders',
      'why_badge_bulk': 'Γ£ô Bulk Supply',
      'why_badge_quality': 'Γ£ô Quality Checked',
      'why_badge_packaging': 'Γ£ô Secure Packaging',
      'why_badge_support': 'Γ£ô Responsive Support',
      'why_cta_title': 'Let\'s Build a Long-Term Business Relationship.',
      'why_cta_desc': 'Whether you are a wholesaler, distributor, retailer, or exporter, Lisha Traders is committed to supplying premium-quality green cardamom with reliable service and transparent communication.',
      'why_cta_btn_quote': 'Request Bulk Quote',
      'why_cta_btn_contact': 'Contact Us'
    },
    'hi': {
      'nav_home': 'αñ╣αÑïαñ«',
      'nav_products': 'αñëαññαÑìαñ¬αñ╛αñª',
      'nav_about': 'αñ╣αñ«αñ╛αñ░αÑç αñ¼αñ╛αñ░αÑç αñ«αÑçαñé',
      'nav_process': 'αñ╣αñ«αñ╛αñ░αÑÇ αñ¬αÑìαñ░αñòαÑìαñ░αñ┐αñ»αñ╛',
      'nav_pack': 'αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù',
      'nav_calc': 'αñàαñ¿αÑüαñ«αñ╛αñ¿ αñòαÑêαñ▓αñòαÑüαñ▓αÑçαñƒαñ░',
      'nav_gallery': 'αñùαÑêαñ▓αñ░αÑÇ',
      'nav_contact': 'αñ╕αñéαñ¬αñ░αÑìαñò',
      'btn_get_quote': 'αñòαÑïαñƒαÑçαñ╢αñ¿ αñ▓αÑçαñé →',
      'hero_eyebrow': 'αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñ¡αñ╛αñ░αññαÑÇαñ» αñçαñ▓αñ╛αñ»αñÜαÑÇ',
      'hero_title': 'αñ╢αÑüαñªαÑìαñº αñ╕αÑüαñùαñéαñºαÑñ <br><span>αñëαññαÑìαñòαÑâαñ╖αÑìαñƒ αñùαÑìαñ░αÑçαñíαÑñ</span> αñ╡αÑêαñ╢αÑìαñ╡αñ┐αñò αñ╡αñ┐αñ╢αÑìαñ╡αñ╕αñ¿αÑÇαñ»αÑñ',
      'hero_desc': 'αñ▓αÑÇαñ╢αñ╛ αñƒαÑìαñ░αÑçαñíαñ░αÑìαñ╕ αñ╕αÑÇαñºαÑç αñ¼αÑïαñíαñ┐αñ¿αñ╛αñ»αñ╛αñòαñ¿αÑéαñ░, αñ¡αñ╛αñ░αññ αñ«αÑçαñé αñ¬αÑìαñ░αñ╛αñ«αñ╛αñúαñ┐αñò αñ¿αÑÇαñ▓αñ╛αñ«αÑÇ αñÿαñ░αÑïαñé αñöαñ░ αñëαñÜαÑìαñÜ αñèαñéαñÜαñ╛αñê αñ╡αñ╛αñ▓αÑç αñ¼αñ╛αñùαñ╛αñ¿αÑïαñé αñ╕αÑç αñ¬αÑìαñ░αñ╛αñ¬αÑìαññ αñ╣αñ░αÑÇ αñçαñ▓αñ╛αñ»αñÜαÑÇ αñ¬αÑìαñ░αñªαñ╛αñ¿ αñòαñ░αññαñ╛ αñ╣αÑêαÑñ',
      'hero_btn_explore': 'αñùαÑìαñ░αÑçαñí αñªαÑçαñûαÑçαñé →',
      'hero_btn_calc': 'αñ«αÑéαñ▓αÑìαñ» αñùαñúαñ¿αñ╛ →',
      'hero_badge_title': '100% αñ¿αñ┐αñ░αÑìαñ»αñ╛αññ αñùαÑüαñúαñ╡αññαÑìαññαñ╛',
      'hero_badge_desc': 'αñÜαÑüαñ¿αñ┐αñéαñªαñ╛ αñ¢αñéαñƒαñ╛αñê αñöαñ░ αñùαÑìαñ░αÑçαñí αñ╕αññαÑìαñ»αñ╛αñ¬αñ¿',
      'products_eyebrow': 'αñëαññαÑìαñ¬αñ╛αñª αñ¬αÑïαñ░αÑìαñƒαñ½αÑïαñ▓αñ┐αñ»αÑï',
      'products_title': 'αñ╣αñ«αñ╛αñ░αÑÇ αñ╣αñ░αÑÇ αñçαñ▓αñ╛αñ»αñÜαÑÇ αñòαÑç αñùαÑìαñ░αÑçαñí',
      'specs_detail': 'αñ╡αñ┐αñ╡αñ░αñú αñöαñ░ αñ╕αÑìαñ¬αÑçαñòαÑìαñ╕',
      'tag_popular': 'αñ▓αÑïαñòαñ¬αÑìαñ░αñ┐αñ»',
      'tag_royal': 'αñ╢αñ╛αñ╣αÑÇ αñÜαñ»αñ¿',
      'btn_calc_bulk': 'αñÑαÑïαñò αñòαÑïαñƒαÑçαñ╢αñ¿ αñòαÑÇ αñùαñúαñ¿αñ╛ αñòαñ░αÑçαñé →',
      'grade_6_lbl': '6.0 αñ«αñ┐αñ«αÑÇ',
      'grade_7_lbl': '7.0 αñ«αñ┐αñ«αÑÇ',
      'grade_75_lbl': '7.5 αñ«αñ┐αñ«αÑÇ',
      'grade_75_8_lbl': '7.5 - 8.0 αñ«αñ┐αñ«αÑÇ',
      'grade_8_lbl': '8.0 αñ«αñ┐αñ«αÑÇ',
      'grade_85_lbl': '8.5 αñ«αñ┐αñ«αÑÇ',
      'grade_9_lbl': '9.0 αñ«αñ┐αñ«αÑÇ',
      'grade_6_sub': 'αñ«αñ╛αñ¿αñò αñåαñòαñ╛αñ░ (αñ«αñºαÑìαñ»αñ«)',
      'grade_7_sub': 'αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñ¼αÑïαñ▓αÑìαñí (AGEB)',
      'grade_75_sub': 'αñÅαñ▓αÑÇαñƒ αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñ¼αÑïαñ▓αÑìαñí',
      'grade_75_8_sub': 'αñ╕αÑüαñ¬αñ░ αñ¼αÑïαñ▓αÑìαñí αñ¿αñ┐αñ░αÑìαñ»αñ╛αññ αñ«αñ┐αñòαÑìαñ╕',
      'grade_8_sub': 'αñ╕αÑüαñ¬αñ░ αñÅαñòαÑìαñ╕αÑìαñƒαÑìαñ░αñ╛ αñ¼αÑïαñ▓αÑìαñí (αñ╕αÑüαñ¬αñ░ αñ£αñéαñ¼αÑï)',
      'grade_85_sub': 'αñçαñéαñ¬αÑÇαñ░αñ┐αñ»αñ▓ αñ£αñéαñ¼αÑï αñ¼αÑïαñ▓αÑìαñí',
      'grade_9_sub': 'αñ╕αÑüαñ¬αÑìαñ░αÑÇαñ« αñ░αÑëαñ»αñ▓ αñ£αñéαñ¼αÑï',
      'about_eyebrow': 'αñ╣αñ«αñ╛αñ░αÑÇ αñ╡αñ┐αñ░αñ╛αñ╕αññ',
      'about_title': 'αñÅαñò αñùαÑüαñúαñ╡αññαÑìαññαñ╛ αñ£αñ┐αñ╕ αñ¬αñ░ αñåαñ¬ αñ¡αñ░αÑïαñ╕αñ╛ αñòαñ░ αñ╕αñòαÑçαñé, αñÅαñò αñ╕αÑçαñ╡αñ╛ αñ£αñ┐αñ╕ αñ¬αñ░ αñåαñ¬ αñ¿αñ┐αñ░αÑìαñ¡αñ░ αñ╣αÑï αñ╕αñòαÑçαñéαÑñ',
      'feat_1_title': 'αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñ╕αÑëαñ░αÑìαñƒαñ░ αñùαÑüαñúαñ╡αññαÑìαññαñ╛',
      'feat_1_desc': 'αñ╕αñ«αñ╛αñ¿ αñ░αñéαñù αñöαñ░ αñ¿αÑìαñ»αÑéαñ¿αññαñ« αñûαñ╛αñ▓αÑÇ αñ½αñ▓αÑÇ αñ╕αÑüαñ¿αñ┐αñ╢αÑìαñÜαñ┐αññ αñòαñ░αñ¿αÑç αñòαÑç αñ▓αñ┐αñÅ αñíαñ¼αñ▓ αñ╕αÑëαñ░αÑìαñƒ αñöαñ░ αñÜαÑüαñ¿αñ┐αñéαñªαñ╛ αñ╣αñ╛αñÑ αñ╕αÑç αñÜαÑüαñ¿αÑÇ αñùαñêαÑñ',
      'feat_2_title': 'αñÿαñ░αÑçαñ▓αÑé αñöαñ░ αñ¿αñ┐αñ░αÑìαñ»αñ╛αññ αñ╢αñ┐αñ¬αñ┐αñéαñù',
      'feat_2_desc': 'αñ░αñ╛αñ£αÑìαñ»αÑïαñé αñöαñ░ αñ╡αÑêαñ╢αÑìαñ╡αñ┐αñò αñ¼αñéαñªαñ░αñùαñ╛αñ╣αÑïαñé αñ¬αñ░ αñ╕αñ«αñ» αñ¬αñ░ αñíαñ┐αñ▓αÑÇαñ╡αñ░αÑÇ αñòαÑç αñ▓αñ┐αñÅ αñ╡αñ┐αñ╢αÑìαñ╡αñ╕αñ¿αÑÇαñ» αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù αñöαñ░ αñòαñ╛αñ░αÑìαñùαÑï αñ╕αñ«αñ¿αÑìαñ╡αñ»αÑñ',
      'feat_3_title': 'αñ¿αÑÇαñ▓αñ╛αñ«αÑÇ αñöαñ░ αñòαñ┐αñ╕αñ╛αñ¿ αñ╕αÑìαñ░αÑïαññ',
      'feat_3_desc': 'αñ╡αñ┐αñ¿αñ┐αñ»αñ«αñ┐αññ αñ¿αÑÇαñ▓αñ╛αñ«αñ┐αñ»αÑïαñé αñöαñ░ αñ▓αñ╛αñçαñ╕αÑçαñéαñ╕ αñ¬αÑìαñ░αñ╛αñ¬αÑìαññ αñòαñ┐αñ╕αñ╛αñ¿αÑïαñé αñ╕αÑç αñ¬αÑìαñ░αññαÑìαñ»αñòαÑìαñ╖ αñ╕αñéαñùαÑìαñ░αñ╣ αñ¬αÑìαñ░αñ╛αñ«αñ╛αñúαñ┐αñò αñ«αÑéαñ▓ αñ╕αÑüαñ¿αñ┐αñ╢αÑìαñÜαñ┐αññ αñòαñ░αññαñ╛ αñ╣αÑêαÑñ',
      'feat_4_title': 'αñ▓αñÜαÑÇαñ▓αÑÇ αñÑαÑïαñò αñòαÑìαñ╖αñ«αññαñ╛αñÅαñé',
      'feat_4_desc': 'αñòαÑïαñê αñ¡αÑÇ αñåαñ╡αñ╢αÑìαñ»αñòαññαñ╛ αñ¼αñíαñ╝αÑÇ αñ¿αñ╣αÑÇαñé αñ╣αÑêαÑñ 100 αñòαñ┐αñ▓αÑïαñùαÑìαñ░αñ╛αñ« αñ╕αÑç αñ▓αÑçαñòαñ░ αñòαñéαñƒαÑçαñ¿αñ░ αññαñò αñ╕αÑìαñòαÑçαñ▓αÑçαñ¼αñ▓ αñåαñ¬αÑéαñ░αÑìαññαñ┐ αñ╢αÑìαñ░αÑâαñéαñûαñ▓αñ╛αÑñ',
      'feat_5_title': 'αñ¬αÑìαñ░αññαñ┐αñ╕αÑìαñ¬αñ░αÑìαñºαÑÇ αñ¬αÑìαñ░αññαÑìαñ»αñòαÑìαñ╖ αñ«αÑéαñ▓αÑìαñ» αñ¿αñ┐αñ░αÑìαñºαñ╛αñ░αñú',
      'feat_5_desc': 'αñ╕αÑÇαñºαÑç αñ¼αñóαñ╝αññαÑç αñ¼αÑçαñ▓αÑìαñƒ αñ╕αÑç αñ╕αÑïαñ░αÑìαñ╕αñ┐αñéαñù αñ╣αñ«αÑçαñé αñ¼αÑçαñ£αÑïαñíαñ╝ αñ«αÑéαñ▓αÑìαñ» αñ╕αñéαñ░αñÜαñ¿αñ╛αñÅαñé αñ¬αÑìαñ░αñªαñ╛αñ¿ αñòαñ░αñ¿αÑç αñòαÑÇ αñàαñ¿αÑüαñ«αññαñ┐ αñªαÑçαññαÑÇ αñ╣αÑêαÑñ',
      'feat_6_title': 'αñªαÑÇαñ░αÑìαñÿαñòαñ╛αñ▓αñ┐αñò αñ╡αÑìαñ»αñ╛αñ¬αñ╛αñ░ αñ½αÑïαñòαñ╕',
      'feat_6_desc': 'αñÑαÑïαñò αñ╡αñ┐αñòαÑìαñ░αÑçαññαñ╛αñôαñé αñòαÑç αñ╕αñ╛αñÑ αñ╡αñ┐αñ╢αÑìαñ╡αñ╕αñ¿αÑÇαñ» αñ╕αñ╛αñ¥αÑçαñªαñ╛αñ░αÑÇ αñ¼αñ¿αñ╛αñ¿αÑç αñòαÑç αñ▓αñ┐αñÅ αñ╣αñ« αñ¬αñ╛αñ░αñªαñ░αÑìαñ╢αÑÇ αñ«αñ╛αñ¿αñòαÑïαñé αñ¬αñ░ αñòαñ╛αñ« αñòαñ░αññαÑç αñ╣αÑêαñéαÑñ',
      'process_eyebrow': 'αñ«αñ╛αñ¿αñò αñ╕αñéαñÜαñ╛αñ▓αñ¿ αñ¬αÑìαñ░αñòαÑìαñ░αñ┐αñ»αñ╛',
      'process_title': 'αñòαñƒαñ╛αñê αñ╕αÑç αñ▓αÑçαñòαñ░ αñåαñ¬αñòαÑç αñ╕αÑìαñƒαÑëαñò αññαñò',
      'step_1_tab': '1. αñ╕αÑïαñ░αÑìαñ╕αñ┐αñéαñù',
      'step_2_tab': '2. αñ¿αÑÇαñ▓αñ╛αñ«αÑÇ',
      'step_3_tab': '3. αñ¢αñüαñƒαñ╛αñê',
      'step_4_tab': '4. αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù',
      'step_5_tab': '5. αñ¬αÑìαñ░αÑçαñ╖αñú (αñíαñ┐αñ╕αÑìαñ¬αÑêαñÜ)',
      'step_details_title': 'αñÜαñ░αñú αñ╡αñ┐αñ╡αñ░αñú',
      'step_1_title': '1. αñÜαÑüαñ¿αñ┐αñéαñªαñ╛ αñ╡αÑâαñòαÑìαñ╖αñ╛αñ░αÑïαñ¬αñú αñ╕αÑïαñ░αÑìαñ╕αñ┐αñéαñù',
      'step_1_desc': 'αñ╣αñ« αñ¬αñ╢αÑìαñÜαñ┐αñ«αÑÇ αñÿαñ╛αñƒ (αñÑαÑçαñ¿αÑÇ, αñçαñíαÑüαñòαÑìαñòαÑÇ, αñ«αÑüαñ¿αÑìαñ¿αñ╛αñ░ αñòαÑìαñ╖αÑçαññαÑìαñ░αÑïαñé) αñ«αÑçαñé αñ╕αÑìαñÑαñ┐αññ αñ╕αñ«αÑìαñ¬αñªαñ╛αñôαñé αñòαÑç αñ╕αñ╛αñÑ αñ╕αÑÇαñºαÑç αñ╕αñéαñ¼αñéαñº αñ¼αñ¿αñ╛αññαÑç αñ╣αÑêαñéαÑñ αñçαñ▓αñ╛αñ»αñÜαÑÇ αñòαÑÇ αñ½αñ▓αÑÇ αñ¬αÑéαñ░αÑÇ αññαñ░αñ╣ αñ╕αÑç αñ¬αñòαñ¿αÑç αñ¬αñ░ αññαÑïαñíαñ╝αÑÇ αñ£αñ╛αññαÑÇ αñ╣αÑêαÑñ αñëαñÜαÑìαñÜ αñèαñéαñÜαñ╛αñê αñ╕αÑç αñ╕αÑïαñ░αÑìαñ╕αñ┐αñéαñù αñ¼αÑÇαñ£αÑïαñé αñòαÑç αñ¡αÑÇαññαñ░ αñ╡αñ╛αñ╖αÑìαñ¬αñ╢αÑÇαñ▓ αñ¬αÑìαñ░αñ╛αñòαÑâαññαñ┐αñò αññαÑçαñ▓αÑïαñé αñòαÑç αñëαñÜαÑìαñÜαññαñ« αñÿαñ¿αññαÑìαñ╡ αñöαñ░ αñÅαñòαñ╛αñùαÑìαñ░αññαñ╛ αñòαÑÇ αñùαñ╛αñ░αñéαñƒαÑÇ αñªαÑçαññαÑÇ αñ╣αÑêαÑñ',
      'step_2_title': '2. αñ╡αñ┐αñ¿αñ┐αñ»αñ«αñ┐αññ αñ«αñ╕αñ╛αñ▓αñ╛ αñ¼αÑïαñ░αÑìαñí αñ¿αÑÇαñ▓αñ╛αñ«αÑÇ',
      'step_2_desc': 'αñ╣αñ« αñ¼αÑïαñíαñ┐αñ¿αñ╛αñ»αñ╛αñòαñ¿αÑéαñ░ αñöαñ░ αñ╡αñéαñªαñ¿αñ«αÑçαññαÑìαññαÑü αñ«αÑçαñé αñ¡αñ╛αñ░αññαÑÇαñ» αñ«αñ╕αñ╛αñ▓αñ╛ αñ¼αÑïαñ░αÑìαñí αñªαÑìαñ╡αñ╛αñ░αñ╛ αñ¬αñ░αÑìαñ»αñ╡αÑçαñòαÑìαñ╖αñ┐αññ αñåαñºαñ┐αñòαñ╛αñ░αñ┐αñò αñ¿αÑÇαñ▓αñ╛αñ«αñ┐αñ»αÑïαñé αñ«αÑçαñé αñ╕αñòαÑìαñ░αñ┐αñ» αñ░αÑéαñ¬ αñ╕αÑç αñ¡αñ╛αñù αñ▓αÑçαññαÑç αñ╣αÑêαñéαÑñ αñ»αñ╣ αñ¬αÑéαñ░αÑìαñú αñ¬αñ╛αñ░αñªαñ░αÑìαñ╢αñ┐αññαñ╛, αñ¿αñ┐αñ»αñ╛αñ«αñò αñ«αñéαñ£αÑéαñ░αÑÇ, αñ░αñ╛αñ╕αñ╛αñ»αñ¿αñ┐αñò αñ¬αñ░αÑÇαñòαÑìαñ╖αñú αñàαñ¿αÑüαñ¬αñ╛αñ▓αñ¿ αñöαñ░ αñëαñÜαñ┐αññ αñ«αÑéαñ▓αÑìαñ» αñ¿αñ┐αñ░αÑìαñºαñ╛αñ░αñú αñ»αñ╛αñéαññαÑìαñ░αñ┐αñòαÑÇ αñ╕αÑüαñ¿αñ┐αñ╢αÑìαñÜαñ┐αññ αñòαñ░αññαñ╛ αñ╣αÑêαÑñ',
      'step_3_title': '3. αñ╕αñûαÑìαññ αñ»αñ╛αñéαññαÑìαñ░αñ┐αñò αñöαñ░ αñ«αÑêαñ¿αÑüαñàαñ▓ αñùαÑìαñ░αÑçαñíαñ┐αñéαñù',
      'step_3_desc': 'αñûαñ░αÑÇαñªαÑç αñùαñÅ αñ¬αÑëαñíαÑìαñ╕ αñòαÑï αñåαñòαñ╛αñ░ αñ╕αÑÇαñ«αñ╛ αñòαÑï αñ╕αñƒαÑÇαñò αñ░αÑéαñ¬ αñ╕αÑç αñ¬αñ░αñ┐αñ¡αñ╛αñ╖αñ┐αññ αñòαñ░αñ¿αÑç αñòαÑç αñ▓αñ┐αñÅ αñ¢αñ▓αñ¿αÑÇ αñ╕αÑç αñ¢αñ╛αñ¿αñ╛ αñ£αñ╛αññαñ╛ αñ╣αÑê (5.5 αñ«αñ┐αñ«αÑÇ αñ╕αÑç 8 αñ«αñ┐αñ«αÑÇ+)αÑñ αñçαñ╕αñòαÑç αñ¼αñ╛αñª, αñ╡αñ┐αñ£αÑüαñàαñ▓ αñçαñéαñ╕αÑìαñ¬αÑçαñòαÑìαñƒαñ░ αñ¿αñ┐αñ»αñéαññαÑìαñ░αñ┐αññ αñ¬αÑìαñ░αñ»αÑïαñùαñ╢αñ╛αñ▓αñ╛ αñùαÑìαñ░αÑçαñí αñ╕αÑçαñƒαñ┐αñéαñùαÑìαñ╕ αñòαÑç αññαñ╣αññ αñ╣αñ▓αÑìαñòαÑç αñ¬αÑëαñíαÑìαñ╕, αñÑαÑìαñ░αñ┐αñ¬αÑìαñ╕-αñòαÑìαñ╖αññαñ┐αñùαÑìαñ░αñ╕αÑìαññ αñ¬αÑëαñíαÑìαñ╕, αñ╡αñ┐αñ¡αñ╛αñ£αñ┐αññ αñ¬αÑëαñíαÑìαñ╕ αñöαñ░ αñ¼αñ╛αñ╣αñ░αÑÇ αñ╕αñ╛αñ«αñùαÑìαñ░αÑÇ αñòαÑï αñ¢αñ╛αñéαñƒαññαÑç αñ╣αÑêαñéαÑñ',
      'step_4_title': '4. αñ¿αñ«αÑÇ αñöαñ░ αñ╕αÑüαñùαñéαñº αñ╕αñéαñ░αñòαÑìαñ╖αñú αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù',
      'step_4_desc': 'αñ╡αñ░αÑìαñùαÑÇαñòαÑâαññ αñçαñ▓αñ╛αñ»αñÜαÑÇ αñòαÑï αñ¿αñ┐αñùαñ░αñ╛αñ¿αÑÇ αñ╡αñ╛αñ▓αÑÇ αñåαñ░αÑìαñªαÑìαñ░αññαñ╛ αñòαÑç αññαñ╣αññ αñ╕αñéαñùαÑìαñ░αñ╣αñ┐αññ αñòαñ┐αñ»αñ╛ αñ£αñ╛αññαñ╛ αñ╣αÑêαÑñ αñ╣αñ« αñåαñ░αÑìαñíαñ░αÑïαñé αñòαÑï αñûαñ╛αñªαÑìαñ»-αñùαÑìαñ░αÑçαñí, αñëαñÜαÑìαñÜ-αñ¼αñ╛αñºαñ╛ αñ╡αñ╛αñ▓αÑç αñ▓αÑçαñ«αñ┐αñ¿αÑçαñƒαÑìαñ╕ αñ«αÑçαñé αñ¬αÑêαñò αñòαñ░αññαÑç αñ╣αÑêαñé αñ£αÑï αñ¬αñ░αñ┐αñ╡αÑçαñ╢αÑÇ αñ¿αñ«αÑÇ αñòαÑç αñàαñ╡αñ╢αÑïαñ╖αñú αñòαÑï αñ░αÑïαñòαññαÑç αñ╣αÑêαñé, αñ£αñ┐αñ╕αñ╕αÑç αñ╕αÑìαñ╡αñ╛αñª αñÿαñ¿αññαÑìαñ╡ αñ╕αÑüαñ░αñòαÑìαñ╖αñ┐αññ αñ░αñ╣αññαñ╛ αñ╣αÑê αñöαñ░ αñ¬αñ╛αñ░αñùαñ«αñ¿ αñòαÑç αñªαÑîαñ░αñ╛αñ¿ αñ╣αñ░αñ╛ αñ░αñéαñù αñ¼αñ¿αñ╛ αñ░αñ╣αññαñ╛ αñ╣αÑêαÑñ',
      'step_5_title': '5. αñ╕αÑüαñ░αñòαÑìαñ╖αñ┐αññ αñ¬αñ╛αñ░αñùαñ«αñ¿ αñ░αñ╕αñª',
      'step_5_desc': 'αñÜαñ╛αñ╣αÑç αñòαñéαñƒαÑçαñ¿αñ░ αñªαÑìαñ╡αñ╛αñ░αñ╛ αñ╣αÑï αñ»αñ╛ αñòαñ╛αñ░αÑìαñùαÑï αñƒαÑìαñ░αñò αñªαÑìαñ╡αñ╛αñ░αñ╛, αñ╢αñ┐αñ¬αñ«αÑçαñéαñƒ αñòαÑï αñ╕αÑìαñ¬αñ╖αÑìαñƒ αñ░αÑéαñ¬ αñ╕αÑç αñ▓αÑçαñ¼αñ▓ αñòαñ┐αñ»αñ╛ αñ£αñ╛αññαñ╛ αñ╣αÑê αñöαñ░ αñ╕αÑéαñûαÑç αñòαñéαñƒαÑçαñ¿αñ░ αñ▓αñ╛αñçαñ¿αñ░αÑìαñ╕ αñòαÑç αñ╕αñ╛αñÑ αñ¡αÑçαñ£αñ╛ αñ£αñ╛αññαñ╛. αñ╣αñ« αñ¬αÑéαñ░αÑìαñú αñªαñ╕αÑìαññαñ╛αñ╡αÑçαñ£αñ╝αÑÇαñòαñ░αñú, αñòαñ░ αñ½αñ╛αñçαñ▓αñ┐αñéαñù (αñ£αÑÇαñÅαñ╕αñƒαÑÇ, αñ¿αñ┐αñ░αÑìαñ»αñ╛αññ αñ¿αñ┐αñòαñ╛αñ╕αÑÇ) αñ╕αñéαñ¡αñ╛αñ▓αññαÑç αñ╣αÑêαñé αñöαñ░ αñûαñ░αÑÇαñªαñ╛αñ░αÑïαñé αñòαÑç αñ╕αñ╛αñÑ αñ░αÑÇαñ»αñ▓-αñƒαñ╛αñçαñ« αñƒαÑìαñ░αÑêαñòαñ┐αñéαñù αñ¿αñéαñ¼αñ░ αñ╕αñ╛αñ¥αñ╛ αñòαñ░αññαÑç αñ╣αÑêαñéαÑñ',
      'pack_eyebrow': 'αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù αñ╡αñ┐αñòαñ▓αÑìαñ¬',
      'pack_title': 'αññαñ╛αñ£αñùαÑÇ αñöαñ░ αñ╕αÑüαñùαñéαñº αñ╕αñéαñ░αñòαÑìαñ╖αñú αñ¬αÑìαñ░αñúαñ╛αñ▓αÑÇ',
      'pack_desc': 'αñùαñ░αÑìαñ«αÑÇ αñöαñ░ αñ¿αñ«αÑÇ αñòαÑç αñ╕αñéαñ¬αñ░αÑìαñò αñ«αÑçαñé αñåαñ¿αÑç αñ¬αñ░ αñ╡αñ╛αñ╖αÑìαñ¬αñ╢αÑÇαñ▓ αñåαñ╡αñ╢αÑìαñ»αñò αññαÑçαñ▓ αñ╡αñ╛αñ╖αÑìαñ¬αñ┐αññ αñ╣αÑï αñ£αñ╛αññαÑç αñ╣αÑêαñéαÑñ αñ╣αñ«αñ╛αñ░αÑÇ αñ╡αñ┐αñ╢αÑçαñ╖ αñ¬αÑêαñòαñ┐αñéαñù αñ¬αÑìαñ░αñúαñ╛αñ▓αñ┐αñ»αñ╛αñü αñ»αñ╣ αñ╕αÑüαñ¿αñ┐αñ╢αÑìαñÜαñ┐αññ αñòαñ░αññαÑÇ αñ╣αÑêαñé αñòαñ┐ αñçαñ▓αñ╛αñ»αñÜαÑÇ αñåαñ¬αñòαÑç αñùαÑïαñªαñ╛αñ« αññαñò αñëαññαñ¿αÑÇ αñ╣αÑÇ αññαñ╛αñ£αÑÇ αñ╕αÑüαñùαñéαñº αñòαÑç αñ╕αñ╛αñÑ αñ¬αñ╣αÑüαñüαñÜαÑç αñ£αñ┐αññαñ¿αÑÇ αñòαñ┐ αñëαñ╕αÑç αñ╕αÑüαñûαñ╛αññαÑç αñ╕αñ«αñ» αñÑαÑÇαÑñ',
      'pack_1kg_tab': '1 αñòαñ┐αñ▓αÑï αñ¬αñ╛αñëαñÜ',
      'pack_5kg_tab': '5 αñòαñ┐αñ▓αÑï αñ¼αÑêαñù',
      'pack_10kg_tab': '10 αñòαñ┐αñ▓αÑï αñòαñ╛αñ░αÑìαñƒαñ¿',
      'pack_25kg_tab': '25 αñòαñ┐αñ▓αÑï αñÑαÑïαñò αñ¼αÑïαñ░αÑÇ',
      'pack_select_lbl': 'αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù αñòαñ╛ αñÜαñ»αñ¿ αñòαñ░αÑçαñé...',
      'pack_point_1': 'αñ¿αñ«αÑÇ-αñ¿αñ┐αñ»αñéαññαÑìαñ░αñ┐αññ αñ¬αÑëαñ▓αÑÇ αñ¼αÑêαñ░αñ┐αñ»αñ░',
      'pack_point_2': 'αñæαñòαÑìαñ╕αÑÇαñ£αñ¿ αñàαñ╡αñ╢αÑïαñ╖αñú αñ╕αÑìαñƒαÑìαñ░αñ┐αñ¬αÑìαñ╕',
      'pack_point_3': 'αñûαñ╛αñªαÑìαñ»-αñùαÑìαñ░αÑçαñí αñ«αÑïαñƒαÑÇ αñ¬αñ¿αÑìαñ¿αÑÇ αñ▓αÑçαñ«αñ┐αñ¿αÑçαñƒ',
      'pack_point_4': 'αñ¬αñ╛αñ░αñùαñ«αñ¿ αñòαÑç αñ▓αñ┐αñÅ αñ«αñ£αñ¼αÑéαññ αñ¼αñ╛αñ╣αñ░αÑÇ αñòαñ╛αñ░αÑìαñƒαñ¿',
      'calc_eyebrow': 'αñ«αÑéαñ▓αÑìαñ» αñöαñ░ αñ«αñ╛αññαÑìαñ░αñ╛ αñàαñ¿αÑüαñ«αñ╛αñ¿αñò',
      'calc_title': 'αñÑαÑïαñò αñòαÑïαñƒαÑçαñ╢αñ¿ αñàαñ¿αÑüαñ░αÑïαñº αñòαÑêαñ▓αñòαÑüαñ▓αÑçαñƒαñ░',
      'calc_label_grade': 'αñçαñ▓αñ╛αñ»αñÜαÑÇ αñòαñ╛ αñåαñòαñ╛αñ░/αñùαÑìαñ░αÑçαñí αñÜαÑüαñ¿αÑçαñé',
      'calc_label_qty': 'αñ▓αñòαÑìαñ╖αñ┐αññ αñ«αñ╛αññαÑìαñ░αñ╛ αñÜαÑüαñ¿αÑçαñé',
      'calc_min_label': 'αñ¿αÑìαñ»αÑéαñ¿αññαñ«: 5 αñòαñ┐αñ▓αÑï',
      'calc_max_label': 'αñàαñºαñ┐αñòαññαñ«: 5000 αñòαñ┐αñ▓αÑï',
      'calc_unit': 'αñòαñ┐αñ▓αÑïαñùαÑìαñ░αñ╛αñ« (KG)',
      'calc_summary_header': 'αñàαñ¿αÑüαñ«αñ╛αñ¿ αñ╕αñ╛αñ░αñ╛αñéαñ╢',
      'calc_summary_grade': 'αñÜαñ»αñ¿αñ┐αññ αñùαÑìαñ░αÑçαñí:',
      'calc_summary_vol': 'αñòαÑüαñ▓ αñ«αñ╛αññαÑìαñ░αñ╛:',
      'calc_summary_pack': 'αñàαñ¿αÑüαñ╢αñéαñ╕αñ┐αññ αñ¬αÑêαñòαñ┐αñéαñù:',
      'calc_summary_bags': 'αñòαÑüαñ▓ αñ╢αñ┐αñ¬αñ┐αñéαñù αñ¼αÑêαñù:',
      'calc_summary_range': 'αñ╕αñ╛αñéαñòαÑçαññαñ┐αñò αñ«αÑéαñ▓αÑìαñ» αñ╕αÑÇαñ«αñ╛:',
      'calc_disclaimer': '*αñ¿αÑïαñƒ: αñ¼αÑïαñíαñ┐αñ¿αñ╛αñ»αñ╛αñòαñ¿αÑéαñ░ αñ¿αÑÇαñ▓αñ╛αñ«αÑÇ αñ╕αÑéαñÜαñòαñ╛αñéαñòαÑïαñé αñòαÑç αñàαñ¿αÑüαñ╕αñ╛αñ░ αñçαñ▓αñ╛αñ»αñÜαÑÇ αñòαÑÇ αñòαÑÇαñ«αññαÑçαñé αñªαÑêαñ¿αñ┐αñò αñ░αÑéαñ¬ αñ╕αÑç αñÿαñƒαññαÑÇ-αñ¼αñóαñ╝αññαÑÇ αñ░αñ╣αññαÑÇ αñ╣αÑêαñéαÑñ αñ»αñ╣ αñåαñ¬αÑéαñ░αÑìαññαñ┐ αñ»αÑïαñ£αñ¿αñ╛ αñòαÑç αñ▓αñ┐αñÅ αñÅαñò αñàαñ¿αÑüαñ«αñ╛αñ¿αñ┐αññ αñ«αñ╛αññαÑìαñ░αñ╛ αñ╡αñ┐αñ╡αñ░αñú αñ╣αÑêαÑñ αñ╡αñ╛αñ╕αÑìαññαñ╡αñ┐αñò αñ«αÑéαñ▓αÑìαñ» αñ╕αÑÇαñ«αñ╛ αñ¬αÑìαñ░αññαÑìαñ»αñòαÑìαñ╖ αñ¬αÑéαñ¢αññαñ╛αñ¢ αñ¬αñ░ αññαñ» αñòαÑÇ αñ£αñ╛αñÅαñùαÑÇαÑñ',
      'btn_calc_whatsapp': 'αñ╡αÑìαñ╣αñ╛αñƒαÑìαñ╕αñÅαñ¬ αñòαÑç αñ«αñ╛αñºαÑìαñ»αñ« αñ╕αÑç αñòαÑïαñƒαÑçαñ╢αñ¿ αñàαñ¿αÑüαñ░αÑïαñº αñ¡αÑçαñ£αÑçαñé →',
      'btn_calc_email': 'αñêαñ«αÑçαñ▓ αñòαÑç αñ«αñ╛αñºαÑìαñ»αñ« αñ╕αÑç αñòαÑïαñƒαÑçαñ╢αñ¿ αñàαñ¿αÑüαñ░αÑïαñº αñ¡αÑçαñ£αÑçαñé',
      'gallery_eyebrow': 'αñ╡αñ┐αñ£αÑüαñàαñ▓ αñƒαÑéαñ░',
      'gallery_title': 'αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñùαÑüαñúαñ╡αññαÑìαññαñ╛ αñùαÑêαñ▓αñ░αÑÇ',
      'btn_gallery_visit': 'αñ½αÑêαñòαÑìαñƒαÑìαñ░αÑÇ αñ╡αñ┐αñ£αñ┐αñƒ αñòαñ╛ αñàαñ¿αÑüαñ░αÑïαñº αñòαñ░αÑçαñé',
      'gallery_card_1_eyebrow': 'αñ╕αÑïαñ░αÑìαñ╕αñ┐αñéαñù',
      'gallery_card_1_title': 'αññαñ╛αñ£αñ╛ αñ½αñ╕αñ▓',
      'gallery_card_2_eyebrow': 'αñ»αñ╛αñéαññαÑìαñ░αñ┐αñò αñ¢αñüαñƒαñ╛αñê',
      'gallery_card_2_title': 'αñ¢αñ▓αñ¿αÑÇ αñ¢αñüαñƒαñ╛αñê',
      'gallery_card_3_eyebrow': 'αñªαÑâαñ╢αÑìαñ» αñ¿αñ┐αñ░αÑÇαñòαÑìαñ╖αñú',
      'gallery_card_3_title': 'αñ░αñéαñù αñ¢αñüαñƒαñ╛αñê',
      'gallery_card_4_eyebrow': 'αñ░αñ╕αñª (αñ▓αÑëαñ£αñ┐αñ╕αÑìαñƒαñ┐αñòαÑìαñ╕)',
      'gallery_card_4_title': 'αñ╕αÑüαñ░αñòαÑìαñ╖αñ┐αññ αñ¬αÑêαñòαñ┐αñéαñù',
      'test_eyebrow': 'αñ¬αÑìαñ░αñ╢αñéαñ╕αñ╛αñ¬αññαÑìαñ░',
      'test_title': 'αñ«αñ╕αñ╛αñ▓αñ╛ αñÑαÑïαñò αñ╡αñ┐αñòαÑìαñ░αÑçαññαñ╛αñôαñé αñöαñ░ αñ╡αÑìαñ»αñ╛αñ¬αñ╛αñ░αñ┐αñ»αÑïαñé αñªαÑìαñ╡αñ╛αñ░αñ╛ αñ╡αñ┐αñ╢αÑìαñ╡αñ╕αñ¿αÑÇαñ»',
      'test_1_quote': 'αñ▓αÑÇαñ╢αñ╛ αñƒαÑìαñ░αÑçαñíαñ░αÑìαñ╕ αñ▓αñùαñ╛αññαñ╛αñ░ αñëαñÜαÑìαñÜ αñùαÑüαñúαñ╡αññαÑìαññαñ╛ αñ╡αñ╛αñ▓αÑÇ αñ╣αñ░αÑÇ αñçαñ▓αñ╛αñ»αñÜαÑÇ αñ¬αÑìαñ░αñªαñ╛αñ¿ αñòαñ░αññαñ╛ αñ╣αÑêαÑñ αñëαñ¿αñòαÑÇ αñ¢αñ▓αñ¿αÑÇ αñòαÑç αñ«αñ╛αñ¬ αñ¼αÑçαñ╣αñª αñ╕αñƒαÑÇαñò αñ╣αÑêαñé, αñ£αÑï αñ╣αñ░ αñ╢αñ┐αñ¬αñ«αÑçαñéαñƒ αñ«αÑçαñé αñ╕αñ«αñ╛αñ¿ αñåαñòαñ╛αñ░ αñ╕αÑüαñ¿αñ┐αñ╢αÑìαñÜαñ┐αññ αñòαñ░αññαÑç αñ╣αÑêαñéαÑñ αñ╕αÑïαñ░αÑìαñ╕αñ┐αñéαñù αññαÑçαñ£αñ╝ αñöαñ░ αñ╡αñ┐αñ╢αÑìαñ╡αñ╕αñ¿αÑÇαñ» αñ╣αÑêαÑñ',
      'test_1_role': 'αñÑαÑïαñò αñ╡αÑìαñ»αñ╛αñ¬αñ╛αñ░αÑÇ, αñ░αñ╛αñ£αñ╕αÑìαñÑαñ╛αñ¿',
      'test_2_quote': 'αñ╣αñ« 2 αñ╡αñ░αÑìαñ╖αÑïαñé αñ╕αÑç αñàαñºαñ┐αñò αñ╕αñ«αñ» αñ╕αÑç αñ▓αÑÇαñ╢αñ╛ αñƒαÑìαñ░αÑçαñíαñ░αÑìαñ╕ αñ╕αÑç 7 αñ«αñ┐αñ«αÑÇ αñöαñ░ 8 αñ«αñ┐αñ«αÑÇ αñçαñ▓αñ╛αñ»αñÜαÑÇ αñòαÑÇ αñ╕αÑïαñ░αÑìαñ╕αñ┐αñéαñù αñòαñ░ αñ░αñ╣αÑç αñ╣αÑêαñéαÑñ αñëαñ¿αñòαñ╛ αñ¿αñ«αÑÇ αñ╕αÑìαññαñ░ αñ╣αñ«αÑçαñ╢αñ╛ 12% αñ╕αÑç αñ¿αÑÇαñÜαÑç αñ╣αÑïαññαñ╛ αñ╣αÑê, αñ£αÑï αñ╢αÑçαñ▓αÑìαñ½ αñ£αÑÇαñ╡αñ¿ αñ╕αÑìαñÑαñ┐αñ░αññαñ╛ αñòαÑç αñ▓αñ┐αñÅ αñåαñ╡αñ╢αÑìαñ»αñò αñ╣αÑêαÑñ αñàαñ╕αñ╛αñºαñ╛αñ░αñú αñ«αÑéαñ▓αÑìαñ» αñ¿αñ┐αñ░αÑìαñºαñ╛αñ░αñú!',
      'test_2_role': 'αñ«αñ╕αñ╛αñ▓αñ╛ αñ¿αñ┐αñ░αÑìαñ»αñ╛αññαñò, αñ¼αÑçαñéαñùαñ▓αÑüαñ░αÑü',
      'test_3_quote': 'αñ╡αñ┐αñ╢αÑìαñ╡αñ╕αñ¿αÑÇαñ», αñ¬αÑçαñ╢αÑçαñ╡αñ░ αñöαñ░ αñ¬αñ╛αñ░αñªαñ░αÑìαñ╢αÑÇαÑñ αñ╣αñ« αñëαñ¿αñòαÑç αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù αñ╡αñ┐αñòαñ▓αÑìαñ¬αÑïαñé αñòαÑÇ αñ╕αñ░αñ╛αñ╣αñ¿αñ╛ αñòαñ░αññαÑç αñ╣αÑêαñéαÑñ αñ╕αÑéαñûαÑç αñ«αÑîαñ╕αñ« αñòαÑç αñªαÑîαñ░αñ╛αñ¿ αñ¡αÑÇ, αñ╡αÑç αñ¼αñ┐αñ¿αñ╛ αñòαñ┐αñ╕αÑÇ αñªαÑçαñ░αÑÇ αñòαÑç αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñùαÑìαñ░αÑçαñí αñ╡αñ┐αññαñ░αñ┐αññ αñòαñ░αññαÑç αñ╣αÑêαñéαÑñ αñàαñ¿αÑüαñ╢αñéαñ╕αñ┐αññ αñÑαÑïαñò αñ╡αÑìαñ»αñ╛αñ¬αñ╛αñ░αÑÇαÑñ',
      'test_3_role': 'αñ░αñ┐αñƒαÑçαñ▓ αñÜαÑçαñ¿ αñ╕αñ¬αÑìαñ▓αñ╛αñ»αñ░, αñòαÑçαñ░αñ▓',
      'contact_eyebrow': 'αñåαñçαñÅ αñ╕αñéαñ¬αñ░αÑìαñò αñòαñ░αÑçαñé',
      'contact_title': 'αñ╡αñ┐αñ╢αÑìαñ╡αñ╕αñ¿αÑÇαñ» αñ╕αÑïαñ░αÑìαñ╕αñ┐αñéαñù αñÜαÑêαñ¿αñ▓ αñ╕αÑìαñÑαñ╛αñ¬αñ┐αññ αñòαñ░αÑçαñé',
      'contact_desc': 'αñ╕αÑêαñéαñ¬αñ▓ αñòαñ╛αñ░αÑìαñí αñªαÑçαñûαñ¿αÑç, αñàαñ¿αÑüαñòαÑéαñ▓αñ┐αññ αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù αñ▓αÑçαñåαñëαñƒ αñòαñ╛ αñàαñ¿αÑüαñ░αÑïαñº αñòαñ░αñ¿αÑç, αñ»αñ╛ αñ╡αñ░αÑìαññαñ«αñ╛αñ¿ αñ«αñ╕αñ╛αñ▓αñ╛ αñ¼αÑïαñ░αÑìαñí αñ¿αÑÇαñ▓αñ╛αñ«αÑÇ αñ▓αñ┐αñ╕αÑìαñƒαñ┐αñéαñù αñ¬αñ░ αñ╡αñ┐αñ╡αñ░αñú αñòαñ╛ αñàαñ¿αÑüαñ░αÑïαñº αñòαñ░αñ¿αÑç αñòαÑç αñ▓αñ┐αñÅ αñ╣αñ«αñ╛αñ░αÑç αñÑαÑïαñò αñíαÑçαñ╕αÑìαñò αñ╕αÑç αñ¼αñ╛αññ αñòαñ░αÑçαñéαÑñ',
      'btn_contact_submit': 'αñÑαÑïαñò αñ¬αÑéαñ¢αññαñ╛αñ¢ αñ¡αÑçαñ£αÑçαñé',
      'contact_info_phone_lbl': 'αñ½αÑïαñ¿ / αñ╡αÑìαñ╣αñ╛αñƒαÑìαñ╕αñÅαñ¬',
      'contact_info_email_lbl': 'αñòαÑëαñ░αÑìαñ¬αÑïαñ░αÑçαñƒ αñêαñ«αÑçαñ▓',
      'contact_info_loc_lbl': 'αñƒαÑìαñ░αÑçαñíαñ┐αñéαñù αñ╣αñ¼ αñöαñ░ αñ½αÑêαñòαÑìαñƒαÑìαñ░αÑÇ',
      'contact_info_loc_val': 'αñ¼αÑïαñíαñ┐αñ¿αñ╛αñ»αñ╛αñòαñ¿αÑéαñ░, αñÑαÑçαñ¿αÑÇ αñ£αñ┐αñ▓αñ╛, αññαñ«αñ┐αñ▓αñ¿αñ╛αñíαÑü - 625513, αñ¡αñ╛αñ░αññ',
      'foot_desc': 'αñ╣αñ░αÑÇ αñçαñ▓αñ╛αñ»αñÜαÑÇ αñòαÑç αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñÑαÑïαñò αñ╡αñ┐αñòαÑìαñ░αÑçαññαñ╛ αñöαñ░ αñ¢αñüαñƒαñ╛αñê αñÿαñ░αÑñ αñòαÑçαñ░αñ▓ αñòαÑç αñ¼αñ╛αñùαñ╛αñ¿αÑïαñé αñ╕αÑç αñ¬αÑìαñ░αñ╛αñ¬αÑìαññ, αñ¼αÑïαñíαñ┐αñ¿αñ╛αñ»αñ╛αñòαñ¿αÑéαñ░, αññαñ«αñ┐αñ▓αñ¿αñ╛αñíαÑü αñ«αÑçαñé αñ¢αñüαñƒαñ╛αñêαÑñ',
      'foot_site_lbl': 'αñ╕αñ╛αñçαñƒαñ«αÑêαñ¬',
      'foot_grades_lbl': 'αñçαñ▓αñ╛αñ»αñÜαÑÇ αñòαÑç αñùαÑìαñ░αÑçαñí',
      'foot_source_lbl': 'αñ╡αñ┐αñ¿αñ┐αñ»αñ«αñ┐αññ αñ╕αÑïαñ░αÑìαñ╕αñ┐αñéαñù',
      'foot_link_auction': 'αñ¿αÑÇαñ▓αñ╛αñ«αÑÇ αñ╕αññαÑìαñ»αñ╛αñ¬αñ¿',
      'foot_link_certs': 'αñùαÑüαñúαñ╡αññαÑìαññαñ╛ αñ¬αÑìαñ░αñ«αñ╛αñúαñ¬αññαÑìαñ░',
      'foot_link_desk': 'αñÑαÑïαñò αñ¿αñ┐αñ░αÑìαñ»αñ╛αññαñò αñíαÑçαñ╕αÑìαñò',
      'foot_link_factory': 'αñ½αÑêαñòαÑìαñƒαÑìαñ░αÑÇ αñ¬αÑéαñ¢αññαñ╛αñ¢',
      'foot_rights': '┬⌐ 2026 αñ▓αÑÇαñ╢αñ╛ αñƒαÑìαñ░αÑçαñíαñ░αÑìαñ╕αÑñ αñ╕αñ░αÑìαñ╡αñ╛αñºαñ┐αñòαñ╛αñ░ αñ╕αÑüαñ░αñòαÑìαñ╖αñ┐αññαÑñ αñ¼αÑïαñíαñ┐αñ¿αñ╛αñ»αñ╛αñòαñ¿αÑéαñ░, αñ¡αñ╛αñ░αññ αñ«αÑçαñé αñ╕αñ«αñ¿αÑìαñ╡αñ┐αññαÑñ',
      'foot_policy': 'αñ«αñ╕αñ╛αñ▓αñ╛ αñ¼αÑïαñ░αÑìαñí αñ▓αñ╛αñçαñ╕αÑçαñéαñ╕ | αñ╡αÑìαñ»αñ╛αñ¬αñ╛αñ░ αñöαñ░ αñ¿αñ┐αñ░αÑìαñ»αñ╛αññ αñ¿αÑÇαññαñ┐ | αñåαñ¬αÑéαñ░αÑìαññαñ┐ αñòαÑÇ αñ╢αñ░αÑìαññαÑçαñé',
      'modal_spec_sieve_lbl': 'αñ¢αñ▓αñ¿αÑÇ αñòαñ╛ αñåαñòαñ╛αñ░ αñ╡αÑìαñ»αñ╛αñ╕',
      'modal_spec_moisture_lbl': 'αñ¿αñ«αÑÇ αñòαÑÇ αñ«αñ╛αññαÑìαñ░αñ╛',
      'modal_spec_weight_lbl': 'αñ▓αÑÇαñƒαñ░ αñ╡αñ£αñ¿ (g/l)',
      'modal_spec_color_lbl': 'αñ░αñéαñù αñ¬αÑìαñ░αÑïαñ½αñ╝αñ╛αñçαñ▓',
      'modal_spec_summary_lbl': 'αñëαññαÑìαñ¬αñ╛αñª αñ╕αñ╛αñ░αñ╛αñéαñ╢',
      'modal_spec_btn_quote': 'αñ«αñ╛αññαÑìαñ░αñ╛ αñòαñ╛ αñàαñ¿αÑüαñ«αñ╛αñ¿ αñ▓αñùαñ╛αñÅαñé',
      'modal_spec_btn_close': 'αñ╕αÑìαñ¬αÑçαñòαÑìαñ╕ αñ¼αñéαñª αñòαñ░αÑçαñé',
      'calc_pack_1kg': '1 αñòαñ┐αñ▓αÑï αñ¬αñ╛αñëαñÜ (αñòαñ╛αñ░αÑìαñƒαñ¿ αñòαÑç αñàαñéαñªαñ░ αñ¬αÑêαñò)',
      'calc_pack_5kg': '5 αñòαñ┐αñ▓αÑï αñ╡αÑêαñòαÑìαñ»αÑéαñ« αñ╕αÑÇαñ▓ αñ¼αÑêαñù',
      'calc_pack_10kg': '10 αñòαñ┐αñ▓αÑï αñ«αñ▓αÑìαñƒαÑÇ-αñ¼αÑêαñ░αñ┐αñ»αñ░ αñ¼αÑëαñòαÑìαñ╕',
      'calc_pack_25kg': 'αñ╡αñ╛αñ╖αÑìαñ¬-αñ¼αñ╛αñºαñ╛ αñ▓αñ╛αñçαñ¿αñ░ αñòαÑç αñ╕αñ╛αñÑ 25 αñòαñ┐αñ▓αÑï αñ╣αÑçαñ╡αÑÇ-αñíαÑìαñ»αÑéαñƒαÑÇ αñùαñ¿αÑÇ αñ¼αÑêαñù',
      'calc_units_label': 'αñ»αÑéαñ¿αñ┐αñƒ',
      'calc_price_contact': 'αñ«αÑéαñ▓αÑìαñ» αñ¿αñ┐αñ░αÑìαñºαñ╛αñ░αñú αñòαÑç αñ▓αñ┐αñÅ αñ╕αñéαñ¬αñ░αÑìαñò αñòαñ░αÑçαñé',
      'contact_alert_success': 'αñÑαÑïαñò αñ¬αÑéαñ¢αññαñ╛αñ¢ αñ¡αÑçαñ£αñ¿αÑç αñòαÑç αñ▓αñ┐αñÅ αñºαñ¿αÑìαñ»αñ╡αñ╛αñª! αññαññαÑìαñòαñ╛αñ▓ αñòαÑêαñƒαñ▓αÑëαñù αñ▓αÑëαñò αñòαÑç αñ▓αñ┐αñÅ αñ╡αÑìαñ╣αñ╛αñƒαÑìαñ╕αñÅαñ¬ αñíαÑçαñ╕αÑìαñò αñûαÑïαñ▓ αñ░αñ╣αÑç αñ╣αÑêαñéαÑñ',
      'loading_text': 'αñ▓αÑïαñí αñ╣αÑï αñ░αñ╣αñ╛ αñ╣αÑê',
      'btn_write_review': 'αñ╕αñ«αÑÇαñòαÑìαñ╖αñ╛ αñ▓αñ┐αñûαÑçαñé',
      'review_modal_title': 'αñàαñ¬αñ¿αÑÇ αñ╕αñ«αÑÇαñòαÑìαñ╖αñ╛ αñ╕αñ╛αñ¥αñ╛ αñòαñ░αÑçαñé',
      'review_label_name': 'αñåαñ¬αñòαñ╛ αñ¿αñ╛αñ«',
      'review_label_role': 'αñ¡αÑéαñ«αñ┐αñòαñ╛ / αñ╕αÑìαñÑαñ╛αñ¿ / αñòαñéαñ¬αñ¿αÑÇ',
      'review_label_rating': 'αñ░αÑçαñƒαñ┐αñéαñù',
      'review_label_text': 'αñåαñ¬αñòαÑÇ αñ╕αñ«αÑÇαñòαÑìαñ╖αñ╛',
      'review_btn_submit': 'αñ╕αñ«αÑÇαñòαÑìαñ╖αñ╛ αñ╕αñ¼αñ«αñ┐αñƒ αñòαñ░αÑçαñé',
      'review_alert_success': 'αñåαñ¬αñòαÑÇ αñ╕αñ«αÑÇαñòαÑìαñ╖αñ╛ αñòαÑç αñ▓αñ┐αñÅ αñºαñ¿αÑìαñ»αñ╡αñ╛αñª! αñåαñ¬αñòαÑÇ αñ╕αñ«αÑÇαñòαÑìαñ╖αñ╛ αñ¼αÑïαñ░αÑìαñí αñ¬αñ░ αñ£αÑïαñíαñ╝ αñªαÑÇ αñùαñê αñ╣αÑêαÑñ',
      'review_delete_confirm': 'αñòαÑìαñ»αñ╛ αñåαñ¬ αñ╡αñ╛αñòαñê αñçαñ╕ αñ╕αñ«αÑÇαñòαÑìαñ╖αñ╛ αñòαÑï αñ╣αñƒαñ╛αñ¿αñ╛ αñÜαñ╛αñ╣αññαÑç αñ╣αÑêαñé?',
      'prod_tab_green': 'αñ╣αñ░αÑÇ αñçαñ▓αñ╛αñ»αñÜαÑÇ',
      'prod_tab_yellow': 'αñ½αÑìαñ░αÑéαñƒ αñçαñ▓αñ╛αñ»αñÜαÑÇ (αñ¬αÑÇαñ▓αñ╛/αñ╣αñ▓αÑìαñòαÑÇ)',
      'grade_6_sub_yellow': 'αñ«αñ╛αñ¿αñò αñ¬αÑÇαñ▓αñ╛ αñùαÑìαñ░αÑçαñí (MGB)',
      'grade_7_sub_yellow': 'αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñ¼αÑïαñ▓αÑìαñí αñ¬αÑÇαñ▓αñ╛ αñùαÑìαñ░αÑçαñí (MGEB)',
      'grade_75_sub_yellow': 'αñòαÑüαñ▓αÑÇαñ¿ αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñ¬αÑÇαñ▓αñ╛ αñ¼αÑïαñ▓αÑìαñí',
      'grade_75_8_sub_yellow': 'αñ╕αÑüαñ¬αñ░ αñ¬αÑÇαñ▓αñ╛ αñ¿αñ┐αñ░αÑìαñ»αñ╛αññ αñ«αñ┐αñ╢αÑìαñ░αñú',
      'grade_8_sub_yellow': 'αñ╕αÑüαñ¬αñ░ αñÅαñòαÑìαñ╕αÑìαñƒαÑìαñ░αñ╛ αñ¬αÑÇαñ▓αñ╛ αñ¼αÑïαñ▓αÑìαñí (αñ£αñéαñ¼αÑï)',
      'grade_85_sub_yellow': 'αñ╢αñ╛αñ╣αÑÇ αñ¬αÑÇαñ▓αñ╛ αñ£αñéαñ¼αÑï αñ¼αÑïαñ▓αÑìαñí',
      'grade_9_sub_yellow': 'αñ╕αñ░αÑìαñ╡αÑïαñÜαÑìαñÜ αñ░αÑëαñ»αñ▓ αñ¬αÑÇαñ▓αñ╛ αñ£αñéαñ¼αÑï',
      'calc_label_variety': 'αñçαñ▓αñ╛αñ»αñÜαÑÇ αñòαÑÇ αñòαñ┐αñ╕αÑìαñ«',
      'calc_empty_cart': 'αñàαñ¡αÑÇ αññαñò αñòαÑïαñê αñåαñçαñƒαñ« αñ¿αñ╣αÑÇαñé αñ£αÑïαñíαñ╝αñ╛ αñùαñ»αñ╛ αñ╣αÑêαÑñ αñòαñ┐αñ╕αÑìαñ«, αñåαñòαñ╛αñ░ αñöαñ░ αñ«αñ╛αññαÑìαñ░αñ╛ αñòαñ╛ αñÜαñ»αñ¿ αñòαñ░αÑçαñé, αñ½αñ┐αñ░ \'αñ¬αÑéαñ¢αññαñ╛αñ¢ αñ╕αÑéαñÜαÑÇ αñ«αÑçαñé αñ£αÑïαñíαñ╝αÑçαñé\' αñ¬αñ░ αñòαÑìαñ▓αñ┐αñò αñòαñ░αÑçαñéαÑñ',
      'table_th_item': 'αñ╡αñ┐αñ╡αñ░αñú',
      'table_th_qty': 'αñ«αñ╛αññαÑìαñ░αñ╛',
      'table_th_bags': 'αñ¼αÑêαñù',
      'table_th_price': 'αñ«αÑéαñ▓αÑìαñ»',
      'calc_summary_items': 'αñòαÑüαñ▓ αñåαñçαñƒαñ«:',
      'btn_calc_add_item': 'αñ¬αÑéαñ¢αññαñ╛αñ¢ αñ╕αÑéαñÜαÑÇ αñ«αÑçαñé αñ£αÑïαñíαñ╝αÑçαñé +',
      'calc_alert_empty_submit': 'αñòαÑâαñ¬αñ»αñ╛ αñ¬αñ╣αñ▓αÑç αñàαñ¬αñ¿αÑÇ αñàαñ¿αÑüαñ«αñ╛αñ¿ αñ╕αÑéαñÜαÑÇ αñ«αÑçαñé αñòαñ« αñ╕αÑç αñòαñ« αñÅαñò αñçαñ▓αñ╛αñ»αñÜαÑÇ αñùαÑìαñ░αÑçαñí αñåαñòαñ╛αñ░ αñ£αÑïαñíαñ╝αÑçαñé.',
      'stat_years': 'αñ╡αñ░αÑìαñ╖αÑïαñé αñòαÑÇ αñ╡αñ┐αñ░αñ╛αñ╕αññ',
      'stat_tons': 'αñƒαñ¿ αñ╡αñ┐αññαñ░αñ┐αññ',
      'stat_partners': 'αñÑαÑïαñò αñ¡αñ╛αñùαÑÇαñªαñ╛αñ░',
      'why_biz_label': 'αñ╣αñ«αÑçαñé αñòαÑìαñ»αÑïαñé αñÜαÑüαñ¿αÑçαñé',
      'why_biz_title': 'αñ╡αÑìαñ»αñ╡αñ╕αñ╛αñ»αÑïαñé αñªαÑìαñ╡αñ╛αñ░αñ╛ αñ╡αñ┐αñ╢αÑìαñ╡αñ╕αñ¿αÑÇαñ»αÑñ <br><span style="color: #4eb270;">αñùαÑüαñúαñ╡αññαÑìαññαñ╛</span> αñ¬αñ░ αñ¿αñ┐αñ░αÑìαñ«αñ┐αññαÑñ',
      'why_biz_subheading': 'αñ▓αÑÇαñ╢αñ╛ αñƒαÑìαñ░αÑçαñíαñ░αÑìαñ╕ αñ¿αñ┐αñ░αñéαññαñ░ αñùαÑüαñúαñ╡αññαÑìαññαñ╛, αñ¬αñ╛αñ░αñªαñ░αÑìαñ╢αÑÇ αñ╡αÑìαñ»αñ╛αñ╡αñ╕αñ╛αñ»αñ┐αñò αñ¬αÑìαñ░αñÑαñ╛αñôαñé αñöαñ░ αñªαÑÇαñ░αÑìαñÿαñòαñ╛αñ▓αñ┐αñò αñùαÑìαñ░αñ╛αñ╣αñò αñ╕αñéαñ¼αñéαñºαÑïαñé αñòαÑç αñ¬αÑìαñ░αññαñ┐ αñ¬αÑìαñ░αññαñ┐αñ¼αñªαÑìαñºαññαñ╛ αñòαÑç αñ╕αñ╛αñÑ αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñ¡αñ╛αñ░αññαÑÇαñ» αñ╣αñ░αÑÇ αñçαñ▓αñ╛αñ»αñÜαÑÇ αñòαÑÇ αñåαñ¬αÑéαñ░αÑìαññαñ┐ αñòαñ░αññαñ╛ αñ╣αÑêαÑñ',
      'why_feat_1_title': 'αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñùαÑüαñúαñ╡αññαÑìαññαñ╛',
      'why_feat_1_desc': 'αñ▓αñùαñ╛αññαñ╛αñ░ αñùαÑüαñúαñ╡αññαÑìαññαñ╛ αñ«αñ╛αñ¿αñòαÑïαñé αñòαÑï αñ¼αñ¿αñ╛αñÅ αñ░αñûαñ¿αÑç αñòαÑç αñ▓αñ┐αñÅ αñ¬αÑìαñ░αññαÑìαñ»αÑçαñò αñ¼αÑêαñÜ αñòαÑï αñ╕αñ╛αñ╡αñºαñ╛αñ¿αÑÇαñ¬αÑéαñ░αÑìαñ╡αñò αñ¬αÑìαñ░αñ╛αñ¬αÑìαññ αñöαñ░ αñ╡αñ░αÑìαñùαÑÇαñòαÑâαññ αñòαñ┐αñ»αñ╛ αñ£αñ╛αññαñ╛ αñ╣αÑêαÑñ',
      'why_feat_2_title': 'αñ╡αñ┐αñ╢αÑìαñ╡αñ╕αñ¿αÑÇαñ» αñûαñ░αÑÇαñª',
      'why_feat_2_desc': 'αñ╣αñ« αñ╡αñ┐αñ╢αÑìαñ╡αñ╕αñ¿αÑÇαñ» αñ¿αÑÇαñ▓αñ╛αñ«αÑÇ αñ¼αñ╛αñ£αñ╛αñ░αÑïαñé αñöαñ░ αñ╕αññαÑìαñ»αñ╛αñ¬αñ┐αññ αñåαñ¬αÑéαñ░αÑìαññαñ┐αñòαñ░αÑìαññαñ╛αñôαñé αñ╕αÑç αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñçαñ▓αñ╛αñ»αñÜαÑÇ αñ¬αÑìαñ░αñ╛αñ¬αÑìαññ αñòαñ░αññαÑç αñ╣αÑêαñéαÑñ',
      'why_feat_3_title': 'αñ¬αñ╛αñ░αñªαñ░αÑìαñ╢αÑÇ αñ╡αÑìαñ»αñ╡αñ╕αñ╛αñ»',
      'why_feat_3_desc': 'αñ╕αÑìαñ¬αñ╖αÑìαñƒ αñëαñªαÑìαñºαñ░αñú, αñêαñ«αñ╛αñ¿αñªαñ╛αñ░ αñ╕αñéαñÜαñ╛αñ░ αñöαñ░ αñ╕αÑÇαñºαñ╛ αñ«αÑéαñ▓αÑìαñ» αñ¿αñ┐αñ░αÑìαñºαñ╛αñ░αñúαÑñ',
      'why_feat_4_title': 'αñ╕αÑüαñ░αñòαÑìαñ╖αñ┐αññ αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù',
      'why_feat_4_desc': 'αñ¬αñ░αñ┐αñ╡αñ╣αñ¿ αñòαÑç αñªαÑîαñ░αñ╛αñ¿ αññαñ╛αñ£αñùαÑÇ αñ¼αñ¿αñ╛αñÅ αñ░αñûαñ¿αÑç αñòαÑç αñ▓αñ┐αñÅ αñëαññαÑìαñ¬αñ╛αñªαÑïαñé αñòαÑï αñ╕αñ╛αñ╡αñºαñ╛αñ¿αÑÇαñ¬αÑéαñ░αÑìαñ╡αñò αñ¬αÑêαñò αñòαñ┐αñ»αñ╛ αñ£αñ╛αññαñ╛ αñ╣αÑêαÑñ',
      'why_feat_5_title': 'αñ╡αñ┐αñ╢αÑìαñ╡αñ╕αñ¿αÑÇαñ» αñ╡αñ┐αññαñ░αñú',
      'why_feat_5_desc': 'αñ¡αñ╛αñ░αññ αñ¡αñ░ αñ«αÑçαñé αñ╕αñ«αñ» αñ¬αñ░ αñ¬αÑìαñ░αÑçαñ╖αñú αñòαÑç αñ╕αñ╛αñÑ αñæαñ░αÑìαñíαñ░ αñòαÑüαñ╢αñ▓αññαñ╛αñ¬αÑéαñ░αÑìαñ╡αñò αñ╕αñéαñ╕αñ╛αñºαñ┐αññ αñòαñ┐αñÅ αñ£αñ╛αññαÑç αñ╣αÑêαñéαÑñ',
      'why_feat_6_title': 'αñùαÑìαñ░αñ╛αñ╣αñò αñ╕αñ░αÑìαñ╡αÑïαñ¬αñ░αñ┐',
      'why_feat_6_desc': 'αñ╣αñ« αñ¡αñ░αÑïαñ╕αÑçαñ«αñéαñª αñ╕αÑçαñ╡αñ╛ αñöαñ░ αñ╕αñ╣αñ╛αñ»αññαñ╛ αñòαÑç αñ«αñ╛αñºαÑìαñ»αñ« αñ╕αÑç αñªαÑÇαñ░αÑìαñÿαñòαñ╛αñ▓αñ┐αñò αñ╕αñéαñ¼αñéαñº αñ¼αñ¿αñ╛αñ¿αÑç αñ¬αñ░ αñºαÑìαñ»αñ╛αñ¿ αñòαÑçαñéαñªαÑìαñ░αñ┐αññ αñòαñ░αññαÑç αñ╣αÑêαñéαÑñ',
      'why_stat_1_lbl': 'αñ¼αñ▓αÑìαñò αñæαñ░αÑìαñíαñ░ αñ╡αñ┐αññαñ░αñ┐αññ',
      'why_stat_2_lbl': 'αñùαÑüαñúαñ╡αññαÑìαññαñ╛ αñ£αñ╛αñéαñÜαÑÇ αñùαñê',
      'why_stat_3_lbl': 'αñùαÑìαñ░αñ╛αñ╣αñò αñ╕αÑçαñ╡αñ╛',
      'why_trust_title': 'αñ╡αñ┐αñ╢αÑìαñ╡αñ╕αñ¿αÑÇαñ» αñ╡αÑìαñ»αñ╛αñ╡αñ╕αñ╛αñ»αñ┐αñò αñ¬αÑìαñ░αñÑαñ╛αñÅαñé',
      'why_badge_gst': 'Γ£ô αñ£αÑÇαñÅαñ╕αñƒαÑÇ αñÜαñ╛αñ▓αñ╛αñ¿ αñëαñ¬αñ▓αñ¼αÑìαñº',
      'why_badge_wholesale': 'Γ£ô αñÑαÑïαñò αñæαñ░αÑìαñíαñ░',
      'why_badge_bulk': 'Γ£ô αñÑαÑïαñò αñåαñ¬αÑéαñ░αÑìαññαñ┐',
      'why_badge_quality': 'Γ£ô αñùαÑüαñúαñ╡αññαÑìαññαñ╛ αñ£αñ╛αñéαñÜαÑÇ αñùαñê',
      'why_badge_packaging': 'Γ£ô αñ╕αÑüαñ░αñòαÑìαñ╖αñ┐αññ αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù',
      'why_badge_support': 'Γ£ô αñëαññαÑìαññαñ░αñªαñ╛αñ»αÑÇ αñ╕αñ╣αñ╛αñ»αññαñ╛',
      'why_cta_title': 'αñåαñçαñÅ αñÅαñò αñªαÑÇαñ░αÑìαñÿαñòαñ╛αñ▓αñ┐αñò αñ╡αÑìαñ»αñ╛αñ╡αñ╕αñ╛αñ»αñ┐αñò αñ╕αñéαñ¼αñéαñº αñ¼αñ¿αñ╛αñÅαñéαÑñ',
      'why_cta_desc': 'αñÜαñ╛αñ╣αÑç αñåαñ¬ αñÑαÑïαñò αñ╡αñ┐αñòαÑìαñ░αÑçαññαñ╛ αñ╣αÑïαñé, αñ╡αñ┐αññαñ░αñò αñ╣αÑïαñé, αñûαÑüαñªαñ░αñ╛ αñ╡αñ┐αñòαÑìαñ░αÑçαññαñ╛ αñ╣αÑïαñé αñ»αñ╛ αñ¿αñ┐αñ░αÑìαñ»αñ╛αññαñò αñ╣αÑïαñé, αñ▓αÑÇαñ╢αñ╛ αñƒαÑìαñ░αÑçαñíαñ░αÑìαñ╕ αñ╡αñ┐αñ╢αÑìαñ╡αñ╕αñ¿αÑÇαñ» αñ╕αÑçαñ╡αñ╛ αñöαñ░ αñ¬αñ╛αñ░αñªαñ░αÑìαñ╢αÑÇ αñ╕αñéαñÜαñ╛αñ░ αñòαÑç αñ╕αñ╛αñÑ αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ«-αñùαÑüαñúαñ╡αññαÑìαññαñ╛ αñ╡αñ╛αñ▓αÑÇ αñ╣αñ░αÑÇ αñçαñ▓αñ╛αñ»αñÜαÑÇ αñòαÑÇ αñåαñ¬αÑéαñ░αÑìαññαñ┐ αñòαñ░αñ¿αÑç αñòαÑç αñ▓αñ┐αñÅ αñ¬αÑìαñ░αññαñ┐αñ¼αñªαÑìαñº αñ╣αÑêαÑñ',
      'why_cta_btn_quote': 'αñÑαÑïαñò αñòαÑïαñƒαÑçαñ╢αñ¿ αñòαñ╛ αñàαñ¿αÑüαñ░αÑïαñº αñòαñ░αÑçαñé',
      'why_cta_btn_contact': 'αñ╕αñéαñ¬αñ░αÑìαñò αñòαñ░αÑçαñé'
    },
    'ta': {
      'nav_home': 'α««α»üα«òα«¬α»ìα«¬α»ü',
      'nav_products': 'α«ñα«»α«╛α«░α«┐α«¬α»ìα«¬α»üα«òα«│α»ì',
      'nav_about': 'α«Äα«Öα»ìα«òα«│α»êα«¬α»ì α«¬α«▒α»ìα«▒α«┐',
      'nav_process': 'α«Äα«Öα»ìα«òα«│α»ì α«Üα»åα«»α«▓α»ìα««α»üα«▒α»ê',
      'nav_pack': 'α«¬α»çα«òα»ìα«òα»çα«£α«┐α«Öα»ì',
      'nav_calc': 'α«╡α«┐α«▓α»ê α«òα«╛α«▓α»ìα«òα»üα«▓α»çα«ƒα»ìα«ƒα«░α»ì',
      'nav_gallery': 'α«òα»çα«▓α«░α«┐',
      'nav_contact': 'α«ñα»èα«ƒα«░α»ìα«¬α»ü',
      'btn_get_quote': 'α«╡α«┐α«╡α«░α««α»ì α«¬α»åα«▒ →',
      'hero_eyebrow': 'α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«çα«¿α»ìα«ñα«┐α«» α«Åα«▓α«òα»ìα«òα«╛α«»α»ì',
      'hero_title': 'α«çα«úα»êα«»α«▒α»ìα«▒ α«¿α«▒α»üα««α«úα««α»ì. <br><span>α«Üα«░α«┐α«»α«╛α«⌐ α«ñα«░α««α»ì.</span> α«ëα«▓α«òα«│α«╡α«┐α«▓α»ì α«¿α««α»ìα«¬α«òα««α«╛α«⌐α«ñα»ü.',
      'hero_desc': 'α«▓α»Çα«╖α«╛ α«ƒα«┐α«░α»çα«ƒα«░α»ìα«╕α»ì α«çα«¿α»ìα«ñα«┐α«»α«╛α«╡α«┐α«⌐α»ì α«¬α»ïα«ƒα«┐α«¿α«╛α«»α«òα»ìα«òα«⌐α»éα«░α«┐α«▓α»ì α«ëα«│α»ìα«│ α«Åα«▓ α««α»êα«»α«Öα»ìα«òα«│α»ì α««α«▒α»ìα«▒α»üα««α»ì α«ñα»ïα«ƒα»ìα«ƒα«Öα»ìα«òα«│α«┐α«▓α»ì α«çα«░α»üα«¿α»ìα«ñα»ü α«¿α»çα«░α«ƒα«┐α«»α«╛α«ò α«¬α»åα«▒α«¬α»ìα«¬α«ƒα»ìα«ƒ α«ëα«»α«░α»ìα«ñα«░ α«¬α«Üα»ìα«Üα»ê α«Åα«▓α«òα»ìα«òα«╛α«»α»ê α«╡α«┤α«Öα»ìα«òα»üα«òα«┐α«▒α«ñα»ü.',
      'hero_btn_explore': 'α«░α«òα«Öα»ìα«òα«│α»ê α«åα«░α«╛α«»α»üα«Öα»ìα«òα«│α»ì →',
      'hero_btn_calc': 'α«╡α«┐α«▓α»êα«»α»ê α«òα«úα«òα»ìα«òα«┐α«ƒα»üα«Öα»ìα«òα«│α»ì →',
      'hero_badge_title': '100% α«Åα«▒α»ìα«▒α»üα««α«ñα«┐ α«ñα«░α««α»ì',
      'hero_badge_desc': 'α«òα»êα««α»üα«▒α»êα«»α«╛α«ò α«ñα«░α««α»ì α«¬α«┐α«░α«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα«ñα»ü',
      'products_eyebrow': 'α«ñα«»α«╛α«░α«┐α«¬α»ìα«¬α»üα«òα«│α»ì',
      'products_title': 'α«Äα«Öα»ìα«òα«│α»ì α«Åα«▓α«òα»ìα«òα«╛α«»α»ì α«░α«òα«Öα»ìα«òα«│α»ì',
      'specs_detail': 'α«╡α«┐α«╡α«░α««α»ì & α«àα«│α«╡α»Çα«ƒα»ü',
      'tag_popular': 'α«¬α«┐α«░α«¬α«▓α««α«╛α«⌐α«ñα»ü',
      'tag_royal': 'α«àα«░α«Ü α«ñα»çα«░α»ìα«╡α»ü',
      'btn_calc_bulk': 'α««α»èα«ñα»ìα«ñ α«╡α«┐α«▓α»ê α«òα«úα«òα»ìα«òα«┐α«ƒ →',
      'grade_6_lbl': '6.0 α««α«┐α««α»Ç',
      'grade_7_lbl': '7.0 α««α«┐α««α»Ç',
      'grade_75_lbl': '7.5 α««α«┐α««α»Ç',
      'grade_75_8_lbl': '7.5 - 8.0 α««α«┐α««α»Ç',
      'grade_8_lbl': '8.0 α««α«┐α««α»Ç',
      'grade_85_lbl': '8.5 α««α«┐α««α»Ç',
      'grade_9_lbl': '9.0 α««α«┐α««α»Ç',
      'grade_6_sub': 'α«Üα«╛α«ñα«╛α«░α«ú α«¿α«ƒα»üα«ñα»ìα«ñα«░ α«àα«│α«╡α»ü',
      'grade_7_sub': 'α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«¬α»ïα«▓α»ìα«ƒα»ì (AGEB)',
      'grade_75_sub': 'α«Äα«▓α»êα«ƒα»ì α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«¬α»ïα«▓α»ìα«ƒα»ì',
      'grade_75_8_sub': 'α«Åα«▒α»ìα«▒α»üα««α«ñα«┐ α«¬α»ïα«▓α»ìα«ƒα»ì α«òα«▓α«╡α»ê',
      'grade_8_sub': 'α«Üα»éα«¬α»ìα«¬α«░α»ì α«Äα«òα»ìα«╕α»ìα«ƒα»ìα«░α«╛ α«¬α»ïα«▓α»ìα«ƒα»ì',
      'grade_85_sub': 'α«çα««α»ìα«¬α»Çα«░α«┐α«»α«▓α»ì α«£α««α»ìα«¬α»ï α«¬α»ïα«▓α»ìα«ƒα»ì',
      'grade_9_sub': 'α«Üα»üα«¬α»ìα«░α»Çα««α»ì α«░α«╛α«»α«▓α»ì α«£α««α»ìα«¬α»ï',
      'about_eyebrow': 'α«Äα«Öα»ìα«òα«│α»ì α«¬α«╛α«░α««α»ìα«¬α«░α«┐α«»α««α»ì',
      'about_title': 'α«¿α»Çα«Öα»ìα«òα«│α»ì α«¿α««α»ìα«¬α«òα»ìα«òα»éα«ƒα«┐α«» α«ñα«░α««α»ì, α«¿α»Çα«Öα»ìα«òα«│α»ì α«Üα«╛α«░α»ìα«¿α»ìα«ñα«┐α«░α»üα«òα»ìα«òα«òα»ìα«òα»éα«ƒα«┐α«» α«Üα»çα«╡α»ê.',
      'feat_1_title': 'α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«ñα«░α««α»ì',
      'feat_1_desc': 'α«Üα»Çα«░α«╛α«⌐ α«¿α«┐α«▒α««α»ì α««α«▒α»ìα«▒α»üα««α»ì α«Üα«┐α«▒α«¿α»ìα«ñ α«òα«╛α«»α»ìα«òα«│α»ê α«ëα«▒α»üα«ñα«┐ α«Üα»åα«»α»ìα«» α«òα»êα««α»üα«▒α»êα«»α«╛α«ò α«ñα«░α««α»ì α«¬α«┐α«░α«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα«ñα»ü.',
      'feat_2_title': 'α«ëα«│α»ìα«¿α«╛α«ƒα»ìα«ƒα»ü α««α«▒α»ìα«▒α»üα««α»ì α«Åα«▒α»ìα«▒α»üα««α«ñα«┐ α«òα«¬α»ìα«¬α«▓α»ì',
      'feat_2_desc': 'α««α«╛α«¿α«┐α«▓α«Öα»ìα«òα«│α»ì α««α«▒α»ìα«▒α»üα««α»ì α«ëα«▓α«òα«│α«╛α«╡α«┐α«» α«ñα»üα«▒α»êα««α»üα«òα«Öα»ìα«òα«│α«┐α«▓α»ì α«Üα«░α«┐α«»α«╛α«⌐ α«¿α»çα«░α«ñα»ìα«ñα«┐α«▓α»ì α«╡α«┐α«¿α«┐α«»α»ïα«òα«┐α«òα»ìα«ò α«¿α««α»ìα«¬α«òα««α«╛α«⌐ α«¬α»ïα«òα»ìα«òα»üα«╡α«░α«ñα»ìα«ñα»ü.',
      'feat_3_title': 'α«¿α»çα«░α«ƒα«┐ α«╡α«┐α«╡α«Üα«╛α«» α«òα»èα«│α»ìα««α»üα«ñα«▓α»ì',
      'feat_3_desc': 'α«àα«Öα»ìα«òα»Çα«òα«░α«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒ α«Åα«▓ α««α»êα«»α«Öα»ìα«òα«│α»ì α««α«▒α»ìα«▒α»üα««α»ì α«╡α«┐α«╡α«Üα«╛α«»α«┐α«òα«│α«┐α«ƒα««α«┐α«░α»üα«¿α»ìα«ñα»ü α«¿α»çα«░α«ƒα«┐α«»α«╛α«ò α«¬α»åα«▒α«¬α»ìα«¬α«ƒα»üα«òα«┐α«▒α«ñα»ü.',
      'feat_4_title': 'α«¿α»åα«òα«┐α«┤α»ìα«╡α«╛α«⌐ α««α»èα«ñα»ìα«ñ α«╡α«┐α«¿α«┐α«»α»ïα«òα««α»ì',
      'feat_4_desc': '100 α«òα«┐α«▓α»ï α««α»üα«ñα«▓α»ì α«òα»èα«│α»ìα«òα«▓α«⌐α»ìα«òα«│α»ì α«╡α«░α»ê α«àα«│α«╡α«┐α«ƒα«òα»ìα«òα»éα«ƒα«┐α«» α«╡α«┐α«¿α«┐α«»α»ïα«òα«Üα»ì α«Üα«Öα»ìα«òα«┐α«▓α«┐.',
      'feat_5_title': 'α«¿α»çα«░α«ƒα«┐ α«¬α»ïα«ƒα»ìα«ƒα«┐ α«╡α«┐α«▓α»ê',
      'feat_5_desc': 'α«╡α«┐α«╡α«Üα«╛α«» α««α«úα»ìα«ƒα«▓α«Öα»ìα«òα«│α«┐α«▓α»ì α«çα«░α»üα«¿α»ìα«ñα»ü α«¿α»çα«░α«ƒα«┐α«»α«╛α«ò α«òα»èα«│α»ìα««α»üα«ñα«▓α»ì α«Üα»åα«»α»ìα«╡α«ñα«╛α«▓α»ì α«Üα«┐α«▒α«¿α»ìα«ñ α«╡α«┐α«▓α»êα«»α«┐α«▓α»ì α«╡α«┤α«Öα»ìα«ò α««α»üα«ƒα«┐α«òα«┐α«▒α«ñα»ü.',
      'feat_6_title': 'α«¿α»Çα«úα»ìα«ƒ α«òα«╛α«▓ α«╡α«úα«┐α«ò α«òα«╡α«⌐α««α»ì',
      'feat_6_desc': 'α««α»èα«ñα»ìα«ñ α«╡α«┐α«»α«╛α«¬α«╛α«░α«┐α«òα«│α»üα«ƒα«⌐α»ì α«¿α»Çα«úα»ìα«ƒ α«òα«╛α«▓ α««α«▒α»ìα«▒α»üα««α»ì α«¿α««α»ìα«¬α«òα««α«╛α«⌐ α«òα»éα«ƒα»ìα«ƒα«╛α«úα»ìα««α»êα«»α»ê α«ëα«░α»üα«╡α«╛α«òα»ìα«ò α«¿α«╛α«Öα»ìα«òα«│α»ì α«╡α»åα«│α«┐α«¬α»ìα«¬α«ƒα»êα«»α«╛α«⌐ α««α»üα«▒α»êα«»α«┐α«▓α»ì α«Üα»åα«»α«▓α»ìα«¬α«ƒα»üα«òα«┐α«▒α»ïα««α»ì.',
      'process_eyebrow': 'α«Üα»åα«»α«▓α»ìα««α»üα«▒α»ê α«╡α«┤α«┐α««α»üα«▒α»ê',
      'process_title': 'α«àα«▒α»üα«╡α«ƒα»ê α««α»üα«ñα«▓α»ì α«ëα«Öα»ìα«òα«│α»ì α«òα«┐α«ƒα«Öα»ìα«òα»ü α«╡α«░α»ê',
      'step_1_tab': '1. α«òα»èα«│α»ìα««α»üα«ñα«▓α»ì',
      'step_2_tab': '2. α«Åα«▓α««α»ì',
      'step_3_tab': '3. α«ñα«░α««α»ì α«¬α«┐α«░α«┐α«ñα»ìα«ñα«▓α»ì',
      'step_4_tab': '4. α«¬α»çα«òα»ìα«òα»çα«£α«┐α«Öα»ì',
      'step_5_tab': '5. α«àα«⌐α»üα«¬α»ìα«¬α»üα«ñα«▓α»ì',
      'step_details_title': 'α«Üα»åα«»α«▓α»ìα««α»üα«▒α»ê α«╡α«┐α«╡α«░α«Öα»ìα«òα«│α»ì',
      'step_1_title': '1. α«Üα«┐α«▒α«¿α»ìα«ñ α«ñα»ïα«ƒα»ìα«ƒ α«òα»èα«│α»ìα««α»üα«ñα«▓α»ì',
      'step_1_desc': 'α««α»çα«▒α»ìα«òα»üα«ñα»ì α«ñα»èα«ƒα«░α»ìα«Üα»ìα«Üα«┐ α««α«▓α»êα«¬α»ì α«¬α«òα»üα«ñα«┐α«»α«┐α«▓α»ì (α«ñα»çα«⌐α«┐, α«çα«ƒα»üα«òα»ìα«òα«┐, α««α»éα«úα«╛α«░α»ì) α«ëα«│α»ìα«│ α«ñα»ïα«ƒα»ìα«ƒα«Öα»ìα«òα«│α»üα«ƒα«⌐α»ì α«¿α»çα«░α«ƒα«┐α«ñα»ì α«ñα»èα«ƒα«░α»ìα«¬α»üα«òα«│α»ê α«Åα«▒α»ìα«¬α«ƒα»üα«ñα»ìα«ñα»üα«òα«┐α«▒α»ïα««α»ì. α«Åα«▓α«òα»ìα«òα«╛α«»α»ì α«òα«╛α«»α»ìα«òα«│α»ì α««α»üα«┤α»üα««α»êα«»α«╛α«ò α«¬α«┤α»üα«ñα»ìα«ñα«╡α»üα«ƒα«⌐α»ì α«¬α«▒α«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»üα«òα«┐α«⌐α»ìα«▒α«⌐. α«ëα«»α«░α»ìα«¿α»ìα«ñ α««α«▓α»êα«¬α»ìα«¬α«òα»üα«ñα«┐α«òα«│α«┐α«▓α»ì α«çα«░α»üα«¿α»ìα«ñα»ü α«òα»èα«│α»ìα««α»üα«ñα«▓α»ì α«Üα»åα«»α»ìα«╡α«ñα»ü α«╡α«┐α«ñα»êα«òα«│α»üα«òα»ìα«òα»üα«│α»ì α«àα«ñα«┐α«ò α«àα«ƒα«░α»ìα«ñα»ìα«ñα«┐α«»α«╛α«⌐ α«àα«░α»ïα««α«╛ α«Äα«úα»ìα«úα»åα«»α»ìα«òα«│α»ê α«ëα«▒α»üα«ñα«┐ α«Üα»åα«»α»ìα«òα«┐α«▒α«ñα»ü.',
      'step_2_title': '2. α«àα«Öα»ìα«òα»Çα«òα«░α«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒ α«Åα«▓α«Öα»ìα«òα«│α»ì',
      'step_2_desc': 'α«¬α»ïα«ƒα«┐α«¿α«╛α«»α«òα»ìα«òα«⌐α»éα«░α»ì α««α«▒α»ìα«▒α»üα««α»ì α«╡α«¿α»ìα«ñα«⌐α»ìα««α»çα«ƒα»ü α«åα«òα«┐α«» α«çα«ƒα«Öα»ìα«òα«│α«┐α«▓α»ì α«çα«¿α»ìα«ñα«┐α«» α«¿α«▒α»üα««α«úα«¬α»ì α«¬α»èα«░α»üα«│α»ì α«╡α«╛α«░α«┐α«»α«ñα»ìα«ñα«┐α«⌐α»ì α««α»çα«▒α»ìα«¬α«╛α«░α»ìα«╡α»êα«»α«┐α«▓α»ì α«¿α«ƒα»êα«¬α»åα«▒α»üα««α»ì α«Åα«▓α«Öα»ìα«òα«│α«┐α«▓α»ì α«¿α«╛α«Öα»ìα«òα«│α»ì α«ñα»Çα«╡α«┐α«░α««α«╛α«òα«¬α»ì α«¬α«Öα»ìα«òα»çα«▒α»ìα«òα«┐α«▒α»ïα««α»ì. α«çα«ñα»ü α««α»üα«┤α»üα««α»êα«»α«╛α«⌐ α«╡α»åα«│α«┐α«¬α»ìα«¬α«ƒα»êα«ñα»ìα«ñα«⌐α»ìα««α»ê, α«ñα«░ α«Üα»ïα«ñα«⌐α»êα«òα«│α»ì α««α«▒α»ìα«▒α»üα««α»ì α«Üα«┐α«▒α«¿α»ìα«ñ α«╡α«┐α«▓α»êα«»α»ê α«ëα«▒α»üα«ñα«┐ α«Üα»åα«»α»ìα«òα«┐α«▒α«ñα»ü.',
      'step_3_title': '3. α«çα«»α«¿α»ìα«ñα«┐α«░ α««α«▒α»ìα«▒α»üα««α»ì α«òα»êα««α»üα«▒α»ê α«ñα«░α««α»ì α«¬α«┐α«░α«┐α«ñα»ìα«ñα«▓α»ì',
      'step_3_desc': 'α«╡α«╛α«Öα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒ α«òα«╛α«»α»ìα«òα«│α»ì α«àα«│α«╡α»ê α«ñα»üα«▓α»ìα«▓α«┐α«»α««α«╛α«ò α«╡α«░α»êα«»α«▒α»üα«òα»ìα«ò α«çα«»α«¿α»ìα«ñα«┐α«░α««α»ì α««α»éα«▓α««α»ì α«Üα«▓α»ìα«▓α«ƒα»ê α«Üα»åα«»α»ìα«»α«¬α»ìα«¬α«ƒα»üα«òα«┐α«⌐α»ìα«▒α«⌐. α«àα«ƒα»üα«ñα»ìα«ñα»ü, α«åα«»α»ìα«╡α«╛α«│α«░α»ìα«òα«│α»ì α«Üα»çα«ñα««α«ƒα»êα«¿α»ìα«ñ α«òα«╛α«»α»ìα«òα«│α»ì α««α«▒α»ìα«▒α»üα««α»ì α«¬α«┐α«▒ α«¬α»èα«░α»üα«ƒα»ìα«òα«│α»ê α«åα«»α»ìα«╡α«ò α«àα««α»êα«¬α»ìα«¬α»üα«òα«│α«┐α«⌐α»ì α«òα»Çα«┤α»ì α«òα»êα««α»üα«▒α»êα«»α«╛α«ò α«ñα«░α««α»ì α«¬α«┐α«░α«┐α«òα»ìα«òα«┐α«▒α«╛α«░α»ìα«òα«│α»ì.',
      'step_4_title': '4. α«êα«░α«¬α»ìα«¬α«ñα««α»ì & α«¿α«▒α»üα««α«úα«¬α»ì α«¬α«╛α«ñα»üα«òα«╛α«¬α»ìα«¬α»ü',
      'step_4_desc': 'α«ñα«░α««α»ì α«¬α«┐α«░α«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒ α«Åα«▓α«òα»ìα«òα«╛α«»α»ì α«òα«ƒα»ìα«ƒα»üα«¬α»ìα«¬α«ƒα»üα«ñα»ìα«ñα«¬α»ìα«¬α«ƒα»ìα«ƒ α«êα«░α«¬α»ìα«¬α«ñα«ñα»ìα«ñα«┐α«▓α»ì α«Üα»çα««α«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»üα«òα«┐α«▒α«ñα»ü. α«¬α»ïα«òα»ìα«òα»üα«╡α«░α«ñα»ìα«ñα«┐α«⌐α»ì α«¬α»ïα«ñα»ü α«¿α«▒α»üα««α«úα«ñα»ìα«ñα»êα«»α»üα««α»ì α«¬α«Üα»ìα«Üα»ê α«¿α«┐α«▒α«ñα»ìα«ñα»êα«»α»üα««α»ì α«¬α«╛α«ñα»üα«òα«╛α«òα»ìα«ò, α«Üα»üα«▒α»ìα«▒α»üα«¬α»ìα«¬α»üα«▒ α«êα«░α«¬α»ìα«¬α«ñα«ñα»ìα«ñα»ê α«ñα«ƒα»üα«òα»ìα«òα»üα««α»ì α«ëα«úα«╡α»üα«ñα»ì α«ñα«░α««α»ì α«╡α«╛α«»α»ìα«¿α»ìα«ñ α«¬α»çα«òα»ìα«òα»üα«òα«│α«┐α«▓α»ì α«¬α»çα«òα»ì α«Üα»åα«»α»ìα«òα«┐α«▒α»ïα««α»ì.',
      'step_5_title': '5. α«¬α«╛α«ñα»üα«òα«╛α«¬α»ìα«¬α«╛α«⌐ α«¬α»ïα«òα»ìα«òα»üα«╡α«░α«ñα»ìα«ñα»ü',
      'step_5_desc': 'α«¬α»ïα«òα»ìα«òα»üα«╡α«░α«ñα»ìα«ñα»ü α«╡α«╛α«òα«⌐α«Öα»ìα«òα«│α»ì α«àα«▓α»ìα«▓α«ñα»ü α«òα»èα«│α»ìα«òα«▓α«⌐α»ìα«òα«│α»ì α««α»éα«▓α««α»ì α«Åα«▒α»ìα«▒α»üα««α«ñα«┐ α«Üα»åα«»α»ìα«»α«¬α»ìα«¬α«ƒα»üα««α»ì α«¬α»èα«░α»üα«ƒα»ìα«òα«│α»ì α«¬α«╛α«ñα»üα«òα«╛α«¬α»ìα«¬α«╛α«ò α«▓α»çα«¬α«┐α«│α«┐α«ƒα«¬α»ìα«¬α«ƒα»ìα«ƒα»ü α«àα«⌐α»üα«¬α»ìα«¬α«¬α»ìα«¬α«ƒα»üα«òα«┐α«⌐α»ìα«▒α«⌐. α«ñα»çα«╡α»êα«»α«╛α«⌐ α«àα«⌐α»êα«ñα»ìα«ñα»ü α«åα«╡α«úα«Öα»ìα«òα«│α»ì, α«Åα«▒α»ìα«▒α»üα««α«ñα«┐ α«àα«⌐α»üα««α«ñα«┐α«òα«│α»ì α«åα«òα«┐α«»α«╡α«▒α»ìα«▒α»ê α«¿α«╛α«Öα»ìα«òα«│α»ì α«òα«╡α«⌐α«┐α«ñα»ìα«ñα»ü α«òα»èα«│α»ìα«òα«┐α«▒α»ïα««α»ì.',
      'pack_eyebrow': 'α«¬α»çα«òα»ìα«òα»çα«£α«┐α«Öα»ì α«╡α«┐α«░α»üα«¬α»ìα«¬α«Öα»ìα«òα«│α»ì',
      'pack_title': 'α«¿α«▒α»üα««α«úα«¬α»ì α«¬α«╛α«ñα»üα«òα«╛α«¬α»ìα«¬α»ü α«àα««α»êα«¬α»ìα«¬α»üα«òα«│α»ì',
      'pack_desc': 'α«╡α»åα«¬α»ìα«¬α««α»ì α««α«▒α»ìα«▒α»üα««α»ì α«êα«░α«¬α»ìα«¬α«ñα««α»ì α«¬α«ƒα»üα««α»ìα«¬α»ïα«ñα»ü α«Åα«▓α«òα»ìα«òα«╛α«»α«┐α«⌐α»ì α«¿α«▒α»üα««α«ú α«Äα«úα»ìα«úα»åα«»α»ìα«òα«│α»ì α«åα«╡α«┐α«»α«╛α«òα«┐α«⌐α»ìα«▒α«⌐. α«Äα«Öα»ìα«òα«│α»ì α«Üα«┐α«▒α«¬α»ìα«¬α»ü α«¬α»çα«òα»ìα«òα«┐α«Öα»ì α«àα««α»êα«¬α»ìα«¬α»üα«òα«│α»ì α«Åα«▓α«òα»ìα«òα«╛α«»α»ì α«¬α»üα«ñα«┐α«» α«¿α«▒α»üα««α«úα«ñα»ìα«ñα»üα«ƒα«⌐α»ì α«ëα«Öα»ìα«òα«│α»ì α«òα«┐α«ƒα«Öα»ìα«òα»ê α«╡α«¿α»ìα«ñα«ƒα»êα«╡α«ñα»ê α«ëα«▒α»üα«ñα«┐ α«Üα»åα«»α»ìα«òα«┐α«▒α«ñα»ü.',
      'pack_1kg_tab': '1 α«òα«┐α«▓α»ï α«¬α»êα«òα«│α»ì',
      'pack_5kg_tab': '5 α«òα«┐α«▓α»ï α«╡α»åα«▒α»ìα«▒α«┐α«ƒ α«¬α»êα«òα«│α»ì',
      'pack_10kg_tab': '10 α«òα«┐α«▓α»ï α«àα«ƒα»ìα«ƒα»êα«¬α»ìα«¬α»åα«ƒα»ìα«ƒα«┐α«òα«│α»ì',
      'pack_25kg_tab': '25 α«òα«┐α«▓α»ï α««α»èα«ñα»ìα«ñ α«Üα«╛α«òα»ìα«òα»üα«òα«│α»ì',
      'pack_select_lbl': 'α«¬α»çα«òα»ìα«òα»çα«£α«┐α«Öα»ìα«òα»êα«ñα»ì α«ñα»çα«░α»ìα«¿α»ìα«ñα»åα«ƒα»üα«òα»ìα«òα«╡α»üα««α»ì...',
      'pack_point_1': 'α«êα«░α«¬α»ìα«¬α«ñα««α»ì α«òα«ƒα»ìα«ƒα»üα«¬α»ìα«¬α«ƒα»üα«ñα»ìα«ñα«¬α»ìα«¬α«ƒα»ìα«ƒ α«¬α«╛α«▓α«┐ α«àα«ƒα»üα«òα»ìα«òα»ü',
      'pack_point_2': 'α«åα«òα»ìα«╕α«┐α«£α«⌐α»ì α«ëα«▒α«┐α«₧α»ìα«Üα»üα««α»ì α«¬α«ƒα»ìα«ƒα»êα«òα«│α»ì',
      'pack_point_3': 'α«ëα«úα«╡α»ü α«ñα«░ α«ñα«ƒα«┐α««α«⌐α«╛α«⌐ α«àα«ƒα»üα«òα»ìα«òα»ü',
      'pack_point_4': 'α«¬α»ïα«òα»ìα«òα»üα«╡α«░α«ñα»ìα«ñα«┐α«▒α»ìα«òα«╛α«⌐ α«╡α«▓α»üα«╡α«╛α«⌐ α«àα«ƒα»ìα«ƒα»êα«¬α»ìα«¬α»åα«ƒα»ìα«ƒα«┐α«òα«│α»ì',
      'calc_eyebrow': 'α«╡α«┐α«▓α»ê α««α«▒α»ìα«▒α»üα««α»ì α«àα«│α«╡α»ü α««α«ñα«┐α«¬α»ìα«¬α»Çα«ƒα»ü',
      'calc_title': 'α««α»èα«ñα»ìα«ñ α«╡α«┐α«▓α»ê α«òα«╛α«▓α»ìα«òα»üα«▓α»çα«ƒα»ìα«ƒα«░α»ì',
      'calc_label_grade': 'α«Åα«▓α«òα»ìα«òα«╛α«»α»ì α«àα«│α«╡α»ü/α«ñα«░α«ñα»ìα«ñα»ê α«ñα»çα«░α»ìα«¿α»ìα«ñα»åα«ƒα»üα«òα»ìα«òα«╡α»üα««α»ì',
      'calc_label_qty': 'α«ñα»çα«╡α»êα«»α«╛α«⌐ α«àα«│α«╡α»ê α«ñα»çα«░α»ìα«¿α»ìα«ñα»åα«ƒα»üα«òα»ìα«òα«╡α»üα««α»ì',
      'calc_min_label': 'α«òα»üα«▒α»êα«¿α»ìα«ñα«ñα»ü: 5 α«òα«┐α«▓α»ï',
      'calc_max_label': 'α«àα«ñα«┐α«òα«¬α«ƒα»ìα«Üα««α»ì: 5000 α«òα«┐α«▓α»ï',
      'calc_unit': 'α«òα«┐α«▓α»ïα«òα«┐α«░α«╛α««α»ì (KG)',
      'calc_summary_header': 'α««α«ñα«┐α«¬α»ìα«¬α»Çα«ƒα»ìα«ƒα»ü α«Üα»üα«░α»üα«òα»ìα«òα««α»ì',
      'calc_summary_grade': 'α«ñα»çα«░α»ìα«¿α»ìα«ñα»åα«ƒα»üα«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒ α«ñα«░α««α»ì:',
      'calc_summary_vol': 'α««α»èα«ñα»ìα«ñ α«àα«│α«╡α»ü:',
      'calc_summary_pack': 'α«¬α«░α«┐α«¿α»ìα«ñα»üα«░α»êα«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒ α«¬α»çα«òα»ìα«òα»çα«£α«┐α«Öα»ì:',
      'calc_summary_bags': 'α««α»èα«ñα»ìα«ñ α«¬α»ïα«òα»ìα«òα»üα«╡α«░α«ñα»ìα«ñα»ü α«¬α»êα«òα«│α»ì:',
      'calc_summary_range': 'α««α«ñα«┐α«¬α»ìα«¬α«┐α«ƒα«¬α»ìα«¬α«ƒα»ìα«ƒ α«╡α«┐α«▓α»ê α«╡α«░α««α»ìα«¬α»ü:',
      'calc_disclaimer': '*α«òα»üα«▒α«┐α«¬α»ìα«¬α»ü: α«¬α»ïα«ƒα«┐α«¿α«╛α«»α«òα»ìα«òα«⌐α»éα«░α»ì α«Åα«▓ α«╡α«┐α«▓α»êα«òα«│α«┐α«⌐α»ì α«àα«ƒα«┐α«¬α»ìα«¬α«ƒα»êα«»α«┐α«▓α»ì α«Åα«▓α«òα»ìα«òα«╛α«»α»ì α«╡α«┐α«▓α»êα«òα«│α»ì α«ñα«┐α«⌐α««α»üα««α»ì α««α«╛α«▒α»üα«¬α«ƒα»üα««α»ì. α«çα«ñα»ü α«ñα«┐α«ƒα»ìα«ƒα««α«┐α«ƒα«▓α»üα«òα»ìα«òα«╛α«⌐ α««α«ñα«┐α«¬α»ìα«¬α»Çα«ƒα«╛α«òα»üα««α»ì. α«çα«▒α»üα«ñα«┐ α«╡α«┐α«▓α»ê α«¿α»çα«░α«ƒα«┐α«»α«╛α«ò α«ñα»èα«ƒα«░α»ìα«¬α»ü α«òα»èα«│α»ìα«│α»üα««α»ìα«¬α»ïα«ñα»ü α«ëα«▒α»üα«ñα«┐ α«Üα»åα«»α»ìα«»α«¬α»ìα«¬α«ƒα»üα««α»ì.',
      'btn_calc_whatsapp': 'α«╡α«╛α«ƒα»ìα«╕α»ìα«àα«¬α»ì α««α»éα«▓α««α»ì α«╡α«┐α«╡α«░α««α»ì α«¬α»åα«▒ →',
      'btn_calc_email': 'α««α«┐α«⌐α»ìα«⌐α«₧α»ìα«Üα«▓α»ì α««α»éα«▓α««α»ì α«╡α«┐α«╡α«░α««α»ì α«¬α»åα«▒',
      'gallery_eyebrow': 'α«òα«╛α«ƒα»ìα«Üα«┐α«¬α»ì α«¬α«»α«úα««α»ì',
      'gallery_title': 'α«ëα«»α«░α»ìα«ñα«░ α«¬α»üα«òα»êα«¬α»ìα«¬α«ƒ α«ñα»èα«òα»üα«¬α»ìα«¬α»ü',
      'btn_gallery_visit': 'α«ñα»èα«┤α«┐α«▒α»ìα«Üα«╛α«▓α»ê α«¬α«╛α«░α»ìα«╡α»êα«»α«┐α«ƒ α«òα»ïα«░α«╡α»üα««α»ì',
      'gallery_card_1_eyebrow': 'α«òα»èα«│α»ìα««α»üα«ñα«▓α»ì',
      'gallery_card_1_title': 'α«¬α»üα«ñα«┐α«» α«àα«▒α»üα«╡α«ƒα»ê',
      'gallery_card_2_eyebrow': 'α«çα«»α«¿α»ìα«ñα«┐α«░ α«ñα«░α««α»ì α«¬α«┐α«░α«┐α«ñα»ìα«ñα«▓α»ì',
      'gallery_card_2_title': 'α«Üα«▓α»ìα«▓α«ƒα»ê α«àα«│α«╡α»ü α«¬α«┐α«░α«┐α«ñα»ìα«ñα«▓α»ì',
      'gallery_card_3_eyebrow': 'α«òα»êα««α»üα«▒α»ê α«åα«»α»ìα«╡α»ü',
      'gallery_card_3_title': 'α«¿α«┐α«▒α««α»ì α«¬α«┐α«░α«┐α«ñα»ìα«ñα«▓α»ì',
      'gallery_card_4_eyebrow': 'α«¬α»ïα«òα»ìα«òα»üα«╡α«░α«ñα»ìα«ñα»ü',
      'gallery_card_4_title': 'α«¬α«╛α«ñα»üα«òα«╛α«¬α»ìα«¬α«╛α«⌐ α«¬α»çα«òα»ìα«òα«┐α«Öα»ì',
      'test_eyebrow': 'α«ëα«░α«┐α««α»êα«Üα»ìα«Üα«╛α«⌐α»ìα«▒α»üα«òα«│α»ì',
      'test_title': 'α««α»èα«ñα»ìα«ñ α«╡α«┐α«»α«╛α«¬α«╛α«░α«┐α«òα«│α«╛α«▓α»ì α«¿α««α»ìα«¬α«¬α»ìα«¬α«ƒα»üα«òα«┐α«▒α«ñα»ü',
      'test_1_quote': 'α«▓α»Çα«╖α«╛ α«ƒα«┐α«░α»çα«ƒα«░α»ìα«╕α»ì α«ñα»èα«ƒα«░α»ìα«¿α»ìα«ñα»ü α«ëα«»α«░α»ìα«ñα«░ α«¬α«Üα»ìα«Üα»ê α«Åα«▓α«òα»ìα«òα«╛α«»α»ê α«╡α«┤α«Öα»ìα«òα»üα«òα«┐α«▒α«ñα»ü. α«àα«╡α«░α»ìα«òα«│α«┐α«⌐α»ì α«àα«│α«╡α»Çα«ƒα»üα«òα«│α»ì α««α«┐α«òα«╡α»üα««α»ì α«ñα»üα«▓α»ìα«▓α«┐α«»α««α«╛α«⌐α«╡α»ê, α«çα«ñα»ü α«Üα»Çα«░α«╛α«⌐ α«àα«│α«╡α»ê α«ëα«▒α»üα«ñα«┐ α«Üα»åα«»α»ìα«òα«┐α«▒α«ñα»ü. α«¿α««α»ìα«¬α«òα««α«╛α«⌐α«ñα»ü.',
      'test_1_role': 'α««α»èα«ñα»ìα«ñ α«╡α«┐α«»α«╛α«¬α«╛α«░α«┐, α«░α«╛α«£α«╕α»ìα«ñα«╛α«⌐α»ì',
      'test_2_quote': 'α«¿α«╛α«Öα»ìα«òα«│α»ì 2 α«åα«úα»ìα«ƒα»üα«òα«│α»üα«òα»ìα«òα»ü α««α»çα«▓α«╛α«ò α«▓α»Çα«╖α«╛ α«ƒα«┐α«░α»çα«ƒα«░α»ìα«╕α«┐α«ƒα««α»ì α«çα«░α»üα«¿α»ìα«ñα»ü 7α««α«┐α««α»Ç α««α«▒α»ìα«▒α»üα««α»ì 8α««α«┐α««α»Ç α«Åα«▓α«òα»ìα«òα«╛α«»α»ê α«╡α«╛α«Öα»ìα«òα«┐ α«╡α«░α»üα«òα«┐α«▒α»ïα««α»ì. α«êα«░α«¬α»ìα«¬α«ñα««α»ì α«Äα«¬α»ìα«¬α»ïα«ñα»üα««α»ì 12% α«òα»ìα«òα»üα««α»ì α«òα»üα«▒α»êα«╡α«╛α«ò α«ëα«│α»ìα«│α«ñα»ü. α«Üα«┐α«▒α«¿α»ìα«ñ α«╡α«┐α«▓α»ê!',
      'test_2_role': 'α««α«Üα«╛α«▓α«╛ α«Åα«▒α»ìα«▒α»üα««α«ñα«┐α«»α«╛α«│α«░α»ì, α«¬α»åα«Öα»ìα«òα«│α»éα«░α»ü',
      'test_3_quote': 'α«¿α««α»ìα«¬α«òα««α«╛α«⌐, α«ñα»èα«┤α«┐α«▓α»ìα««α»üα«▒α»ê α««α«▒α»ìα«▒α»üα««α»ì α«╡α»åα«│α«┐α«¬α»ìα«¬α«ƒα»êα«»α«╛α«⌐ α«¿α«┐α«▒α»üα«╡α«⌐α««α»ì. α«¬α»çα«òα»ìα«òα»çα«£α«┐α«Öα»ì α«╡α«┐α«░α»üα«¬α»ìα«¬α«Öα»ìα«òα«│α»ì α«Üα«┐α«▒α«¬α»ìα«¬α«╛α«ò α«ëα«│α»ìα«│α«⌐. α«╡α«▒α«úα»ìα«ƒ α«òα«╛α«▓α«Öα»ìα«òα«│α«┐α«▓α»üα««α»ì α«ñα«ƒα»êα«»α«┐α«⌐α»ìα«▒α«┐ α«╡α«┐α«¿α«┐α«»α»ïα«òα««α»ì α«Üα»åα«»α»ìα«òα«┐α«▒α«╛α«░α»ìα«òα«│α»ì.',
      'test_3_role': 'α«Üα«┐α«▓α»ìα«▓α«▒α»ê α«Üα«Öα»ìα«òα«┐α«▓α«┐ α«Üα«¬α»ìα«│α»êα«»α«░α»ì, α«òα»çα«░α«│α«╛',
      'contact_eyebrow': 'α«ñα»èα«ƒα«░α»ìα«¬α»ü α«òα»èα«│α»ìα«│',
      'contact_title': 'α«¿α««α»ìα«¬α«òα««α«╛α«⌐ α«òα»èα«│α»ìα««α»üα«ñα«▓α»ì α«Üα»çα«⌐α«▓α»ê α«ëα«░α»üα«╡α«╛α«òα»ìα«òα»üα«Öα»ìα«òα«│α»ì',
      'contact_desc': 'α««α«╛α«ñα«┐α«░α«┐α«òα«│α»êα«¬α»ì α«¬α«╛α«░α»ìα«òα»ìα«ò, α«¬α»çα«òα»ìα«òα»çα«£α«┐α«Öα»ì α«╡α«ƒα«┐α«╡α««α»êα«¬α»ìα«¬α»êα«ñα»ì α«ñα»çα«░α»ìα«╡α»ü α«Üα»åα«»α»ìα«» α«àα«▓α»ìα«▓α«ñα»ü α«ñα«▒α»ìα«¬α»ïα«ñα»êα«» α«Åα«▓α«Öα»ìα«òα«│α«┐α«⌐α»ì α«╡α«┐α«╡α«░α«Öα»ìα«òα«│α»êα«¬α»ì α«¬α»åα«▒ α«Äα«Öα»ìα«òα«│α»êα«ñα»ì α«ñα»èα«ƒα«░α»ìα«¬α»ü α«òα»èα«│α»ìα«│α»üα«Öα»ìα«òα«│α»ì.',
      'btn_contact_submit': 'α««α»èα«ñα»ìα«ñ α«╡α«┐α«Üα«╛α«░α«úα»ê α«╡α«┐α«╡α«░α««α»ì α«Üα««α«░α»ìα«¬α»ìα«¬α«┐α«òα»ìα«ò',
      'contact_info_phone_lbl': 'α«ñα»èα«▓α»êα«¬α»çα«Üα«┐ / α«╡α«╛α«ƒα»ìα«╕α»ìα«àα«¬α»ì',
      'contact_info_email_lbl': 'α««α«┐α«⌐α»ìα«⌐α«₧α»ìα«Üα«▓α»ì α««α»üα«òα«╡α«░α«┐',
      'contact_info_loc_lbl': 'α«╡α«úα«┐α«ò α««α»êα«»α««α»ì & α«ñα»èα«┤α«┐α«▒α»ìα«Üα«╛α«▓α»ê',
      'contact_info_loc_val': 'α«¬α»ïα«ƒα«┐α«¿α«╛α«»α«òα»ìα«òα«⌐α»éα«░α»ì, α«ñα»çα«⌐α«┐ α««α«╛α«╡α«ƒα»ìα«ƒα««α»ì, α«ñα««α«┐α«┤α»ìα«¿α«╛α«ƒα»ü - 625513, α«çα«¿α»ìα«ñα«┐α«»α«╛',
      'foot_desc': 'α«¬α«Üα»ìα«Üα»ê α«Åα«▓α«òα»ìα«òα«╛α«»α«┐α«⌐α»ì α«¬α«┐α«░α«╡α»Çα««α»ì α««α»èα«ñα»ìα«ñ α«╡α«┐α«▒α»ìα«¬α«⌐α»êα«»α«╛α«│α«░α»ì. α«òα»çα«░α«│ α«ñα»ïα«ƒα»ìα«ƒα«Öα»ìα«òα«│α«┐α«▓α»ì α«çα«░α»üα«¿α»ìα«ñα»ü α«Üα»çα«òα«░α«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα»ü, α«¬α»ïα«ƒα«┐α«¿α«╛α«»α«òα»ìα«òα«⌐α»éα«░α«┐α«▓α»ì α«ñα«░α««α»ì α«¬α«┐α«░α«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»üα«òα«┐α«▒α«ñα»ü.',
      'foot_site_lbl': 'α«çα«úα»êα«»α«ñα«│ α«╡α«░α»êα«¬α«ƒα««α»ì',
      'foot_grades_lbl': 'α«Åα«▓α«òα»ìα«òα«╛α«»α»ì α«ñα«░α«Öα»ìα«òα«│α»ì',
      'foot_source_lbl': 'α«Æα«┤α»üα«Öα»ìα«òα»üα«¬α«ƒα»üα«ñα»ìα«ñα«¬α»ìα«¬α«ƒα»ìα«ƒ α«òα»èα«│α»ìα««α»üα«ñα«▓α»ì',
      'foot_link_auction': 'α«Åα«▓α«Üα»ì α«Üα«░α«┐α«¬α«╛α«░α»ìα«¬α»ìα«¬α»ü',
      'foot_link_certs': 'α«ñα«░α«Üα»ì α«Üα«╛α«⌐α»ìα«▒α«┐α«ñα«┤α»ìα«òα«│α»ì',
      'foot_link_desk': 'α««α»èα«ñα»ìα«ñ α«Åα«▒α»ìα«▒α»üα««α«ñα«┐ α«¬α«┐α«░α«┐α«╡α»ü',
      'foot_link_factory': 'α«ñα»èα«┤α«┐α«▒α»ìα«Üα«╛α«▓α»ê α«╡α«┐α«Üα«╛α«░α«úα»ê',
      'foot_rights': '┬⌐ 2026 α«▓α»Çα«╖α«╛ α«ƒα«┐α«░α»çα«ƒα«░α»ìα«╕α»ì. α«àα«⌐α»êα«ñα»ìα«ñα»ü α«ëα«░α«┐α««α»êα«òα«│α»üα««α»ì α«¬α«╛α«ñα»üα«òα«╛α«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα«╡α»ê. α«¬α»ïα«ƒα«┐α«¿α«╛α«»α«òα»ìα«òα«⌐α»éα«░α»ì, α«çα«¿α»ìα«ñα«┐α«»α«╛.',
      'foot_policy': 'α«╡α«╛α«░α«┐α«» α«ëα«░α«┐α««α««α»ì | α«╡α«░α»ìα«ñα»ìα«ñα«òα««α»ì & α«Åα«▒α»ìα«▒α»üα««α«ñα«┐α«òα»ì α«òα»èα«│α»ìα«òα»ê | α«╡α«┐α«¿α«┐α«»α»ïα«ò α«╡α«┐α«ñα«┐α««α»üα«▒α»êα«òα«│α»ì',
      'modal_spec_sieve_lbl': 'α«Üα«▓α»ìα«▓α«ƒα»ê α«àα«│α«╡α»ü α«╡α«┐α«ƒα»ìα«ƒα««α»ì',
      'modal_spec_moisture_lbl': 'α«êα«░α«¬α»ìα«¬α«ñα««α»ì α«àα«│α«╡α»ü',
      'modal_spec_weight_lbl': 'α«▓α«┐α«ƒα»ìα«ƒα«░α»ì α«Äα«ƒα»ê (g/l)',
      'modal_spec_color_lbl': 'α«¿α«┐α«▒α««α»ì',
      'modal_spec_summary_lbl': 'α«ñα«»α«╛α«░α«┐α«¬α»ìα«¬α»ü α«Üα»üα«░α»üα«òα»ìα«òα««α»ì',
      'modal_spec_btn_quote': 'α«àα«│α«╡α»ê α««α«ñα«┐α«¬α»ìα«¬α«┐α«ƒα»üα«Öα»ìα«òα«│α»ì',
      'modal_spec_btn_close': 'α«╡α«┐α«╡α«░α«Öα»ìα«òα«│α»ê α««α»éα«ƒα«╡α»üα««α»ì',
      'calc_pack_1kg': '1 α«òα«┐α«▓α»ï α«¬α»êα«òα«│α»ì (α«àα«ƒα»ìα«ƒα»êα«¬α»ìα«¬α»åα«ƒα»ìα«ƒα«┐α«òα«│α»üα«òα»ìα«òα»üα«│α»ì α«¬α»çα«òα»ì α«Üα»åα«»α»ìα«»α«¬α»ìα«¬α«ƒα»ìα«ƒα«ñα»ü)',
      'calc_pack_5kg': '5 α«òα«┐α«▓α»ï α«╡α»åα«▒α»ìα«▒α«┐α«ƒ α«Üα»Çα«▓α»ì α«Üα»åα«»α»ìα«»α«¬α»ìα«¬α«ƒα»ìα«ƒ α«¬α»êα«òα«│α»ì',
      'calc_pack_10kg': '10 α«òα«┐α«▓α»ï α«¬α«▓ α«àα«ƒα»üα«òα»ìα«òα»ü α«¬α«╛α«ñα»üα«òα«╛α«¬α»ìα«¬α»ü α«¬α»åα«ƒα»ìα«ƒα«┐α«òα«│α»ì',
      'calc_pack_25kg': '25 α«òα«┐α«▓α»ï α«òα«⌐α«░α«ò α«Üα«╛α«òα»ìα«òα»ü α«¬α»êα«òα«│α»ì (α«¿α»Çα«░α«╛α«╡α«┐ α«ñα«ƒα»üα«¬α»ìα«¬α»üα«ƒα«⌐α»ì)',
      'calc_units_label': 'α«àα«▓α«òα»üα«òα«│α»ì',
      'calc_price_contact': 'α«╡α«┐α«▓α»ê α«àα«▒α«┐α«» α«ñα»èα«ƒα«░α»ìα«¬α»ü α«òα»èα«│α»ìα«│α«╡α»üα««α»ì',
      'contact_alert_success': 'α«ëα«Öα»ìα«òα«│α»ì α««α»èα«ñα»ìα«ñ α«╡α«┐α«Üα«╛α«░α«úα»ê α«╡α«┐α«╡α«░α«Öα»ìα«òα«│α»êα«Üα»ì α«Üα««α«░α»ìα«¬α»ìα«¬α«┐α«ñα»ìα«ñα«ñα«▒α»ìα«òα»ü α«¿α«⌐α»ìα«▒α«┐! α«ëα«ƒα«⌐α«ƒα«┐ α«╡α«┐α«╡α«░α«Öα»ìα«òα«│α»êα«¬α»ì α«¬α»åα«▒ α«╡α«╛α«ƒα»ìα«╕α»ìα«àα«¬α»ì α«¬α«òα»ìα«òα««α»ì α«ñα«┐α«▒α«òα»ìα«òα«¬α»ìα«¬α«ƒα»üα«òα«┐α«▒α«ñα»ü.',
      'loading_text': 'α«Åα«▒α»ìα«▒α«¬α»ìα«¬α«ƒα»üα«òα«┐α«▒α«ñα»ü',
      'btn_write_review': 'α««α«ñα«┐α«¬α»ìα«¬α»üα«░α»ê α«Äα«┤α»üα«ñ',
      'review_modal_title': 'α«ëα«Öα»ìα«òα«│α»ì α««α«ñα«┐α«¬α»ìα«¬α»üα«░α»êα«»α»êα«¬α»ì α«¬α«òα«┐α«░α«╡α»üα««α»ì',
      'review_label_name': 'α«ëα«Öα»ìα«òα«│α»ì α«¬α»åα«»α«░α»ì',
      'review_label_role': 'α«¬α«ñα«╡α«┐ / α«çα«ƒα««α»ì / α«¿α«┐α«▒α»üα«╡α«⌐α««α»ì',
      'review_label_rating': 'α««α«ñα«┐α«¬α»ìα«¬α»Çα«ƒα»ü',
      'review_label_text': 'α«ëα«Öα»ìα«òα«│α»ì α««α«ñα«┐α«¬α»ìα«¬α»üα«░α»ê',
      'review_btn_submit': 'α««α«ñα«┐α«¬α»ìα«¬α»üα«░α»êα«»α»êα«Üα»ì α«Üα««α«░α»ìα«¬α»ìα«¬α«┐α«òα»ìα«òα«╡α»üα««α»ì',
      'review_alert_success': 'α«ëα«Öα»ìα«òα«│α»ì α««α«ñα«┐α«¬α»ìα«¬α»üα«░α»êα«òα»ìα«òα»ü α«¿α«⌐α»ìα«▒α«┐! α«ëα«Öα»ìα«òα«│α»ì α««α«ñα«┐α«¬α»ìα«¬α»üα«░α»ê α«Äα«Öα»ìα«òα«│α«ñα»ü α«¬α«▓α«òα»êα«»α«┐α«▓α»ì α«Üα»çα«░α»ìα«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα»üα«│α»ìα«│α«ñα»ü.',
      'review_delete_confirm': 'α«çα«¿α»ìα«ñ α««α«ñα«┐α«¬α»ìα«¬α»üα«░α»êα«»α»ê α«¿α»Çα«òα»ìα«ò α«╡α«┐α«░α»üα««α»ìα«¬α»üα«òα«┐α«▒α»Çα«░α»ìα«òα«│α«╛?',
      'prod_tab_green': 'α«¬α«Üα»ìα«Üα»ê α«Åα«▓α«òα»ìα«òα«╛α«»α»ì',
      'prod_tab_yellow': 'α«¬α«┤ α«Åα«▓α«òα»ìα«òα«╛α«»α»ì (α««α«₧α»ìα«Üα«│α»ì/α«╡α»åα«│α«┐α«░α»ì)',
      'grade_6_sub_yellow': 'α«ñα«░α««α«╛α«⌐ α«╡α»åα«│α«┐α«░α»ì α«ñα«░α««α»ì (MGB)',
      'grade_7_sub_yellow': 'α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«¬α»ïα«▓α»ìα«ƒα»ì α«╡α»åα«│α«┐α«░α»ì α«ñα«░α««α»ì (MGEB)',
      'grade_75_sub_yellow': 'α«Äα«▓α»êα«ƒα»ì α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«╡α»åα«│α«┐α«░α»ì α«ñα«░α««α»ì',
      'grade_75_8_sub_yellow': 'α«Üα»éα«¬α»ìα«¬α«░α»ì α«╡α»åα«│α«┐α«░α»ì α«Åα«▒α»ìα«▒α»üα««α«ñα«┐ α«òα«▓α«╡α»ê',
      'grade_8_sub_yellow': 'α«Üα»éα«¬α»ìα«¬α«░α»ì α«Äα«òα»ìα«╕α»ìα«ƒα»ìα«░α«╛ α«╡α»åα«│α«┐α«░α»ì α«ñα«░α««α»ì',
      'grade_85_sub_yellow': 'α«çα««α»ìα«¬α»Çα«░α«┐α«»α«▓α»ì α«╡α»åα«│α«┐α«░α»ì α«£α««α»ìα«¬α»ï α«¬α»ïα«▓α»ìα«ƒα»ì',
      'grade_9_sub_yellow': 'α«Üα»üα«¬α»ìα«░α»Çα««α»ì α«░α«╛α«»α«▓α»ì α«╡α»åα«│α«┐α«░α»ì α«£α««α»ìα«¬α»ï',
      'calc_label_variety': 'α«Åα«▓α«òα»ìα«òα«╛α«»α»ì α«░α«òα««α»ì',
      'calc_empty_cart': 'α«çα«⌐α»ìα«⌐α»üα««α»ì α«¬α»èα«░α»üα«ƒα»ìα«òα«│α»ì α«Äα«ñα»üα«╡α»üα««α»ì α«Üα»çα«░α»ìα«òα»ìα«òα«¬α»ìα«¬α«ƒα«╡α«┐α«▓α»ìα«▓α»ê. α«░α«òα««α»ì, α«àα«│α«╡α»ü α««α«▒α»ìα«▒α»üα««α»ì α«Äα«ƒα»êα«»α»êα«ñα»ì α«ñα»çα«░α»ìα«¿α»ìα«ñα»åα«ƒα»üα«ñα»ìα«ñα»ü, \'α«╡α«┐α«Üα«╛α«░α«úα»êα«¬α»ì α«¬α«ƒα»ìα«ƒα«┐α«»α«▓α«┐α«▓α»ì α«Üα»çα«░α»ì\' α«Äα«⌐α»ìα«¬α«ñα»ê α«òα«┐α«│α«┐α«òα»ì α«Üα»åα«»α»ìα«»α«╡α»üα««α»ì.',
      'table_th_item': 'α«¬α»èα«░α»üα«│α»ì',
      'table_th_qty': 'α«Äα«ƒα»ê',
      'table_th_bags': 'α«¬α»êα«òα«│α»ì',
      'table_th_price': 'α«╡α«┐α«▓α»ê',
      'calc_summary_items': 'α««α»èα«ñα»ìα«ñ α«¬α»èα«░α»üα«ƒα»ìα«òα«│α»ì:',
      'btn_calc_add_item': 'α«╡α«┐α«Üα«╛α«░α«úα»êα«¬α»ì α«¬α«ƒα»ìα«ƒα«┐α«»α«▓α«┐α«▓α»ì α«Üα»çα«░α»ì +',
      'calc_alert_empty_submit': 'α«ñα«»α«╡α»üα«Üα»åα«»α»ìα«ñα»ü α««α»üα«ñα«▓α«┐α«▓α»ì α«ëα«Öα»ìα«òα«│α»ì α««α«ñα«┐α«¬α»ìα«¬α»Çα«ƒα»ìα«ƒα»üα«¬α»ì α«¬α«ƒα»ìα«ƒα«┐α«»α«▓α«┐α«▓α»ì α«Åα«ñα»çα«⌐α»üα««α»ì α«Æα«░α»ü α«Åα«▓α«òα»ìα«òα«╛α«»α»ì α«àα«│α«╡α»êα«Üα»ì α«Üα»çα«░α»ìα«òα»ìα«òα«╡α»üα««α»ì.',
      'stat_years': 'α«åα«úα»ìα«ƒα»üα«òα«│α»ì α«¬α«╛α«░α««α»ìα«¬α«░α«┐α«»α««α»ì',
      'stat_tons': 'α«ƒα«⌐α»ì α«╡α«┐α«¿α«┐α«»α»ïα«òα«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα«ñα»ü',
      'stat_partners': 'α««α»èα«ñα»ìα«ñ α«òα»éα«ƒα»ìα«ƒα«╛α«│α«░α»ìα«òα«│α»ì',
      'why_biz_label': 'α«Åα«⌐α»ì α«Äα«Öα»ìα«òα«│α»êα«ñα»ì α«ñα»çα«░α»ìα«╡α»ü α«Üα»åα«»α»ìα«» α«╡α»çα«úα»ìα«ƒα»üα««α»ì',
      'why_biz_title': 'α«¿α«┐α«▒α»üα«╡α«⌐α«Öα»ìα«òα«│α«╛α«▓α»ì α«¿α««α»ìα«¬α«¬α»ìα«¬α«ƒα»üα«òα«┐α«▒α«ñα»ü. <br><span style="color: #4eb270;">α«ñα«░α«ñα»ìα«ñα«┐α«⌐α»ì</span> α«àα«ƒα«┐α«¬α»ìα«¬α«ƒα»êα«»α«┐α«▓α»ì α«òα«ƒα»ìα«ƒα««α»êα«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα«ñα»ü.',
      'why_biz_subheading': 'α«▓α«┐α«╖α«╛ α«ƒα«┐α«░α»çα«ƒα«░α»ìα«╕α»ì α«¿α«┐α«▓α»êα«»α«╛α«⌐ α«ñα«░α««α»ì, α«╡α»åα«│α«┐α«¬α»ìα«¬α«ƒα»êα«»α«╛α«⌐ α«╡α«úα«┐α«ò α«¿α«ƒα»êα««α»üα«▒α»êα«òα«│α»ì α««α«▒α»ìα«▒α»üα««α»ì α«¿α»Çα«úα»ìα«ƒ α«òα«╛α«▓ α«╡α«╛α«ƒα«┐α«òα»ìα«òα»êα«»α«╛α«│α«░α»ì α«ëα«▒α«╡α»üα«òα«│α»üα«òα»ìα«òα«╛α«⌐ α«àα«░α»ìα«¬α»ìα«¬α«úα«┐α«¬α»ìα«¬α»üα«ƒα«⌐α»ì α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«çα«¿α»ìα«ñα«┐α«» α«Åα«▓α«òα»ìα«òα«╛α«»α»ê α«╡α«┤α«Öα»ìα«òα»üα«òα«┐α«▒α«ñα»ü.',
      'why_feat_1_title': 'α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«ñα«░α««α»ì',
      'why_feat_1_desc': 'α«Æα«╡α»ìα«╡α»èα«░α»ü α«ñα»èα«òα»üα«ñα«┐α«»α»üα««α»ì α«¿α«┐α«▓α»êα«»α«╛α«⌐ α«ñα«░α«ñα»ì α«ñα«░α«Öα»ìα«òα«│α»êα«¬α»ì α«¬α»çα«ú α«òα«╡α«⌐α««α«╛α«ò α«¬α»åα«▒α«¬α»ìα«¬α«ƒα»ìα«ƒα»ü α«ñα«░α««α»ì α«¬α«┐α«░α«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»üα«òα«┐α«▒α«ñα»ü.',
      'why_feat_2_title': 'α«¿α««α»ìα«¬α«òα««α«╛α«⌐ α«òα»èα«│α»ìα««α»üα«ñα«▓α»ì',
      'why_feat_2_desc': 'α«¿α««α»ìα«¬α«òα««α«╛α«⌐ α«Åα«▓α«Üα»ì α«Üα«¿α»ìα«ñα»êα«òα«│α»ì α««α«▒α»ìα«▒α»üα««α»ì α«Üα«░α«┐α«¬α«╛α«░α»ìα«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒ α«Üα«¬α»ìα«│α»êα«»α«░α»ìα«òα«│α«┐α«ƒα««α«┐α«░α»üα«¿α»ìα«ñα»ü α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«Åα«▓α«òα»ìα«òα«╛α«»α»ê α«¿α«╛α«Öα»ìα«òα«│α»ì α«╡α«╛α«Öα»ìα«òα»üα«òα«┐α«▒α»ïα««α»ì.',
      'why_feat_3_title': 'α«╡α»åα«│α«┐α«¬α»ìα«¬α«ƒα»êα«»α«╛α«⌐ α«╡α«úα«┐α«òα««α»ì',
      'why_feat_3_desc': 'α«ñα»åα«│α«┐α«╡α«╛α«⌐ α«╡α«┐α«▓α»êα«¬α»ìα«¬α»üα«│α»ìα«│α«┐α«òα«│α»ì, α«¿α»çα«░α»ìα««α»êα«»α«╛α«⌐ α«ñα»èα«ƒα«░α»ìα«¬α»ü α««α«▒α»ìα«▒α»üα««α»ì α«¿α»çα«░α«ƒα«┐ α«╡α«┐α«▓α»ê α«¿α«┐α«░α»ìα«úα«»α««α»ì.',
      'why_feat_4_title': 'α«¬α«╛α«ñα»üα«òα«╛α«¬α»ìα«¬α«╛α«⌐ α«¬α»çα«òα»ìα«òα»çα«£α«┐α«Öα»ì',
      'why_feat_4_desc': 'α«¬α»ïα«òα»ìα«òα»üα«╡α«░α«ñα»ìα«ñα«┐α«⌐α»ì α«¬α»ïα«ñα»ü α«¬α»üα«ñα»ìα«ñα»üα«úα«░α»ìα«Üα»ìα«Üα«┐α«»α»êα«¬α»ì α«¬α«╛α«ñα»üα«òα«╛α«òα»ìα«ò α«ñα«»α«╛α«░α«┐α«¬α»ìα«¬α»üα«òα«│α»ì α«òα«╡α«⌐α««α«╛α«ò α«¬α»çα«òα»ì α«Üα»åα«»α»ìα«»α«¬α»ìα«¬α«ƒα»üα«òα«┐α«⌐α»ìα«▒α«⌐.',
      'why_feat_5_title': 'α«¿α««α»ìα«¬α«òα««α«╛α«⌐ α«╡α«┐α«¿α«┐α«»α»ïα«òα««α»ì',
      'why_feat_5_desc': 'α«çα«¿α»ìα«ñα«┐α«»α«╛ α««α»üα«┤α»üα«╡α«ñα»üα««α»ì α«Üα«░α«┐α«»α«╛α«⌐ α«¿α»çα«░α«ñα»ìα«ñα«┐α«▓α»ì α«àα«⌐α»üα«¬α»ìα«¬α«¬α»ìα«¬α«ƒα»ìα«ƒα»ü α«åα«░α»ìα«ƒα«░α»ìα«òα«│α»ì α«ñα«┐α«▒α««α»êα«»α«╛α«ò α«Üα»åα«»α«▓α«╛α«òα»ìα«òα«¬α»ìα«¬α«ƒα»üα«òα«┐α«⌐α»ìα«▒α«⌐.',
      'why_feat_6_title': 'α«╡α«╛α«ƒα«┐α«òα»ìα«òα»êα«»α«╛α«│α«░α»ç α««α»üα«ñα«⌐α»ìα««α»ê',
      'why_feat_6_desc': 'α«¿α««α»ìα«¬α«òα««α«╛α«⌐ α«Üα»çα«╡α»ê α««α«▒α»ìα«▒α»üα««α»ì α«åα«ñα«░α«╡α«┐α«⌐α»ì α««α»éα«▓α««α»ì α«¿α»Çα«úα»ìα«ƒ α«òα«╛α«▓ α«ëα«▒α«╡α»üα«òα«│α»ê α«ëα«░α»üα«╡α«╛α«òα»ìα«òα»üα«╡α«ñα«┐α«▓α»ì α«¿α«╛α«Öα»ìα«òα«│α»ì α«òα«╡α«⌐α««α»ì α«Üα»åα«▓α»üα«ñα»ìα«ñα»üα«òα«┐α«▒α»ïα««α»ì.',
      'why_stat_1_lbl': 'α«¬α«▓α»ìα«òα»ì α«åα«░α»ìα«ƒα«░α»ìα«òα«│α»ì α«╡α«┐α«¿α«┐α«»α»ïα«òα«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα«ñα»ü',
      'why_stat_2_lbl': 'α«ñα«░α««α»ì α«Üα«░α«┐α«¬α«╛α«░α»ìα«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα«ñα»ü',
      'why_stat_3_lbl': 'α«╡α«╛α«ƒα«┐α«òα»ìα«òα»êα«»α«╛α«│α«░α»ì α«åα«ñα«░α«╡α»ü',
      'why_trust_title': 'α«¿α««α»ìα«¬α«òα««α«╛α«⌐ α«╡α«úα«┐α«ò α«¿α«ƒα»êα««α»üα«▒α»êα«òα«│α»ì',
      'why_badge_gst': 'Γ£ô α«£α«┐α«Äα«╕α»ìα«ƒα«┐ α«çα«⌐α»ìα«╡α«╛α«»α»ìα«╕α»ì α«ëα«úα»ìα«ƒα»ü',
      'why_badge_wholesale': 'Γ£ô α««α»èα«ñα»ìα«ñ α«╡α«┐α«▒α»ìα«¬α«⌐α»ê α«åα«░α»ìα«ƒα«░α»ìα«òα«│α»ì',
      'why_badge_bulk': 'Γ£ô α«¬α«▓α»ìα«òα»ì α«Üα«¬α»ìα«│α»ê',
      'why_badge_quality': 'Γ£ô α«ñα«░α««α»ì α«Üα«░α«┐α«¬α«╛α«░α»ìα«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα«ñα»ü',
      'why_badge_packaging': 'Γ£ô α«¬α«╛α«ñα»üα«òα«╛α«¬α»ìα«¬α«╛α«⌐ α«¬α»çα«òα»ìα«òα»çα«£α«┐α«Öα»ì',
      'why_badge_support': 'Γ£ô α«╡α«┐α«░α»êα«╡α«╛α«⌐ α«åα«ñα«░α«╡α»ü',
      'why_cta_title': 'α«Æα«░α»ü α«¿α»Çα«úα»ìα«ƒ α«òα«╛α«▓ α«╡α«úα«┐α«ò α«ëα«▒α«╡α»ê α«ëα«░α»üα«╡α«╛α«òα»ìα«òα»üα«╡α»ïα««α»ì.',
      'why_cta_desc': 'α«¿α»Çα«Öα»ìα«òα«│α»ì α«Æα«░α»ü α««α»èα«ñα»ìα«ñ α«╡α«┐α«»α«╛α«¬α«╛α«░α«┐, α«╡α«┐α«¿α«┐α«»α»ïα«òα«╕α»ìα«ñα«░α»ì, α«Üα«┐α«▓α»ìα«▓α«▒α»ê α«╡α«┐α«▒α»ìα«¬α«⌐α»êα«»α«╛α«│α«░α»ì α«àα«▓α»ìα«▓α«ñα»ü α«Åα«▒α»ìα«▒α»üα««α«ñα«┐α«»α«╛α«│α«░α«╛α«ò α«çα«░α»üα«¿α»ìα«ñα«╛α«▓α»üα««α»ì, α«▓α«┐α«╖α«╛ α«ƒα«┐α«░α»çα«ƒα«░α»ìα«╕α»ì α«¿α««α»ìα«¬α«òα««α«╛α«⌐ α«Üα»çα«╡α»ê α««α«▒α»ìα«▒α»üα««α»ì α«╡α»åα«│α«┐α«¬α»ìα«¬α«ƒα»êα«»α«╛α«⌐ α«ñα«òα«╡α«▓α»ìα«ñα»èα«ƒα»üα«òα«│α»üα«ƒα«⌐α»ì α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«ñα«░α««α«╛α«⌐ α«Åα«▓α«òα»ìα«òα«╛α«»α»ê α«╡α«┤α«Öα»ìα«ò α«ëα«▒α»üα«ñα«┐α«¬α»éα«úα»ìα«ƒα»üα«│α»ìα«│α«ñα»ü.',
      'why_cta_btn_quote': 'α«¬α«▓α»ìα«òα»ì α«╡α«┐α«▓α»êα«¬α»ìα«¬α»üα«│α»ìα«│α«┐ α«òα»ïα«░α«╡α»üα««α»ì',
      'why_cta_btn_contact': 'α«Äα«Öα»ìα«òα«│α»êα«ñα»ì α«ñα»èα«ƒα«░α»ìα«¬α»ü α«òα»èα«│α»ìα«│α«╡α»üα««α»ì'
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
      'contact-name': 'αñåαñ¬αñòαñ╛ αñ¿αñ╛αñ« / αñòαñéαñ¬αñ¿αÑÇ',
      'contact-email': 'αñåαñ¬αñòαñ╛ αñêαñ«αÑçαñ▓ αñ¬αññαñ╛',
      'contact-phone': 'αñ╡αÑìαñ╣αñ╛αñƒαÑìαñ╕αñÅαñ¬ / αñ½αÑïαñ¿ αñ¿αñéαñ¼αñ░',
      'contact-msg': 'αñ╣αñ«αÑçαñé αñàαñ¬αñ¿αÑÇ αñÑαÑïαñò αñåαñ╡αñ╢αÑìαñ»αñòαññαñ╛ αñòαÑç αñ¼αñ╛αñ░αÑç αñ«αÑçαñé αñ¼αññαñ╛αñÅαñé (αñùαÑìαñ░αÑçαñí, αñåαñòαñ╛αñ░, αñ▓αñòαÑìαñ╖αñ┐αññ αñùαñéαññαñ╡αÑìαñ»)...'
    },
    'ta': {
      'contact-name': 'α«ëα«Öα»ìα«òα«│α»ì α«¬α»åα«»α«░α»ì / α«¿α«┐α«▒α»üα«╡α«⌐α««α»ì',
      'contact-email': 'α«ëα«Öα»ìα«òα«│α»ì α««α«┐α«⌐α»ìα«⌐α«₧α»ìα«Üα«▓α»ì α««α»üα«òα«╡α«░α«┐',
      'contact-phone': 'α«╡α«╛α«ƒα»ìα«╕α»ìα«àα«¬α»ì / α«ñα»èα«▓α»êα«¬α»çα«Üα«┐ α«Äα«úα»ì',
      'contact-msg': 'α«ëα«Öα»ìα«òα«│α»ì α««α»èα«ñα»ìα«ñ α«ñα»çα«╡α»êα«»α»ê α«Äα«Öα»ìα«òα«│α»üα«òα»ìα«òα»üα«ñα»ì α«ñα»åα«░α«┐α«╡α«┐α«òα»ìα«òα«╡α»üα««α»ì (α«ñα«░α««α»ì, α«àα«│α«╡α»ü, α«Üα»çα«░α»üα««α«┐α«ƒα««α»ì)...'
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

  /* ==========================================================================
     3. SCROLL REVEAL (INTERSECTION OBSERVER)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
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
      title: '6.0 αñ«αñ┐αñ«αÑÇ αñ╣αñ░αÑÇ αñçαñ▓αñ╛αñ»αñÜαÑÇ',
      subtitle: 'αñ«αñºαÑìαñ»αñ« αñùαÑìαñ░αÑçαñí (αñ«αñ╛αñ¿αñò αñåαñòαñ╛αñ░)',
      sieve: '> 6.0 αñ«αñ┐αñ«αÑÇ (αñ╡αÑìαñ»αñ╛αñ╕ αñ«αÑçαñ╖)',
      moisture: '12.0% αñàαñºαñ┐αñòαññαñ« αñ¿αñ«αÑÇ',
      weight: '360 - 380 αñùαÑìαñ░αñ╛αñ«/αñ▓αÑÇαñƒαñ░ αñ¬αñ░αÑÇαñòαÑìαñ╖αñú αñ╡αñ£αñ¿',
      color: 'αñ¿αñ░αñ« αñ╕αÑçαñ£ αñùαÑìαñ░αÑÇαñ¿',
      desc: 'αñåαñºαñ┐αñòαñ╛αñ░αñ┐αñò αñ¿αÑÇαñ▓αñ╛αñ«αñ┐αñ»αÑïαñé αñ╕αÑç αñ╕αñ╛αñ╡αñºαñ╛αñ¿αÑÇαñ¬αÑéαñ░αÑìαñ╡αñò αñÜαÑüαñ¿αÑÇ αñùαñêαÑñ αñ╣αñ«αñ╛αñ░αÑÇ 6 αñ«αñ┐αñ«αÑÇ αñçαñ▓αñ╛αñ»αñÜαÑÇ αñûαÑüαñªαñ░αñ╛ αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù αñÿαñ░αÑïαñé αñöαñ░ αñÑαÑïαñò αñ╡αñ┐αñòαÑìαñ░αÑçαññαñ╛αñôαñé αñòαÑç αñ▓αñ┐αñÅ αñÅαñò αñàαññαÑìαñ»αñºαñ┐αñò αñòαñ┐αñ½αñ╛αñ»αññαÑÇ αñöαñ░ αñëαñÜαÑìαñÜ-αñùαÑìαñ░αÑçαñí αñÜαñ»αñ¿ αñ╣αÑêαÑñ'
    },
    '7mm': {
      title: '7.0 αñ«αñ┐αñ«αÑÇ αñ╣αñ░αÑÇ αñçαñ▓αñ╛αñ»αñÜαÑÇ',
      subtitle: 'αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñ¼αÑïαñ▓αÑìαñí αñùαÑìαñ░αÑçαñí (AGEB)',
      sieve: '> 7.0 αñ«αñ┐αñ«αÑÇ (αñ╡αÑìαñ»αñ╛αñ╕ αñ«αÑçαñ╖)',
      moisture: '11.5% αñàαñºαñ┐αñòαññαñ« αñ¿αñ«αÑÇ',
      weight: '385 - 410 αñùαÑìαñ░αñ╛αñ«/αñ▓αÑÇαñƒαñ░ αñ¬αñ░αÑÇαñòαÑìαñ╖αñú αñ╡αñ£αñ¿',
      color: 'αñ╡αñ╛αñçαñ¼αÑìαñ░αÑçαñéαñƒ αñæαñ▓αñ┐αñ╡ αñùαÑìαñ░αÑÇαñ¿',
      desc: 'αñëαñÜαÑìαñÜ αñ╡αñ╛αñ╖αÑìαñ¬αñ╢αÑÇαñ▓ αñ¬αÑìαñ░αñ╛αñòαÑâαññαñ┐αñò αññαÑçαñ▓ αñ╕αñ╛αñ«αñùαÑìαñ░αÑÇ αñ╕αÑç αñ¡αñ░αÑç αñ╣αÑüαñÅ αñàαñ╕αñ╛αñºαñ╛αñ░αñú αñ░αÑéαñ¬ αñ╕αÑç αñ«αÑïαñƒαÑç αñ¬αÑëαñíαÑìαñ╕αÑñ αñûαñ╛αñ¿αñ¬αñ╛αñ¿ αñöαñ░ αñûαÑüαñªαñ░αñ╛ αñ¼αÑìαñ░αñ╛αñéαñíαñ┐αñéαñù αñòαÑç αñ▓αñ┐αñÅ αñÅαñò αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñÿαñ░αÑçαñ▓αÑé αñùαÑìαñ░αÑçαñí αñòαñ╛ αñ¬αÑìαñ░αññαñ┐αñ¿αñ┐αñºαñ┐αññαÑìαñ╡ αñòαñ░αññαñ╛ αñ╣αÑêαÑñ'
    },
    '7.5mm': {
      title: '7.5 αñ«αñ┐αñ«αÑÇ αñ╣αñ░αÑÇ αñçαñ▓αñ╛αñ»αñÜαÑÇ',
      subtitle: 'αñÅαñ▓αÑÇαñƒ αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñ¼αÑïαñ▓αÑìαñí',
      sieve: '> 7.5 αñ«αñ┐αñ«αÑÇ (αñ╡αÑìαñ»αñ╛αñ╕ αñ«αÑçαñ╖)',
      moisture: '11.2% αñàαñºαñ┐αñòαññαñ« αñ¿αñ«αÑÇ',
      weight: '410 - 430 αñùαÑìαñ░αñ╛αñ«/αñ▓αÑÇαñƒαñ░ αñ¬αñ░αÑÇαñòαÑìαñ╖αñú αñ╡αñ£αñ¿',
      color: 'αñùαñ╣αñ░αÑÇ αñ¬αñ¿αÑìαñ¿αñ╛ αñ╣αñ░αÑÇ (αñÅαñ«αÑçαñ░αñ╛αñ▓αÑìαñí)',
      desc: 'αñàαññαÑìαñ»αñºαñ┐αñò αñ¿αñ┐αñ░αÑìαñ»αñ╛αññ αñùαÑìαñ░αÑçαñíαÑñ αñëαñÜαÑìαñÜ αñ░αñéαñù αñ╕αÑéαñÜαñòαñ╛αñéαñò, αñ¿αÑìαñ»αÑéαñ¿αññαñ« αñÑαÑìαñ░αñ┐αñ¬αÑìαñ╕ αñ╕αÑìαñ¬αÑëαñƒ αñöαñ░ αñùαñ╣αñ░αÑç αñ¼αÑÇαñ£αÑïαñé αñòαÑÇ αñ╕αñéαñûαÑìαñ»αñ╛ αñòαÑÇ αñùαñ╛αñ░αñéαñƒαÑÇ αñòαÑç αñ▓αñ┐αñÅ αñ╕αñ╛αñ╡αñºαñ╛αñ¿αÑÇαñ¬αÑéαñ░αÑìαñ╡αñò αñ¢αñ╛αñéαñƒαñ╛ αñùαñ»αñ╛αÑñ'
    },
    '7.5-8mm': {
      title: '7.5 - 8.0 αñ«αñ┐αñ«αÑÇ αñ╣αñ░αÑÇ αñçαñ▓αñ╛αñ»αñÜαÑÇ',
      subtitle: 'αñ╕αÑüαñ¬αñ░ αñ¼αÑïαñ▓αÑìαñí αñ¿αñ┐αñ░αÑìαñ»αñ╛αññ αñ«αñ┐αñòαÑìαñ╕',
      sieve: '7.5 αñ«αñ┐αñ«αÑÇ - 8.0 αñ«αñ┐αñ«αÑÇ αñ░αÑçαñéαñ£',
      moisture: '11.0% αñàαñºαñ┐αñòαññαñ« αñ¿αñ«αÑÇ',
      weight: '420 - 445 αñùαÑìαñ░αñ╛αñ«/αñ▓αÑÇαñƒαñ░ αñ¬αñ░αÑÇαñòαÑìαñ╖αñú αñ╡αñ£αñ¿',
      color: 'αñùαñ╣αñ░αÑÇ αñ¬αñ¿αÑìαñ¿αñ╛ αñ╣αñ░αÑÇ',
      desc: 'αñ╕αñƒαÑÇαñò αñ╣αñ╛αñçαñ¼αÑìαñ░αñ┐αñí αñùαÑìαñ░αÑçαñíαñ┐αñéαñù αñ£αñ┐αñ╕αñ«αÑçαñé αñ╕αñ¼αñ╕αÑç αñ¼αñíαñ╝αÑç αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñ¼αÑïαñ▓αÑìαñí αñ¬αÑëαñíαÑìαñ╕ αñ╢αñ╛αñ«αñ┐αñ▓ αñ╣αÑêαñéαÑñ αñòαñ╛αñ▓αÑç αñ╕αÑüαñùαñéαñºαñ┐αññ αñ¼αÑÇαñ£αÑïαñé αñ╕αÑç αñ╡αñ┐αñ╢αÑçαñ╖ αñ░αÑéαñ¬ αñ╕αÑç αñ¡αñ░αÑç αñ╣αÑüαñÅαÑñ αñ╡αÑêαñ╢αÑìαñ╡αñ┐αñò αñ╢αñ┐αñ¬αñ┐αñéαñù αñòαÑç αñ▓αñ┐αñÅ αññαÑêαñ»αñ╛αñ░αÑñ'
    },
    '8mm': {
      title: '8.0 αñ«αñ┐αñ«αÑÇ αñ╣αñ░αÑÇ αñçαñ▓αñ╛αñ»αñÜαÑÇ',
      subtitle: 'αñ╕αÑüαñ¬αñ░ αñÅαñòαÑìαñ╕αÑìαñƒαÑìαñ░αñ╛ αñ¼αÑïαñ▓αÑìαñí (αñ╕αÑüαñ¬αñ░ αñ£αñéαñ¼αÑï)',
      sieve: '> 8.0 αñ«αñ┐αñ«αÑÇ (αñ╡αÑìαñ»αñ╛αñ╕ αñ«αÑçαñ╖)',
      moisture: '10.5% αñàαñºαñ┐αñòαññαñ« αñ¿αñ«αÑÇ',
      weight: '435 - 460 αñùαÑìαñ░αñ╛αñ«/αñ▓αÑÇαñƒαñ░ αñ¬αñ░αÑÇαñòαÑìαñ╖αñú αñ╡αñ£αñ¿',
      color: 'αñùαñ╣αñ░αÑÇ αñ╡αñ¿ αñ╣αñ░αÑÇ (αñ½αÑëαñ░αÑçαñ╕αÑìαñƒ αñùαÑìαñ░αÑÇαñ¿)',
      desc: 'αñ¡αñ╛αñ░αññαÑÇαñ» αñçαñ▓αñ╛αñ»αñÜαÑÇ αñùαÑüαñúαñ╡αññαÑìαññαñ╛ αñòαñ╛ αñ╕αñ░αÑìαñ╡αÑïαñÜαÑìαñÜ αñ╢αñ┐αñûαñ░αÑñ αñªαÑïαñ╣αñ░αÑÇ αñ¢αñ▓αñ¿αÑÇ αñ¢αñéαñƒαñ╛αñêαÑñ αñàαñéαññαñ░αñ░αñ╛αñ╖αÑìαñƒαÑìαñ░αÑÇαñ» αñ¬αÑçαñƒαÑé αñ╡αñ┐αññαñ░αñòαÑïαñé αñöαñ░ αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñëαñ¬αñ╣αñ╛αñ░ αñªαÑçαñ¿αÑç αñ╡αñ╛αñ▓αÑç αñ¼αÑìαñ░αñ╛αñéαñíαÑïαñé αñòαÑç αñ▓αñ┐αñÅ αñëαññαÑìαñòαÑâαñ╖αÑìαñƒαÑñ'
    },
    '8.5mm': {
      title: '8.5 αñ«αñ┐αñ«αÑÇ αñ╣αñ░αÑÇ αñçαñ▓αñ╛αñ»αñÜαÑÇ',
      subtitle: 'αñçαñéαñ¬αÑÇαñ░αñ┐αñ»αñ▓ αñ£αñéαñ¼αÑï αñ¼αÑïαñ▓αÑìαñí',
      sieve: '> 8.5 αñ«αñ┐αñ«αÑÇ (αñ╡αÑìαñ»αñ╛αñ╕ αñ«αÑçαñ╖)',
      moisture: '10.2% αñàαñºαñ┐αñòαññαñ« αñ¿αñ«αÑÇ',
      weight: '455 - 475 αñùαÑìαñ░αñ╛αñ«/αñ▓αÑÇαñƒαñ░ αñ¬αñ░αÑÇαñòαÑìαñ╖αñú αñ╡αñ£αñ¿',
      color: 'αñ╢αñ╛αñ¿αñªαñ╛αñ░ αñùαñ╣αñ░αÑÇ αñ╣αñ░αÑÇ',
      desc: 'αñ¬αÑçαñƒαÑé αñùαÑìαñ░αÑçαñí αñªαÑâαñ╢αÑìαñ» αñçαñ▓αñ╛αñ»αñÜαÑÇαÑñ αñ╡αñ┐αñ╢αÑçαñ╖ αñ░αÑéαñ¬ αñ╕αÑç αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñëαñ¬αñ╣αñ╛αñ░ αñªαÑçαñ¿αÑç, αñàαñéαññαñ░αñ░αñ╛αñ╖αÑìαñƒαÑìαñ░αÑÇαñ» αñ▓αñòαÑìαñ£αñ░αÑÇ αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù αñöαñ░ αñ╢αñ╛αñ╣αÑÇ αñ«αñ╕αñ╛αñ▓αñ╛ αñ«αñ┐αñ╢αÑìαñ░αñúαÑïαñé αñòαÑç αñ▓αñ┐αñÅ αñÜαÑüαñ¿αÑÇ αñùαñêαÑñ'
    },
    '9mm': {
      title: '9.0 αñ«αñ┐αñ«αÑÇ αñ╣αñ░αÑÇ αñçαñ▓αñ╛αñ»αñÜαÑÇ',
      subtitle: 'αñ╕αÑüαñ¬αÑìαñ░αÑÇαñ« αñ░αÑëαñ»αñ▓ αñ£αñéαñ¼αÑï',
      sieve: '> 9.0 αñ«αñ┐αñ«αÑÇ (αñ╡αÑìαñ»αñ╛αñ╕ αñ«αÑçαñ╖)',
      moisture: '10.0% αñàαñºαñ┐αñòαññαñ« αñ¿αñ«αÑÇ',
      weight: '470 - 490 αñùαÑìαñ░αñ╛αñ«/αñ▓αÑÇαñƒαñ░ αñ¬αñ░αÑÇαñòαÑìαñ╖αñú αñ╡αñ£αñ¿',
      color: 'αñëαññαÑìαñòαÑâαñ╖αÑìαñƒ αñ░αÑëαñ»αñ▓ αñùαÑìαñ░αÑÇαñ¿',
      desc: 'αñªαÑüαñ¿αñ┐αñ»αñ╛ αñ«αÑçαñé αñ╕αñ¼αñ╕αÑç αñªαÑüαñ░αÑìαñ▓αñ¡ αñçαñ▓αñ╛αñ»αñÜαÑÇ αñÜαñ»αñ¿αÑñ αñ½αñ▓αÑÇ αñ╡αÑìαñ»αñ╛αñ╕ αñ«αÑçαñé 9.0 αñ«αñ┐αñ«αÑÇ αñ╕αÑç αñàαñºαñ┐αñò, αñàαñéαññαñ┐αñ« αñ¼αÑÇαñ£ αñ╕αñéαñûαÑìαñ»αñ╛ αñöαñ░ αñ╕αñ░αÑìαñ╡αÑïαñÜαÑìαñÜ αñ╡αñ╛αñ╖αÑìαñ¬αñ╢αÑÇαñ▓ αññαÑçαñ▓ αñ╕αñ╛αñ«αñùαÑìαñ░αÑÇ αñ¬αÑìαñ░αñªαñ╛αñ¿ αñòαñ░αññαñ╛ αñ╣αÑêαÑñ'
    },
    '6mm-yellow': {
      title: '6.0 αñ«αñ┐αñ«αÑÇ αñ½αÑìαñ░αÑéαñƒ αñçαñ▓αñ╛αñ»αñÜαÑÇ (αñ¬αÑÇαñ▓αÑÇ/αñ╣αñ▓αÑìαñòαÑÇ)',
      subtitle: 'αñ«αñºαÑìαñ»αñ« αñùαÑìαñ░αÑçαñí (αñ«αñ╛αñ¿αñò αñåαñòαñ╛αñ░)',
      sieve: '> 6.0 αñ«αñ┐αñ«αÑÇ (αñ╡αÑìαñ»αñ╛αñ╕ αñ«αÑçαñ╖)',
      moisture: '12.0% αñàαñºαñ┐αñòαññαñ« αñ¿αñ«αÑÇ',
      weight: '350 - 370 αñùαÑìαñ░αñ╛αñ«/αñ▓αÑÇαñƒαñ░ αñ¬αñ░αÑÇαñòαÑìαñ╖αñú αñ╡αñ£αñ¿',
      color: 'αñ╕αÑüαñ¿αñ╣αñ░αñ╛ αñ¬αÑüαñåαñ▓ αñ¬αÑÇαñ▓αñ╛ (MGB)',
      desc: 'αñ╕αñ«αñ╛αñ¿ αñ░αñéαñù αñ╕αÑüαñ¿αñ┐αñ╢αÑìαñÜαñ┐αññ αñòαñ░αñ¿αÑç αñòαÑç αñ▓αñ┐αñÅ αñ╕αñ╛αñ╡αñºαñ╛αñ¿αÑÇαñ¬αÑéαñ░αÑìαñ╡αñò αñ¢αñ╛αñéαñƒαñ╛ αñùαñ»αñ╛αÑñ αñ╣αñ«αñ╛αñ░αÑÇ 6 αñ«αñ┐αñ«αÑÇ αñ½αÑìαñ░αÑéαñƒ αñçαñ▓αñ╛αñ»αñÜαÑÇ (αñ¬αÑÇαñ▓αÑÇ/αñ╣αñ▓αÑìαñòαÑÇ) αñûαÑüαñªαñ░αñ╛ αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù αñÿαñ░αÑïαñé αñöαñ░ αñÑαÑïαñò αñ╡αñ┐αñòαÑìαñ░αÑçαññαñ╛αñôαñé αñòαÑç αñ▓αñ┐αñÅ αñÅαñò αñàαññαÑìαñ»αñºαñ┐αñò αñòαñ┐αñ½αñ╛αñ»αññαÑÇ αñÜαñ»αñ¿ αñ╣αÑêαÑñ'
    },
    '7mm-yellow': {
      title: '7.0 αñ«αñ┐αñ«αÑÇ αñ½αÑìαñ░αÑéαñƒ αñçαñ▓αñ╛αñ»αñÜαÑÇ (αñ¬αÑÇαñ▓αÑÇ/αñ╣αñ▓αÑìαñòαÑÇ)',
      subtitle: 'αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñ¼αÑïαñ▓αÑìαñí αñ¬αÑÇαñ▓αñ╛ αñùαÑìαñ░αÑçαñí (MGEB)',
      sieve: '> 7.0 αñ«αñ┐αñ«αÑÇ (αñ╡αÑìαñ»αñ╛αñ╕ αñ«αÑçαñ╖)',
      moisture: '11.5% αñàαñºαñ┐αñòαññαñ« αñ¿αñ«αÑÇ',
      weight: '375 - 400 αñùαÑìαñ░αñ╛αñ«/αñ▓αÑÇαñƒαñ░ αñ¬αñ░αÑÇαñòαÑìαñ╖αñú αñ╡αñ£αñ¿',
      color: 'αñ╕αÑüαñ¿αñ╣αñ░αñ╛ αñ¬αÑüαñåαñ▓ αñ¬αÑÇαñ▓αñ╛',
      desc: 'αñàαñ╕αñ╛αñºαñ╛αñ░αñú αñ░αÑéαñ¬ αñ╕αÑç αñ«αÑïαñƒαÑç αñ¬αÑëαñíαÑìαñ╕αÑñ αñûαñ╛αñ¿αñ¬αñ╛αñ¿ αñöαñ░ αñûαÑüαñªαñ░αñ╛ αñ¼αÑìαñ░αñ╛αñéαñíαñ┐αñéαñù αñòαÑç αñ▓αñ┐αñÅ αñÅαñò αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñÿαñ░αÑçαñ▓αÑé αñùαÑìαñ░αÑçαñí αñòαñ╛ αñ¬αÑìαñ░αññαñ┐αñ¿αñ┐αñºαñ┐αññαÑìαñ╡ αñòαñ░αññαñ╛ αñ╣αÑêαÑñ'
    },
    '7.5mm-yellow': {
      title: '7.5 αñ«αñ┐αñ«αÑÇ αñ½αÑìαñ░αÑéαñƒ αñçαñ▓αñ╛αñ»αñÜαÑÇ (αñ¬αÑÇαñ▓αÑÇ/αñ╣αñ▓αÑìαñòαÑÇ)',
      subtitle: 'αñÅαñ▓αÑÇαñƒ αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñ¬αÑÇαñ▓αñ╛ αñ¼αÑïαñ▓αÑìαñí',
      sieve: '> 7.5 αñ«αñ┐αñ«αÑÇ (αñ╡αÑìαñ»αñ╛αñ╕ αñ«αÑçαñ╖)',
      moisture: '11.2% αñàαñºαñ┐αñòαññαñ« αñ¿αñ«αÑÇ',
      weight: '400 - 420 αñùαÑìαñ░αñ╛αñ«/αñ▓αÑÇαñƒαñ░ αñ¬αñ░αÑÇαñòαÑìαñ╖αñú αñ╡αñ£αñ¿',
      color: 'αñùαñ╣αñ░αÑÇ αñ╕αÑüαñ¿αñ╣αñ░αÑÇ αñ╣αñ▓αÑìαñòαÑÇ αñ¬αÑÇαñ▓αÑÇ',
      desc: 'αñàαññαÑìαñ»αñºαñ┐αñò αñ¿αñ┐αñ░αÑìαñ»αñ╛αññ αñùαÑìαñ░αÑçαñíαÑñ αñëαñÜαÑìαñÜ αñ░αñéαñù αñ╕αÑéαñÜαñòαñ╛αñéαñò, αñ¿αÑìαñ»αÑéαñ¿αññαñ« αñÑαÑìαñ░αñ┐αñ¬αÑìαñ╕ αñ╕αÑìαñ¬αÑëαñƒ αñöαñ░ αñùαñ╣αñ░αÑç αñ¼αÑÇαñ£αÑïαñé αñòαÑÇ αñ╕αñéαñûαÑìαñ»αñ╛ αñòαÑÇ αñùαñ╛αñ░αñéαñƒαÑÇ αñòαÑç αñ▓αñ┐αñÅ αñ╕αñ╛αñ╡αñºαñ╛αñ¿αÑÇαñ¬αÑéαñ░αÑìαñ╡αñò αñ¢αñ╛αñéαñƒαñ╛ αñùαñ»αñ╛αÑñ'
    },
    '7.5-8mm-yellow': {
      title: '7.5 - 8.0 αñ«αñ┐αñ«αÑÇ αñ½αÑìαñ░αÑéαñƒ αñçαñ▓αñ╛αñ»αñÜαÑÇ (αñ¬αÑÇαñ▓αÑÇ/αñ╣αñ▓αÑìαñòαÑÇ)',
      subtitle: 'αñ╕αÑüαñ¬αñ░ αñ¬αÑÇαñ▓αñ╛ αñ¿αñ┐αñ░αÑìαñ»αñ╛αññ αñ«αñ┐αñ╢αÑìαñ░αñú',
      sieve: '7.5 αñ«αñ┐αñ«αÑÇ - 8.0 αñ«αñ┐αñ«αÑÇ αñ╡αñ░αñéαñ¡',
      moisture: '11.0% αñàαñºαñ┐αñòαññαñ« αñ¿αñ«αÑÇ',
      weight: '410 - 435 αñùαÑìαñ░αñ╛αñ«/αñ▓αÑÇαñƒαñ░ αñ¬αñ░αÑÇαñòαÑìαñ╖αñú αñ╡αñ£αñ¿',
      color: 'αñ╕αÑüαñ¿αñ╣αñ░αÑÇ αñ╣αñ▓αÑìαñòαÑÇ αñ¬αÑÇαñ▓αÑÇ',
      desc: 'αñ╕αñƒαÑÇαñò αñ╣αñ╛αñçαñ¼αÑìαñ░αñ┐αñí αñùαÑìαñ░αÑçαñíαñ┐αñéαñù αñ£αñ┐αñ╕αñ«αÑçαñé αñ╕αñ¼αñ╕αÑç αñ¼αñíαñ╝αÑç αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñ¬αÑÇαñ▓αñ╛ αñ¼αÑïαñ▓αÑìαñí αñ¬αÑëαñíαÑìαñ╕ αñ╢αñ╛αñ«αñ┐αñ▓ αñ╣αÑêαñéαÑñ αñòαñ╛αñ▓αÑç αñ╕αÑüαñùαñéαñºαñ┐αññ αñ¼αÑÇαñ£αÑïαñé αñ╕αÑç αñ╡αñ┐αñ╢αÑçαñ╖ αñ░αÑéαñ¬ αñ╕αÑç αñ¡αñ░αÑç αñ╣αÑüαñÅαÑñ'
    },
    '8mm-yellow': {
      title: '8.0 αñ«αñ┐αñ«αÑÇ αñ½αÑìαñ░αÑéαñƒ αñçαñ▓αñ╛αñ»αñÜαÑÇ (αñ¬αÑÇαñ▓αÑÇ/αñ╣αñ▓αÑìαñòαÑÇ)',
      subtitle: 'αñ╕αÑüαñ¬αñ░ αñÅαñòαÑìαñ╕αÑìαñƒαÑìαñ░αñ╛ αñ¬αÑÇαñ▓αñ╛ αñ¼αÑïαñ▓αÑìαñí (αñ£αñéαñ¼αÑï)',
      sieve: '> 8.0 αñ«αñ┐αñ«αÑÇ (αñ╡αÑìαñ»αñ╛αñ╕ αñ«αÑçαñ╖)',
      moisture: '10.5% αñàαñºαñ┐αñòαññαñ« αñ¿αñ«αÑÇ',
      weight: '425 - 450 αñùαÑìαñ░αñ╛αñ«/αñ▓αÑÇαñƒαñ░ αñ¬αñ░αÑÇαñòαÑìαñ╖αñú αñ╡αñ£αñ¿',
      color: 'αñùαñ╣αñ░αÑÇ αñ╕αÑüαñ¿αñ╣αñ░αÑÇ αñ¬αÑÇαñ▓αÑÇ',
      desc: 'αñ¡αñ╛αñ░αññαÑÇαñ» αñçαñ▓αñ╛αñ»αñÜαÑÇ αñùαÑüαñúαñ╡αññαÑìαññαñ╛ αñòαñ╛ αñ╕αñ░αÑìαñ╡αÑïαñÜαÑìαñÜ αñ╢αñ┐αñûαñ░αÑñ αñªαÑïαñ╣αñ░αÑÇ αñ¢αñ▓αñ¿αÑÇ αñ¢αñéαñƒαñ╛αñêαÑñ αñàαñéαññαñ░αñ░αñ╛αñ╖αÑìαñƒαÑìαñ░αÑÇαñ» αñ¬αÑçαñƒαÑé αñ╡αñ┐αññαñ░αñòαÑïαñé αñöαñ░ αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñëαñ¬αñ╣αñ╛αñ░ αñªαÑçαñ¿αÑç αñ╡αñ╛αñ▓αÑç αñ¼αÑìαñ░αñ╛αñéαñíαÑïαñé αñòαÑç αñ▓αñ┐αñÅ αñëαññαÑìαñòαÑâαñ╖αÑìαñƒαÑñ'
    },
    '8.5mm-yellow': {
      title: '8.5 αñ«αñ┐αñ«αÑÇ αñ½αÑìαñ░αÑéαñƒ αñçαñ▓αñ╛αñ»αñÜαÑÇ (αñ¬αÑÇαñ▓αÑÇ/αñ╣αñ▓αÑìαñòαÑÇ)',
      subtitle: 'αñçαñéαñ¬αÑÇαñ░αñ┐αñ»αñ▓ αñ¬αÑÇαñ▓αñ╛ αñ£αñéαñ¼αÑï αñ¼αÑïαñ▓αÑìαñí',
      sieve: '> 8.5 αñ«αñ┐αñ«αÑÇ (αñ╡αÑìαñ»αñ╛αñ╕ αñ«αÑçαñ╖)',
      moisture: '10.2% αñàαñºαñ┐αñòαññαñ« αñ¿αñ«αÑÇ',
      weight: '445 - 465 αñùαÑìαñ░αñ╛αñ«/αñ▓αÑÇαñƒαñ░ αñ¬αñ░αÑÇαñòαÑìαñ╖αñú αñ╡αñ£αñ¿',
      color: 'αñ╢αñ╛αñ¿αñªαñ╛αñ░ αñ╕αÑüαñ¿αñ╣αñ░αÑÇ αñ¬αÑÇαñ▓αÑÇ',
      desc: 'αñ¬αÑçαñƒαÑé αñùαÑìαñ░αÑçαñí αñªαÑâαñ╢αÑìαñ» αñçαñ▓αñ╛αñ»αñÜαÑÇαÑñ αñ╡αñ┐αñ╢αÑçαñ╖ αñ░αÑéαñ¬ αñ╕αÑç αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñëαñ¬αñ╣αñ╛αñ░ αñªαÑçαñ¿αÑç, αñàαñéαññαñ░αñ░αñ╛αñ╖αÑìαñƒαÑìαñ░αÑÇαñ» αñ▓αñòαÑìαñ£αñ░αÑÇ αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù αñöαñ░ αñ╢αñ╛αñ╣αÑÇ αñ«αñ╕αñ╛αñ▓αñ╛ αñ«αñ┐αñ╢αÑìαñ░αñúαÑïαñé αñòαÑç αñ▓αñ┐αñÅ αñÜαÑüαñ¿αÑÇ αñùαñêαÑñ'
    },
    '9mm-yellow': {
      title: '9.0 αñ«αñ┐αñ«αÑÇ αñ½αÑìαñ░αÑéαñƒ αñçαñ▓αñ╛αñ»αñÜαÑÇ (αñ¬αÑÇαñ▓αÑÇ/αñ╣αñ▓αÑìαñòαÑÇ)',
      subtitle: 'αñ╕αÑüαñ¬αÑìαñ░αÑÇαñ« αñ░αÑëαñ»αñ▓ αñ¬αÑÇαñ▓αñ╛ αñ£αñéαñ¼αÑï',
      sieve: '> 9.0 αñ«αñ┐αñ«αÑÇ (αñ╡αÑìαñ»αñ╛αñ╕ αñ«αÑçαñ╖)',
      moisture: '10.0% αñàαñºαñ┐αñòαññαñ« αñ¿αñ«αÑÇ',
      weight: '460 - 480 αñùαÑìαñ░αñ╛αñ«/αñ▓αÑÇαñƒαñ░ αñ¬αñ░αÑÇαñòαÑìαñ╖αñú αñ╡αñ£αñ¿',
      color: 'αñëαññαÑìαñòαÑâαñ╖αÑìαñƒ αñ░αÑëαñ»αñ▓ αñ¬αÑÇαñ▓αñ╛',
      desc: 'αñªαÑüαñ¿αñ┐αñ»αñ╛ αñ«αÑçαñé αñ╕αñ¼αñ╕αÑç αñªαÑüαñ░αÑìαñ▓αñ¡ αñçαñ▓αñ╛αñ»αñÜαÑÇ αñÜαñ»αñ¿αÑñ αñ½αñ▓αÑÇ αñ╡αÑìαñ»αñ╛αñ╕ αñ«αÑçαñé 9.0 αñ«αñ┐αñ«αÑÇ αñ╕αÑç αñàαñºαñ┐αñò, αñàαñéαññαñ┐αñ« αñ¼αÑÇαñ£ αñ╕αñéαñûαÑìαñ»αñ╛ αñöαñ░ αñ╕αñ░αÑìαñ╡αÑïαñÜαÑìαñÜ αñ╡αñ╛αñ╖αÑìαñ¬αñ╢αÑÇαñ▓ αññαÑçαñ▓ αñ╕αñ╛αñ«αñùαÑìαñ░αÑÇ αñ¬αÑìαñ░αñªαñ╛αñ¿ αñòαñ░αññαñ╛ αñ╣αÑêαÑñ'
    }
  };

  const productSpecsTa = {
    '6mm': {
      title: '6.0 α««α«┐α««α»Ç α«¬α«Üα»ìα«Üα»ê α«Åα«▓α«òα»ìα«òα«╛α«»α»ì',
      subtitle: 'α«¿α«ƒα»üα«ñα»ìα«ñα«░ α«ñα«░α««α»ì (α«Üα«╛α«ñα«╛α«░α«ú α«àα«│α«╡α»ü)',
      sieve: '> 6.0 α««α«┐α««α»Ç (α«╡α«┐α«ƒα»ìα«ƒα««α»ì α«╡α«▓α»ê)',
      moisture: '12.0% α«àα«ñα«┐α«òα«¬α«ƒα»ìα«Ü α«êα«░α«¬α»ìα«¬α«ñα««α»ì',
      weight: '360 - 380 α«òα«┐α«░α«╛α««α»ì/α«▓α«┐α«ƒα»ìα«ƒα«░α»ì α«Äα«ƒα»ê',
      color: 'α««α»åα«⌐α»ìα««α»êα«»α«╛α«⌐ α«Üα«╛α««α»ìα«¬α«▓α»ì-α«¬α«Üα»ìα«Üα»ê',
      desc: 'α«Åα«▓α«Öα»ìα«òα«│α«┐α«▓α«┐α«░α»üα«¿α»ìα«ñα»ü α«òα«╡α«⌐α««α«╛α«ò α«ñα»çα«░α»ìα«¿α»ìα«ñα»åα«ƒα»üα«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα«ñα»ü. α«Üα«┐α«▓α»ìα«▓α«▒α»ê α«¬α»çα«òα»ìα«òα»çα«£α«┐α«Öα»ì α««α«▒α»ìα«▒α»üα««α»ì α«ëα«úα«╡α«ò α«Üα«¬α»ìα«│α»êα«»α«░α»ìα«òα«│α»üα«òα»ìα«òα»ü α««α«┐α«òα«╡α»üα««α»ì α««α«▓α«┐α«╡α«╛α«⌐ α««α«▒α»ìα«▒α»üα««α»ì α«ëα«»α«░α»ìα«ñα«░ α«ñα»çα«░α»ìα«╡α»ü. α«Üα«┐α«▒α«¿α»ìα«ñ α«¿α«▒α»üα««α«úα««α»ì.'
    },
    '7mm': {
      title: '7.0 α««α«┐α««α»Ç α«¬α«Üα»ìα«Üα»ê α«Åα«▓α«òα»ìα«òα«╛α«»α»ì',
      subtitle: 'α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«¬α»ïα«▓α»ìα«ƒα»ì α«ñα«░α««α»ì (AGEB)',
      sieve: '> 7.0 α««α«┐α««α»Ç (α«╡α«┐α«ƒα»ìα«ƒα««α»ì α«╡α«▓α»ê)',
      moisture: '11.5% α«àα«ñα«┐α«òα«¬α«ƒα»ìα«Ü α«êα«░α«¬α»ìα«¬α«ñα««α»ì',
      weight: '385 - 410 α«òα«┐α«░α«╛α««α»ì/α«▓α«┐α«ƒα»ìα«ƒα«░α»ì α«Äα«ƒα»ê',
      color: 'α«Æα«▓α«┐α«╡α»ì α«¬α«Üα»ìα«Üα»ê α«ñα«░α««α»ì',
      desc: 'α«àα«░α»ïα««α«╛ α«Äα«úα»ìα«úα»åα«»α»ìα«òα«│α»ì α«¿α«┐α«▒α»êα«¿α»ìα«ñ α««α»üα«┤α»üα««α»êα«»α«╛α«⌐ α«Åα«▓α«òα»ìα«òα«╛α«»α»ì α«òα«╛α«»α»ìα«òα«│α»ì. α«òα»çα«ƒα»ìα«ƒα«░α«┐α«Öα»ì α««α«▒α»ìα«▒α»üα««α»ì α«Üα«┐α«▓α»ìα«▓α«▒α»ê α«╡α«░α»ìα«ñα»ìα«ñα«òα«ñα»ìα«ñα«┐α«▒α»ìα«òα»ü α«Åα«▒α»ìα«▒ α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«ñα«░α««α»ì.'
    },
    '7.5mm': {
      title: '7.5 α««α«┐α««α»Ç α«¬α«Üα»ìα«Üα»ê α«Åα«▓α«òα»ìα«òα«╛α«»α»ì',
      subtitle: 'α«Äα«▓α»êα«ƒα»ì α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«¬α»ïα«▓α»ìα«ƒα»ì',
      sieve: '> 7.5 α««α«┐α««α»Ç (α«╡α«┐α«ƒα»ìα«ƒα««α»ì α«╡α«▓α»ê)',
      moisture: '11.2% α«àα«ñα«┐α«òα«¬α«ƒα»ìα«Ü α«êα«░α«¬α»ìα«¬α«ñα««α»ì',
      weight: '410 - 430 α«òα«┐α«░α«╛α««α»ì/α«▓α«┐α«ƒα»ìα«ƒα«░α»ì α«Äα«ƒα»ê',
      color: 'α«àα«ƒα«░α»ìα«¿α»ìα«ñ α««α«░α«òα«ñ α«¬α«Üα»ìα«Üα»ê',
      desc: 'α«ëα«▓α«òα«│α«╡α«┐α«▓α»ì α«àα«ñα«┐α«òα««α»ì α«╡α«┐α«░α»üα««α»ìα«¬α«¬α»ìα«¬α«ƒα»üα««α»ì α«Åα«▒α»ìα«▒α»üα««α«ñα«┐ α«ñα«░α««α»ì. α«Üα«┐α«▒α«¿α»ìα«ñ α«¿α«┐α«▒α««α»ì, α«ñα«░α««α»ì α««α«▒α»ìα«▒α»üα««α»ì α«àα«ñα«┐α«ò α«╡α«┐α«ñα»êα«òα«│α»ì α«¿α«┐α«▒α»êα«¿α»ìα«ñ α«òα«╛α«»α»ìα«òα«│α»ê α«ëα«▒α»üα«ñα«┐ α«Üα»åα«»α»ìα«» α«ñα«░α««α»ì α«¬α«┐α«░α«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα«ñα»ü.'
    },
    '7.5-8mm': {
      title: '7.5 - 8.0 α««α«┐α««α»Ç α«¬α«Üα»ìα«Üα»ê α«Åα«▓α«òα»ìα«òα«╛α«»α»ì',
      subtitle: 'α«Üα»éα«¬α»ìα«¬α«░α»ì α«¬α»ïα«▓α»ìα«ƒα»ì α«Åα«▒α»ìα«▒α»üα««α«ñα«┐ α«òα«▓α«╡α»ê',
      sieve: '7.5 α««α«┐α««α»Ç - 8.0 α««α«┐α««α»Ç α«╡α«░α««α»ìα«¬α»ü',
      moisture: '11.0% α«àα«ñα«┐α«òα«¬α«ƒα»ìα«Ü α«êα«░α«¬α»ìα«¬α«ñα««α»ì',
      weight: '420 - 445 α«òα«┐α«░α«╛α««α»ì/α«▓α«┐α«ƒα»ìα«ƒα«░α»ì α«Äα«ƒα»ê',
      color: 'α««α«░α«òα«ñ α«¬α«Üα»ìα«Üα»ê α«¿α«┐α«▒α««α»ì',
      desc: 'α««α«┐α«òα«¬α»ìα«¬α»åα«░α«┐α«» α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«¬α»ïα«▓α»ìα«ƒα»ì α«òα«╛α«»α»ìα«òα«│α»êα«òα»ì α«òα»èα«úα»ìα«ƒ α«Üα«┐α«▒α«¿α»ìα«ñ α«Åα«▒α»ìα«▒α»üα««α«ñα«┐ α«ñα«░α««α»ì. α«òα«▒α»üα«¬α»ìα«¬α»ü α«¿α«▒α»üα««α«ú α«╡α«┐α«ñα»êα«òα«│α»ì α««α«▒α»ìα«▒α»üα««α»ì α«çα«░α«ƒα»ìα«ƒα»ê α«ñα«░α««α»ì α«¬α«┐α«░α«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα«ñα»ü.'
    },
    '8mm': {
      title: '8.0 α««α«┐α««α»Ç α«¬α«Üα»ìα«Üα»ê α«Åα«▓α«òα»ìα«òα«╛α«»α»ì',
      subtitle: 'α«Üα»éα«¬α»ìα«¬α«░α»ì α«Äα«òα»ìα«╕α»ìα«ƒα»ìα«░α«╛ α«¬α»ïα«▓α»ìα«ƒα»ì (α«Üα»éα«¬α»ìα«¬α«░α»ì α«£α««α»ìα«¬α»ï)',
      sieve: '> 8.0 α««α«┐α««α»Ç (α«╡α«┐α«ƒα»ìα«ƒα««α»ì α«╡α«▓α»ê)',
      moisture: '10.5% α«àα«ñα«┐α«òα«¬α«ƒα»ìα«Ü α«êα«░α«¬α»ìα«¬α«ñα««α»ì',
      weight: '435 - 460 α«òα«┐α«░α«╛α««α»ì/α«▓α«┐α«ƒα»ìα«ƒα«░α»ì α«Äα«ƒα»ê',
      color: 'α«àα«ƒα«░α»ìα«¿α»ìα«ñ α«òα«╛α«ƒα»ìα«ƒα»ü α«¬α«Üα»ìα«Üα»ê',
      desc: 'α«çα«¿α»ìα«ñα«┐α«» α«Åα«▓α«òα»ìα«òα«╛α«»α»ì α«ñα«░α«ñα»ìα«ñα«┐α«⌐α»ì α«ëα«Üα»ìα«Üα«òα«ƒα»ìα«ƒα««α»ì. α«çα«░α«ƒα»ìα«ƒα»ê α«ñα«░α««α»ì α«¬α«┐α«░α«┐α«òα»ìα«òα»üα««α»ì α«Üα»åα«»α«▓α»ìα««α»üα«▒α»ê α««α»éα«▓α««α»ì α«ñα»çα«░α»ìα«¿α»ìα«ñα»åα«ƒα»üα«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα«ñα»ü. α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«¬α«░α«┐α«Üα»ü α««α«▒α»ìα«▒α»üα««α»ì α«Üα«░α»ìα«╡α«ñα»çα«Ü α«╡α«╛α«ƒα«┐α«òα»ìα«òα»êα«»α«╛α«│α«░α»ìα«òα«│α»üα«òα»ìα«òα«╛α«⌐α«ñα»ü.'
    },
    '8.5mm': {
      title: '8.5 α««α«┐α««α»Ç α«¬α«Üα»ìα«Üα»ê α«Åα«▓α«òα»ìα«òα«╛α«»α»ì',
      subtitle: 'α«çα««α»ìα«¬α»Çα«░α«┐α«»α«▓α»ì α«£α««α»ìα«¬α»ï α«¬α»ïα«▓α»ìα«ƒα»ì',
      sieve: '> 8.5 α««α«┐α««α»Ç (α«╡α«┐α«ƒα»ìα«ƒα««α»ì α«╡α«▓α»ê)',
      moisture: '10.2% α«àα«ñα«┐α«òα«¬α«ƒα»ìα«Ü α«êα«░α«¬α»ìα«¬α«ñα««α»ì',
      weight: '455 - 475 α«òα«┐α«░α«╛α««α»ì/α«▓α«┐α«ƒα»ìα«ƒα«░α»ì α«Äα«ƒα»ê',
      color: 'α«àα«┤α«òα«┐α«» α«àα«ƒα«░α»ì α«¬α«Üα»ìα«Üα»ê',
      desc: 'α«åα«ƒα««α»ìα«¬α«░ α«¬α«░α«┐α«Üα»üα«¬α»ì α«¬α»èα«ñα«┐α«òα«│α»ì, α«Üα«░α»ìα«╡α«ñα»çα«Ü α«¬α»çα«òα»ìα«òα»çα«£α«┐α«Öα»ì α««α«▒α»ìα«▒α»üα««α»ì α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α««α«Üα«╛α«▓α«╛ α«òα«▓α«╡α»êα«òα«│α»üα«òα»ìα«òα»ü α«Åα«▒α»ìα«▒ α«Üα«┐α«▒α«¬α»ìα«¬α»üα«ñα»ì α«ñα»çα«░α»ìα«╡α»ü.'
    },
    '9mm': {
      title: '9.0 α««α«┐α««α»Ç α«¬α«Üα»ìα«Üα»ê α«Åα«▓α«òα»ìα«òα«╛α«»α»ì',
      subtitle: 'α«Üα»üα«¬α»ìα«░α»Çα««α»ì α«░α«╛α«»α«▓α»ì α«£α««α»ìα«¬α»ï',
      sieve: '> 9.0 α««α«┐α««α»Ç (α«╡α«┐α«ƒα»ìα«ƒα««α»ì α«╡α«▓α»ê)',
      moisture: '10.0% α«àα«ñα«┐α«òα«¬α«ƒα»ìα«Ü α«êα«░α«¬α»ìα«¬α«ñα««α»ì',
      weight: '470 - 490 α«òα«┐α«░α«╛α««α»ì/α«▓α«┐α«ƒα»ìα«ƒα«░α»ì α«Äα«ƒα»ê',
      color: 'α«àα«░α«Ü α«¬α«Üα»ìα«Üα»ê α«¿α«┐α«▒α««α»ì',
      desc: 'α«ëα«▓α«òα«┐α«⌐α»ì α««α«┐α«ò α«àα«░α«┐α«» α«Åα«▓α«òα»ìα«òα«╛α«»α»ì α«░α«òα««α»ì. 9.0 α««α«┐α««α»Ç α«╡α«┐α«ƒα»ìα«ƒα««α»ì α«òα»èα«úα»ìα«ƒ α«òα«╛α«»α»ìα«òα«│α»ì, α«àα«ñα«┐α«ò α«╡α«┐α«ñα»êα«òα«│α»êα«»α»üα««α»ì α«Üα«┐α«▒α«¿α»ìα«ñ α«¿α«▒α»üα««α«ú α«Äα«úα»ìα«úα»åα«»α»ìα«òα«│α»êα«»α»üα««α»ì α«òα»èα«úα»ìα«ƒα«ñα»ü.'
    },
    '6mm-yellow': {
      title: '6.0 α««α«┐α««α»Ç α«¬α«┤ α«Åα«▓α«òα»ìα«òα«╛α«»α»ì (α««α«₧α»ìα«Üα«│α»ì/α«╡α»åα«│α«┐α«░α»ì)',
      subtitle: 'α«¿α«ƒα»üα«ñα»ìα«ñα«░ α«ñα«░α««α»ì (α«Üα«╛α«ñα«╛α«░α«ú α«àα«│α«╡α»ü)',
      sieve: '> 6.0 α««α«┐α««α»Ç (α«╡α«┐α«ƒα»ìα«ƒα««α»ì α«╡α«▓α»ê)',
      moisture: '12.0% α«àα«ñα«┐α«òα«¬α«ƒα»ìα«Ü α«êα«░α«¬α»ìα«¬α«ñα««α»ì',
      weight: '350 - 370 α«òα«┐α«░α«╛α««α»ì/α«▓α«┐α«ƒα»ìα«ƒα«░α»ì α«Äα«ƒα»ê',
      color: 'α««α«₧α»ìα«Üα«│α»ì α«¿α«┐α«▒α««α»ì (MGB)',
      desc: 'α«Üα»Çα«░α«╛α«⌐ α«¿α«┐α«▒α«ñα»ìα«ñα»ê α«ëα«▒α»üα«ñα«┐ α«Üα»åα«»α»ìα«» α«òα«╡α«⌐α««α«╛α«ò α«ñα«░α««α»ì α«¬α«┐α«░α«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα«ñα»ü. α«Üα«┐α«▓α»ìα«▓α«▒α»ê α«¬α»çα«òα»ìα«òα»çα«£α«┐α«Öα»ì α««α«▒α»ìα«▒α»üα««α»ì α«ëα«úα«╡α«ò α«Üα«¬α»ìα«│α»êα«»α«░α»ìα«òα«│α»üα«òα»ìα«òα»ü α««α«┐α«òα«╡α»üα««α»ì α««α«▓α«┐α«╡α«╛α«⌐ α«ñα»çα«░α»ìα«╡α»ü.'
    },
    '7mm-yellow': {
      title: '7.0 α««α«┐α««α»Ç α«¬α«┤ α«Åα«▓α«òα»ìα«òα«╛α«»α»ì (α««α«₧α»ìα«Üα«│α»ì/α«╡α»åα«│α«┐α«░α»ì)',
      subtitle: 'α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«¬α»ïα«▓α»ìα«ƒα»ì α«ñα«░α««α»ì (MGEB)',
      sieve: '> 7.0 α««α«┐α««α»Ç (α«╡α«┐α«ƒα»ìα«ƒα««α»ì α«╡α«▓α»ê)',
      moisture: '11.5% α«àα«ñα«┐α«òα«¬α«ƒα»ìα«Ü α«êα«░α«¬α»ìα«¬α«ñα««α»ì',
      weight: '375 - 400 α«òα«┐α«░α«╛α««α»ì/α«▓α«┐α«ƒα»ìα«ƒα«░α»ì α«Äα«ƒα»ê',
      color: 'α«¬α»èα«⌐α»ì α««α«₧α»ìα«Üα«│α»ì α«¿α«┐α«▒α««α»ì',
      desc: 'α«àα«░α»ïα««α«╛ α«Äα«úα»ìα«úα»åα«»α»ìα«òα«│α»ì α«¿α«┐α«▒α»êα«¿α»ìα«ñ α««α»üα«┤α»üα««α»êα«»α«╛α«⌐ α«Åα«▓α«òα»ìα«òα«╛α«»α»ì α«òα«╛α«»α»ìα«òα«│α»ì. α«òα»çα«ƒα»ìα«ƒα«░α«┐α«Öα»ì α««α«▒α»ìα«▒α»üα««α»ì α«Üα«┐α«▓α»ìα«▓α«▒α»ê α«╡α«░α»ìα«ñα»ìα«ñα«òα«ñα»ìα«ñα«┐α«▒α»ìα«òα»ü α«Åα«▒α»ìα«▒ α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«ñα«░α««α»ì.'
    },
    '7.5mm-yellow': {
      title: '7.5 α««α«┐α««α»Ç α«¬α«┤ α«Åα«▓α«òα»ìα«òα«╛α«»α»ì (α««α«₧α»ìα«Üα«│α»ì/α«╡α»åα«│α«┐α«░α»ì)',
      subtitle: 'α«Äα«▓α»êα«ƒα»ì α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«¬α»ïα«▓α»ìα«ƒα»ì',
      sieve: '> 7.5 α««α«┐α««α»Ç (α«╡α«┐α«ƒα»ìα«ƒα««α»ì α«╡α«▓α»ê)',
      moisture: '11.2% α«àα«ñα«┐α«òα«¬α«ƒα»ìα«Ü α«êα«░α«¬α»ìα«¬α«ñα««α»ì',
      weight: '400 - 420 α«òα«┐α«░α«╛α««α»ì/α«▓α«┐α«ƒα»ìα«ƒα«░α»ì α«Äα«ƒα»ê',
      color: 'α«àα«ƒα«░α»ìα«¿α»ìα«ñ α«¬α»èα«⌐α»ì α««α«₧α»ìα«Üα«│α»ì',
      desc: 'α«Åα«▒α»ìα«▒α»üα««α«ñα«┐ α«ñα«░α««α»ì. α«Üα«┐α«▒α«¿α»ìα«ñ α«¿α«┐α«▒α««α»ì, α«ñα«░α««α»ì α««α«▒α»ìα«▒α»üα««α»ì α«àα«ñα«┐α«ò α«╡α«┐α«ñα»êα«òα«│α»ì α«¿α«┐α«▒α»êα«¿α»ìα«ñ α«òα«╛α«»α»ìα«òα«│α»ê α«ëα«▒α»üα«ñα«┐ α«Üα»åα«»α»ìα«» α«ñα«░α««α»ì α«¬α«┐α«░α«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα«ñα»ü.'
    },
    '7.5-8mm-yellow': {
      title: '7.5 - 8.0 α««α«┐α««α»Ç α«¬α«┤ α«Åα«▓α«òα»ìα«òα«╛α«»α»ì (α««α«₧α»ìα«Üα«│α»ì/α«╡α»åα«│α«┐α«░α»ì)',
      subtitle: 'α«Üα»éα«¬α»ìα«¬α«░α»ì α«¬α»ïα«▓α»ìα«ƒα»ì α«Åα«▒α»ìα«▒α»üα««α«ñα«┐ α«òα«▓α«╡α»ê',
      sieve: '7.5 α««α«┐α««α»Ç - 8.0 α««α«┐α««α»Ç α«╡α«░α««α»ìα«¬α»ü',
      moisture: '11.0% α«àα«ñα«┐α«òα«¬α«ƒα»ìα«Ü α«êα«░α«¬α»ìα«¬α«ñα««α»ì',
      weight: '410 - 435 α«òα«┐α«░α«╛α««α»ì/α«▓α«┐α«ƒα»ìα«ƒα«░α»ì α«Äα«ƒα»ê',
      color: 'α««α«₧α»ìα«Üα«│α»ì α«¿α«┐α«▒α««α»ì',
      desc: 'α««α«┐α«òα«¬α»ìα«¬α»åα«░α«┐α«» α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«¬α»ïα«▓α»ìα«ƒα»ì α«òα«╛α«»α»ìα«òα«│α»êα«òα»ì α«òα»èα«úα»ìα«ƒ α«Üα«┐α«▒α«¿α»ìα«ñ α«ñα«░α««α»ì. α«òα«▒α»üα«¬α»ìα«¬α»ü α«¿α«▒α»üα««α«ú α«╡α«┐α«ñα»êα«òα«│α»ì α««α«▒α»ìα«▒α»üα««α»ì α«çα«░α«ƒα»ìα«ƒα»ê α«ñα«░α««α»ì α«¬α«┐α«░α«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα«ñα»ü.'
    },
    '8mm-yellow': {
      title: '8.0 α««α«┐α««α»Ç α«¬α«┤ α«Åα«▓α«òα»ìα«òα«╛α«»α»ì (α««α«₧α»ìα«Üα«│α»ì/α«╡α»åα«│α«┐α«░α»ì)',
      subtitle: 'α«Üα»éα«¬α»ìα«¬α«░α»ì α«Äα«òα»ìα«╕α»ìα«ƒα»ìα«░α«╛ α«¬α»ïα«▓α»ìα«ƒα»ì (α«£α««α»ìα«¬α»ï)',
      sieve: '> 8.0 α««α«┐α««α»Ç (α«╡α«┐α«ƒα»ìα«ƒα««α»ì α«╡α«▓α»ê)',
      moisture: '10.5% α«àα«ñα«┐α«òα«¬α«ƒα»ìα«Ü α«êα«░α«¬α»ìα«¬α«ñα««α»ì',
      weight: '425 - 450 α«òα«┐α«░α«╛α««α»ì/α«▓α«┐α«ƒα»ìα«ƒα«░α»ì α«Äα«ƒα»ê',
      color: 'α«àα«ƒα«░α»ìα«¿α»ìα«ñ α«¬α»èα«⌐α»ì α««α«₧α»ìα«Üα«│α»ì α«¿α«┐α«▒α««α»ì',
      desc: 'α««α«₧α»ìα«Üα«│α»ì α«Åα«▓α«òα»ìα«òα«╛α«»α»ì α«ñα«░α«ñα»ìα«ñα«┐α«⌐α»ì α«ëα«Üα»ìα«Üα«òα«ƒα»ìα«ƒα««α»ì. α«çα«░α«úα»ìα«ƒα»ü α««α»üα«▒α»ê α«Üα«▓α»ìα«▓α«ƒα»ê α««α»éα«▓α««α»ì α«ñα«░α««α»ì α«¬α«┐α«░α«┐α«òα»ìα«òα«¬α»ìα«¬α«ƒα»ìα«ƒα»ü, α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«¬α«░α«┐α«Üα»üα«¬α»ì α«¬α»åα«ƒα»ìα«ƒα«┐α«òα«│α»üα«òα»ìα«òα»ü α«Åα«▒α»ìα«▒α«ñα»ü.'
    },
    '8.5mm-yellow': {
      title: '8.5 α««α«┐α««α»Ç α«¬α«┤ α«Åα«▓α«òα»ìα«òα«╛α«»α»ì (α««α«₧α»ìα«Üα«│α»ì/α«╡α»åα«│α«┐α«░α»ì)',
      subtitle: 'α«çα««α»ìα«¬α»Çα«░α«┐α«»α«▓α»ì α«£α««α»ìα«¬α»ï α«¬α»ïα«▓α»ìα«ƒα»ì',
      sieve: '> 8.5 α««α«┐α««α»Ç (α«╡α«┐α«ƒα»ìα«ƒα««α»ì α«╡α«▓α»ê)',
      moisture: '10.2% α«àα«ñα«┐α«òα«¬α«ƒα»ìα«Ü α«êα«░α«¬α»ìα«¬α«ñα««α»ì',
      weight: '445 - 465 α«òα«┐α«░α«╛α««α»ì/α«▓α«┐α«ƒα»ìα«ƒα«░α»ì α«Äα«ƒα»ê',
      color: 'α«Üα»èα«òα»üα«Üα»ü α«¬α»èα«⌐α»ì α««α«₧α»ìα«Üα«│α»ì',
      desc: 'α«¬α«░α«┐α«Üα»üα«¬α»ì α«¬α»åα«ƒα»ìα«ƒα«┐α«òα«│α»ì α««α«▒α»ìα«▒α»üα««α»ì α«çα««α»ìα«¬α»Çα«░α«┐α«»α«▓α»ì α«¿α«▒α»üα««α«ú α«òα«▓α«╡α»êα«òα«│α»üα«òα»ìα«òα»ü α«Åα«▒α»ìα«▒ α«Üα«┐α«▒α«¬α»ìα«¬α»ü α«ñα»çα«░α»ìα«╡α»ü.'
    },
    '9mm-yellow': {
      title: '9.0 α««α«┐α««α»Ç α«¬α«┤ α«Åα«▓α«òα»ìα«òα«╛α«»α»ì (α««α«₧α»ìα«Üα«│α»ì/α«╡α»åα«│α«┐α«░α»ì)',
      subtitle: 'α«Üα»üα«¬α»ìα«░α»Çα««α»ì α«░α«╛α«»α«▓α»ì α«£α««α»ìα«¬α»ï',
      sieve: '> 9.0 α««α«┐α««α»Ç (α«╡α«┐α«ƒα»ìα«ƒα««α»ì α«╡α«▓α»ê)',
      moisture: '10.0% α«àα«ñα«┐α«òα«¬α«ƒα»ìα«Ü α«êα«░α«¬α»ìα«¬α«ñα««α»ì',
      weight: '460 - 480 α«òα«┐α«░α«╛α««α»ì/α«▓α«┐α«ƒα»ìα«ƒα«░α»ì α«Äα«ƒα»ê',
      color: 'α«àα«░α«Ü α«¬α»èα«⌐α»ì α««α«₧α»ìα«Üα«│α»ì α«¿α«┐α«▒α««α»ì',
      desc: 'α«ëα«▓α«òα«┐α«⌐α»ì α««α«┐α«ò α«àα«░α«┐α«» α««α«₧α»ìα«Üα«│α»ì α«Åα«▓α«òα»ìα«òα«╛α«»α»ì α«░α«òα««α»ì. 9.0 α««α«┐α««α»Ç α«╡α«┐α«ƒα»ìα«ƒα««α»ì α«òα»èα«úα»ìα«ƒ α«òα«╛α«»α»ìα«òα«│α»ì, α«àα«ñα«┐α«ò α«╡α«┐α«ñα»êα«òα«│α»ê α«òα»èα«úα»ìα«ƒα«ñα»ü.'
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
    '6mm': '6.0 αñ«αñ┐αñ«αÑÇ αñ«αñ╛αñ¿αñò αñåαñòαñ╛αñ░',
    '7mm': '7.0 αñ«αñ┐αñ«αÑÇ αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñ¼αÑïαñ▓αÑìαñí (AGEB)',
    '7.5mm': '7.5 αñ«αñ┐αñ«αÑÇ αñÅαñ▓αÑÇαñƒ αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñ¼αÑïαñ▓αÑìαñí',
    '7.5-8mm': '7.5 - 8.0 αñ«αñ┐αñ«αÑÇ αñ╕αÑüαñ¬αñ░ αñ¼αÑïαñ▓αÑìαñí αñ¿αñ┐αñ░αÑìαñ»αñ╛αññ αñ«αñ┐αñòαÑìαñ╕',
    '8mm': '8.0 αñ«αñ┐αñ«αÑÇ αñ╕αÑüαñ¬αñ░ αñÅαñòαÑìαñ╕αÑìαñƒαÑìαñ░αñ╛ αñ¼αÑïαñ▓αÑìαñí (αñ£αñéαñ¼αÑï)',
    '8.5mm': '8.5 αñ«αñ┐αñ«αÑÇ αñçαñéαñ¬αÑÇαñ░αñ┐αñ»αñ▓ αñ£αñéαñ¼αÑï αñ¼αÑïαñ▓αÑìαñí',
    '9mm': '9.0 αñ«αñ┐αñ«αÑÇ αñ╕αÑüαñ¬αÑìαñ░αÑÇαñ« αñ░αÑëαñ»αñ▓ αñ£αñéαñ¼αÑï'
  };

  const gradeNamesTa = {
    '6mm': '6.0 α««α«┐α««α»Ç α«Üα«╛α«ñα«╛α«░α«ú α«¿α«ƒα»üα«ñα»ìα«ñα«░ α«àα«│α«╡α»ü',
    '7mm': '7.0 α««α«┐α««α»Ç α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«¬α»ïα«▓α»ìα«ƒα»ì (AGEB)',
    '7.5mm': '7.5 α««α«┐α««α»Ç α«Äα«▓α»êα«ƒα»ì α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«¬α»ïα«▓α»ìα«ƒα»ì',
    '7.5-8mm': '7.5 - 8.0 α««α«┐α««α»Ç α«Åα«▒α»ìα«▒α»üα««α«ñα«┐ α«¬α»ïα«▓α»ìα«ƒα»ì α«òα«▓α«╡α»ê',
    '8mm': '8.0 α««α«┐α««α»Ç α«Üα»éα«¬α»ìα«¬α«░α»ì α«Äα«òα»ìα«╕α»ìα«ƒα»ìα«░α«╛ α«¬α»ïα«▓α»ìα«ƒα»ì',
    '8.5mm': '8.5 α««α«┐α««α»Ç α«çα««α»ìα«¬α»Çα«░α«┐α«»α«▓α»ì α«£α««α»ìα«¬α»ï α«¬α»ïα«▓α»ìα«ƒα»ì',
    '9mm': '9.0 α««α«┐α««α»Ç α«Üα»üα«¬α»ìα«░α»Çα««α»ì α«░α«╛α«»α«▓α»ì α«£α««α»ìα«¬α»ï'
  };

  let currentGradeNames = gradeNamesEn;
  let currentLang = 'en';

  const productCards = document.querySelectorAll('.p-card');
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

  productCards.forEach(card => {
    card.addEventListener('click', () => {
      const grade = card.getAttribute('data-grade');
      openModal(grade);
    });
  });

  modalClose.addEventListener('click', closeModal);
  modalBack.addEventListener('click', closeModal);

  // Close when clicking overlay
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Esc key close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
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

  // Modal "Estimate Quantity" click: update calculator selection and scroll down
  modalQuote.addEventListener('click', (e) => {
    e.preventDefault();
    const titleVal = mTitle.innerText;
    let gradeKey = '7.5mm';
    if (titleVal.includes('6.0') || titleVal.includes('6mm')) gradeKey = '6mm';
    else if (titleVal.includes('7.0') || titleVal.includes('7mm')) gradeKey = '7mm';
    else if (titleVal.includes('7.5-8')) gradeKey = '7.5-8mm';
    else if (titleVal.includes('7.5')) gradeKey = '7.5mm';
    else if (titleVal.includes('8.5')) gradeKey = '8.5mm';
    else if (titleVal.includes('8.0') || titleVal.includes('8mm')) gradeKey = '8mm';
    else if (titleVal.includes('9.0') || titleVal.includes('9mm')) gradeKey = '9mm';

    // Set variety based on active specifications modal key
    if (activeModalGradeKey && activeModalGradeKey.includes('-yellow')) {
      calcVariety = 'yellow';
      if (varietyYellowBtn) {
        varietyYellowBtn.classList.add('active');
        varietyGreenBtn.classList.remove('active');
      }
    } else {
      calcVariety = 'green';
      if (varietyGreenBtn) {
        varietyGreenBtn.classList.add('active');
        varietyYellowBtn.classList.remove('active');
      }
    }

    // Update calculator UI
    const calcGradeBtns = document.querySelectorAll('#calc-grade-selector .grade-radio-btn');
    calcGradeBtns.forEach(btn => {
      if (btn.getAttribute('data-val') === gradeKey) {
        btn.classList.add('selected');
      } else {
        btn.classList.remove('selected');
      }
    });

    closeModal();
    // Add item to cart automatically on click of specs modal estimate button!
    addEstimateItem();

    // Scroll smoothly to calculator
    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
  });

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
    '1kg': 'αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù: 1 αñòαñ┐αñ▓αÑïαñùαÑìαñ░αñ╛αñ« αñ¬αÑìαñ░αÑÇαñ«αñ┐αñ»αñ« αñ¬αñ╛αñëαñÜ (20 αñòαñ┐αñ▓αÑïαñùαÑìαñ░αñ╛αñ« αñòαÑç αñ«αñ╛αñ╕αÑìαñƒαñ░ αñòαñ╛αñ░αÑìαñƒαñ¿)',
    '5kg': 'αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù: 5 αñòαñ┐αñ▓αÑïαñùαÑìαñ░αñ╛αñ« αñ╡αÑêαñòαÑìαñ»αÑéαñ« αñ¼αÑêαñù (20 αñòαñ┐αñ▓αÑïαñùαÑìαñ░αñ╛αñ« αñòαÑç αñ«αñ╛αñ╕αÑìαñƒαñ░ αñòαñ╛αñ░αÑìαñƒαñ¿)',
    '10kg': 'αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù: 10 αñòαñ┐αñ▓αÑïαñùαÑìαñ░αñ╛αñ« αñòαñ╕αÑìαñƒαñ« αñ¼αÑëαñòαÑìαñ╕ αñ¬αÑêαñò',
    '25kg': 'αñ¬αÑêαñòαÑçαñ£αñ┐αñéαñù: 25 αñòαñ┐αñ▓αÑïαñùαÑìαñ░αñ╛αñ« αñÑαÑïαñò αñùαñ¿αÑÇ αñ¼αÑïαñ░αÑÇ αñåαñéαññαñ░αñ┐αñò αñ╡αñ╛αñ╖αÑìαñ¬ αñ▓αñ╛αñçαñ¿αñ░ αñòαÑç αñ╕αñ╛αñÑ'
  };

  const packingLabelsTa = {
    '1kg': 'α«¬α»çα«òα»ìα«òα»çα«£α«┐α«Öα»ì: 1 α«òα«┐α«▓α»ï α«¬α«┐α«░α»Çα««α«┐α«»α««α»ì α«¬α»ê (20 α«òα«┐α«▓α»ï α««α«╛α«╕α»ìα«ƒα«░α»ì α«àα«ƒα»ìα«ƒα»êα«¬α»ìα«¬α»åα«ƒα»ìα«ƒα«┐)',
    '5kg': 'α«¬α»çα«òα»ìα«òα»çα«£α«┐α«Öα»ì: 5 α«òα«┐α«▓α»ï α«╡α»åα«▒α»ìα«▒α«┐α«ƒα«¬α»ì α«¬α»ê (20 α«òα«┐α«▓α»ï α««α«╛α«╕α»ìα«ƒα«░α»ì α«àα«ƒα»ìα«ƒα»êα«¬α»ìα«¬α»åα«ƒα»ìα«ƒα«┐)',
    '10kg': 'α«¬α»çα«òα»ìα«òα»çα«£α«┐α«Öα»ì: 10 α«òα«┐α«▓α»ï α«ñα«⌐α«┐α«¬α»ìα«¬α«»α«⌐α»ì α«¬α»åα«ƒα»ìα«ƒα«┐α«¬α»ì α«¬α»èα«ñα«┐α«òα«│α»ì',
    '25kg': 'α«¬α»çα«òα»ìα«òα»çα«£α«┐α«Öα»ì: 25 α«òα«┐α«▓α»ï α««α»èα«ñα»ìα«ñ α«Üα«╛α«òα»ìα«òα»üα«òα«│α»ì (α«ëα«│α»ì α«¿α»Çα«░α«╛α«╡α«┐ α«¬α«╛α«ñα»üα«òα«╛α«¬α»ìα«¬α»üα«ƒα«⌐α»ì)'
  };

  let currentPackingLabels = packingLabelsEn;

  weightSelectors.forEach(selector => {
    selector.addEventListener('click', () => {
      weightSelectors.forEach(s => s.classList.remove('active'));
      selector.classList.add('active');
      const wKey = selector.getAttribute('data-weight');
      pouchLabel.innerText = currentPackingLabels[wKey] || 'Selected Packaging';
    });
  });

  // Initialize packaging label
  pouchLabel.innerText = currentPackingLabels['1kg'];

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
      console.log(`[Pricing] Γ£ô ${gradeId}: min=₹${min} avg=₹${avg} max=₹${max}`);
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
      console.log(`[Pricing/Gviz] Γ£ô ${gradeId}: min=₹${min} avg=₹${avg} max=₹${max}`);
    });

    return { prices, lastDate };
  };

  /* ----------------------------------------------------------
     showStatusBadge — shows ≡ƒƒó Live or ≡ƒö┤ Offline indicator
  ---------------------------------------------------------- */
  const showStatusBadge = (isLive) => {
    const badge = document.getElementById('price-status-badge');
    if (!badge) return;
    badge.style.display = 'inline';
    if (isLive) {
      badge.textContent  = '≡ƒƒó Live Market Data';
      badge.style.color  = '#2d7a4f';
    } else {
      badge.textContent  = '≡ƒö┤ Offline — Retrying...';
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
    estimateItems = estimateItems.filter(item => item.id !== id);
    updateQuote();
  };

  const addEstimateItem = () => {
    const details = getActiveSelectionDetails();
    
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
      existing.bags = totalBags;
      existing.priceMin = priceInfo ? priceInfo.min * mergedQty : 0;
      existing.priceMax = priceInfo ? priceInfo.max * mergedQty : 0;
      existing.priceAvg = priceInfo ? (priceInfo.avg || Math.round((priceInfo.min + priceInfo.max) / 2)) * mergedQty : 0;
      existing.pricePerKg = priceInfo ? (priceInfo.avg || Math.round((priceInfo.min + priceInfo.max) / 2)) : 0;
      existing.isUnavailable = !priceInfo;
    } else {
      estimateItems.push({
        id: Date.now() + Math.random(),
        variety: calcVariety,
        grade: details.grade,
        qty: details.qty,
        packaging: details.packagingType,
        bags: details.totalBags,
        priceMin: details.priceMin,
        priceMax: details.priceMax,
        priceAvg: details.priceAvg,
        pricePerKg: details.pricePerKg,
        isUnavailable: details.isUnavailable
      });
    }

    updateQuote();
  };

  const updateQuote = () => {
    const custNum = getCustomerNumber();

    if (estimateItems.length === 0) {
      estimatorEmptyMsg.style.display = 'block';
      estimatorTable.style.display = 'none';
      estimatorTotalsSection.style.display = 'none';
      document.getElementById('invoice-id').innerText = `LT-EMPTY-${custNum}`;
      return;
    }

    estimatorEmptyMsg.style.display = 'none';
    estimatorTable.style.display = 'table';
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
      totalQty += item.qty;
      totalBags += item.bags;
      totalPriceMin += item.priceMin;
      totalPriceMax += item.priceMax;
      totalPriceAvg += (item.priceAvg || 0);
      
      if (item.isUnavailable) anyUnavailable = true;
      
      const cleanSize = item.grade.replace('.','');
      if (!sizeCodes.includes(cleanSize)) sizeCodes.push(cleanSize);

      const tr = document.createElement('tr');
      const varLabel = item.variety === 'yellow' ? 
        (translations[currentLang]['prod_tab_yellow'] || 'Fruit Cardamom (Yellow/Pale)') : 
        (translations[currentLang]['prod_tab_green'] || 'Green');

      const sizeLabel = currentGradeNames[item.grade] || item.grade;
      const unitsLabel = translations[currentLang]['calc_units_label'] || 'units';

      let priceText;
      if (item.isUnavailable || apiFetchFailed) {
        priceText = '<span style="color:var(--muted);font-size:12px;">Unavailable</span>';
      } else {
        const avg = item.pricePerKg || 0;
        const minKg = item.qty > 0 ? Math.round(item.priceMin / item.qty) : 0;
        const maxKg = item.qty > 0 ? Math.round(item.priceMax / item.qty) : 0;
        priceText = `
          <div style="font-weight:800;color:var(--green-900);font-size:13.5px;">₹${(item.priceAvg||0).toLocaleString()}</div>
          <div style="font-size:10px;color:var(--muted);margin-top:2px;">Avg @ ₹${avg.toLocaleString()}/kg</div>
          <div style="font-size:9.5px;color:var(--muted);">Min ₹${item.priceMin.toLocaleString()} · Max ₹${item.priceMax.toLocaleString()}</div>`;
      }

      tr.innerHTML = `
        <td style="padding: 8px 6px;">
          <div style="font-weight:700; color:var(--green-900);">${sizeLabel}</div>
          <div style="font-size:11.5px; color:var(--muted);">${varLabel}</div>
        </td>
        <td style="padding: 8px 6px; text-align: right; font-weight: 700;">${item.qty.toLocaleString()} KG</td>
        <td style="padding: 8px 6px; text-align: right; color: var(--muted);">${item.bags} ${unitsLabel}</td>
        <td style="padding: 8px 6px; text-align: right;">${priceText}</td>
        <td style="padding: 8px 6px; text-align: center;">
          <button class="est-del-btn" data-id="${item.id}" type="button">🗑️</button>
        </td>
      `;

      estimatorTableBody.appendChild(tr);
    });

    estimatorTableBody.querySelectorAll('.est-del-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const itemId = parseFloat(btn.getAttribute('data-id'));
        deleteEstimateItem(itemId);
      });
    });

    if (summaryItemsCount) {
      summaryItemsCount.innerText = estimateItems.length;
    }
    
    const sumQtyEl = document.getElementById('summary-qty');
    if (sumQtyEl) sumQtyEl.innerText = `${totalQty.toLocaleString()} KG`;

    const sumBagsEl = document.getElementById('summary-bags');
    if (sumBagsEl) {
      const unitsStr = translations[currentLang]['calc_units_label'] || 'units';
      sumBagsEl.innerText = `${totalBags} ${unitsStr}`;
    }

    const sumPriceEl = document.getElementById('summary-price');
    if (sumPriceEl) {
      if (anyUnavailable) {
        sumPriceEl.innerHTML = `<span style="font-size:12.5px;color:#c0392b;line-height:1.6;">Today's estimated market prices are temporarily unavailable.<br>Please contact us for the latest quotation.</span>`;
        sumPriceEl.style.fontSize = '';
        sumPriceEl.style.color = '';
      } else {
        // Primary: Avg Price Total — Secondary: Min–Max range
        sumPriceEl.innerHTML = `
          <span style="font-size:22px;font-weight:800;color:var(--green-900);">₹${totalPriceAvg.toLocaleString()}</span>
          <div style="font-size:11.5px;color:var(--muted);margin-top:5px;">Estimated Avg Value (based on today's market)</div>
          <div style="font-size:11px;color:var(--muted);margin-top:3px;">Range: ₹${totalPriceMin.toLocaleString()} – ₹${totalPriceMax.toLocaleString()}</div>
        `;
        sumPriceEl.style.fontSize = '';
        sumPriceEl.style.color = '';
      }
    }

    const sizesJoined = sizeCodes.join('-');
    const formattedId = `LT-${sizesJoined}-${totalBags}-${custNum}`;
    document.getElementById('invoice-id').innerText = formattedId;
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
  calcQtyRange.addEventListener('input', (e) => {
    calcQtyInput.value = e.target.value;
  });

  calcQtyInput.addEventListener('input', (e) => {
    const val = parseInt(e.target.value) || 5;
    calcQtyRange.value = val > 5000 ? 5000 : val;
  });

  // Grade selection radios click
  const calcGradeBtns = calcGradeSelector.querySelectorAll('.grade-radio-btn');
  calcGradeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      calcGradeBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

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
    
    if (estimateItems.length === 0) {
      return `Hello Lisha Traders,\n\nI would like to request information about bulk cardamom grade availability and custom quotation feeds.`;
    }

    let itemsDetails = '';
    estimateItems.forEach((item, index) => {
      const varName = item.variety === 'yellow' ? 'Fruit Cardamom (Yellow/Pale)' : 'Green Cardamom';
      const gradeName = currentGradeNames[item.grade] || item.grade;
      itemsDetails += `${index + 1}. ${varName} (${gradeName}) - ${item.qty} KG (${item.bags} bags, packed in ${item.packaging})\n`;
    });

    return `Hello Lisha Traders,\n\nI would like to request a formal wholesale quotation for the following bulk cardamom requirements:\n\n- Inquiry ID: ${invoiceId}\n\nItems Requested:\n${itemsDetails}\nPlease share availability, daily auction rate index, and delivery schedule to our dispatch.\n\nThank you!`;
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

  whatsappBtn.addEventListener('click', () => {
    if (estimateItems.length === 0) {
      const alertMsg = translations[currentLang]['calc_alert_empty_submit'] || 'Please add at least one cardamom grade sizing to your estimate list first.';
      alert(alertMsg);
      return;
    }
    if (!validateCompliance()) return;
    const msg = encodeURIComponent(buildInquiryText());
    const whatsappUrl = `https://wa.me/919342153357?text=${msg}`;
    window.open(whatsappUrl, '_blank');
    incrementCustomerNumber();
  });

  emailBtn.addEventListener('click', () => {
    if (estimateItems.length === 0) {
      const alertMsg = translations[currentLang]['calc_alert_empty_submit'] || 'Please add at least one cardamom grade sizing to your estimate list first.';
      alert(alertMsg);
      return;
    }
    if (!validateCompliance()) return;
    const subject = encodeURIComponent(`Bulk Cardamom Quotation Request - ${document.getElementById('invoice-id').innerText}`);
    const body = encodeURIComponent(buildInquiryText());
    const mailtoUrl = `mailto:info@lishatraders.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    incrementCustomerNumber();
  });

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
     10. 3D TRANSITION LOADER & MOUSE-TILT ANIMATIONS
     ========================================================================== */
  
  // A. Section transition page loader
  const loader3d = document.getElementById('loader-3d');
  const loaderStatus = document.getElementById('loader-status');
  
  const navLinksList = document.querySelectorAll('a[href^="#"]');
  navLinksList.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return; // Skip empty hash links
      
      const targetSection = document.querySelector(targetId);
      if (!targetSection) return;
      
      e.preventDefault();
      
      // Determine friendly section name
      let sectionName = link.innerText.trim().replace('→', '').trim();
      if (!sectionName) {
        sectionName = targetId.substring(1).charAt(0).toUpperCase() + targetId.substring(2);
      }
      
      const loadingPrefix = translations[currentLang]['loading_text'] || 'Loading';
      loaderStatus.innerText = `${loadingPrefix} ${sectionName}...`;
      loader3d.classList.add('active');
      
      // Close mobile navigation menu if open
      if (burgerMenu && navLinks) {
        burgerMenu.classList.remove('open');
        navLinks.classList.remove('open');
      }
      
      setTimeout(() => {
        // Scroll instantly to section while screen is covered
        targetSection.scrollIntoView({ behavior: 'auto' });
        
        setTimeout(() => {
          // Slide open loader panels
          loader3d.classList.remove('active');
        }, 300);
      }, 500);
    });
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
  const langModal = document.getElementById('lang-modal');
  const langDropdownBtn = document.getElementById('lang-dropdown-btn');
  const langDropdownMenu = document.getElementById('lang-dropdown-menu');

  // A. Set and apply active language translations
  const setLanguage = (lang) => {
    // 1. Save state
    localStorage.setItem('lisha-lang', lang);
    currentLang = lang;
    
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

    // 4. Update language indicator text
    langDropdownBtn.innerText = lang.toUpperCase();

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

    // 6. Refresh packaging tab display label
    const activeSelector = document.querySelector('.weight-selector.active');
    if (activeSelector && pouchLabel) {
      const wKey = activeSelector.getAttribute('data-weight');
      pouchLabel.innerText = currentPackingLabels[wKey] || 'Selected Packaging';
    }

    // 7. Refresh pricing calculator totals
    if (typeof updateQuote === 'function') {
      updateQuote();
    }
  };

  // B. Attach click event to language selector popup buttons
  const langModalBtns = langModal.querySelectorAll('.lang-btn');
  langModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      setLanguage(selectedLang);
      
      // Hide modal overlay with transition
      langModal.classList.add('hide');
      document.body.style.overflow = ''; // Unlock scroll

      // Trigger cinematic staggered hero entrance animation
      setTimeout(() => {
        document.body.classList.add('hero-animate');
      }, 300);
    });
  });

  // C. Header dropdown trigger toggle
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

  // D. Initial checks on document load (always ask on refresh)
  const savedLang = localStorage.getItem('lisha-lang') || 'en';
  setLanguage(savedLang);
  
  // Lock page scrolling initially
  document.body.style.overflow = 'hidden';



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

});
