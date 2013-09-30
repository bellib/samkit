 
var dir = "rtl";
var countries_list = new Array (
"","-- غير محددة --",
"A1","بروكسي مجهول",
"A2","مزود القمر الصناعي",
"ET","إثيوبيا",
"AZ","إذربيجان",
"AM","أرمينيا",
"AW","أروبا",
"ER","إريتريا",
"UZ","أزبكستان",
"ES","أسبانيا",
"AU","أستراليا",
"EE","إستونيا",
"IL","إسرائيل",
"SS","إسكوتلندا",
"AP","آسيا/المحيط الهادئ",
"AF","أفغانستان",
"IO","إقليم المحيط الهندي البريطاني",
"AL","ألبانيا",
"DE","ألمانيا",
"DD","ألمانيا الشرقية",
"AG","أنتيجا وبربودا",
"EN","إنجلترا",
"AI","أنجيلا",
"AD","أندورا",
"ID","إندونيسيا",
"AO","أنغولا",
"EU","أوربا",
"UY","أوروجواي",
"UG","أوغندا",
"UA","أوكرانيا",
"IR","إيران",
"IE","إيرلندا",
"ND","إيرلندا الشمالية",
"IS","أيسلندا",
"IT","إيطاليا",
"ZS","الإتحاد السوفيتي",
"AR","الأرجنتين",
"JO","الأردن",
"EC","الإكوادور",
"AE","الإمارات",
"TF","الأقاليم الجنوبية الفرنسية",
"BH","البحرين",
"BR","البرازيل",
"PT","البرتغال",
"BS","البهاما",
"BA","البوسنة والهرسك",
"CZ","التشيك",
"GA","الجابون",
"ME","الجبل الأسود",
"DZ","الجزائر",
"VG","الجزر العذراء البريطانية",
"VI","الجزر العذراء، الولايات المتحدة",
"DK","الدانمارك",
"DO","الدومينيكان",
"AS","الساموا الأمريكية",
"SA","السعودية",
"SV","السلفادور",
"SN","السنغال",
"SD","السودان",
"SE","السويد",
"SC","السيشيل",
"EH","الصحراء الغربية",
"SO","الصومال",
"CN","الصين",
"IQ","العراق",
"PH","الفلبين",
"CM","الكاميرون",
"VA","الكرسي الرسولي (دولة الفاتيكان)",
"CG","الكونجو",
"KW","الكويت",
"HU","المجر",
"MA","المغرب",
"MX","المكسيك",
"MU","الموريشيس",
"NO","النرويج",
"AT","النمسا",
"NP","النيبال",
"NE","النيجر",
"IN","الهند",
"HN","الهوندوراس",
"US","الولايات المتحدة الأمريكية",
"UM","الولايات المتحدة الجزر الصغيرة النائية",
"JP","اليابان",
"YE","اليمن",
"GR","اليونان",
"AQ","انتاركتيكا",
"PG","بابوا نيو جيني",
"PY","باراجواي",
"PK","باكستان",
"PW","بالاو",
"BB","بربادوس",
"BM","برمودا",
"BN","بروناي دار السلام",
"GB","بريطانيا",
"BE","بلجيكا",
"BG","بلغاريا",
"BZ","بليز",
"BD","بنغلادش",
"PA","بنما",
"BJ","بنين",
"BT","بوتان",
"BW","بوتسوانا",
"PR","بورتو ريكو",
"BF","بوركينا فاسو",
"BI","بوروندي",
"PL","بولندا",
"BO","بوليفيا",
"PF","بولينيسيا الفرنسية",
"PE","بيرو",
"TJ","تاطجكستان",
"TH","تايلاند",
"TW","تايوان",
"TM","تركمنستان",
"TR","تركيا",
"TT","ترينيداد وتوباجو",
"TD","تشاد",
"CE","تشيكوسلوفاكيا",
"CL","تشيلي",
"TZ","تنزانيا",
"TG","توجو",
"TV","توفالو",
"TK","توكيلاو",
"TO","تونجا",
"TN","تونس",
"TP","تيمور الشرقية",
"GM","جامبيا",
"JM","جاميكا",
"GI","جبل طارق",
"GD","جرنادا",
"AX","جزر آلاند",
"AN","جزر الأنتيل",
"RE","جزر الرينيون",
"SB","جزر السولومون",
"FK","جزر الفلكلاند",
"KM","جزر القمر",
"KY","جزر الكايمان",
"CC","جزر الكوكوس",
"MH","جزر المارشال",
"MV","جزر المالديف",
"TC","جزر تركس وكايكوس",
"GL","جزر جرينلاند",
"FO","جزر فاروه",
"FJ","جزر فيجي",
"CK","جزر كوك",
"MP","جزر ماريانا الشمالية",
"BV","جزيرة بوفيه",
"PN","جزر بيتكيرن",
"CX","جزيرة كريسماس",
"IM","جزيرة مان",
"NF","جزيرة نورفولك",
"CF","جمهورية أفريقيا الوسطى",
"CD","جمهورية الكونجو",
"ZA","جنوب أفريقيا",
"GT","جواتيمالا",
"GP","جوادلوب",
"GU","جوام",
"GE","جورجيا",
"GS","جورجيا الجنوبية وجزر ساندويتش الجنوبية",
"DJ","جيبوتي",
"JE","جيرسي",
"GW","جينيا بيساو",
"DM","دومينيكا",
"RW","رواندا",
"RU","روسيا",
"BY","روسيا البيضاء",
"RO","رومانيا",
"ZM","زامبيا",
"ZW","زمبابوي",
"CI","ساحل العاج",
"WS","ساموا",
"PM","سان بيار وميكلون",
"SM","سان مارينو",
"VC","سانت فنسنت وغرينادين",
"KN","سانت كيتس ونيفيس",
"LC","سانت لوسيا",
"MF","سانت مارتن",
"SH","سانت هيلانة",
"ST","ساو تومي وبرينسيبي",
"LK","سري لانكا",
"SJ","سفالبارد وجان ماين",
"SK","سلوفاكيا",
"SI","سلوفينيا",
"SG","سنغافورة",
"SZ","سوازيلاند",
"SY","سوريا",
"SR","سورينام",
"CH","سويسرا",
"SL","سييرا ليون",
"SX","صربيا",
"OM","عمان",
"GH","غانا",
"GY","غيانا",
"GF","غيانا الفرنسية",
"GG","غيرنسي",
"GN","غينيا",
"GQ","غينيا الإستوائية",
"VU","فاناتو",
"FR","فرنسا",
"PS","فلسطين",
"VE","فنزويلا",
"FI","فنلندا",
"VN","فيتنام",
"CY","قبرص",
"QA","قطر",
"CV","كاب فيردي",
"KZ","كازاخستان",
"NC","كاليدونيا الجديدة",
"HR","كرواتيا",
"KH","كمبوديا",
"CA","كندا",
"CU","كوبا",
"KR","كوريا الجنوبية",
"KP","كوريا الشمالية",
"CR","كوستا ريكا",
"CO","كولمبيا",
"KG","كيرجيستان",
"KI","كيريباتي",
"KE","كينيا",
"LV","لاتفيا",
"LA","لاوس",
"LB","لبنان",
"LU","لوكسمبرج",
"LY","ليبيا",
"LR","ليبيريا",
"LT","ليثوانيا",
"LS","ليسوثو",
"LI","ليشتنشتين",
"MQ","مارتينيك",
"MO","ماكاو",
"MW","مالاوي",
"MT","مالطة",
"ML","مالي",
"MY","ماليزيا",
"FM","مايكرونيسيا",
"YT","مايوت",
"MG","مدغشقر",
"EG","مصر",
"MK","مقدونيا",
"MR","موريتانيا",
"MZ","موزمبيق",
"MD","مولدوفا",
"MC","موناكو",
"MS","مونسرات",
"MN","مونغوليا",
"MM","ميانمار",
"NA","ناميبيا",
"NR","ناورو",
"NU","نوي",
"NG","نيجيريا",
"NI","نيكاراجوا",
"NZ","نيو زيلندا",
"HT","هايتي",
"NL","هولندا",
"HK","هونج كونج",
"WF","واليس وفوتونا",
"WA","ويلز",
"YU","يوغوسلافيا");

