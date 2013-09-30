var user_password1 = "";
var user_password2 = "";
var currentcolor = "";

function render_content() {

	if (user_editmode == 0)
	{
		document.write("<center><table border=0 cellpadding=4 cellspacing=1 bgcolor=gray>");

		document.write("<tr class=fixed>"
			+ "<td class=list><img src='"+Icones+"icons/iprofile '></td>"
			+ "<td class=optionheader>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
			+ "<font color=yellow size=+2>"+editmember_edit_main1+"</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>"
			+editmember_edit_main2
			+ "</td></tr>");

		document.write("<tr class=fixed><td class=list colspan=3>"
		+ "<a href=\""+link+"&editmember=true&emm=1&src="+escape("f.aspx?editmember=true")+"\">"
		+ "تغيير كلمتك السرية"
		+ "</a>"
		+ "</td></tr>");

		document.write("<tr class=fixed><td class=list colspan=3>"
		+ "<a href=\"" + link + "&editmember=true&emm=4&src=" + escape("f.aspx?editmember=true") + "\">"
		+ "تغيير بريدك الإلكتروني"
		+ "</a>"
		+ "</td></tr>");

		document.write("<tr class=fixed><td class=list colspan=3>"
		+ "<a href=\""+link+"&editmember=true&emm=2&src="+escape("f.aspx?editmember=true")+"\">"
		+ editmember_edit_menu2
		+ "</a>"
		+ "</td></tr>");

        if (memberLevel > 1)
		    document.write("<tr class=fixed><td class=list colspan=3>"
		    + "<a href=\""+link+"&changemobile=true&src="+escape("f.aspx?editmember=true")+"\">"
		    + "ربط العضوية برقم هاتف جوال"
		    + "</a>"
		    + "</td></tr>");
		
		document.write("<tr class=fixed><td class=list colspan=3>"
		+ "<a href=\""+link+"&editsignature="+user_id+"&src="+escape("f.aspx?editmember=true")+"\">"
		+ editmember_edit_menu3
		+ "</a>"
		+ "</td></tr>");

		document.write("<tr class=fixed><td class=list colspan=3>"
		+ "<a href=\""+link+"&memb=plaques\">"
		+ editmember_edit_menu4
		+ "</a>"
		+ "</td></tr>");

		document.write("<tr class=fixed><td class=list colspan=3>"
		+ "<a href=\""+link+"&list=-1\">"
		+ editmember_edit_menu5
		+ "</a>"
		+ "</td></tr>");

		document.write("<tr class=fixed><td class=list colspan=3>"
		+ "<a href=\""+link+"&active=private\">"
		+ editmember_edit_menu7
		+ "</a>"
		+ "</td></tr>");

		document.write("<tr class=fixed><td class=list colspan=3>"
		+ "<a href=\""+link+"&changename=true\">"
		+ editmember_edit_menu6
		+ "</a>"
		+ "</td></tr>");

		if (memberLevel > 1)
			document.write("<tr class=fixed><td class=list colspan=3>"
			+ "<a href=\""+link+"&svc=track\">"
			+ "سجل الإتصال لعضويتك"
			+ "</a>"
			+ "</td></tr>");

		if (memberLevel > 1)
			document.write("<tr class=fixed><td class=list colspan=3>"
			+ "<a href=\""+link+"&svc=mhis\">"
			+ "سجل محاولات الدخول لعضويتك "
			+ "</a>"
			+ "</td></tr>");
			
		document.write("</table>");


	}
	else
	{
	if (user_hideemail == "") user_hideemail = "0";
	if (user_hideactivity == "") user_hideactivity = "0";


	document.write("<form action=\""+link+"samember/mod"+user_editmode+"\" name=userinfo method=post>"
		+ "<input type=hidden name=user_id value="+user_id+">"
		+ "<input type=hidden name=caller value=\""+escape(srcCaller)+"\">");

    
	document.write("<center><table border=0 cellpadding=4 cellspacing=1 bgcolor=gray>");


	document.write("<tr><td colspan=4 class=optionsbar_menus><center><font color=red size=+2>"+editmember_edit+"</font><br>"+editmember_please_update+"</td></tr>");

	if (user_editmode == 1) {
	    writeTextField(member_pass0, "user_password0", "", 0);
	    // writeTextField(member_email, "user_email", user_email, 0);

	    //	if (last_email_change < 0)
	    {
	        writeTextField(member_pass1, "user_password1", "", 1);
	        writeTextField(member_pass2, "user_password2", "", 2);
	    }
	}

	if (user_editmode == 4) {
	    document.write("<tr><td colspan=4 class=optionsbar_menus><center><font color=red size=+1>");
	    document.write("لتغيير البريد الإلكتروني المسجل بالعضوية<br>");
	    document.write("يجب توفير الإيميل الحالي وكلمتك السرية الحالية<br>");
	    document.write("والإيميل الجديد الذي ترغب بربط العضوية به<br>");
	    document.write("وسيتم إرسال بريد إلكتروني على الإيميل الجديد<br>");
	    document.write("لتأكيده وإتمام عملية الربط به<br>");
	    document.write("</td></tr>");

	    writeTextField(member_pass0, "user_password0", "", 1);
	    writeTextField("الإيميل الحالي المسجل بالعضوية", "user_curmail", "", 1);
	    writeTextField("الإيميل الجديد للربط بالعضوية", "user_newmail", "", 1);
	}

	if (user_editmode == 5) {
	    document.write("<tr><td colspan=4 class=optionsbar_menus><center><font color=red size=+1>");
	    document.write("تأكيد تغيير البريد الإلكتروني المسجل بالعضوية:<hr>");
	    document.write("الرجاء إدخال رمز التأكيد الذي إرسل لك بالبريد الإلكتروني<br>");
	    document.write("</td></tr>");

	    writeTextField(member_pass0, "user_password0", "", 1);
	    writeTextField("رمز التأكيد", "user_check", "", 1);
	}


	if (user_editmode == 2) {

	    currentcolor = user_fontcolor;

	writeTextField(member_city,"user_city",user_city,1);
	writeTextField(member_state,"user_state",user_state,2);

	document.write("<tr class=fixed><td id=row_user_country class=optionheader>"+member_country+": </td><td>");
	writeCountrySelector(member_country,"user_country",user_country);
	document.write("</td>");

	writeTextField(member_occupation,"user_occupation",user_occupation,2);
	writeTextField(member_marstatus,"user_marstatus",user_marstatus,1);
	writeTextField(member_age,"user_age",user_age,2);

	document.write("<tr class=fixed><td id=row_user_gender class=optionheader>"+member_sex+": </td>");
	genderSelector();
	document.write("</tr>");

	document.write("<tr class=fixed><td id=row_user_hideemail class=optionheader>"+member_email_allow+": </td>");
	hideEmailSelector();
	document.write("</tr>");

	document.write("<tr class=fixed><td id=row_user_allowmsgs class=optionheader>"+mail_title+": </td>");
	allowMsgsSelector();
	document.write("</tr>");


	document.write("<tr class=fixed><td id=row_user_hideactivity class=optionheader>"+member_browse_visible+": </td>");
	hideActivitySelector();
	document.write("</tr>");

	// if (memberLevel > 1) {
	    // if ((memberLevel > 2) || (memberLevelSup >= 1))
	        writeTextField(member_info_name_real, "user_title", user_title, 3);
	// }

	document.write("<tr class=fixed><td class=optionheader>"+member_signature+": </td><td class=list colspan=3>"
		+ "<a target=_new href=\""+link+"&editsignature="+user_id+"&src="+escape(srcCaller)+"\">"
		+ member_click_to_edit_signature + "</a>"
		+ "</td></tr>");


	writeTextField(member_photo,"user_photo_url",user_photo_url,0);
	writeTextField(member_homepage,"user_homepage",user_homepage,0);
	writeTextField(member_link1,"user_link1",user_link1,0);
	writeTextField(member_link2,"user_link2",user_link2,0);

	writeTextArea(member_quote,"user_quote",user_quote);
	writeTextArea(member_bio,"user_bio",user_bio);
	writeTextArea(member_hobbies,"user_hobbies",user_hobbies);
	writeTextArea(member_news,"user_lnews",user_lnews);
	}

	if (user_editmode == 2) {

	    document.write("<tr class=fixed><td id=row_user_hideactivity class=optionheader>نمط الخط الإفتراضي لمشاركاتك:</td>");
	    fontSelector();
	    document.write("</tr>");


	if (max_skin > 0)
	{
	document.write("<tr class=fixed><td id=row_user_hideactivity class=optionheader>خلفية الشاشة</td>");
	skinsSelector();
	document.write("</tr>");
	}
	}

var button1 = req_enter_changes;
var button2 = req_cancel_changes;

if (user_editmode == 4) { button1 = "أدخل الطلب"; button2 = ""; }
if (user_editmode == 5) { button1 = "تغيير الإيميل"; button2 = ""; }

document.write("<tr class=fixed><td class=list_center colspan=5><center>"
       // + "<font color=red>يجب إدخال رمز التأكيد الظاهر أدناه بشكل صحيح لإدخال التغييرات:<br>"
        //+ writeCaptcha() + "<br>"
		+ "<input type=button onclick='SubmitForm()' value='" + button1 + "'>");
if (button2 != "") document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=reset value='"+req_cancel_changes+"' onclick=\"clearChanges()\">");

document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=button value='"+req_return+"' onclick=\"document.location='"+srcCaller+"'\">"
		+ "</td></tr>");

	document.write("</table>");

	document.write("<font size=-1 color=red>"+req_highlight_note+"<br><br><br>");
}
}


