function render_content()
{
document.write("<table width=100% border=1><tr class=normal><td class=list_center colspan=10>\
<font size=+2 color=red><u>"+rules_title+"</u></font><br><br>" + rules_header1
+ ":</p><p dir=rtl><table width=500><tr><td colspan=2>" + rules_header2 + ":</td></tr>");

var i;

for (i = 0; i < rules1.length; i++)
	document.write("<tr><td valign=top>&nbsp;&nbsp;&nbsp;&nbsp;<img src='"+Icones+"icons/kstar_red'>&nbsp;&nbsp;</td><td width=100%>"
		+ rules1[i] + "</td></tr>");

document.write("<tr><td colspan=2><br>" + rules_notes + ":</td></tr>");

for (i = 0; i < rules2.length; i++)
	document.write("<tr><td valign=top>&nbsp;&nbsp;&nbsp;&nbsp;<img src="+Icones+"icons/kstar_green>&nbsp;&nbsp;</td><td>"
		+ rules2[i] + "</td></tr>");

document.write("</table><br>" + rules_contact + "</td></tr></table>");
}