var advURL = "";
var advTitle = "";
var advImage = "";
var advURL2 = "";
var advTitle2 = "";
var advImage2 = "";
var advURL3 = "";
var advTitle3 = "";
var advImage3 = "";


var countrycodes =  new Array (
1,20,212,213,216,218,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,
236,237,238,239,240,241,242,243,244,245,248,249,250,251,252,253,254,255,256,257,258,
260,261,262,263,264,265,266,267,268,269,27,291,297,298,299,30,31,32,33,34,350,351,352,
353,354,355,356,357,358,359,36,370,371,372,373,374,375,376,377,378,380,381,382,385,386,387,
389,39,40,41,420,421,423,43,44,45,46,47,48,49,500,501,502,503,504,505,506,507,508,509,51,52,
53,54,55,56,57,58,590,591,592,593,594,595,596,597,598,599,60,61,62,63,64,65,66,670,672,673,674,
675,676,677,678,679,680,681,682,685,686,687,688,689,691,692,7,81,82,84,850,852,853,855,856,86,
880,882,886,90,91,92,93,94,95,960,961,962,963,964,965,966,967,968,970,971,972,973,974,975,976,
977,98,992,993,994,995,996,998);


var styles = new Array (
"classic",
"black" );

var stylenames = new Array (
"كلاسيكي",
"أسود");

var languages = new Array (
"ar",
"en" );

var languagenames = new Array (
"عربي",
"English");


var forums_confirm_leave_page = "الذهاب الى صفحة أخرى سيخسر النص الجديد الذي ادخلته\r\n\r\n هل أنت متأكد من رغبتك في الذهاب الى صفحة أخرى؟";
var forums_refresh_selector_0 = "لا تحديث";
var forums_refresh_selector_1 = "كل دقيقة";
var forums_refresh_selector_5 = "كل 5 دقائق";
var forums_refresh_selector_10 = "كل 10 دقائق";
var forums_refresh_selector_15 = "كل 15 دقيقة";
var forums_selector_pick = "-- إختار منتدى من القائمة --";
var forums_GMT = "GMT";
var forums_toplinks_tooltip_mainpage = "صفحة البداية";
var forums_toplinks_tooltip_archive = "الأرشيف";
var forums_toplinks_tooltip_yourposts = "مشاركاتك";
var forums_toplinks_tooltip_members = "الأعضاء";
var forums_toplinks_tooltip_monitoring = "المفضلة";
var forums_toplinks_tooltip_chat = "نقاش حي";
var forums_toplinks_tooltip_active = "مواضيع نشطة";
var forums_toplinks_tooltip_search = "إبحث";
var forums_toplinks_tooltip_help = "مساعدة";
var forums_toplinks_tooltip_yourdetails = "بياناتك";
var forums_toplinks_tooltip_register = "سجل نفسك كعضو!";
var forums_toplinks_tooltip_exit = "خروج";
var forums_windowtitle_your_posts = "مشاركاتك";
var forums_windowtitle_posts_of = "مشاركات ";
var forums_windowtitle_details_of = "تفاصيل العضو: ";
var forums_windowtitle_members = "قائمة الأعضاء";
var forums_toplinks_tooltip_mail = "الرسائل";
var forums_service = "خدمات المنتدى";
var forums_have_new_topic = "يوجد مشاركات جديدة";
var forums_have_not_topic = "لا يوجد مشاركات جديدة";
var forums_locked  = "المنتدى مقفل";
var forums__member_only  = " المنتدى مسموح للإعضاء فقط";

var forums_login_username = "الاسم:";
var forums_login_password = "الكلمة السرية:";
var forums_login_temp_login = "* دخول مؤقت *";
var forums_login_posts = "المشاركات:";
var forums_login_remember_me = "إحفظ التفاصيل في جهازك للزيارة التالية";
var forums_login_forgot_password = "هل نسيت الكلمة السرية؟ أضغط هنا..";

var forums_login_remember_title = "حفظ التفاصيل";
var forums_login_remember_all = "إحفظ إسمك وكلمتك السرية في هذا الجهاز";
var forums_login_remember_name = "إحفظ أسمك فقط في هذا الجهاز للزيارات القادمة";
var forums_login_remember_none = "دخول مؤقت - لن تحفظ تفاصيلك للزيارات القادمة";

var forums_online_chat1 = "صالات نقاش كووورة:";
var forums_online_chat2 = "صالات نقاش ستار تايمز:";
var forums_online_chat3 = "نقاش المشرفين";
var forums_online_chat6 = "نقاش المراقبين";
var forums_online_members = "الأعضاء في المنتديات:";

var forums_date_yesterday = "يوم أمس";
var forums_date_today = "اليوم";

