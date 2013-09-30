
function t_options_bar()
{
document.write("<table border=0 cellspacing=2 width=100%><tr>");
document.write("<td width=100%>&nbsp;</td>");
document.write("<td class=optionsbar_menus>"+switchforum_selector_title+"<br>");
forumsSelector2();
document.write("</td></tr><tr><td></td></tr></table>");
}


var noticeMode = "";

function render_content()
	{
	var title = "";
	var auto = false;

	t_options_bar(0);
     document.write("<center><table border=0 cellpadding=4 cellspacing=1 bgcolor=gray>");
	document.write("<tr class=fixed><td colspan=4 id=row_subject ><center><font color=red size=+2>"+edittopic_title+"</font></td></tr>");

	document.write("<form action=\""+link+"sameditinfo/topic"+topicinfo_id+" \" name=topicinfo method=post>"
		+ "<input type=hidden name=topicinfo_id value="+topicinfo_id+">"
		+ "<input type=hidden name=f_id value="+topicinfo_forum+">"
		+ "<input type=hidden name=naver value="+InfoVal+">"
		+ "<input type=hidden name=caller value=\""+escape(editCaller)+"\">");


	 

	document.write("<tr class=fixed><td id=row_subject class=optionheader>"+edittopic_header_title+": </td><td class=list colspan=3>"
		+ "<input onchange=\"checkChanges()\" class=insidetitle type=text style=\"width:400\" name=topicinfo_subject value=\""+ topicinfo_subject+ "\"></td></tr>");


	document.write("<tr class=fixed><td id=row_survey class=optionheader>"+edittopic_header_survey+": </td><td class=list colspan=3>");
	surveySelector();
	document.write("</td></tr>");

	document.write("<tr class=fixed><td id=row_forum class=optionheader>"+edittopic_header_forum+": </td><td class=list colspan=3>");
	forumsSelectorTopic();
	document.write("</td></tr>");

	document.write("<tr class=fixed><td id=row_pinned class=optionheader>"+edittopic_header_pin+": </td>");
	pinSelector();
	document.write("</tr>");

	document.write("<tr class=fixed><td id=row_newsletter class=optionheader>"+edittopic_header_newsletter+": </td>");
	newsletterSelector();
	document.write("</tr>");

	if (memberLevel > 2)
	{
	document.write("<tr class=fixed><td id=row_hottopic class=optionheader>"+edittopic_header_hot+": </td>");
	hotTopicSelector();
	document.write("</tr>");
	}

	document.write("<tr class=fixed><td id=row_mainlink class=optionheader>"+edittopic_header_links+": </td>");
	mainLinksSelector();
	document.write("</tr>");

	document.write("<tr class=fixed><td id=row_toptopic class=optionheader>"+edittopic_header_top+": </td>");
	topTopicSelector();
	document.write("</tr>");

	document.write("<tr class=fixed><td id=row_archiveable class=optionheader>"+edittopic_header_allowarchive+": </td>");
	allowArchiveSelector();
	document.write("</tr>");

	document.write("<tr class=fixed><td class=list_center colspan=4>"
		+ "<input type=submit value='"+req_enter_changes+"'>"
		+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=reset value='"+req_cancel_changes+"' onclick=\"clearChanges()\">"
		+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=button value='"+req_return+"' onclick=\"document.location='"+editCaller+"'\">"
		+ "</td></tr>");
 
	document.write("<tr class=fixed><td colspan=4 id=row_toptopic ><font size=-1 color=red>"+req_highlight_note+"</td></tr>");
	document.write("</table>");
}

function forumsSelectorTopic()
{
document.write("<select onchange=\"checkChanges()\" class=insidetitle style=\"width:300\" name=topicinfo_forum size=1>");

for (y = 0; y < forums.length-3; y+= 3)
	{
	if (forums[y] > 0)
		{
		if (forums[y] == topicinfo_forum)
			document.write("<option selected value='" + forums[y] + "'>" + forums[y+2]);
		else
			document.write("<option value='" + forums[y] + "'>" + forums[y+2]);
		}
	}

document.write("</select>");
}

function surveySelector()
{
document.write("<select onchange=\"checkChanges()\" class=insidetitle style=\"width:300\" name=topicinfo_survey size=1>");


document.write("<option value=0");

if (topicinfo_survey == 0)
	document.write(" selected");

document.write(">"+edittopic_nosurvey);


for (y = 0; y < surveys_list .length-2; y+= 2)
	{
	if (surveys_list [y] == topicinfo_survey)
		document.write("<option selected value='" + surveys_list[y] + "'>" + surveys_list[y+1]);
	else
		document.write("<option value='" + surveys_list[y] + "'>" + surveys_list[y+1]);
	}

document.write("</select>");
}

function newsletterSelector()
{
var checked = "";
if (topicinfo_newsletter == "0")	checked = " CHECKED=CHECKED";
document.write("<td class=list><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=topicinfo_newsletter VALUE=0"+checked+">");
document.write(edittopic_newsletter_no+"</td>");

checked = "";
if (topicinfo_newsletter == "1")	checked = " CHECKED=CHECKED";
document.write("<td class=list><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=topicinfo_newsletter VALUE=1"+checked+">");
document.write(edittopic_newsletter_yes+"</td><td>&nbsp;</td>");
}


