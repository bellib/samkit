
function t_options_bar()
{
document.write("<table border=0 cellspacing=2 width=100%><tr>");

document.write("<td class=optionsbar_menus width=100%>&nbsp;<nobr><font color=red size=+1>Œœ„«  «·≈‘—«›</td>");

if (svclinks.length > 3)
	{
	var secondline = false;
	var x = 0;

	while (x < svclinks.length-3)
		{
		var title = svclinks[x++];
		var href = svclinks[x++];
		var target = svclinks[x++];

		if (target.length > 0)	target = " target=" + target;

		document.write("<td valign=top class=optionsbar_menus><nobr><a"
			+ target + " href='"
			+ href + "'>" + title + "</a></td>");
		}
	}

document.write("<td class=optionsbar_menus>"+switchforum_selector_title+"<br>");
forumsSelector2();
document.write("</td></tr><tr><td></td></tr></table><p dir=ltr>");
}


function render_content()
{
t_options_bar(0);
}
