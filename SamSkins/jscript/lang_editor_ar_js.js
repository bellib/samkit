var fontsList = new Array (
	"Arabic Transparent",1,"بسيط",
	"Arial",1,"آريال",
	"Akhbar MT",1,"أخبار",
	"Andalus",1,"أندلس",
	"Bold Italic Art",1,"فني ثقيل",
	"DecoType Naskh",1,"نسخ",
	"Diwani Letter",1,"ديواني",
	"Diwani Outline Shaded",1,"ديواني مظلل",
	"Diwani Simple Striped",1,"ديواني مخطط",
	"Monotype Kufi",1,"كوفي",
	"Kufi Extended Outline",1,"كوفي كبير",
	"Mudir MT",1,"مدير",
	"Old Antic Bold",1,"أنتيك",
	"Simple Indust Shaded",1,"صناعي",
	"DecoType Thuluth",1,"ثلث",
	"Arial Black",0,"Arial",
	"Arial Narrow",0,"Narrow",
	"Comic Sans MS",0,"Comic",
	"Courier New",0,"Courier",
	"Tahoma",0,"",
	"Times New Roman",0,"Times",
	"Verdana",0,"",
	"Wingdings",1,""
	);

var smiliesPaths = new Array (
	"icon_smile",
	"smilies/animals/",
	"smilies/faces/",
	"smilies/faces/",
	"smilies/faces/",
	"smilies/faces/",
	"smilies/faces/",
	"smilies/food/",
	"smilies/objects/",
	"smilies/people/",
	"smilies/people/",
	"smilies/sports/",
	"smilies/planets/"
	);

var smiliesWidths = new Array (
	3,
	3,
	3,
	3,
	3,
	3,
	3,
	3,
	3,
	3,
	3,
	3,
	3
	);

