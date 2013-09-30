function show(object) {
    if (document.layers && document.layers[object])
        document.layers[object].visibility = 'visible';
    else if (document.all)
        document.all[object].style.visibility = 'visible';
}
 
function hide(object) {
    if (document.layers && document.layers[object])
        document.layers[object].visibility = 'hidden';
    else if (document.all)
        document.all[object].style.visibility = 'hidden';
}

function disable(object) {
    if (document.layers && document.layers[object])
        document.layers[object].disabled = true;
    else if (document.all)
        document.all[object].disabled = true;
}

function enable(object) {
    if (document.layers && document.layers[object])
        document.layers[object].disabled = false;
    else if (document.all)
        document.all[object].disabled = false;
}

// write table start for forum topics table

function t_table_open()
{
	if (adSideBar.length > 0)
    	{
    	document.write("<table dir=ltr border=0 width=100% cellspacing=0 cellpadding=0>\r\n");
    	
    	document.write("<tr><td valign=top style=\"padding-right:2px;\">");
    	
    	if (adLogo.length > 0)
		document.write("<img src=\"" + adLogo + "\"><br>");

    	document.write(adSideBar);
    	document.write("</td><td width=99%>");
    	}


document.write("<table dir="+dir+" border=0 width=100% cellspacing=0 cellpadding=0 align=center class=maingrid>\
<tr><td>\
<table dir="+dir+" border=0 width=100% cellspacing=1 cellpadding=2>");
}

// write table end for forum topics table

function t_table_close()
{
document.write("</table></td></tr></table>");
if (adSideBar.length > 0)	document.write("</td></tr></table>");
}

// write header for forum topics table

function t_header(showdetails)
{
var Flocked = forumStatus.indexOf("l");

if (moderate == true)
	{
	document.write("<tr><td colspan=3 class=h>");

	if (showdetails && !forum_guide)
	{
	var selAll = "";
	var selUnapproved = "";
	var selHeld = "";
	var selLocked = "";
	var selDeleted = "";
	var selReplyUnapproved = "";
	var selReplyHeld = "";
	var selReplyHidden = "";
	var selTopicHidden = "";
	var selNewsletter = "";
	var selTopTopics = "";
	var selNoArchive = "";
	var selSurveys = "";
	var selMoved = "";
	var selEdited = "";
	var selUnpinned = "";
	var selOpen = "";

	if (forum_view == "ut")		selUnapproved = " selected";
	else if (forum_view == "ft")	selHeld = " selected";
	else if (forum_view == "lt")	selLocked = " selected";
	else if (forum_view == "dt")	selDeleted = " selected";
	else if (forum_view == "ur")	selReplyUnapproved = " selected";
	else if (forum_view == "fr")	selReplyHeld = " selected";
	else if (forum_view == "ir")	selReplyHidden = " selected";
	else if (forum_view == "it")	selTopicHidden = " selected";
	else if (forum_view == "nl")	selNewsletter = " selected";
	else if (forum_view == "tt")	selTopTopics = " selected";
	else if (forum_view == "na")	selNoArchive = " selected";
	else if (forum_view == "sv")	selSurveys = " selected";
	else if (forum_view == "mv")	selMoved = " selected";
	else if (forum_view == "ed")	selEdited = " selected";
	else if (forum_view == "up")	selUnpinned = " selected";
	else if (forum_view == "op")	selOpen = " selected";
	else							selAll = " selected";

	document.write("<select class=insidetitle name=mode onchange=\"javascript:submitForm();\">\
	<option"+selAll+" value=\"all\">"+forum_view_all+"</option>\
	<option"+selOpen+" value=\"op\">"+forum_view_open+"</option>\
	<option"+selUnapproved+" value=\"ut\">"+forum_view_unapproved+" (" + unmoderated_topics + ")</option>\
	<option"+selHeld+" value=\"ft\">"+forum_view_held+" (" + held_topics + ")</option>\
	<option"+selLocked+" value=\"lt\">"+forum_view_locked+"</option>\
	<option"+selReplyUnapproved+" value=\"ur\">"+forum_view_reply_unapproved+" (" + unmoderated_replies + ")</option>\
	<option"+selReplyHeld+" value=\"fr\">"+forum_view_reply_held+" (" + held_replies + ")</option>\
	<option"+selTopicHidden+" value=\"it\">"+forum_view_topic_hidden+"</option>\
	<option"+selReplyHidden+" value=\"ir\">"+forum_view_reply_hidden+"</option>\
	<option"+selTopTopics+" value=\"tt\">"+forum_view_toptopic+"</option>\
	<option"+selSurveys+" value=\"sv\">"+forum_view_surveys+"</option>\
	<option"+selNoArchive+" value=\"na\">"+forum_view_noarchive+"</option>");

if (memberLevel > 2)
	document.write("<option"+selMoved+" value=\"mv\">"+forum_view_moved+"</option>\
	<option"+selEdited+" value=\"ed\">"+forum_view_edited+"</option>\
	<option"+selUnpinned+" value=\"up\">"+forum_view_unpinned+"</option>");

//	<option"+selNewsletter+" value=\"nl\">"+forum_view_newsletter+"</option>"

	if ((memberLevel > 2) || (supervisor))
		document.write("<option"+selDeleted+" value=\"dt\">"+forum_view_deleted+"</option>");
	}
	else
		document.write(forum_table_topic);

	document.write("</td>");
	}
else document.write("<tr><td colspan=2 class=h>"+forum_table_topics+"</td>");

document.write("<td class=h>"+forum_table_author+"</td>\
<td class=h>"+forum_table_replies+"</td>\
<td class=h>"+forum_table_read+"</td>");

if (moderate && !forum_guide)
	{
	if ((forum_view == "ur")	|| (forum_view == "fr"))
		document.write("<td class=h>"+forum_table_lastauthor+"</td>");
	else
		document.write("<td class=h>"+forum_table_lastreply+"</td>");
	}
else
	document.write("<td class=h>"+forum_table_lastreply+"</td>");

if (memberLevel > 0)
	document.write("<td class=h>"+forum_table_options+"</td>");

document.write("</tr>");
}



