var z = 0;

function t_table_open()
{
if (mail_folder == "edit")
document.write("<form action=\""+link+"&mail=in\" method=post>\
<table dir="+dir+" width=300 border=0 cellspacing=0 cellpadding=0 class=grid align=center>\
<tr><td><table dir="+dir+" width=100% border=0 cellspacing=1 cellpadding=2>");
else if (mail_folder != "msg")
document.write("<table dir="+dir+" width=100% border=0 cellspacing=0 cellpadding=0 align=center class=grid>\
<tr><td><table dir="+dir+" width=100% border=0 cellspacing=1 cellpadding=2>");
}

function t_table_close()
{
document.write("</table></td></tr></table>");
}

function t_header(showdetails)
{
if (mail_folder == "edit")
{
document.write("<tr class=normal><td colspan=2 class=list_small>" 
+ mail_editfolders_header + "</td></tr>");
document.write("<tr><td class=h>"+mail_editfolders_number+"</td>\
<td class=h><nobr>&nbsp;"+mail_editfolders_title + "</td></tr>");
}
else if (mail_folder != "msg")
{
document.write("<tr><td class=h colspan=2>&nbsp;</td>\
<td class=h><nobr>&nbsp;"+mail_date+"&nbsp;</td>\
<td class=h><nobr>&nbsp;"+mail_from+"&nbsp;</td>\
<td class=h><nobr>&nbsp;"+mail_to+"&nbsp;</td>\
<td class=h><nobr>&nbsp;"+mail_subject+"&nbsp;</td>\
<td class=h><nobr>&nbsp;"+mail_size+"&nbsp;</td>");

if (mail_folder == "mem")
	document.write("<td class=h><nobr>«·„Ã·œ</td>");

document.write("<td class=h><nobr>&nbsp;</td></tr>");
}

}

function t_footer()
{
}

var msgcount = 0;

function t(flags,id,title,aid,tid,mfolder,adate,msgsize,extra)
{
var cl = "normal";

var Tnew = flags.indexOf("n");
var Treplied = flags.indexOf("r");
var Tann = flags.indexOf("a");
var Tthread = flags.indexOf("t");

var infoline1 = ""
var infoline2 = ""

var fromname = findMemberName(aid);
var toname = findMemberName(tid);
var icon = "email";

if (Tann >= 0)
	{
	icon = "folder_hot";
	cl = "highlighted";
	}
else if (Treplied >= 0)
	{
	icon = "reply_topic";
	infoline2 = mail_replied;
	}
else if (Tnew >= 0)
	{
	icon = "topic";
	infoline2 = mail_newmsg;
	cl = "fixed";
	}

if (infoline1.length == 0)	infoline1 = infoline2;
else if (infoline2.length)	infoline1 += "" + infoline2;


document.write("<tr class = "+cl+">");
document.write("<td class=list_center><nobr>&nbsp;");


if (Tann < 0)
{
if ((folders[0] > 0) || ((mail_folder != "trash") && (mail_folder != "trashout")))
	{
	msgcount++;
	document.write("<INPUT type=hidden name=msg_"+msgcount+" value='"+id+"'>");
	document.write("<INPUT type=checkbox class=small name=msgmove_"+msgcount+">");
	}
}
else document.write("&nbsp;");

document.write("</td><td class=list_center><nobr>&nbsp;");
document.write("<a href=\""+link+"&mail=msg&msg=" + id + "\">");

document.write("<img src='"+fileURL+"icon.php?m="+icon+"' height=15 width=15 border=0 hspace=0 alt=\"" + infoline1 + "\"></a>&nbsp;</td>\
<td class=list_small><nobr>&nbsp;<font color=green>" + formatDate(adate) + "</font>&nbsp;</td>");

if (Tann < 0) 
{
if (aid > 0) 
{

document.write("<td class=list_small><nobr>&nbsp;<a href=\""+link+"&member=" + aid + "\">" + fromname + "</a>&nbsp;</td>");
}
else document.write("<td class=list_small><nobr>&nbsp;" + fromname + "&nbsp;</td>");
}
else document.write("<td class=list_small><nobr>&nbsp;"+mail_announcement+"&nbsp;</td>");

if (tid > 0) document.write("<td class=list_small><nobr>&nbsp;<a href=\""+link+"&member=" + tid + "\">" + toname + "</a>&nbsp;</td>");
else document.write("<td class=list_small><nobr>&nbsp;" + toname + "&nbsp;</td>");

if (Tthread >= 0)
	title = "<img src="+fileURL+"icon.php?m=reply_topic alt=\"Â–Â «·—”«·… —œ ⁄·Ï —”«·… ”«»ﬁ…\" height=15 width=15 border=0>&nbsp;&nbsp;" + title;

document.write("<td class=list width=90%><a href=\""+link+"&mail=msg&msg=" + id + "\">" + title + "</a></td>\
<td class=list_small><nobr>&nbsp;"+msgsize+"&nbsp;</td>");

if (mail_folder == "mem")
document.write("<td class=list_small><nobr>&nbsp;"+findFolderName(mfolder)+"&nbsp;</td>");

document.write("<td class=list_small><nobr>&nbsp;");


if ((mail_folder != "trash") && (mail_folder != "trashout"))
{
var needreplyicon = false;

if (mail_area > 0) { if (tid == -mail_area) needreplyicon = true; }
else if (tid == memberID) needreplyicon = true;

if (Tann >= 0) needreplyicon = false;

if (needreplyicon)
document.write("<a href=\""+link+"&replymsg="+id
+"\"><img src="+fileURL+"icon.php?m=reply_topic alt=\""+mail_tooltip_reply+"\" height=15 width=15 border=0></a>&nbsp;&nbsp;");

if ((Tann < 0) && (mfolder != 0)) document.write("<a href=\"javascript:deleteMsg('" + id + "')\"><img src=\""+fileURL+"icon.php?m=trashcan\" alt=\""+mail_delete+"\" border=\"0\" hspace=\"0\"></a>");

if ((mail_folder == "folder") || (mail_folder == "folderout"))
document.write("<a href=\""+link+"&mail=" + mail_folder + "&folder=" + mail_folder_id
+ "&undel=" + id+"\"><img src=\""+fileURL+"icon.php?m=go_up\" alt=\""+mail_undelete+"\" border=\"0\" hspace=\"0\"></a>");
}
else
document.write("<a href=\"javascript:undeleteMsg('" + id + "')\"><img src=\""+fileURL+"icon.php?m=go_up\" alt=\""+mail_undelete+"\" border=\"0\" hspace=\"0\"></a>");

document.write("&nbsp;</td></tr>");
}

