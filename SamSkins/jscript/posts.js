
// write table start for forum topics table

function t_table_open()
{
if (topics[0] <= 0) return;

document.write("<table dir="+dir+" border=0 width=100% cellspacing=0 cellpadding=0 align=center class=grid>\r\n\
<tr><td>\r\n\
<table dir="+dir+" border=0 width=100% cellspacing=1 cellpadding=2>\r\n");
}

// write table end for forum topics table

function t_table_close()
{
if (topics[0] <= 0) return;
document.write("</table></td></tr></table>");

document.write("<table dir="+dir+"><tr><td>ÇáãæÇÖíÚ ÇáÊí ÊÙåÑ ÈÇááæä ÇáÊÇáí&nbsp;</td><td><table border=1 cellspacing=1><tr class=normal>"
+ "<td>&nbsp;&nbsp;&nbsp;</td></tr></table></td><td>");

if (showingID == memberID)
	document.write("&nbsp;ÊÍÊæí Úáì ãÔÇÑßÇÊ ÌÏíÏÉ ÈÚÏ ÂÎÑ ãÔÇÑßÉ áß İíåÇ.");
else
	document.write("&nbsp;ÊÍÊæí Úáì ãÔÇÑßÇÊ ÌÏíÏÉ ÈÚÏ ÂÎÑ ãÔÇÑßÉ ááÚÖæ İíåÇ.");

document.write("</td></tr></table>");
}

// write header for forum topics table

function t_header()
{
if (topics[0] <= 0) return;

document.write("<tr><td class=h>"+forum_table_forum+"</td>\r\n\
<td class=h>&nbsp;</td>\r\n\
<td class=h>"+forum_table_topic+"</td>\r\n\
<td class=h>"+forum_table_author+"</td>\r\n\
<td class=h>"+forum_table_replies+"</td>\r\n\
<td class=h>"+forum_table_read+"</td>\r\n\
<td class=h>"+forum_table_lastreply+"</td>\r\n");

if (memberLevel > 0)
	document.write("<td class=h>&nbsp;</td>");

document.write("</tr>");
}

// write footer for forum topics table

function t_footer()
{
}

// write topic entry into forum topics table

function t(forum,flags,id,title,aid,author,adate,replies,reads,lid,lastposter,ldate)
{
var cl = "normal";

var Tnew = flags.indexOf("n");
var Thot = flags.indexOf("h");
var Tlocked = flags.indexOf("l");
var Tarch = flags.indexOf("a");
var Tmoderate = flags.indexOf("m");
var Tdeleted = flags.indexOf("d");
var infoline1 = ""
var infoline2 = ""

if (author == "#")	author = findMemberName(aid);
if (lastposter == "#")	lastposter = findMemberName(lid);

if (aid == 0) {	aid = memberID;	author = memberName; topicowner = true; }
if (lid == 0)
	{
	lid = memberID;
	if (replies > 0) lastposter = memberName;
	}
var topicowner = (aid == memberID);

if (replies == 0)		lastposter = "";
if (lid == showingID)	cl = "lastposter";
if (Tdeleted >= 0)		cl = "deleted";

var enctitle = escape(title);

document.write("<tr class = "+cl+"><td class=list_small><a href=index.php?f=" + forum + ">"
	+ getForumTitle(forum) + "</a>"
	+ "</td><td class=list_center>\r\n<a href=\"index.php?t=" + id + "\">");

var icon = "";

if (Tnew >= 0)
	{
	icon = "_new";
	infoline2 = topic_tooltips_new;
	}

if (Thot >= 0)
	{
	icon += "_hot";
	infoline1 = topic_tooltips_hot;
	}

if (Tlocked	 >= 0)
	{
	icon += "_locked";
	infoline1 = topic_tooltips_locked;
	}

if (Tarch >= 0)
	{
	icon += "_archived";
	infoline1 = topic_tooltips_archived;
	}

if (infoline1.length == 0)	infoline1 = infoline2;
else if (infoline2.length)	infoline1 += "\r\n" + infoline2;

document.write("<nobr><img src='"+fileURL+"icon.php?m=folder"+icon+"' height=15 width=15 border=0 hspace=0 alt=\"" + infoline1 + "\"></a></td>\r\n\
<td class=list><table cellsapcing=0 cellpadding=0><tr>");

document.write("<td><a href=\"index.php?t=" + id + "\">" + title + "</a>&nbsp;");

if (replies > topicpagesize)
	topicPaging(id,replies);

document.write("</td></tr></table></td>\r\n\
<td class=list_small2 nowrap><font color=green>" + formatDate(adate) + "</font><br><a href=\""+link+"&member=" + aid + "\">" + author + "</a></td>\r\n\
<td class=list_small2>" + replies + "</td>\r\n\
<td class=list_small2>" + reads + "</td>\r\n\
<td class=list_small2 nowrap>\r\n\
<font color=red>" + formatDate(ldate) + "</font><br><a href=\""+link+"&member=" + lid + "\">" + lastposter + "</a>\r\n\
</td>\r\n");

if (memberLevel > 0)
	{
	document.write("<td class=list_small2>\r\n");

	if (topicowner)
		document.write("<a href=\""+link+"&edit=edittopic&t="+id+"&src="+escape(top.location.href)+"\"><img src=\""+fileURL+"icon.php?m=pencil\" alt=\"ÛíÑ ÇáäÕ\" border=\"0\" hspace=\"0\"></a>\r\n");

	if ((memberLevel > 0) && (moderate || (Tlocked < 0)))
		document.write("<a href=\""+link+"&edit=newreply&t="+id+"&src="+escape(top.location.href)+"\"><img src="+fileURL+"icon.php?m=reply_topic alt=\"ÑÏ Úáì ÇáãæÖæÚ\" height=15 width=15 border=0></a>\r\n");

	if (memberLevel > 2)
	{
	if (Tdeleted < 0)
		document.write("&nbsp;<a href=\"javascript:deleteTopic(" + id + ")\"><img border=0 src="+fileURL+"icon.php?m=delete_reply alt=\""+tip_delete_topic+"\" height=15 width=15 hspace=6></a>");
	}

	if (showingID == -1)
		document.write("&nbsp;<a href=\""+link + "&topicmonitor=0&t="+id+"&src="+escape(top.location.href)+"\"><img border=0 src="+fileURL+"icon.php?m=subscribe width=15 height=15 alt=\""+tip_remove_monitor+"\">");

	if ((showingID != memberID) && (showingID > 0))
		document.write("&nbsp;<a href='index.php?t="+id+"&m="+showingID+"'>"
			 + "<img src=\""+fileURL+"icon.php?m=group\" alt=\"ÑÏæÏ " + showingName + " İí ÇáãæÖæÚ\" border=0></a>");
	else if ((showingID == memberID) && (showingID > 0))
		document.write("&nbsp;<a href='index.php?t="+id+"&m="+showingID+"'>"
			 + "<img src=\""+fileURL+"icon.php?m=group\" alt=\"ÑÏæÏß İí ÇáãæÖæÚ\" border=0></a>");

	document.write("</td>");
	}

document.write("</tr>\r\n");
}

