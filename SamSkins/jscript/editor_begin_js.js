	var dir = "rtl";
	var topic_max_size = sizeLimit;
	var reply_max_size = sizeLimit;
	var pm_max_size  = sizeLimit;
	var sig_max_size = sizeLimit;
	var editor_method = editMode;
	var fileURL = "";
	var image_folder = IconURL+"?i=";
	var editor_style = properties;
var mainURL = link+"samfrm/forum"+forum_id;
if (moderate)
if (supervisor && editMode == "newtopic" && (topictype !=0 || topicForumIDz != ""))
{
var mainImage = IconURL+'?i=members';
var mainTitle = memberName;
}
else
{
var mainImage = getForumIcon(forum_id);
var mainTitle = getForumTitle(forum_id);
}
else
{
var mainImage = getForumIcon(forum_id);
var mainTitle = getForumTitle(forum_id);
}
if (editMode == "signature")
	{
	mainURL = editCaller;
	mainImage = IconURL+'?i=details';
	mainTitle = ed_title_edit_signature ;
	if (user_name != memberName)
	mainTitle = mainTitle + ": <font color=black>"+GetM(user_name)+"</font>";
	}

if (editMode == "message")
	{
	mainURL = editCaller;
	mainImage = IconURL+'?i=enveloppe';
	mainTitle = "رسالة الى:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=red>" + user_name + "</font>";
	}

var ss = "<table class=\"posticon\" height=\"100%\" cellSpacing=\"0\" cellPadding=\"0\" width=\"100%\" border=\"0\">"
	+ "<form action='"+link+"saminsert'  method=post name=save_form ID=editor_form>\r\n<tr><td>"
	+ "<input type=hidden name=msg  value=\"\" ID=Hidden1>\r\n"
	+ "<input type=hidden name=caller value=\""+escape(editCaller)+"\">\r\n"
	+ "<input type=hidden name=format value=\""+properties+"\" ID=txtPageProperties>\r\n"
	+ "<input type=hidden name=forum value="+forum_id+">\r\n"
	+ "<input type=hidden name=checksum value="+uniqueChecksum+">\r\n"
	+ "<input type=hidden name=action value=post>\r\n";
	
	//----special
	/*+ "<input name=\"method\" type=\"hidden\" value=\"topic\">"
	+ "<input name=\"quote\" type=\"hidden\" value=\"quote\">"
	+ "<input type=\"hidden\" name=\"txtPageProperties\"  value=\"\" ID=\"txtPageProperties\">"
	+ "<input type=\"hidden\" name=\"message\" id=\"message\">"*/
	//----special

ss += " <input type=hidden name=post value="+editMode+">\r\n"

if ((editMode == "newreply") || (editMode == "edittopic"))
	{
	ss += "<input type=hidden name=topic value="+topicID+">\r\n";
	}

if (editMode == "editreply")
	{
	ss += "<input type=hidden name=topic value="+topicID+">\r\n";
	ss += "<input type=hidden name=reply value="+replyID+">\r\n";
	}

if (editMode == "signature")
	{
	document.title = ed_title_edit_signature;
	ss += "<input type=hidden name=user_id value="+user_id+">\r\n";
	}

if (editMode == "message")
	{
	if (moderate)
if(supervisor)
if(sendforum != "")
    {
	ss += "<input type=hidden name=msgforums value="+sendforum+">\r\n";
	}
	document.title = "رسالة الى: " + user_name;
	ss += "<input type=hidden name=user_id value="+user_id+">\r\n";
	ss += "<input type=hidden name=thread_id value="+thread_id+">\r\n";
	ss += "<input type=hidden name=reply_id value="+reply_id+">\r\n";
	ss += "<input type=hidden name=arm value="+mail_area+">\r\n";
	}

if (editMode == "newtopic")
	{
	if (moderate)
	if (supervisor)
	{
	ss += "<input type=hidden name=topictype value="+topictype+">\r\n";
	ss += "<input type=hidden name=topicForumIDz value="+topicForumIDz+">\r\n";
	}
	}