function deleteMsg(id)
{

if (confirm(mail_confirm_delete_msg))
	{
	if (mail_folder == "mem")
		document.location = ""+link+"&mail=mem&mem=" + memwho + "&pg=" + pagenum + "&del=" + id;
	else if (mail_folder == "msg")
		document.location = ""+link+"&mail=in&del=" + id;
	else
		document.location = ""+link+"&mail=" + mail_folder + "&pg=" + pagenum + "&del=" + id;
	}
}

function undeleteMsg(id)
{

if (confirm(mail_confirm_undelete_msg))
	document.location = ""+link+"&mail=" + mail_folder + "&pg=" + pagenum + "&undel=" + id;
}


function view_msg(idx,flags,id,title,aid,tid,mfolder,adate,msgsize,extra)
{
var cl = "normal";
var fromname = findMemberName(aid);
var toname = findMemberName(tid);
var Tann = flags.indexOf("a");
var Tblocked = flags.indexOf("b");


if (idx == 0)
{
document.write("<table dir="+dir+" border=0 width=100% cellspacing=0 cellpadding=0 class=grid>\
<tr><td><table dir="+dir+" border=0 width=100% cellspacing=1 cellpadding=4>");

document.write("<tr class=normal><td class=h colspan=3><font size=+1>" + mail_msg_header);
document.write("</td></tr>");
}

document.write("<tr class=normal><td class=h><nobr><font color=yellow> ‰»ÌÂ Â«„</td>");
document.write("<td class=list width=100%>&nbsp;<font color=red size=-1>"
+ "Õ›«Ÿ« ⁄·Ï ⁄÷ÊÌ ﬂ „‰ «·”—ﬁ… «·—Ã«¡ ⁄œ„ ≈⁄ÿ«¡ ﬂ·„ ﬂ «·”—Ì… ›Ì √Ì Õ«· „‰ «·√ÕÊ«· ·√Ì ﬂ«‰."
+ "<br>≈–« Ê’· ﬂ —”«·… ›ÌÂ« Ê’·«  ·’›Õ«   ÿ·» „‰ﬂ„ ﬂ·„ ﬂ„ «·”—Ì… «·—Ã«¡ «⁄·«„ ≈œ«—… «·„‰ œÌ«  ›Ê—«."
+ "&nbsp;</td></tr>");


document.write("<tr class=normal><td class=h><nobr>"+mail_from+"</td>");

if (Tann >= 0)
document.write("<td class=list width=100%><nobr>&nbsp;&nbsp;&nbsp;" + mail_announcement + "&nbsp;&nbsp;&nbsp;</td>");
else
{
if (aid > 0) 
{

document.write("<td class=list width=100%><nobr>&nbsp;&nbsp;&nbsp;<a href=\""+link+"&member=" + aid + "\">" + fromname + "</a>&nbsp;&nbsp;&nbsp;");

if (aid != memberID)
	document.write("&nbsp;<a href=\""+link+"&mail=mem&mem="+aid+"\"><img src="+fileURL+"icon.php?m=profile height=15 width=15 alt=\""+tip_mail_member_mails+"\" border=0 align=absmiddle hspace=6></a>");


if (memberLevel > 1)
{
	document.write("&nbsp;&nbsp;<a href='index.php?requestmon="+aid+"&mid="+id+"'>"
		 + "<img src=\""+fileURL+"icon.php?m=edit_moderator\" border=0></a>");
		 
    if (memberLevel > 2) 
	    document.write("&nbsp;&nbsp;<a href='index.php?whois=m"+id+"'><img src="+fileURL+"icon.php?m=smile_question height=15 width=15 alt=\"IP\" border=0 align=absmiddle hspace=6></a>");
	
    if (memberLevel == 2)
    {
    if (memberLevelSup == 1)
    	document.write("&nbsp;&nbsp;<a href='index.php?whois=m"+id+"'><img src="+fileURL+"icon.php?m=smile_question height=15 width=15 alt=\"IP\" border=0 align=absmiddle hspace=6></a>");
    }
 }

document.write("</td>");

}
else 
{

var orig = "";
if (extra > 0) orig = " <font size=-1>- " + findMemberName(extra);
document.write("<td class=list width=100%><nobr>&nbsp;&nbsp;&nbsp;" + fromname + orig + "&nbsp;&nbsp;&nbsp;</td>");
}

document.write("</tr><tr class=normal><td class=h><nobr>"+mail_to+"</td>");

if (tid > 0) 
{

document.write("<td class=list><nobr>&nbsp;&nbsp;&nbsp;<a href=\""+link+"&member=" + tid + "\">" + toname + "</a>&nbsp;&nbsp;&nbsp;");
if (tid != memberID)
	document.write("&nbsp;<a href=\""+link+"&mail=mem&mem="+tid+"\"><img src="+fileURL+"icon.php?m=profile height=15 width=15 alt=\""+tip_mail_member_mails+"\" border=0 align=absmiddle hspace=6></a>");

if (memberLevel > 2)
	document.write("&nbsp;<a href=\""+link+"&mail=mon&mem="+aid+"&mem2="+tid+"\"><img src="+fileURL+"icon.php?m=smile_question height=15 width=15 alt=\""+tip_mail_member_mails+"\" border=0 align=absmiddle hspace=6></a>");

document.write("</td>");
}
else document.write("<td class=list><nobr>&nbsp;&nbsp;&nbsp;" + toname + "&nbsp;&nbsp;&nbsp;</td>");
}

document.write("</tr><tr class=normal><td class=h><nobr>"+mail_date+"</td>\
<td class=list><nobr>&nbsp;&nbsp;&nbsp;<font color=green>" + formatDate(adate) + "</font>&nbsp;&nbsp;&nbsp;</td>\
</tr>");

if ((Tann < 0) && (folders[0] > 0) && (message.length == 1))
{
document.write("<form><tr class=normal><td class=h><nobr>&nbsp;</td>\
<td class=list><nobr>&nbsp;&nbsp;&nbsp;");
document.write("<input type=hidden name=msg value='"+id+"'>");
document.write("<input type=hidden name=qid value='"+escape(memberQID)+"'>");
document.write("<input type=hidden name=mail value='"+mail_folder+"'>");
document.write("<input type=hidden name=arm value='"+mail_area+"'>");
document.write("<select class=submit name=movetofolder size=1>");

document.write("<OPTION VALUE=0>"+mail_movetofolder_defselect+"</option>");

var x = 0;
while (folders[x] > 0) 
{ 
if (((mail_folder == "folder") || (mail_folder == "msg") ) && (folders[x] == mail_folder_id))
document.write("<OPTION SELECTED VALUE="+folders[x]+">"+ folders[x+1] + "</option>");
else document.write("<OPTION VALUE="+folders[x]+">"+ folders[x+1] + "</option>");
x+= 2; 
}
document.write("</select>&nbsp;&nbsp;<input type=submit class=submit value='"+mail_movetofolder_submit+"'>");
document.write("</td></tr></form>");
}


if ((msg_thread > 0) && (message.length == 1))
{
if (memberLevel > 0)
{
document.write("<tr class=normal><td class=h><nobr>"+mail_thread+"</td>\
<td class=list><nobr>&nbsp;&nbsp;&nbsp;" + mail_threadlink0 + "&nbsp;<a href=\""+link+"&mail=thread" + msg_thread
+ "\">" + mail_threadlink1 + "</a>&nbsp;&nbsp;-&nbsp;&nbsp;\
<a href=\""+link+"&mail=msg&thread=" + msg_thread
+ "\">" + mail_threadlink2 + "</a>&nbsp;&nbsp;&nbsp;</td></tr>");
}
else
document.write("<tr class=normal><td class=h><nobr>"+mail_thread+"</td>\
<td class=list><nobr>&nbsp;&nbsp;&nbsp;<a href=\""+link+"&mail=thread" + msg_thread
+ "\">" + mail_threadlink + "</a>&nbsp;&nbsp;&nbsp;</td></tr>");
}

document.write("<tr class=fixed><td class=h><nobr>"+mail_subject+"</td>\
<td class=list>&nbsp;&nbsp;&nbsp;");

// if (message.length == 1) document.write(title); else 
document.write("<a href=\""+link+"&mail=msg&msg=" + id + "\">" + title + "</a>");

document.write("&nbsp;&nbsp;&nbsp;</td>\
</tr>");

if (Tblocked < 0)
	document.write("<tr><td colspan=2 bgcolor=#dddddd>"+message[z]+"</td></tr>");
else
{
	if (memberLevel > 1)
		document.write("<tr><td colspan=2 bgcolor=red align=center><font color=white>** —”«∆· Â–Â «·⁄÷ÊÌ… „Œ›Ì… ⁄‰ «·√⁄÷«¡ -- «·—Ã«¡ «·Õ–— ›Ì «· ⁄«„· „⁄ „Õ ÊÌ« Â«  **</td></tr>");
	else
		document.write("<tr><td colspan=2 bgcolor=red align=center><font color=white>** —”«∆· Â–Â «·⁄÷ÊÌ… „Œ›Ì… »Ê«”ÿ… «·≈œ«—… **</td></tr>");
	
	if (message[z] != "")
		document.write("<tr><td colspan=2 bgcolor=#dddddd>"+message[z]+"</td></tr>");
}


if ((memberLevel > 0) && (message.length == 1))	quickreplyform();
}

