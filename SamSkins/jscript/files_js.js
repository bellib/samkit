
function t_table_open()
{
document.write("<table dir=rtl border=0 width=60% cellspacing=0 cellpadding=0 align=center class=grid>\
<tr><td>\
<table dir=rtl border=0 width=100% cellspacing=1 cellpadding=2>\r\n");
}

function t_table_close()
{

document.write("</table></td></tr></table>");
}

function getFileName(f)
{
var x;

while (f.indexOf("\\") >= 0)
	f = f.slice(f.indexOf("\\")+1);

return(f);
}

function approveDelete(fname)
	{
	if (confirm(files_confirm_delete))
		{
		if ((memberLevel > 1) && (plaque_forum >= 0))
			document.location = "index.php?plaques="+plaque_forum+"&deletefile=" + fname;
		else if ((memberLevel > 1) && (group_forum >= 0))
		    document.location = "index.php?groups=" + group_forum + "&deletefile=" + fname;
		else
			document.location = "index.php?deletefile=" + fname;
		}
	}


function t_header()
{
document.write("<tr><td class=h>&nbsp;</td>\
<td class=h>"+files_header_fname+"</td>\
<td class=h>"+files_header_size+"</td>\
<td class=h>"+files_header_date+"</td></tr>");
}


function t_footer()
{
}


function t(fname,size,stamp)
{
var flink = "<a target=_new href=\"user.aspx?id=" + memberID + "&f=" + fname + "\">";
var dellink = "<a href=\"index.php?deletefile=" + fname + "\">";
var addlink = "";

if ((memberLevel > 1) && (plaque_forum >= 0))
{
	flink = "<a target=_new href=\""+fileURL+"icon.php?p=" + plaque_forum + "~" + fname + "\">";

	addlink = "</td><td class=list_small><nobr>"
	+ "<a href=\"index.php?editplaque=0&plaqueforum=" + plaque_forum + "&plaquefile=" + fname + "\">"
	+ "-- إضف وسام جديد --</a>";
}
if ((memberLevel > 1) && (group_forum >= 0)) {
    flink = "<a target=_new href=\" " + fname + "\">";

    addlink = "</td><td class=list_small><nobr>"
	+ "<a href=\"index.php?editgroup=0&groupforum=" + group_forum + "&groupfile=" + fname + "\">"
	+ "-- إضف مجموعة جديدة --</a>";
}


document.write("<tr class=normal><td class=list_small><img title=\""+files_delete+"\" border=0 src='"+fname+"' style='max-width:100px;max-height:100px;'  onclick='approveDelete(\""+fname+"\")'>"
	+ "<td class=list>" + flink + fname + "</a>"
	+ "</td><td class=list_small>"
	+ size 
	+ "</td><td class=list_small>"
	+ formatDate(stamp) + addlink
	+ "</td></tr>\r\n");
}


function t_options_bar()
{
document.write("<table width=100%><tr><td width=100% class=optionsbar_menus><nobr><font color=red size=+1>");

if (memberLevel > 1)
{
if (plaque_forum > 0)	document.write("ملفات أوسمة منتدى  " + getForumTitle(plaque_forum) );
else if (group_forum > 0) document.write("ملفات مجموعات منتدى  " + getForumTitle(group_forum));
else if ((plaque_forum == 0) && (memberLevel > 2)) document.write("ملفات الأوسمة العامة");
else document.write(files_title);
}
else document.write(files_title);

document.write("</td></td></tr><tr><td></td></tr></table><br>");
	
if (upload_status != 0)
	{
	document.write("<p align=center><font color=red>" + files_upl_name + "<br></font>" + uploaded_file + "</font><br><br>");
	
	switch (upload_status)
		{
		case -5:	document.write("<font color=red>لا يسمح بتحميل ملفات بأسماء تحتوي على احرف غير لاتينية.</font>");	break;
		case -4:	document.write("<font color=red>لا يسمح بتحميل ملفات في هذه الحافظة إلا من نوع .gif</font>");	break;
		case -3:	document.write("<font color=red>لا يسمح بتحميل ملفات في هذه الحافظة بحجم أكبر من "+ max_allowed+"</font>");	break;
		case -2:	document.write("<font color=red>" + files_upl_invalid_name + "</font>");	break;
		case -1:	document.write("<font color=red>" + files_upl_write_failed + "</font>");	break;
		case 1:		document.write("<font color=red>" + files_upl_no_filename + "</font>");	break;
		case 2:		document.write(files_upl_saved_ok);	break;
		}

	document.write("<br><br>");
	}
}

function t_show_summary()
{
var x = 0;

if (userfiles[0].length == 0)
	{
	document.write("<tr class=normal><td class=list_center colspan=10><br><br>"
		+ files_none + "<br><br><br></td></tr>");
	}
else while ((x < userfiles.length) && (userfiles[x].length > 0))
	{
	t(userfiles[x++],userfiles[x++],userfiles[x++]);
	}

document.write("<tr class=normal><td class=list_options colspan=10><font color=red>");

if (spaceRemaining > 0)	
{

document.write(files_remaining + ":</font> " + spaceRemaining  + "k<br><font color=red>");
document.write("الحد الأقصى لحجم أي ملف يمكن تحميله لهذة الحافظة:</font> " + max_allowed);

}
else	document.write(files_full);

document.write("</td></tr>");

document.write("<tr class=normal><td class=list_options colspan=10><font color=red>"
 + files_notes + "</td></tr>");
	
if (spaceRemaining > 0)
{

document.write("<tr class=deleted><td align=center colspan=10><br>\
<form id=uploader name=uploader action="+link+"samfiles/"+SamS+"  ");

// if (memberLevel > 1) 
// {
// if (plaque_forum >= 0) document.write("&plaques="+plaque_forum);
// if (group_forum >= 0) document.write("&groups=" + group_forum);
// }

document.write(" method=post enctype=\"multipart/form-data\">\
<table><tr><td valign=bottom>"
+ files_select_file + "<br>\
<input name=upl2 type=file onchange='uploader.filename.value = getFileName(this.value)'></td><td>&nbsp;</td><td valign=bottom>"
+ files_file_title + "<br>\
<input name=filename type=text value=''></td><td>&nbsp;</td><td valign=bottom>\
<input type=submit value=\""+files_upload+"\">\
</td></tr></table></form></td></tr>");
}

}

function render_content()
	{
	t_options_bar();
	t_table_open();
	t_header();

	t_show_summary();
	t_footer();
	t_table_close();
	}