function writeCountrySelector(title,name,value)
{
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

document.write("</select>");
}


function writeTextField(title,name,value,where)
	{
	var type = "text";
    var disabled = "";
    
	if (name.indexOf("password") >= 0)
		type = "password";

	if (name.indexOf("email") >= 0)
		disabled = " disabled=disabled ";
		
	if ((where == 0) || (where == 1) || (where == 3))
		document.write("<tr class=fixed>");

	document.write("<td id=row_"+name+" class=optionheader><nobr>"+title+": </td>");

	if ((where == 0) || (where == 3))
		{
		if (where == 3)
			document.write("<td class=list colspan=3>");
		else
			document.write("<td class=list dir=ltr align=right colspan=3>");

		document.write("<input "+disabled+" onchange=\"checkChanges()\" class=insidetitle type="+type+" style=\"width:100%\" name="+name+" value=\""+ value + "\"></td>");
		}
	else
		{
		document.write("<td class=list>");
		document.write("<input "+disabled+" onchange=\"checkChanges()\" class=insidetitle type="+type+" style=\"width:200\" name="+name+" value=\""+ value + "\"></td>");
		}


	if ((where == 0) || (where == 2) || (where == 3))
		document.write("</tr>");
	}

function writeTextArea(title,name,value)
	{
	document.write("<tr class=fixed><td id=row_"+name+" class=optionheader>"+title+": </td><td class=list colspan=3>"
		+ "<textarea onchange=\"checkChanges()\" class=insidetitle type=text style=\"width:99%;height:150px;resize: none;\" name="+name+">"+ value + "</textarea></td></tr>");
	}