function deleteTopic(id)
	{
	if (confirm(msg_confirm_delete_topic))
		if (confirm(msg_reconfirm_delete_topic))
			submitModerationCommand1("d," + id);
	}


// write topic paging selector.. called from t() only

function topicPaging(tid,replies)
{
var total = replies/topicpagesize;

if ((total % 1) > 0)
	total = (total - (total % 1)) + 1;

if (total > 1)
	{
	document.write("<table dir="+dir+" border=0 cellspacing=0 cellpadding=0><tr><td valign=center><font size=-2><img src='"+fileURL+"icon.php?m=posticon' border=0></td>");

	for (x = 1; x <= total; x++)
		{
		if (x && ((x % 15) == 0)) document.write("</tr><tr><td></td>");

		document.write("<td align=right><font size=-2>&nbsp;<a href='index.php?t="
			+ tid
			+ "&pg=" + x
			+ "'>" + x + "</a></td>");
		}

	document.write("</tr></table>")
	}
}

// code to switch to another page.. called by internal code only

function ChangePage()
{
document.PageNum.submit();
}

function t_options_bar()
{
document.write("<table width=100%><tr><td><nobr><font color=red size=+1>")

if (showingID == -1)
	{
	document.write("ÇáãæÇÖíÚ ÇáÊí ÊÑÇŞÈåÇ ÍÇáíÇ");
	}
else if (showingID != memberID)
	{
	if (posts_showall == 1)	document.write("ÇáãæÇÖíÚ ÇáÊí ÔÇÑß İíåÇ ãÄÎÑÇ");
	else					document.write("ÇáãæÇÖíÚ ÇáÊí ßÊÈåÇ ãÄÎÑÇ");

	document.write(":&nbsp;&nbsp;</td><td width=100%><nobr><font color=black size=+1>" + showingName);
	}
else
	{
	if (posts_showall == 1)	document.write("ÇáãæÇÖíÚ ÇáÊí ÔÇÑßÊ İíåÇ ãÄÎÑÇ");
	else					document.write("ÇáãæÇÖíÚ ÇáÊí ßÊÈÊåÇ ãÄÎÑÇ");
	}

document.write(	"</td><td width=100%>&nbsp;</td><td class=optionsbar_menus><nobr>");
document.write( "<form name=ReloadFrm action=index.php method=get>");

if (showingID >= 0)
{
document.write("<input type=hidden name=posts value=" + showingID + ">");
document.write(	forum_toolbar_sort_by + "<br><select  style=\"width:65\" name=por size=1 onchange=\"autoReload();\"><option value=0");
if (posts_order == 0)	document.write(" SELECTED");
document.write(">ÇáãæÖæÚ</option><option value=1");
if (posts_order == 1)	document.write(" SELECTED");
document.write( ">ÂÎÑ ÑÏ</option></select>&nbsp;&nbsp;");
document.write(	"</td><td class=optionsbar_menus><nobr>");
document.write(	"ÎíÇÑ ÇáÊÕİÍ:<br><select  style=\"width:80\" name=psa size=1 onchange=\"autoReload();\"><option value=0");
if (posts_showall == 0)	document.write(" SELECTED");
document.write(">ÇáãæÇÖíÚ İŞØ</option><option value=1");
if (posts_showall == 1)	document.write(" SELECTED");
document.write(">ßá ÇáãÔÇÑßÇÊ</option>");

if (memberLevel > 3)	// unused
{
document.write("<option value=2");
if (posts_showall == 2)	document.write(" SELECTED");
document.write(">ÇáÑÏæÏ</option>");
}

document.write("</select>&nbsp;&nbsp;");
document.write(	"</td><td class=optionsbar_menus><nobr>");
document.write("ÚÑÖ ÇáãæÇÖíÚ ãä:<br><select style=\"width:130\" name=pfr size=1 onchange=\"autoReload()\"><option ");
if (posts_forum == 0) document.write("SELECTED ");
document.write("value=0>-- ÌãíÚ ÇáãäÊÏíÇÊ --");

for (y = 0; y < forums.length; y+= 3)
	{
	if ((forums[y] > 0) && (!isBlocked(forums[y])))
		{
		document.write("<option value=" + forums[y]);
		if (posts_forum == forums[y])  document.write(" SELECTED");
		document.write(">" + forums[y+2]);
		}
	}

document.write("</select>");
}

if ((showingID == memberID) || (showingID == -1))
	{
	if (showingID >= 0)	document.write("</td><td class=optionsbar_menus><nobr>");
	else				document.write("<input type=hidden name=posts value=mon>");

	document.write(forum_toolbar_refresh_title+"<br>");
	refreshSelector();
	}

document.write("<td class=optionsbar_menus>"+switchforum_selector_title+"<br>");
forumsSelector2();
document.write("</td>");

document.write("</td></tr><tr><td></td></tr></table>");
}


