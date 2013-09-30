function openWindow(url) {
 popupWin = window.open(url,'new_page','width=450,height=450')
}


// code to stop the user moving to another page while editing
var editing = false;
 var Samsrc = str_replace('/','z',escape(top.location.href));
function onbeforeunload()
{
if (editing)
	event.returnValue=forums_confirm_leave_page;
}

function getForumTitle(forum_id)
{
var y;

for (y = 0; y < forums.length; y+= 3)
	{
	if (forums[y] == forum_id)
		{
		if (isarchive)	return("أرشيف: " + forums[y+2]);
		else		return(forums[y+2]);
		}
	}
return("");
}
function Samu(ur ,name,l)
{
 
    var url = ur;
	  
	    if(l==true) url = location.href;
		
		a = '<a href='+url+' title="'+name+'">';

     return  a ;
}
function SamOnerr()
{
   return('<img  src='+Icones+'frm/iforum />' );
}
function getForumIcon(forum_id)
{
return(Icones+'frm/iforum' + forum_id);
}
function GetFlag(raccourci)
{
return "<img src=\""+Icones+"flags/i"+raccourci.toLowerCase()+"\" border=0 onError=\"this.src='"+Icones+"?f=non_flag';\">" ;
} 
function GetCountry(raccourci)
{
if ((raccourci == "") || (raccourci == "UK")) return("دولة غير معروفة");
var x = 0;
while (x < countries_list.length)
	{
	if (countries_list[x] == raccourci.toUpperCase()) return(countries_list[x+1]);
	x += 2;
	}
return("");
} 
 function refreshSelector()
{
var rtimes = new Array ( 0, 1, 5, 10, 15 );

if (mode == "forum")
	document.write("<select style=\"width:75\" name=prf size=1 onchange=\"submitForm();\">");
else
	document.write("<select style=\"width:75\" name=prf size=1 onchange=\"autoReload();\">");

for (x = 0; x < rtimes.length; x ++)
	{
	document.write("<option value=" + rtimes[x] );
	if (page_refresh == rtimes[x])	document.write(" SELECTED");

	switch (rtimes[x])
		{
		case 0: document.write(">"+forums_refresh_selector_0); break;
		case 1: document.write(">"+forums_refresh_selector_1); break;
		case 5: document.write(">"+forums_refresh_selector_5); break;
		case 10: document.write(">"+forums_refresh_selector_10); break;
		case 15: document.write(">"+forums_refresh_selector_15); break;
		}
	}
document.write("</select>");
}


function forumsSelector2()
{
// note the form tag is opened in main_options_area() so that the table remains small

document.write("<select class=submit style=\"width:140\" size=\"1\" onchange=\"switchForum(this)\">\
<option SELECTED value=\"\">&nbsp;"+forums_selector_pick+"</option>");

for (y = 0; y < forums.length-3; y+= 3)
	{
	if (y)
		{
		if (forums[y] == -3)
			{
			document.write("<option value=\"\">==================");
			document.write("<option value=\"\">منتديات أخرى:");
			}
		else if (forums[y] < 0)
			document.write("<option value=\"\">-------------------");
		else if (!isBlocked(forums[y]))
			{
			document.write("<option value='"+link+"samfrm/forum" + forums[y]);
			document.write("'>" + forums[y+2] + "");
			}
		}
	}

document.write("</select>");
}


function isBlocked(id)
	{
	for (x = 0; x < blockedForums.length; x++)
		{
		if (blockedForums[x] == id)
			return(true);
		}

	return(false);
	}

function tzSelector()
{
// note the form tag is opened in main_options_area() so that the table remains small

document.write("<select class=timezoneSelect name=\"timezone\" size=\"1\" onchange=\"switchTZ(this)\">");

for (y = -12; y < 13; y ++)
	{
	document.write("<option value="+y);

	if (y == timezone)	document.write(" selected");

	document.write(">"+forums_GMT+" ");
	if (y > 0)	document.write("+");
	if (y)		document.write(y);
	}

document.write("</select>");
}


function styleSelector()
{
document.write("<select class=styleSelect name=\"style\" size=\"1\" onchange=\"switchStyle(this)\">");
 if(style == 17)
  style = 'classic';
  else style = 'black';
for (x = 0; x < styles.length; x++)
	{
	if (style == styles[x])
		document.write("<option selected");
	else
		document.write("<option");

	document.write(" value="+styles[x]+">"+stylenames[x]);
	}


document.write("</select>");
}

