function main_table_open()
{
if (mainpagemode == "archive")
{
document.write("<center><table dir="+dir+" border=0 cellspacing=1 cellpadding=1 class=maingrid>\r\n");
		document.write("<tr><td bgcolor=yellow align=center valign=top colspan=11>\n\
		<b><font color=black size=+2>أرشيف المنتديات</td></tr>\n");
}
else
{

/*
document.write("<table width=100%><tr><td><nobr><font color=red>"+main_stats_title+"</font>"
	+ "&nbsp;&nbsp; "+main_stats_members+" <font color=red>" + activeUsers[2]+ "</font>"
	+ "&nbsp;&nbsp; "+main_stats_mods+" <font color=red>" + activeUsers[3]+ "</font>");

if (activeUsers[1] > 0)	document.write("&nbsp;&nbsp; "+main_stats_visitors+" <font color=red>" + activeUsers[1] + "</font>");

document.write("</td><td width=100%>&nbsp;</td><td><nobr>"
//	+ main_stats_max+" <font color=red>"	+ activeUsers[0]
	+ "</td></tr></table>");
*/

    	document.write("<table dir=ltr border=0 width=100% cellspacing=0 cellpadding=0><tr>\r\n");

    	document.write("<tr><td width=200 valign=top style=\"padding-right:2px;padding-top:0px;\">");

    	if (adLogo.length > 0)
		document.write("<img src=\"" + adLogo + "\">");


	document.write("<table dir=rtl bgcolor=#ffffee height=100% width=200>");

	// Login box....

	if (memberLevel == 0)
	{
	document.write("<tr><td class=cat colspan=2>دخول الأعضاء</td></tr><tr><td><center>");

		document.write("<table height=100% dir="+dir+" cellspacing=0 cellpadding=0 border=0>\
			<form action='"+link+"samlogin' id=form1 name=form1 method=post>\
			<tr><td style=\"font-size:12px;\" align=left><font color=red>\
			<b>"+forums_login_username+"</td>\<td colspan=2 style=\"padding-right:2px;\">\
			<INPUT style=\"width:150px;\" class=small type=text name=Username value=\""+memberLoginName+"\"></td>\
			</tr><tr><td style=\"font-size:12px;\" align=left><font color=red><nobr><b>"+forums_login_password+"</td>\
			<td style=\"padding-right:2px;\"><INPUT style=\"width:100px;\" class=small type=password name=Password value=\"\"></td>\
			<td valign=top align=left>\
			<INPUT class=small src='"+Icones+"icons/kbutton_login' type=image value=\"Login\" id=submit1 name=submit1 border=0 hspace=4></td>\
			<input type=hidden name=scw value=" + screen.width + ">\
			</tr>\
			<tr>\
			<tr><td colspan=3 style=\"font-size:12px;\" height=4></td></tr>\
			<tr><td style=\"font-size:12px;align:center;\" colspan=3><nobr><center>\
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
			</tr></form></table>");

	document.write("</td></tr>");
	}

	// Time Zone....
	document.write("<tr><td class=cat colspan=2>الوقت الحالي</td></tr>");
	document.write("<tr><td style=\"font-size:14px;\"><center>" + formatTimeOnly(currentTime));

	var y;
	document.write("&nbsp;&nbsp;&nbsp;<select class=timezoneSelect name=\"timezone\" size=\"1\" onchange=\"switchTZ(this)\">");

	for (y = -12; y < 13; y ++)
		{
		document.write("<option value="+y);

		if (y == timezone)	document.write(" selected");

		document.write(">"+forums_GMT+" ");
		if (y > 0)	document.write("+");
		if (y)		document.write(y);
		}

	document.write("</select>");

	document.write("</td></tr>");

	// SideBar
	if (adSideBar.length > 0)
	{
		document.write("<tr><td class=cat colspan=2>&nbsp;</td></tr>");
	    	document.write("<tr><td valign=top>" + adSideBar + "</td></tr>");
    	}



	// Stats...
	document.write("<tr><td class=cat colspan=2>الأعضاء في المنتديات حاليا</td></tr>");

	document.write("<tr><td style=\"font-size:12px;\"><center>"
		+ main_stats_members+" <font color=red>" + activeUsers[2]+ "</font><br>"

		+ main_stats_mods+" <font color=red>" + activeUsers[3]+ "</font>");

	if (activeUsers[1] > 0)	document.write("<br>"+main_stats_visitors+" <font color=red>" + activeUsers[1] + "</font>");
	writeMembersInChat();

//	if (memberLevel > 2)
//		{
//		if (activeUsers[0] > 0)	document.write("<tr><td>"+main_stats_max+" <font color=red>" + activeUsers[0] + "</td></tr>");
//		}

/**
add style
*/
// document.write("<tr><td class=cat colspan=2>تغير الستايل</td></tr>");
// document.write("<tr><td style=\"font-size:12px;\"><center>");
 

// styleSelector() ;
// document.write("</td></tr>");
document.write("<tr><td class=cat colspan=2>إشهار</td></tr>");
document.write("<tr><td style=\"font-size:12px;\"><img src='"+Icones+"other/isalati' width=200 /></td></tr>");
//	document.write("<tr><td height=99%>&nbsp;</td></tr>");
    	document.write("</table></td><td width=99% valign=top>");


	document.write("<table dir="+dir+" border=0 width=100% cellspacing=1 cellpadding=0 class=maingrid>\r\n");



    document.write("<table dir="+dir+" border=0 width=100% cellspacing=1 cellpadding=0 class=maingrid>\r\n");
}
}

function main_table_close()
{
// if (adSideBar.length > 0)
document.write("</td></tr></table>");

if (siteID == 1)
	{
	document.write("</table><table width=100%><tr><td align=center dir=ltr><nobr>"
		+ "<font size=-2 color=gray>"+main_site_title+"<br><font color=black>"
		+ ""+forums_url+"<br><font color=red>&nbsp;&nbsp;"+cpy_right+" 2012 - " + thisYear        
		+ "</td><td width=100%>&nbsp;</td><td align=center dir=ltr><nobr>"
		+ "<font size=-2 color=gray>"+main_site_program+"<br><font color=black>"
		+ ""+cpy_prg+"<br><font color=red> "+cpy_right +" " + thisYear
		+ "</td></tr></table>");
	}
else
	{
	document.write("</table><table width=100%><tr><td align=center dir=ltr><nobr>"
		+ "<font size=-2 color=gray>"+main_site_title+"<br><font color=black>"
		+ ""+forums_url+"<br><font color=red>&nbsp;&nbsp;"+cpy_right
		+ "</td><td width=100%>&nbsp;</td><td align=center dir=ltr><nobr>"
		+ "<font size=-2 color=gray>"+main_site_program+"<br><font color=black>"
		+ ""+cpy_prg+"<br><font color=red>"+cpy_right
		+ "</td></tr></table>");
	}
}

function main_show_forums()
{
var x = 0;

while ((x < forums_list.length) && (forums_list[x+1] > 0))
	{
	show_forum(forums_list[x++],forums_list[x++],forums_list[x++],forums_list[x++],forums_list[x++],
		forums_list[x++],forums_list[x++],forums_list[x++],forums_list[x++],
		forums_list[x++],forums_list[x++],forums_list[x++],forums_list[x++]);
	}

var url = "";
var sitetitle = "";
x = 0;
var startx = 0;
if (other_forums.length > 1)
{
while ((x < other_forums.length) && (other_forums[x] >= 0))
	{
	if (other_forums[x] == 0)
		{
		if (x > 0)	document.write("</td></tr>");

		x++;
		url = other_forums[x++];
		sitetitle = other_forums[x++];
		startx = x;

		document.write("<tr><td class=cat valign=top colspan=9>&nbsp;<b>"
			+ "<a href='" + url + "'><font color=white>" + sitetitle +"</a></td></tr>");

		document.write("<tr><td class=f1 colspan=9>");
		}
	else
		{
		if (startx != x)	document.write("&nbsp;<font color=red>*</font>&nbsp;");
		document.write("<a class=menu href='" + url + "/index.php?f="+other_forums[x]+"'>"
			+ other_forums[x+2] +"</a>&nbsp;");

		x+=3;
		}
	}

if (x > 0)	document.write("</td></tr>");
}
     document.write( "<table dir="+dir+" border=0 width=100% cellspacing=0 cellpadding=3  >"
	              // + "<tr><td class='' colspan=2>"+forums_service+"</td></tr>"
				   + "<tr><td width=50% class='f1' >"
				   + "<table dir="+dir+" border=0 width=100% cellspacing=0 cellpadding=3  >"
	               + "<tr><td class=''>&nbsp;<img src='"+Icones+"icons/kfolder_new_topic'>&nbsp;&nbsp;<font size=2>"+forums_have_new_topic+"</font></td></tr>"
	               + "<tr><td class=''>&nbsp;<img src='"+Icones+"icons/kfolder'>&nbsp;&nbsp;<font size=2>"+forums_have_not_topic+"</font></td></tr>"
	               + "<tr><td class=''>&nbsp;<img src='"+Icones+"icons/kfolder_locked'>&nbsp;&nbsp;<font size=2>"+forums_locked+"</font></td></tr>"
	               + "<tr><td class=''>&nbsp;<img src='"+Icones+"icons/ino_visitor'>&nbsp;&nbsp;<font size=2>"+forums__member_only+"</font></td></tr>"
				   + "</table></td>"
				   + "<td class='f1'><table dir="+dir+" border=0 width=100% cellspacing=0 cellpadding=3  >"
				   + "<tr><td class=''> </td></tr>"
				   + "</table></td>"
				   + "</table>");
}


var slot = 0;
var slots = 4;
var cats = 0;

function show_forum(flags,id,subject,desc,logo,topics,mods,sups,date,count,members,lastid,lastname)
{
if (flags.indexOf("c") >= 0)
	{
	if (mainpagemode == "archive")
		document.write("<tr><td class=cat valign=top>&nbsp;<b>أرشيف "
		 + subject +"</td><td class=cat align=center>"
		 + "المواضيع في الأرشيف</td><td class=cat align=center>"
		 + "إجمالي المواضيع في المنتدى</td></tr>");
	else if (mainpagemode == "boxes")
	{
		if (slot > 0)
		{
		while (slot < slots)
			{
			document.write("<td class=f1 height=100%>&nbsp;</td>");
			slot++;
			}
		}

		slot = 0;
		document.write("<tr><td colspan="+slots+" style=\"height:4px;\"></td></tr>");
		document.write("<tr><td class=optionheader_selected valign=top colspan="+slots+">&nbsp;<b><font color=yellow>" + subject +"</td></tr>");
	 }
	else if (mainpagemode == "boxes_simple")
	{
		if (slot > 0)
		{
		while (slot < slots)
			{
			document.write("<td class=f1 height=100%>&nbsp;</td>");
			slot++;
			}
		}

		slot = 0;
		document.write("<tr><td colspan="+slots+" style=\"height:4px;\"></td></tr>");
		document.write("<tr><td class=optionheader_selected valign=top colspan="+slots+">&nbsp;<b><font color=yellow>" + subject +"</td></tr>");
	 }
	else
	    {
		 if (cats == 1)
    		 {
    		 if (adLink3.length > 0)
    		    {
            		document.write("</table>");
                	document.write("<table width=100%><tr><td align=center>"+adLink3+"</td></tr></table>");
                	document.write("<table dir="+dir+" border=0 width=100% cellspacing=1 cellpadding=0 class=maingrid>\r\n");
                }
        	 }

		document.write("<tr><td class=cat valign=top>"
		+ "<a href=\""+link+"&cat="+id+"\"><IMG src='"+Icones+"icons/kfolder' height=15 width=15 border=0 hspace=0 title=\"عرض منتديات هذا القسم فقط\"></a>"
		+ "</td><td class=cat width=280 valign=top>&nbsp;<b>"
		 + subject +"</td><td class=cat align=center colspan=2>"
		 + main_table_topics + "</td><td class=cat align=center>"
		 + main_table_replies + "</td><td class=cat align=center><nobr>");

		if (memberID > 0)
			document.write( "<a href=\"javascript:void(0);\"><img src='"+Icones+"icons/kgroup' title=\"أعضاء في المنتدى حاليا\" border=0></a></td><td class=cat align=center><nobr>");

		document.write(main_table_lastpost + "</td><td class=cat align=center>");

		document.write(main_table_sups + "</td><td class=cat width=30% align=center>"
		 + main_table_mods + "</td></tr>");
		 cats++;
		 }
	}
else
	{
	if (mods.length > 0)
		{
	    var splitArray = mods.split("|");
	 	mods = "<table class=mods cellspacing=0 cellpadding=0><tr>";

 		y = 0;
		x = 0;
		while (x < splitArray.length)
			{
			if (y == 3)
				{
				mods += "</tr></table><table class=mods cellspacing=0 cellpadding=0><tr>";
				y = 0;
				}

			mods += "<td><nobr>&nbsp;";
			if (y)	mods += " + ";
			mods += splitArray[x] + "</td>";
			x++;
			y++;
			}
		mods += "</tr></table>";
		}

var Tnew = flags.indexOf("n");
var Tlocked = flags.indexOf("l");

var icon = "folder";
var infoline = "";

if (Tnew >= 0)
	{
	icon += "_new_topic";
	infoline = main_tooltips_new;
	}

if (Tlocked	 >= 0)
	{
	icon += "_locked";
	infoline = main_tooltips_locked;
	}

if (mainpagemode == "archive")
document.write("<tr><td class=f1><a href=\""+link+"&fa="+id+"\">&nbsp;&nbsp;&nbsp;"+subject+"</a>\
<td class=f2ts valign=middle align=center><table width=\"100%\"><tr>\
<td><a href=\""+link+"samfrm/forum"+id+"\"><IMG src='"+fileURL+"icon.php?m="+icon+"' height=15 width=15 border=0 hspace=0 title=\"" + infoline + "\"></a></td>\
<td class=f2ts valign=middle align=center>"+topics+"</td></tr></table></td>\
<td class=f2ts>"+count+"</td></tr>");

else if (mainpagemode == "boxes")
{
if (slot == 0)	document.write("<tr>");
if (slot == slots) { document.write("</tr><tr>"); slot = 0; }

document.write("<td class=f1 height=100%><table width=100% height=100% class=maingrid cellspacing=1><tr>\
<td colspan=2 class=h><a href=\""+link+"samfrm/forum"+id+"\"><font color=white>"+subject+"</a></td></tr>\
<tr height=95%><td bgcolor=white width=55 align=center><img height=45 width=60 src='"+fileURL+logo+"'></td>\
<td class=f1 width=100% style=\"padding-left:4px;padding-right:4px;\"><font size=\"2\">"+desc+"</td></tr>\
<tr><td colspan=2 class=f2ts><font color=red>مواضيع:</font> "+topics + " &nbsp;<font color=red>ردود:</font> " + count);
if (members > 0)	document.write("&nbsp;&nbsp;<font color=blue>أعضاء: </font>"+members);
document.write("</td></tr></table></td>");

slot++;
}
else if (mainpagemode == "boxes_simple")
{
if (slot == 0)	document.write("<tr>");
if (slot == slots) { document.write("</tr><tr>"); slot = 0; }

document.write("<td class=f1 height=100%><table width=100% height=100% class=maingrid cellspacing=1><tr>\
<td colspan=2 class=h><a href=\""+link+"samfrm/forum"+id+"\"><font color=white>"+subject+"</a></td></tr>\
<tr height=95%><td bgcolor=white width=55 align=center><img height=45 width=60 src='"+getForumIcon(id)+"'></td>\
<td class=f1 width=100% style=\"padding-left:4px;padding-right:4px;\"><font size=\"2\">"+desc+"</td></tr>\
</table></td>");
slot++;
}
else
{
document.write("<tr><td class=logo width=75><center><img height=30 src='"+getForumIcon(id)+"'></td>\
</td><td class=f1><a href=\""+link+"samfrm/forum"+id+"\">"+subject+"</a><br> <font size=\"1\">"+desc+"</td>\
<td class=f2ts valign=middle align=center>\
<a href=\""+link+"samfrm/forum"+id+"\"><IMG src='"+Icones+"icons/k"+icon+"' height=15 width=15 border=0 hspace=0 title=\"" + infoline + "\"></a></td>\
<td class=f2ts valign=middle align=center>"+topics+"</td><td class=f2ts>"+count+"</td>");

if (memberID > 0) document.write("<td class=f2ts>"+members+"</td>");
if (mods == "") mods = "&nbsp;";

document.write("<td class=f2ts><nobr><font color=red><b>"+formatDate(date)+"<br><a href=\""+link+"samusr/us"+lastid+"\">"+lastname+"</a></td>");
document.write("<td class=f1 align=center><table class=mods cellspacing=0 cellpadding=0><tr><td>"+sups+"</td></tr></table></td>\
<td class=f1>"+mods+"</td></tr>");
}
}
}


function writeMembersInChat()
{
if ((membersInChat.length > 1) && (memberLevel > 0))
	{
	var y = 0;
	var count = 0;
	var curchat = 0;
	var plus = "";

	document.write("<tr><td width=100% align=center class=chatusersholder><table class=chatusers><tr>");

	while (y < (membersInChat.length-1))
		{
		if (curchat != membersInChat[y])
			{
			if (count > 0)	document.write("</tr></table>");
			curchat = membersInChat[y];
			if (curchat == 2)	document.write("</td>");

			var sty = "chatusers";
			if (curchat > 3) sty = "forumusers";

			document.write("<tr><td class="+sty+" valign=top width=50><nobr>");

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
			document.write(plus+"<td class="+sty+"><nobr><a class=tiny href='"+link+"samusr/us"+membersInChat[y+1]+"'>"+membersInChat[y+2] + "</a></td>");
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
	document.write("</tr></tr></table></td></tr>");
	}
}

function render_content()
	{
	main_table_open();
	main_show_forums();
	main_table_close();
	}