function guide_header(showdetails)
{
document.write("<tr><td class=h>فهرس الدليل</td>");
if (moderate) document.write("<td class=h>رقم الترتيب</td>");
document.write("<td class=h width=90%>المواضيع في: <font color=yellow>" + guide_title  + "</td>");
document.write("<td class=h>الكاتب</td>");
if (moderate) document.write("<td class=h>أضاف الموضوع</td>");
document.write("</tr>");
}


// write footer for forum topics table

function t_footer()
{
}

var event = 1;

function updateTopicRow(theRow)
{
var row = eval("topicRow_"+theRow)
var cur = eval("approve.approve_"+theRow)

if (cur.checked == false)	row.className = "normal";
else						row.className = "highlighted";

scanList("update");
}


var needHeader = false;
// write topic entry into forum topics table

var replycounter = 1;
var linesshown = 0;

function t(flags,id,title,aid,author,adate,replies,reads,lid,lastposter,ldate,lmsg,id2)
{
var cl = "normal";

var Tnew = flags.indexOf("n");
var Thot = flags.indexOf("h");
var Tlocked = flags.indexOf("l");
var Tarch = flags.indexOf("a");
var Tneedarch = flags.indexOf("A");
var Tfixed = flags.indexOf("f");
var Tspon = flags.indexOf("s");
var Tmoderate = flags.indexOf("m");
var Theld = flags.indexOf("M");
var Tdeleted = flags.indexOf("d");
var Ttoptopic = flags.indexOf("t");
var Ttoptopic2 = flags.indexOf("T");
var Tsurvey = flags.indexOf("v");
var Thidden = flags.indexOf("i");
var infoline1 = ""
var infoline2 = ""


linesshown++;

if (linesshown == 5)
{
    		 if (adLink3.length > 0)
    		    {
	                document.write("<tr bgcolor=white><td colspan=100>");
                	document.write("<table width=100%><tr><td align=center>"+adLink3+"</td></tr></table>");
                	document.write("</td></tr>");
                }
}

if (author == "")	author = findMemberName(aid);
if (lastposter == "")	lastposter = findMemberName(lid);

if (Tfixed >= 0)	cl = "fixed";
if (Tdeleted >= 0)	cl = "lastposter";
if (Thidden >= 0)	cl = "deleted";
if (Tspon >= 0) { cl = "fixed"; Ttoptopic = -1; Ttoptopic2 = -1; }


if (aid == 0) {	aid = memberID;	author = memberName; }
if (lid == 0) {	lid = memberID;	lastposter = memberName; }
var topicowner = (aid == memberID);

var enctitle = escape(title);

if (needHeader)
	{
	document.write("<tr bgcolor=white><td colspan=100>&nbsp;</td></tr>");
	t_header(false);
	needHeader = false;
	}

document.write("<tr class = "+cl+" id=topicRow_"+id+">");

if (moderate)
{
document.write("<td class=list_options>");

if (moderate)
	{
	if ((memberLevel > 3) || (Tmoderate >= 0) || (Theld >= 0))
		document.write("<INPUT type=checkbox id=approve_"+id+" name=approve_"+id+" onclick=\"updateTopicRow("+id+")\">");
	}

document.write("</td>");
}

document.write("<td class=list_small>&nbsp;");
document.write("<a href=\""+link+"samfrm/forum"+forum_id+"/topic"+id+"\">");

var icon = "folder";

if ((Tnew >= 0) && (Tmoderate < 0))
	{
	icon += "_new";
	infoline2 = topic_tooltips_new;
	}

if (Tlocked	 >= 0)
	{
	icon += "_locked";
	infoline1 = topic_tooltips_locked;
	}
else if (Thot >= 0)
	{
	icon += "_hot";
	infoline1 = topic_tooltips_hot;
	}

if (Tarch >= 0)
	{
	icon += "_archived";
	infoline1 = topic_tooltips_archived;
	}

if (Tmoderate >= 0)
	{
	icon += "_unmoderated";
	infoline1 = topic_tooltips_unapproved;
	}

if (Theld >= 0)
	{
	icon = "folder_hold";
	infoline1 = topic_tooltips_held;
	}

if (infoline1.length == 0)	infoline1 = infoline2;
else if (infoline2.length)	infoline1 += "" + infoline2;

if (Tspon >= 0) {
    var sphoto = findSponsorPhoto(aid);
    if (sphoto.length > 0)
        document.write("<nobr><img src='"+sphoto+"' height=35 title='موضوع من راع رسمي' border=0 hspace=0></a></td><td class=list_topic><table cellsapcing=0 cellpadding=0><tr>");
    else
        document.write("<nobr><img src='"+Icones+"icons/k" + icon + "' height=15 width=15 border=0 hspace=0 title=\"" + infoline1 + "\"></a></td><td class=list_topic><table cellsapcing=0 cellpadding=0><tr>");
}
else {
    document.write("<nobr><img src='"+Icones+"icons/k" + icon + "' height=15 width=15 border=0 hspace=0 title=\"" + infoline1 + "\"></a></td>\
<td class=list_topic><table cellsapcing=0 cellpadding=0><tr>");
}

if (Tneedarch >=0 )
	document.write("<td><img src='"+Icones+"icons/kfolder_archived' title='"+topic_tooltips_archiveable+"'></td>");

if (Tsurvey >=0 )
	document.write("<td><img src='"+fileURL+"icon.php?i=survey' title='"+topic_tooltips_survey+"'></td>");

if (Ttoptopic >=0 )
	document.write("<td><img src='"+Icones+"icons/kstar_red' title='"+topic_tooltips_toptopic+"'></td>");

if (Ttoptopic2 >=0 )
	document.write("<td><img src='"+Icones+"icons/ktoptopic' title='"+topic_tooltips_toptopic+"'></td>");
	
var topic_link =  link+"samtopic/topic" + id ;

document.write("<td>"+Samu(topic_link ,title,false)+"<font color=green>ɽ New ɿ</font></a></td><td>  " + Samu(topic_link ,title,false)+ title + "</a>&nbsp;");

if (replies > topicpagesize)
	topicPaging(id,replies);

document.write("</td></tr></table></td>\
<td class=list_small nowrap><font color=green>" + formatDate(adate) + "</font><br><a href=\""+link+"&member=" + aid + "\">" + author + "</a></td>\
<td class=list_small>" + replies + "</td>\
<td class=list_small>" + reads + "</td>\
<td class=list_small nowrap>");

if (replies == 0)
	document.write("&nbsp;</td>")
else
	document.write("<font color=red>" + formatDate(ldate) + "</font><br><a href=\""+link+"&member=" + lid + "\">" + lastposter + "</a></td>");

if (memberLevel > 0)
	{
	document.write("<td class=list_small nowrap>");

	if (lmsg.length == 0)
	{
	if (moderate)
		{
		if ((Tmoderate < 0) && (Theld < 0))
			{
			if (Tlocked < 0)
				document.write("<a href='javascript:lockTopic(" + id + ")'><img src=\""+Icones+"icons/klock\" title=\""+tip_lock_topic+"\" border=\"0\" hspace=\"0\"></a>");
			else
				document.write("<a href='javascript:unlockTopic(" + id + ")'><img src=\""+Icones+"icons/kunlock\" title=\""+tip_unlock_topic+"\" border=\"0\" hspace=\"0\"></a>");

			if (Thidden < 0)
				document.write("&nbsp;<a href='javascript:hideTopic(" + id + ")'><img src=\""+Icones+"icons/kposticon_unmoderated\" title=\"إخفاء الموضوع\" border=\"0\" hspace=\"0\"></a>");
			else
				document.write("&nbsp;<a href='javascript:unhideTopic(" + id + ")'><img src=\""+Icones+"icons/kposticon\" title=\"إظهار الموضوع\" border=\"0\" hspace=\"0\"></a>");
			}

			if (Tspon < 0) {
			    if (Tfixed < 0)
			        document.write("<a href='javascript:pinTopic(" + id + ")'><img src=\""+Icones+"icons/kpin\" title=\"" + tip_pin_topic + "\" border=\"0\" hspace=\"0\"></a>");
			    else
			        document.write("<a href='javascript:unpinTopic(" + id + ")'><img src=\""+Icones+"icons/kunpin\" title=\"" + tip_unpin_topic + "\" border=\"0\" hspace=\"0\"></a>");

			 //   if (memberLevel > 2)
			      //  document.write("&nbsp;<a href=\"" + link + "&mojo=treads&tid=" + id + "\"><img border=0 src="+Icones+"icons/ksmile_question width=15 height=15>");
			}

		document.write("&nbsp;<a href=\""+link+"sameditinfo/topic"+id+" \"><img src=\""+Icones+"icons/kfolder_archive\" title=\""+tip_topic_properties+"\" border=\"0\" hspace=\"0\"></a>");
		}

	if (moderate || topicowner)
		document.write("&nbsp;<a href=\""+link+"Samedit/edittopic/topic"+id+"-"+memberQID+"-"+Samsrc+"\"><img src=\""+Icones+"icons/kpencil\" title=\""+tip_edit_text+"\" border=\"0\" hspace=\"0\"></a>");

	if (moderate)
	{
		document.write("&nbsp;<a href=\"javascript:deleteTopic(" + id + ")\"><img src=\""+Icones+"icons/ktrashcan\" title=\""+tip_delete_topic+"\" border=\"0\" hspace=\"0\"></a>");
		
	/*	if (Thidden < 0)
		{
		if ((memberLevel > 2) || (memberLevelSup >= 1))
			document.write("&nbsp;<a href='index.php?svc=guides&addtopic="+id+"'><img src=\""+Icones+"icons/kguide\" title=\"ربط الموضوع بدليل المنتدى\" border=\"0\" hspace=\"0\"></a>");
		}*/
	}

	if ((memberLevel > 0) && (moderate || (Tlocked < 0)))
		{
		if ((Tmoderate < 0) && (Theld < 0)) 
			document.write("&nbsp;<a href=\""+link+"samedit/newreply/topic"+id+"-"+memberQID+"-"+Samsrc+"\"><img src="+Icones+"icons/kreply_topic title=\""+tip_reply+"\" height=15 width=15 border=0></a>");
		}

	if ((memberLevel > 0) && (whichauthor >= 0))
	{
	if (whichauthor == 0)
		document.write("&nbsp;<a href='index.php?t="+id+"&m="+memberID+"'>"
		 + "<img src=\""+Icones+"icons/kgroup\" title=\"عرض مشاركاتك فقط في هذا الموضوع\" border=0></a>");
		else
		document.write("&nbsp;<a href='index.php?t="+id+"&m="+whichauthor+"'>"
		 + "<img src=\""+Icones+"icons/kgroup\" title=\"عرض مشاركات هذا العضو فقط في هذا الموضوع\" border=0></a>");
	}

	if ((moderate) && ((Tmoderate >= 0) || (Theld >= 0)))
		document.write("&nbsp;<a href=\"javascript:approveTopic(" + id + ")\"><img src=\""+Icones+"icons/kfolder_moderate\" title=\""+tip_approve_topic+"\" height=15 width=15 border=0></a>");

	if ((moderate) && (Tmoderate >= 0))
		document.write("&nbsp;<a href=\"javascript:holdTopic(" + id + ")\"><img src=\""+Icones+"icons/kposticon_hold\" title=\""+tip_hold_topic+"\" height=15 width=15 border=0></a>");
	}

	document.write("</td>");
	}

document.write("</tr>");

if ((lmsg.length > 0) && (id2 > 0))
	{
	document.write("<tr bgcolor=#eeeeee><td colspan=2 align=center valign=top><nobr>");

//	document.write("</td><td align=center valign=top><nobr>");

	if (forum_view != "ir")
	{
		document.write("<a href=\"javascript:approveReply(" + id2 + ")\"><img src=\""+Icones+"icons/kfolder_moderate\" title=\""+tip_approve_reply+"\" height=15 width=15 border=0></a>&nbsp;&nbsp;&nbsp;");
		if (forum_view != "fr")
			document.write("<a href=\"javascript:holdReply(" + id2 + ")\"><img src=\""+Icones+"icons/kposticon_hold\" title=\""+tip_hold_reply+"\" height=15 width=15 border=0></a>&nbsp;&nbsp;&nbsp;");
	}
	else
		document.write("<a href=\"javascript:unhideReply(" + id2 + ")\"><img src=\""+Icones+"icons/kposticon\" title=\""+tip_unhide_post+"\" height=15 width=15 border=0></a>&nbsp;&nbsp;&nbsp;");

	document.write("<a href=\"javascript:deleteReply(" + id2 + ")\"><img src=\""+Icones+"icons/kdelete_reply\" title=\""+tip_delete_reply+"\" height=15 width=15 border=0></a>&nbsp;&nbsp;&nbsp;");

	document.write("<a href='index.php?t="+id+"&r="+id2+"'>"
		 + "<img src=\""+Icones+"icons/ksingle\" title=\"عرض هذا الرد\" border=0></a>&nbsp;&nbsp;&nbsp;");

	document.write("<a href='index.php?t="+id+"&m="+lid+"'>"
		 + "<img src=\""+Icones+"icons/kgroup\" title=\"عرض ردود هذا العضو في الموضوع المعني\" border=0></a>&nbsp;&nbsp;&nbsp;");

	document.write("<a href='index.php?requestmon="+lid+"&tid="+id+"&rid="+id2+"'>"
		 + "<img src=\""+Icones+"icons/kedit_moderator\" border=0></a>&nbsp;&nbsp;&nbsp;");

	document.write("<a href=\""+link+"&edit=editreply&t="+id+"&REPLY_ID="+id2+"&src="+escape(top.location.href)+"\"><img src=\""+Icones+"icons/kpencil\" title=\""+tip_edit_text+"\" border=\"0\" hspace=\"0\"></a><br>");

	document.write("<table width=100% border=1><tr><td class=optionsbar_menus colspan=4>إختيار جماعي</td></tr>");

	document.write("<tr><td class=list_options><nobr><font size=-1 color=green>موافقة:<INPUT type=checkbox class=submit checked=checked name=ra_"+replycounter+"></td>");
	if (forum_view != "fr")
		document.write("<td class=list_options><nobr><font size=-1>تجميد:<INPUT type=checkbox class=submit name=rh_"+replycounter +"></td>");
	document.write("<td class=list_options><nobr><font size=-1 color=red>حذف:<INPUT type=checkbox class=submit name=rd_"+replycounter +">"
	+ "<INPUT type=hidden class=submit name=bulkreply_"+replycounter+" value="+id2+"></td></tr></table>");

	replycounter++;

	document.write("</td><td colspan=100>" + lmsg + "</td></tr>");
	needHeader = true;
	}
}


