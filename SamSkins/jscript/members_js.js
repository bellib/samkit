
// write table start for forum topics table

var lastlevel = -1;
var col = 1;

function t_table_open()
{
if (member_sort_by == "online")
	document.write("<br><table bgcolor=white dir="+dir+" border=0 width=60% cellspacing=0 cellpadding=0 align=center>\r\n\
	<tr><td>\r\n\
	<table dir="+dir+" border=1 width=100% cellspacing=1 cellpadding=0>\r\n");
else if (member_sort_by == "points")
	document.write("<br><table dir="+dir+" border=0 cellspacing=0 cellpadding=0 align=center>\r\n\
	<tr><td width=400><img src=icons/winner_ribbon.gif><br><br></td></tr>\r\n\
	<tr><td>\r\n\
	<table dir="+dir+" border=1 width=100% cellspacing=1 cellpadding=0>\r\n");
else
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
if (member_sort_by == "online")
	{
	document.write("<tr><td class=list_options colspan=10 nowrap><font color=red>عدد الأعضاء في المنتديات حاليا: " + totalmembers + "</td></tr>");
	document.write("<tr><td>&nbsp;</td></tr>");
	}
else if (member_sort_by == "points")
	{
	document.write("<tr><td colspan=3 class=optionsbar_menus2><font size=+3>** لائحة الشرف **</td></tr>\r\n");
	document.write("<tr><td class=h>#</td><td class=h>العضو</td><td class=h>النقاط</td></tr>\r\n");
	}
else
	{
	document.write("<tr>");

	if (memberLevel > 2)
		document.write("<td class=h>"+totalmembers+"</td>");
	else if (memberLevel > 0)
		document.write("<td class=h>&nbsp;</td>");

	document.write("<td class=h>الرقم</td>\r\n\
	<td class=h>العضو</td>\r\n\
	<td class=h>الدولة</td>\r\n");

	if ((memberLevel > 2) & (member_sort_by != "points"))
		document.write("<td class=h>البريد الإلكتروني</td>");

	document.write("<td class=h>النقاط</td>\r\n");
	
		document.write("<td class=h>المشاركات</td>\r\n\
			<td class=h>آخر مشاركة</td>\r\n\
			<td class=h>آخر زيارة</td>\r\n\
			<td class=h>تاريخ التسجيل</td>\r\n");
	document.write("</tr>");
	}
}

function t_footer()
{
if ((memberLevel > 2) && (member_sort_by == "pending"))
	{
	document.write("<tr><td class=h colspan=20>"
	+ "<input type=button onclick=\"selectAll();\" value='إختيار كامل'>"
	+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=button onclick=\"openMembers();\" value='فتح العضويات المختارة'>"
	+ "</td></tr>");
	document.write("</form>\r\n");
	}
}

var mcount = 0;
var count = 1;
var prevpoints = 0;
var prevcl = "";
var scancount = 0;

