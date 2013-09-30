var blockAutoRedirect = false;

function t_options_bar()
{
document.write("<table border=0 cellspacing=2 width=100%><tr>");
document.write("<td width=100%>&nbsp;</td>");
document.write("<td class=optionsbar_menus>"+switchforum_selector_title+"<br>");
forumsSelector2();
document.write("</td></tr><tr><td></td></tr></table>");
}


function render_content()
{
var title = "";
var auto = false;
var topiclinks = false;

t_options_bar(0);

document.write("<table width=100% border=1><tr class=normal><td class=list_center colspan=10><br><br>");

title = noticeMode;

if (noticeMode == "notmember")
	title = "لا يمكنك المشاركة إلا إذا كنت عضو مسجل في المنتديات.<br><br>إذا كنت عضوا الرجاء منك الدخول بإسمك وكلمتك السرية<br>أو اذا لم تكن عضوا يمكنك الإشتراك مجانيا!";

if (noticeMode == "topic_add_ok")
	{
	title = "تم إضافة الموضوع بنجاح.<br><br>شكرا على مشاركاتك.";
	auto = true;
	topiclinks = true;
	}

if (noticeMode == "topic_add_pending")
	{
	title = "تم إدخال الموضوع لكنه يحتاج لموافقة المشرف قبل ان يظهر في المنتدى.<br><br>شكرا على مشاركاتك.";
	topiclinks = true;
	}

if (noticeMode == "topic_add_failed")
	{
	title = "كان هناك خلل أثناء تخزين الموضوع!<br><br>الرجاء إعلام إدارة المنتدى.  نأسف على هذا.";
	topiclinks = true;
	}

if (noticeMode == "duplicate_topic_posted")
	{
	title = "كان هناك خلل أثناء تخزين الموضوع!<br><br>يبدو أنه تم محاولة إدخال الموضوع عدة مرات لسبب فني أو لخلل في الشبكة.<br><br>"
		+ "الرجاء التأكد من أن الموضوع قد تم إدخاله بشكل صحيح في المنتدى... نأسف على هذا.";
	}


if (noticeMode == "duplicate_reply_posted")
	{
	title = "كان هناك خلل أثناء تخزين الرد!<br><br>يبدو أنه تم محاولة إدخال الرد عدة مرات لسبب فني أو لخلل في الشبكة.<br><br>"
		+ "الرجاء التأكد من أن الرد قد تم إدخاله بشكل صحيح في المنتدى... نأسف على هذا.";
	}

if (noticeMode == "reply_add_ok")
	{
	title = "تم إضافة الرد بنجاح.<br><br>شكرا على مشاركاتك.";
	auto = true;
	topiclinks = true;
	}

if (noticeMode == "reply_add_pending")
	{
	title = "تم إدخال الرد لكنه يحتاج لموافقة المشرف قبل ان يظهر في المنتدى.<br><br>شكرا على مشاركاتك.";
	topiclinks = true;
	}

if (noticeMode == "reply_add_failed")
	{
	title = "كان هناك خلل أثناء تخزين الرد!<br><br>الرجاء إعلام إدارة المنتدى.  نأسف على هذا.";
	topiclinks = true;
	}

if (noticeMode == "reply_change_notallowed_monitored")
	{
	title = "لا يمكنك تغيير نص الرد لأن مشاركاتك تحت الرقابة حاليا.";
	topiclinks = true;
	}
if (noticeMode == "notmember_Log_in")
 
	title = "لا يمكنك إظافة البيانات حتي تسجل الدخول .";
	
if (noticeMode == "topic_change_notallowed_monitored")
	{
	title = "لا يمكنك تغيير نص الموضوع لأن مشاركاتك تحت الرقابة حاليا.";
	topiclinks = true;
	}

if (noticeMode == "topic_change_notallowed_forum")
	{
	title = "لا يسمح بتغيير نصوص المواضيع في هذا المنتدى.";
	topiclinks = true;
	}
	
if (noticeMode == "topic_change_ok")
	{
	title = "تم تغيير الموضوع بنجاح.<br><br>شكرا على مشاركاتك.";
	auto = true;
	topiclinks = true;
	}
if (noticeMode == "topic_change_panding")
	{
	title = "تم تغيير الموضوع بنجاح.<br><br>ولكنه يحتاج لموافقة المشرف .";
	//auto = true;
	topiclinks = true;
	}

if (noticeMode == "topic_change_failed")
	{
	title = "كان هناك خلل أثناء تغيير الموضوع!<br><br>الرجاء إعلام إدارة المنتدى.  نأسف على هذا.";
	topiclinks = true;
	}

if (noticeMode == "reply_change_ok")
	{
	title = "تم تغيير الرد بنجاح.<br><br>شكرا على مشاركاتك.";
	auto = true;
	topiclinks = true;
	}
if (noticeMode == "reply_change_pending")
	{
	title = "تم تغيير الرد بنجاح.<br><br>ولكنه يحتاج لموافقة المشرف.";
 
	topiclinks = true;
	}

if (noticeMode == "reply_change_notallowed_forum")
	{
	title = "لا يسمح بتغيير نصوص الردود في هذا المنتدى.";
	topiclinks = true;
	}
	
if (noticeMode == "reply_change_failed")
	{
	title = "كان هناك خلل أثناء تغيير الرد!<br><br>الرجاء إعلام إدارة المنتدى.  نأسف على هذا.";
	topiclinks = true;
	}

if (noticeMode == "topicpending")
	{
	title = "لا يمكنك الرد على هذا الموضوع حاليا<br>لأن الموضوع لم تتم الموافقة عليه للآن.<br><br>الرجاء المحاولة في وقت لاحق.";
	topiclinks = true;
	}
	
if (noticeMode == "topicpendingchange")
	{
	title = "لا يمكنك تغيير  هذا الموضوع حاليا لأن الموضوع لم تتم الموافقة عليه للآن.<br><br>الرجاء المحاولة في وقت لاحق.";
	topiclinks = true;
	}

if (noticeMode == "topiclocked")
	{
	title = "لا يمكنك الرد على هذا الموضوع<br>لأن الموضوع تم قفله بواسطة المشرف.";
	topiclinks = true;
	}

if (noticeMode == "topicheld")
	{
	title = "لا يمكنك الرد على هذا الموضوع<br>لأن الموضوع تم تجميده بواسطة المشرف.";
	topiclinks = true;
	}

if (noticeMode == "forumlocked")
	{
	title = "لا يمكنك المشاركة في هذا المنتدى<br>لأن المنتدى مقفول بواسطة الإدارة.";
	topiclinks = true;
	}

if (noticeMode == "memberlocked")
	title = "لا يمكنك المشاركة في هذا المنتدى<br>لأن عضويتك مقفولة بواسطة الإدارة.";

if (noticeMode == "invalidforum")
	title = "يبدو ان رقم المنتدى المطلوب غير صحيح.<br>الرجاء عدم تغيير عنوان الوصلات يدويا.<br>لقد تم تسجيل هذه المحاولة.";

if (noticeMode == "topicnotfound")
	title = "يبدو ان رقم الموضوع المطلوب غير صحيح.<br>الرجاء عدم تغيير عنوان الوصلات يدويا.<br>لقد تم تسجيل هذه المحاولة.";

if (noticeMode == "topicdeleted")
	title = "لا يمكنك الرد على هذا الموضوع أو تغييره<br>لأن الموضوع قد تم حذفه بواسطة المشرفين.";

if (noticeMode == "topiclockedchange")
	title = "لا يمكنك الرد على هذا الموضوع أو تغييره<br>لأن الموضوع تم قفله بواسطة المشرفين .";

if (noticeMode == "maxtopics")
	{
	title = "لا يمكنك المشاركة بأكثر من " + maxTopics + " مواضيع في هذا المنتدى في فترة 24 ساعة.<br>الرجاء المحاولة بعد قليل.";
	topiclinks = true;
	}

if (noticeMode == "maxreplies")
	{
	title = "لا يمكنك المشاركة بأكثر من " + maxReplies + " رد في هذا المنتدى في فترة 24 ساعة.<br>الرجاء المحاولة بعد قليل.";
	topiclinks = true;
	}

if (noticeMode == "login_bad_password")
	title = "لا يمكنك الدخول للمنتديات لأن الكلمة السرية ليست مطابقة لسجلاتنا.<br>"
		+ "يمكنك طلب إرسال كلمتك السرية الى بريدك الإلكتروني المسجل لدينا عن طريق الوصلة التالية: <br>"
		+ "<a href=index.php?requestpass=true&name="+memberNames+">-- طلب التذكير بالكلمة السرية --</a><br><br>"

if (noticeMode == "login_bad_password2")
	title = "<font color=red size=+1>لقد تم اكتشاف محاولة دخول باسم مشرف او مدير بكلمة سرية<br>"
	+ "غير صحيحة.   لقد تم تسجيل بيانات جهازك واتصالك في سجلاتنا الدائمة.<br><br>"

if (noticeMode == "login_bad_user")
	title = "لا يمكنك الدخول بهذا الاسم لأنه ليس مسجل لدينا.";
	
if (noticeMode == "File_Uploade_ok")
	title = "تم تحميل ملفك بنجاح .";
	
if (noticeMode == "File_Uploade_no")
	title = "لم يتم تحميل ملفك لأحد الأسباب :<br> "
	      + "صيغة الملف لا توافق شروط الرفع .<br> "
	      + "حدث خطأ أثناء تحميل المل  .<br> "
	      + "حجم الملف كبير  .<br>"
	      + "الرجاء التأكد من الشروط السابقة وأعد رفع الملف . <br><br>" ;

if (noticeMode == "login_pending_approval")
	title = "لم يتم تشغيل عضويتك للآن.<br>  الرجاء منك الإنتظار قليلا والمحاولة مرة أخرى.<br><br>إذا لم يتم تشغيل عضويتك في خلال أكثر من 24 ساعة بعد التسجيل <br>الرجاء منك الإتصال بإدارة المنتدى على البريد الالكتروني التالي: <br><a href=mailto:"+AdminEmail+">-- بريد الإدارة --</a><br>";

if (noticeMode == "login_pending_user_confirm")
{
	title = "الرجاء منك تأكيد صحة بريدك الإلكتروني عن طريق الوصلة<br>التي أرسلت لك بالبريد الإلكتروني عند التسجيل.<br><br>"
		+ "أو إدخال رقم تفعيل العضوية الذي وصلك في رسالة التفعيل هنا:  "
		+ "<form method=get action=index.php><input type=hidden name=cfm value="+memberID+"><input type=hidden name=cfu value=1>"
		+ "<input type=text name=cck value=''>"
		+ "&nbsp;&nbsp;<input type=submit value='أرسل رقم التفعيل'>"
		+ "<form><br><br>"
		+ "بعد ان تقوم بذلك سنقوم بمراجعة عضويتك وتشغيلها.<br><br>"
		+ "يمكنك إعادة طلب إرسال الرسالة عن طريق الوصلة التالية: <br>"
		+ "<a href=index.php?requestconfirmemail="+memberID+">-- طلب رسالة التأكيد --</a><br><br>"
		+ "إذا لم تستلم بريد من الموقع بعد التسجيل أو عن طريق الوصلة أعلاه<br>الرجاء منك الإتصال بإدارة المنتدى على البريد الالكتروني التالي: <br><a href=mailto:"+AdminEmail+">-- بريد الإدارة --</a><br>";
}

if (noticeMode == "email_confirm_failed")
	title = "رقم العضوية هذا غير مسجل او قد تم ازالته.<br><br> الرجاء منك الإتصال بإدارة المنتدى على البريد الالكتروني التالي: <br><a href=mailto:"+AdminEmail+">-- بريد الإدارة --</a><br>";

if (noticeMode == "email_confirm_failed2")
	title = "رقم تفعيل العضوية غير صحيح.<br><br>"
		+ "الرجاء المحاولة مرة أخرى أو الإتصال بإدارة المنتدى على البريد الالكتروني التالي: <br><a href=mailto:"+AdminEmail+">-- بريد الإدارة --</a><br>"
		;

if (noticeMode == "email_confirm_ok")
	title = "شكرا لك على تأكيد عنوان بريدك الإلكتروني.<br><br>سيتم مراجعة طلب العضوية بواسطة الإدارة خلال 24 ساعة على الأكثر. <br>";

if (noticeMode == "email_confirm_pending_approval")
	title = "شكرا لك على تأكيد عنوان بريدك الإلكتروني.<br><br>سيتم مراجعة طلب العضوية بواسطة الإدارة خلال 24 ساعة على الأكثر. <br>";

if (noticeMode == "email_confirm_member_ok")
	title = "لقد تم قبول عضويتك وتشغيلها.<br><br>يمكنك الآن الدخول باسمك وكلمتك السرية من الصفحة الرئيسية للمنتديات. <br>";


if (noticeMode == "confirm_email_sent")
	title = "تم إرسال بريد الكتروني اليك على العنوان الذي سجلته في بياناتك.<br><br>الرجاء الضغط على الوصلة في تلك الرسالة لمتابعة عملية تشغيل عضويتك.<br>";


if (noticeMode == "login_locked_member")
	title = "لا يمكنك الدخول للمنتديات بهذا الاسم لأنه تم قفله بواسطة الإدارة.<br>";

if (noticeMode == "not_moderator")
	title = "تحذير: <br><br>لا يمكنك القيام بهذه العملية لأنك لست مشرفا على المنتدى.<br>";

if (noticeMode == "no_captcha")
	title = "رقم التحقق الذي أدخلته غير صحيح .<br>";

if (noticeMode == "url_hack")
	title = "تحذير: <br><br>لا يمكنك القيام بهذه العملية - لقد تم تسجيل بياناتك في سجلات الموقع كأحتياط أمني.<br>";

if (noticeMode == "topic_info_change_ok")
	{
	title = "تم تغيير بيانات الموضوع بنجاح.<br><br>شكرا على مشاركاتك.";
	auto = true;
	topiclinks = true;
	}

if (noticeMode == "topic_info_change_failed")
	{
	title = "لم يتم تغيير بيانات الموضوع لسبب فني.<br><br>الرجاء أخبار المدير عن هذا الخلل.";
	topiclinks = true;
	}

if (noticeMode == "password_sent")
	title = "تم إرسال بريد الكتروني الى عنوانك المسجل لدينا بكلمتك السرية.";

if (noticeMode == "password_not_sent")
	title = "الاسم الذي أدخلته ليس مسجلا لدينا.<br><br>الرجاء التأكد من الاسم الصحيح من قائمة الأعضاء.";

if (noticeMode == "topic_sent_to_friend")
	{
	title = "تم إرسال بريد الكتروني الى صديقك حسب العنوان الذي ادخلته.";
	auto = true;
	}

if (noticeMode == "email_sent_to_member")
	{
	title = "تم إرسال بريد الكتروني الى العضو.";
	auto = true;
	}

if (noticeMode == "email_send_failed")
	title = "لم يتم إرسال البريد الإلكتروني لسبب فني.";

if (noticeMode == "email_send_not_allowed")
	title = "ليس مسموحا لك بإرسال بريد إلكتروني الى هذا العضو.";

if (noticeMode == "member_details_changed")
	{
	title = "تم تغيير البيانات بنجاح.";
	auto = true;
	}

if (noticeMode == "member_details_change_failed")
	title = "لم يتم تغيير بياناتك لخطأ في البيانات المدخلة أو خلل في النظام.";

if (noticeMode == "passwords_dont_match")
	title = "لم يتم تغيير بياناتك لأن الكلمة السرية لم تتطابق مع أعادتها للتأكيد.";

if (noticeMode == "user_exists")
	title = "لا يمكنك إستخدام هذا الاسم لأنه مسجل لعضو آخر.";

if (noticeMode == "invalid_user_name")
	title = "لا يمكنك إستخدام هذا الاسم لأنه لا يطابق شروط الأسماء في المنتديات.";

if (noticeMode == "cannot_change_details") 
	title = "لا يمكنك تغيير بيانات عضو آخر أو بياناتك اذا لم تكون داخلا باسمك في المنتديات .";

if (noticeMode == "no_email_supplied")
	title = "يجب أن تدخل عنوان بريد إلكتروني صحيح";

if (noticeMode == "signature_change_ok")
	{
	title = "تم تغيير التوقيع بنجاح.";
	auto = true;
	}

if (noticeMode == "signature_too_big")
	title = "لم يتم تغيير التوقيع لأنه أكبر من المساحة المحددة لتخزين التواقيع.<br><br> الرجاء منك تصغير التوقيع والمحاولة مرة أخرى.";

if (noticeMode == "signature_change_failed")
	title = "لم يتم تغيير التوقيع لخطأ في البيانات المدخلة أو خلل في النظام.";

if (noticeMode == "notify_stored")
	{
	title = "شكرا لك على إبداء ملاحظاتك.<br><br>سيتم متابعة الأمر بأسرع وقت ممكن.";
	auto = true;
	}

if (noticeMode == "notify_not_stored")
	title = "لم يتم تخزين الملاحظة لسبب فني.<br><br>الرجاء إخبار الإدارة لتصحيح المشكلة.";

if (noticeMode == "notify_empty")
	title = "لم يتم تخزين الملاحظة لأنها لا تحتوي <br>على نص ولم يتم اختيار نوع الملاحظة.";

if (noticeMode == "notifyreply_not_stored")
	title = "لم يتم تطبيق العملية لسبب فني.<br><br>الرجاء إخبار الإدارة لتصحيح المشكلة.";

if (noticeMode == "notifyreply_empty")
	title = "لم يتم الرد على الشكوى لأن الرد <br>لم يحتوى على أي نص لإرساله للعضو.";

if (noticeMode == "notifyreply_stored_to_admin")
	{
	title = "تم ترحيل الشكوى للمدير.";
	auto = true;
	}

if (noticeMode == "notifyreply_stored_only")
	{
	title = "تم تخزين الملاحظات فقط.";
	auto = true;
	}

if (noticeMode == "notifyreply_closed")
	{
	title = "تم إغلاق الشكوى.";
	auto = true;
	}

if (noticeMode == "notifyreply_sent")
	{
	title = "تم إرسال الرد على شكوى العضو.";
	auto = true;
	}

if (noticeMode == "invalid_member")
	title = "العضو المطلوب غير متوفر.";

if (noticeMode == "message_send_failed")
	title = "لم يتم إرسال الرسالة لسبب فني.<br><br>الرجاء إخبار الإدارة لتصحيح المشكلة.";

if (noticeMode == "message_send_ok")
	{
	title = "تم إرسال الرسالة.";
	auto = true;
	}

if (noticeMode == "user_doesnt_accept_mail")
	title = "لا يمكنك إرسال رسالة خاصة لهذا العضو لأنه لا يقبل إستلام الرسائل الخاصة.";

if (noticeMode == "mail_over_allowance")
	title = "لا يمكنك إرسال رسائل خاصة حاليا لأنك تجاوزت الحد الأقصى للرسائل الخاصة في اليوم";

if (noticeMode == "duplicate_mail_posted")
	{
	title = "كان هناك خلل أثناء تخزين الرسالة!<br><br>يبدو أنه تم محاولة إدخال الرسالة عدة مرات لسبب فني أو لخلل في الشبكة.<br><br>"
		+ "الرجاء التأكد من أن الرسالة قد تم إرسالها بشكل صحيح في ملف البريد الصادر ... نأسف على هذا.";
	}

if (noticeMode == "message_too_big")
	title = "هذه الرسالة أكبر من الحجم المخصص لإرسال الرسائل الخاصة.<br>الرجاء المحاولة برسالة أصغر."
		+ "<br><br>حجم الرسالة التي أدخلتها: <font color=black>" + messageSize
		+ "</font><br>الحد الأقصى لحجم الرسائل: <font color=black>" + messageSizeLimit;


if (noticeMode == "editor_needs_IE5")
	title = "لا يمكنك إدخال النص لأنك تستخدم متصفح قديم أو غير ملائم لمعالج النص. <br><br>"
	+ "الرجاء استخدام متصفح مايكروسوف إنترنت إكسبلورر 5 على الأقل. <br><br>"
	+ "يمكنك تحميل أحدث نسخة من هذا المتصفح من الوصلة التالية من موقع مايكروسوف:<br>"
	+ "<a href='http://www.microsoft.com/windows/ie/default.asp' target=_new>-- صفحة التحميل --</a>";

if (noticeMode == "chat_blocked")
	title = "لا يمكنك دخول النقاش الحي لأنه تم منعك من ذلك بواسطة <br>"
	+ "الإدارة لمخالفتك شروط المشاركة في النقاش الحي.";

if (noticeMode == "chat_not_enough_posts")
	title = "دخول النقاش الحي متوفر فقط للأعضاء الذي حصلوا على النجمة <br>"
	+ "الثالثة - أي بعد 500 مشاركة في المنتديات.";

if (noticeMode == "chat_not_logged_in")
	title = "دخول النقاش الحي متوفر فقط للأعضاء.<br><br>اذا كنت عضوا في المنتديات الرجاء منك <br>"
	+ "الدخول بإسمك وكلمتك السرية في المنتديات.";

if (noticeMode == "archive_not_available")
	title = "أرشيف المواضيع القديمة غير متوفر حاليا.<br><br>الرجاء المحاولة بعد قليل.";

if (noticeMode == "notmember_archive_topic")
	title = "أرشيف المواضيع القديمة متوفر للأعضاء المسجلين فقط.";

if (noticeMode == "mail_not_available")
	title = "نظام الرسائل الخاصة غير متوفر حاليا.<br><br>الرجاء المحاولة بعد قليل.";

if (noticeMode == "plaque_added_ok")
	title = "تم إضافة الوسام بنجاح.<br>";

if (noticeMode == "plaque_info_change_ok")
	title = "تم تغيير بيانات الوسام بنجاح.<br>";

if (noticeMode == "plaque_edit_failed")
	title = "لم يتم إدخال بيانات الوسام لسبب فني.<br><br>الرجاء إخبار الإدارة لتصحيح المشكلة.";

if (noticeMode == "title_added_ok")
	title = "تم إضافة الوصف بنجاح.<br>";

if (noticeMode == "title_info_change_ok")
	title = "تم تغيير بيانات الوصف بنجاح.<br>";

if (noticeMode == "title_edit_failed")
	title = "لم يتم إدخال بيانات الوصف لسبب فني.<br><br>الرجاء إخبار الإدارة لتصحيح المشكلة.";

if (noticeMode == "title_edit_used")
	title = "لا يمكن تغيير وضعية هذا الوصف إلى تحت التصميم<br> او ينتظر الموافقة لأنه مستخدم حاليا لأعضاء.";

if (noticeMode == "forum_info_change_ok")
	title = "تم تغيير بيانات المنتدى بنجاح.<br>";

if (noticeMode == "forum_edit_failed")
	title = "لم يتم إدخال بيانات المنتدى لسبب فني.<br><br>الرجاء إخبار الإدارة لتصحيح المشكلة.";

if (noticeMode == "survey_added_ok")
	title = "تم إضافة الإستفتاء بنجاح.<br>";

if (noticeMode == "survey_info_change_ok")
	title = "تم تغيير بيانات الإستفتاء بنجاح.<br>";

if (noticeMode == "survey_edit_failed")
	title = "لم يتم إدخال بيانات الإستفتاء لسبب فني.<br><br>الرجاء إخبار الإدارة لتصحيح المشكلة.";

if (noticeMode == "must_enter_current_password")
	title = "يجب عليك إدخال كلمتك السرية الحالية لتغيير<br> بريدك الإلكتروني المسجل في المنتديات أو كلمتك السرية.";

if (noticeMode == "invalid_current_password")
	title = "الكلمة السرية الحالية التي أدخلتها غير مطابقة لسجلاتنا.";

if (noticeMode == "monitortopic_duplicate")
	title = "الموضوع المختار في قائمة مفضلتك حاليا.";

if (noticeMode == "monitortopic_added")
	title = "تم إضافة الموضوع لقائمة مواضيعك المفضلة.";

if (noticeMode == "monitortopic_removed")
	title = "تمت إزالة الموضوع من قائمة مواضيعك المفضلة.";

if (noticeMode == "monitortopic_not_monitored")
	title = "الموضوع المختار ليس في قائمة مواضيعك المفضلة.";

if (noticeMode == "monitortopic_too_many")
	title = "لا يمكنك تخزين أكثر من 50 موضوع في مفضلتك  في آن واحد.<br>الرجاء منك أزالة بعض المواضيع من القائمة والمحاولة مرة أخرى.";

if (noticeMode == "monitortopic_noaccess")
	title = "لا يمكنك إضافة هذا الموضوع لقائمة مفضلتك.";
	
if (noticeMode == "blocked_forum")
	title = "لقد تم منعك من المشاركة في هذا المنتدى.<br><br>تفاصيل السبب ستجدها في رسالة خاصة أرسلت لك بهذا الخصوص.";

if (noticeMode == "blocked_all")
	title = "لقد تم منعك من المشاركة في جميع المنتديات.<br><br>تفاصيل السبب ستجدها في رسالة خاصة أرسلت لك بهذا الخصوص.";
	
if (noticeMode == "blocked_edit_sig")
	title = "لا يمكنك تغيير توقيعك لأنك تحت الرقابة حاليا.<br><br>";

if (noticeMode == "message_send_blocked")
	title = "لقد تم منعك من إرسال رسائل خاصة للأعضاء.<br><br>تفاصيل السبب ستجدها في رسالة خاصة أرسلت لك بهذا الخصوص.";
	
if (noticeMode == "message_send_blocked_all")
	title = "لقد تم منعك من إرسال رسائل خاصة.<br><br>تفاصيل السبب ستجدها في رسالة خاصة أرسلت لك بهذا الخصوص.";

if (noticeMode == "message_send_blocked")
	title = "لقد تم منعك من إرسال رسائل خاصة للأعضاء.<br><br>تفاصيل السبب ستجدها في رسالة خاصة أرسلت لك بهذا الخصوص.";

if (noticeMode == "message_send_blocked_newmember")
	title = "لا يمكن للأعضاء الجدد إستخدام نظام الرسائل الخاصة إلا لإرسال رسائل للمشرفين أو الرد على الرسائل.<br><br>سيتم فتح نظام الرسائل الخاصة بالكامل لك أوتوماتيكيا بعد فترة من نشاطك في المنتديات.";

	if (noticeMode == "message_no_ie")
	title = "لا يمكنك إدخال النص لأنك تستخدم متصفح قديم أو غير ملائم لمعالج النص. <br><br>"
	+ "الرجاء استخدام متصفح مايكروسوف إنترنت إكسبلورر 5 على الأقل. <br><br>"
	+ "يمكنك تحميل أحدث نسخة من هذا المتصفح من الوصلة التالية من موقع مايكروسوف:<br>"
	+ "<a href='http://www.microsoft.com/windows/ie/default.asp' target=_new>-- صفحة التحميل --</a>";

if (noticeMode == "female_posts_only_undefined")
	title = "لا يمكنك المشاركة في هذا المنتدى لأنه مخصص لمشاركة الإناث<br>فقط وأنت لم تحددي جنسك في بيانات عضويتك.<br><br>"
		+ "للقيام بذلك إضغط على الوصلة التالية:  "
		+ "<a href=index.php?editmember=true&emm=2>-- تغيير بيانات العضوية --</a><br><br>"

if (noticeMode == "female_posts_only")
	title = "لا يمكنك المشاركة في هذا المنتدى لأنه مخصص لمشاركة الإناث فقط.";
	
	if (noticeMode == "add_no_sbj")
	title = "لا يمكنك إدخال  نص بدون عنوان!";

if (noticeMode == "male_posts_only_undefined")
	title = "لا يمكنك المشاركة في هذا المنتدى لأنه مخصص لمشاركة الذكور<br>فقط وأنت لم تحدد جنسك في بيانات عضويتك.<br><br>"
		+ "للقيام بذلك إضغط على الوصلة التالية:  "
		+ "<a href=index.php?editmember=true&emm=2>-- تغيير بيانات العضوية --</a><br><br>"

if (noticeMode == "male_posts_only")
	title = "لا يمكنك المشاركة في هذا المنتدى لأنه مخصص لمشاركة الذكور فقط.";
	
if (noticeMode == "archiv_no_active")
	title = "خاصية الأرشفة لم تفعل بعد .";

if (!auto)	document.write("<font color=red>");

document.write("<font size=+2>"+title+"</font><br><br>");

if (topiclinks)
	{
	if (postTopic > 0)
		document.write("<a href=\""+link+"samtopic/topic"+postTopic+"\">-- إضغط هنا للرجوع للموضوع --</a><br><br>");

	if (postForum > 0)
		document.write("<a href=\""+link+"samfrm/forum"+postForum+"\">-- إضغط هنا للرجوع للمنتدى --</a><br><br>");
	}

if (caller.length > 0)
	{
	document.write("<a href=\""+unescape(caller)+"\">-- إضغط هنا للرجوع للصفحة الأصلية --</a><br><br>");
	if (auto) setTimeout('if (blockAutoRedirect == false) top.location.href = unescape(caller)',5000);
	}

document.write("<br></td></tr></table>");
}
