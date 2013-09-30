function render_content()
{
document.write("<center><table border=0 cellpadding=0 cellspacing=0 width=40%>");
document.write("<tr><td  class=optionsbar_menus><center>");
if (registerResult.length > 0)

	{
	if (registerResult == "registration_ok") 
		{
		if (registerMode==1){
document.write("<br><center><font color=red size=+1>تم تسجيل طلب عضويتك بنجاح.<br><br></font>ستتم الموافقة على عضويتك خلال مدة قصيرة .<br><br>اذا تأخرت عملية قبول عضويتك الرجاء الإتصال بالإدارة للإستفسار .<br>");
		}else{
		//document.write("<br><center><font color=red size=+1>تم تسجيل طلب عضويتك بنجاح.<br><br></font>تم إرسال بريد الكتروني اليك على العنوان<br>الذي سجلته في بياناتك.<br><br>الرجاء الضغط على الوصلة في تلك الرسالة لمتابعة <br>عملية تشغيل عضويتك.<br>");
		document.write("<br><center><font color=red size=+1>تم قبول عضويتك بنجاح.<br><br></font>الآن يمكنك الدخول والمشاركة بها .<br>للدخول الى المنتديات ادخل اسم العضوية والرقم السري في المكان المخصص .<br><br><br><br>");
		}
		return;
		}
		
	var s = "";
	
	if (registerResult == "registration_failed_name_invalid") s = "الأسم لا يطابق شروط الأسماء لدينا";	
	if (registerResult == "registration_failed_name_exists") s = "الاسم المختار مسجل لعضو آخر";	
	if (registerResult == "registration_failed_captcha") s = "كود التحقق الذي أدخلته غير صحيح .";	
	if (registerResult == "registration_failed_email_used") s = "البريد الإلكتروني مسجل لعضو آخر";	
	if (registerResult == "registration_failed_no_password") s = "لم يتم ادخل كلمة سرية";	
	if (registerResult == "registration_failed_email_blocked") s = "البريد الالكتروني تابع لمقدم خدمة لا نضمن وصول الرسائل له";	
	if (registerResult == "registration_failed_passwords_dont_match") s = "الكلمة السرية وإعادتها للتأكيد لم تتطابق";	
	if (registerResult == "registration_failed") s = "سبب فني غير معروف - الرجاء إخبار إدارة الموقع";	
	
	document.write("<br><center><font color=red size=+1>لم يتم التسجيل لأن:<br>"+s+"</font><br>الرجاء تعديل البيانات والمحاولة مرة أخرى<br><br>");
	}
else{

	document.write("<center><font color=red size=+2>تسجيل عضو جديد</font><br>");
document.write("</table></td></tr>");

document.write("<form action='"+link+"regester/insert' name=userinfo method=post><input type=hidden name='vari' value='"+verification+"'>");

document.write("<table border=0 cellpadding=4 cellspacing=1 bgcolor=gray>");

writeTextField("الاسم الذي يعرفك في المنتديات","user_name");

document.write("<tr class=fixed><td><font size=-1 color=red>"
	+ "* يجب ان يكون الاسم على الأقل مكون من 3 أحرف<br>"
	+ "* لا يسمح استخدام الرموز غير الأحرف والأرقام <br>"
	+ "* لا يسمح استخدام رمز التمديد ــــ<br>"
	+ "* يجب الا يكون الاسم مشابه جدا لاسم عضو حالي<br>"
	+ "* لا يسمح بالاسماء التي كلها ارقام<br>"
	+ "</td><td><font size=-1 color=red>"
	+ "* لا يسمح بتكرار حرف عدة مرات<br>"
	+ "* لا يسمح بوضع الايميل كجزء من الاسم<br>"
	+ "* لا يسمح باستخدام اسم الموقع او جزء منه في الاسم<br>"
	+ "* لا يسمح باستخدام اسم يوحي بالاشراف او الادارة<br>"
	+ "* لا يسمح باستخدام اسم غير لائق بالآداب العامة<br>"
	+ "</td></tr>");

writeTextField("البريد الإلكتروني","user_email");

document.write("<tr class=fixed><td><font size=-1 color=red>"
	+ "* يجب ان تدخل عنوان بريد إلكتروني صحيح<br>"
	+ "</td><td><font size=-1 color=red>"
	+ "* سيتم إرسال بريد الى هذا العنوان لإستكمال التسجيل<br>"
	+ "</td></tr>");


writeTextField("الكلمة السرية","user_password1");
writeTextField("إعادة الكلمة السرية للتأكيد ","user_password2");

document.write("<tr class=fixed><td><font size=-1 color=red>"
	+ "* يجب ان تكون الكلمة السرية على الأقل 6 أحرف<br>"
	+ "* يجب الا تكون الكلمة السرية مشابة للإسم<br>"
	+ "</td><td><font size=-1 color=red>"
	+ "* يجب أن تتطابق الكلمة السرية مع أعادتها<br>"
	+ "* يفضل ألا تكون الكلمة السرية مكونة من أرقام فقط<br>"
	+ "</td></tr>");

	/*document.write("<tr class=fixed><td class=optionheader_selected><nobr>رمز التأكيد: </td><td>"
	 + writeCaptcha() + ""
	+ "</td></tr>");*/
		

writeTextField2("المدينة","user_city");
writeTextField2("المنطقة","user_state");

// writeTextField2("الدولة","user_country");

writeCountrySelector(member_country,"user_country","");


writeTextField2("المهنة","user_occupation");
writeTextField2("العمر","user_age");

document.write("<tr class=fixed><td id=row_user_sex class=optionheader><nobr>الجنس: </td>"
	+ "<td class=list colspan=3>");
genderSelector();	
document.write("</td></tr>");


document.write("<tr class=fixed><td class=list_center colspan=5>"
	+ "<input type=button value='أرسل طلب التسجيل' onclick='submitForm()'>"
	+ "</td></tr></table>");


if (registerResult.length > 0)
	{
	userinfo.user_name.value = user_name;
	userinfo.user_email.value = user_email;
	
	
	 
	}


}
}