function t(flags,id,level,awards,posts,stars,name,email,title,country,datereg,datelasthere,datelastvisit,datelastpost)
{
var cl = "normal";
var Tinactive = flags.indexOf("i");
var Tconfirmed = flags.indexOf("u");
var Tactivated = flags.indexOf("a");
var Thide = flags.indexOf("h");

if (country == "")	country = "&nbsp;";

if (member_sort_by == "online")
	{
	cl = "";
	}
else if (memberLevel < 3)
	{
	if ((mcount++ % 2) == 1) cl = "lastposter";
	}
else
	{
	if (Tinactive >= 0)		cl = "deleted";
	if (Tconfirmed >= 0)	cl = "lastposter";
	}

if (member_sort_by == "points")
	{
	if (prevpoints == awards) 	cl = prevcl;
	else if (count < 6)			cl = "normal";
	else if (count < 11)		cl = "deleted";
	else						cl = "lastposter";
	}

if (member_sort_by != "online")
	document.write("<tr class = "+cl+">");

if (title == "@1@")	 title = "";
if (title == "@sp@") title = "";
if (title.indexOf("@@") == 0) title = "";

if (title == "")
	{
	    if (stars >= 200) title = "نائب مراقب";
	    else if (stars >= 100) title = "مراقب";
	    else if (level == 2) title = "مشرف";
	    else if (stars > 5) title = leveltitles[5];
	else if (stars > 2)	title = leveltitles[stars];
	}

if ((member_sort_by != "online") && (member_sort_by != "points") && (memberLevel > 0))
	{
	var icons = ""

	if (memberLevel > 2)
		{
		scancount++;
		
		if (member_sort_by == "pending")
		{
		if (selector == "all")
			icons += "<INPUT type=checkbox class=submit checked=checked name=approve_"+id+">";
		else
			icons += "<INPUT type=checkbox class=submit name=approve_"+id+">";
			
		icons += "<INPUT type=hidden name=member_"+scancount+" value="+id+">";
		}
		
		
		icons += "&nbsp;<a href=\""+link+"&editmember="+id+"&src="+escape(top.location.href)+"\"><img src="+Icones+"icons/kpencil border=0 hspace=0></a>";

		if (Tinactive >= 0)
			{
			icons += "&nbsp;<a href='javascript:openMember(" + id + ")'><img src="+Icones+"icons/kunlock border=0 hspace=0></a>";
			
			if (posts == 0)
			icons += "&nbsp;<a href=\'javaScript:rejectMember(" + id + ")'><img src="+Icones+"icons/ktrashcan border=0 hspace=0></a>";
			}
		else
			icons += "&nbsp;<a href='javascript:lockMember(" + id + ")')\"><img src="+Icones+"icons/klock border=0 hspace=0></a>";
		}

	if (icons == "")	icons= "&nbsp;";
	
	icons += "&nbsp;<a href=\""+link+"&sendmsg="+id+"&src="+escape(top.location.href)+"\"><img src="+Icones+"icons/kemail height=15 width=15 alt=\""+tip_mail_member+"\" border=0 align=absmiddle hspace=6></a>";

	if (memberLevel > 2)
		document.write("<td valign=top>" + icons +"</td>");
	else
		document.write("<td class=list_center valign=top>" + icons +"</td>");
	}

if (member_sort_by == "online")
	{
	if (lastlevel != level)
		{
		document.write("<tr><td colspan=10 class=h nowrap>&nbsp;&nbsp;&nbsp;");

		if (level == 4) document.write("مراقبون");
		else if (level == 3) document.write("نواب مراقبون");
		else if (level == 2)	document.write("مشرفون");
		else if (level == 1)	document.write("أعضاء");
		
		document.write("&nbsp;&nbsp;&nbsp;</td></tr>");
		lastlevel = level;
		col = 1;
		}
		
	if (col == 1)	document.write("<tr>");
	
	var extra = "";

	if (Thide >= 0)		extra = "<font color=purple>";
	else if (level > 1)	extra = "<font color=red>";

	document.write("<td class=list_small2><nobr><a href=\""+link+"&member=" + id + "\">" + extra + name + "</a></td>");

	col++;
	
	if (col > 5)
		{
		document.write("</tr>");
		col = 1;
		}
	}
else if (member_sort_by == "points")
	{
	if (prevpoints == awards) 	document.write("<td class=list><font size=-1>=</td>");
	else						document.write("<td class=list>"+count+"</td>");
	prevpoints = awards;
	prevcl = cl;
	count++;
	document.write("<td class=list><nobr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	document.write("<a href=\""+link+"&member=" + id + "\">" + name + "</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>");
	document.write("<td class=list>"+awards+"</td>");
	document.write("</tr>");
	}
else
	{
document.write("<td class=list_date valign=middle>" + id +"</td>");

document.write("<td class=list_names><nobr>");
if (Thide > 0)	document.write ("<img src="+Icones+"icons/kstar_silver>&nbsp;");
document.write("<a href=\""+link+"&member=" + id + "\">" + name + "</a></nobr>");

if (title.length > 0)
	document.write("<br>" + title);

document.write("</td><td class=list_small2>" + country + "</td>\r\n");

if (memberLevel > 2) 
	document.write("<td class=list_email><a href=\""+link+"&sendmail="+id+"&src="+escape(top.location.href)+"\">" + email + "</a></td>");

document.write("<td class=list_small2>" + awards + "</td>");

document.write("<td class=list_small2>" + posts);

if (stars > 0)
	{
	document.write("<br>");
	var icon = "<img src="+Icones+"icons/kstar_green>";

	if (stars >= 200) {
	    icon = "<img src=" + fileURL + "icon.aspx?m=star_orange>";
	    stars -= 200;
	}
	else if (stars >= 100)
	{
		icon = "<img src="+Icones+"icons/kstar_gold>";
		stars -= 100;
	}
	else if (level == 2)
		icon = "<img src="+Icones+"icons/kstar_red>";
	else if (level == 3)
		icon = "<img src="+Icones+"icons/kstar_blue>";

	for (x = 0; x < stars; x ++)
		{
		if (x == 5)	document.write("<br>");
		document.write(icon);
		}
	}

if (memberLevel > 1)
	document.write("</td>\
	<td class=list_date nowrap dir=ltr>" + formatDate(datelastpost) + "</td>\r\n\
	<td class=list_small2 nowrap dir=ltr>" + formatDate(datelasthere) + "</td>\r\n\
	<td class=list_date nowrap dir=ltr>" + formatDate(datereg) + "</td>\r\n");
else
	document.write("</td>\
	<td class=list_date nowrap dir=ltr>" + formatDateOnly(datelastpost) + "</td>\r\n\
	<td class=list_small2 nowrap dir=ltr>" + formatDateOnly(datelasthere) + "</td>\r\n\
	<td class=list_date nowrap dir=ltr>" + formatDateOnly(datereg) + "</td>\r\n");
	

document.write("</tr>\r\n");
}


}


