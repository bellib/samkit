var Topic_new = -1;
var Topic_hot = -1;
var Topic_locked = -1;
var Topic_arch = -1;
var Topic_fixed = -1;
var Topic_moderate = -1;
var Topic_deleted = -1;
var Topic_hidden = -1;
var Topic_survey = -1;

var splitIndex = 0;
var splitArray = new Array();

function splits(string,text) {
    var strLength = string.length, txtLength = text.length;
    if ((strLength == 0) || (txtLength == 0)) return;

    var i = string.indexOf(text);
    if ((!i) && (text != string.substring(0,txtLength))) return;
    if (i == -1) {
        splitArray[splitIndex++] = string;
        return;
    }

    splitArray[splitIndex++] = string.substring(0,i);

    if (i+txtLength < strLength)
        splits(string.substring(i+txtLength,strLength),text);

    return;
}

// write table start for forum topics table

function t_table_open()
{
document.write("<table dir="+dir+" border=0 width=100% cellspacing=0 cellpadding=0 align=center class=grid>\r\n\
<tr><td>\r\n\
<table dir="+dir+" border=0 width=100% cellspacing=1 cellpadding=4>\r\n");
}

// write table end for forum topics table

function t_table_close()
{
document.write("</table></td></tr></table>");
}

// write header for forum topics table

function t_header()
{
}

// write footer for forum topics table

function t_footer()
{
}

var replyCounter = 0;
function SamGeturls(str)
{
 
 return str;
}
 