function languageSelector()
{
document.write("<select class=langSelect name=lang size=1 onchange=\"switchLanguage(this)\">");

for (x = 0; x < languages.length; x++)
	{
	if (language == languages[x])
		document.write("<option selected");
	else
		document.write("<option");

	document.write(" value="+languages[x]+">"+languagenames[x]);
	}


document.write("</select>");
}


// code to switch to another forum.. called from forumsSelector() only

function switchForum(s)
{
if (s.selectedIndex != 0)
	{
	if (s.options[s.selectedIndex].value != "")
		top.location.href = s.options[s.selectedIndex].value;
	else
		s.selectedIndex = 0;
	}

return 1;
}
function sortie()
{
bo = document.getElementsByTagName('body');
  bo[0].style.filter = "progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)";
  bo[0].style.opacity = "0.4";
if (confirm(forums_confirm_exit))
 {
document.exit_forum.src.value = document.location.href ;
document.exit_forum.submit();
 }
else
 {
    bo[0].style.filter = "";
    bo[0].style.opacity = "";
 }
}

function switchTZ(s)
{
top.location.href =  SAMURL +'?chang/SamTime/'+ s.options[s.selectedIndex].value ;
return 1;
}


function switchStyle(s)
{
top.location.href = SAMURL + "?chang/samstl/" + s.options[s.selectedIndex].value;
return 1;
}

function switchLanguage(s)
{
top.location.href = "index.php?lang=" + s.options[s.selectedIndex].value;
return 1;
}

// code to display main footer

function main_footer()
{
}