function t_options_bar()
{
var selPosts = "";
var selName = "";
var selCountry  = "";
var selLastpost  = "";
var selLasthere  = "";
var selRegdate  = "";
var selOnline  = "";
var selMods  = "";
var selAwards = "";
var selPoints = "";

if (member_sort_by == "posts")		selPosts = " selected";
if (member_sort_by == "name")		selName = " selected";
if (member_sort_by == "country")	selCountry = " selected";
if (member_sort_by == "lastpost")	selLastpost = " selected";
if (member_sort_by == "lasthere")	selLasthere = " selected";
if (member_sort_by == "regdate")	selRegdate = " selected";
if (member_sort_by == "online")		selOnline = " selected";
if (member_sort_by == "mods")		selMods = " selected";
if (member_sort_by == "awards")		selAwards = " selected";
if (member_sort_by == "points")		selPoints = " selected";

document.write("<table><Tr><td></td></tr></table><table dir="+dir+" border=0 cellspacing=2 width=100%>\r\n\
<form action=\""+link+"\" name=\"OptionsBar\"><tr>\r\n\
<td class=optionsbar_menus width=100%>");

if (member_sort_by == "online")
	document.write("<font color=red size=+1>الأعضاء في المنتديات حاليا");
else if (member_sort_by == "mods")
	document.write("<font color=red size=+1>قائمة المشرفين");
else if (member_sort_by == "points")
	document.write("<font color=red size=+1>لائحة الشرف</font><br>ترتيب الأعضاء حسب نقاط التميز");
else
	document.write("<font color=red size=+1>قائمة الأعضاء");


document.write("</td>\r\n\
<td class=optionsbar_menus><nobr>إبحث عن عضو:<br>\
<input style=\"width:100px;\" type=text name=search_member value=\""+member_search+"\">\
&nbsp;<INPUT style=\"width:30px;\" class=submit type=submit value=\"إبحث\">\
<input type=hidden name=prev_mode value=\""+member_sort_by+"\"></td>");

document.write("<td class=optionsbar_menus>خيار ترتيب العرض:<br><select style=\"width:90px;\" name=\"members\" onchange=\"javascript:submitusr(this);\">\r\n");

if (memberID > 0)
	document.write("<option"+selOnline+" value=\"online\">في المنتديات الآن</option>");

document.write("\
<option"+selPoints+" value=\"points\">لائحة الشرف</option>\
<option"+selPosts+" value=\"posts\">عدد المشاركات</option>\
<option"+selName+" value=\"name\">الاسم</option>\
<option"+selCountry+" value=\"country\">الدولة</option>\
<option"+selLastpost+" value=\"lastpost\">آخر مشاركة</option>\
<option"+selLasthere+" value=\"lasthere\">آخر زيارة</option>\
<option"+selRegdate+" value=\"regdate\">تاريخ التسجيل</option>\
<option"+selMods+" value=\"mods\">المشرفين فقط</option>");

if ((memberLevel > 1) && (member_sort_by != "points") && (member_sort_by != "posts") && (member_sort_by != "name") 
&& (member_sort_by != "country") && (member_sort_by != "lastpost") && (member_sort_by != "lasthere") 
&& (member_sort_by != "regdate") && (member_sort_by != "mods"))
document.write("<option selected value=\""+member_sort_by+"\">-- خاص --</option>");


document.write("</select></td>");
document.write("<td class=optionsbar_menus>الترتيب:<br><select style=\"width:75px;\" name=\"order\" onchange=\"javascript:submitForm();\">\r\n\
<option value=\"A\">الأصغر للأكبر</option>\r\n");

if (member_sort_order  == "D")	document.write("<option selected ");
else							document.write("<option ");

document.write(" value=\"D\">الأكبر للأصغر</option>\r\n");

document.write("</select></td>");
document.write("<td class=optionsbar_menus>"+page_selector_title+"<br><select name=pg size=1 onchange=\"submitForm()\">");

var Ystart = Math.floor(pagenum/100) * 100;
var Yend = Ystart+99;

for (y = 1; y <= totalpages; y++)
	{
	if ((y >= Ystart) && (y <= Yend))
		
		{
		if (y == pagenum)
			document.write("<OPTION SELECTED VALUE="+y+">"+y+page_selector_of + totalpages + "</option>");
		else
			document.write("<OPTION VALUE="+y+">"+y+page_selector_of + totalpages + "</option>");
		}
	else
		{
		if (y+99 > totalpages)
			{
			if (y != totalpages)
				{
				if (y != (totalpages-1))
					document.write("<OPTION VALUE="+y+">"+y + " إلى " + (totalpages-1) + "</option>");
				else
					document.write("<OPTION VALUE="+y+">"+y+page_selector_of + totalpages + "</option>");
				}
			
			document.write("<OPTION VALUE="+totalpages+">"+totalpages+page_selector_of + totalpages + "</option>");
			
			y+= 99;
			}
		else if (y == 1)
			{
			document.write("<OPTION VALUE="+y+">"+y + " إلى " + (y+98) + "</option>");
			y += 98;
			}
		else
			{
			document.write("<OPTION VALUE="+y+">"+y + " إلى " + (y+99) + "</option>");
			y += 99;
			}
		}
	}

document.write("</select></td>");

document.write("<td class=optionsbar_menus>"+switchforum_selector_title+"<br>");
forumsSelector2();
document.write("</td>");
document.write("</tr></form></table><table><tr><td></td></tr></table>");

if ((memberLevel > 2) && (member_sort_by == "pending"))
	document.write("<form action=f.aspx?members=pending method=post name=\"approveSelected\" id=\"approveSelected\">\r\n");
}