function t(flags,id,aid,adate,replies,reads,editedby,lmsg)
{
var cl = "normal";

var awards = 0;
var isonline = 0;
var days = 0;
var stars = 0;
var posts = 0;
var country = "";
var title = "";
var photo = "";
var sig = "";
var author = "";
var Tlevel = 1;
var plaque = "";
var gender = 0;

var x = findMemberDetails(aid);


if (x >= 0)
	{
	x++;
	author = authors[x++];
	Tlevel = authors[x++];
	awards = authors[x++];
	isonline = authors[x++];
	days = authors[x++];
	stars = authors[x++];
	posts = authors[x++];
	country = authors[x++];
	title = authors[x++];
	photo = authors[x++];
	plaque = authors[x++];
	gender = authors[x++];
	sig = findMemberSignature(aid);
	sig = sig.replace(/<img/i,"<img onError=\"this.src='"+Icones+"icons/kblank';this.height=0;this.width=0;\"");
	}


var Tnew = flags.indexOf("n");
var Thot = flags.indexOf("h");
var Tarch = flags.indexOf("a");
var Tfixed = flags.indexOf("f");
var Tmoderate = flags.indexOf("m");
var Theld = flags.indexOf("M");
var Tdeleted = flags.indexOf("d");
var Thidden = flags.indexOf("i");
var Tistopic = flags.indexOf("t");
var Tsurvey = flags.indexOf("v");
var Tsingle = flags.indexOf("s");
var Thasnotes = flags.indexOf("o");
var Tblocked = flags.indexOf("b");
var bgcolor1 = "#dddddd";
var bgcolor2 = "#dddddd";


if (pagenum == 1) {
    if ((Tistopic < 0) && (replyCounter == 0)) {
        if (adLink3.length > 0) {
            document.write("<tr bgcolor=transparent><td colspan=100>");
            document.write("<table width=100%><tr><td align=center>" + adLink3 + "</td></tr></table>");
            document.write("</td></tr>");
        }
    }
}
else if (pagenum > 1) {
    if (replyCounter == 1) {
        if (adLink3.length > 0) {
            document.write("<tr bgcolor=transparent><td colspan=100>");
            document.write("<table width=100%><tr><td align=center>" + adLink3 + "</td></tr></table>");
            document.write("</td></tr>");
        }
    }
}


if ((Tdeleted >= 0) || (Theld >= 0))
	{ bgcolor1 = "#ffdddd"; bgcolor2 = "#ffdddd"; }
else if (Thidden >= 0)
	{ bgcolor1 = "#aadddd"; bgcolor2 = "#aadddd"; }
else if (Tmoderate >= 0)
	{ bgcolor1 = "#ddddff"; bgcolor2 = "#ddddff"; }
else if (Tistopic >= 0)
	{ bgcolor1 = "#ffffff"; bgcolor2 = "#ffffff"; }
else if ((replyCounter++ % 2) == 1)
	{ bgcolor1 = "#ffffdd"; bgcolor2 = "#ffffdd"; }

if (aid == 0)	aid = memberID;
if (aid == memberID) author = memberName;
var topicowner = (aid == memberID);

if ((Topic_hidden < 0) && (aid != memberID) && ((forum_id == 24) || (forum_id == 25) || (forum_id == 46) || (forum_id == 49) || (forum_id == 106) || (forum_id >= 1000)))
{
bgcolor1 = " bgcolor=" + bgcolor1 + " background=bgid.aspx?n=" + memberID + "&c="+bgcolor1.substring(1,7);
bgcolor2 = " bgcolor=" + bgcolor2 + " background=bgid.aspx?n=" + memberID + "&c="+bgcolor2.substring(1,7);
}
else
{
bgcolor1 =  " bgcolor=" + bgcolor1;
bgcolor2 =  " bgcolor=" + bgcolor2;
}

if (Tsingle >= 0)
{
document.write("<tr><td bgcolor=red align=center valign=top colspan=10>\n\
<a href=\""+link+"samfrm/forum"+forum_id+"/topic"+topicID+"\"><b><font color=white>"
+topic_showing_single_reply+"</a></b></td></tr>\n");
}

if (memberreplies > 0)
{
document.write("<tr><td bgcolor=red align=center valign=top colspan=10>\n\
<a href=\""+link+"&t="+topicID+"\"><b><font color=white>"
+topic_showing_member_replies+"</a></b></td></tr>\n");
}

document.write("<tr><td "+bgcolor1+" valign=top>");

if (aid == 2)
	{
	document.write("<table width=95% class=optionsbar><tr><td class=optionsbar_title>");
	document.write("<a href=\""+link+"&member="+aid+"\"><nobr><b><font color=white>"+author+"</a></b><nobr><br>");

	document.write("</td></tr></table>");

	}
else
{
	document.write("<a href=\""+link+"samusr/us"+aid+"\"><b>"+author+"</a></b><br>");


//if (displayMode == 2)
//{
//	plaque = "";
//	photo = "";
//	stars = 0;
//}


if (memberID > 0)
{
if (posts >= 0)	document.write("<font size=-1><small>"+topic_posts+" "+posts+"</small><br>");
if (awards > 0)	document.write("<font size=-1 color=red><small>نقاط التميز: "+awards+"</small></font><br>");

// if (!isarchive)
{
if (stars > 0)
	{
	var icon = "<img src="+Icones+"icons/kstar_green>";

	if (stars >= 100)
	{
		icon = "<img src="+Icones+"icons/kstar_bronze>";
		stars -= 100;
	}
	else if (Tlevel == 2)
		icon = "<img src="+Icones+"icons/kstar_red>";
	else if (Tlevel == 3)
		icon = "<img src="+Icones+"icons/kstar_blue>";

	for (x = 0; x < stars; x ++)
		{
		if (x == 5)	document.write("<br>");
		document.write(icon);
		}

	document.write("<br>");
	}

if ((title.length == 0) || (Tlevel > 2))
	{
	if (gender == 2)
		{
		if (Tlevel == 2) 		title = title_modF + "<br>" + title;
		else if (Tlevel == 3) title =  '<font color=blue>عضو إدارة المنتديات</font>';
		else if (Tlevel == 4) title = title_supF + "<br>" + title;
		else if (stars > 5) title = leveltitlesF[5] + "<br>" + title;
		else title = leveltitlesF[stars] + "<br>" + title;
		}
	else
		{
		    if (Tlevel == 2) title = title_mod + "<br>" + title;
		    else if (Tlevel == 3) title =  '<font color=blue>عضو إدارة المنتديات</font>';
		    else if (Tlevel == 4) title = title_sup + "<br>" + title;
		    else if (stars > 5) title = leveltitles[5] + "<br>" + title;
		    else title = leveltitles[stars] + "<br>" + title;
		}
	}
else if (plaque == "")
	{
	if (title == "@1@")
		title = "<img src='lib/plaque1.gif'><br>";
	else if (title == "@sp@")
		title = "<img src='lib/plaquesp.gif'><br>";
	else if (title.indexOf("@@") == 0)
		title = "<img src='lib/plaque"+title.slice(2)+".gif'><br>";
	}
}


var hideit = false;
var origdeleted = false;
if (Tdeleted >= 0)	hideit = false;
if (Thidden >= 0)	hideit = false;

if ((Topic_deleted >= 0) || (Topic_hidden >= 0) || (memberLevel < 2))
	hideit = false;

if ((Tdeleted >= 0) && (lmsg == "*") )
	{
	lmsg =	"<table width=100% class=optionsbar><tr><td class=optionsbar_menus>"+topic_notice_deleted2+"</td></tr></table>";
	hideit = true;
	origdeleted = true;
	}

if (hideit)	document.write("<span style=\"display:none;\" id=cell2_"+ id +">");
else		document.write("<span id=cell2_"+ id +">");

if ((title.length > 0) && (gender == 2))
	title = "<font color=purple>" + title;

if (plaque.length > 0)
{
	if (plaque.charAt(0) == "#")
		{
		if (gender == 2)
			title += "<br><br><table bgcolor=gray width=100 cellpadding=3 cellspacing=0 border=0><tr><td align=center><font size=-2 color=yellow>آخر وسام للعضوة:</font><br><font size=-2 color=white>"
			+ plaque.substring(1) + "</font></td></tr></table><br>";
		else
			title += "<br><br><table bgcolor=gray width=100 cellpadding=3 cellspacing=0 border=0><tr><td align=center><font size=-2 color=yellow>آخر وسام للعضو:</font><br><font size=-2 color=white>"
			+ plaque.substring(1) + "</font></td></tr></table><br>";
		}
	else
		title += "<br><img src='"+fileURL+"icon.aspx?p=" + plaque + "'><br>";
}


if (title.length > 0)
	document.write("<font size=-1><small>"+ title +"</small></font><br>");

if (photo.length > 0)
{
	if (photo.indexOf("user.aspx") == 0)	photo = fileURL + photo;

	document.write("<img width=100 src='" + photo + "' onError=\"this.src='"+Icones+"icons/kblank';this.width=0;\"><br>");
}
else
	document.write("<br>");


if (country.length > 0)	document.write("<font size=-1><small>"+country+"</small></font><br>");
if (posts >= 0)
{
if (days > 0)
{
document.write("<nobr><font size=-1><small>عدد الأيام منذ الإنضمام: " + days + "</small></font><br>");
var avg = round(posts/days,2);
document.write("<nobr><font size=-1><small>معدل المشاركات في اليوم: " + avg + "</small></font><br>");
}

if ((isonline > 0) && (aid != memberID))
	document.write("<table><tr><td class=optionsbar_menus2 valign=middle><img src='"+Icones+"icons/konline' title='متصل الآن'>&nbsp;"
		+ "<br><font size=-2>متصل الآن</font></td></tr></table>");
}
}
}

if (Tblocked >= 0)
	lmsg = "<table width=100% class=optionsbar><tr><td class=optionsbar_menus><font color=red>** مشاركات هذه العضوية مخفية بواسطة الإدارة **</td></tr></table>" + lmsg;

document.write("</span>");

document.write("</td><td "+bgcolor2+" colspan=3 width=100% valign=top>");

document.write("<table cellspacing=0 cellpadding=0 width=100%><tr><td class=posticon bgcolor=red>");
document.write("<table cellspacing=2 width=100%><tr><td class=posticon><nobr>\n");

// document.write("<img src="+Icones+"icons/kposticon border=0>\n");
document.write(formatDate(adate));

document.write("</td><td class=posticon><nobr><a href=\""+link+"&member=" + aid + "\"><img src="+Icones+"icons/kprofile height=15 width=15 title=\""+tip_member_info+"\" border=0 align=absmiddle></a>");

if ((Tdeleted < 0) || (memberLevel > 2) || (moderate))
{
if (isarchive)
    {
    if (memberLevel > 1)
    {
        if ((memberLevel > 2) || (memberLevelSup >= 1))
            document.write("&nbsp;<a href='f.aspx?svc=guides&addtopic=" + id + "'><img src=\""+Icones+"icons/kguide\" title=\"ربط الموضوع بدليل المنتدى\" border=\"0\" hspace=\"0\"></a>");

        if ((memberLevel > 2) || (memberLevelSup == 1))
        {
        if (Tistopic >= 0)
            {
            if (Tdeleted < 0)
        	    document.write("</td><td class=posticon><nobr><img border=0 src="+Icones+"icons/kdelete_reply title=\""+tip_delete_topic+"\" onclick=\"javascript:deleteTopic(" + id + ")\">");

         //   else
         //   	document.write("</td><td class=posticon><nobr><img border=0 src="+Icones+"icons/kdelete_reply title=\""+tip_undelete_topic+"\" onclick=\"javascript:undeleteTopic(" + id + ")\">");
            }
         else
         {
            if (Tdeleted < 0)
            	document.write("</td><td class=posticon><nobr><img border=0 src="+Icones+"icons/kdelete_reply title=\""+tip_delete_reply+"\" onclick=\"javascript:deleteReply(" + id + ")\">");
         //   else if (!origdeleted)
         //   	document.write("</td><td class=posticon><nobr><a href=\"javascript:undeleteReply(" + id + ")\"><img border=0 src="+Icones+"icons/kdelete_reply title=\""+tip_undelete_reply+"\"></a>");
         }
      }
    }
    }

if (!isarchive)
{
if (Tistopic >= 0)
{
if ((aid == memberID) || (moderate))
	document.write("</td><td class=posticon><nobr><a href=\""+link+"Samedit/edittopic/topic"+id+"-"+memberQID+"-"+Samsrc+"\"><img src=\""+Icones+"icons/kpencil\" title=\""+tip_edit_text+"\" border=\"0\" hspace=\"0\"></a>\r\n");

if (moderate)
	document.write("</td><td class=posticon><nobr><a href=\""+link+"sameditinfo/topic"+id+" \"><img src=\""+Icones+"icons/kfolder_archive\" title=\""+tip_topic_properties+"\" border=\"0\" hspace=\"0\"></a>\r\n");

if ((topicLocked == false) || (moderate))
{
	document.write("</td><td class=posticon><nobr><a href=\""+link+"&edit=newreply&qt=-"+topicID+"&t="+topicID+"&src="+escape(top.location.href)+"\"><img src="+Icones+"icons/kreply_topic title=\""+tip_reply_with_quote+"\" border=0></a>");

document.write("</td><td class=posticon><nobr><img src="+Icones+"icons/kgo_down title=\"أضف رد سريع بإقتباس لهذا الموضوع\" border=0 onclick=\"javascript:fillQuick("+id+");\">");
}

if (memberLevel > 0)
	document.write("</td><td class=posticon><nobr><a href=\""+link+"&sendmsg="+aid+"&qt=-"+topicID+"&src="+escape(top.location.href)+"\"><img src="+Icones+"icons/kemail title=\""+tip_mail_member+"\" border=0 align=absmiddle></a>");

if (moderate) {
    document.write("</td><td class=posticon><nobr><a href=\"" + link + "&sendmsg=" + aid + "&qt=-" + topicID + "&arm=" + forum_id + "&src=" + escape(top.location.href) + "\"><img src='"+Icones+"icons/kemail_red' title=\"" + tip_mail_member_from_mod + "\" border=0 align=absmiddle></a>");

    document.write("</td><td class=posticon><nobr><a href=\"" + link + "&svc=tstats&tstat=" + id + "\"><img src='"+Icones+"icons/kstats' title=\"" + tip_topic_stats + "\" border=0 align=absmiddle></a>");

    if (Tdeleted < 0)
        document.write("</td><td class=posticon><nobr><img border=0 src='"+Icones+"icons/kdelete_reply' title=\"" + tip_delete_topic + "\" onclick=\"javascript:deleteTopic(" + id + ")\">");
    else
        document.write("</td><td class=posticon><nobr><img border=0 src='"+Icones+"icons/kdelete_reply' title=\"" + tip_undelete_topic + "\" onclick=\"javascript:undeleteTopic(" + id + ")\">");

    if (topicLocked == false)
        document.write("</td><td class=posticon><nobr><img src=\""+Icones+"icons/klock\" title=\"" + tip_lock_topic + "\" border=0 onclick='javascript:lockTopic(" + id + ")'>\r\n");
    else
        document.write("</td><td class=posticon><nobr><img src=\""+Icones+"icons/kunlock\" title=\"" + tip_unlock_topic + "\" border=0 onclick='javascript:unlockTopic(" + id + ")'></a>\r\n");

    if ((Tmoderate >= 0) || (Theld >= 0))
        document.write("</td><td class=posticon><nobr>"
		+ "<img src=\""+Icones+"icons/kfolder_moderate\" title=\"" + tip_approve_topic + "\" border=0 onclick='javascript:approveTopic(" + id + ")'>");

    if (Tmoderate >= 0)
        document.write("</td><td class=posticon><nobr>"
	 + "<img src=\""+Icones+"icons/kposticon_hold\" title=\"" + tip_hold_topic + "\" border=0 onclick='javascript:holdTopic(" + id + ")'>");

    if (Thidden < 0) {
        if ((memberLevel > 2) || (memberLevelSup >= 1))
            document.write("</td><td class=posticon><nobr><a href='f.aspx?svc=guides&addtopic=" + topicID + "'>"
	 + "<img src=\""+Icones+"icons/kguide\" title=\"أضف الموضوع لدليل المنتدى\" border=0></a>");
    }

    if (Thidden >= 0)
        document.write("</td><td class=posticon><nobr><a href='f.aspx?svc=prv&prvt=" + topicID + "&prvtf=" + forum_id + "'>"
	 + "<img src=\""+Icones+"icons/kgroup\" border=0 title=\"" + tip_privatetopics + "\"></a>");

    if (Thidden >= 0)
        document.write("</td><td class=posticon><nobr>"
	 + "<img src=\""+Icones+"icons/kposticon\" title=\"" + tip_unhide_post + "\" border=0 onclick='javascript:unhideTopic(" + id + ")'>");

    document.write("</td><td class=posticon><nobr><a href='f.aspx?svc=edits&tid=" + topicID + "'>"
	 + "<img src=\""+Icones+"icons/ksmile_question\" title=\"سجل التغييرات على المشاركة\" border=0></a>");

    document.write("</td><td class=posticon><nobr><a href='f.aspx?t=" + topicID + "&pg=" + pagenum + "&hl=l'>"
	 + "<img src=\""+Icones+"icons/kurl\" title=\"توضيح الوصلات في المشاركات\" border=0></a>");

    if (Tlevel == 1)
        document.write("</td><td class=posticon><nobr><a href='f.aspx?requestmon=" + aid + "&tid=" + topicID + "'>"
	 + "<img src=\""+Icones+"icons/kedit_moderator\" border=0></a>");

    if (Tlevel == 2) {
        if ((memberLevel > 2) || (memberLevelSup == 1))
            document.write("</td><td class=posticon><nobr><a href='f.aspx?requestmon=" + aid + "&tid=" + topicID + "'>"
	 + "<img src=\""+Icones+"icons/kedit_moderator\" border=0></a>");
    }

    if ((memberLevel > 2) || (memberLevelSup == 1))
        document.write("</td><td class=posticon><nobr><a href='f.aspx?whois=t" + topicID + "'>"
	 + "IP</a>");
}

if ((memberLevel > 1) && (!isarchive) && (Tdeleted < 0) && (Thidden < 0))
	document.write("</td><td class=posticon><nobr>"
	 + "<img src=\""+Icones+"icons/kposticon_unmoderated\" title=\""+tip_hide_post+"\" border=0 onclick='javascript:hideTopic(" + id + ")'>");
}
else
{
if ((aid == memberID) || (moderate))
	document.write("</td><td class=posticon><nobr><a href=\""+link+"samedit/editreply/rep"+id+"-"+memberQID+"-"+Samsrc+"\"><img src=\""+Icones+"icons/kpencil\" title=\""+tip_edit_text+"\" border=0></a>\r\n");

if ((topicLocked == false) || (moderate))
{
	document.write("</td><td class=posticon><nobr><a href=\""+link+"samedit/qt/rep"+id+"-" + topicID + "-"+memberQID+"-"+Samsrc+"\"><img src="+Icones+"icons/kreply_topic title=\""+tip_reply_with_quote+"\" border=0></a>");

document.write("</td><td class=posticon><nobr><img src="+Icones+"icons/kgo_down title=\"أضف رد سريع بإقتباس لهذا الرد\" border=0 onclick=\"javascript:fillQuick("+id+");\">");
}

if (memberLevel > 0)
	document.write("</td><td class=posticon><nobr><a href=\""+link+"&sendmsg="+aid+"&qt="+id+"&src="+escape(top.location.href)+"\"><img src="+Icones+"icons/kemail title=\""+tip_mail_member+"\" border=0 align=absmiddle></a>");

if (moderate)
{
document.write("</td><td class=posticon><nobr><a href=\""+link+"&sendmsg="+aid+"&arm="+forum_id+"&qt="+id+"&src="+escape(top.location.href)+"\"><img src="+Icones+"icons/kemail_red title=\""+tip_mail_member_from_mod+"\" border=0 align=absmiddle></a>");

if (Tdeleted < 0)
	document.write("</td><td class=posticon><nobr><img border=0 src="+Icones+"icons/kdelete_reply title=\""+tip_delete_reply+"\" onclick=\"javascript:deleteReply(" + id + ")\">");
else if (!origdeleted)
	document.write("</td><td class=posticon><nobr><img border=0 src="+Icones+"icons/kdelete_reply title=\""+tip_undelete_reply+"\" onclick=\"javascript:undeleteReply(" + id + ")\">");

if (Tdeleted < 0)
{
if ((Tmoderate >= 0) || (Theld >= 0))
	document.write("</td><td class=posticon><nobr>"
		+ "<img src=\""+Icones+"icons/kfolder_moderate\" title=\""+tip_approve_reply+"\" border=0 onclick='javascript:approveReply(" + id + ")'>");

if (Tmoderate >= 0)
	document.write("</td><td class=posticon><nobr><a href='javascript:holdReply(" + id + ")'>"
	 + "<img src=\""+Icones+"icons/kposticon_hold\" title=\""+tip_hold_reply+"\" border=0></a>");

if (Thidden >= 0)
	document.write("</td><td class=posticon><nobr>"
	 + "<img src=\""+Icones+"icons/kposticon\" title=\""+tip_unhide_post+"\" border=0 onclick='javascript:unhideReply(" + id + ")'>");
}

document.write("</td><td class=posticon><nobr><a href='f.aspx?svc=edits&tid="+topicID+"&rid="+id+"'>"
	 + "<img src=\""+Icones+"icons/ksmile_question\" border=0></a>");

document.write("</td><td class=posticon><nobr><a href='f.aspx?t="+topicID+"&r="+id+"&hl=l'>"
	 + "<img src=\""+Icones+"icons/kurl\" title=\"توضيح الوصلات في المشاركة\" border=0></a>");

if (Tlevel == 1)
document.write("</td><td class=posticon><nobr><a href='f.aspx?requestmon="+aid+"&tid="+topicID+"&rid="+id+"'>"
	 + "<img src=\""+Icones+"icons/kedit_moderator\" border=0></a>");

if (Tlevel == 2) {
    if ((memberLevel > 2) || (memberLevelSup == 1))
        document.write("</td><td class=posticon><nobr><a href='f.aspx?requestmon=" + aid + "&tid=" + topicID + "&rid=" + id + "'>"
	 + "<img src=\""+Icones+"icons/kedit_moderator\" border=0></a>");
}

if ((memberLevel > 2) || (memberLevelSup == 1))
document.write("</td><td class=posticon><nobr><a href='f.aspx?whois=r"+id+"'>"
	 + "IP</a>");
}
else if (aid == memberID)
	document.write("</td><td class=posticon><nobr><img border=0 src="+Icones+"icons/kdelete_reply title=\""+tip_delete_reply+"\" onclick=\"javascript:deleteReplyByAuthor(" + id + ")\">");

if ((memberLevel > 1) && (!isarchive) && (Tdeleted < 0) && (Thidden < 0))
	document.write("</td><td class=posticon><nobr>"
	 + "<img src=\""+Icones+"icons/kposticon_unmoderated\" title=\""+tip_hide_post+"\" border=0 onclick='javascript:hideReply(" + id + ")'>");
}
}
}



var rid = id;

if (Tistopic >= 0)	rid = 0;

if ((memberID > 0) && (!isarchive) && (aid != memberID))
	document.write("</td><td class=posticon><nobr><a href=\""+link+"&notify="+aid+"&ntopic="+topicID+"&nreply="+rid+"&src="+escape(top.location.href)+"\"><img src="+Icones+"icons/kip title=\""+tip_notify+"\" border=0></a>");


if ((memberLevel > 0) && (Tistopic < 0))
{
if (Tsingle < 0)
document.write("</td><td class=posticon><nobr><a href='f.aspx?t="+topicID+"&r="+id+"'>"
	 + "<img src=\""+Icones+"icons/ksingle\" title=\"هذا الرد فقط\" border=0></a>");

if (memberreplies <= 0)
	document.write("</td><td class=posticon><nobr><a href='f.aspx?t="+topicID+"&m="+aid+"'>"
		 + "<img src=\""+Icones+"icons/kgroup\" title=\"ردود هذا العضو فقط\" border=0></a>");
}

document.write("</td><td width=90% class=posticon>&nbsp;</td>");


if ((Tdeleted < 0) && (memberLevel > 1))
	{
	document.write("<td class=posticon><nobr>");
	document.write("<img width=10 height=10 src="+Icones+"icons/kgroup title=\""+topic_tooltips_select_user+"\" border=0 onclick='select_user_posts("+aid+");'>");
	document.write("</td>");

	if (Tistopic < 0)
		{
		document.write("<td class=posticon><nobr>");
		document.write("<INPUT type=checkbox class=small name=check_"+id+" onclick='select("+id+");'>");
		document.write("</td><td class=posticon>&nbsp;</td>");
		}
	}

if ((Tistopic >= 0) && (Thidden < 0) && (Tdeleted < 0) && (forum_id < 1000)
           /* && (forum_id != 23)
            && (forum_id != 24)
            && (forum_id != 25)
            && (forum_id != 28)
            && (forum_id != 39)
            && (forum_id != 46)
            && (forum_id != 49)
            && (forum_id != 54)
            && (forum_id != 67)*/
       )  {
    var twtitle = main_site_title + ": " + topictitle;
    var twtag = "#kooora";
    var url = "http://forum.kooora.com/f.aspx?t=";

    if (siteID != 2) {
        twtag = "#startimes";
        url = "http://www.startimes.com/f.aspx?t=";
    } 
        /* LICK    */
	  /*  document.write("<td class=posticon><nobr>"
     + "<img width=10 height=10 src="+Icones+"icons/ikas title=\"المعجبون\" border=0>"
     + "</td><td class=posticon>102 \r\n"
     + "</td>");*/

	}

// post view contract/expand
if (memberLevel > 1)
	{
	if (hideit)
		document.write("<td name='cell_expand_"+id+"' id='cell_expand_"+id+"' style='display:block;' class=posticon><nobr>");
	else
		document.write("<td name='cell_expand_"+id+"' id='cell_expand_"+id+"' style='display:none;' class=posticon><nobr>");

	document.write("<img width=10 height=10 src="+Icones+"icons/kexpand title=\""+topic_tooltips_expand+"\" border=0 onclick='expand("+id+");'>");

	if (hideit)
		document.write("</td><td name='cell_contract_"+id+"' id='cell_contract_"+id+"' style='display:none;' class=posticon><nobr>");
	else
		document.write("</td><td name='cell_contract_"+id+"' id='cell_contract_"+id+"' style='display:block;' class=posticon><nobr>");

	document.write("<img width=10 height=10 src="+Icones+"icons/kcontract title=\""+topic_tooltips_contract+"\" border=0 onclick='contract("+id+");'>");
	document.write("</td>");
	}

document.write("</tr></table></td></tr></table>");
// document.write("</tr><tr><td align=center colspan=99><img src="+Icones+"icons/khorzbar height=1 width=100%></td></tr></table><hr noshade size=1>");

if (Tdeleted >= 0)
	{
	//if (memberID == aid)
		document.write("<table width=100% class=optionsbar><tr><td class=optionsbar_menus>"+topic_notice_deleted+"</td></tr></table>");
	}
else if (Thidden >= 0)
	document.write("<table width=100% class=optionsbar><tr><td class=optionsbar_menus>"+topic_notice_hidden+"</td></tr></table>");
else if (Theld >= 0)
	document.write("<table width=100% class=optionsbar><tr><td class=optionsbar_menus2>"+topic_notice_held+"</td></tr></table>");
else if (Tmoderate >= 0)
	document.write("<table width=100% class=optionsbar><tr><td class=optionsbar_menus2>"+topic_notice_unapproved+"</td></tr></table>");


lmsg = "<span id=\"bubbleAd\">" + lmsg.replace(/<img/i, "<img onError=\"this.src='"+Icones+"icons/kblank';this.height=0;this.width=0;\"") + "</span>";

if (hideit)
	document.write("<table STYLE=\"table-layout:fixed;\"><tr><td id=cell_"+ id +" height=60><div>" + lmsg);
else
	document.write("<center><table border=0 width=100%   STYLE=\"table-layout:fixed;\"><tr><td  id=cell_"+ id +">" + SamGeturls(lmsg )  );


if (Tsurvey >= 0)
	{
	document.write("</td></tr></table><hr noshade size=1>");

	if (surveyID > 0)
		{
		document.write("<center><table border=0 cellspacing=1 cellpadding=2 class=surveyTable>"
				+ "<tr><td colspan=4 class=surveyQuestion>" + surveyQuestion + "</td></tr>");

		document.write("<tr><td class=surveyHeader>" + survey_choice
			+ "</td><td dir=ltr class=surveyHeader>" + survey_votes_count
			+ "</td><td dir=ltr class=surveyHeader colspan=2>" + survey_percentage
			+ "</td></tr>");

		for (sur = 0; sur < surveyResults.length-5; sur+=5)
			{
			if (surveyResults[sur+1] < 0)
				{
				percent = 0;
				px = 0;
				percentStr = "";
				thiscount = survey_secret;

				}
			else
				{
				if (surveyTotal > 0)
					percent = ((surveyResults[sur+1]*100)/surveyTotal);
				else
					percent = 0;

				percentStr = percent + "";
				px = percentStr.indexOf(".");

				if (px >= 0) percentStr = percentStr.slice(0,px+2) + "%";
				else		 percentStr += ".0%";
				thiscount = surveyResults[sur+1];
				}

			if (surveyResults[sur] == surveyVoted)
				document.write("<tr><td class=surveyResultTextVoted>");
			else
				document.write("<tr><td class=surveyResultText>");

			if ((memberID > 0) && (surveyOpen) && (surveyAllowed) && (surveyVoted != surveyResults[sur]))
				document.write("<a href='f.aspx?t=" + id + "&vote=" + surveyResults[sur] + "&votekey=" + surveyResults[sur+4] + "'>"
				+ surveyResults[sur+2] + "</a>");
			else
				document.write(surveyResults[sur+2]);

			if (surveyResults[sur+3].length > 0)
				{
				if ((surveyResults[sur+3].indexOf("http://") == 0) || (surveyResults[sur+3].indexOf("f.aspx") == 0))
				{
				if ((surveyResults[sur+3].toLowerCase().indexOf(".gif") > 0) || (surveyResults[sur+3].toLowerCase().indexOf(".jpg") > 0))
					document.write("<br><img width=200 src=\""+surveyResults[sur+3]+"\">");
				else
					document.write("<br><a target=_new href=\""+surveyResults[sur+3]+"\">" + surveyResults[sur+3] + "</a>");
				}
				else
					document.write("<br><font color=gray>"+surveyResults[sur+3]);
				}

			document.write("</td><td dir=ltr class=surveyResultNumber>" + thiscount
				+ "</td><td dir=ltr class=surveyResultPercentage>" + percentStr + "</td>"
				+ "<td class=surveyResultPercentage><img src='http://www.startimes.com/survey/images/pb.gif' height=12 width=" + percent + ">"
				+ "<img src='http://www.startimes.com/survey/images/pbw.gif' height=12 width=" + (100-percent) + ">"
				+ "</td></tr>");
			}

		document.write("<tr><td class=surveyHeader>"+survey_total_votes
			+ ":</td><td dir=ltr class=surveyHeader>"+surveyTotal
			+ "</td><td dir=ltr class=surveyHeader>100%</td>"
			+ "<td class=surveyResultPercentage>&nbsp;</td></tr>");

		document.write("</table><font color=red>");

		if (surveyWaiting == 1)		document.write(survey_waiting);
		else if (surveyOpen == false)	document.write(survey_closed);
		else if (memberID == 0)		document.write(survey_only_members_can_vote);
		else if (surveyVoted > 0)	document.write(survey_already_voted_can_change);
		else				document.write(survey_click_to_vote);

		if ((surveyMinPosts + surveyMinDays) > 0)
			{
			document.write("<hr noshade size=1>" + survey_only_certain_members
				+ "<br><table border=0 cellspacing=1 cellpadding=2 class=surveyTable><tr><td class=surveyResultTextVoted>&nbsp;</td><td class=surveyResultTextVoted>");
			if (memberID > 0) document.write(survey_current + "</td><td class=surveyResultTextVoted>");
			document.write(survey_min_limit + "</td></tr>");
			document.write("<tr><td class=surveyResultText>" + survey_only_certain_members_posts
				+ "</td><td class=surveyHeader>");
			if (memberID  > 0) document.write(memberPosts + "</td><td class=surveyHeader>");
			document.write(surveyMinPosts + "</td></tr>");
			document.write("<tr><td class=surveyResultText>" + survey_only_certain_members_days
				+ "</td><td class=surveyHeader>");
			if (memberID > 0) document.write(memberDays + "</td><td class=surveyHeader>");
			document.write(surveyMinDays + "</td></tr></table>");
			}

		document.write("</font></center>");
		}

	}
else
	{
	if (sig.length > 0) document.write("<br></div><div>"+sig);
	document.write("</div></td></tr></table>");
	}

if (editedby.length > 0 )
{
if (dir == "rtl")	document.write("<p align=left>");
else				document.write("<p align=right>");

var s = "";
splitIndex = 0;
splitArray = new Array();
 
//splits(editedby,"|");

var im = editedby.split("|");
//alert(im.length);
x = 0;
for(x=0;x < im.length;x++)
	{
	// var m = splitArray[x];
	// var mode = m.substring(0,1);
 
	// if (mode == "*")
		// s += m.substring(1);
	// else
		// {
		// var ss = "";
		// var date = m.substring(1,7);
		// var name = m.substring(7);
		
		
    var m   = im[x];
	var sam = m.split("-");
	var mode = sam[0];

	if (mode == "*")
		s += sam[0];
	else
		{
		var ss = "";
		var date = sam[1];
		var name = sam[2];
		
		

		ss += formatDate(date) + " : <font color=black>";

		if (mode == "a")	ss += edited_a;
		if (mode == "h")	ss += edited_h;
		if (mode == "u")	ss += edited_u;
		if (mode == "l")	ss += edited_l;
		if (mode == "e")	ss += edited_e;
		if (mode == "d")	ss += edited_d;
		if (mode == "m")	ss += edited_m;
		if (mode == "i")	ss += edited_i;
		if (mode == "v")	ss += edited_v;
		if (mode == "p")	ss += edited_p;
		if (mode == "x")	ss += edited_x;
		if (mode == "f")
		{
		ss += edited_f;
		// var cidx = name.indexOf("#");

		// if (cidx >= 0)
			// {
			var editcount = sam[3];
			//name = name.substring(cidx+1);
			ss += name + "</font><br>";
			ss += "<font color=gray>"+edited_count+": " + editcount + "</font><br>";

			// }
		}
		else
			ss += name + "</font><br>";

		if ((memberLevel < 2) && ((mode == "i") || (mode == "v")|| (mode == "p")|| (mode == "x")))
			ss = "";

		s += ss;
		}

	//x++;
	}

if (s.length > 0)
	{
	document.write("<table dir="+dir+" cellpadding=0 cellspacing=1 width=100%><tr><td width=100%>&nbsp;</td><td class=editedby><nobr>");
	document.write(s + "</nobr></td></tr></table>");
	}
}

document.write("</td></tr>\n");
}