var main_stats_title = "في الموقع الآن:";
var main_stats_members = "أعضاء:";
var main_stats_visitors = "زوار:";
var main_stats_mods = "مشرفون:";
var main_stats_max = "أكبر عدد في أي وقت:";
var main_tooltips_new = "توجد مشاركات جديدة منذ آخر زيارة لك في هذا المنتدى.";
var main_tooltips_locked = "هذا المنتدى مقفول ولا يمكنك المشاركة فيه.";

var main_site_program = "هذا الموقع يستخدم برنامج";

var main_table_topics = "مواضيع";
var main_table_replies = "ردود";
var main_table_members = "<a href=\"javascript:void(0);\"><img src=\"icon.php?m=group\" alt=\"أعضاء في المنتدى حاليا\" border=0></a>";
var main_table_lastpost = "آخر مشاركة";
var main_table_mods = "المشرفون";
var main_table_sups = "المراقبون";

var forum_view_all = "خيارات الإشراف: التصفح العادي";
var forum_view_unapproved = "خيارات الإشراف: مواضيع تنتظر الموافقة";
var forum_view_held = "خيارات الإشراف: مواضيع مجمدة ";
var forum_view_locked = "خيارات الإشراف: مواضيع مقفولة";
var forum_view_reply_unapproved = "خيارات الإشراف: ردود تنتظر الموافقة";
var forum_view_reply_held = "خيارات الإشراف: ردود مجمدة";
var forum_view_newsletter = "خيارات الإشراف: مواضيع للنشرة الاسبوع";
var forum_view_deleted = "خيارات الإدارة: مواضيع محذوفة";
var forum_view_reply_hidden = "خيارات الإشراف: ردود مخفية";
var forum_view_topic_hidden = "خيارات الإشراف: مواضيع مخفية";
var forum_view_toptopic = "خيارات الإشراف: مواضيع مميزة";
var forum_view_noarchive = "خيارات الإشراف: مواضيع لا تنتقل للأرشيف";
var forum_view_surveys = "خيارات الإشراف: مواضيع مربوطة بإستفتاءات";
var forum_view_moved = "خيارات الإشراف: مواضيع منقولة";
var forum_view_edited = "خيارات الإشراف: مواضيع تم تغيير نصها";
var forum_view_unpinned = "خيارات الإشراف: مواضيع كانت مثبتة سابقا";
var forum_view_open = "خيارات الإشراف: مواضيع غير مقفولة";

var forum_table_forum = "المنتدى";
var forum_table_topic = "الموضوع";
var forum_table_topics = "المواضيع";
var forum_table_author = "الكاتب";
var forum_table_replies = "الردود";
var forum_table_read = "قرأت";
var forum_table_lastauthor = "كاتب الرد";
var forum_table_lastreply = "آخر رد";
var forum_table_options = "الخيارات";

var topic_tooltips_new = "توجد مشاركات جديدة منذ آخر زيارة لك في هذا الموضوع.";
var topic_tooltips_hot = "هذا الموضوع نشط.";
var topic_tooltips_locked = "هذا الموضوع مقفول ولا يمكنك الرد عليه.";
var topic_tooltips_archived = "هذا الموضوع في الأرشيف.";
var topic_tooltips_unapproved = "الموضوع ينتظر الموافقة.";
var topic_tooltips_held = "الموضوع مجمد.";
var topic_tooltips_survey = "الموضوع يحتوي على استفتاء";
var topic_tooltips_toptopic = "هذا الموضوع متميز";
var topic_tooltips_archiveable = "هذا الموضوع في قائمة النقل للأرشيف";
var topic_tooltips_expand = "عرض المشاركة بالكامل";
var topic_tooltips_contract = "تصغير عرض المشاركة ";
var topic_tooltips_expand_all = "عرض جميع المشاركات بالكامل";
var topic_tooltips_contract_all = "تصغير عرض جميع المشاركات ";
var topic_tooltips_select_user = "وضع علامة الإختيار على جميع مشاركات هذا العضو في هذه الصفحة";

var forum_toolbar_new_topic = "موضوع جديد";
var forum_toolbar_page_size = "حجم الصفحة:";
var forum_toolbar_sort_by = "الترتيب بتاريخ:";
var forum_toolbar_sort_by_last_post = "آخر مشاركة";
var forum_toolbar_sort_by_topic = "الموضوع";
var forum_toolbar_refresh_title = "تحديث الصفحة:";
var forum_moderated_by = "بإشراف";
var forum_toolbar_msg_to_mods = "أرسل رسالة <br>لمشرفي<br>هذا المنتدى";
var forum_toolbar_forum_mail = "بريد <br>المنتدى";
var forum_toolbar_forum_mail2 = "بريد";
var forum_toolbar_forum_notify = "شكاوي<br>المنتدى";
var forum_toolbar_forum_notify2 = "شكاوي";

var forum_mod_selectall = "إختار كل<br>المواضيع";
var forum_mod_selectpending = "إختار المواضيع التي<br>تنتظر الموافقة فقط";
var forum_mod_selectheld = "إختار المواضيع<br>المجمدة فقط";
var forum_mod_selectnone = "ألغي كل<br>الاختيارات";
var forum_mod_approve_selected = "وافق على<br>المواضيع المختارة";
var forum_mod_hold_selected = "جمّد المواضيع<br>المختارة";

var forum_no_topics_found = "لا توجد أية مواضيع مطابقة لخيارات التصفح."
	+ "<br><br>"
	+ "الرجاء تغيير خيارات التصفح أعلاه أو اختيار منتدى آخر.";