function main_options_area(isfooter)
{
if (isfooter == 1)	cls = "footerbar";
else				cls = "menubar";

document.write("<table class="+cls+" dir="+dir+" cellspacing=1 cellpadding=0 width=100%><tr>");

if ((isfooter == 0) && (memberLevel >= 0))
{
// document.write("<td width=100% class=toplogo><a class=topicons href='"+forums_url+"'><img src='"+forums_logo_url+"' border=0></a></td>");
//document.write("<td width=100% class=toplogo><a class=topicons href='"+forums_url+"'><img src='' border=0></a></td>");

document.write("<td class=toplogo><table border=0 cellspacing=0 cellpadding=0><tr><td class=toplogo>");

document.write("<a class=topicons href="+SAMURL          +"><img src='"+Icones+"ikon/klogo' border=0 width=200></a></td>");

//document.write("<td width=100% class=toplogo><a class=topicons href='"+forums_url+"'><img src='"+forums_logo_url+"' border=0></a></td>");


if (memberLevel > 0)
	{
	document.write("</tr><tr>"
	+ "<td class=optionsbar_menus width=100% align=center><nobr>"
	+ "<a class=topicons href=\""+link+"&editmember=0\">&nbsp;<font color=black><b>"+memberName
	+ "</a>");
	
		if (memberLevel > 1)
		{
		if (changedIP == true)
		document.write("<br>"
			+ "<a class=topicons href=\""+link+"&svc=track\">"
			+ "<b><font color=red>تغيير دخول</font>:&nbsp;"
			+ curIP);
		else document.write("<br>"
			+ "<a class=topicons href=\""+link+"&svc=track\">"
			+ "<b><font color=black>تتبع الدخول:</a>&nbsp;"
			+ "<a class=topicons href=\""+link+"&svc=track\"><font color=gray size=-2>&nbsp;<span dir=ltr>"
			+ curIP + "</span>");
			
		if (curCountry != "")
			document.write( " - "+ GetFlag(curCountry) + " - "+ GetCountry(curCountry) +"</a>");
			
		}
		
	if (memberPosts > 0)
	{

		document.write("<br>"
			+ "<a class=topicons href=\""+link+"&posts=0\"><font color=red>"
			+ "مشاركاتك:&nbsp;</font><font color=black>"+ memberPosts+"</font></a>");
	
		if (new_mail > 0)
		document.write("&nbsp;&nbsp;&nbsp;&nbsp;"
			+ "<a class=topicons href=\""+link+"&mail=new\"><font color=black>"
			+ "<font color=red>رسائل جديدة:</font>&nbsp;"
			+ "&nbsp;<font color=black>" + new_mail + "</font></a>");
	}
	
	if (elapsed.length > 0)
		document.write("<br><font size=-2>" + elapsed);

	
	document.write("</td>");
	
	}
	// if (memberLevel > 1)
	// document.write("<td class=optionsbar_menus>"+UNkno+"</td>");


document.write("</tr></table></td><td width=100% class=toplogo>&nbsp;</td>");

var height = "";
if (mode != "main")	
{
	document.write("<td valign=top align=center class=topicons><nobr><a class=topicons href="+link+"><img class=samImg border=0 src='"+Icones+"icons/inext' "+height+"><br><span class=topicons>"+forums_toplinks_tooltip_mainpage+"</span></a></td>");
	if (memberLevel > 0) document.write("<td align=center valign=top class=topicons><nobr><a class=topicons href='"+link+"samarchiv'><img class=samImg border=0 src='"+Icones+"icons/iarchive' "+height+"><br><span class=topicons>"+forums_toplinks_tooltip_archive+"</a></td>");
}
else if (mainpagemode != "main")
{
	document.write("<td align=center valign=top class=topicons><nobr><a  class=topicons href="+link+"><img class=samImg border=0 src='"+Icones+"icons/inext' "+height+"><br><span class=topicons>"+forums_toplinks_tooltip_mainpage+"</a></td>");
}
else if (memberLevel > 0)
	document.write("<td align=center valign=top class=topicons><nobr><a class=topicons href='"+link+"samarchiv'><img class=samImg border=0 src='"+Icones+"icons/iarchive' "+height+"><br><span class=topicons>"+forums_toplinks_tooltip_archive+"</a></td>");

if (memberPosts > 0)
{
	document.write("<td align=center valign=top class=topicons><nobr><a class=topicons href='index.php?posts=0'><img class=samImg border=0 src='"+Icones+"icons/iarticle' "+height+" title='"+
	forums_toplinks_tooltip_yourposts+"'><br><span class=topicons>"+forums_toplinks_tooltip_yourposts
 	+ "<br><font color=red>"+ memberPosts+"</font>"
	+ "</a></td>");
	document.write("<td align=center valign=top class=topicons><nobr><a class=topicons href='index.php?topics=0'><img class=samImg border=0 src='"+Icones+"icons/iauthor' "+height+"><br><span class=topicons>مواضيعك</a></td>");
}


document.write("<td align=center valign=top class=topicons><nobr><a class=topicons href='"+link+"samusers'><img class=samImg border=0 src='"+Icones+"icons/ithemes' "+height+"><br><span class=topicons>"+forums_toplinks_tooltip_members+"</a></td>");

if (memberLevel > 0)
	document.write("<td align=center valign=top class=topicons><nobr><a class=topicons href='index.php?active=monitored'><img class=samImg border=0 src='"+Icones+"icons/iadd' " +height+"><br><span class=topicons>"+forums_toplinks_tooltip_monitoring+"</a></td>");

document.write("<td align=center valign=top class=topicons><nobr><a class=topicons href='"+link+"samactiv'><img class=samImg border=0 src='"+Icones+"icons/idate' "+height+"><br><span class=topicons>"+forums_toplinks_tooltip_active+"</a></td>");
document.write("<td align=center valign=top class=topicons><nobr><a class=topicons href="+link+"samfrm/forum12><img class=samImg border=0 src='"+Icones+"icons/iplugins' "+height+"><br><span class=topicons>"+forums_toplinks_tooltip_help+"</a></td>");
//document.write("<td valign=top class=topicons><nobr><a class=topicons href=http://www.netalarabi.com><img border=0 src="+fileURL+"icon.php?hd=sitei.png"+height+"><br><span class=topicons>الموقع</a></td>");
if (memberLevel > 0)
	document.write("<td align=center valign=top class=topicons><nobr><a class=topicons href=\""+link+"samember\"><img class=samImg border=0 src='"+Icones+"icons/iprofile' "+height+"><br><span class=topicons>"+forums_toplinks_tooltip_yourdetails+"</a></td>");
else document.write("<td align=center valign=top class=topicons><nobr><a class=topicons href=\""+link+"regester/policy\"><img class=samImg border=0 src='"+Icones+"icons/iprofile' "+height+"><br><span class=topicons>"+forums_toplinks_tooltip_register+"</a></td>");
 

if (memberLevel > 0)
	document.write("<td align=center valign=top class=topicons><nobr><a class=topicons href='"+link+"logout/"+memberQID+"'><img class=samImg border=0 src='"+Icones+"icons/iback' "+height+"><br><span class=topicons>"+forums_toplinks_tooltip_exit+"</a></td>");
}

document.write("</tr></table>");
}