function writeTextField(title,name)
	{
	var type = "text";

	if (name.indexOf("password") >= 0)
		type = "password";

	document.write("<tr class=fixed><td id=row_"+name+" class=optionheader_selected><nobr>"+title+": </td>"
		+ "<td class=list colspan=3><input class=insidetitle type="+type+" 	style=\"width:300\" name="+name+"></td></tr>");
	}

function writeTextField2(title,name)
	{
	document.write("<tr class=fixed><td id=row_"+name+" class=optionheader><nobr>"+title+": </td>"
		+ "<td class=list colspan=3><input class=insidetitle type=text style=\"width:150\" name="+name+"></td></tr>");
	}
	
	
function writeCountrySelector(title,name,value)
{
document.write("<tr class=fixed><td id=row_"+name+" class=optionheader><nobr>"+title+": </td>"
	+ "<td class=list colspan=3>");

document.write("<select onchange=\"checkChanges()\" class=insidetitle type=text style=\"width:200;\" name="+name+">");

var x = 0;

while (x < countries_list.length)
	{
	if (countries_list[x] == value)
		document.write("<option selected value='" + countries_list[x] + "'>" + countries_list[x+1]);
	else
		document.write("<option value='" + countries_list[x] + "'>" + countries_list[x+1]);
	
	x += 2;
	}
		
document.write("</select></td></tr>");
}

function writeCaptcha() {
    return ("<center><div id=captchabox><table><tr><td valign=bottom><img alt='تغيير الرقم' onclick=\"javacript:newCaptcha();\" src=icons/reload.png></td><td valign=top><img width=150 height=40 src=captcha.php?width=100&height=40&characters=5></td><td valign=top>"
            + "<nobr><center><b><label for=security_code>رمز التأكيد:<br></label>"
            + "<input id=security_code name=security_code type=text style=\"width:60px;font-size:12px;\">"
            + "</td></tr></table></div>");
}

function newCaptcha() {
    var r = Math.floor(Math.random() * 10000) + 9999;
    var nc = "<table><tr><td valign=bottom><img alt='تغيير الرقم' onclick=\"javacript:newCaptcha();\" src=icons/reload.png></td><td valign=top><img width=150 height=40 src=captcha.php?characters=5></td><td valign=top>"
            + "<nobr><center><b>رمز التأكيد:<br>"
            + "<input type=text style=\"width:60px;font-size:12px;\" id=security_code name=security_code>"
            + "<input type=hidden name=capper value=" + r + "></td></tr></table>";

    if (document.getElementById)
    { var oe = document.getElementById("captchabox"); oe.innerHTML = nc; }
    else if (document.layers && document.layers["captchabox"])
        document.layers["captchabox"].innerHTML = nc;
    else if (document.all)
        document.all["captchabox"].innerHTML = nc;
}

function genderSelector()
{
document.write("&nbsp;&nbsp;&nbsp;<INPUT type=radio class=optionheader_radio NAME=user_sex VALUE=1>");
document.write("ذكر");

document.write("&nbsp;&nbsp;&nbsp;<INPUT type=radio class=optionheader_radio NAME=user_sex VALUE=2>");
document.write("أنثى</td>");
}


var easypass = new Array (
"123456","123456789","123123","000000","111111","12345678","112233","666666","654321",
"1234567","123321","555555","121212","999999","222222","101010","102030","123654",
"987654","987654321","0123456","0123456789");