var msg_no_pending_or_held_selected = "ليست هناك أي مواضيع تنتظر المواضيع  أو مجمدة تم اختيارها";
var msg_no_pending_selected = "ليست هناك أي مواضيع تنتظر المواضيع تم اختيارها"
var msg_confirm_approve = "الرجاء تأكيد الموافقة على المواضيع المختارة التالية";
var msg_confirm_hold = "الرجاء تأكيد تجميد المواضيع المختارة التالية";
var msg_reconfirm_hold = "هل أنت متأكد أنك تريد تجميد المواضيع المختارة التالية؟";
var msg_confirm_approve_single = "الرجاء تأكيد الموافقة على الموضوع";
var msg_confirm_delete_topic = "الرجاء تأكيد حذف الموضوع";
var msg_reconfirm_delete_topic = "الرجاء إعادة تأكيد حذف الموضوع";
var msg_confirm_lock_topic = "الرجاء تأكيد قفل الموضوع";
var msg_confirm_unlock_topic = "الرجاء تأكيد إعادة فتح الموضوع";
var msg_confirm_approve_reply = "الرجاء تأكيد الموافقة على الرد";
var msg_confirm_hold_reply = "الرجاء تأكيد تجميد الرد ";
var msg_reconfirm_hold_reply = "الرجاء إعادة تأكيد تجميد الرد";
var msg_confirm_hide_post = "الرجاء تأكيد إخفاء المشاركة ";
var msg_reconfirm_hide_post = "الرجاء إعادة تأكيد إخفاء المشاركة";
var msg_confirm_unhide_post = "الرجاء تأكيد إظهار المشاركة ";
var msg_reconfirm_unhide_post = "الرجاء إعادة تأكيد إظهار المشاركة";
var msg_confirm_delete_reply = "الرجاء تأكيد حذف الرد";
var msg_reconfirm_delete_reply = "الرجاء إعادة تأكيد حذف الرد";
var msg_ = "";
var member_is_online_now = "العضو متصل حاليا";
var page_selector_title = "الصفحة:";
var page_selector_of = " من ";

var switchforum_selector_title = "إذهب الى منتدى:";

var leveltitles = new Array (
	"عضو جديد",
	"عضو مبتدئ",
	"عضو",
	"عضو نشط",
	"عضو متطور",
	"عضو أساسي" );

var title_mod = "مشرف";
var title_admin = "مدير الموقع";

var leveltitlesF = new Array (
	"عضوة جديدة",
	"عضوة مبتدئة",
	"عضوة",
	"عضوة نشطة",
	"عضوة متطورة",
	"عضوة أساسية" );

var title_modF = "مشرفة";


var topic_posts = "المشاركات:";
var topic_notice_deleted = "** هذه المشاركة تم إزالتها  -- للإستفسار عن السبب الرجاء الإتصال بمشرف المنتدى **";
var topic_notice_held = "** هذه المشاركة مجمدة حتى إشعار آخر -- للإستفسار عن سبب التجميد الرجاء الإتصال بمشرف المنتدى **";
var topic_notice_unapproved = "** هذه المشاركة لم يتم مراجعتها والموافقة عليها بواسطة مشرف المنتدى حتى الآن **";
var topic_notice_hidden = "** هذه المشاركة تم إخفائها  -- للإستفسار عن السبب الرجاء الإتصال بمشرف المنتدى **";
var topic_notice_deleted2 = "** مشاركة محذوفة **";
var topic_toolbar_add_reply = "أضف رد";
var topic_toolbar_send_to_friend = "أرسل";
var topic_toolbar_monitor_topic = "المفضلة";
var topic_toolbar_print = "طباعة";
var topic_toolbar_page_size = "حجم الصفحة:";
var topic_toolbar_page_size_replies = "رد";
var topic_toolbar_hide_sigs_title = "التواقيع";
var topic_toolbar_hide_sigs_hide = "مخفيّة";
var topic_toolbar_hide_sigs_show = "ظاهرة";
var topic_showing_single_reply = "يعرض حاليا رد معين من الموضوع - لمشاهدة الموضوع بالكامل إضغط هنا";
var topic_showing_member_replies = "يعرض حاليا ردود عضو معين فقط في الموضوع - لمشاهدة الموضوع بالكامل إضغط هنا";

var tip_lock_topic = "أقفل الموضوع";
var tip_unlock_topic = "إفتح الموضوع";
var tip_pin_topic = "ثبّث الموضوع";
var tip_unpin_topic = "إزل التثبيت عن الموضوع";
var tip_topic_properties = "غير خصائص الموضوع";
var tip_edit_text = "غير النص";
var tip_delete_topic = "إحذف الموضوع";
var tip_undelete_topic = "أعد الموضوع وجميع ردوده من الحذف";
var tip_reply = "رد على الموضوع";
var tip_approve_topic = "وافق على الموضوع";
var tip_hold_topic = "جمّد الموضوع";
var tip_approve_reply = "وافق على الرد";
var tip_hold_reply = "جمّد الرد";
var tip_notify = "لفت انتباه المشرف الى هذه المشاركة";
var tip_hide_post = "إخفاء المشاركة";
var tip_unhide_post = "إظهار المشاركة";
var tip_privatetopics = "قائمة الأعضاء المخولون برؤية هذا الموضوع المخفي";

var tip_reply_with_quote = "رد على الموضوع بإضافة نص هذه المشاركة";
var tip_member_info = "معلومات عن العضو";
var tip_email_member = "أرسل أيميل لهذا العضو";
var tip_mail_member = "أرسل رسالة خاصة لهذا العضو";
var tip_mail_member_from_mod = "أرسل رسالة خاصة لهذا العضو عن طريق بريد الإشراف";
var tip_topic_stats = "إحصائيات ردود الأعضاء في هذا الموضوع";
var tip_mail_member_mails = "مراسلاتك مع هذا العضو";
var tip_delete_reply = "أحذف الرد";
var tip_undelete_reply = "أرجع الرد من الحذف";
var tip_new_topic = "أضف موضوع جديد";
var forums_windowtitle_liks_of = "المعجبون بالصفحة";
var tip_send_to_friend = "أرسل الموضوع الى صديق";
var tip_monitor_topic = "أضف هذا الموضوع لقائمة مواضيعك المفضلة";
var tip_printer_friendly = "جهز الموضوع للطباعة";
var tip_remove_monitor = "أزل هذا الموضوع من قائمة مواضيعك المفضلة";
var tip_ = "";

var topic_not_found = "<font size=+2>الموضوع المطلوب غير متوفر.</font><br><br>"
	+ "قد يكون هناك عدة إسباب لهذا منها:<br><br>"
	+ "<table><tr><td>* رقم الموضوع المطلوب غير صحيح. </td></tr>"
	+ "<tr><td>* الموضوع لم تتم الموافقة عليه للآن من قبل طاقم الإشراف. </td></tr>"
	+ "<tr><td>* الموضوع تم تجميده أو حذفه أو إخفاؤه. </td></tr>"
	+ "<tr><td>* المنتدى الذي فيه الموضوع لا يسمح لك بالدخول اليه. </td></tr>"
	+ "</td></tr></table>";