var smiliesList = new Array (
	0,"",
	0,"_big",
	0,"_cool",
	0,"_blush",
	0,"_tongue",
	0,"_evil",
	0,"_wink",
	0,"_clown",
	0,"_blackeye",
	0,"_8ball",
	0,"_sad",
	0,"_shy",
	0,"_shock",
	0,"_angry",
	0,"_dead",
	0,"_kisses",
	0,"_approve",
	0,"_dissapprove",
	0,"_sleepy",
	0,"_question",
	0,"_rotating",
	0,"_eyebrows",
	0,"_hearteyes",
	0,"_crying",
	0,"_waving",
	0,"_waving2",
	0,"_nono",
	0,"_wailing",
	0,"_joker",

	1,"bear",
	1,"cat",
	1,"cock",
	1,"dog",
	1,"fish",
	1,"fox",
	1,"frog",
	1,"giraffe",
	1,"gorilla",
	1,"hen",
	1,"hippo",
	1,"horse",
	1,"leopard",
	1,"monkey",
	1,"monster",
	1,"mouse",
	1,"penguin",
	1,"pig",
	1,"racoon",
	1,"serpent",
	1,"tiger",
	1,"turtle",

	2,"accident",
	2,"amazed",
	2,"angry",
	2,"anxious",
	2,"appetizing",
	2,"ashamed",
	2,"astonished",
	2,"balloon",
	2,"bandage",
	2,"bitter",
	2,"black_eye",
	2,"blind",
	2,"cautious",
	2,"chagrined",
	2,"cloudy",
	2,"confident",
	2,"confused",
	2,"congratulate",
	2,"cool",
	2,"cyclop",
	2,"dead",
	2,"deceived",
	2,"deep_trouble",
	2,"depressed",
	2,"disapointed",
	2,"disgusted",
	2,"dreaming",

	3,"dumb",
	3,"ecstatic",
	3,"embarassed",
	3,"encouraging",
	3,"enraged",
	3,"evolution",
	3,"exhausted",
	3,"eyes_shut",
	3,"fathers_day",
	3,"fight",
	3,"flirt",
	3,"forbidden",
	3,"freezing",
	3,"friendly",
	3,"frustrated",
	3,"glad",
	3,"greedy",
	3,"guilty",
	3,"happy",
	3,"happy_(f)",
	3,"hilarious",
	3,"hopeful",
	3,"hurt",
	3,"hysterical",
	3,"imaginative",
	3,"indifferent",
	3,"innocent",

	4,"jealous",
	4,"kiss",
	4,"laughing",
	4,"liar",
	4,"listen_to_music",
	4,"lonely",
	4,"lovestruck",
	4,"love_(F)",
	4,"love_(M)",
	4,"lucky",
	4,"mad",
	4,"male",
	4,"melting",
	4,"mischievous",
	4,"mocking",
	4,"mothers_day",
	4,"mute",
	4,"nasty",
	4,"near_sighted",
	4,"nice",
	4,"nocturnal",
	4,"obnoxious",
	4,"overwhelmed",
	4,"peace",
	4,"perplex",
	4,"playboy",
	4,"questioning",

	5,"rosey_cheek",
	5,"sad",
	5,"scar",
	5,"scared",
	5,"screaming",
	5,"septical",
	5,"sheming",
	5,"shocked",
	5,"shy",
	5,"siamese_twins",
	5,"sick",
	5,"singing",
	5,"sleep",
	5,"slobber",
	5,"smart",
	5,"smug",
	5,"sorry",
	5,"strained",
	5,"stressed",
	5,"suffering",
	5,"sunny",
	5,"surprised",
	5,"suspicious",
	5,"sympathising",
	5,"tearful",
	5,"thinking",
	5,"threatening",

	6,"tired",
	6,"together",
	6,"tongue_tied",
	6,"uncertain",
	6,"unconscious",
	6,"unhappy",
	6,"upset",
	6,"valentines_day",
	6,"very_ashamed",
	6,"very_sorry",
	6,"whimsical",
	6,"windy",
	6,"wry",
	6,"yawning",
	6,"yelling",

	7,"apricot",
	7,"biscuit",
	7,"bread",
	7,"cake",
	7,"cheese",
	7,"cherry",
	7,"chicken",
	7,"coconut",
	7,"fried_egg",
	7,"grapefruit",
	7,"halloween",
	7,"hamburger",
	7,"lemon",
	7,"lettuce",
	7,"orange",
	7,"peach",
	7,"pear",
	7,"pineapple",
	7,"plum",
	7,"raspberry",
	7,"slice",
	7,"soft-boiled_egg",
	7,"steak",
	7,"strawberry",
	7,"tomato",
	8,"alarm",
	8,"alarm_clock",
	8,"birthday",
	8,"bomb",
	8,"bulb",
	8,"button",
	8,"cactus",
	8,"cd",
	8,"crosswords",
	8,"green_light",
	8,"grenade",
	8,"handle",
	8,"headlight",
	8,"ice-stick",
	8,"internet",
	8,"key",
	8,"medal",
	8,"nappy",
	8,"phone",
	8,"red_light",
	8,"rose",
	8,"snowing",
	8,"stop",
	8,"telephone",
	8,"tulip",
	8,"washing_machine",
	8,"water_drop",
	8,"wheel",
	9,"airline_pilot",
	9,"air_hostess",
	9,"alien",
	9,"artist",
	9,"astronaut",
	9,"baby",
	9,"baker",
	9,"banker",
	9,"bearded",
	9,"bell_boy",
	9,"beret",
	9,"blue_helmet",
	9,"camouflage",
	9,"centurion",
	9,"chambermaid",
	9,"chauffeur",
	9,"chef",
	9,"chinese",
	9,"clown",
	9,"cowboy",
	9,"deep_sea_diver",
	9,"devil",
	9,"diva",
	9,"diving",
	9,"doctor",
	9,"elegant",
	9,"female",
	9,"fighter_pilot",
	9,"fireman",
	9,"gas_mask",
	9,"general",
	9,"graduate",
	10,"hero",
	10,"joker",
	10,"judge",
	10,"king",
	10,"knight",
	10,"mask",
	10,"miner",
	10,"moustached",
	10,"musketeer",
	10,"nun",
	10,"paparazzi",
	10,"party",
	10,"pirate",
	10,"policeman",
	10,"postman",
	10,"prisoner",
	10,"queen",
	10,"raining",
	10,"rebel",
	10,"republican_guard",
	10,"robot",
	10,"savlour",
	10,"sheriff",
	10,"ships_boy",
	10,"soldier",
	10,"superhero",
	10,"surgeon",
	10,"swimming",
	10,"television_reporter",
	10,"thief",
	10,"vampire",
	10,"wig",
	10,"witch",
	10,"workman",
	10,"yankee",
	11,"badminton",
	11,"basketball",
	11,"cap",
	11,"cross-country_skiing",
	11,"dart-flechettes",
	11,"fencing",
	11,"football",
	11,"formula_one",
	11,"handball",
	11,"hockey",
	11,"horse_riding",
	11,"hot-air_balloon",
	11,"olympic_rings",
	11,"ping_pong",
	11,"polo",
	11,"rugby",
	11,"skateboard",
	11,"skiing",
	11,"snooker",
	11,"sports",
	11,"squash",
	11,"surfing",
	11,"tennis",
	11,"volleyball",
	11,"water_polo",
	12,"aquarius",
	12,"cancer",
	12,"earth",
	12,"gemini",
	12,"jupiter",
	12,"leo",
	12,"libra",
	12,"mars",
	12,"mercury",
	12,"moon",
	12,"neptune",
	12,"petanque",
	12,"pisces",
	12,"pluto",
	12,"saturn",
	12,"scorpio",
	12,"taurus",
	12,"uranus",
	12,"venus",
	12,"virgo"
	);

var smiliesTitles = new Array (
	"أيقونات",
	"حيوانات",
	"وجوه 1",
	"وجوه 2",
	"وجوه 3",
	"وجوه 4",
	"وجوه 5",
	"أطعمة",
	"أشياء",
	"ناس وأجناس 1",
	"ناس وأجناس 2",
	"رياضة",
	"كواكب وفلك"
	);