function genderSelector()
{
if (user_gender == "") user_gender = "0";

var checked = "";
if (user_gender == "0")	checked = " CHECKED=CHECKED";
if (user_gender != "0") checked += " DISABLED=DISABLED";
document.write("<td class=list colspan=3><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=user_gender VALUE=0"+checked+">");
document.write(member_unspecified);

checked = "";
if (user_gender == "1")	checked = " CHECKED=CHECKED";
if (user_gender != "0") checked += " DISABLED=DISABLED";
document.write("&nbsp;&nbsp;&nbsp;<INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=user_gender VALUE=1"+checked+">");
document.write(member_male);

checked = "";
if (user_gender == "2")	checked = " CHECKED=CHECKED";
if (user_gender != "0") checked += " DISABLED=DISABLED";
document.write("&nbsp;&nbsp;&nbsp;<INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=user_gender VALUE=2"+checked+">");
document.write(member_female + "</td>");

if (user_gender != "0") 
	document.write("<input type=hidden name=user_gender value="+user_gender+">");
}

function blockSigSelector()
{
if (user_blocksig == "") user_blocksig = "0";

var checked = "";
if (user_blocksig == "0")	checked = " CHECKED=CHECKED";
document.write("<td class=list colspan=3><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=user_blocksig VALUE=0"+checked+">");
document.write("ظاهر");

checked = "";
if (user_blocksig == "1")	checked = " CHECKED=CHECKED";
document.write("&nbsp;&nbsp;&nbsp;<INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=user_blocksig VALUE=1"+checked+">");
document.write("مخفي");

checked = "";
if (user_blocksig == "2")	checked = " CHECKED=CHECKED";
document.write("&nbsp;&nbsp;&nbsp;<INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=user_blocksig VALUE=2"+checked+">");
document.write("مخفي مع تحذير</td>");
}


