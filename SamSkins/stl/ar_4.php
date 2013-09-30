<?php
//$opc = htmlspecialchars(trim($_GET['opc']));;
echo'
BODY { scrollbar-3dlight-color:#e0e0e0;
           scrollbar-arrow-color:white;
           scrollbar-base-color:#999999;
           scrollbar-darkshadow-color:black;
           scrollbar-face-color:;
           scrollbar-highlight-color:#bbbbbb;
           scrollbar-shadow-color:;

	background: url('.GURLGET.'sora/ikonzskins/g4 ) fixed 0px;
	background-color:#0492de;
	background-position:top left;
}

A {color:black;text-decoration:none;font-weight:bold }
A:visited { color:black;text-decoration:none;font-weight:bold }
A:hover { color:red;text-decoration:none;font-weight:bold }
A.menu { color:green;text-decoration:none;font-weight:bold;font-size:9pt }
A.menu:visited { color:green }
A.menu:hover { color:orange }
A.menu2 { color:red;text-decoration:none;font-weight:bold;font-size:9pt }
A.menu2:visited { color:red }
A.menu2:hover { color:orange }
A.menu3 { color:green;text-decoration:none;font-weight:bold;font-size:9pt }
A.menu3:visited { color:green }
A.menu3:hover { color:red }
A.menu_admin { color:white;text-decoration:none;font-weight:bold;font-size:9pt }
A.menu_admin:visited { color:white }
A.menu_admin:hover { color:red }
TABLE.mods { font-size:75%;color:orange;text-align:right;vertical-align:center }

