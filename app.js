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
      'why_badge_gst': 'Γ£ô GST Invoice Available',
      'why_badge_wholesale': 'Γ£ô Wholesale Orders',
      'why_badge_bulk': 'Γ£ô Bulk Supply',
      'why_badge_quality': 'Γ£ô Quality Checked',
      'why_badge_packaging': 'Γ£ô Secure Packaging',
      'why_badge_support': 'Γ£ô Responsive Support',
      'why_cta_title': 'Let\'s Build a Long-Term Business Relationship.',
      'why_cta_desc': 'Whether you are a wholesaler, distributor, retailer, or exporter, Lisha Traders is committed to supplying premium-quality cardamom with reliable service and transparent communication.',
      'why_cta_btn_quote': 'Request Bulk Quote',
      'why_cta_btn_contact': 'Contact Us'
    },
    'hi': {
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
      'calc_disclaimer': '*नोट: बोडिनायाकनूर नीलामी सूचकांकों के अनुसार इलायची की कीमतें दैनिक रूप से घटती-बढ़ती रहती हैं। यह आपूर्ति योजना के लिए एक अनुमानित मात्रा विवरण है। वास्तविक मूल्य सीमा प्रत्यक्ष पूछताछ पर तय की जाएगी।',
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
      'why_cta_desc': 'चाहे आप थोक व्यापारी, वितरक, खुदरा विक्रेता या निर्यातक हों, लीशा ट्रेडर्स विश्वसनीय सेवा और पारदर्शी संचार के साथ प्रीमियम-गुणवत्ता वाली इलायची की आपूर्ति करने के लिए प्रतिबद्ध है।'
    },
    'ta': {
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
      'calc_disclaimer': '*குறிப்பு: போடிநாயக்கனூர் ஏல விலைகளின் அடிப்படையில் ஏலக்காய் விலைகள் தினமும் மாறுபடும். இது திட்டமிடலுக்கான மதிப்பீடாகும். இறுதி விலை நேரடியாக தொடர்பு கொள்ளும்போது உறுதி செய்யப்படும்.',
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
      'why_cta_desc': 'நீங்கள் மொத்த வியாபாரி, விநியோகஸ்தர், சில்லறை வியாபாரி அல்லது ஏற்றுமதியாளராக இருந்தாலும், லீஷா டிரேடர்ஸ் நம்பகமான சேவை மற்றும் வெளிப்படையான தகவல்தொடர்புகளுடன் தரமான ஏலக்காயை வழங்குவதில் உறுதியாக உள்ளது.'
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
     9.5 SAMPLE REQUEST LOGIC
     ========================================================================== */
  
  // Handling Modal Sample Button
  const modalSampleBtn = document.getElementById('modal-action-sample-btn');
  if (modalSampleBtn) {
    modalSampleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const gradeTitle = document.getElementById('modal-grade-title').innerText;
      const gradeType = document.getElementById('modal-grade-type').innerText;
      const msg = `Hello Lisha Traders, I would like to order a sample of ${gradeTitle} - ${gradeType}. Please provide pricing and shipping details.`;
      const encodedText = encodeURIComponent(msg);
      window.open(`https://wa.me/919342153357?text=${encodedText}`, '_blank');
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

});