function hideEmailSelector()
{
var checked = "";
if (user_hideemail == "0")	checked = " CHECKED=CHECKED";
document.write("<td class=list><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=user_hideemail VALUE=0"+checked+">");
document.write(member_email_allow_no);

checked = "";
if (user_hideemail == "1")	checked = " CHECKED=CHECKED";
document.write("</td><td class=list colspan=2><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=user_hideemail VALUE=1"+checked+">");
document.write(member_email_allow_yes + "</td>");
}

function allowMsgsSelector()
{
var checked = "";
if (user_allowmsgs == "0")	checked = " CHECKED=CHECKED";
document.write("<td class=list><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=user_allowmsgs VALUE=0"+checked+">");
document.write(member_msgs_allow_no);

checked = "";
if (user_allowmsgs == "1")	checked = " CHECKED=CHECKED";
document.write("</td><td class=list colspan=2><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=user_allowmsgs VALUE=1"+checked+">");
document.write(member_msgs_allow_yes + "</td>");
}


function skinsSelector()
{
document.write("<td class=list colspan=4>نسبة شفافية الخلفية المختارة: ");

document.write("<select onchange=\"checkChanges()\" class=insidetitle type=text style=\"width:50;\" name=user_opacity>");

var x = 0;

for (x = 1; x <= 20; x++)
	{
	if (user_opacity == x)
		document.write("<option selected value='" + x + "'>" + (x*5) + "</option>");
	else
		document.write("<option value='" + x + "'>" + (x*5) + "</option>");
	}

document.write("</select>");

document.write("&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray size=-1>(ملاحظة: بعض  الخلفيات لا تعتمد خاصية التحكم بالشفافية)");


var checked = "";
x = 0;
document.write("<br><table border=0><tr>");
document.write("<input type=hidden name=scw value=" + screen.width + ">");

for (x = 1; x <= max_skin; x++)
{
checked = "";
if (user_skin == x)	checked = " CHECKED=CHECKED";
document.write("<td class=optionsbar_menus>" + (x) + "<br>"
+ "<INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=user_skin VALUE="+(x)+ " " +checked+">");
document.write("<img src="+Icones+"ikonzskins/gskin" + (x) + "  width=100 height=100></td>");

if (((x+1) % 4) == 0)
{
if (x > 0) document.write("</tr><tr>");
}
}

document.write("</tr></table></td>");


}


function hideActivitySelector()
{

var checked = "";
if (user_hideactivity == "1")	checked = " CHECKED=CHECKED";
document.write("<td class=list colspan=3><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=user_hideactivity VALUE=1"+checked+">");
document.write(member_browse_visible_no);

checked = "";
if (user_hideactivity == "0")	checked = " CHECKED=CHECKED";
document.write("&nbsp;&nbsp;&nbsp;<INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=user_hideactivity VALUE=0"+checked+">");
document.write(member_browse_visible_yes + "</td>");
}


function checkOptionStatus(rowname,v1,v2)
{
var row = eval(rowname);

if (v1 == v2)	row.className = "optionheader";
else			row.className = "optionheader_selected";
}


