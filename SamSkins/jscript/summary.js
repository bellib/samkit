
function t_table_open()
{
document.write("<table dir="+dir+" border=0 width=60% cellspacing=0 cellpadding=0 align=center class=grid>\
<tr><td>\
<table dir="+dir+" border=0 width=100% cellspacing=1 cellpadding=2>\r\n");
}


function t_moderation_table_close()
{
document.write("</table></td></tr></table>");

if (forumModerationSummary[0] > 0)
	{
	document.write("<br><center><table dir="+dir
	+ "><tr><td>"+summary_footer1+"&nbsp;</td><td><table border=1 cellspacing=1><tr class=normal>"
	+ "<td>&nbsp;&nbsp;&nbsp;</td></tr></table></td><td>&nbsp;"
	+ summary_footer2
	+ "</td></tr></table><br><font color=red>"
	+ summary_footer3 + "<br>" + summary_footer4);
	}
}

function t_notify_table_close()
{
document.write("</table></td></tr></table>");

//if (forumModerationSummary[0] > 0)
//	{
//	document.write("<br><center><table dir="+dir
//	+ "><tr><td>"+summary_footer1+"&nbsp;</td><td><table border=1 cellspacing=1><tr class=normal>"
//	+ "<td>&nbsp;&nbsp;&nbsp;</td></tr></table></td><td>&nbsp;"
//	+ summary_footer2
//	+ "</td></tr></table><br><font color=red>"
//	+ summary_footer3 + "<br>" + summary_footer4);
//	}
}

function t_moderation_header()
{

document.write("<tr><td class=h>"+summary_header_forum+"</td>\
<td class=h>"+summary_header_tp+"</td>\
<td class=h>"+summary_header_th+"</td>\
<td class=h>"+summary_header_rp+"</td>\
<td class=h>"+summary_header_rh+"</td>");

// <td class=h>"+summary_header_ti+"</td>\
// <td class=h>"+summary_header_ri+"</td>\

document.write("</tr>");
}

function t_notify_header()
{
document.write("<tr><td class=h>"+summary_header_forum+"</td>\
<td class=h>"+summary_header_mail+"</td>\
<td class=h>"+summary_header_np+"</td>\
<td class=h>"+summary_header_nh+"</td></tr>");
}


function t_footer()
{
}


function t(forum,pending,held,rpending,rheld,thidden,rhidden)
{
var flink = "<a href=index.php?f=" + forum;

var cl = "deleted";

if (pending > 0) cl = "normal";

document.write("<tr class="+cl+"><td class=list_small>" + flink + ">" + getForumTitle(forum) + "</a>"
	+ "</td><td class=list_center>"
	+ flink + "&mode=ut>" + pending + "</a>"
	+ "</td><td class=list_center>"
	+ flink + "&mode=ft>" + held + "</a>"
	+ "</td><td class=list_center>"
	+ flink + "&mode=ur>" + rpending + "</a>"
	+ "</td><td class=list_center>"
	+ flink + "&mode=fr>" + rheld + "</a>"
//	+ "</td><td class=list_center>"
//	+ flink + "&mode=it>" + thidden + "</a>"
//	+ "</td><td class=list_center>"
//	+ flink + "&mode=ir>" + rhidden + "</a>"
	);


document.write("</td></tr>\r\n");
}

function t_notify(forum,pending,held,mail)
{
var flink = "<a href=index.php?notifyforum=" + forum + "&notifylist=";
var mlink = "<a href=index.php?mail=new&arm=" + forum;

var cl = "deleted";

if ((pending > 0) || (mail > 0)) cl = "normal";

document.write("<tr class="+cl+"><td class=list_small><a href=index.php?f=" + forum + ">" + getForumTitle(forum) + "</a>"
	+ "</td><td class=list_center>"
	+ mlink + ">" + mail + "</a>"
	+ "</td><td class=list_center>"
	+ flink + "true>" + pending + "</a>"
	+ "</td><td class=list_center>"
	+ flink + "admin>" + held + "</a>");


document.write("</td></tr>\r\n");
}


function t_options_bar()
{
document.write("<table width=100%><tr><td width=100% class=optionsbar_menus><nobr><font color=red size=+1>"
	+ summary_title
	+ "</td><td class=optionsbar_menus><nobr>"
	+ "<form name=ReloadFrm action=index.php?summary=moderation method=post>"
	+ forum_toolbar_refresh_title + "<br>");

refreshSelector();
document.write("<td class=optionsbar_menus>"+switchforum_selector_title+"<br>");
forumsSelector2();
document.write("</td></td></tr><tr><td></td></tr></table><br>");
}


function t_show_moderation_summary()
{
var x = 0;

if (forumModerationSummary.length < 2)
	{
	document.write("<tr class=normal><td class=list_center colspan=10><br><br>"
		+ summary_none + "<br><br><br></td></tr>");
	}
else while ((x < forumModerationSummary .length) && (forumModerationSummary [x] > 0))
	{
	t(forumModerationSummary [x++],forumModerationSummary [x++],forumModerationSummary [x++],
		forumModerationSummary [x++],forumModerationSummary [x++],
		forumModerationSummary [x++],forumModerationSummary [x++]);
	}
}

function t_show_notify_summary()
{
var x = 0;

if (forumNotifySummary.length < 2)
	{
	document.write("<tr class=normal><td class=list_center colspan=10>"
		+ summary_notify_none + "</td></tr>");
	}
else while ((x < forumNotifySummary.length) && (forumNotifySummary [x] > 0))
	{
	t_notify(forumNotifySummary [x++],forumNotifySummary [x++],forumNotifySummary [x++],forumNotifySummary [x++]);
	}
}


function autoReload()	{ 	document.ReloadFrm.submit()		}

function render_content()
	{
	t_options_bar();
	
	if (memberLevel > 1)
		{
		t_table_open();
		t_notify_header();
		t_show_notify_summary();
		t_footer();
		t_notify_table_close();
		document.write("<br><br>");
		}
	
	t_table_open();
	t_moderation_header();
	t_show_moderation_summary();
	t_footer();
	t_moderation_table_close();

	if (page_refresh > 0)
		setTimeout('top.location.href = top.location.href',page_refresh*60000);
	}