// code to start/end the main content area

function main_open_content_area()
{
if (adLink.length > 0)
{
if (adLink.indexOf("#") == 0)
{
}
else if (adImage.length > 0)
	document.write("<table width=100%><tr><td align=center><a href='"+adLink+"' target='"+adLink+"'><img src='"+adImage+"' border=0></a></td></tr></table>");
else
	document.write("<table width=100%><tr><td align=center>"+adLink+"</td></tr></table>");
}

document.write("<center><table border=0 dir="+dir+" border=0 cellPadding=0 cellSpacing=0 width=99%><tr><td>");
}

function main_close_content_area()
{
document.write("</td></tr></table>");
if (mode != "main")	main_options_area(1);
main_footer();
}

function main_header_area()
{
if ((mode == "forum") || (mode == "aforum"))
	{
	if (forum_id > 0)
		{
		mainTitle = getForumTitle(forum_id);
		document.title = forums_windowtitle + ' '+ mainTitle + ' :: ';
		}
	return;
	}

if (mode == "active") return;
if (mode == "notice") return;
if (mode == "rules") return;
if (mode == "files") return;

if (mode == "topic")
	{
	document.title = forums_windowtitle + ' '+ topictitle + ' :: ';
	return;
	}

if (mode == "posts")
	{
	if (memberID == showingID)	document.title = forums_windowtitle + forums_windowtitle_your_posts;
	else				document.title = forums_windowtitle + forums_windowtitle_posts_of + showingName;
	return;
	}

if (mode == "member")
	{
	document.title = forums_windowtitle + user_name;
	return;
	}

if (mode == "members")
	{
	document.title = forums_windowtitle + forums_windowtitle_members;
	return;
	}
	
if (mode != "main")
{
// document.write("<table class=mainheader border=0 dir="+dir+" cellspacing=0 cellpadding=2 width=100%>\
// <tr><td class=main>");

// var mainURL = link;
// var mainImage = "";
// var mainTitle = "&nbsp;";
// var mainTooltip = forums_toplinks_tooltip_mainpage;

// if (mainImage.length > 0)	document.write("<a class=menu href=\""+mainURL+"\"><img src='"+mainImage+"' title='"+mainTooltip+"'border=0></a>");
// if (mainTitle.length > 0)	document.write("</td><td class=main width=100% valign=middle><a class=menu href=\""+mainURL+"\"><font color=red size=+1></b>"+mainTitle+"</a>");

// document.write("</td></tr></table>");
}

}

function checkNewMail()
{
if (memberLevel > 0)
{
if (new_mail > 0)
{
document.write("<a href=\""+link+"&mail=new\">*&nbsp;");
if (new_mail == 1) document.write(mail_1_new_msg);
else if (new_mail == 2) document.write(mail_2_new_msgs);
else if (new_mail < 11) document.write(mail_new_msgs_A+" " + new_mail + " "+mail_new_msgs_B);
else document.write(mail_new_msgs_A+" " + new_mail + " "+mail_new_msgs_B11);
document.write(" * </a>");
}
}
}