function t_show_members()
{
var x = 0;

if (members[1] <= 0)
	{
	document.write("<tr class=normal><td class=list_center colspan=10><br><br>");

	if (member_sort_by == "online")		document.write("لا يوجد أي أعضاء في المنتديات حاليا.");
	else								document.write("لم ينتج البحث عن أي أعضاء بهذا الاسم.");

	document.write("<br><br><br></td></tr>");
	}
else while ((x < members.length) && (members[x+1] > 0))
	{
	t(members[x++],members[x++],members[x++],members[x++],members[x++],members[x++],members[x++],
		members[x++],members[x++],members[x++],members[x++],members[x++],members[x++],members[x++]);
	}
}

function lockMember(id)
	{
	if (confirm("الرجاء تأكيد قفل العضو"))
		{
		submitModerationCommand("ml," + id);
		}
	}

function openMember(id)
	{
	if (confirm("الرجاء تأكيد فتح العضو"))
		{
		submitModerationCommand("mo," + id);
		}
	}

function rejectMember(id)
	{
	if (confirm("الرجاء تأكيد رفض العضو"))
	{
	if (confirm("الرجاء تأكيد رفض العضو"))
		{
		submitModerationCommand("mj," + id);
		}
		}
	}

function openMembers()
	{
	if (confirm("الرجاء تأكيد فتح الأعضاء المختارين"))
		{
		approveSelected.submit();
		}
	}

