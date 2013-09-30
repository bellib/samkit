function main_table_open()
{
document.write("<center><table dir="+dir+" border=0 cellspacing=1 cellpadding=1 class=grid>\r\n");
		document.write("<tr><td bgcolor=yellow align=center valign=top colspan=10>");
		
if (showingID == memberID)
	document.write("<b><font color=black size=+2>&nbsp;&nbsp;&nbsp;&nbsp;ãæÇÖíÚß ÇáÍÇáíÉ æİí ÇáÃÑÔíİ&nbsp;&nbsp;&nbsp;&nbsp;"
	+ "</td></tr><tr><td bgcolor=orange align=center valign=top colspan=10>"
	+ "<font size=-1 color=white>áÊÕİÍ ÇáãæÇÖíÚ İí ãäÊÏì ãÚíä ÅÖÛØ Úáì ÚÏÏåÇ"
	+ "</td></tr>\n");
else
	document.write("<b><font color=black size=+2>&nbsp;&nbsp;&nbsp;&nbsp;ãæÇÖíÚ ÇáÚÖæ: <a href=index.php?member="+showingID +"><font color=red>"+showingName+"</a>&nbsp;&nbsp;&nbsp;&nbsp;"
	+ "</td></tr><tr><td bgcolor=orange align=center valign=top colspan=10>"
	+ "<font size=-1 color=white>áÊÕİÍ ÇáãæÇÖíÚ İí ãäÊÏì ãÚíä ÅÖÛØ Úáì ÚÏÏåÇ"
	+ "</td></tr>\n");

}

function main_table_close()
{
	document.write("</table>");
}

function main_show_forums()
{
if (showingStatus == "newmember")
{
	document.write("<tr class=normal><td class=list_center colspan=10><br><br>&nbsp;&nbsp;&nbsp;&nbsp;"
		+ "åĞå ÇáÎÇÕíÉ ÛíÑ ãÊæİÑÉ ááÃÚÖÇÁ ÇáÌÏÏ." 
		+ "&nbsp;&nbsp;&nbsp;&nbsp;<br><br><br></td></tr>");
}
else if (showingStatus == "empty")
{
	document.write("<tr class=normal><td class=list_center colspan=10><br><br>&nbsp;&nbsp;&nbsp;&nbsp;"
		+ "áÇ ÊæÌÏ ÃíÉ ãæÇÖíÚ áåĞÇ ÇáÚÖæ İí ÇáãäÊÏíÇÊ." 
		+ "&nbsp;&nbsp;&nbsp;&nbsp;<br><br><br></td></tr>");
}
else if (showingStatus == "locked")
{
	document.write("<tr class=normal><td class=list_center colspan=10><br><br>&nbsp;&nbsp;&nbsp;&nbsp;"
		+ "åĞå ÇáÚÖæíÉ ãŞİæáÉ Ãæ ÛíÑ ãÊæİÑÉ." 
		+ "&nbsp;&nbsp;&nbsp;&nbsp;<br><br><br></td></tr>");
}
else if (showingStatus == "hidden")
{
	document.write("<tr class=normal><td class=list_center colspan=10><br><br>&nbsp;&nbsp;&nbsp;&nbsp;"
		+ "áÇ íãßä ÊÕİÍ åĞå ÇáÚÖæíÉ." 
		+ "&nbsp;&nbsp;&nbsp;&nbsp;<br><br><br></td></tr>");
}
else
{
var x = 0;

while ((x < forums_list.length) && (forums_list[x+1] > 0))
	show_forum(forums_list[x++],forums_list[x++],forums_list[x++],forums_list[x++],forums_list[x++],forums_list[x++]);
}
}

function show_forum(flags,id,subject,topics1,topics2,replies)
{
if (flags.indexOf("c") >= 0)
	{
		document.write("<tr><td class=cat valign=top>&nbsp;<b>"
		 + subject +"</td><td class=cat align=center>"
		 + "ÇáãæÇÖíÚ ÇáÍÇáíÉ</td><td class=cat align=center>");
		 
    if (showreplies)
        document.write("ÇáÑÏæÏ ÇáÍÇáíÉ</td><td class=cat align=center>");
        
    document.write("ÇáãæÇÖíÚ İí ÇáÃÑÔíİ</td></tr>");
	}
else
	{

var Tnew = flags.indexOf("n");
var Tlocked = flags.indexOf("l");

var icon = "folder";
var infoline = "";

if (Tnew >= 0)
	{
	icon += "_new";
	infoline = main_tooltips_new;
	}

if (Tlocked	 >= 0)
	{
	icon += "_locked";
	infoline = main_tooltips_locked;
	}

document.write("<tr><td class=f1><a href=\""+link+"&f="+id+"\">&nbsp;&nbsp;&nbsp;"+subject+"</a>\
<td class=f2ts valign=middle align=center><table width=\"100%\"><tr>\
<td><a href=\""+link+"&f="+id+"\"><IMG src='"+fileURL+"icon.php?m="+icon+"' height=15 width=15 border=0 hspace=0 alt=\"" + infoline + "\"></a></td>");

if (topics1 > 0)
	document.write("<td class=f2ts valign=middle align=center><a href=\""+link+"&f="+id+"&auth="+showingID+"\">"+topics1+"</a></td></tr></table></td>");
else
	document.write("<td class=f2ts valign=middle align=center>&nbsp;</td></tr></table></td>");

if (showreplies)
    {
    if (replies > 0)
	    document.write("<td class=f2ts valign=middle align=center><a href=\""+link+"&f="+id+"&auth="+showingID+"\">"+replies+"</a></td>");  
    else
    	document.write("<td class=f2ts valign=middle align=center>&nbsp;</td>");
	}
	
if (showingStatus == "archive_not_available")
	document.write("<td class=f2ts>- ÛíÑ ãÊæİÑ ÍÇáíÇ -</td></tr>");
else if (topics2 > 0)
	document.write("<td class=f2ts><a href=\""+link+"&fa="+id+"&auth="+showingID+"\">"+topics2+"</a></td></tr>");
else
	document.write("<td class=f2ts>&nbsp;</td></tr>");
	}
}

function render_content()
	{
	main_table_open();
	main_show_forums();
	main_table_close();
	}
