
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

	t_options_bar(0);

	document.write("<center><font color=red size=+2>");


	if (titleinfo_id == 0)	document.write("≈÷«›… Ê’› ÃœÌœ");
	else 			document.write(" €ÌÌ— Œ’«∆’ «·Ê’› —ﬁ„: "+titleinfo_id);

	document.write("</font><br><br>");

	document.write("<form action=\""+link+"\" name=titleinfo method=post>"
		+ "<input type=hidden name=titleinfo_id value="+titleinfo_id+">"
		+ "<input type=hidden name=caller value=\""+escape(editCaller)+"\">");


	document.write("<table border=0 width=400 cellpadding=4 cellspacing=1 bgcolor=gray>");


	if ((titleinfo_status != 0) || (memberLevel > 2) || (titleinfo_supervisor))
	{
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+"‰’ «·Ê’›: </td><td class=list colspan=3>"
		+ "<input class=insidetitle type=text style=\"width:400\" name=titleinfo_title value=\""
		+ titleinfo_title+ "\"></td></tr>");
	}
	else
	{
	document.write("<tr class=fixed><td class=optionheader><nobr>"
		+"‰’ «·Ê’›: </td><td class=list colspan=3>"
		+ "<input type=hidden name=titleinfo_title value=\""
		+ titleinfo_title+ "\">" + titleinfo_title + "</td></tr>");
	}
	
	if ((titleinfo_status != 0) || (memberLevel > 2))
	{
	document.write("<tr class=fixed><td class=optionheader><nobr>«·„‰ œÏ: </td><td class=list colspan=3>");
	forumsSelectorTitle();
	document.write("</td></tr>");
	}
	else
	{
	document.write("<input type=hidden name=titleinfo_forum value=" + titleinfo_forum
		+ ">");
	}

	document.write("<tr class=fixed><td class=optionheader><nobr>ﬁ›· «·Ê’›: </td>");
	closedSelector();
	document.write("</tr>");

	if ((titleinfo_status != 0) || (memberLevel > 2) || (titleinfo_supervisor))
	{
	document.write("<tr class=fixed><td class=optionheader><nobr>⁄—÷ «·Ê’›: </td>");
	displaySelector();
	document.write("</tr>");

	document.write("<tr class=fixed><td class=optionheader><nobr>Ê÷⁄Ì… «·Ê’›: </td>");
	statusSelector();
	document.write("</tr>");
	}

	document.write("<tr class=fixed><td class=list_center colspan=5>"
		+ "<input type=button value='"+req_enter_changes+"' onclick='submitForm()'>"
		+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=reset value='"+req_cancel_changes+"'\">"
		+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=button value='"+req_return+"' onclick=\"document.location='"+editCaller+"'\">"
		+ "</td></tr>");

	document.write("</table>");
}

function forumsSelectorTitle()
{
document.write("<select class=insidetitle style=\"width:300\" name=titleinfo_forum size=1>");

if (memberLevel > 2)
{
if (titleinfo_forum == 0) document.write("<option selected value=0>-- Ê’› ⁄«„ --");
else document.write("<option value=0>-- Ê’› ⁄«„ --");
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
				if (forums[y] == titleinfo_forum)
					document.write("<option selected value='" + forums[y] + "'>" + forums[y+2]);
				else
					document.write("<option value='" + forums[y] + "'>" + forums[y+2]);
				}
			}
		}
		else
		{
			if (forums[y] == titleinfo_forum)
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
if (titleinfo_status == 1)	checked = " CHECKED=CHECKED";
document.write("<td class=list><nobr><INPUT type=radio class=optionheader_radio NAME=titleinfo_status VALUE=1"+checked+">");
document.write("Ì‰ Ÿ— „Ê«›ﬁ… «·„œÌ— √Ê «·„—«ﬁ»</td>");

checked = "";
if (titleinfo_status == 2)	checked = " CHECKED=CHECKED";
document.write("<td class=list><nobr><INPUT type=radio class=optionheader_radio NAME=titleinfo_status VALUE=2"+checked+">");
document.write("«·Ê’›  Õ  «· ’„Ì„</td>");

if ((memberLevel > 2)  || (titleinfo_supervisor))
{
checked = "";
if (titleinfo_status == 0)	checked = " CHECKED=CHECKED";
document.write("<td class=list><nobr><INPUT type=radio class=optionheader_radio NAME=titleinfo_status VALUE=0"+checked+">");
document.write("«·Ê’› ÕÌ</td>");
}
else document.write("<td class=list>&nbsp;</td>");
}

function displaySelector()
{
var checked = "";
if (titleinfo_display == 0)	checked = " CHECKED=CHECKED";
document.write("<td class=list><nobr><INPUT type=radio class=optionheader_radio NAME=titleinfo_display VALUE=0"+checked+">");
document.write("ÌŸÂ— ›Ì „‰ œ«Â ›ﬁÿ</td>");

checked = "";
if (titleinfo_display == 1)	checked = " CHECKED=CHECKED";
document.write("<td class=list colspan=2><nobr><INPUT type=radio class=optionheader_radio NAME=titleinfo_display VALUE=1"+checked+">");
document.write("ÌŸÂ— ›Ì Ã„Ì⁄ «·„‰ œÌ« </td>");

}

function closedSelector()
{
var checked = "";
if (titleinfo_closed == 0)	checked = " CHECKED=CHECKED";
document.write("<td class=list><nobr><INPUT type=radio class=optionheader_radio NAME=titleinfo_closed VALUE=0"+checked+">");
document.write("«·Ê’› „› ÊÕ ··≈” Œœ«„</td>");

checked = "";
if (titleinfo_closed == 1)	checked = " CHECKED=CHECKED";
document.write("<td class=list colspan=2><nobr><INPUT type=radio class=optionheader_radio NAME=titleinfo_closed VALUE=1"+checked+">");
document.write("«·Ê’› „ﬁ›Ê· Ê·« ÌŸÂ— ÷„‰ «·ŒÌ«—« </td>");

}

function submitForm()
{

if (titleinfo.titleinfo_title.value.length < 5)
	{
	confirm("ÌÃ» ≈œŒ«· ⁄‰Ê«‰ ··Ê’› Ê√‰ ÌﬂÊ‰ √ÿÊ· „‰ 5 √Õ—›");
	return;
	}

titleinfo.submit();
}