// code to switch to another page.. called by internal code only

function ChangePage()
{
document.PageNum.submit();
}


function t_options_bar()
{
var mainURL = link+"&mail="+mail_folder;
var mainImage = fileURL+'icon.php?i=monitor';
var mainTitle = mail_title;
var mainTooltip = mainTitle;
var foldername = "";

if (mail_folder == "in") foldername = mail_inbox;
if (mail_folder == "out") foldername = mail_outbox;
if (mail_folder == "new") foldername = mail_inbox_new;
if (mail_folder == "trash") foldername = mail_trash;
if (mail_folder == "trashout") foldername = mail_trash;
if (mail_folder == "msg") { foldername = ""; mainURL = link+"&mail=in"; }
if (mail_folder == "folder") 
{ 
x = 0;
while (folders[x] > 0) 
	{ 
	if (folders[x] == mail_folder_id)		{ foldername = folders[x+1]; break; }
	x+= 2; 
	}
}

if (mail_area > 0)
{

mainTitle = "<font color=green>" + getForumTitle(mail_area) + "</font> ";
mainImage = getForumIcon(mail_area);
}

document.write("<table border=0 cellspacing=2 width=100%><tr>");

if ((mail_folder != "msg") && (mail_folder != "edit")) document.write("<form action=\""+link+"\" name=optionsForm>");

document.write("<td><a class=menu href=\""+mainURL+"\"><img src='"+mainImage+"' alt='"+mainTooltip+"'border=0 onError=\"this.src='"+fileURL+"icon.php?m=blank';this.width=0;\"></a></td>"
+ "<td class=main width=100% valign=middle><a class=menu href=\""+mainURL+"\"><font color=red size=+1></b>"+mainTitle+"</a>"
+ "<br><font size=-1>" + foldername + "</td>");

var needreplyicon = false;

if (mail_folder == "msg")
{
if (mail_area > 0) { if (messages[4] == -mail_area) needreplyicon = true; }
else if (messages[4] == memberID) needreplyicon = true;
}

if (mail_folder != "edit")
{
var Tann = messages[0].indexOf("a");
if (Tann >= 0) needreplyicon = false;
}

if ((needreplyicon) &&  (message.length == 1))
{
document.write("<td class=optionsbar_menus><nobr>");
document.write("<a href=\""+link+"&replymsg="+messages[1]
+"&src="+escape(top.location.href)+"\"><img src="+fileURL+"icon.php?m=reply_topic alt=\""+mail_tooltip_reply+"\" height=15 width=15 border=0>");
document.write("<br>"+mail_tooltip_reply+"</a>");

document.write("<td class=optionsbar_menus><nobr>");
document.write("<a href=\"javascript:deleteMsg('" + messages[1] + "')\"><img src=\""+fileURL+"icon.php?m=trashcan\" alt=\""+mail_delete+"\" border=\"0\" hspace=\"0\">");
document.write("<br>"+mail_tooltip_delete+"</a>");
}

document.write("<td class=optionsbar_menus><nobr>");
document.write("<a href=\""+link+"&sendmsg=0&src="+escape(top.location.href)+"\"><img src="+fileURL+"icon.php?m=folder_new_topic height=15 width=15 border=0>");
document.write("<br>"+mail_newmsg+"</a></td>");

document.write("<td class=optionsbar_menus><nobr>");
document.write("<a href=\""+link+"&mail=edit\">");
document.write(mail_your_folders+"</a></td>");


if ((mail_folder != "msg") && (mail_folder != "edit"))
{
if (memberLevel > 1)
	{
	if (supervisor)
		{
		if (mail_filter != "x")
			{
			document.write("<td class=optionsbar_menus>");
		
			document.write(" ÕœÌœ «·—”«∆· «·„⁄—Ê÷…:<br><select style=\"width:150\" name=mf size=1 onchange=\"submitForm();\"><option value=''");
			if (mail_filter == "")	document.write(" SELECTED");
			document.write(">Ã„Ì⁄ «·—”«∆·</option><option value=m");
			if (mail_filter == "m")	document.write(" SELECTED");
			document.write(">—”«∆· «·„‘—›Ê‰ ›ﬁÿ</option><option value=s");
			if (mail_filter == "s")	document.write(" SELECTED");
			document.write(">—”«∆· «·„—«ﬁ»Ê‰ ›ﬁÿ</option><option value=f");
			if (mail_filter == "f")	document.write(" SELECTED");
			document.write(">«·—”«∆· «·≈‘—«›Ì… ›ﬁÿ</option><option value=a");
			if (mail_filter == "a")	document.write(" SELECTED");
			document.write(">—”«∆· «·„œÌ— ›ﬁÿ</option><option value=g1");
			if (mail_filter == "g1")	document.write(" SELECTED");
			document.write(">—œ ⁄·Ï ‘ﬂÊÏ</option><option value=g2");
			if (mail_filter == "g2")	document.write(" SELECTED");
			document.write(">≈‘⁄«— »‰ﬁ· „Ê÷Ê⁄</option><option value=g3");
			if (mail_filter == "g3")	document.write(" SELECTED");
			document.write(">≈‘⁄«— »Ê÷⁄ —ﬁ«»… √Ê „‰⁄</option><option value=g4");
			if (mail_filter == "g4")	document.write(" SELECTED");
			document.write(">≈‘⁄«— »≈“«·… —ﬁ«»… √Ê „‰⁄</option><option value=g5");
			if (mail_filter == "g5")	document.write(" SELECTED");
			document.write(">≈‘⁄«— »—›÷  €ÌÌ— «·«”„</option><option value=g6");
			if (mail_filter == "g6")	document.write(" SELECTED");
			document.write(">≈‘⁄«— ﬁ»Ê· ÿ·» —ﬁ«»… √Ê „‰⁄</option><option value=g7");
			if (mail_filter == "g7")	document.write(" SELECTED");
			document.write(">≈‘⁄«— —›÷ ÿ·» —ﬁ«»… √Ê „‰⁄</option><option value=g8");
			if (mail_filter == "g8")	document.write(" SELECTED");
			document.write(">≈‘⁄«—  €ÌÌ— ÿ·» —ﬁ«»… √Ê „‰⁄</option><option value=g9");
			if (mail_filter == "g9")	document.write(" SELECTED");
			document.write(">≈‘⁄«— › Õ „Ê÷Ê⁄ „Œ›Ì</option>");
			document.write("</select>&nbsp;&nbsp;");
			document.write(	"</td>");
			}
		}
	}


document.write("<td class=optionsbar_menus>"+page_selector_title+"<br>");
document.write("<input type=hidden name=mail value="+mail_folder+">");
if (mail_area > 0) document.write("<input type=hidden name=arm value="+mail_area+">");
if (mail_folder == "mem") document.write("<input type=hidden name=mem value="+memwho+">");
if (mail_folder == "folder") document.write("<input type=hidden name=folder value="+(mail_folder_id-100)+">");
if (mail_order.length > 0) document.write("<input type=hidden name=ord value="+mail_order+">");

document.write("<select class=submit name=pg size=1 onchange=\"submitForm()\">");

for (y = 1; y <= totalpages; y++)
	{
	if (y == pagenum) document.write("<OPTION SELECTED VALUE="+y+">"+y + page_selector_of+ totalpages + "</option>");
	else document.write("<OPTION VALUE="+y+">"+y + page_selector_of + totalpages + "</option>");
	}

document.write("</select></td>");
}

document.write("<td class=optionsbar_menus>"+switchforum_selector_title+"<br>");
forumsSelector2();
document.write("</td>");
document.write("</tr><tr><td></td></tr></table>");


if (mail_folder != "edit")
{
document.write("<table><tr>");

if ((mail_folder == "new") || (new_mail > 0))
{
if (mail_folder == "new")	document.write("<td class=extras2>");
else				document.write("<td class=extras>");
document.write("<A href=\""+link+"&mail=new\"><nobr>"+mail_inbox_new);
if (new_mail > 0) document.write("&nbsp;&nbsp;[" + new_mail + "]");
document.write("</a></td>");
}

if (mail_folder == "in")	document.write("<td class=extras2>");
else				document.write("<td class=extras>");
document.write("<A href=\""+link+"&mail=in\"><nobr>"+mail_inbox+"</a></td>");

if (mail_folder == "out")	document.write("<td class=extras2>");
else				document.write("<td class=extras>");
document.write("<A href=\""+link+"&mail=out\"><nobr>"+mail_outbox+"</a></td>");


document.write("<td>&nbsp;&nbsp;&nbsp;&nbsp;</td>");

document.write("<td class=optionsbar_menus2>");
document.write("<A href=\""+link+"&mail=trash\"><nobr>"+mail_trash+"</a> </td>");

if (mail_folder == "trash")	document.write("<td class=extras2>");
else				document.write("<td class=extras>");
document.write("<A href=\""+link+"&mail=trash\"><nobr><img border=0 src="+fileURL+"icon.php?m=go_right alt='«·—”«∆· «·Ê«—œ… ›Ì „Ã·œ «·„Õ–Ê›« '></a></td>");

if (mail_folder == "trashout")	document.write("<td class=extras2>");
else				document.write("<td class=extras>");
document.write("<A href=\""+link+"&mail=trashout\"><img border=0 src="+fileURL+"icon.php?m=go_left alt='«·—”«∆· «·’«œ—… ›Ì „Ã·œ «·„Õ–Ê›« '></a></td>");


if (folders[0] != 0)
{
var x = 0;


document.write("</table><table><tr>");

// document.write("<td>&nbsp;&nbsp;&nbsp;&nbsp;</td>");

var splitcount = 0;

while (folders[x] > 0)
{
if (splitcount == 5)
	{
	document.write("</tr><tr>");
	splitcount = 0;
	}

var outmark = false;
if ((mail_folder == "folderout") && (folders[x] == mail_folder_id-100))
	outmark = true;

var inmark = false;
if ((mail_folder == "folder") && (folders[x] == mail_folder_id-100))
	inmark = true;

if ((mail_folder == "msg") && (folders[x] == mail_folder_id-100))
	{ outmark = true; inmark = true; }

if (splitcount > 0)
	document.write("<td>&nbsp;&nbsp;</td>");

if (outmark || inmark)
	document.write("<td class=extras2>");
else
	document.write("<td class=optionsbar_menus2>");
	
document.write("<A href=\""+link+"&mail=folder&folder="+folders[x]+"\"><nobr>");
document.write(folders[x+1] + "</a></td>");

if (inmark == true) document.write("<td class=extras2>");
else document.write("<td class=extras>");

document.write("<A href=\""+link+"&mail=folder&folder="+folders[x]+"\"><img border=0 src="+fileURL+"icon.php?m=go_right alt='«·—”«∆· «·Ê«—œ… ›Ì „Ã·œ: "+folders[x+1]+"'></a></td>");

if (outmark) document.write("<td class=extras2>");
else document.write("<td class=extras>");

document.write("<A href=\""+link+"&mail=folderout&folder="+folders[x]+"\"><img border=0 src="+fileURL+"icon.php?m=go_left alt='«·—”«∆· «·’«œ—… ›Ì „Ã·œ: "+folders[x+1]+"'></a>"
+ "</td>");

splitcount++;
x += 2;
}
}

document.write("</tr></table>");

}
}


