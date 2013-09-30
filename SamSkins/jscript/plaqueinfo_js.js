
function t_options_bar()
{
document.write("<table border=0 cellspacing=2 width=100%><tr>");
document.write("<td width=100%>&nbsp;</td>");
document.write("<td class=optionsbar_menus>"+switchforum_selector_title+"<br>");
forumsSelector2();
document.write("</td></tr><tr><td></td></tr></table>");
}


var noticeMode = "";

function render_content()
	{
	var title = "";
	var auto = false;
	var logoSource = fileURL+"icon.php?i=unknown";

	if (plaqueinfo_logo.length > 0)
		logoSource = +"icon.php?p="+plaqueinfo_logo;

	t_options_bar(0);

	// document.write("<center><font color=red size=+2>");


	 

	// document.write("</font><br><br>");

	document.write("<form action=\""+link+"\" name=plaqueinfo method=post>"
		+ "<input type=hidden name=plaqueinfo_id value="+plaqueinfo_id+">"
		+ "<input type=hidden name=caller value=\""+escape(editCaller)+"\">");


	document.write("<center><table border=0 width=400 cellpadding=4 cellspacing=1 bgcolor=gray>");
	
	document.write("<tr ><td align=center class=optionsbar_menus colspan=4><nobr><font color=red size=+2>");
     if (plaqueinfo_id == 0)	document.write("إضافة وسام جديد");
	else 			document.write("تغيير خصائص الوسام رقم: "+plaqueinfo_id);
	document.write("</font><nobr></td></tr>");
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+"عنوان الوسام: </td><td class=list colspan=3>"
		+ "<input class=insidetitle type=text style=\"width:400\" name=plaqueinfo_desc value=\""
		+ plaqueinfo_desc+ "\">");

	document.write("&nbsp;&nbsp;"
		+ "<input class=insidetitle type=button value='+' "
		+ "onclick=\"appendForumTitle();\">");

	document.write("&nbsp;&nbsp;"
		+ "<input class=insidetitle type=button value='X' "
		+ "onclick=\"replaceTitle('');\">");

	if (supervisor)
		{
			document.write("<br><hr>&nbsp;&nbsp;"
				+ "<input class=insidetitle type=button value='للحذف' "
				+ "onclick=\"replaceTitle('-- للحذف --');\">"
				);

			document.write("&nbsp;&nbsp;"
				+ "<input class=insidetitle type=button value='لا تهاني' "
				+ "onclick=\"replaceTitle('** أوسمة التهنئة بالمناسبات لا تقبل **');\">"
				);

			document.write("&nbsp;&nbsp;"
				+ "<input class=insidetitle type=button value='لا صورة' "
				+ "onclick=\"appendTitle('** صورة الوسام لا تظهر - الرجاء التصحيح **');\">"
				);

			document.write("&nbsp;&nbsp;"
				+ "<input class=insidetitle type=button value='الحجم' "
				+ "onclick=\"appendTitle('** حجم صورة الوسام غير صحيح - الرجاء التعديل **');\">"
				);
		}


	document.write("</td></tr>");

	if ((plaqueinfo_status != 0) || (supervisor))
	{
	document.write("<tr class=fixed><td class=optionheader><nobr>المنتدى: </td><td class=list colspan=3>");
	forumsSelectorPlaque();

	document.write("</td></tr>");
	}

	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+"ملف الوسام: </td><td class=list colspan=3><nobr>"
		+ "<input onchange=\"checkLogo()\" class=insidetitle type=text style=\"width:250\" name=plaqueinfo_logo value=\""
		+ plaqueinfo_logo+ "\"><br><font size=-1 color=red>"
		+ "يجب إدخال إسم الملف وأن يكون على شكل gif."
		+ "<br>"
		+ "يمكن ادخال اسم الملف بدون أحرف gif. لأنها ستضاف اوتوماتيكيا"
		+ "<br><font color=blue>"
		+ "سيظهر الوسام في الأسفل بعد ان تنتهي من ادخال إسم الملف."
		+ "<br>"
		+ "إذا لم يظهر هذا يعني ان الملف عنوانه غير صحيح."
		+ "</td></tr>");

	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+"صورة الوسام: </td><td class=list colspan=3 align=center><nobr>"
		+ "<span id=logoImage><img src="+logoSource+" onError=\"this.src='"+Icones+"icons/kunknown';\"></span>"
		+ "&nbsp;&nbsp;&nbsp;<img src="+Icones+"icons/kstandard height=100 width=100>"
		+ "</td></tr>");


	if ((plaqueinfo_status != 0) || (supervisor))
	{
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+"عدد الأيام: </td><td class=list colspan=3>"
		+ "<input class=insidetitle type=text style=\"width:40\" name=plaqueinfo_days value=\""
		+ plaqueinfo_days+ "\">&nbsp;&nbsp;&nbsp;<font size=-1 color=red>"
		+ "عدد إيام ظهور الوسام تحت إسم العضو في مشاركاته</td></tr>");

	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+"نقاط التميز: </td><td class=list colspan=3>"
		+ "<input class=insidetitle type=text style=\"width:40\" name=plaqueinfo_points value=\""
		+ plaqueinfo_points+ "\">&nbsp;&nbsp;&nbsp;<font size=-1 color=red>"
		+ "عدد نقاط التميز التي تضاف للعضو عند منحه الوسام</td></tr>");


	document.write("<tr class=fixed><td class=optionheader><nobr>وضعية الوسام: </td>");
	statusSelector();
	document.write("</tr>");

	document.write("<tr class=fixed><td class=optionheader><nobr>منح الوسام للعضو: </td>");
	approvalSelector();
	document.write("</tr>");
	}

	document.write("<tr class=fixed><td class=optionheader><nobr>قفل الوسام: </td>");
	closedSelector();
	document.write("</tr>");

	document.write("<tr class=fixed><td class=list_center colspan=5>"
		+ "<input type=button value='"+req_enter_changes+"' onclick='submitForm()'>"
		+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=reset value='"+req_cancel_changes+"'\">"
		+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=button value='"+req_return+"' onclick=\"document.location='"+editCaller+"'\">"
		+ "</td></tr>");

	document.write("</table>");
}