function hotTopicSelector()
{
var checked = "";
if (topicinfo_hottopic == "0")	checked = " CHECKED=CHECKED";
document.write("<td class=list><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=topicinfo_hottopic VALUE=0"+checked+">");
document.write(edittopic_hot_no+"</td>");

checked = "";
if (topicinfo_hottopic == "1")	checked = " CHECKED=CHECKED";
document.write("<td class=list><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=topicinfo_hottopic VALUE=1"+checked+">");
document.write(edittopic_hot_forum+"</td>");

checked = "";
if (topicinfo_hottopic == "2")	checked = " CHECKED=CHECKED";
document.write("<td class=list><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=topicinfo_hottopic VALUE=2"+checked+">");
document.write(edittopic_hot_main+"</td>");
}

function mainLinksSelector()
{
var checked = "";
if (topicinfo_mainlink == "0")	checked = " CHECKED=CHECKED";
document.write("<td class=list><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=topicinfo_mainlink VALUE=0"+checked+">");
document.write(edittopic_link_no+"</td>");

checked = "";
if (topicinfo_mainlink == "1")	checked = " CHECKED=CHECKED";
document.write("<td class=list><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=topicinfo_mainlink VALUE=1"+checked+">");
document.write(edittopic_link_normal+"</td>");

checked = "";
if (topicinfo_mainlink == "2")	checked = " CHECKED=CHECKED";
document.write("<td class=list><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=topicinfo_mainlink VALUE=2"+checked+">");
document.write(edittopic_link_priority+"</td>");
}


function pinSelector()
{
var checked = "";
if (topicinfo_pinned == "0")	checked = " CHECKED=CHECKED";
document.write("<td class=list><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=topicinfo_pinned VALUE=0"+checked+">");
document.write(edittopic_pin_no+"</td>");

checked = "";
if (topicinfo_pinned == "1")	checked = " CHECKED=CHECKED";
document.write("<td class=list><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=topicinfo_pinned VALUE=1"+checked+">");
document.write(edittopic_pin_yes+"</td><td>&nbsp;</td>");
}

function allowArchiveSelector()
{
var checked = "";
if (topicinfo_archiveable == "1")	checked = " CHECKED=CHECKED";0
document.write("<td class=list><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=topicinfo_archiveable VALUE=1"+checked+">");
document.write(edittopic_allowarchive_yes+"</td>");

checked = "";
if (topicinfo_archiveable == "0")	checked = " CHECKED=CHECKED";
document.write("<td class=list><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=topicinfo_archiveable VALUE=0"+checked+">");
document.write(edittopic_allowarchive_no+"</td><td>&nbsp;</td>");
}

function topTopicSelector()
{
var checked = "";
if (topicinfo_toptopic == "0")	checked = " CHECKED=CHECKED";
document.write("<td class=list><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=topicinfo_toptopic VALUE=0"+checked+">");
document.write(edittopic_top_no+"</td>");

checked = "";
if (topicinfo_toptopic == "1")	checked = " CHECKED=CHECKED";
document.write("<td class=list><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=topicinfo_toptopic VALUE=1"+checked+">");
document.write(edittopic_top_forum+"</td>");

checked = "";
if (topicinfo_toptopic == "2")	checked = " CHECKED=CHECKED";
document.write("<td class=list><INPUT onclick=\"checkChanges()\" type=radio class=optionheader_radio NAME=topicinfo_toptopic VALUE=2"+checked+">");
document.write(edittopic_top_main+"</td>");
}


function checkOptionStatus(rowname,v1,v2)
{
var row = eval(rowname);

if (v1 == v2)	row.className = "optionheader";
else			row.className = "optionheader_selected";
}


function checkChanges()
{
checkOptionStatus("row_subject",topicinfo.topicinfo_subject.value,topicinfo_subject);
checkOptionStatus("row_survey",topicinfo.topicinfo_survey.value,topicinfo_survey);
checkOptionStatus("row_forum",topicinfo.topicinfo_forum.value,topicinfo_forum);
checkOptionStatus("row_pinned",getRadioValue("topicinfo_pinned"),topicinfo_pinned);
checkOptionStatus("row_toptopic",getRadioValue("topicinfo_toptopic"),topicinfo_toptopic);
checkOptionStatus("row_newsletter",getRadioValue("topicinfo_newsletter"),topicinfo_newsletter);

if (memberLevel > 2)
	{
	checkOptionStatus("row_hottopic",getRadioValue("topicinfo_hottopic"),topicinfo_hottopic);
	}

checkOptionStatus("row_mainlink",getRadioValue("topicinfo_mainlink"),topicinfo_mainlink);
checkOptionStatus("row_archiveable",getRadioValue("topicinfo_archiveable"),topicinfo_archiveable);
}

function clearChanges()
{
checkOptionStatus("row_subject",topicinfo_subject,topicinfo_subject);
checkOptionStatus("row_survey",topicinfo_survey,topicinfo_survey);
checkOptionStatus("row_forum",topicinfo_forum,topicinfo_forum);
checkOptionStatus("row_pinned",topicinfo_pinned,topicinfo_pinned);
checkOptionStatus("row_toptopic",topicinfo_toptopic,topicinfo_toptopic);
checkOptionStatus("row_newsletter",topicinfo_newsletter,topicinfo_newsletter);

if (memberLevel > 2)
	{
	checkOptionStatus("row_hottopic",topicinfo_hottopic,topicinfo_hottopic);
	}
checkOptionStatus("row_mainlink",topicinfo_mainlink,topicinfo_mainlink);
}


function getRadioValue(name)
{
for (var i = 0; i < topicinfo.elements.length; i++)
	{
	if ((topicinfo.elements[i].name.indexOf(name) > -1))
		{
		if (topicinfo.elements[i].checked)
			return(topicinfo.elements[i].value);
        }
    }
return("0");
}