var survey_choice = "الخيار";
var survey_votes_count = "عدد الأصوات";
var survey_percentage = "النسبة";
var survey_total_votes = "إجمالي الأصوات";
var survey_only_members_can_vote = "ملاحظة: لا يسمح بالتصويت الا للأعضاء.";
var survey_already_voted_can_change = "ملاحظة: انت قمت بالتصويت سابقا وخيارك يظهر بلون مختلف أعلاه. <br>لتغيير خيارك اضغط على خيار آخر.";
var survey_closed = "ملاحظة: تم إغلاق هذا الاستفتاء.";
var survey_click_to_vote = "ملاحظة: للتصويت إضغط على أحد الخيارات أعلاه.";
var survey_only_certain_members = "لا يسمح للتصويت في هذا الاستفتاء<br> إلا للأعضاء المطابقون للمواصفات التالية:";
var survey_only_certain_members_posts = "المشاركات";
var survey_only_certain_members_days = "الأيام منذ تسجيل العضو";
var survey_min_limit = "العدد الإدنى";
var survey_current = "العدد الحالي";
var survey_secret = "- سرّي -";
var survey_waiting = "ملاحظة: لم يتم فتح التصويت لهذا الإستفتاء حتى الآن.";

var edited_a = "تمت الموافقة على المشاركة بواسطة ";
var edited_h = "تم تجميد المشاركة بواسطة ";
var edited_u = "تم إعادة فتح الموضوع بواسطة ";
var edited_l = "تم قفل الموضوع بواسطة ";
var edited_e = "تم تغيير النص بواسطة ";
var edited_d = "تم حذف المشاركة بواسطة ";
var edited_m = "تم نقل الموضوع بواسطة ";
var edited_i = "تم إخفاء المشاركة بواسطة ";
var edited_v = "تم إزالة إخفاء المشاركة بواسطة ";
var edited_p = "تم تثبيت الموضوع بواسطة ";
var edited_x = "تم إزالة تثبيت الموضوع بواسطة ";
var edited_f = "آخر تغيير للنص بواسطة ";
var edited_count = "عدد مرات تغيير النص";

var nav_prev_page = "الصفحة السابقة";
var nav_next_page = "الصفحة التالية";
var nav_first_page = "الصفحة الأولى";
var nav_last_page = "الصفحة الأخيرة";

var editmember_member_edit = "تغيير بيانات العضو";
var editmember_edit = "تغيير بياناتك";
var editmember_please_update = "الرجاء منك تحديث بياناتك من وقت لآخر";

var editmember_edit_main1 = "خيارات وبيانات عضويتك";
var editmember_edit_main2 = "الرجاء منك إختيار أحد الأدوات أدناه";
var editmember_edit_menu1 = "تغيير بريدك الإلكتروني أو كلمتك السرية";
var editmember_edit_menu2 = "تغيير بياناتك الشخصية وخيارات العضوية";
var editmember_edit_menu3 = "تغيير توقيعك الذي يظهر في أسفل مشاركاتك";
var editmember_edit_menu4 = "تفاصيل الأوسمة الممنوحة لك وتغيير وسامك الحالي";
var editmember_edit_menu5 = "قوائم الأعضاء الخاصة بك";
var editmember_edit_menu6 = "طلب تغيير إسم العضوية";
var editmember_edit_menu7 = "المواضيع المخفية المفتوحة لك";

var member_name = "الاسم";
var member_user_Num = "رقم العضوية";
var member_posts = "عدد المشاركات";
var member_points = "نقاط التميز";
var member_level = "المستوى";
var member_monitor = "المراقبة";
var member_email = "البريد الإلكتروني";
var member_pass0 = "الكلمة السرية الحالية";
var member_pass1 = "الكلمة السرية الجديدة";
var member_pass = "الكلمة السرية";
var member_pass2 = "تأكيد الكلمة السرية";
var member_city = "المدينة";
var member_state = "المنطقة";
var member_country = "الدولة";
var member_occupation = "المهنة";
var member_marstatus = "الحالة الإجتماعية";
var member_age = "العمر";
var member_title = "الوصف";
var member_male = "ذكر";
var member_female = "أنثى";
var member_unspecified = "غير محدد";
var member_sex = "الجنس";
var member_email_allow = "بريدك الإلكتروني";
var member_like_this = "الإعجاب بالصفحة";
var member_re_pho = "صورتي الرسمية";
var member_email_allow_no = "لا يسمح للأعضاء بإرسال بريد إلكتروني إليك";
var member_email_allow_yes = "يمكن للأعضاء أن يرسلوا لك بريد إلكتروني";
var member_browse_visible = "تصفحك في المنتديات";
var member_browse_visible_no = "تصفحك مخفي عن الأعضاء";
var member_browse_visible_yes = "تصفحك يظهر للأعضاء";
var member_browse  = "برنامج المتصفح الحالي";
var member_signature = "التوقيع";
var member_click_to_edit_signature = "-- إضغط هنا لتغيير توقيعك  الذي يظهر في نهاية كل مشاركاتك --";
var member_photo = "عنوان صورتك على الأنترنت";
var member_homepage = "صفحتك الشخصية على الإنترنت";
var member_link1 = "وصلة تقترحها";
var member_link2 = "وصلة تقترحها";
var member_quote = "إقتباس أو <br>مقولة مفضلة";
var member_bio = "سيرتك الذاتية";
var member_hobbies = "هواياتك";
var member_news = "آخر أخبارك";
var member_ip = "أي بي العضو";
var member_last_ip = "أخر أي بي العضو";
var member_last_ip_contry = "دولة العضو من خلال الأي بي";
var member_msgs_allow_no = "لا يسمح للأعضاء بإرسال رسائل خاصة إليك"
//	+ "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size=-1 color=red>ما عدا الأعضاء في قائمة الأصدقاء الخاصة بك"
	;

var member_msgs_allow_yes = "يمكن للأعضاء أن يرسلوا لك رسائل خاصة"
//	+ "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size=-1 color=red>ما عدا الأعضاء في قائمة الممنوعين الخاصة بك"
	;

var req_enter_changes = "أدخل التغييرات";
var req_cancel_changes = "إلغاء التغييرات";
var req_return = "إرجع";
var req_highlight_note = "ملاحظة: الخيارات التي تم تغييرها تظهر باللون الأحمر";