function round(number,X) {
// rounds number to X decimal places, defaults to 2
    X = (!X ? 2 : X);
    return Math.round(number*Math.pow(10,X))/Math.pow(10,X);
}

// code to switch to another page.. called by internal code only

function t_options_bar(isfooter)
{
var infoline1 = ""
var infoline2 = ""
var icon = "";

if (isfooter == 0)	t_options_bar2(isfooter);

//if (isfooter == 0)
{
if (Topic_new >= 0)
	{
	icon = "_new";
	infoline2 = topic_tooltips_new;
	}

if (Topic_hot >= 0)
	{
	icon += "_hot";
	infoline1 = topic_tooltips_hot;
	}

if (Topic_locked >= 0)
	{
	icon += "_locked";
	infoline1 = topic_tooltips_locked;
	}

if (Topic_arch >= 0)
	{
	icon += "_archived";
	infoline1 = topic_tooltips_archived;
	}

if (infoline1.length == 0)	infoline1 = infoline2;
else if (infoline2.length)	infoline1 += "\r\n" + infoline2;

icon = "<img src='"+Icones+"icons/kfolder"+icon+"' height=15 width=15 border=0 hspace=0 title=\"" + infoline1 + "\">";

document.write("<table class=optionsbar dir="+dir+" border=0 cellspacing=2 width=100%>\r\n\
<tr><td valign=middle>&nbsp;");
document.write(icon + "</td><td align=center class=optionsbar_title width=100% valign=middle>&nbsp;"+topictitle);


if ((totalpages > 1) || (memberLevel > 1))
	{
	document.write("</td><td valign=top><table height=28><tr>");

	if (totalpages > 1)
	{
	document.write("<td class=optionsbar_menus>");

	if (pagenum > 1)
		document.write("<a href="+link+"&t=" + topicID + "&pg="
		 + (pagenum-1) +"><img width=15 height=15 src="+Icones+"icons/kgo_right title=\""+nav_prev_page+"\" border=0></a>");
	else
		document.write("<img width=15 height=15 src="+Icones+"icons/kblank>");

	document.write("</td><td class=optionsbar_menus>");

	if (pagenum < totalpages)
		document.write("<a href="+link+"&t=" + topicID + "&pg="
		 + (pagenum+1) +"><img width=15 height=15 src="+Icones+"icons/kgo_left title=\""+nav_next_page+"\" border=0></a>");
	else
		document.write("<img width=15 height=15 src="+Icones+"icons/kblank>");

	document.write("</td><td class=optionsbar_menus>");

	if (pagenum > 1)
		document.write("<a href="+link+"&t=" + topicID + "&pg=1"
		 + "><img width=15 height=15 src="+Icones+"icons/kgo_up title=\""+nav_first_page+"\" border=0></a>");
	else
		document.write("<img width=15 height=15 src="+Icones+"icons/kblank>");

	document.write("</td><td class=optionsbar_menus>");

	if (pagenum < totalpages)
		document.write("<a href="+link+"&t=" + topicID + "&pg="
		 + (totalpages) +"><img width=15 height=15 src="+Icones+"icons/kgo_down title=\""+nav_last_page+"\" border=0></a>");
	else
		document.write("<img width=15 height=15 src="+Icones+"icons/kblank>");

	document.write("</td>");
	}

	if (memberLevel > 1)
	{
	document.write("<td class=optionsbar_menus2><input type=button class=small value=\"إختيار كامل\" onclick=\"select_all_posts()\"></td>");
	document.write("<td class=optionsbar_menus2><input type=button class=small value=\"مسح الإختيار\" onclick=\"select_no_posts()\"></td>");

	document.write("<td class=optionsbar_menus2><img border=0 src="+Icones+"icons/kposticon_unmoderated title=\"إخفاء الردود المختارة\" onclick=\"hide_selected_posts()\"></td>");
	if (moderate == true)
		document.write("<td class=optionsbar_menus2><img border=0 src="+Icones+"icons/kdelete_reply title=\"حذف الردود المختارة\" onclick=\"delete_selected_posts()\"></td>");
	}

	document.write("<td class=optionsbar_menus><img width=15 height=15 src="+Icones+"icons/kexpand title=\""+topic_tooltips_expand_all+"\" onclick=\"expand_all()\"></td>");
	document.write("<td class=optionsbar_menus><img width=15 height=15 src="+Icones+"icons/kcontract title=\""+topic_tooltips_contract_all+"\" onclick=\"contract_all()\"></td>");

	document.write("</table>");
	}

document.write("</td></tr></table>");
}
if (isfooter != 0)	t_options_bar2(isfooter);
}