function checkChanges()
{
var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;

if (user_editmode == 1)
{
if (!regex.test(userinfo.user_email.value))
	userinfo.user_email.value = user_email;

checkOptionStatus("row_user_email",userinfo.user_email.value,user_email);
checkOptionStatus("row_user_password0",userinfo.user_password0.value,"");
checkOptionStatus("row_user_password1",userinfo.user_password1.value,"");
checkOptionStatus("row_user_password2",userinfo.user_password2.value,"");
}

if (user_editmode == 2)
{
if (parseInt(userinfo.user_age.value) != userinfo.user_age.value)
	userinfo.user_age.value = user_age;

checkOptionStatus("row_user_city",userinfo.user_city.value,user_city);
checkOptionStatus("row_user_state",userinfo.user_state.value,user_state);
checkOptionStatus("row_user_occupation",userinfo.user_occupation.value,user_occupation);
checkOptionStatus("row_user_country",userinfo.user_country.value,user_country);
checkOptionStatus("row_user_marstatus",userinfo.user_marstatus.value,user_marstatus);
checkOptionStatus("row_user_age",userinfo.user_age.value,user_age);
checkOptionStatus("row_user_photo_url",userinfo.user_photo_url.value,user_photo_url);
//checkOptionStatus("row_user_homepage",userinfo.user_homepage.value,user_homepage);
//checkOptionStatus("row_user_link1",userinfo.user_link1.value,user_link1);
//checkOptionStatus("row_user_link2",userinfo.user_link2.value,user_link2);
checkOptionStatus("row_user_bio",userinfo.user_bio.value,user_bio);

checkOptionStatus("row_user_gender",getRadioValue("user_gender"),user_gender);
checkOptionStatus("row_user_hideemail",getRadioValue("user_hideemail"),user_hideemail);
checkOptionStatus("row_user_hideactivity",getRadioValue("user_hideactivity"),user_hideactivity);
checkOptionStatus("row_user_allowmsgs",getRadioValue("user_allowmsgs"),user_allowmsgs);

if (memberLevel > 1)
	checkOptionStatus("row_user_title",userinfo.user_title.value,user_title);
}

}


function clearChanges()
{
if (user_editmode == 1)
{
checkOptionStatus("row_user_email",user_email,user_email);
checkOptionStatus("row_user_password0","","");
checkOptionStatus("row_user_password1","","");
checkOptionStatus("row_user_password2","","");
}

if (user_editmode == 2)
{
checkOptionStatus("row_user_city",user_city,user_city);
checkOptionStatus("row_user_state",user_state,user_state);
checkOptionStatus("row_user_occupation",user_occupation,user_occupation);
checkOptionStatus("row_user_country",user_country,user_country);
checkOptionStatus("row_user_marstatus",user_marstatus,user_marstatus);
checkOptionStatus("row_user_age",user_age,user_age);
checkOptionStatus("row_user_photo_url",user_photo_url,user_photo_url);
//checkOptionStatus("row_user_homepage",user_homepage,user_homepage);
//checkOptionStatus("row_user_link1",user_link1,user_link1);
//checkOptionStatus("row_user_link2",user_link2,user_link2);
checkOptionStatus("row_user_bio",user_bio,user_bio);

checkOptionStatus("row_user_gender",user_gender,user_gender);
checkOptionStatus("row_user_hideemail",user_hideemail,user_hideemail);
checkOptionStatus("row_user_hideactivity",user_hideactivity,user_hideactivity);

if (memberLevel > 1)
	checkOptionStatus("row_user_title",user_title,user_title);
}

}

function getRadioValue(name)
{
for (var i = 0; i < userinfo.elements.length; i++)
	{
	if ((userinfo.elements[i].name.indexOf(name) > -1))
		{
		if (userinfo.elements[i].checked)
			return(userinfo.elements[i].value);
        }
    }
return("0");
}


function writeCaptcha() {
    var r = Math.floor(Math.random() * 10000) + 9999;
    return ("<center><div id=captchabox><table><tr><td valign=bottom><img alt='تغيير الرقم' onclick=\"javacript:newCaptcha();\" src=icons/reload.png></td><td valign=top><img width=200 height=40 src=icon.aspx?captcha=" + memberID + "&cap=" + r + "></td><td valign=top>"
            + "<nobr><center><b>رمز التأكيد:<br>"
            + "<input type=text style=\"width:60px;font-size:12px;\" name=captcha>"
            + "<input type=hidden name=capper value=" + r + "></td></tr></table></div>");
}