var member_info_title = "تفاصيل العضو";
var member_info_photo = "صورتي الشخصية";
var member_info_click_to_expand = "إضغط على الصورة لتكبيرها";
var member_info_contacts = "طرق الإتصال بي";
var member_info_click_to_email = "-- إضغط هنا لإرسال بريد إلكتروني للعضو --";
var member_info_click_to_mail = "-- إضغط هنا لإرسال رسالة خاصة للعضو --";
var member_info_not_available = "-- غير متوفر --";
var member_info_stats = "إحصائيات";
var member_info_last_visit = "آخر زيارة";
var member_info_reg_date = "تاريخ التسجيل";
var member_info_visits = "عدد الزيارات";
var member_info_hits = "عدد التصفح";
var member_info_last_posts = "آخر المواضيع التي شارك فيها العضو";
var member_info_last_posts_click = "إضغط هنا لمشاهدة مشاركات العضو";
var member_info_details = "البيانات الكاملة";
var member_info_address = "العنوان";
var member_info_other_info = "معلومات إضافية";
var member_info_bio = "السيرة الذاتية";
var member_info_hobbies = "هوايات";
var member_info_news = "آخر الأخبار";
var member_info_quote = "إقتباسي المفضل";
var member_info_links_title = "وصلاتي المفضلة";
var member_info_links = "وصلات اقترحها";
var member_info_homepage = "صفحتي على الإنترنت";
var member_info_plaques = "أوسمة التميز الممنوحة للعضو";
var member_info_nominate = "رشح العضو<br>لوسام تميز";
var member_info_name_real = "الإسم الحقيقي";
var member_info_ = "";

var send_mail_to = "أرسال بريد إلكتروني الى العضو";
var send_mail_enter_text = "الرجاء إدخال نص الرسالة التي تود إرسالها أدناه"
var send_mail_send = "أرسل النص";

var active_mode_toptopics = "المواضيع المتميزة";
var active_mode_monitored = "قائمة مواضيعك المفضلة";
var active_mode_active = "المواضيع النشطة";
var active_mode_private = "المواضيع المخفية المفتوحة لك";
var active_toolbar_show = "خيار عرض المواضيع";
var active_type_active = "آخر المشاركات في كل المواضيع";
var active_type_active_by_replies = "آخر المواضيع النشطة بعدد الردود";
var active_type_active_by_reads = "آخر المواضيع النشطة بعدد مرات القراءة";
var active_type_toptopics = "المواضيع المتميزة على المنتديات";
var active_type_monitored = "قائمة مواضيعك المفضلة";
var active_type_private = "المواضيع المخفية المفتوحة لك";

var active_none_monitored = "لا توجد أية مواضيع  في مفضلتك حاليا.<br><br>لإضافة موضوع لقائمة مواضيعك المفضلة إستخدم الأيقونة الخاصة بذلك في صفحة<br><br>الموضوع المراد إضافته للقائمة.";
var active_none_private = "لا توجد أية مواضيع  مخفية مفتوحة لك حاليا.<br><br>هذه القائمة لا يمكن الإضافة لها إلا بواسطة المشرفين.";
var active_none_all = "لا توجد أية مواضيع لهذا الخيار.";

var tellfriend_header = "إخبار صديق عن موضوع";
var tellfriend_intro = "لإخبار صديق لك عن الموضوع <br>أدخل بريده الإلكتروني<br>وثم إضغط على الزر أدناه";
var tellfriend_send = "أرسل الموضوع";

var request_pass_intro = "لإسترجاع كلمة السر المفقودة <br>أدخل إسمك المسجل في المنتديات<br>وثم إضغط على الزر أدناه";
var request_pass_note = "ملاحظة: يجب ان يكون الاسم مطابقا لسجلاتنا تماما";
var request_pass_submit = "إطلب كلمة السر";

var summary_header_forum = "المنتدى";
var summary_header_tp = "مواضيع تنتظر الموافقة";
var summary_header_th = "مواضيع مجمدة";
var summary_header_rp = "ردود تنتظر الموافقة";
var summary_header_rh = "ردود مجمدة";
var summary_header_ri = "ردود مخفية";
var summary_header_ti = "مواضيع مخفية";
var summary_title = "ملخص المنتديات التي تشرف عليها";
var summary_footer1 = "المنتديات التي تظهر باللون التالي";
var summary_footer2 = "تحتوي على مواضيع تنتظر الموافقة";
var summary_footer3 = "للذهاب مباشرة الى صفحة المواضيع التي تنتظر الموافقة أو المجمدة في أي منتدى.";
var summary_footer4 = "إضغط على رقم المواضيع من الجدول أعلاه.";
var summary_none = "لا توجد أية مواضيع تنتظر الموافقة أو مجمدة."
		+ "<br><br>" + "في المنتديات التي تشرف عليها.";

var tooltip_quote_content  = "إنسخ نص هذه المشاركة الى منطقة إدخال النص";
var quote_title_author = "إقتباس لمشاركة";
var quote_title_topic = "في موضوع";

var topicreview_title = "إستعراض موضوع";
 

var rules1 = new Array (
"كلام بذيء أو مشين",
"هجوم مباشر أو غير مباشر على شخص أو عضو أو مؤسسة",
"صور غير لائقة من أي نوع",
"كلام يشجع على الحقد والكراهية",
"نص كامل من مصدر يبدو انه عليه حقوق نشر بدون ذكر المصدر",
"شرح لعملية اختراق سواء لأجهزة كمبيوتر أو خدمات تلفزيونية أو غيرها",
"الإعلان بشكل مباشر أو غير مباشر عن منتديات أو مواقع منافسة خارج منتدى الإشهار المخصص لذلك",
"اي نشاط إجرامي من أي نوع");


var rules_notes = "والرجاء ملاحظة التالي";

var rules2 = new Array (
"الموقع ومدير الموقع ومشرفو الموقع غير مسئولون عن أية معلومات توفرها\
 وأية مشاركات تقوم بها.",
"أي مشاركات تقوم بها في هذه المنتديات تصبح معلومات عامة فنرجو منك عدم\
 الادلاء بأية معلومات سرية أو خاصة بك في مشاركاتك.",
"هذه المنتديات قد تحتوي على وصلات الى مواقع أخرى ومشاركات من أفراد\
 والموقع غير مسئول عن محتويات المشاركات والوصلات.  اذا وجدت أي مشاركة\
 أو وصلة تحتوي على كلام بذيء أو غير مقبول الرجاء اخبارنا فورا وسنقوم\
 بحذف هذه المشاركات من المنتدى حالا.",
"لمدير الموقع ومشرفوه الحق في إزالة أي مشاركة أو طرد أي عضو بدون سابق إنذار.");

 