function main_userinfo_area()
{
var needLogin = false;

if (mode == "notice")
	{
	if ((noticeMode == "login_bad_password") || (noticeMode == "login_bad_user"))
		needLogin = true;
	}
else if (memberLevel == 0)
	needLogin = true;

document.write("<center><table class=userbar dir="+dir+" border=0 width=99% cellspacing=0 cellpadding=0>\
<tr><td valign=middle>");

	/*
if (memberLevel > 0)
	{
	document.write("<table cellspacing=0 width=180 cellpadding=0><tr>"
	+ "<td class=optionsbar_menus align=left><nobr>"
//	+ "<a class=topicons href=\""+link+"&editmember=0\">"
//	+ forums_login_username+"</a></td><td class=user><nobr>"
	+ "<a class=topicons href=\""+link+"&editmember=0\">&nbsp;<font color=red><b>"+memberName
	+ "</a></td></tr>"
//	+ "<tr><td class=user align=left><nobr>"
//	+ "<a class=topicons href=\""+link+"&posts=0\"><b>"+forums_login_posts+"</a></td><td class=user><nobr>"
//	+ "<a class=topicons href=\""+link+"&posts=0\">&nbsp;<font color=red>" + memberPosts + "</a>"
	);
	
	if (templogin == true)	document.write("<font color=gray>&nbsp;"+forums_login_temp_login);
	document.write("</td></tr>");

	if (new_mail > 0)
	document.write("<tr><td class=user align=left><nobr>"
		+ "<a class=topicons href=\""+link+"&mail=new\">"
		+ "<b>رسائل جديدة:</a></td><td class=user><nobr>"
		+ "<a class=topicons href=\""+link+"&mail=new\"><font color=black>"
		+ "&nbsp;<font color=red>" + new_mail + "</a></td></tr>");

	if (memberLevel > 1)
	{
	if (changedIP == true)
	document.write("<tr><td class=optionsbar_menus align=left><nobr>"
		+ "<a class=topicons href=\""+link+"&svc=track\">"
		+ "<b><font color=red>تغيير دخول</font></a>"
	//	+ "</td><td class=user><nobr>"
		+ "<a class=topicons href=\""+link+"&svc=track\"><font color=gray size=-2>&nbsp;"
		+ curIP);
	else document.write("<tr><td class=optionsbar_menus align=left><nobr>"
		+ "<a class=topicons href=\""+link+"&svc=track\">"
		+ "<b>تتبع الدخول:</a>"
	//	+ "</td><td class=user><nobr>"
		+ "<a class=topicons href=\""+link+"&svc=track\"><font color=gray size=-2>&nbsp;<span dir=ltr>"
		+ curIP + "</span>");
		
	if (curCountry != "")
		document.write(" - " + curCountry + "</a>");
		
	document.write("</td></tr>");
	}

	document.write("</table></td>");
	}
else 
*/

if (needLogin)
{
if (false)
{
	document.write("<table height=100% dir="+dir+" cellspacing=0 cellpadding=0 class=grid border=0>\
		<form action=\"index.php\" method=\"post\" id=form1 name=form1>\
		<tr><td colspan=4 class=h align=center>دخول الأعضاء</td></tr>\
		<tr><td class=f2ts align=left><font color=red>\
		<b>"+forums_login_username+"</td><td class=f2ts><INPUT style=\"width=100\" class=small type=text name=Username value=\""+memberLoginName+"\"></td>\
		<td class=f2ts align=left><font color=red><nobr><b>"+forums_login_password+"</td>\
		<td class=f2ts><INPUT style=\"width=100\" class=small type=password name=Password value=\"\"></td></tr>\
		<input type=hidden name=scw value=" + screen.width + ">\
		<tr>\
		<tr><td colspan=4 class=f2ts height=4></td></tr>\
		<td class=f2ts colspan=3><nobr>\
		<select class=small name=remember>");

if (memberLoginName == "")
	document.write("<option value=2>"+forums_login_remember_all+"</option>\
		<option value=1>"+forums_login_remember_name+"</option>\
		<option value=0>"+forums_login_remember_none+"</option>");
else		
	document.write("<option value=2>"+forums_login_remember_all+"</option>\
		<option value=1 selected>"+forums_login_remember_name+"</option>\
		<option value=0>"+forums_login_remember_none+"</option>");
		
document.write("</select>\
		<br>\
		<input type=hidden name=src value=\""+ top.location.href + "\">\
		<a class=menu href=\""+link+"&requestpass=true\">"+forums_login_forgot_password+"</a></td>\
		<td class=f2ts valign=top align=left>\
		<INPUT class=small src="+fileURL+"icon.php?i=button_login type=image value=\"Login\" id=submit1 name=submit1 border=0 hspace=4>\
		</td></tr></form></table>");
		}
}
document.write("</td>");
/*
if ((membersInChat.length > 1) && (memberLevel > 0))
	{
	var y = 0;
	var count = 0;
	var curchat = 0;
	var plus = "";

	document.write("<td width=100% align=center class=chatusersholder><table class=chatusers><tr>");

	while (y < (membersInChat.length-1))
		{
		if (curchat != membersInChat[y])
			{
			if (count > 0)	document.write("</tr></table>");
			curchat = membersInChat[y];
			if (curchat == 2)	document.write("</td>");

			var sty = "chatusers";
			if (curchat > 3) sty = "forumusers";

			document.write("<td class="+sty+" valign=top width=50><nobr>");
			
			if (siteID == 2)
			{
			switch (curchat)
				{
				case 1: document.write("<a href='http://forum.kooora.com/index.php?chat=true'>"+forums_online_chat1+"</a><br>"); break;
				case 2: document.write("<a href='index.php?chat=true'>"+forums_online_chat2+"</a><br>"); break;
				case 3: document.write("<a href='mchat/index.html?lang=ar'>"+forums_online_chat3+"</a><br>"); break;
				case 6: document.write("<a href='pchat/index.html?lang=ar'>"+forums_online_chat6+"</a><br>"); break;
				case 4: document.write("<a href='index.php?members=online'>"+forums_online_members+"</a><br>"); break;
				case 5: document.write("<a href='index.php?finfo="+forum_id+"'>في هذا المنتدى حاليا:</a><br>"); break;
				}
			}
			else
			{
			switch (curchat)
				{
				case 2: document.write("<a href='http://www.startimes.com/index.php?chat=true'>"+forums_online_chat2+"</a><br>"); break;
				case 1: document.write("<a href='index.php?chat=true'>"+forums_online_chat1+"</a><br>"); break;
				case 3: document.write("<a href='mchat/index.html?lang=ar'>"+forums_online_chat3+"</a><br>"); break;
				case 6: document.write("<a href='pchat/index.html?lang=ar'>"+forums_online_chat6+"</a><br>"); break;
				case 4: document.write("<a href='index.php?members=online'>"+forums_online_members+"</a><br>"); break;
				case 5: document.write("<a href='index.php?finfo="+forum_id+"'>في هذا المنتدى حاليا:</a><br>"); break;
				}
			}
			
			count = 0;
			}

		if (count > 0)	plus = ("<td class="+sty+"><font color=red>&nbsp;+&nbsp;</td>");
		else			plus = "<table cellspacing=0 cellpadding=0 border=0><tr>";

		if (membersInChat[y+1] > 0)
			document.write(plus+"<td class="+sty+"><nobr><a class=tiny href='"+link+"&member="+membersInChat[y+1]+"'>"+membersInChat[y+2] + "</a></td>");
		else if (curchat < 5)
			document.write(plus+"<td class="+sty+"><nobr><a class=tiny href='index.php?members=online'>"+membersInChat[y+2] + "</a></td>");
		else
			document.write(plus+"<td class="+sty+"><nobr><a class=tiny href='index.php?finfo="+forum_id+"'>"+membersInChat[y+2] + "</a></td>");

		count++;
		if (count == 3)
			{
			document.write("</tr></table>");
			count = 0;
			}
		y+=3;
		}

	if (count > 0)	document.write("</tr></table>");
	document.write("</tr></tr></table></td>");
	}
else
*/
	document.write("<td width=100%>&nbsp;</td>");

if (advURL.length > 0)
document.write("<td width=468 align=left><table cellspacing=1 cellpadding=0><tr>\
<td class=advert><a href=\""+advURL+"\" target=\"_new\">\
<acronym title=\""+advTitle+"\">\
<img src=\""+advImage+"\" border=0></acronym></a></td></tr></table></td>");

if (advURL2.length > 0)
document.write("<td width=468 align=left><table cellspacing=1 cellpadding=0><tr>\
<td class=advert><a href=\""+advURL2+"\" target=\"_new\">\
<acronym title=\""+advTitle2+"\">\
<img src=\""+advImage2+"\" border=0 height=36></acronym></a></td></tr></table></td>");

if (advURL3.length > 0)
document.write("<td width=468 align=left><table cellspacing=1 cellpadding=0><tr>\
<td class=advert><a href=\""+advURL3+"\" target=\"_new\">\
<acronym title=\""+advTitle3+"\">\
<img src=\""+advImage3+"\" border=0 height=36></acronym></a></td></tr></table></td>");

if (links.length > 5)
	{
	var secondline = false;
	document.write("<td><table><tr>");
	var x = 0;

	while (x < links.length-5)
		{
		if ((!secondline) && (x >= ((links.length-5)/2)))
			{
			document.write("</tr><tr>");
			secondline = true;
			}

		var title = links[x++];
		var href = links[x++];
		var description = links[x++];
		var cols = links[x++];
		var rows = links[x++];
        rowspan=2
		if (description.length > 0)	description = " target=_" + description;

		document.write("<td valign=top class=optionsbar_menus"+(cols>1?" colspan="+cols:"")+(rows>1?" rowspan="+rows:"")+"><nobr>"+(href.length>0?"<a href='" + link + href + "'"+description+">" + title + "</a>":title)+"</td>");
		}
	document.write("</tr></table></td>");
	}

if (adLink2.length > 0)
document.write("<td width=468 align=left><table cellspacing=1 cellpadding=0><tr>\
<td class=advert><a href=\""+adLink2+"\" target=\""+adLink2+"\">\
<img src=\""+adImage2+"\" border=0></a></td></tr></table></td>");

document.write("</tr></table>");
}