function forumsSelectorPlaque()
{
document.write("<select class=insidetitle style=\"width:300\" name=plaqueinfo_forum size=1>");

if (memberLevel > 2)
{
if (plaqueinfo_forum == 0) document.write("<option selected value=0>-- وسام عام --");
else document.write("<option value=0>-- وسام عام --");
}

for (y = 0; y < forums.length-3; y+= 3)
	{
	if (forums[y] > 0)
		{
		if (memberLevel == 2)
		{
			for (yy = 0; yy < moderatedForums.length; yy++)
			{
			if (forums[y] == moderatedForums[yy])
				{
				if (forums[y] == plaqueinfo_forum)
					document.write("<option selected value='" + forums[y] + "'>" + forums[y+2]);
				else
					document.write("<option value='" + forums[y] + "'>" + forums[y+2]);
				}
			}
		}
		else
		{
			if (forums[y] == plaqueinfo_forum)
				document.write("<option selected value='" + forums[y] + "'>" + forums[y+2]);
			else
				document.write("<option value='" + forums[y] + "'>" + forums[y+2]);
		}
		}
	}

document.write("</select>");
}

function statusSelector()
{
var checked = "";
if (plaqueinfo_status == 1)	checked = " CHECKED=CHECKED";
document.write("<td class=list><nobr><INPUT type=radio class=optionheader_radio NAME=plaqueinfo_status VALUE=1"+checked+">");
document.write("الوسام ينتظر موافقة المراقب</td>");

checked = "";
if (plaqueinfo_status == 2)	checked = " CHECKED=CHECKED";
document.write("<td class=list><nobr><INPUT type=radio class=optionheader_radio NAME=plaqueinfo_status VALUE=2"+checked+">");
document.write("الوسام تحت التصميم</td>");

if (supervisor)
{
checked = "";
if (plaqueinfo_status == 0)	checked = " CHECKED=CHECKED";
document.write("<td class=list><nobr><INPUT type=radio class=optionheader_radio NAME=plaqueinfo_status VALUE=0"+checked+">");
document.write("الوسام حي</td>");
}
else document.write("<td class=list>&nbsp;</td>");
}