var edittopic_title = "تغيير خصائص الموضوع";
var edittopic_header_title = "عنوان الموضوع";
var edittopic_header_survey = "الاستفتاء";
var edittopic_header_forum = "المنتدى";
var edittopic_header_pin = "تثبيت الموضوع";
var edittopic_header_newsletter = "النشرة البريدية";
var edittopic_header_hot = "شريط المواضيع";
var edittopic_header_links = "وصلات المنتدى";
var edittopic_header_top = "التميز";
var edittopic_header_allowarchive = "الأرشيف";
var edittopic_allowarchive_yes = "يمكن نقله للأرشيف";
var edittopic_allowarchive_no = "لا يمكن نقله للأرشيف";
var edittopic_nosurvey = "** لا إستفتاء لهذا الموضوع **";
var edittopic_newsletter_no = "لا يظهر";
var edittopic_newsletter_yes = "يظهر في النشرة التالية";
var edittopic_hot_no = "لا يظهر";
var edittopic_hot_forum = "يظهر في المنتدى";
var edittopic_hot_main = "يظهر في  صفحة البداية";
var edittopic_link_no = "لا يظهر";
var edittopic_link_normal = "وصلة عادية";
var edittopic_link_priority = "وصلة أساسية";
var edittopic_pin_no = "غير مثبت";
var edittopic_pin_yes = "الموضوع مثبت";
var edittopic_top_no = "غير متميّز";
var edittopic_top_forum = "متميّز على المنتدى";
var edittopic_top_main = "متميّز على كل المنتديات";

var files_title = "حافظة ملفاتك";
var files_header_fname = "اسم الملف";
var files_header_size = "حجم الملف";
var files_header_date = "تاريخ التحميل";
var files_none = "لا توجد أية ملفات في حافظتك."
		+ "<br><br>"
		+ "لتحميل ملفات الى حافظتك استخدم ميزة التحميل أدناه.";
var files_select_file = "إختار ملف من جهازك للتحميل الى حافظتك:";
var files_file_title = "إسم الملف في حافظتك:";
var files_upload = "إبدا تحميل الملف";
var files_delete = "إحذف هذا الملف من حافظتك";

var files_upl_name = "طلب تحميل الملف تحت إسم: ";
var files_upl_invalid_name = "الاسم المطلوب غير قانوني.";
var files_upl_write_failed = "لم يتم تحميل الملف لسبب فني.  الرجاء الاتصال بالادارة.";
var files_upl_no_filename = "الرجاء تحديد اسم للملف في حافظتك.";
var files_upl_saved_ok = "تم تحميل الملف بنجاح!";
var files_confirm_delete = "هل أنت متأكد أنك تريد حذف هذا الملف من حافظتك؟";
var files_remaining = "المساحة المتبقية لك للتخزين";
var files_full = "لم تبقى لك اي مساحة للتخزين.  الرجاء حذف بعض الملفات اذا رغبت بتحميل ملفات أخرى.";
var files_notes = "الموقع لا يتحمل مسؤولية الملفات التي تقوم بتحميلها وقد يتم ازالتها في أي وقت.";

var notify_title_member = "لفت إنتباه المشرف عن مشاركة العضو";
var notify_title_topic = "في موضوع";
var notify_enter_text = "الرجاء إدخال ملاحظاتك بخصوص هذه المشاركة<br>للمشرف وسيتم متابعتها بأسرع وقت ممكن"
var notify_send = "أرسل ملاحظاتك";

var notify_opt0 = "لتسهيل مهمة المشرف الرجاء تحديد نوع البلاغ من هذه القائمة:";
var notify_opt1 = "المشاركة تحتوي على صور غير لائقة";
var notify_opt2 = "المشاركة تحتوي على كلام غير لائق";
var notify_opt3 = "المشاركة تحتوي على شتم او تهجم";
var notify_opt99 = "ملاحظات أخرى (الرجاء التوضيح أدناه)";

var notify_opt1s = "صور غير لائقة";
var notify_opt2s = "كلام غير لائق";
var notify_opt3s = "شتم او تهجم";
var notify_opt99s = "ملاحظات أخرى";

var summary_header_np = "شكاوي تنتظر المراجعة";
var summary_header_nh = "شكاوي تم ترحيلها للمدير";
var summary_header_mail = "رسائل إشرافية جديدة";
var summary_notify_none = "لا توجد أية شكاوي أو رسائل جديدة في المنتديات التي تشرف عليها.";

var notifylist_table_topic = "المنتدى والموضوع";
var notifylist_table_about = "شكوى على";
var notifylist_table_by = "كاتب الشكوى";
var notifylist_table_text = "نص الشكوى";
var notifylist_table_reply_by = "رد عليها";
var notifylist_table_note_by = "آخر ملاحظة";
var notifylist_table_transfer_by = "حوّلها للمدير";
var notifylist_table_reply_text = "نص الرد";
var notifylist_table_notes = "ملاحظات";
var notifylist_title = "شكاوي الأعضاء";

var notify_status_new = "شكاوي لم يتم الرد عليها.";
var notify_status_admin = "شكاوي تم ترحيلها للمدير.";
var notify_status_done = "شكاوي تم الرد عليها.";

var notifyreply_send_reply = "أرسل الرد للعضو";
var notifyreply_send_admin = "حوّل الشكوى للمدير";
var notifyreply_store_only = "إدخال الملاحظات فقط";
var notifyreply_close_it = "أقفل الشكوى";
var notifyreply_title = "شكوى رقم: ";
var notifyreply_none = "الشكوى المطلوبة ليست متوفرة أو انها من منتدى انت لست مشرفا عليه.";
var notifyreply_reply_to_member_textarea = "نص الرد على العضو";
var notifyreply_notes_textarea = "ملاحظات للمشرفين والإدارة فقط<br>(يتم اضافتها للملاحظات الحالية)";

