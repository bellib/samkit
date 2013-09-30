
// write table start for forum topics table

function t_table_open()
{
document.write("<table dir="+dir+" border=0 width=100% cellspacing=0 cellpadding=0 align=center class=grid>\r\n\
<tr><td>\r\n\
<table dir="+dir+" border=0 width=100% cellspacing=1 cellpadding=2>\r\n");
}

// write table end for forum topics table

function t_table_close()
{
document.write("</table></td></tr></table>");
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
var Thidden = flags.indexOf("h");
var Tmoderate = flags.indexOf("m");
var Tdeleted = flags.indexOf("d");
var infoline1 = ""
var infoline2 = ""

if (aid == 0) {	aid = memberID;	author = memberName; topicowner = true; }
if (lid == 0)
	{
	lid = memberID;
	if (replies > 0) lastposter = memberName;
	}
var topicowner = (aid == memberID) || moderate    ;

if (replies == 0)		lastposter = "";

if (active_mode == "monitored")
{
	if (Thidden >= 0)
		cl = "lastposter";
}
if (Tdeleted >= 0)		cl = "deleted";

var enctitle = escape(title);

document.write("<tr class = "+cl+"><td class=list_small><a href="+link +"samfrm/forum" + forum + ">"
	+ getForumTitle(forum) + "</a>"
	+ "</td><td class=list_center>\r\n<a href=\"index.phpsss?t=" + id + "\">");

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

document.write("<nobr><img src='"+Icones+"icons/kfolder"+icon+"' height=15 width=15 border=0 hspace=0 title=\"" + infoline1 + "\"></a></td>\r\n\
<td class=list><table cellsapcing=0 cellpadding=0><tr>");

document.write("<td><a href="+link+"samtopic/topic"+  id+">" + title + "</a>&nbsp;");

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
		document.write("<a href=\""+link+"&edit=edittopic&t="+id+"&src="+escape(top.location.href)+"\"><img src='"+Icones+"icons/kpencil' title=\""+tip_edit_text+"\" border=\"0\" hspace=\"0\"></a>\r\n");

	if ((memberLevel > 0) && (moderate || (Tlocked < 0)))
		document.write("<a href=\""+link+"&edit=newreply&t="+id+"&src="+escape(top.location.href)+"\"><img src='"+Icones+"icons/kreply_topic' title=\""+tip_reply+"\" height=15 width=15 border=0></a>\r\n");

	if (active_mode == "monitored")
	{
		document.write("<a href=\""+link + "&topicmonitor=0&t="+id+"&src="+escape(top.location.href)+"\"><img border=0 src="+fileURL+"icon.php?m=subscribe width=15 height=15 alt=\""+tip_remove_monitor+"\">");
		
	if (memberLevel > 2)
		document.write("&nbsp;<a href=\""+link + "&mojo=treads&tid="+id+"\"><img border=0 src="+fileURL+"icon.php?m=smile_question width=15 height=15>");
	}
	document.write("</td>");
	}

document.write("</tr>\r\n");
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

if (active_mode == "top")				document.write(active_mode_toptopics);
else if (active_mode == "monitored")	document.write(active_mode_monitored);
else if (active_mode == "private")		document.write(active_mode_private);
else									document.write(active_mode_active);

document.write(	"</td><td width=100%>&nbsp;</td><td class=optionsbar_menus>");
document.write( "<form name=ReloadFrm action=index.php>");
document.write(	active_toolbar_show + ":<br><select style=\"width:180\" name=active size=1 onchange=\"autoReload();\"><option value=active");
if (active_mode == "active")	document.write(" SELECTED");
document.write(">"+active_type_active+"</option><option value=hot");
if (active_mode == "hot")	document.write(" SELECTED");
document.write(">"+active_type_active_by_replies+"</option><option value=read");
if (active_mode == "read")	document.write(" SELECTED");
document.write(">"+active_type_active_by_reads+"</option><option value=top");
if (active_mode == "top")	document.write(" SELECTED");
document.write(">"+active_type_toptopics+"</option>");

if (memberLevel > 0)
{
document.write("<option value=monitored");
if (active_mode == "monitored")	document.write(" SELECTED");
document.write(">"+active_type_monitored+"</option>");
document.write("<option value=private");
if (active_mode == "private")	document.write(" SELECTED");
document.write(">"+active_type_private+"</option>");
}

document.write("</select></td>");

document.write("<td class=optionsbar_menus><nobr>");
document.write(forum_toolbar_refresh_title + "<br>");
refreshSelector();
document.write("</td>");

document.write("<td class=optionsbar_menus>"+switchforum_selector_title+"<br>");
forumsSelector2();
document.write("</td>");

document.write("</form></tr></table>");
}


function t_show_topics()
{
var x = 0;

if (topics[0] <= 0)
	{
	document.write("<tr class=normal><td class=list_center colspan=10><br><br>");

	if (active_mode == "monitored")		document.write(active_none_monitored);
	else if (active_mode == "private")	document.write(active_none_private);
	else								document.write(active_none_all);

	document.write("<br><br><br></td></tr>");
	}
else while ((x < topics.length) && (topics[x] > 0))
	{
	t(topics[x++],topics[x++],topics[x++],topics[x++],topics[x++],topics[x++],
		topics[x++],topics[x++],topics[x++],topics[x++],topics[x++],topics[x++]);
	}
}

function autoReload()	{ 	document.ReloadFrm.submit()		}
function SetLastDate()	{	document.LastDateFrm.submit()	}

function render_content()
	{
	t_options_bar();
	t_table_open();
	t_header();
	t_show_topics();
	t_footer();
	t_table_close();

	if (page_refresh > 0)
		setTimeout('top.location.href = top.location.href',page_refresh*60000);
	}