function selectAll()
	{
	document.location = "f.aspx?members=pending&select=all";
	}

function submitForm() {document.OptionsBar.submit(); return 0;}

function render_content()
	{
	t_options_bar();
	t_table_open();
	t_header();
	if (member_sort_by == "online")	showchatusers();	
	t_show_members();
	t_footer();
	t_table_close();
	if (memberLevel > 2) writeModerationForm();
	}


function showchatusers()
{
if ((chatusers.length > 1) && (memberLevel > 0))
	{
	var y = 0;
	var count = 0;
	var curchat = 0;
	var plus = "";
		
	document.write("<tr><td colspan=10 class=h nowrap>&nbsp;&nbsp;&nbsp;الأعضاء في النقاش الحي");
	document.write("&nbsp;&nbsp;&nbsp;</td></tr>");

	document.write("<tr><td colspan=10>");
	document.write("<table width=100% class=chatusers><tr>");
	

	while (y < (chatusers.length-1))
		{
		if (curchat != chatusers[y])
			{
			if (count > 0)	document.write("</tr></table>");
			curchat = chatusers[y];
			if (curchat == 2)	document.write("</td>");

			var sty = "chatusers";
			if (curchat > 3) sty = "forumusers";

			document.write("<td class="+sty+" valign=top><nobr>");

			switch (curchat)
				{
				case 1: document.write("<a href='http://forum.kooora.com/f.aspx?chat=true'>"+forums_online_chat1+"</a><br>"); break;
				case 2: document.write("<a href='http://www.startimes.com/f.aspx?chat=true'>"+forums_online_chat2+"</a><br>"); break;
				case 3: document.write("<a href='http://64.151.87.249/mchat/index.html?lang=ar'>" + forums_online_chat3 + "</a><br>"); break;
				case 6: document.write("<a href='http://64.151.87.249/pchat/index.html?lang=ar'>" + forums_online_chat6 + "</a><br>"); break;
				}
			count = 0;
			}

		if (count > 0)	plus = ("<td class="+sty+"><font color=red>&nbsp;+&nbsp;</td>");
		else			plus = "<table cellspacing=0 cellpadding=0 border=0><tr>";

		if (chatusers[y+1] > 0)
			document.write(plus+"<td class="+sty+"><nobr><a class=tiny href='"+link+"&member="+chatusers[y+1]+"'>"+chatusers[y+2] + "</a></td>");
		else
			document.write(plus+"<td class="+sty+"><nobr><a class=tiny href='javascript:void(0)'>"+chatusers[y+2] + "</a></td>");

		count++;
		if (count == 4)
			{
			document.write("</tr></table>");
			count = 0;
			}
		y+=3;
		}

	if (count > 0)	document.write("</tr></table>");
	document.write("</tr></table></td></tr>");
	}
}
function submitusr(s)
{

location.href = link + 'samusers/'+ s.options[s.selectedIndex].value ;

}