function newCaptcha() {
    var r = Math.floor(Math.random() * 10000) + 9999;
    var nc = "<table><tr><td valign=bottom><img alt='تغيير الرقم' onclick=\"javacript:newCaptcha();\" src=icons/reload.png></td><td valign=top><img width=200 height=40 src=icon.aspx?captcha=" + memberID + "&cap=" + r + "></td><td valign=top>"
            + "<nobr><center><b>رمز التأكيد:<br>"
            + "<input type=text style=\"width:60px;font-size:12px;\" name=captcha>"
            + "<input type=hidden name=capper value=" + r + "></td></tr></table>";

    if (document.getElementById)
    { var oe = document.getElementById("captchabox"); oe.innerHTML = nc; }
    else if (document.layers && document.layers["captchabox"])
        document.layers["captchabox"].innerHTML = nc;
    else if (document.all)
        document.all["captchabox"].innerHTML = nc;
}




// Default font/colour selectors..

var fontsList = new Array(
	"arabic transparent", 1, "بسيط",
	"arial", 1, "آريال",
	"tahoma", 1, "تاهوما",
	"akhbar mt", 1, "أخبار",
	"andalus", 1, "أندلس",
	"bold italic art", 1, "فني ثقيل",
	"decotype naskh", 1, "نسخ",
	"diwani letter", 1, "ديواني",
	"diwani outline shaded", 1, "ديواني مظلل",
	"diwani simple striped", 1, "ديواني مخطط",
	"monotype kufi", 1, "كوفي",
	"kufi extended outline", 1, "كوفي كبير",
	"mudir mt", 1, "مدير",
	"old antic bold", 1, "أنتيك",
	"simple indust shaded", 1, "صناعي",
	"decotype thuluth", 1, "ثلث",
	"arial black", 0, "Arial",
	"arial narrow", 0, "Arial Narrow",
	"comic sans ms", 0, "Comic",
	"courier new", 0, "Courier",
	"tahoma", 0, "Tahoma",
	"times new roman", 0, "Times",
	"verdana", 0, "Verdana"
	);

function ColorSelector(oName) {
    this.oName = oName;
    this.getColor = getColor;
    this.setColor = setColor;


    this.getElementColor = "colSafe" + oName
    this.getElementColorText = "colText" + oName

    this.drawColorSafe = drawColorSafe;

    var colCustom = "colCustom" + oName
    var colText = "colText" + oName
    var colSafe = "colSafe" + oName
    var sHTML = "";
    //sHTML += "<table cellpadding=4 cellspacing=0 border=0 width=365 style='border:#a9a9a9 1 dotted;' bgcolor='#f0f4fb'>"
    sHTML += "<table cellpadding=4 cellspacing=0 border=0 width=365>"
    sHTML += "<tr><td height=3></td></tr>"
    sHTML += "<tr><td>" + this.drawColorSafe() + "</td></tr>"
    sHTML += "</table>"
    this.drawColor = sHTML
}

function getColor() {
    return eval("colText" + this.oName).value;
}

function setColor(color) {
    eval("colSafe" + this.oName).style.background = color;
    // eval("colText" + this.oName).innerText = color;
}