function formatDate(ss)
	{
	if (ss == "") return("");

	var x = 8;
	var y, m, d;
	var ds = "";

	if (ss.charAt(0) == "y")
		{
		x = 1;
		ds += forums_date_yesterday;
		}
	else if (ss.length == 6)
		{
		x = 0;
		ds += forums_date_today;
		}
	else if (ss.length == 8)
		{
		x = 2;
		if (thisMonth < 10)	m = "0" + thisMonth;
		else				m = thisMonth;
		d = ss.substr(0,2);
		ds += m + "/" + d;
		}
	else if (ss.length == 10)
		{
		x = 4;
		m = ss.substr(0,2);
		d = ss.substr(2,2);
		ds += m + "/" + d;
		}
	else if (ss.length == 14)
		{
		x = 8;
		y = ss.substr(0,4);
		m = ss.substr(4,2);
		d = ss.substr(6,2);
		ds += y + "/" + m + "/" + d;
		}

	var h = ss.substr(x,2);
	var n = ss.substr(x+2,2);
	var s = ss.substr(x+4,2);

	if (memberLevel > 2)
		ds =  ds +  " - " +   h + ":" + n  + ":" + s         ;
	else
		ds = ds +  " - " +   h + ":" + n     ;

	return(ds);
	}


function formatDateOnly(ss)
	{
	if (ss == "") return("");

	var x = 8;
	var y, m, d;
	var ds = "";

	if (ss.charAt(0) == "y")
		{
		x = 1;
		ds += forums_date_yesterday;
		}
	else if (ss.length == 6)
		{
		x = 0;
		ds += forums_date_today;
		}
	else if (ss.length == 8)
		{
		x = 2;
		if (thisMonth < 10)	m = "0" + thisMonth;
		else				m = thisMonth;
		d = ss.substr(0,2);
		ds += m + "/" + d;
		}
	else if (ss.length == 10)
		{
		x = 4;
		m = ss.substr(0,2);
		d = ss.substr(2,2);
		ds += m + "/" + d;
		}
	else if (ss.length == 14)
		{
		x = 8;
		y = ss.substr(0,4);
		m = ss.substr(4,2);
		d = ss.substr(6,2);
		ds += y + "/" + m + "/" + d;
		}

	return(ds);
	}

