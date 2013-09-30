function t_table_open()
{
document.write("<table dir=rtl border=0 width=100% cellspacing=0 cellpadding=0 align=center class=grid>\
<tr><td>\
<table dir=rtl border=0 width=100% cellspacing=1 cellpadding=2>");
}

function t_table_close()
{
document.write("</table></td></tr></table>");
}

function t_header(showdetails)
{
document.write("<tr><td class=h>«·„Ê«÷Ì⁄ ›Ì «·√—‘Ì›"
+"</td><td class=h>&nbsp;</td>\
</td><td class=h>"+forum_table_author+"</td>\
<td class=h>"+forum_table_replies+"</td></tr>");
}

function t_footer()
{
}


function t(flags,id,title,aid,adate,replies)
{
var cl = "normal";

var Tarch = flags.indexOf("a");
var Tdeleted = flags.indexOf("d");
var infoline1 = ""
var infoline2 = ""

if (Tdeleted >= 0)	cl = "deleted";

if (aid == 0) {	aid = memberID;	author = memberName; }
var topicowner = (aid == memberID);

document.write("<tr class = "+cl+" id=topicRow_"+id+">"
+ "<td class=list><table cellsapcing=0 cellpadding=0><tr>"
+ "<td><a href=\"index.php?t=" + id + "\">" + title + "</a>&nbsp;");

if (replies > topicpagesize)
	topicPaging(id,replies);

document.write("</td></tr></table></td>\
<td class=list_small nowrap><font color=green>" + formatDate(adate) + "</font></td>\
<td class=list_small nowrap><a href=\""+link+"&member=" + aid + "\">" + findMemberName(aid) + "</a></td>\
<td class=list_small>" + replies + "</td>\
</tr>");
}


function topicPaging(tid,replies)
{
var total = replies/topicpagesize;

if ((total % 1) > 0)
	total = (total - (total % 1)) + 1;

if (total > 1)
	{
	document.write("<table dir=rtl border=0 cellspacing=0 cellpadding=0><tr><td valign=center><font size=-2><img src='"+fileURL+"icon.php?m=posticon' border=0></td>");

	for (x = 1; x <= total; x++)
		{
		if (x && ((x % 15) == 0)) document.write("</tr><tr><td></td>");

		document.write("<td><font size=-2>&nbsp;<a href='index.php?ta="
			+ tid
			+ "&pg=" + x
			+ "'>" + x + "</a></td>");
		}

	document.write("</tr></table>")
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


// code to switch to another page.. called by internal code only

function ChangePage()
{
document.PageNum.submit();
}


function t_options_bar(ndays,sort_order,pagenum,totalpages)
{
var mainURL = link+"&fa="+forum_id;
var mainImage = getForumIcon(forum_id);
var mainTitle = getForumTitle(forum_id);
var mainTooltip = mainTitle;

document.write("<br><table border=0 cellspacing=2 width=100%><tr>");


if ((whichauthor == 0) || (whichauthor == memberID))
{

forumMods = "-- „Ê«÷Ì⁄ﬂ ›ﬁÿ --";
}
else if (whichauthor > 0) 
{
forumMods = "<font color=black>„Ê«÷Ì⁄ «·⁄÷Ê: </font>" + whichname;
}
else if (forumMods.length > 0)
	{
    var splitArray = forumMods.split("|");

 	forumMods = "<table class=mods cellspacing=0 cellpadding=0><tr>"
 		+ "<td><nobr>&nbsp;" + forum_moderated_by + ":</td>";

	y = 0;
	x = 0;
	while (x < splitArray.length)
		{
		if (y == 4)
			{
			forumMods += "</tr></table><table class=mods cellspacing=0 cellpadding=0><tr>";
			y = 0;
			}

		forumMods += "<td><nobr>&nbsp;";
		if (x)	forumMods += " + ";
		forumMods += splitArray[x] + "</td>";
		x++;
		y++;
		}
	forumMods += "</tr></table>";
	if (x > 8)	forumMods = "";
	}


document.write("<td><a class=menu href=\""+mainURL+"\"><img src='"+mainImage+"' alt='"+mainTooltip+"'border=0 onError=\"this.src='"+fileURL+"icon.php?m=blank';this.width=0;\"></a></td>"
+ "<td class=main width=100% valign=middle><a class=menu href=\""+mainURL+"\"><font color=red size=+1></b>"+mainTitle+"</a>"
+ "<br><font size=-1>" + forumMods + "</td>");

if (forumStatus.indexOf("l") < 0)
	{
	document.write("<td class=optionsbar_menus><nobr>");
	document.write("<a href=\""+link+"&edit=newtopic&f="+forum_id+"&src="+escape(top.location.href)+"\"><img src="+fileURL+"icon.php?m=folder_new_topic height=15 width=15 border=0>");
	document.write("<br>"+forum_toolbar_new_topic+"</a>");
	document.write("</td>");
	}

if ((whichauthor != 0) && (whichauthor != memberID))
	{
	document.write("<td class=optionsbar_menus><nobr>");
	document.write("<a href=\""+link+"&fa="+forum_id+"&auth=0\">");
	document.write("„Ê«÷Ì⁄ﬂ ›Ì<br>√—‘Ì› Â–« «·„‰ œÏ</a>");
	document.write("</td>");
	}
else
	{
	document.write("<td class=optionsbar_menus><nobr>");
	document.write("<a href=\""+link+"&fa="+forum_id+"\">");
	document.write("Ã„Ì⁄ „Ê«÷Ì⁄<br>√—‘Ì› Â–« «·„‰ œÏ</a>");
	document.write("</td>");
	}


document.write("<td class=optionsbar_menus>");
document.write("<input type=hidden name=fa value="+ forum_id + ">");
if (whichauthor >= 0) document.write("<input type=hidden name=auth value="+ whichauthor + ">");

document.write(page_selector_title+"<br>");
document.write("<select class=submit name=pg size=1 onchange=\"submitForm()\">");

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
					document.write("<OPTION VALUE="+y+">"+y + " ≈·Ï " + (totalpages-1) + "</option>");
				else
					document.write("<OPTION VALUE="+y+">"+y+page_selector_of + totalpages + "</option>");
				}
			
			document.write("<OPTION VALUE="+totalpages+">"+totalpages+page_selector_of + totalpages + "</option>");
			
			y+= 99;
			}
		else if (y == 1)
			{
			document.write("<OPTION VALUE="+y+">"+y + " ≈·Ï " + (y+98) + "</option>");
			y += 98;
			}
		else
			{
			document.write("<OPTION VALUE="+y+">"+y + " ≈·Ï " + (y+99) + "</option>");
			y += 99;
			}
		}
	}
	