function t_options_bar2(isfooter)
{
var mainURL = link+"samfrm/forum"+forum_id;
var mainImage = getForumIcon(forum_id);
var mainTitle = getForumTitle(forum_id);
var mainTooltip = mainTitle;

if (isarchive) mainURL = link+"&fa="+forum_id;

document.write("<table border=0 cellspacing=2 width=100%><tr>");

if (isfooter) document.write("</td></tr><tr>");

document.write("<form action=\""+link+"&t="+ topicID +"\" method=get name=optionsForm"+isfooter+">\
<input type=hidden name=t value=" + topicID +">");

if (memberreplies > 0)	document.write("<input type=hidden name=m value="+memberreplies+">");


document.write("<td><a class=menu href=\""+mainURL+"\"><img src='"+mainImage+"' title='"+mainTooltip+"'border=0  width=40 height=40></a></td>");
document.write("<td class=main width=100% valign=middle><a class=menu href=\""+mainURL+"\"><font color=red size=+1></b>"+mainTitle+"</a></td>");

document.write("<td valign=top class=optionsbar_menus><nobr>");

if (((topicLocked == false) || (moderate == true)) && (!isarchive))
	{                   
	document.write("<a  href=\""+link+"samedit/newreply/topic"+topicID+"-"+memberQID+"-"+Samsrc+"\"><img src="+Icones+"icons/kreply_topic title=\""+tip_reply+"\" border=0>");
	document.write("<br>"+topic_toolbar_add_reply+"</a>");
	document.write("</td><td valign=top class=optionsbar_menus><nobr>");
	}

if ((forumStatus.indexOf("l") < 0) || (moderate == true))
	{
	document.write("<a href=\""+link+"Samedit/newtopic/forum"+forum_id+"-"+memberQID+"-"+Samsrc+" \"><img src="+Icones+"icons/kfolder_new_topic border=0 title=\""+tip_new_topic+"\">");
	document.write("<br>"+forum_toolbar_new_topic+"</a>");
	document.write("</td><td valign=top class=optionsbar_menus><nobr>");
	}

if (memberID > 0)
	{
	document.write("<a href=\""+link+"&tellfriend="+topicID+"&src="+escape(top.location.href)+"\"><img border=0 src="+Icones+"icons/ksend_topic border=0 title=\""+tip_send_to_friend+"\">");
	document.write("<br>"+topic_toolbar_send_to_friend+"</a>");
	document.write("</td><td valign=top class=optionsbar_menus><nobr>");
	}

if ((memberID > 1) && (topicMonitored == false))
	{
	document.write("<a href=\""+link + "&topicmonitor=1&t="+topicID+"&src="+escape(top.location.href)+"\"><img border=0 src='"+Icones+"icons/ksubscribe' width=15 height=15 title=\""+tip_monitor_topic+"\">");
	document.write("<br>"+topic_toolbar_monitor_topic+"</a>");
	document.write("</td><td valign=top class=optionsbar_menus><nobr>");
	}

 document.write("<a href=\""+link+"&print=true&t="+topicID+"&src="+escape(top.location.href)+"\"><img border=0 src='"+Icones+"icons/kprint' width=15 height=15 title=\""+tip_printer_friendly+"\">\
<br>"+topic_toolbar_print+"</a>");
document.write("</td><td valign=top class=optionsbar_menus><nobr>");
document.write("<a href=\""+link + "sampdf/pdf"+topicID+"-"+memberQID+" \"><img src="+Icones+"icons/ib_pdfdoc border=0 title=\""+TitleTopicPdf+"\"><br>"+topicPdf+"");
	document.write("<td valign=top class=optionsbar_menus>"
	   + "<a href=\"javascript:void\" onclick=\"window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 'facebook-share-dialog', 'width=626,height=436'); return false;\"> "
       + "<img src="+Icones+"icons/ifacebook title=\""+TitleFb+"\" border=0></a></td>");
	document.write("<td valign=top class=optionsbar_menus><A href="+link+"><img src="+Icones+"icons/itwitter title=\""+TitleFb+"\" border=0></a></td>");

if ((memberLevel > 0) && (!isarchive))
{
document.write("</td><td class=optionsbar_menus>"+topic_toolbar_hide_sigs_title+"<br>\
<select style=\"width:50px;\" name=ths onchange=\"javascript:submitForm"+isfooter+"();\">\
<option value=0>"+topic_toolbar_hide_sigs_show+"<option ");

if (hideSignatures == 1)	document.write("selected ");

document.write("value=1>"+topic_toolbar_hide_sigs_hide+"</option></select>");
}

if (memberID > 0)
{
document.write("</td><td class=optionsbar_menus valign=top>"+topic_toolbar_page_size+"<br>\
<select style=\"width:65;\" class=optionsbar_select name=tps onchange=\"javascript:submitForm"+isfooter+"();\">\r\n");

for (x = 10; x <= 70; x += 20)
	{
	document.write("<option value="+x);
	if (x == topicpagesize)	document.write(" selected");
	if (x == 10)	document.write(">"+x+" ردود</option>\r\n");
	else			document.write(">"+x+" " + topic_toolbar_page_size_replies + "</option>\r\n");
	}

document.write("</select>\r\n");
}

if (totalpages > 1)
	{
	document.write("</td><td class=optionsbar_menus valign=top>"+page_selector_title+"<br>");
	document.write("<select name=pg size=1 onchange=\"changePage"+isfooter+"()\">");

	for (y = 1; y <= totalpages; y++)
		{
		if (y == pagenum)	document.write("<OPTION SELECTED VALUE="+y+">"+y+page_selector_of + totalpages + "</option>");
		else			document.write("<OPTION VALUE="+y+">"+y+page_selector_of + totalpages + "</option>");
		}

	document.write("</select>\r\n");
	}


document.write("</td>");
document.write("<td class=optionsbar_menus>"+switchforum_selector_title+"<br>");
forumsSelector2();
document.write("</td></form>");

if (isfooter == 0)
{
	document.write("<form name=PageNum action=\""+link+"\"><input name=t type=hidden value="+topicID+">");
	if (memberreplies > 0)	document.write("<input type=hidden name=m value="+memberreplies+">");
	document.write("<input type=hidden name=pg value="+pagenum+"></form>");
}

document.write("</tr><tr><td></td></tr></table>");
}