function formatTimeOnly(ss)
	{
	if (ss == "") return("");

	var x = 8;
	var y, m, d;
	var ds = "";

	if (ss.charAt(0) == "y")
		{
		x = 1;
		ds += forums_date_yesterday;
		}
	else if (ss.length == 6)
		{
		x = 0;
		ds += forums_date_today;
		}
	else if (ss.length == 8)
		{
		x = 2;
		if (thisMonth < 10)	m = "0" + thisMonth;
		else				m = thisMonth;
		d = ss.substr(0,2);
		ds += m + "/" + d;
		}
	else if (ss.length == 10)
		{
		x = 4;
		m = ss.substr(0,2);
		d = ss.substr(2,2);
		ds += m + "/" + d;
		}
	else if (ss.length == 14)
		{
		x = 8;
		y = ss.substr(0,4);
		m = ss.substr(4,2);
		d = ss.substr(6,2);
		ds += y + "/" + m + "/" + d;
		}

	var h = ss.substr(x,2);
	var n = ss.substr(x+2,2);
	var s = ss.substr(x+4,2);

	ds = h + ":" + n;

	return(ds);
	}


function start_render() {
     //lang_defin();
 
 
    if (mode == "social") {
        document.write("<center>");
        render_content();
    }
    else {
        if ((mode != "topicreview") && (mode != "forumreview") && (mode != "topicprint") && (mode != "rules") && (mode != "mailreview")) {
            // document.write("<table class=topholder width=100% cellspacing=0 cellpadding=0><tr><td>");
            main_options_area(0);
            document.write("</td></tr><tr><td>");
            main_userinfo_area();
            document.write("</td></tr></table>");
            main_header_area();
        }

        main_open_content_area();
        render_content();
        main_close_content_area();
    }
 
if (browser == "IE")	loadnotice.style.visibility = "hidden";
}