function edit_folders()
{
var x, y, s;
var z = 10;
if (mail_area > 0) z = 25;

for (y = 1; y <= z; y++)
{
	x = 0;
	s = "";
	while (folders[x] > 0) 
	{ 
		if (folders[x] == y)	{ s = folders[x+1]; break; }
		x+= 2; 
	}
	
	document.write("<tr class=fixed><td class=h>" + y + "</td><td class=list_small>");
	document.write("<input type=text size=20 name=editfolder"+y+" value=\""+s+"\"></td></tr>");
	}
	
document.write("<tr class=fixed><td colspan=2 class=list_small><br>" 
+ "<input type=submit value='"+mail_editfolders_submit+"'></form></td></tr>");
	

document.write("<tr class=normal><td colspan=2 class=list_small>" 
+ mail_editfolders_notes + "</td></tr>");
}




function t_show_messages()
{
var x = 0;

if (mail_folder == "msg")
	{
	while ((x < messages.length) && (messages[x+1] != ""))
		{
		view_msg(x,messages[x++],messages[x++],messages[x++],messages[x++],messages[x++],messages[x++],messages[x++],messages[x++],messages[x++]);
		z++;
		}
	}
else if (messages[x+1] == "")
	{
	document.write("<tr class=normal><td class=list_center colspan=10><br><br>"
		+ mail_emptybox
		+ "<br><br><br></td></tr>");
	}
else
	{
	if (mail_folder == "mem")
		document.write("<tr><td bgcolor=yellow align=center valign=top colspan=10>\n\
		<b><font color=black>«·„—«”·«  »Ì‰ﬂ Ê»Ì‰: " + findMemberName(memwho)
		+"</b></td></tr>\n");
		

	while ((x < messages.length) && (messages[x+1] != ""))
		{
		t(messages[x++],messages[x++],messages[x++],messages[x++],messages[x++],messages[x++],messages[x++],messages[x++],messages[x++]);
		}
	}
	

}