function t_topic_not_found()
{
	document.write("<br><table width=100% border=1><tr class=normal><td class=list_center colspan=10><br><br>"
		+ topic_not_found + "<br></td></tr></table>");
}

function t_show_topics()
{
var x = 0;

while ((x < topics.length) && (topics[x+1] > 0))
	{
	t(topics[x++],topics[x++],topics[x++],topics[x++],topics[x++],topics[x++],
		topics[x++],topics[x++]
		);
	}

if (!isarchive)
{
if (topicLocked == false)
	quickreplyform();
else if (topics[4] >= topicLockLevel)
	{
	document.write("<tr>\
	<td bgcolor=white valign=top align=center>\
	<img src="+Icones+"icons/kfolder_locked>\
	</td><td bgcolor=white colspan=3 width=100% valign=top align=center><font color=red>\
	لا يمكن إضافة مشاركات لهذا الموضوع لأنه تجاوز الحد الأقصى للمشاركات في هذا المنتدى. <font color=gray>(" + topicLockLevel + " رد)\
	</td></tr>");
	}
}
else if (memberLevel == 0)
{
	document.write("<tr>\
	<td bgcolor=white valign=top align=center>\
	<img src="+Icones+"icons/kfolder_locked' >\
	</td><td bgcolor=white colspan=3 width=100% valign=top align=center><font color=red>\
	تصفح ردود المواضيع في الأرشيف متوفر للأعضاء  المسجلين فقط.\
	</td></tr>");
}


}