var mail_title = "الرسائل الخاصة";
var mail_inbox = "البريد الوارد";
var mail_outbox = "البريد الصادر";
var mail_trash = "مجلد المحذوفات";
var mail_inbox_new = "الرسائل الواردة الجديدة";
var mail_newmsg = "رسالة جديدة";
var mail_folder = "مجلداتك";
var mail_emptybox = "لا توجد أيه رسائل في هذا المجلد";
var mail_tooltip_reply = "رد على الرسالة";
var mail_tooltip_delete = "حذف الرسالة";
var mail_from = "من";
var mail_to = "إلى";
var mail_subject = "عنوان الرسالة";
var mail_date = "التاريخ";
var mail_1_new_msg = "توجد رسالة جديدة لك";
var mail_2_new_msgs = "توجد رسالتان جديدتان  لك";
var mail_new_msgs_A = "توجد ";
var mail_new_msgs_B = "رسائل جديدة لك";
var mail_new_msgs_B11 = "رسالة جديدة لك";
var mail_msg_header = "رسالة خاصة";
var mail_confirm_delete_msg = "الرجاء تأكيد حذف الرسالة";
var mail_confirm_undelete_msg = "الرجاء تأكيد أعادة الرسالة الى مجلدها الأصلي";
var mail_size = "الحجم";
var mail_your_folders = "مجلداتك<br>البريدية";
var mail_editfolders_submit = "أدخل التغييرات على مجلداتك البريدية"
var mail_editfolders_notes = "<font color=red size=+1>ملاحظة:</font><br> لحذف أي مجلد إترك إسمه فارغا. <br>سيتم نقل اي رسائل في ذلك المجلد الى مجلد البريد الوارد أو الصادر";
var mail_editfolders_header = "<font color=red size=+1>مجلداتك البريدية</font><br>" + "لإضافة مجلدات بريدية خاصة بك لحفظ الرسائل فيها " + "<br>" + "أدخل عنواين للمجلدات في الخانات أدناه";
var mail_editfolders_number = "رقم المجلد";
var mail_editfolders_title = "عنوان المجلد";
var mail_movetofolder_defselect = "-- إختار مجلد --";
var mail_movetofolder_submit = "أنقل الرسالة الى المجلد المختار";
var mail_replied = "تم الرد عليها";
var mail_thread = "الرسائل المتعلقة";
var mail_threadlink = "هناك رسائل متعلقة بهذه الرسالة -- إضغط هنا لمشاهدتها";
var mail_threadlink0 = "هناك رسائل متعلقة بهذه الرسالة: ";
var mail_threadlink1 = "قائمة الرسائل المتعلقة";
var mail_threadlink2 = "قراءة جميع الرسائل المتعلقة";
var mail_delete = "أنقل الرسالة الى مجلد المحذوفات";
var mail_undelete = "إرجع الرسالة الى مجلدها الأصلى";
var mail_quote_msg  = "إنسخ نص هذه الرسالة الى منطقة إدخال النص";
var mail_quote_title_author = "رسالة من";
var mail_quote_title_topic = "بعنوان";
var mail_announcement = "إعلان من إدارة المنتديات";


var list_your_folders = "قوائمك<br>الخاصة";
var list_your_folders_arm = "قوائم<br>الأعضاء";
var list_title = "قوائم الأعضاء الخاصة بك";
var list_title_arm = "قوائم الأعضاء الخاصة بالمنتدى";
var mail_header_member = "العضو";

var list_friends_header = "<font color=red size=+1>قائمة الأصدقاء</font><br>"
	+ "هذه القائمة تحتوي على أعضاء تعتبرهم أصدقاء لك وتهتم بمشاركاتكم."
	+ "<br>"
	+ "لإضافة صديق لهذه القائمة إذهب الى صفحة بياناته وإضغط على وصلة إضافته لقوائمك الخاصة.";

var list_banned_header = "<font color=red size=+1>قائمة الممنوعين</font><br>"
	+ "لمنع عضو من إرسال رسائل خاصة لك أضفه لهذه القائمة بالذهاب لصفحة بياناته وإضغط على وصلة منعه من إرسال رسائل خاصة لك";

var list_custom_header = "لإضافة عضو لهذه القائمة إذهب الى صفحة بياناته وإضغط على وصلة إضافته لقوائمك الخاصة.";

var list_empty = "لا يوجد أية أعضاء في هذه القائمة حاليا.";

var lists_edit_submit = "أدخل التغييرات على قوائمك";
var lists_edit_notes = "<font color=red size=+1>ملاحظة:</font><br>لحذف أي قائمة أترك إسمها فارغا.";
var lists_edit_header = "<font color=red size=+1>قوائم الأعضاء الخاصة بك</font><br>"
	+ "لإضافة قوائم أعضاء خاصة بك"
	+ "<br>" + "أدخل عنواين لكل قائمة في الخانات أدناه";

var lists_edit_header_arm = "<font color=red size=+1>قوائم الأعضاء الخاصة بهذا المنتدى</font><br>"
	+ "لإضافة قوائم أعضاء خاصة بالمنتدى"
	+ "<br>" + "أدخل عنواين لكل قائمة في الخانات أدناه";

var lists_edit_number = "رقم القائمة";
var lists_edit_title = "عنوان القائمة";
var list_confirm_delete_item = "الرجاء تأكيد حذف العضو من هذه القائمة";
var list_delete_item = "أحذف هذا العضو من هذه القائمة";

var list_add_locked = "لم يتم إضافة العضو للقائمة لأن عضويته مقفولة حاليا";
var list_add_notfound = "لم يتم إضافة العضو للقائمة لأن رقم العضوية المطلوب غير صحيح";
var list_add_failed = "لم يتم إضافة العضو للقائمة  بسبب خلل فني - الرجاء المحاولة مرة أخرى";
var list_add_exists = "لم يتم إضافة العضو للقائمة  لأنه موجود في القائمة حاليا";
var list_add_cannot_add_self = "لا يسمح لك بإضافة نفسك لهذه القائمة";
var list_add_full = "لا يمكنك إضافة أعضاء لهذه القائمة لأنها وصلت لحد تخزينها."
	+ "<br>"
	+ "لإضافة هذا العضو للقائمة الرجاء إزالة أعضاء منها أولا.";

var lists_add_header = "<font color=red size=+1>إضافة عضو لقوائمك الخاصة</font><br>";
var lists_add_header_member = "العضو الذي سيتم إضافته";
var lists_add_header_list = "القائمة التي تريد إضافة العضو لها";
var lists_add_submit = "أضف العضو للقائمة المختارة";
var lists_menus_add = "أضف قائمة هنا";

var online_now = "متصل الآن";
 
var topicPdf   = 'موضوع pdf';
var TitleTopicPdf   = 'طباعة الموضوع على شكل ملف pdf';

var TitleFb   = 'شارك الموضوع مع أصدقائك';
 
 
var rules_header1 = "لتشارك في منتديات نت العربي يجب عليك الإلتزام بالشروط التالية:";
var rules_header2 = "نحن نقبل في المنتديات أغلبية المشاركات الا التي تحتوي على";
var rules_contact = "اذا كان لديك أي استفسار الرجاء ارسال بريد الكتروني الى :\
<a href=\"mailto:bellib@hotmail.fr\">bellib@hotmail.fr</a>";

var rules_title = "شروط المشاركة في "+" منتديات نت العربي";