// write topic paging selector.. called from t() only

function topicPaging(tid,replies)
{
var total = replies/topicpagesize;

if ((total % 1) > 0)
	total = (total - (total % 1)) + 1;

if (total > 1)
	{
	document.write("<table dir="+dir+" border=0 cellspacing=0 cellpadding=0><tr><td valign=center><font size=-2><img src='"+Icones+"icons/kposticon' border=0></td>");

	for (x = 1; x <= total; x++)
		{
		if (x && ((x % 15) == 0)) document.write("</tr><tr><td></td>");

		document.write("<td><font size=-2>&nbsp;<a href='index.php?t="
			+ tid
			+ "&pg=f" + x
			+ "'>" + x + "</a></td>");
		}

	document.write("</tr></table>")
	}
}



function g(id,aid,title,mid,order)
{
var cl = "normal";

var author = findMemberName(aid);
var addedby = findMemberName(mid);

if (aid == 0) {	aid = memberID;	author = memberName; }
if (mid == 0) {	mid = memberID;	addedby = memberName; }

var enctitle = escape(title);

document.write("<tr class = "+cl+">");

if (moderate)
{
document.write("<td class=list_small><nobr>"
	+ "<a href=index.php?f=" + forum_id + "&guide=" + guide_id + "&gitem=" + id + "&gpos=top><img border=0 src=icons/arrowup.gif title='أنقل الموضوع لبداية التصنيف'></a>&nbsp;"
	+ "<a href=index.php?f=" + forum_id + "&guide=" + guide_id + "&gitem=" + id + "&gpos=up><img border=0 src=icons/minus.gif title='أنقل الموضوع للأعلى'></a>&nbsp;"
	+ order + "&nbsp;"
	+ "<a href=index.php?f=" + forum_id + "&guide=" + guide_id + "&gitem=" + id + "&gpos=down><img border=0 src=icons/plus.gif title='أنقل الموضوع للأسفل'></a>&nbsp;"
	+ "<a href=index.php?f=" + forum_id + "&guide=" + guide_id + "&gitem=" + id + "&gpos=bottom><img border=0 src=icons/arrowdown.gif title='أنقل الموضوع لنهاية التصنيف'></a>"
	+ "</td>");
}

document.write("<td><a href=\"index.php?t=" + id + "\">" + title + "</a></td>");
document.write("<td class=list_small><nobr><a href=\""+link+"&member=" + aid + "\">" + author + "</a></td>");

if (moderate) document.write("<td class=list_small><nobr><a href=\""+link+"&member=" + mid + "\">" + addedby + "</a></td>");

document.write("</tr>");
}