function submitForm()
{
var genderval = 0;

for( i = 0; i < userinfo.user_sex.length; i++ )
    {
    if( userinfo.user_sex[i].checked == true )
    genderval = userinfo.user_sex[i].value;
    }

if ((genderval != 1) && (genderval != 2))
	{
	confirm("يجب أن تحدد جنسك - ذكر أو أنثى");
	return;
	}

if (userinfo.user_email.value.toLowerCase().indexOf("http://") == 0)
	userinfo.user_email.value = userinfo.user_email.value.slice(7);

if (userinfo.user_email.value.toLowerCase().indexOf("www.") == 0)
	userinfo.user_email.value = userinfo.user_email.value.slice(4);

if (userinfo.user_name.value.length == 0)
	{
	confirm("يجب أن تدخل إسم لك في المنتديات");
	return;
	}
	
	/*if (userinfo.security_code.value.length == 0)
	{
	confirm("المرجوا ادخال كود التحقق");
	return;
	}*/
	
if (userinfo.user_name.value.length < 3)
	{
	confirm("يجب أن يكون الاسم مكون من 3 أحرف على الأقل");
	return;
	}

if (userinfo.user_name.value.length > 30)
	{
	confirm("يجب أن يكون الاسم مكون من 30 حرفا أو أقل");
	return;
	}

if (userinfo.user_name.value.indexOf("ـ") >= 0)
	{
	confirm("لا يسمح بإستخدام رمز التمديد في الأسماء");
	return;
	}

if (userinfo.user_name.value.indexOf("\"") >= 0)
	{
	confirm("لا يسمح بإستخدام رمز '' في الأسماء");
	return;
	}

if (userinfo.user_name.value.indexOf("@") >= 0)
	{
	confirm("لا يسمح بإستخدام رمز @ في الأسماء");
	return;
	}

if (userinfo.user_name.value.indexOf("'") >= 0)
	{
	confirm("لا يسمح بإستخدام رمز ' في الأسماء");
	return;
	}

if (userinfo.user_name.value.indexOf("|") >= 0)
	{
	confirm("لا يسمح بإستخدام رمز | في الأسماء");
	return;
	}

if (userinfo.user_name.value.indexOf("\\") >= 0)
	{
	confirm("لا يسمح بإستخدام رمز \\ في الأسماء");
	return;
	}

if (userinfo.user_name.value.indexOf(".") >= 0)
	{
	confirm("لا يسمح بإستخدام رمز . في الأسماء");
	return;
	}

if (parseInt(userinfo.user_name.value) == userinfo.user_name.value)
	{
	confirm("لا يمكن استخدام اسماء تحتوي على أرقام فقط");
	return;
	}

if (userinfo.user_email.value.length == 0)
	{
	confirm("يجب أن تدخل عنوان بريد الكتروني");
	return;
	}
	
if (userinfo.user_email.value.toLowerCase().indexOf("startimes.com") >= 0)
	{
	confirm("لا يمكن استخدام \r\nstartimes.com \r\nفي عنوان البريد الالكتروني");
	return;
	}
	
if (userinfo.user_email.value.toLowerCase().indexOf("startimes2.com") >= 0)
	{
	confirm("لا يمكن استخدام \r\nstartimes2.com\r\n في عنوان البريد الالكتروني");
	return;
	}

if (userinfo.user_email.value.toLowerCase().indexOf("startimes3.com") >= 0)
	{
	confirm("لا يمكن استخدام \r\nstartimes3.com\r\n في عنوان البريد الالكتروني");
	return;
	}

if (userinfo.user_email.value.toLowerCase().indexOf("kooora.com") >= 0)
	{
	confirm("لا يمكن استخدام \r\nkooora.com\r\n في عنوان البريد الالكتروني");
	return;
	}

if (userinfo.user_email.value.toLowerCase().indexOf("kooora2.com") >= 0)
	{
	confirm("لا يمكن استخدام \r\nkooora2.com\r\n في عنوان البريد الالكتروني");
	return;
	}

if (userinfo.user_password1.value.length == 0)
	{
	confirm("يجب أن تدخل كلمة سر من إختيارك");
	return;
	}

if (userinfo.user_password1.value.length < 6)
	{
	confirm("يجب أن تكون كلمة السر مكونة من 6 أحرف على الأقل");
	return;
	}

if (userinfo.user_name.value.length > 24)
	{
	confirm("يجب أن يكون كلمة السر مكونة من 24 حرفا أو أقل");
	return;
	}

if (userinfo.user_password2.value.length == 0)
	{
	confirm("يجب أن تدخل إعادة تأكيد لكلمة السر");
	return;
	}

if (userinfo.user_password1.value  != userinfo.user_password2.value)
	{
	confirm("يجب أن تتطابق كلمة السر مع أعادتها للتأكيد");
	return;
	}

if (userinfo.user_password1.value  == userinfo.user_name.value)
	{
	confirm("يجب أن تكون كلمة السر مختلفة عن إسم العضوية");
	return;
	}

if (userinfo.user_password1.value.toLowerCase()  == userinfo.user_name.value.toLowerCase())
	{
	confirm("يجب أن تكون كلمة السر مختلفة عن إسم العضوية");
	return;
	}

if (userinfo.user_password1.value.toLowerCase()  == userinfo.user_email.value.toLowerCase())
	{
	confirm("يجب أن تكون كلمة السر مختلفة عن البريد الإلكتروني");
	return;
	}
	
var x;

for (x = 0; x < easypass.length; x++)
{
if (userinfo.user_password1.value == easypass[x])
	{
	confirm("الكلمة السرية المختارة سهلة جدا.\r\nالرجاء إختيار غيرها.");
	return;
	}

}

var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;

if (!regex.test(userinfo.user_email.value))
	{
	confirm("عنوان البريد الالكتروني الذي أدخلته لا يبدو صحيحا");
	return;
	}

userinfo.submit();
}