function t_show_topics()
{
var x = 0;

if (topics[0] <= 0)
	{
	document.write("<br><table width=100% border=1><tr class=normal><td class=list_center colspan=10><br><br>");
	document.write("áÇ ÊæÌÏ ÃíÉ ");

	if (posts_showall == 1)	document.write("ãÔÇÑßÇÊ ");
	else					document.write("ãæÇÖíÚ ");

	if (showingID == memberID)	document.write("áß ");
	else					document.write("áåĞÇ ÇáÚÖæ ");

	if (posts_forum == 0)	document.write("İí Ãí ãä ÇáãäÊÏíÇÊ.");
	else					document.write("İí ÇáãäÊÏì ÇáãÎÊÇÑ ÃÚáÇå.");

	document.write("<br><br><br></td></tr></table>");

	}
else while ((x < topics.length) && (topics[x] > 0))
	{
	t(topics[x++],topics[x++],topics[x++],topics[x++],topics[x++],topics[x++],
		topics[x++],topics[x++],topics[x++],topics[x++],topics[x++],topics[x++]);
	}
}

function findMemberName(id)
	{
	var	 x = 0;

	while ((x < authors.length) && (authors[x] > 0))
		{
		if (authors[x] == id)	return(authors[x+1]);
		x += 2;
		}

	return("");
	}

function autoReload()	{ 	document.ReloadFrm.submit()		}
function SetLastDate()	{	document.LastDateFrm.submit()	}

function render_content()
	{
	if (memberLevel > 2) writeModerationForm1();

	t_options_bar();
	t_table_open();
	t_header();
	t_show_topics();
	t_footer();
	t_table_close();

	if (page_refresh > 0)
		setTimeout('top.location.href = top.location.href',page_refresh*60000);
	}


function writeModerationForm1()
	{
	document.write("<form id=moderationForm1 name=moderationForm1 method=post action=\""+document.location+"\">");
	document.write("<input type=hidden name=moderate value=\"\">");
	document.write("</form>");
	}

function submitModerationCommand1(cmd)
	{
	document.moderationForm1.moderate.value = cmd;
	document.moderationForm1.submit();
	}