// write topic paging selector.. called from t() only

function topicPaging(tid,replies)
{
var total = replies/topicpagesize;

if ((total % 1) > 0)
	total = (total - (total % 1)) + 1;

if (total > 1)
	{
	document.write("<table dir="+dir+" border=0 cellspacing=0 cellpadding=0><tr><td valign=center><img src='"+Icones+"icons/kposticon' title='أختار صفحة' border=0></td>");

	for (x = 1; x <= total; x++)
		{
		if (x && ((x % 15) == 0)) document.write("</tr><tr><td></td>");

		document.write("<td class=Sam_pagination><a href='"+link  + "samtopic/topic"
			+ tid
			+ "-" + x
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

function writeModerateIcon(id,command,text)
	{
	document.write("<td class=optionsbar_menus2><nobr>"
		+ "<a id="+id+" href=\"javascript:scanList('"+command+"')\">" + text + "</a></td>");
	}

function t_options_bar(ndays,sort_order,pagenum,totalpages)
{
var mainURL = link+"samfrm/forum"+forum_id;
var infoURL = link+"samfrm/forum"+forum_id;
var mainImage = getForumIcon(forum_id);
var mainTitle = getForumTitle(forum_id);
var mainTooltip = mainTitle;

if (memberLevel > 0)
	{
	infoURL = link+"&finfo="+forum_id;
	mainTooltip = "معلومات عن المنتدى";
	}

document.write("<br><table border=0 cellspacing=2 width=100%><tr>");

if ((whichauthor == 0) || (whichauthor == memberID))
{
forumMods = "-- مواضيعك فقط --";
}
else if (whichauthor > 0)
{
forumMods = "<font color=black>مواضيع العضو: </font>" + whichname;
}
else if (forumMods.length > 0)
	{
    var splitArray = forumMods.split("|");

 	forumMods = "<table class=mods  cellspacing=0 cellpadding=0><tr>"
 		+ "<td><nobr><font size=-2>&nbsp;" + forum_moderated_by + ":</font></td>";

	y = 0;
	x = 0;
	while (x < splitArray.length)
		{
		if (y == 3)
			{
			forumMods += "</tr></table><table class=mods cellspacing=0 cellpadding=0><tr>";
			y = 0;
			}

		forumMods += "<td><nobr><span  id=modiby>&nbsp;";
		if (x)	forumMods += " + ";
		forumMods += splitArray[x] + "</span></td>";
		x++;
		y++;
		}
	forumMods += "</tr></table>";
	if (x > 8)	forumMods = "";
	}


document.write("<td class=optionsbar_menus><a class=menu href=\""+infoURL+"\"><img width=35 height=35 src='"+mainImage+"' title='"+mainTooltip+"'border=0  onError=\"this.src='"+Icones+"icons/kblank';this.width=0;\"></a></td>"
+ "<td class=optionsbar_menus valign=middle><nobr><a class=menu href=\""+mainURL+"\"><font color=red size=+1></b>"+mainTitle+"</a>"
+ "<br>" + forumMods + " </td><td  class=main width=100%>&nbsp;</td>");

if (forumStatus.indexOf("l") < 0)
	{
	 
	document.write("<td class=optionsbar_menus><nobr>");
	document.write("<a href=\""+link+"Samedit/newtopic/forum"+forum_id+"-"+memberQID+"-"+Samsrc+" \"><img src='"+Icones+"icons/kfolder_new_topic' height=15 width=15 border=0>");
	document.write("<br>"+forum_toolbar_new_topic+"</a>");
	document.write("</td>");

	if ((!moderate) || (supervisor))
		{
		document.write("<td class=optionsbar_menus><nobr>");	
		document.write("<a href=\""+link+"&sendmsg=-"+forum_id+"&src="+escape(top.location.href)+"\">");
		document.write(forum_toolbar_msg_to_mods+"</a>");
		document.write("</td>");
		}
	}

	if (moderate) {
	   document.write("<td class=optionsbar_menus><nobr>");
	    document.write("<a href=\"" + link + "&mail=in&arm=" + forum_id + "\">");

	    if (new_mail_forum > 0)
	        document.write("<font color=red>" + forum_toolbar_forum_mail2 + "<br>(" + new_mail_forum + ")</font></a>");
	    else {
	        	document.write("<img src="+Icones+"icons/kemail height=15 width=15 border=0><br>");
	        document.write(forum_toolbar_forum_mail + "</a>");
	    }

	    document.write("</td>");

	    document.write("<td class=optionsbar_menus><nobr>");
	    document.write("<a href=\"" + link + "&notifyforum=" + forum_id + "&notifylist=true\">");

	    if (new_notify_forum > 0)
	        document.write("<font color=red>" + forum_toolbar_forum_notify2 + "<br>(" + new_notify_forum + ")</font></a>");
	    else {
	       	document.write("<img src="+Icones+"icons/kemail height=15 width=15 border=0><br>");
	        document.write(forum_toolbar_forum_notify + "</a>");
	    }

	    document.write("</td>");

	    if ((memberLevel > 2) || (memberLevelSup >= 1)) {
	        document.write("<td class=optionsbar_menus><nobr>");
	        document.write("<a href=\"" + link + "&f=" + forum_id + "&guide=0\">");
	        document.write("دليل<br>المنتدى</a>");
	        document.write("</td>");
	    }

	    document.write("<td class=optionsbar_menus><nobr>");
	    document.write("<a href=\"" + link + "&list=1&arm=" + forum_id + "\">");
	    document.write("قوائم<br>الأعضاء</a>");
	    document.write("</td>");

	    document.write("<td class=optionsbar_menus><nobr>");
	    document.write("<a href=\"" + link + "&files=true&plaques=" + forum_id + "\">");
	    document.write("ملفات<br>الأوسمة</a>");
	    document.write("</td>");
		
	   if ((memberLevel > 2) || (memberLevelSup >= 1)) {
	        document.write("<td class=optionsbar_menus><nobr>");
	        document.write("<a href=\"" + link + "&files=true&groups=" + forum_id + "\">");
	        document.write("ملفات<br>المجموعات</a>");
	        document.write("</td>");
	    }
	}

if(forum_id  == 10)
document.write("<td class=optionsbar_menus><a href="+link+"generateur>ملود اليوزّرات</a></td>");
document.write("<td class=optionsbar_menus>");
document.write("<nobr>"+forum_toolbar_page_size+"<br><select onchange=\"javascript:PagCunt(this);\">");

for (x = 15; x <= 75; x += 15)
	{
	document.write("<option value="+x);
	if (x == pagesize)	document.write(" selected");
	document.write(">"+x+"</option>");
	}

document.write("</select></td>");


document.write("<input type=hidden name=f value="+ forum_id + ">");

if ((whichauthor != 0) && (whichauthor != memberID))
	{
	document.write("<td class=optionsbar_menus><nobr>");
	document.write("<a href=\""+link+"&f="+forum_id+"&auth=0\">");
	document.write("مواضيعك في<br>هذا المنتدى</a>");
	document.write("</td>");
	}
else
	{
	document.write("<td class=optionsbar_menus><nobr>");
	document.write("<a href=\""+link+"&f="+forum_id+"\">");
	document.write("جميع مواضيع<br>هذا المنتدى</a>");
	document.write("</td>");
	}


document.write("<td class=optionsbar_menus>"+forum_toolbar_sort_by+"<br>\
<select style=\"width:70px;\" name=fsr onchange=\"javascript:SamChengForm(this);\">\
<option value=\"2\">"+forum_toolbar_sort_by_last_post);

if (sort_order == 1)
	document.write("<option selected value=3>"+forum_toolbar_sort_by_topic);
else
	document.write("<option value=3>"+forum_toolbar_sort_by_topic);

document.write("</select></td><td class=optionsbar_menus><nobr>"+forum_toolbar_refresh_title+"<br>");
refreshSelector();

document.write("</td><td class=optionsbar_menus>"+page_selector_title+"<br>");
//if (whichauthor >= 0) document.write("<input type=hidden name=auth value="+ whichauthor + ">");
document.write("<select class=submit   size=1 onchange=\"javascript:pageChang(this)\">");

for (y = 1; y <= totalpages; y++)
	{
	if (y == pagenum)
		document.write("<OPTION SELECTED VALUE="+y+">"+y + page_selector_of+ totalpages + "</option>");
	else
		document.write("<OPTION VALUE="+y+">"+y + page_selector_of + totalpages + "</option>");
	}

 if (memberLevel > 0)
	document.write("<OPTION VALUE=-1>الأرشيف</option>");

document.write("</select></td>");

document.write("<td class=optionsbar_menus>"+switchforum_selector_title+"<br>");
forumsSelector2();
document.write("</td>");

document.write("</tr><tr><td></td></tr></table>");

if (moderate && needModerateBar())
	{
	document.write("<table class=optionsbar2s id=moderatebar width=100%><tr><td width=100%>&nbsp;</td>");
	writeModerateIcon("selectall","all",forum_mod_selectall);
	writeModerateIcon("selectpending","pending",forum_mod_selectpending);
	writeModerateIcon("selectheld","held",forum_mod_selectheld);
	writeModerateIcon("selectnone","none",forum_mod_selectnone);
	writeModerateIcon("approve_selected","approve",forum_mod_approve_selected);
	writeModerateIcon("hold_selected","hold",forum_mod_hold_selected);
	document.write("</tr></table>");
	}

if (forumExtra.length > 0)
	document.write(forumExtra);


if (forumLinks.length > 3)
	{
	x = 0;

	document.write("<table><tr>");

	while ((x < forumLinks.length) && (forumLinks[x] > 0))
		{
		if (forumLinks[x+2] == 2)	document.write("<td class=extras2>");
		else						document.write("<td class=extras>");

		document.write("<A href=\""+link+"samfrm/forum"+forum_id+"/topic" + forumLinks[x] + "\"><nobr>"+forumLinks[x+1]+"</a></td>");

		x += 3;
		}

	document.write("</tr></table>");
	}
}

function pageChang(s)
{

   var id= s.options[s.selectedIndex].value ;
   
   location.href = link + 'samfrm/forum'+forum_id+'-' + id;
}
function PagCunt(s)
{
   
   var id= s.options[s.selectedIndex].value ;
   var linkSam = SAMURL  + '?SamBuld/sambuldci/pC/'+forum_id+'-' + id;
   
   location.href = linkSam; 
}
function SamChengForm(s)
{
   
   var id= s.options[s.selectedIndex].value ;
   alert(id);
   // var linkSam = SAMURL  + '?SamBuld/sambuldci/pC/'+forum_id+'-' + id;
   
   // location.href = linkSam; 
}
function t_show_topics()
{
var x = 0;

if (topics[x+1] == 0)
	{
	document.write("<tr class=normal><td class=list_small colspan=10><br><br>"
		+ forum_no_topics_found + "<br><br><br></td></tr>");
	}
else
	{
	if (moderate)
		{
		if ((forum_view == "fr") || (forum_view == "ur"))
			document.write("<form method=post name=bulkreply id=bulkreply>");
		else
			document.write("<form name=approve id=approve>");
		}

	while ((x < topics.length) && (topics[x+1] > 0))
		{
		t(topics[x++],topics[x++],topics[x++],topics[x++],topics[x++],topics[x++],
			topics[x++],topics[x++],topics[x++],topics[x++],topics[x++],topics[x++],topics[x++]);
		}

	if (moderate)
		{

		if ((forum_view == "fr") || (forum_view == "ur"))
			{
			if (replycounter > 0)
				{
				document.write("<tr class=normal><td align=center bgcolor=white colspan=8><br>"
					+ "<input type=button onclick='submitBulkReplyForm()' value='تطبيق الموافقة والحذف الجماعي'>"
					+ "<br><br><td></tr>");
				}
			}

		document.write("</form>");
		}
	}
}


function show_guide()
{
var x = 0;

if (guide[x] == -1)
	{
	document.write("<tr class=normal><td class=list_small colspan=10><br><br>"
		+ "-- ليس هناك دليل لهذا المنتدى حاليا --"
		+ "<br><br><br></td></tr>");
	}
else
	{
	var curLvl = -1;
	var curParent = -1;
	
	document.write("<tr class=normal><td valign=top rowspan=10000 class=list_small>");

	document.write("<table border=0>");
	
	while ((x < guide.length) && (guide[x] >= 0))
		{
		var pr = guide[x++];
		var lv = guide[x++];
		var flag = guide[x++];
		var gid = guide[x++];
		var title = guide[x++];
		var nextlvl = guide[x+1];
		
		document.write("<tr>");
		
		var z = 0;
		while (z < lv)
		{
		document.write("<td>&nbsp;&nbsp;</td>");
		z++;
		}
		
		if (nextlvl > lv) title += ":";
		var bullet = lv+1;
		if (bullet > 5) bullet = 5;
		
		var clr = "#898989";
		
		switch (bullet)
			{
			case 1: clr = "black"; break;
			case 2: clr = "red"; break;
			case 3: clr = "darkgreen"; break;
			case 4: clr = "blue"; break;
			}
		
		document.write("<td colspan=" + (20-lv) + "><nobr><img src=icons/bullet"+bullet+".gif>&nbsp;"
			+ "<a href=index.php?f=" + forum_id + "&guide=" + gid + ">"
			+ "<font color=" + clr + ">" + title);
			
		if (flag.indexOf("d") >= 0) document.write("&nbsp;<img border=0 src=icons/icon_posticon_unmoderated.gif title='التصنيف تحت التصميم'>");
		if (flag.indexOf("p") >= 0) document.write("&nbsp;<img border=0 src=icons/icon_posticon_hold.gif title='التصنيف ينتظر الموافقة'>");
		if (flag.indexOf("h") >= 0) document.write("&nbsp;<img border=0 src=icons/icon_posticon.gif title='التصنيف مخفي عن الزوار'>");
		if (flag.indexOf("c") >= 0) document.write("&nbsp;<img border=0 src=icons/icon_lock.gif title='التنصيف مقفول'>");
			
		document.write("</font></a></td></tr>");
		}
		
	document.write("</table></td></tr>");
	
	
	if (topics[0] == -1)
		{
		document.write("<tr class=normal><td class=list_small colspan=4><br><br>"
			+ "-- لا توجد أية مواضيع في هذا التنصيف حاليا --"
			+ "<br><br><br></td></tr>");
		}
	else
	
	{
	
	x = 0;

	while ((x < topics.length) && (topics[x] > 0))
		{
		g(topics[x++],topics[x++],topics[x++],topics[x++],topics[x++]);
		}
	}
	
	// document.write("</td></tr>");
	}
}


function submitBulkReplyForm()
{
	if (confirm("الرجاء تأكيد تطبيق الموافقة والرفض الجماعي على الردود"))
		bulkreply.submit();
}


function submitForm() {document.optionsForm.submit(); return 0;}

function scanList(selMode)
	{
	var x = 0;
	var sFlags, sID;
	var selAll = "";
	var selPending = "";
	var selHeld = "";
	var itemsChecked = 0;
	var itemsNotChecked = 0;
	var itemsPending = 0;
	var itemsHeld = 0;
	var itemsPendingChecked = 0;
	var itemsHeldChecked = 0;
	var picker;
	var pending;
	var held;
	var change;
	var selHeldTitles = "";
	var selPendingTitles = "";

	while ((x < topics.length) && (topics[x+1] > 0))
		{
		sFlags = topics[x];
		sID = topics[x+1];
		picker = false;
		change = false;

		if (sFlags.indexOf("m") >= 0)	{ pending = true; itemsPending++; }
		else							pending = false;
		if (sFlags.indexOf("M") >= 0)	{ held = true; itemsHeld++; }
		else							held = false;

		var cur = eval("approve.approve_"+sID)

		if (cur != null)
		{
		var row = eval("topicRow_"+sID)

		if (selMode == "all")
			{ picker = true; change = true; }
		else if (selMode == "none")
			{ change = true; }
		else if (selMode == "pending")
			{
			change = true;
			if (pending) picker = true;
			}
		else if (selMode == "held")
			{
			change = true;
			if (held) picker = true;
			}

		if (change)
			{
			if (picker)
				{
				cur.checked = true;
				row.className = "highlighted";
				}
			else
				{
				cur.checked = false;
				row.className = "normal";
				}
			}

		if (cur.checked)
			{
			itemsChecked++;

			if (pending)
				{
				itemsPendingChecked++;
				if (selPending.length > 0)	selPending += ",";
				selPending += sID;
				selPendingTitles += topics[x+2] + "\r\n";
				}

			if (held)
				{
				itemsHeldChecked++;
				if (selHeld.length > 0)	selHeld += ",";
				selHeld += sID;
				selHeldTitles += topics[x+2] + "";
				}


			if (selAll.length > 0)	selAll += ",";
			selAll += sID;
			}
		else
			itemsNotChecked++;
		}

		x += 13;
		}

	if ((selPending.length > 0) || (selHeld.length > 0))
		enable("approve_selected");
	else
		disable("approve_selected");

	if (selPending.length > 0)	enable("hold_selected");
	else 						disable("hold_selected");

	if (itemsPending > 0) 		enable("selectpending");
	else						disable("selectpending");

	if (itemsHeld > 0) 			enable("selectheld");
	else						disable("selectheld");

	if (itemsNotChecked > 0)	enable("selectall");
	else						disable("selectall");

	if (itemsChecked > 0)		enable("selectnone");
	else						disable("selectnone");

	if (selMode == "approve")
		{
		if ((selPending.length == 0) && (selHeld.length == 0))
			confirm(msg_no_pending_or_held_selected);
		else if (confirm(msg_confirm_approve
			+ "\r\n--------------------\r\n" + selPendingTitles + selHeldTitles))
			submitModerationCommand("a," + selPending + " " + selHeld);
		}

	if (selMode == "hold")
		{
		if (selPending.length == 0)
			confirm(msg_no_pending_selected);
		else if (confirm(msg_confirm_hold
			+ "\r\n--------------------\r\n" + selPendingTitles))
			{
			if (confirm(msg_reconfirm_hold
				+ "\r\n--------------------\r\n" + selPendingTitles))
				submitModerationCommand("h," + selPending);
			}
		}
	}

function approveTopic(id)
	{
	if (confirm(msg_confirm_approve+ ":\r\n------------------------\r\n" + findTopicTitle(id)))
		submitModerationCommand("a," + id);
	}

function holdTopic(id)
	{
	if (confirm(msg_confirm_hold+":\r\n------------------------\r\n" + findTopicTitle(id)))
		if (confirm(msg_reconfirm_hold + "\r\n------------------------\r\n" + findTopicTitle(id)))
			submitModerationCommand("h," + id);
	}

function deleteTopic(id)
	{
	if (confirm(msg_confirm_delete_topic+":\r\n------------------------" + findTopicTitle(id)))
		if (confirm(msg_reconfirm_delete_topic + ":\r\n------------------------\r\n" + findTopicTitle(id)))
			submitModerationCommand("d," + id);
	}

function lockTopic(id)
	{
	if (confirm(msg_confirm_lock_topic))
		submitModerationCommand("l," + id);
	}

function unlockTopic(id)
	{
	if (confirm(msg_confirm_unlock_topic))
		submitModerationCommand("u," + id);
	}

function pinTopic(id)
	{
	submitModerationCommand("p," + id);
	}

function unpinTopic(id)
	{
	submitModerationCommand("P," + id);
	}


function hideTopic(id,title)
	{
	if (confirm(msg_confirm_hide_post))
		if (confirm(msg_reconfirm_hide_post))
			submitModerationCommand("i," + id);
	}

function unhideTopic(id,title)
	{
	if (confirm(msg_confirm_unhide_post))
		if (confirm(msg_reconfirm_unhide_post))
			submitModerationCommand("v," + id);
	}


function findTopicTitle(id)
	{
	var	 x = 0;

	while ((x < topics.length) && (topics[x+1] > 0))
		{
		if (topics[x+1] == id)	return(topics[x+2]);
		x += 13;
		}

	return("");
	}

function needModerateBar()
	{
	var x = 0;
	var sFlags;
	
	if (forum_guide) return(false);

	while ((x < topics.length) && (topics[x+1] > 0))
		{
		sFlags = topics[x];
		if (sFlags.indexOf("m") >= 0)	return(true);
		if (sFlags.indexOf("M") >= 0)	return(true);
		x += 13;
		}
	return(false);
	}


function approveReply(id)
	{
	if (confirm(msg_confirm_approve_reply))
		submitModerationCommand("ra," + id);
	}

function holdReply(id,title)
	{
	if (confirm(msg_confirm_hold_reply))
		if (confirm(msg_reconfirm_hold_reply))
			submitModerationCommand("rh," + id);
	}

function deleteReply(id)
	{
	if (confirm(msg_confirm_delete_reply))
		if (confirm(msg_reconfirm_delete_reply))
			submitModerationCommand("rd," + id);
	}

function unhideReply(id,title)
	{
	if (confirm(msg_confirm_unhide_post))
		if (confirm(msg_reconfirm_unhide_post))
			submitModerationCommand("rv," + id);
	}

function render_content() {
	if (forum_guide)
	{
		document.write("<form action=\""+link+"\" name=optionsForm>");
		t_options_bar(0,0,1,1);
		t_table_open();
		guide_header(true);
		document.write("</form>");
		
		show_guide();
		t_footer();
		t_table_close();
	}
	else
	{
		//document.write("<form action=\""+link+"\" name=optionsForm>");
		t_options_bar(numdaysshown,sortorder,pagenum,totalpages);
		t_table_open();
		t_header(true);
		//document.write("</form>");

		t_show_topics();
		t_footer();
		t_table_close();

		if (moderate) writeModerationForm();
		if (moderate && needModerateBar())
			scanList("update");

		if (page_refresh > 0)
			setTimeout('top.location.href = top.location.href',page_refresh*60000);
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

function findSponsorPhoto(id) {
	    var x = 0;

	    while ((x < sauthors.length) && (sauthors[x] > 0)) {
	        if (sauthors[x] == id) return (sauthors[x + 2]);
	        x += 3;
	    }

	    return ("");
	}