/*
for (y = 1; y <= totalpages; y++)
	{
	if (y == pagenum)
		document.write("<OPTION SELECTED VALUE="+y+">"+y + page_selector_of+ totalpages + "</option>");
	else
		document.write("<OPTION VALUE="+y+">"+y + page_selector_of + totalpages + "</option>");
	}
*/

document.write("</select></td>");

document.write("<td class=optionsbar_menus>≈–Â» ≈·Ï √—‘Ì› „‰ œÏ:<br>");
forumsSelectorArchive();
document.write("</td>");

document.write("</tr><tr><td></td></tr></table>");

if (forumExtra.length > 0)
	document.write(forumExtra);
}


function t_show_topics()
{
var x = 0;

if (topics[x+1] == 0)
	{
	document.write("<tr class=normal><td class=list_center colspan=10><br><br>"
		+ forum_no_topics_found + "<br><br><br></td></tr>");
	}
else
	{
	while ((x < topics.length) && (topics[x+1] > 0))
		t(topics[x++],topics[x++],topics[x++],topics[x++],topics[x++],topics[x++]);
	}
}

function submitForm() {document.optionsForm.submit(); return 0;}


function render_content()
	{
	document.write("<form action=\""+link+"\" name=optionsForm>");
	t_options_bar(0,0,pagenum,totalpages);
	t_table_open();
	t_header(true);
	document.write("</form>");
	t_show_topics();
	t_footer();
	t_table_close();
	}

function forumsSelectorArchive()
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
			document.write("<option value=\"\">========================================================================");
			document.write("<option value=\"\">„‰ œÌ«  √Œ—Ï:");
			}
		else if (forums[y] < 0)
			document.write("<option value=\"\">------------------------------------------------------------------------");
		else if (!isBlocked(forums[y]))
			{
			document.write("<option value='"+link+"&fa=" + forums[y]);
			if (whichauthor >= 0) document.write("&auth="+ whichauthor);
			document.write("'>" + forums[y+2] + "");
			}
		}
	}

document.write("</select>");
}