var ck = false;

function quickreplyform()
{
if (memberID > 0)
	{
	document.write("<tr>\
	<form name=quickreply action="+link+"saminsert method=post>\
	<td bgcolor=white valign=top align=center><br>\
	<img src="+Icones+"icons/kreply_topic><br><br><font color=red>\n\
	أضف رد مختصر\n");

//	if (memberLevel > 1) 
	{
	document.write("<br><br><input type=button style=\"font-size:10px;color:red;\" name=ckon onclick='setupQuickReplyBlock(\"\");' value=\"معالج نص متطور\">");
	document.write("<br><input type=button style=\"font-size:10px;color:red;\" disabled=disabled name=ckoff onclick='NormalQuickReplyBlock();' value=\"&nbsp;معالج نص عادي&nbsp;\">");
	}

	document.write("</td><td bgcolor=white colspan=3 width=100% valign=top align=center>\
	<span name=quickholder>\
	<textarea name=msg style=\"width:100%;height:200px;"+memberFormat+"\"></textarea>\
	</span>\
	<input type=hidden name=qid value=" + escape(memberQID) + ">\
	<input type=button onclick='submitQuickReplyForm(1)' value=\"أضف الرد للموضوع\">");

	if (memberLevel >= 2)
		{
		if ((moderate) || (memberLevelSup == 1))
			document.write("&nbsp;&nbsp;&nbsp;<input type=button onclick='submitQuickReplyForm(2);' value=\"أضف الرد + أقفل الموضوع\">");
		else if ((memberLevelSup == 2) && (forum_id > 1000) && (forum_id < 1100))
		{
			document.write("&nbsp;&nbsp;&nbsp;<input type=button onclick='submitQuickReplyForm(2);' value=\"أضف الرد + أقفل الموضوع\">");
		}
	}

	document.write("<input type=hidden name=post value=newreply>"
	+ "<input type=hidden name=format value=quick>"
	+ "<input type=hidden name=quickmode value=1>"
	+ "<input type=hidden name=checksum value="+topicNam+">"
	+ "<input type=hidden name=topic value="+topicID+">\
	<input type=hidden name=forum value="+forum_id+">\
	<input type=hidden name=checksum value="+topicNam+">\
	<input type=hidden name=caller value=\""+escape(document.location)+"\">\
	</td></form></tr>");

	if (ckm == 1) setupQuickReplyBlock("");
	}
}

var editor = null;