var ed_iconlib = "مكتبة الصور";
var ed_filetype_audio = "ملف صوتي";

var ed_fontsel = "نمط الخط";
var ed_fontsize = "الحجم";
var ed_tip_style = "النمط";
var ed_tip_para = "نوع الفقرة";
var ed_tip_text = "صندوق نص";
var ed_tip_cut = "قص";
var ed_tip_copy = "نسخ";
var ed_tip_paste = "لصق";
var ed_tip_undo = "ألغي آخر تغيير";
var ed_tip_redo = "أرجع أخر تغيير";
var ed_tip_bold = "خط ثقيل";
var ed_tip_italic = "خط مائل";
var ed_tip_underline = "تحته خط";
var ed_tip_strike = "عليه خط";
var ed_tip_superscr = "Superscript";
var ed_tip_subscr = "Subscript";
var ed_tip_symbol = "أدخل شعار";
var ed_tip_left = "على اليسار";
var ed_tip_center = "في الوسط";
var ed_tip_right = "على اليمين";
var ed_tip_full = "تحديد بعرض الصفحة";
var ed_tip_numlist = "قائمة مرقمة";
var ed_tip_list = "قائمة";
var ed_tip_indent = "حرك لليسار";
var ed_tip_outdent = "حرك لليمين";
var ed_tip_image = "إدخال وتغيير الصور";
var ed_tip_color = "لون النص";
var ed_tip_bgcolor = "لون خلفية النص";
var ed_tip_link = "ادخل وصلة";
var ed_tip_table = "أدخل او غير جدول";
var ed_tip_absolute = "Absolute";
var ed_tip_removeformat = "أزل النمط عن النص";
var ed_tip_asset = "إدخال ملفات صوتية او فيديو أو فلاش";
var ed_tip_horzrule = "أدخل خط أفقي";
var ed_tip_page = "خصائص العرض";
var ed_tip_word = "Word لصق نص من برنامج";


var ed_show_topic_preview = "إستعرض نص الموضوع والردود والمنتديات الأخرى";
var ed_hide_topic_preview = "أخفي إستعراض الموضوع والردود والمنتديات الأخرى";
var ed_show_forum_preview = "إستعرض المنتديات";
var ed_hide_forum_preview = "أخفي إستعراض المنتديات";
var ed_newline = "الأسطر الجديدة لا تبدأ فقرة جديدة ";
var ed_show_msg_preview = "إستعرض الرسالة التي ترد عليها أو أي رسالة أخرى";
var ed_show_mail_preview = "إستعرض أي رسالة من بريدك الخاص";
var ed_hide_mail_preview = "أخفي إستعراض الرسائل الأخرى";


var ed_button_enter = "إدخال النص";
var ed_button_restore = "إرجاع النص الأصلي";
var ed_button_cancel = "إلغاء";

var ed_color_title = "لون النص";
var ed_bgcolor_title = "لون خلفية النص";
var ed_button_select = "تم الإختيار";
var ed_button_cancel = "ألغي الاختيار";

var ed_link_border = "عرض حاشية الصورة";
var ed_link_name = "إسم الوصلة";
var ed_link_apply = "أدخل الوصلة";
var ed_link_change = "طبق تغيير الوصلة";
var ed_link_title = "أدخل وصلة";

var ed_color_number = "رقم اللون المختار";
var ed_confirm_reset = "هل أنت متأكد أنك تريد إعادة النص الأصلي؟";
var ed_uncheck_html = "HTML الرجاء الغاء خاصية اظهار";
var ed_need_title = "لا يمكنك إدخال الموضوع بدون عنوان";
var ed_need_content = "لا يمكنك إدخال النص بدون محتويات";
var ed_confirm_submit = "هل أنت متأكد من أنك تريد إدخال النص؟";
var ed_title_edit_signature = "تغيير توقيع العضو";
var ed_title_new_topic = "موضوع جديد";
var ed_title_edit_topic = "تغيير موضوع";
var ed_title_new_reply = "إضافة رد";
var ed_title_edit_reply = "تغيير رد";
var ed_title_reply_topictitle = "الموضوع";
var ed_title_reply_authorname = "الكاتب";
var ed_too_big = "حجم النص أكبر من المساحة المخصصة له - الرجاء التقليل من النص";
var ed_cur_size = "حجم النص الحالي";
var ed_max_size = "الحجم الأقصى المسموح به";

var ed_topic_title_header = "عنوان الموضوع";
var ed_click_for_rules = "إضغط هنا<br>لقراءة شروط<br>المشاركات";
var ed_quote_from = "إقتباس لمشاركة";

var ed_limit_topics = 	"حد المواضيع الجديدة<br>المتبقية لك حاليا<br>في هذا المنتدى";
var ed_limit_replies = 	"حد الردود الجديدة<br>المتبقية لك حاليا<br>في هذا المنتدى";
var ed_confirm_exit = "الذهاب الى صفحة أخرى سيخسر النص الجديد الذي ادخلته\r\n\r\n هل أنت متأكد من رغبتك في الذهاب الى صفحة أخرى؟";
