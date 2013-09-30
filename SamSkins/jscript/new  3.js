
function render_content()
{
document.write("<center><font color=red size=+2></font><br><br>");

document.write("<form action=\""+link+"\" method=post name=requestpass>");
document.write("<table border=0 cellpadding=4 cellspacing=1 bgcolor=gray>");

document.write("<tr class=fixed><td id=row_subject class=optionheader>"
	+ request_pass_intro + ": <br>"
	+ "<input class=insidetitle type=text style=\"width:250\" name=requestpass value=''>"
	+ "<br><font size=-1>"+request_pass_note+"</td></tr>");
document.write("<tr class=fixed><td class=list_center>"
	+ "<input type=submit value='"+request_pass_submit+"'></td></tr></table></form><br>");

if (memberLevel > 1)
{
document.write("<form method=post name=requestpassmobile>");
document.write("<table border=0 cellpadding=4 cellspacing=1 bgcolor=gray>");
document.write("<tr class=fixed><td>"
	+ "<font color=red><center>إذا كانت العضوية مربوطة برقم جوال"
	+ " يجب عليك إدخال البيانات التالية هنا:<br>"
	
	+ "<table border=0>"
	+ "<tr class=fixed><td class=optionheader_selected colspan=2 align=left><font color=white>إسم العضوية:&nbsp;&nbsp;&nbsp;<input class=insidetitle type=text style=\"width:280\" name=requestpass value=''></td></tr>"
	+ "<tr class=fixed><td class=optionheader_selected><font color=white>آخر 4 أرقام من رقم الجوال:</td><td><input class=insidetitle type=text style=\"width:150\" name=requestpass_mobile value=''></td></tr>"
	+ "<tr class=fixed><td colspan=2><br><font color=red><center>بالإضافة إلى أحد البيانات  أدناه:</td></tr>"
	+ "<tr class=fixed><td class=optionheader_selected><font color=white>رمز تفعيل جوال إستخدم في العضوية سابقا:</td><td><input class=insidetitle type=text style=\"width:150\" name=requestpass_confcode value=''></td></tr>"
	+ "<tr class=fixed><td class=optionheader_selected><font color=yellow>أو: </font><font color=white>الكلمة السرية السابقة للعضوية:</td><td><input class=insidetitle type=password style=\"width:150\" name=requestpass_prevpass value=''></td></tr>"
	+ "<tr class=fixed><td class=optionheader_selected><font color=yellow>أو: </font><font color=white>الإيميل المسجل حاليا في العضوية:</td><td><input class=insidetitle type=text style=\"width:150\" name=requestpass_email value=''></td></tr>"
	);
	

document.write("<tr class=fixed><td class=optionheader_selected><nobr>اللغة التي ترسل بها الرسائل النصية لجوالك:");
document.write("<br><font size=-2>(إذا كان جوالك لا يمكنه عرض اللغة العربية عليك بإختيار لغة أخرى)");
document.write("</td><td class=list valign=middle>");
document.write("&nbsp;<INPUT type=radio class=optionheader_radio NAME=mobile_lang VALUE=1 checked=checked>&nbsp;العربية");
document.write("&nbsp;&nbsp;<INPUT type=radio class=optionheader_radio NAME=mobile_lang VALUE=2>&nbsp;الإنجليزية");
document.write("&nbsp;&nbsp;<INPUT type=radio class=optionheader_radio NAME=mobile_lang VALUE=3>&nbsp;الفرنسية");
document.write("</td></tr></table></td></tr>");
document.write("<tr class=fixed><td class=list_center>"
	+ "<input type=submit value='"+request_pass_submit+"'></td></tr></table></form>");
}

}