//
ss += "<table class=topholder dir="+dir+" border=0 cellspacing=2 width=100%><tr>"
	+ "<td><a class=menu href=\"javascript:goTo('"+mainURL+"')\"><img src='"+mainImage+"' border=0 onError=\"this.src='"+IconURL+"?m=blank';this.width=0;\"></a></td>"
	+ "<td class=main width=100% valign=middle><a class=menu href=\"javascript:goTo('"+mainURL+"')\"><font size=+1></b>"+mainTitle+"</a></font>";

var ruleslink = "<td align=center class=menu rowspan=2><nobr><a target=_new href="+link+"?rules>"+ed_click_for_rules+"</a></td><td class=\"menu\" align=\"middle\"><br><br></td>";


if (editMode == "newtopic")
	{
	if (moderate)
	if(supervisor)
if(topictype != 0)
    {
	switch(topictype)
	{
	case 1:
	ed_title_new_topic = "إعلان إشرافي";
	break;
	case 2:
	ed_title_new_topic = "إعلان رقابي";
	break;
	case 3:
	ed_title_new_topic = "إعلان إداري";
	break;
	}
	}
	document.title = ed_title_new_topic;
	ss += " - " + ed_title_new_topic;
	
	if (moderate)
	{
	ss += "&nbsp;&nbsp;&nbsp;&nbsp;<font size=-1 color=black><INPUT type=checkbox class=small name=newtopic_hidden id=newtopic_hidden><LABEL for=newtopic_hidden> مخفي</LABEL>";
	ss += "&nbsp;&nbsp;<INPUT type=checkbox class=small name=newtopic_locked id=newtopic_locked><LABEL for=newtopic_locked> مقفل</LABEL>";
	ss += "&nbsp;&nbsp;<INPUT type=checkbox class=small name=newtopic_pinned id=newtopic_pinned><LABEL for=newtopic_pinned> مثبت</LABEL>";
	}
	
	ss += "</td>" + ruleslink;

	if (!moderate)
		ss += "<td align=left class=menu rowspan=2><nobr><font color=red>"
		+ ed_limit_topics + ": </font>"
		+ (maxTopicsAllowedInForum - userTopicsInForum)
		+ "</td>";

	ss += "</tr><tr><td colspan=2>"+ed_topic_title_header+": <input name=subject type=text style=\"width:400\" maxLength=100></td>";
	
	}
else if (editMode == "message")
	{
	ss += "<br><nobr>عنوان الرسالة: <input name=subject type=text style=\"width:400\" value=\""+ topictitle+"\" maxLength=100></td>";

	if (content.length > 0)
		{
		if (quoteAuthor.length > 0)
		{
		var tlink = "<font size=-1 color=yellow><b>&nbsp;&nbsp;&nbsp;"+ed_quote_from+":";
		
		if (quoteTopic > 0)
		{
			tlink = "<a href="+link+"?t=" + quoteTopic;
			if (quoteReply > 0)	tlink += "&r=" + quoteReply;
			tlink += "><font size=-1 color=yellow><b>&nbsp;&nbsp;&nbsp;"+ed_quote_from+":</a>";
		}
		
		content = "<br><table width=95% border=0 bordercolor=gray cellspacing=0 cellpadding=0><tr>"
			+ "<td bgcolor=gray><nobr>"+tlink+"</td>"
			+ "<td bgcolor=gray><nobr><a href="+link+"?member="+quoteAuthorID+"><font size=-1 color=white><b>&nbsp;"+quoteAuthor+"</a>&nbsp;&nbsp;&nbsp;</td>"
			+ "<td bgcolor=gray><nobr><font size=-1 color=yellow><b>&nbsp;&nbsp;&nbsp;"+formatDate(quoteDate)+"</td>"
			+ "<td bgcolor=gray width=100%>&nbsp;</td>"
			+ "</tr>"
			+ "<tr><td bgcolor=transparent colspan=4><table width=100% border=1 bordercolor=gray><tr><td>"
			+ content + "</td></tr></table></td></tr></table><br><br>";
		}
		}

	}
else if (editMode == "edittopic")
	{
	document.title = ed_title_edit_topic;
	ss += " - " + ed_title_edit_topic  + "</td>" + ruleslink;
	ss += "</tr><tr><td colspan=2>"+ed_topic_title_header+": <input name=subject type=text style=\"width:400\" value=\""+ topictitle+"\" maxLength=100></td>";
	}