TR.normal { background-color: #fafafa; }
TR.fixed { background-color: #edf1b6; }
TR.deleted { background-color: #bbbb99; }
TR.lastposter { background-color: #cccccc; }
TR.highlighted { background-color: #c2c2c2; }

TD { color:darkgreen;font-weight:bold;font-size:100%;font-family:Helvetica,Arial }
TD.cat { 
	background: url('.GURLGET.'sora/ikon/itabbar ) repeat left 1px;
	height:20px;
	text-align:center;
	padding-top:2;padding-bottom:2;
	padding-right:2;padding-left:2;
	color:yellow;
	border-color:transparent;
	border-width:0px;
	border-style:solid;
	border-top-width:0px;
	border-bottom-width:0px;
	font-size:14px;
}
TD.list { 
color:menutext;padding-left:2;padding-right:2;
color:midnightblue;vertical-align:top;
padding-right:4px;
}
TD.list_center {
color:menutext;padding-left:2;padding-right:2;
color:midnightblue;vertical-align:center;
text-align:center;
}
TD.list_date { 
font-size:75%;
color:menutext;padding-left:2;padding-right:2;
color:red;vertical-align:center;
text-align:center;
}
TD.list_topic { 
color:menutext;padding-left:2;padding-right:2;
color:midnightblue;vertical-align:top;
padding-right:4px;
	filter:alpha(opacity='.$opc.');
	-moz-opacity:0.'.$opc.'; 
	-khtml-opacity: 0.'.$opc.'; 
	opacity: 0.'.$opc.';
}
TD.list_small { 
	filter:alpha(opacity='.$opc.');
	-moz-opacity:0.'.$opc.'; 
	-khtml-opacity: 0.'.$opc.'; 
	opacity: 0.'.$opc.';
font-size:75%;
padding-left:0;padding-right:0;
color:midnightblue;vertical-align:center;
text-align:center;
}
TD.list_topic { 
color:menutext;padding-left:2;padding-right:2;
color:midnightblue;vertical-align:top;
padding-right:4px;
	filter:alpha(opacity='.$opc.');
	-moz-opacity:0.'.$opc.'; 
	-khtml-opacity: 0.'.$opc.'; 
	opacity: 0.'.$opc.';
}
TD.list_small2 { 
font-size:75%;
padding-left:2;padding-right:2;
color:midnightblue;vertical-align:center;
text-align:center;
background:#ededed;
}
TD.list_names { 
font-size:75%;
color:menutext;padding-left:2;padding-right:2;
padding-right:4px;
color:gray;vertical-align:center;
text-align:right;
}
TD.list_email { 
font-size:66%;
color:menutext;padding-left:2;padding-right:2;
color:black;vertical-align:center;
text-align:center;
}
TD.list_options {
padding:4px; color:menutext;
color:midnightblue;vertical-align:center;
text-align:center;
background-color:#ccffcc;
}

TD.h { 

	background: url('.GURLGET.'sora/ikon/ktabbar2 ) repeat left 1px;
		
	background-color:#8b8b8b;
	text-align:center;
	vertical-align:middle;
	color:White;
	border-color:transparent;
	border-width:0px;
	border-style:solid;
	border-right-width:1px;
	padding-top:0px;
	padding-bottom:0px;
	font-weight:bold;

}
TD.posticon { 
background:transparent; 
color:menutext;padding-left:2;padding-right:2; text-align:center;vertical-align:middle;
border-width:1px; border-style:solid; 
border-color:threedhighlight threedshadow threedshadow threedhighlight;
font-size:10px;
}

TD.menu { color:black;text-decoration:bold;font-size:9pt;padding:0;text-align:center;valign:bottom;padding-left:2;padding-right:2 }
TD.menu_out { background:#660000;color:white;text-decoration:bold;font-size:9pt;padding:3 }
TD.menu_admin { text-decoration:bold;font-size:9pt;padding:3 }
TD.menu0 { color:white;text-decoration:none;font-weight:bold;font-size:9pt;padding:1 }
TD.main { color:red;text-decoration:none;font-weight:bold;font-size:12pt;padding-right:2 }
TD.user { color:black;text-decoration:bold;font-size:14;padding:0 }
TD.footer { background:#eeffdd;color:green;text-decoration:bold;font-size:14;padding:3 }
TD.editedby { background:#ffddcc;color:red;text-decoration:bold;font-size:9;padding:3 }
input.radio {background: #ddeedd; color:#000000}
INPUT {font-family:arial;font-size:15;font-weight:bold;color:black;background-color:#cccccc }
INPUT.submit {font-family:arial;font-size:13;font-weight:bold;color:black;background-color:#cccccc }
SELECT.submit {font-family:arial;font-size:11;font-weight:bold;color:black;background-color:#cccccc }
SELECT.insidetitle {font-family:arial;font-size:15;font-weight:bold;color:white;background-color:#777744; }
INPUT.small {font-family:arial;font-size:12;font-weight:bold;color:red;background=transparent }
TEXTAREA {font-family:arial;font-size:16;font-weight:bold;color:black;background-color:#ffffff }
SELECT {font-family:arial;font-size:11;font-weight:bold;color:black;background-color:#eeeedd }
CHECKBOX {background:transparent;font-family:arial;font-size:16;font-weight:bold;color:black }
A.tiny { color:darkgreen;text-decoration:none;font-weight:bold;font-size:7pt }
A.tiny:visited { color:darkgreen }
A.tiny:hover { color:red }


TD.logo {  background:#ffffff;color:midnightblue;vertical-align:top;padding-left:2;padding-right:2; }

TD.f1 { background:#ffffff;color:midnightblue;vertical-align:top;padding-left:2;padding-right:2;
	filter:alpha(opacity='.$opc.');
	-moz-opacity:0.'.$opc.'; 
	-khtml-opacity: 0.'.$opc.'; 
	opacity: 0.'.$opc.';
}
TD.f2ts { font-size:75%;background:#dddddd;color:midnightblue;text-align:center;vertical-align:center;padding-left:2;padding-right:2 }

SELECT.forumSelect { font-size:10;font-weight:bold;color:white;background-color:darkgreen; }
SELECT.timezoneSelect { font-size:10;font-weight:normal;color:black;background-color:orange; }
SELECT.styleSelect { font-size:10;font-weight:bold;color:white;background-color:darkgreen; }

TABLE.mainheader {  }
TABLE.menubar { }
TABLE.userbar { }
TABLE.footerbar { }
TABLE.optionsbar2 { background:#cbcbcb; }
TABLE.optionsbar { 
	background: url('.GURLGET.'sora/ikon/ktabbar2 ) repeat left 1px;
	background-color:#8b8b8b;
	text-align:center;
	vertical-align:middle;
	color:White;
	border-color:transparent;
	border-width:0px;
	border-style:solid;
	border-right-width:1px;
	padding-top:0px;
	padding-bottom:0px;
}
TABLE.topholder { }

TD.optionsbar_title { 
font-size:18; color:white; font-weight:bold; 
}

TD.advert 
{ 
background-color:white;
border-color:white;
border-width:2px;
border-style:outset; 
}
TD.optionsbar_menus 
{ 
text-align:center;
font-size:10px; color:black; font-weight:bold; background-color:#ebebcb;
padding-right:4px;
padding-left:4px;
border-color:white;
border-width:2px;
border-style:outset; 
vertical-align:middle;
}
TD.optionsbar_menus2 
{ 
text-align:center;
font-size:10; color:black; font-weight:bold; background-color:#ededed;
padding-right:2px;
padding-left:2px;
border-color:white;
border-width:2px;
border-style:outset; 
vertical-align:middle;
}

TD.topikons 
{ 
text-align:center;
font-size:10; color:black; font-weight:bold; 
padding-right:2px;
padding-left:2px;
vertical-align:top;
}


A.topikons { color:black;text-decoration:none;font-weight:bold; }
A.topikons:visited { color:black }
A.topikons:hover { color:red }

TD.toplogo 
{ 
text-align:right;
font-size:22; color:black; font-weight:bold; 
padding-right:2px;
padding-left:2px;
vertical-align:middle;
}


TD.extras 
{ 
text-align:center;
font-size:12; color:black; font-weight:bold; background-color:#dbdbdb;
padding-right:4px;
padding-left:4px;
border-color:white;
border-width:2px;
border-style:outset; 
vertical-align:middle;
}
TD.extras2 
{ 
text-align:center;
font-size:12; color:black; font-weight:bold; background-color:#ffeeee;
padding-right:2px;
padding-left:2px;
border-color:white;
border-width:2px;
border-style:outset; 
vertical-align:middle;
}


SELECT.optionsbar_select { font-size:12;font-weight:bold;color:black;background-color:#cbcbcb; }

TABLE.grid { background:gray; }
TABLE.maingrid {  }

TABLE.chatusers {  }
TD.chatusers { background:Transparent;text-align:center;padding:1px;font-size:11; }
TD.forumusers { background:Transparent;text-align:center;padding:1px;font-size:11; }
TD.chatusersholder { padding:3px; }
 
TD.surveyQuestion { padding-left:20;padding-right:20;font-size:22;font-weight:bold; color:white; background:black; text-align:center; }
TD.surveyResultText { padding-left:4;padding-right:4; background:#ffe4b5; font-size:15; color:#703200; text-align:right; }
TD.surveyResultTextVoted { padding-left:4;padding-right:4; background:#e4ffb5; font-size:15; color:#703200; text-align:right; }
TD.surveyResultNumber { padding-left:4;padding-right:4; background:#ffe4b5; font-size:20; color:red; text-align:center; }
TD.surveyResultPercentage { padding-left:4;padding-right:4; background:#ffe4b5; font-size:20; color:orange; text-align:center; }
TD.surveyHeader { background:red; text-size:10pt; color:white; text-align:center; }
TABLE.surveyTable { background:black; }

TD.userdetails_header { 
	background: url('.GURLGET.'sora/ikon/itabbar ) repeat left 1px;
	height:20px;
	text-align:center;
	padding-top:2;padding-bottom:2;
	padding-right:2;padding-left:2;
	color:yellow;
	border-color:transparent;
	border-width:0px;
	border-style:solid;
	border-top-width:0px;
	border-bottom-width:0px;
	font-size:14px;
	}

TD.userdetails_data { font-size:75%;background:#eeeedd;color:black;vertical-align:top;padding-left:2;padding-right:2 }

TD.userdetails_title { background:#eeeeaa;color:black;vertical-align:top;padding-left:2;padding-right:2 }


TD.optionheader { 
background:#666666; 
padding-left:2;padding-right:2; text-align:center;
border-width:1px; border-style:solid; 
border-color:threedhighlight threedshadow threedshadow threedhighlight;
color:white;
}

TD.optionheader_selected { 
background:#aa0000; 
padding-left:2;padding-right:2; text-align:center;
border-width:1px; border-style:solid; 
border-color:threedhighlight threedshadow threedshadow threedhighlight;
color:white;
}

input.optionheader_radio {background:transparent; color:#000000}

input.option_transparent {background:transparent; color:#000000}
TD.stats_h {background-color:gray;color:white;font-size:14;text-align:center;padding-right:4;padding-left:4; }
TD.stats_t {background-color:#bbbb66;color:#ededed;font-size:12;padding-left:6;padding-right:6; }
TD.stats_p {background-color:#ddddbb;color:red;font-size:14;padding-right:3;padding-left:3; }
TD.stats_g {background-color:#bbbb88;color:white;font-size:14;padding-right:3;padding-left:3; }
TD.stats_graph {background-color:#444400;text-align:right;}
TD.stats {background-color:#ffffcc;text-align:center;font-family:helvetica,arial;font-weight:bold;font-size:12;padding-right:3;padding-left:3;}
TD.stats_info {background-color:green;text-align:center;color:white;font-size:18;padding-top:3;padding-bottom:3;}
TD.stats_menu {text-align:right;vertical-align:middle;background-color:#ffffe0;
 font-weight:bold;font-size:12;color:red;padding-right:3;padding-left:3; 
 padding-top:2;padding-bottom:2;border-color:#aabbaa;
 border-width:1px;border-style:solid; }
TD.stats_menuCmd {text-align:right;vertical-align:middle;background-color:#e0ffff;
 font-weight:bold;font-size:12;color:red;padding-right:3;padding-left:3; 
 padding-top:2;padding-bottom:2;border-color:#aabbaa;
 border-width:1px;border-style:solid; }
TD.stats_menuSel {text-align:right;vertical-align:middle;background-color:#ffe0e0;
 font-weight:bold;font-size:12;color:red;padding-right:3;padding-left:3; 
 padding-top:2;padding-bottom:2;border-color:red;
 border-width:1px;border-style:solid; }
 a.topicons {
color:#fff;
}
 ';
 ?>