function drawColorSafe() {
    var colSafe = "colSafe" + this.oName
    var colText = "colText" + this.oName

    var sHTML = "";

    var c1 = new Array("FFFFCC", "FFCC66", "FF9900", "FFCC99", "FF6633", "FFCCCC", "CC9999", "FF6699", "FF99CC", "FF66CC", "FFCCFF", "CC99CC", "CC66FF", "CC99FF", "9966CC", "CCCCFF", "9999CC", "3333FF", "6699FF", "0066FF", "99CCFF", "66CCFF", "99CCCC", "CCFFFF", "99FFCC", "66CC99", "66FF99", "99FF99", "CCFFCC", "33FF33", "66FF00", "CCFF99", "99FF00", "CCFF66", "CCCC66", "FFFFFF")
    var c2 = new Array("FFFF99", "FFCC00", "FF9933", "FF9966", "CC3300", "FF9999", "CC6666", "FF3366", "FF3399", "FF00CC", "FF99FF", "CC66CC", "CC33FF", "9933CC", "9966FF", "9999FF", "6666FF", "3300FF", "3366FF", "0066CC", "3399FF", "33CCFF", "66CCCC", "99FFFF", "66FFCC", "33CC99", "33FF99", "66FF66", "99CC99", "00FF33", "66FF33", "99FF66", "99FF33", "CCFF00", "CCCC33", "CCCCCC")
    var c3 = new Array("FFFF66", "FFCC33", "CC9966", "FF6600", "FF3300", "FF6666", "CC3333", "FF0066", "FF0099", "FF33CC", "FF66FF", "CC00CC", "CC00FF", "9933FF", "6600CC", "6633FF", "6666CC", "3300CC", "0000FF", "3366CC", "0099FF", "00CCFF", "339999", "66FFFF", "33FFCC", "00CC99", "00FF99", "33FF66", "66CC66", "00FF00", "33FF00", "66CC00", "99CC66", "CCFF33", "999966", "999999")
    var c4 = new Array("FFFF33", "CC9900", "CC6600", "CC6633", "FF0000", "FF3333", "993333", "CC3366", "CC0066", "CC6699", "FF33FF", "CC33CC", "9900CC", "9900FF", "6633CC", "6600FF", "666699", "3333CC", "0000CC", "0033FF", "6699CC", "3399CC", "669999", "33FFFF", "00FFCC", "339966", "33CC66", "00FF66", "669966", "00CC00", "33CC00", "66CC33", "99CC00", "CCCC99", "999933", "666666")
    var c5 = new Array("FFFF00", "CC9933", "996633", "993300", "CC0000", "FF0033", "990033", "996666", "993366", "CC0099", "FF00FF", "990099", "996699", "660099", "663399", "330099", "333399", "000099", "0033CC", "003399", "336699", "0099CC", "006666", "00FFFF", "33CCCC", "009966", "00CC66", "339933", "336633", "33CC33", "339900", "669933", "99CC33", "666633", "999900", "333333")
    var c6 = new Array("CCCC00", "996600", "663300", "660000", "990000", "CC0033", "330000", "663333", "660033", "990066", "CC3399", "993399", "660066", "663366", "330033", "330066", "333366", "000066", "000033", "003366", "006699", "003333", "336666", "00CCCC", "009999", "006633", "009933", "006600", "003300", "00CC33", "009900", "336600", "669900", "333300", "666600", "000000")

    sHTML += ("<table border=0 width=350 align=center cellpadding=0 cellspacing=0>")
    sHTML += ("<tr><td width=45 align=center bgcolor=ghostwhite style='border:#a9a9a9 1 solid'><table border=1 bgcolor=ghostwhite cellpadding=0 cellspacing=0><tr><td id='" + colSafe + "' width=27 height=27></td></tr></table></td>")
    sHTML += ("<td>&nbsp;</td><td>")

    sHTML += ("<table cellpadding=0 cellspacing=1 bgcolor=black>")
    for (var i = 1; i <= 6; i++) {
        sHTML += ("<tr>")
        for (var r = 0; r < eval("c" + i).length; r++) {
            var colour = eval("c" + i + "[r]")
            sHTML += ("<td style=\"cursor:hand;background-color:" + colour + ";\" width=9 height=6 onclick=\"" + colSafe + ".style.background='#" + colour + "';currentcolor='#" + colour + "';updateTextPreview();\"></td>")
        }
        sHTML += ("</tr>")
    }
    sHTML += ("</table>")

    sHTML += ("</td></tr>")

//    sHTML += ("<tr><td colspan=3 height=3></td></tr>")
//    sHTML += ("<tr><td colspan=3 align=right>")
//    sHTML += ("<b>رقم اللون المختار: <input dir=ltr type=text name='" + colText + "' id='" + colText + "' contentEditable=true style=\"width:53;height:19px;font:10 arial,sans-serif\" onchange=\"" + colSafe + ".style.background=this.value;updateTextPreview();\" value='" + user_fontcolor + "'>")
//    sHTML += ("</td></tr>")
    sHTML += ("</table>")
    return sHTML;
}


var fontSizes = new Array(8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 30);
var user_colorpicker = null;