else if (editMode == "newreply")
	{
	document.title = ed_title_new_reply;

	ss += " - " + ed_title_new_reply;


	if (moderate)
	{
	ss += "&nbsp;&nbsp;&nbsp;&nbsp;<font size=-1 color=black><INPUT type=checkbox class=small name=newreply_hide id=newreply_hide><LABEL for=newreply_hide> إخفاء الموضوع</LABEL>";
	ss += "&nbsp;&nbsp;<INPUT type=checkbox class=small name=newreply_lock id=newreply_lock><LABEL for=newreply_lock> قفل الموضوع</LABEL>";
	}

	ss += "</td>" + ruleslink;
	if (!moderate)
		ss += "<td align=left class=menu rowspan=2><nobr><font color=red>"
		+ ed_limit_replies + ": </font>"
		+ (maxRepliesAllowedInForum - userRepliesInForum)
		+ "</td>";


	ss += "</tr><tr><td colspan=2 class=main><a href=\"javascript:goTo('"+link+"?t="+topicID+"')\">"+ed_title_reply_topictitle
		+ ": " + topictitle + "</a> &nbsp;-&nbsp;"+ed_title_reply_authorname+": " + topicauthor  + "</td>";

	if (content.length > 0)
		{
		if (quoteAuthor.length > 0)
		{
		var tlink = "<font size=-1 color=yellow><b>&nbsp;&nbsp;&nbsp;" + ed_quote_from + ":";
		
		if (quoteTopic > 0)
		{
			tlink = "<a href="+link+"?t="+quoteTopic;
			if (quoteReply > 0)	tlink += "&r=" + quoteReply;
			tlink += "><font size=-1 color=yellow><b>&nbsp;&nbsp;&nbsp;"  + ed_quote_from + ":</a>";
		}
		
		content = "<br><table width=95% border=0 bordercolor=gray cellspacing=0 cellpadding=0><tr>"
			+ "<td bgcolor=gray><nobr>"+tlink+"</td>"
			+ "<td bgcolor=gray><nobr><a href="+link+"?member="+quoteAuthorID+"><font size=-1 color=white><b>&nbsp;"+quoteAuthor+"</a>&nbsp;&nbsp;&nbsp;</td>"
			+ "<td bgcolor=gray><nobr><font size=-1 color=yellow><b>&nbsp;&nbsp;&nbsp;"+formatDate(quoteDate)+"</td>"
			+ "<td bgcolor=gray width=100%>&nbsp;</td>"
			+ "</tr>"
			+ "<tr><td bgcolor=transparent colspan=4><table width=100% border=1 bordercolor=gray><tr><td>"
			+ content + "</td></tr></table></td></tr></table><br><br>";
		}
		}
	}
else if (editMode == "editreply")
	{
	document.title = ed_title_edit_reply;
	ss += " - " + ed_title_edit_reply + "</td>" + ruleslink;
	ss += "</tr><tr><td colspan=2 class=main><a href=\"javascript:goTo('"+link+"?t="+topicID+"')\">"
		+ ed_title_reply_topictitle + ": " + topictitle + "</a> &nbsp;-&nbsp;"+ed_title_reply_authorname+": " + topicauthor  + "</td>";
	}
else
	{
	ss += "</td>";
	}

ss += "</tr></table></td></tr>"
// + "<tr><td><table style=\"display: block; border-left: 1px solid #d9d9d9; border-right: 1px solid #e0e0e0; border-top: 1px solid #d9d9d9; background: #f2f2f6\" cellSpacing=\"0\" cellPadding=\"1\" width=\"100%\" border=\"0\" valign=\"center\"><tr><td width=\"100%\"></td></tr></table></td></tr>"
+ "<tr><td height=\"100%\">"
+ "<table id=\"editorPlace\" width=\"100%\" height=\"100%\" cellSpacing=\"0\" cellPadding=\"0\" border=\"0\"><tr><td valign=\"top\" align=\"center\"><input type=\"hidden\" name=\"message\" id=\"message\">";
document.write(ss);