function approvalSelector()
{
var checked = "";
if (plaqueinfo_needsapproval == 0)	checked = " CHECKED=CHECKED";
document.write("<td class=list><nobr><INPUT type=radio class=optionheader_radio NAME=plaqueinfo_needsapproval VALUE=0"+checked+">");
document.write("لا يحتاج موافقة المدير أو المراقب</td>");

checked = "";
if (plaqueinfo_needsapproval == 1)	checked = " CHECKED=CHECKED";
document.write("<td class=list><nobr><INPUT type=radio class=optionheader_radio NAME=plaqueinfo_needsapproval VALUE=1"+checked+">");
document.write("يحتاج موافقة المراقب</td>");

checked = "";
if (plaqueinfo_needsapproval == 2)	checked = " CHECKED=CHECKED";
document.write("<td class=list><nobr><INPUT type=radio class=optionheader_radio NAME=plaqueinfo_needsapproval VALUE=2"+checked+">");
document.write("يحتاج موافقة المدير</td>");
}

function closedSelector()
{
var checked = "";
if (plaqueinfo_closed == 0)	checked = " CHECKED=CHECKED";
document.write("<td class=list><nobr><INPUT type=radio class=optionheader_radio NAME=plaqueinfo_closed VALUE=0"+checked+">");
document.write("الوسام مفتوح للإستخدام</td>");

checked = "";
if (plaqueinfo_closed == 1)	checked = " CHECKED=CHECKED";
document.write("<td class=list colspan=2><nobr><INPUT type=radio class=optionheader_radio NAME=plaqueinfo_closed VALUE=1"+checked+">");
document.write("الوسام مقفول ولا يظهر عند الترشيح</td>");

}


function checkLogo()
{
var logo = plaqueinfo.plaqueinfo_logo.value;
var img = eval("logoImage");

if (logo.length > 0)
	img.innerHTML = "<img src="+fileURL+"icon.php?p="+logo+" onError=\"this.src='"+fileURL+"icon.php?i=unknown';\" >";
}

function submitForm()
{

if (plaqueinfo.plaqueinfo_desc.value.length < 10)
	{
	confirm("يجب إدخال عنوان للوسام وأن يكون أطول من 10 أحرف");
	return;
	}

if (plaqueinfo.plaqueinfo_desc.value.indexOf("[") >= 0)
	{
	confirm("يجب إدخال عنوان للوسام وأن يكون أطول من 10 أحرف");
	return;
	}

if (plaqueinfo.plaqueinfo_desc.value.indexOf("]") >= 0)
	{
	confirm("يجب إدخال عنوان للوسام وأن يكون أطول من 10 أحرف");
	return;
	}

if (plaqueinfo.plaqueinfo_logo.value.length < 4)
	{
	confirm("يجب إدخال ملف للوسام وأن يكون أطول من 4 أحرف");
	return;
	}


if ((plaqueinfo_status != 0) || (supervisor))
{
var regex = /^[0-9]/;

if (!regex.test(plaqueinfo.plaqueinfo_days.value))
	{
	confirm("عدد الأيام يجب ان يكون بالأرقام فقط");
	return;
	}

if (!regex.test(plaqueinfo.plaqueinfo_points.value))
	{
	confirm("عدد نقاط التميز يجب ان يكون بالأرقام فقط");
	return;
	}
}

plaqueinfo.submit();
}

function appendForumTitle()
{
var curtext = document.plaqueinfo.plaqueinfo_desc.value;
var forumtitle = document.plaqueinfo.plaqueinfo_forum.options[document.plaqueinfo.plaqueinfo_forum.selectedIndex].text;

if (curtext.indexOf("منتدى") < 0)
	{
	if (forumtitle.indexOf("منتدى") == 0)	curtext += " ب" + forumtitle;
	else									curtext += " بمنتدى " + forumtitle;
	}

document.plaqueinfo.plaqueinfo_desc.value = curtext;
}

function replaceTitle(newtext)
{
document.plaqueinfo.plaqueinfo_desc.value = newtext;
}

function appendTitle(newtext)
{
document.plaqueinfo.plaqueinfo_desc.value += newtext;
}