function pre_render()
{
if (adLink.length > 0)
	{
	if (adLink.indexOf("#") == 0)
		{
		var xhReq = new XMLHttpRequest();
		xhReq.open("GET", "user.aspx?ad=" + adLink.substring(1), false);
		xhReq.send(null);
		var serverResponse = xhReq.responseText;
		document.write("<center>"+serverResponse);
		}
	}
}


/////////////////////////////////////////
// skin-wide routines
/////////////////////////////////////////

function writeModerationForm()
	{
	document.write("<form id=moderationForm name=moderationForm method=post action=\""+SAMURL+"?sammodi/ \">");
	document.write("<input type=hidden name=moderate value=\"\">");
	document.write("<input type=hidden name=url value=\""+document.location+"\">");
	document.write("</form>");
	}

function submitModerationCommand(cmd)
	{
	document.moderationForm.moderate.value = cmd;
	document.moderationForm.submit();
	}



var xmlreqlist = new Array();

function CXMLRequest(freed) {
    this.freed = freed;
    this.xmlhttp = false;
    if (window.XMLHttpRequest) {
        this.xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function xmlreqGETContent(url, dest, showloading) {
    var pos = -1;
    for (var i = 0; i < xmlreqlist.length; i++) {
        if (xmlreqlist[i].freed == 1) { pos = i; break; }
    }
    if (pos == -1) { pos = xmlreqlist.length; xmlreqlist[pos] = new CXMLRequest(1); }
    if (xmlreqlist[pos].xmlhttp) {
    
    	if (showloading) 
    	{
        if (document.getElementById)
        { var oe = document.getElementById(dest); oe.innerHTML = '<img src=wait.gif>'; }
        else if (document.layers && document.layers[dest])
            document.layers[dest].innerHTML = '<br><br><img src=ajax.gif>';
        else if (document.all)
            document.all[dest].innerHTML = '<br><br><img src=ajax.gif>';
	}
	
        var randomnumber = Math.floor(Math.random() * 999999);

        xmlreqlist[pos].freed = 0;
        xmlreqlist[pos].xmlhttp.open("GET", url + "&rand=" + randomnumber, true);
        xmlreqlist[pos].xmlhttp.onreadystatechange = function () {
            if (typeof (xmlhttpChangeContent) != 'undefined') { xmlhttpChangeContent(pos, dest); }
        }
        if (window.XMLHttpRequest) {
            xmlreqlist[pos].xmlhttp.send(null);
        } else if (window.ActiveXObject) {
            xmlreqlist[pos].xmlhttp.send();
        }
    }
}

function xmlhttpChangeContent(pos, dest) {
    if (typeof (xmlreqlist[pos]) != 'undefined' && xmlreqlist[pos].freed == 0 && xmlreqlist[pos].xmlhttp.readyState == 4) {
        if (xmlreqlist[pos].xmlhttp.status == 200 || xmlreqlist[pos].xmlhttp.status == 304) {
            {
                var rowdata = xmlreqlist[pos].xmlhttp.responseText;
                
                    if (document.getElementById)
                    { var oe = document.getElementById(dest); oe.innerHTML = xmlreqlist[pos].xmlhttp.responseText; oe.style.visibility = "visible"; }
                    else if (document.layers && document.layers[dest])
                        { document.layers[dest].innerHTML = xmlreqlist[pos].xmlhttp.responseText; document.layers[dest].style.visibility = "visible";}
                    else if (document.all)
                        { document.all[dest].innerHTML = xmlreqlist[pos].xmlhttp.responseText; document.all[dest].style.visibility = "visible"; }


                // document.getElementById(dest).innerHTML = xmlreqlist[pos].xmlhttp.responseText;
                //	handle_response(xmlreqlist[pos].xmlhttp.responseXML);
            }
        } else {
            handle_error();
        }
        xmlreqlist[pos].freed = 1;
    }
}