function getQuote(id)
	{
	var x = 0;

	while ((x < topics.length) && (topics[x+1] > 0))
		{
		if (topics[x+1] == id)
		{
//	function t(flags,id,aid,adate,replies,reads,editedby,lmsg)

		var content = "";
		var quoteAuthorID = topics[x+2];
		var z = findMemberDetails(quoteAuthorID);
		var quoteAuthor = "";
		if (z >= 0) quoteAuthor = authors[z+1];
		var quoteTopic = topicID;
		var quoteReply = id;

		if (topics[x] == "t") quoteReply = 0;

		var quoteDate = topics[x+3];
		var ed_quote_from = "إقتباس لمشاركة";

		var tlink = ed_quote_from + ":";

		if (quoteTopic > 0) {
		    tlink = "<a class=qu1 href=f.aspx?t=" + quoteTopic;
		    if (quoteReply > 0) tlink += "&r=" + quoteReply;
		    tlink += ">";
		}

		content = "<table width=95% border=0 bordercolor=gray cellspacing=0 cellpadding=0><tr>"
			+ "<td class=qu><nobr>" + tlink + ed_quote_from + ":</a></td>"
			+ "<td class=qu><nobr><a class=qu2 href=f.aspx?member=" + quoteAuthorID + ">&nbsp;" + quoteAuthor + "</a></td>"
			+ "<td class=qu><nobr>" + tlink + formatDateFull(quoteDate) + "</a></td>"
			+ "<td class=qu width=100%>&nbsp;</td>"
			+ "</tr>"
			+ "<tr><td bgcolor=transparent colspan=4><table width=100% border=1 bordercolor=gray><tr><td>"
			+ topics[x + 7] + "</td></tr></table></td></tr></table><p>";

		return(content);
		}

		x += 8;
		}

	return("");
}

function fillQuick(id)
{
    var quote = getQuote(id);
    if (editor == null)	setupQuickReplyBlock(quote);
    else CKEDITOR.instances.msg.insertHtml(quote);

    window.scrollTo(0, document.body.scrollHeight);
}

function setupQuickReplyBlock(newcontent) {
    if (memberLevel > 0) {
        if (ck) return;
        var currentcontent = quickreply.msg.value;
        quickreply.format.value = "ck";
        quickreply.ckon.disabled = "disabled";
        quickreply.ckoff.disabled = "";
        editor = CKEDITOR.replace('msg', {
            customConfig: '',
            language: 'ar',
            uiColor: '#eeeeee',
            scayt_sLang: 'ar_SA',
            contentsLangDirection: 'rtl',
            enterMode: 2,
            shiftEnterMode: 1,
            resize_dir: 'vertical',
            scayt_autoStartup: false,
            skin: 'office2003',
            extraPlugins: 'tableresize',

            fontSize_sizes:
			'8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px',

            font_names:
			'أندلس/andalus;' +
			'آريال/arial;' +
			'آريال دائري/arial unicode MS;' +
			'طباعة/arabic typesetting;' +
			'كورير/Courier New, Courier, monospace;' +
			'مايكروسوف/microsoft sans serif;' +
			'بسيط/simplified arabic;' +
			'تاهوما/Tahoma, Geneva, sans-serif;' +
			'روماني/Times New Roman, Times, serif;' +
			'Arial/Arial, Helvetica, sans-serif;' +
			'Comic Sans MS/Comic Sans MS, cursive;' +
			'Courier New/Courier New, Courier, monospace;' +
			'Georgia/Georgia, serif;' +
			'Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;' +
			'Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;' +
			'Verdana/Verdana, Geneva, sans-serif'
		,

            toolbar:
		        [
			   ['NewPage'],
			    ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord'],
			    ['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', 'RemoveFormat'],
			    ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'],
			    ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'],
			    ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
			    '/',
			    ['Link', 'Unlink'],
			    ['Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar'],
			    ['Styles', 'Format', 'Font', 'FontSize'],
			    ['TextColor', 'BGColor'],
			    ['Maximize'],
			    ['BidiLtr', 'BidiRtl']
		        ]
                ,

            smiley_descriptions: ['smile', 'big', 'cool', 'blush', 'tongue', 'evil', 'wink',
                    'clown', 'blackeye', '8ball', 'sad', 'shy', 'shock', 'angry',
                    'dead', 'kisses', 'approve', 'dissapprove', 'sleepy', 'question',
                    'rotating', 'eyebrows', 'hearteyes', 'crying', 'waving', 'waving2',
                    'nono', 'wailing'],

            smiley_path: 'http://img.aljasr.com/icon.aspx?i=',

            smiley_images: [
                    'icon_smile.gif', 'icon_smile_big.gif', 'icon_smile_cool.gif', 'icon_smile_blush.gif', 'icon_smile_tongue.gif', 'icon_smile_evil.gif', 'icon_smile_wink.gif',
                    'icon_smile_clown.gif', 'icon_smile_blackeye.gif', 'icon_smile_8ball.gif', 'icon_smile_sad.gif', 'icon_smile_shy.gif', 'icon_smile_shock.gif', 'icon_smile_angry.gif',
                    'icon_smile_dead.gif', 'icon_smile_kisses.gif', 'icon_smile_approve.gif', 'icon_smile_dissapprove.gif', 'icon_smile_sleepy.gif', 'icon_smile_question.gif',
                    'icon_smile_rotating.gif', 'icon_smile_eyebrows.gif', 'icon_smile_hearteyes.gif', 'icon_smile_crying.gif', 'icon_smile_waving.gif', 'icon_smile_waving2.gif',
                    'icon_smile_nono.gif', 'icon_smile_wailing.gif'
                    ]

        });

        ck = true;
        if (newcontent != "") currentcontent = newcontent;
        CKEDITOR.instances.msg.addCss("body {" + memberFormat + "} TD.qu { color:yellow;font-size:12px;background-color:black;padding-left:4px;padding-right:4px;font-weight:bold; } A.qu1 { color:yellow;font-size:14px;font-weight:bold;text-decoration:none; } A.qu2 { color:white;font-size:14px;font-weight:bold;text-decoration:none; }");
        CKEDITOR.instances.msg.setData("<html><body>" + currentcontent + "</body></html>");
    }
}

function NormalQuickReplyBlock()
{
		if (editor)
			{
			editor.destroy();
			editor = null;
			}

		quickreply.msg.value = "";
		quickreply.format.value = "quick";
		quickreply.ckon.disabled = "";
		quickreply.ckoff.disabled = "disabled";
		ck = false;
}

var allow_exit = false;

function checkunload() {
    if (!allow_exit) {
        if (ck == true) {
            var cur = CKEDITOR.instances.msg.getData();
            var s1 = cur.indexOf("<style");
            var s2 = cur.indexOf("</style>");
            var prep = cur;

            if ((s1 >= 0) && (s2 > 0)) {
                if (s1 > 0) prep = prep.substring(0, s1 - 1) + prep.substring(s2, cur.length - 1);
                else prep = prep.substring(s2, cur.length - 1);
            }

            var stripped = prep.replace(/<.*?>/g, '');
            stripped = stripped.replace(/^[\s(&nbsp;)]+/g, '').replace(/[\s(&nbsp;)]+$/g, '');

            if ((stripped.length == 0) && (cur.indexOf("<img") < 0))
                return;

            if (stripped.length < 3) return;

            event.returnValue = forums_confirm_leave_page;
        }
        else if ((memberLevel > 1) && (topicLocked == false)) {
            var x = quickreply.msg.value;
            x = x.replace(/^[\s(&nbsp;)]+/g, '').replace(/[\s(&nbsp;)]+$/g, '');

            if (x.length < 3) return;

            return(forums_confirm_leave_page);
        }
    }
    return;
}

function submitQuickReplyForm(mode)
{
allow_exit = true;
var x = quickreply.msg.value;

if (ck == true)
	{
	var cur = CKEDITOR.instances.msg.getData();
	var s1 = cur.indexOf("<style");
	var s2 = cur.indexOf("</style>");
	var prep = cur;

	if ((s1 >= 0) && (s2 > 0))
	{
	if (s1 > 0) prep = prep.substring(0,s1-1) + prep.substring(s2,cur.length-1);
	else prep = prep.substring(s2,cur.length-1);
	}

	var stripped = prep.replace(/<.*?>/g, '');
	stripped = stripped.replace(/^[\s(&nbsp;)]+/g,'').replace(/[\s(&nbsp;)]+$/g,'');

	if ((stripped.length == 0) && (cur.indexOf("<img") < 0))
		return;

	if (stripped.length < 3) return;

	x = prep;
	}

while ((x.substring(0,1) == ' ') || (x.substring(0,1) == '\r') || (x.substring(0,1) == '\n') || (x.substring(0,1) == '\t'))
	x = x.substring(1);

quickreply.msg.value = x;

quickreply.quickmode.value = mode;

if (quickreply.msg.value.length < 3) return;
else
	{

	if (mode == 2)	if (!confirm(msg_confirm_lock_topic))	return;

	quickreply.submit();
	}
}

function submitForm0() {document.optionsForm0.submit(); return 0;}
function submitForm1() {document.optionsForm1.submit(); return 0;}
function changePage0() {document.PageNum.pg.value = document.optionsForm0.pg.value; document.PageNum.submit(); return 0; };
function changePage1() {document.PageNum.pg.value = document.optionsForm1.pg.value; document.PageNum.submit(); return 0; };

function deleteTopic(id)
	{
	if (confirm(msg_confirm_delete_topic))
		if (confirm(msg_reconfirm_delete_topic))
			submitModerationCommand("d," + id);
	}