function submitForm() {document.optionsForm.submit(); return 0;}

function render_content()
	{
	if (mail_area > 0) link += "&arm="+mail_area;
	
	t_options_bar();
	t_table_open();
	t_header(true);
	if ((mail_folder != "msg") && (mail_folder != "edit"))	document.write("</form>");
	
	if (mail_folder == "edit") edit_folders();
	else 
	{
	if (mail_folder != "msg")  document.write("<form method=post>");
	t_show_messages();
	}

	t_footer();
	t_table_close();

	if ((messages[x+1] != "") && (mail_folder == "trash"))
	{
		document.write("<center><br><input type=button value='Õ–› «·—”«∆· «·Ê«—œ… „‰ „Ã·œ «·„Õ–Ê›«  ‰Â«∆Ì«' onclick='deletePermanent()'>");
	}
	else if ((messages[x+1] != "") && (mail_folder == "trashout"))
	{
		document.write("<center><br><input type=button value='Õ–› «·—”«∆· «·’«œ—… „‰ „Ã·œ «·„Õ–Ê›«  ‰Â«∆Ì«' onclick='deletePermanent()'>");
	}
		
	if (mail_folder != "edit")
	{
	if (msgcount > 0)
		{
		document.write("<center><br><input type=button class=small value=\"≈Œ Ì«— ﬂ«„·\" onclick=\"selectAll()\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
		
		document.write("<input type=submit class=submit value='√‰ﬁ· «·—”«∆· «·„Œ «—… «·Ï «·„·› «· «·Ì:'>");
		document.write("<input type=hidden name=mail value='"+mail_folder+"'>");
		document.write("<input type=hidden name=arm value='"+mail_area+"'>");
		document.write("<input type=hidden name=msgmovecount value='"+msgcount+"'>");
		document.write("&nbsp;&nbsp;<select class=insidetitle name=movetofolder size=1>");

		if ((mail_folder != "trash") && (mail_folder != "trashout"))
			document.write("<OPTION VALUE=0>"+mail_trash+"</option>");

		var x = 0;
		while (folders[x] > 0) 
		{
		if (mail_folder_id != folders[x])
			{		
			document.write("<OPTION VALUE="+folders[x]+">"+ folders[x+1] + "</option>");
			}
			
		x+= 2; 
		}
		document.write("</select>");
		
		}
		
	document.write("</form>");
	}
	
	
//	if (page_refresh > 0) setTimeout('top.location.href = top.location.href',page_refresh*60000);
	}

function findMemberName(id)
	{
	var x = 0;

	while ((x < authors.length) && (authors[x] != 0))
		{
		if (authors[x] == id)	return(authors[x+1]);
		x += 2;
		}

	return("");
	}

function findFolderName(id)
	{
	
	if (id == 1)	return("<font color=black>" + mail_inbox + "</font>");
	if (id == 2)	return("<font color=green>" + mail_outbox + "</font>");
	if (id == 0)	return("<font color=red>" + mail_trash + "</font>");
	
	var x = 0;

	while (x < folders.length)
		{
		if (folders[x] == (id-100))	return(folders[x+1]);
		x += 2;
		}

	return("");
	}


function deletePermanent()
	{
	confirm("Â–Â «·Œ«’Ì…  Õ  «·’Ì«‰… Õ«·Ì«.  ”  „ ≈⁄«œ Â« ﬁ—Ì»«.");
	/*
	if (mail_folder == "trashout") 
	{
		if (confirm("«·—Ã«¡  √ﬂÌœ Õ–› «·—”«∆· «·’«œ—… „‰ „Ã·œ «·„Õ–Ê›«  »’›… ‰Â«∆Ì….\r\n·‰   „ﬂ‰ „‰ ≈” —Ã«⁄ Â–Â «·—”«∆· »⁄œ –·ﬂ."))
				document.location = link+"&mail=trashout&emptytrashout=true";
	}
	else
		if (confirm("«·—Ã«¡  √ﬂÌœ Õ–› «·—”«∆· «·Ê«—œ… „‰ „Ã·œ «·„Õ–Ê›«  »’›… ‰Â«∆Ì….\r\n·‰   „ﬂ‰ „‰ ≈” —Ã«⁄ Â–Â «·—”«∆· »⁄œ –·ﬂ."))
				document.location = link+"&mail=trash&emptytrash=true";
	*/
	}

function selectAll()
{
var x = 0;
var count = 0;

while ((x < messages.length) && (messages[x+1] != ""))
	{
	var Tann = messages[x].indexOf("a");

	if (Tann < 0)
		{
		count++;
		var object = "msgmove_" + count;

		if (document.layers && document.layers[object])
		        document.layers[object].checked = true;
		else if (document.all)
		        document.all[object].checked = true;
		}
	x += 9;
	}
	
confirm("⁄œœ «·—”«∆· «· Ì  „ Ê÷⁄ ⁄·«„…  «·≈Œ Ì«— ⁄·ÌÂ«: " + count)
}


function quickreplyform()
{
if ((memberLevel > 0) && (messages[3] != memberID))
	{
	document.write("<tr>\
	<form name=quickreply action=\""+link+"&mail=msg&msg="+ messages[1] +"\" method=post>\
	<td bgcolor=white valign=top align=center><br>\
	<img src="+fileURL+"icon.php?m=reply_topic><br><br><font color=red>\n\
	—œ ”—Ì⁄\n");

	document.write("</td><td bgcolor=white width=100% valign=top align=center>\
	<textarea name=msg style=\"width:100%;height:250;"+memberFormat+"\"></textarea>\
	<input type=hidden name=qid value='" + escape(memberQID) + "'>\
	<input type=button onclick='submitQuickReplyForm()' value=\"√—”· «·—œ ⁄·Ï «·—”«·…\">");

	document.write("<input type=hidden name=post value=message>\
	<input type=hidden name=forum value=0>\
	<input type=hidden name=subject value=\"" + messages[2] +  "\">\
	<input type=hidden name=format value=quick>\
	<input type=hidden name=arm value='"+mail_area+"'>\
	<input type=hidden name=user_id value='"+messages[3]+"'>\
	<input type=hidden name=thread_id value="+msg_thread+">\
	<input type=hidden name=reply_id value="+msg_mail_id+">\
	<input type=hidden name=checksum value="+ucs+">\
	<input type=hidden name=caller value=\""+escape(document.location)+"\">\
	</td></form></tr>");
	}
}

function submitQuickReplyForm(mode)
{
var x = quickreply.msg.value;

while ((x.substring(0,1) == ' ') || (x.substring(0,1) == '\r') || (x.substring(0,1) == '\n') || (x.substring(0,1) == '\t'))
	x = x.substring(1);

quickreply.msg.value = x;

if (quickreply.msg.value.length < 3) return;
else 
	{

	if (mode == 2)	if (!confirm(msg_confirm_lock_topic))	return;

	quickreply.submit();
	}
}
