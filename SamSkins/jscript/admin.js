
function t_options_bar()
{
document.write("<table border=0 cellspacing=2 width=100%><tr>");

document.write("<td class=optionsbar_menus width=100%>&nbsp;<nobr><font color=red size=+1>«·≈œ«—…</td>");

if (adminlinks.length > 3)
	{
	var secondline = false;
//	document.write("<center><table><tr>");
	var x = 0;

	while (x < adminlinks.length-3)
		{
	//	if ((!secondline) && (x >= ((adminlinks.length-3)/2)))
	//		{
	//		document.write("</tr><tr>");
	//		secondline = true;
	//		}

		var title = adminlinks[x++];
		var href = adminlinks[x++];
		var target = adminlinks[x++];

		if (target.length > 0)	target = " target=" + target;

		document.write("<td valign=top class=optionsbar_menus><nobr><a"
			+ target + " href='"
			+ href + "'>" + title + "</a></td>");
		}
//	document.write("</tr></table></center><p dir=ltr>");
	}


document.write("<td class=optionsbar_menus>"+switchforum_selector_title+"<br>");
forumsSelector2();
document.write("</td></tr><tr><td></td></tr></table><p dir=ltr>");
}


function render_content()
{
t_options_bar(0);
}