function fontSelector() {
    document.write("<td class=list colspan=4>");

    document.write("<table width=100%><tr><td>");

    document.write("الخط: ")

    document.write("<select onchange=\"updateTextPreview()\" style=\"width:100;\" size=1 ID=user_font NAME=user_font>");

    for (x = 0; x < fontsList.length - 2; x += 3) {
        var f1, f3;
        f1 = fontsList[x];
        f3 = fontsList[x + 2];
        if (f3.length == 0) f3 = f1;

        if (f1 == user_font)  document.write("<option selected value='" + f1 + "'>" + f3);
        else document.write("<option value='" + f1 + "'>" + f3);
    }
    document.write("</select>")


    document.write("&nbsp;الحجم: ")

    document.write("<select onchange=\"updateTextPreview()\" style=\"width:40;\" size=1 ID=user_fontsize NAME=user_fontsize>");

    for (x = 0; x < fontSizes.length; x ++) {
        var xx = fontSizes[x];
        if (xx == user_fontsize)  document.write("<option selected value='" + xx + "'>" + xx);
        else document.write("<option value='" + xx + "'>" + xx);
    }
    document.write("</select>")

    document.write("&nbsp;التنسيق: ")

    document.write("<select onchange=\"updateTextPreview()\" style=\"width:60;\" size=1 ID=user_fontalign NAME=user_fontalign>");

    if (user_fontalign == "r")  document.write("<option selected value='r'>يمين</option>");
    else document.write("<option value='r'>يمين</option>");
    if (user_fontalign == "c")  document.write("<option selected value='c'>وسط</option>");
    else document.write("<option value='c'>وسط</option>");
    if (user_fontalign == "l")  document.write("<option selected value='l'>يسار</option>");
    else document.write("<option value='l'>يسار</option>");
    document.write("</select><hr>")

    document.write("<input type=hidden name=user_color value='"+ currentcolor +"'>");

    document.write("<div id=divFontColorPick style=\"display:block\">");
    user_colorpicker = new ColorSelector("user_colorpicker")
    document.write(user_colorpicker.drawColor)
	document.write("</div>");

	user_colorpicker.setColor(user_fontcolor);

	document.write("</td><td style=\"padding-left:20px;padding-right:20px;padding-top:10px:padding-bottom:10px;\">");
	document.write("<div id=textPreview style=\"background-color:white;width:200px;height:100px;padding:10px;\">نمط الخط<br>الحالي لعضويتك</div>");
	document.write("</td></tr></table></td>");
	updateTextPreview();
}

function updateTextPreview() {

    var font = userinfo.user_font[userinfo.user_font.selectedIndex].value;
    var size = userinfo.user_fontsize[userinfo.user_fontsize.selectedIndex].value;
    var align = userinfo.user_fontalign[userinfo.user_fontalign.selectedIndex].value;
    var color = currentcolor;

    var alignV = "";

    switch (align) {
        case "c": alignV = "center"; break;
        case "r": alignV = "right"; break;
        case "l": alignV = "left"; break;
    }

    document.getElementById("textPreview").style.fontFamily = font;
    document.getElementById("textPreview").style.fontSize = size;
    document.getElementById("textPreview").style.color = currentcolor;
    document.getElementById("textPreview").style.textAlign = alignV;
}


function SubmitForm() {
    // if (userinfo.captcha.value.length < 4) {
        // alert("يجب إدخال رمز التأكيد الذي يظهر في أعلى اليسار في الخانة أسفل الرمز")
        // return;
    // }

    if (user_editmode == 4) {

        if (userinfo.user_curmail.value == '') {
            confirm("يجب إدخال البريد الالكتروني الحالي");
            return;
        }

        if (userinfo.user_newmail.value == '') {
            confirm("يجب إدخال البريد الالكتروني الجديد");
            return;
        }

        if (userinfo.user_password0.value == '') {
            confirm("يجب إدخال الكلمة السرية الحالية");
            return;
        }

        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;

        if (!regex.test(userinfo.user_curmail.value)) {
            confirm("عنوان البريد الالكتروني الحالي الذي أدخلته لا يبدو صحيحا");
            return;
        }

        if (!regex.test(userinfo.user_newmail.value)) {
            confirm("عنوان البريد الالكتروني الجديد الذي أدخلته لا يبدو صحيحا");
            return;
        }

        if (userinfo.user_newmail.value == userinfo.user_curmail.value) {
            confirm("عنوان البريد الالكتروني الحالي والجديد متابطقان");
            return;
        }
    }

 	if (user_editmode == 2) userinfo.user_color.value = currentcolor;
    userinfo.submit();
}