function undeleteTopic(id)
	{
	if (confirm(msg_confirm_unhide_post))
		if (confirm(msg_reconfirm_unhide_post))
			submitModerationCommand("z," + id);
	}

function deleteReply(id)
	{
	if (confirm(msg_confirm_delete_reply))
		if (confirm(msg_reconfirm_delete_reply))
			submitModerationCommand("rd," + id);
	}

function undeleteReply(id)
	{
	if (confirm(msg_confirm_unhide_post))
		if (confirm(msg_reconfirm_unhide_post))
			submitModerationCommand("ru," + id);
	}

function deleteReplyByAuthor(id)
	{
	if (confirm(msg_confirm_delete_reply))
		if (confirm(msg_reconfirm_delete_reply))
			document.location = link+'SamDeletRep/'+id+ '/' + memberQID       ;
	}

function approveTopic(id)
	{
	if (confirm(msg_confirm_approve_single))
		submitModerationCommand("a," + id);
	}

function holdTopic(id,title)
	{
	if (confirm(msg_confirm_hold))
		if (confirm(msg_reconfirm_hold))
			submitModerationCommand("h," + id);
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

function hideReply(id,title)
	{
	if (confirm(msg_confirm_hide_post))
		if (confirm(msg_reconfirm_hide_post))
			submitModerationCommand("ri," + id);
	}

function unhideReply(id,title)
	{
	if (confirm(msg_confirm_unhide_post))
		if (confirm(msg_reconfirm_unhide_post))
			submitModerationCommand("rv," + id);
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

function findMemberSignature(id)
	{
	var x = 0;

	while ((x < signatures.length) && (signatures[x] > 0))
		{
		if (signatures[x] == id)	return(signatures[x+1]);
		x += 2;
		}

	return("");
	}

function findMemberDetails(id)
	{
	var	 x = 0;

	while ((x < authors.length) && (authors[x] > 0))
		{
		if (authors[x] == id)
			return(x);
		x += 13;
		}

	return(-1);
	}

function render_content()
	{
	if (totalpages < 0)
		t_topic_not_found();
	else
		{
		Topic_new = topicFlags.indexOf("n");
		Topic_hot = topicFlags.indexOf("h");
		Topic_locked = topicFlags.indexOf("l");
		Topic_arch = topicFlags.indexOf("a");
		Topic_fixed = topicFlags.indexOf("f");
		Topic_moderate = topicFlags.indexOf("m");
		Topic_deleted = topicFlags.indexOf("d");
		Topic_hidden = topicFlags.indexOf("i");
		Topic_survey = topicFlags.indexOf("v");

if (adSideBar.length > 0)
   	{
   	document.write("<table dir=rtl border=0 width=100% cellspacing=0 cellpadding=0>\r\n");
   	document.write("<td width=99%>");
   	}

		t_options_bar(0);
		t_table_open();
		t_header();
		t_show_topics();
		t_footer();
		t_table_close();
		t_options_bar(1);

if (adSideBar.length > 0)
{
   	document.write("</td><td valign=top style=\"padding-right:2px;\">" + adSideBar);
    document.write("</td></tr></table>");
    }

		if (memberLevel > 1) writeModerationForm();
		}
	}

function expand(cell) {

	var object_ex = "cell_expand_" + cell;
	var object_con = "cell_contract_" + cell;
	var object = "cell_" + cell;

    if (document.layers && document.layers[object])
        document.layers[object].height = null;
    else if (document.all)
        document.all[object].height = null;

	object = "cell2_" + cell;

    if (document.layers && document.layers[object])
	{
	document.layers[object].style.display = "block";
	document.layers[object_ex].style.display = "none";
	document.layers[object_con].style.display = "block";
        }
    else if (document.all)
	{
        document.all[object].style.display = "block";
        document.all[object_ex].style.display = "none";
        document.all[object_con].style.display = "block";
        }
}

function contract(cell) {
	var object_ex = "cell_expand_" + cell;
	var object_con = "cell_contract_" + cell;
	var object = "cell_" + cell;

    if (document.layers && document.layers[object])
        document.layers[object].height = 60;
    else if (document.all)
        document.all[object].height = 60;

	object = "cell2_" + cell;

    if (document.layers && document.layers[object])
	{
		document.layers[object].style.display = "none";
		document.layers[object_ex].style.display = "block";
		document.layers[object_con].style.display = "none";
	}
    else if (document.all)
	{
        document.all[object].style.display = "none";
        document.all[object_ex].style.display = "block";
        document.all[object_con].style.display = "none";
        }
}

function contract_all()
{
var x = 0;

while ((x < topics.length) && (topics[x+1] > 0))
	{
	contract(topics[x+1]);
	x += 8;
	}
}

function expand_all()
{
var x = 0;

while ((x < topics.length) && (topics[x+1] > 0))
	{
	expand(topics[x+1]);
	x += 8;
	}
}

function select_user_posts(user)
{
var x = 0;
var count = 0;

while ((x < topics.length) && (topics[x+1] > 0))
	{
	if ((topics[x].indexOf("t") < 0) && (topics[x].indexOf("d") < 0))
	{
	if (topics[x+2] == user)
		{
		count++;
		var object = "check_" + topics[x+1];

		if (document.layers && document.layers[object])
		        document.layers[object].checked = true;
		else if (document.all)
		        document.all[object].checked = true;
		}
	}
	x += 8;
	}

confirm("عدد المشاركات التي تم وضع علامة  الإختيار عليها لهذا العضو: " + count)
}

function select_all_posts()
{
var x = 0;
var count = 0;

while ((x < topics.length) && (topics[x+1] > 0))
	{
	if ((topics[x].indexOf("t") < 0) && (topics[x].indexOf("d") < 0))
	{
	count++;
	var object = "check_" + topics[x+1];

	if (document.layers && document.layers[object])
	        document.layers[object].checked = true;
	else if (document.all)
	        document.all[object].checked = true;
	}
	x += 8;
	}

confirm("عدد المشاركات التي تم وضع علامة  الإختيار عليها: " + count)
}

function select_no_posts()
{
var x = 0;
var count = 0;

while ((x < topics.length) && (topics[x+1] > 0))
	{
	if ((topics[x].indexOf("t") < 0) && (topics[x].indexOf("d") < 0))
	{
	count++;
	var object = "check_" + topics[x+1];

	if (document.layers && document.layers[object])
	        document.layers[object].checked = false;
	else if (document.all)
	        document.all[object].checked = false;
	}
	x += 8;
	}
}



function delete_selected_posts()
{
var x = 0;
var count = 0;
var cmdstr = "";
if (moderate != true) return;

while ((x < topics.length) && (topics[x+1] > 0))
	{
	if ((topics[x].indexOf("t") < 0) && (topics[x].indexOf("d") < 0))
	{
	var object = "check_" + topics[x+1];
	var yes = false;

	if (document.layers && document.layers[object])
		{
	        if (document.layers[object].checked == true)   yes = true;
	        }
	else if (document.all)
		{
		if (document.all[object].checked == true) yes = true;
	        }

	if (yes == true)
		{
		if (cmdstr != "") cmdstr += ",";
		cmdstr += "rd," + topics[x+1];
		count++;
		}
	}

	x += 8;
	}

if (count == 0)	confirm("ليست هناك أية ردود قمت بإختيارها في هذه الصفحة"  );
else if (confirm("هل أنت متأكد من أنك تريد حذف الردود المختارة وعددها: " + count + "?"  ))
	if (confirm("الرجاء إعادة تأكيد حذف الردود المختارة وعددها: " + count  ))
		submitModerationCommand(cmdstr);
}

function hide_selected_posts()
{
var x = 0;
var count = 0;
var cmdstr = "";

while ((x < topics.length) && (topics[x+1] > 0))
	{
	if ((topics[x].indexOf("t") < 0) && (topics[x].indexOf("d") < 0) && (topics[x].indexOf("i") < 0))
	{
	var object = "check_" + topics[x+1];
	var yes = false;

	if (document.layers && document.layers[object])
		{
	        if (document.layers[object].checked == true)   yes = true;
	        }
	else if (document.all)
		{
		if (document.all[object].checked == true) yes = true;
	        }

	if (yes == true)
		{
		if (cmdstr != "") cmdstr += ",";
		cmdstr += "ri," + topics[x+1];
		count++;
		}
	}

	x += 8;
	}

if (count == 0)	confirm("ليست هناك أية ردود غير مخفية قمت بإختيارها في هذه الصفحة"  );
else if (confirm("هل أنت متأكد من أنك تريد إخفاء الردود المختارة الغير مخفية حاليا وعددها: " + count + "?"  ))
	if (confirm("الرجاء إعادة تأكيد إخفاء الردود المختارة الغير مخفية حاليا وعددها: " + count  ))
		submitModerationCommand(cmdstr);
}

