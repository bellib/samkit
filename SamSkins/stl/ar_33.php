<?php

echo'
BODY {
	BACKGROUND-IMAGE: url('.GURLGET.'sora/ikon/iramadan);
	SCROLLBAR-HIGHLIGHT-COLOR: #aaddaa;
	SCROLLBAR-3DLIGHT-COLOR: #ddffdd;
	SCROLLBAR-ARROW-COLOR: white;
	SCROLLBAR-DARKSHADOW-COLOR: black;
	SCROLLBAR-BASE-COLOR: #43A03A;
}

A {color:black;text-decoration:none;font-weight:bold }
A.head { color:2B95EF;text-decoration:none;font-weight:bold;font-size:9pt }
A.head:visited { color:2B95EF }
.head {padding:0 0 0 32px; margin:0; list-style:none; height:35px; background:white url(tpl_img_green/menubg2.png); position:relative; border:0px ; border-bottom:0px solid white;}
.head li {float:right; background:url(tpl_img_green/menus_bg.gif); }
.head li a { float:left; height:35px; line-height:35px; color:white; text-decoration:none; font-size:12px; font-family:Tahoma, verdana, sans-serif; font-weight:bold; text-align:center; padding:0 0 0 8px; cursor:pointer;}
.head li a b {float:left; color:white; padding:0 16px 0 8px;}
.head li.current a {color:#97DA90;  background:url(tpl_img_green/menus_bghover.gif); cursor:pointer;}
.head li.current a b {color:#97DA90; background:url(tpl_img_green/menus_bghover.gif) no-repeat right top; cursor:pointer;}
.head li a:hover {color:#097DA90; background:url(tpl_img_green/menus_bghover.gif);}
.head li a:hover b {color:#97DA90; background:url(tpl_img_green/menus_bghover.gif) no-repeat right top;}
.head li.current a:hover {color:#0F4878; background:url(tpl_img_green/menus_bghover.gif); cursor:default;}
.head li.current a:hover b {background:url(tpl_img_green/menus_bghover.gif) no-repeat right top;}

.headerfr {
border: 0px solid;
background-image: url("../images/logos/logo_green.gif");
height:130px;
text-align: top ;
}
A {
	FONT-WEIGHT: bold;
	COLOR: black;
	TEXT-DECORATION: none
}
A:visited {
	FONT-WEIGHT: bold;
	COLOR: black;
	TEXT-DECORATION: none
}
A:hover {
	FONT-WEIGHT: bold;
	COLOR: red;
	TEXT-DECORATION: none
}
A.menu {
	FONT-WEIGHT: bold;
	COLOR: green;
	TEXT-DECORATION: none
}
A.menu:visited {
	COLOR: green
}
A.menu:hover {
	COLOR: orange
}
A.menu2 {
	FONT-WEIGHT: bold;
	FONT-SIZE: 9pt;
	COLOR: red;
	TEXT-DECORATION: none
}
A.menu2:visited {
	COLOR: red
}
A.menu2:hover {
	COLOR: orange
}
A.menu3 {
	FONT-WEIGHT: bold;
	FONT-SIZE: 9pt;
	COLOR: green;
	TEXT-DECORATION: none
}
A.menu3:visited {
	COLOR: green
}
A.menu3:hover {
	COLOR: red
}
A.menu_admin {
	FONT-WEIGHT: bold;
	FONT-SIZE: 9pt;
	COLOR: white;
	TEXT-DECORATION: none
}
A.menu_admin:visited {
	COLOR: white
}
A.menu_admin:hover {
	COLOR: red
}
A.tiny {
	FONT-WEIGHT: bold;
	FONT-SIZE: 7pt;
	COLOR: darkgreen;
	TEXT-DECORATION: none
}
A.tiny:visited {
	COLOR: darkgreen
}
A.tiny:hover {
	COLOR: red
}
TABLE.mods {
	FONT-SIZE: 75%;
	COLOR: orange;
	TEXT-ALIGN: right
}
TABLE.editedby {
	BACKGROUND: red
}
TABLE.mainheader {

}
TABLE.menubar {

}
TABLE.userbar {

}
TABLE.footerbar {
	BACKGROUND: white
}
TABLE.optionsbar {
	BORDER-RIGHT: white 2px outset;
	BORDER-TOP: white 2px outset;
	BACKGROUND: #428339;
	BORDER-LEFT: white 2px outset;
	BORDER-BOTTOM: white 2px outset
}
TABLE.optionsbar2 {
	BACKGROUND: green
}
TABLE.grid {
	BACKGROUND: gray
}
TABLE.surveyTable {
	BACKGROUND: black
}
TABLE.chatusers {
	BACKGROUND: #cceecc
}
TR.normal {
	BACKGROUND-COLOR: #ECF7EB
}
TR.fixed {
	BACKGROUND-COLOR: #B0DCAC
}
TR.deleted {
	BACKGROUND-COLOR: #99BB9A
}
TR.unmoderated {
	BACKGROUND-COLOR: #DFFFDD
}
TR.freezed {
	BACKGROUND-COLOR: #ffaaaa
}
TR.lastposter {
	BACKGROUND-COLOR: #cccccc
}
TR.highlighted {
	BACKGROUND-COLOR: #f2c2c2
}
TD.normal {
	BACKGROUND-COLOR: #DDDDDD
}
TD.r_notop {
        PADDING-RIGHT: 2px;
	PADDING-LEFT: 2px;
        padding-top: 10px;
	BACKGROUND-IMAGE: url(r_top.gif);
	BACKGROUND-COLOR: #dddddd
}
TD.fixed {
	BACKGROUND-COLOR: #C9EBCC
}
TD.r_top {
        PADDING-RIGHT: 2px;
	PADDING-LEFT: 2px;
        padding-top: 10px;
	BACKGROUND-IMAGE: url(r_top.gif);
	BACKGROUND-COLOR: #C9EBCC
}
TD.deleted {
	BACKGROUND-COLOR: #ACDDAA
}
TD.first {
	BACKGROUND-COLOR: #D4F1D3
}
TD.unmoderated {
	BACKGROUND-COLOR: #DDFFE6
}
TD.freezed {
	BACKGROUND-COLOR: #ffaaaa
}
TD.lastposter {
	BACKGROUND-COLOR: #cccccc
}
TD {
	FONT-WEIGHT: bold;
	FONT-SIZE: 100%;
	COLOR: darkgreen;
	FONT-FAMILY: Helvetica,Arial
}
TD.list {
	PADDING-RIGHT: 4px;
	PADDING-LEFT: 2px;
	VERTICAL-ALIGN: center;
	COLOR: midnightgreen
}
TD.list_center {
	PADDING-RIGHT: 2px;
	PADDING-LEFT: 2px;
	COLOR: midnightgreen;
	TEXT-ALIGN: center
}
TD.list_date {
	PADDING-RIGHT: 2px;
	PADDING-LEFT: 2px;
	FONT-SIZE: 75%;
	COLOR: red;
	TEXT-ALIGN: center
}
TD.list_small {
	PADDING-RIGHT: 2px;
	PADDING-LEFT: 2px;
	FONT-SIZE: 75%;
	COLOR: midnightgreen;
	TEXT-ALIGN: center
}
TD.list_small2 {
	PADDING-RIGHT: 2px;
	PADDING-LEFT: 2px;
	FONT-SIZE: 75%;
	BACKGROUND: #eeffee;
	COLOR: midnightgreen;
	TEXT-ALIGN: center
}
TD.list_names {
	PADDING-RIGHT: 4px;
	PADDING-LEFT: 2px;
	FONT-SIZE: 75%;
	COLOR: gray;
	TEXT-ALIGN: right
}
TD.list_email {
	PADDING-RIGHT: 2px;
	PADDING-LEFT: 2px;
	FONT-SIZE: 66%;
	COLOR: black;
	TEXT-ALIGN: center
}
TD.list_options {
	PADDING-RIGHT: 4px;
	PADDING-LEFT: 4px;
	BACKGROUND: #ccffcc;
	PADDING-BOTTOM: 4px;
	COLOR: midnightgreen;
	PADDING-TOP: 4px;
	TEXT-ALIGN: center
}
TD.posticon {
	BORDER-RIGHT: buttonshadow 1px solid;
	PADDING-RIGHT: 2px;
	BORDER-TOP: buttonhighlight 1px solid;
	PADDING-LEFT: 2px;
	FONT-SIZE: 10px;
	BACKGROUND: none transparent scroll repeat 0% 0%;
	VERTICAL-ALIGN: middle;
	BORDER-LEFT: buttonhighlight 1px solid;
	COLOR: menutext;
	BORDER-BOTTOM: buttonshadow 1px solid;
	TEXT-ALIGN: center
}
TD.menu {
	PADDING-RIGHT: 2px;
	PADDING-LEFT: 2px;
	FONT-SIZE: 9pt;
	PADDING-BOTTOM: 0px;
	COLOR: black;
	PADDING-TOP: 0px;
	TEXT-ALIGN: center;
	valign: bottom
}
TD.menu_out {
	PADDING-RIGHT: 3px;
	PADDING-LEFT: 3px;
	FONT-SIZE: 9pt;
	BACKGROUND: #660000;
	PADDING-BOTTOM: 3px;
	COLOR: white;
	PADDING-TOP: 3px
}
TD.menu_admin {
	PADDING-RIGHT: 3px;
	PADDING-LEFT: 3px;
	FONT-SIZE: 9pt;
	PADDING-BOTTOM: 3px;
	PADDING-TOP: 3px
}
TD.menu0 {
	PADDING-RIGHT: 1px;
	PADDING-LEFT: 1px;
	FONT-WEIGHT: bold;
	FONT-SIZE: 9pt;
	PADDING-BOTTOM: 1px;
	COLOR: white;
	PADDING-TOP: 1px;
	TEXT-DECORATION: none
}
TD.main {
	PADDING-RIGHT: 2px;
	FONT-WEIGHT: bold;
	FONT-SIZE: 12pt;
	COLOR: red;
	TEXT-DECORATION: none
}
TD.logo {

	background: none repeat scroll 0 0 #E8F7E8;
}
TD.user {
	PADDING-RIGHT: 0px;
	PADDING-LEFT: 0px;
	FONT-SIZE: 14px;
	PADDING-BOTTOM: 0px;
	COLOR: black;
	PADDING-TOP: 0px
}
TD.footer {
	PADDING-RIGHT: 3px;
	PADDING-LEFT: 3px;
	FONT-SIZE: 14px;
	BACKGROUND: #E4FFCC;
	PADDING-BOTTOM: 3px;
	COLOR: green;
	PADDING-TOP: 3px
}
TD.editedby {
	PADDING-RIGHT: 3px;
	PADDING-LEFT: 3px;
	FONT-SIZE: 9px;
	BACKGROUND: #ffddcc;
	PADDING-BOTTOM: 3px;
	COLOR: red;
	PADDING-TOP: 3px
}
TD.chatusers {
	PADDING-RIGHT: 1px;
	PADDING-LEFT: 1px;
	FONT-SIZE: 11px;
	BACKGROUND: #ddffdd;
	PADDING-BOTTOM: 1px;
	PADDING-TOP: 1px;
	TEXT-ALIGN: center
}
TD.forumusers {
	PADDING-RIGHT: 1px;
	PADDING-LEFT: 1px;
	FONT-SIZE: 11px;
	BACKGROUND: #bbddbb;
	PADDING-BOTTOM: 1px;
	PADDING-TOP: 1px;
}
TD.chatusersholder {
	PADDING-RIGHT: 3px;
	PADDING-LEFT: 3px;
	PADDING-BOTTOM: 3px;
	PADDING-TOP: 3px
}
TD.surveyQuestion {
	PADDING-RIGHT: 20px;
	PADDING-LEFT: 20px;
	FONT-WEIGHT: bold;
	FONT-SIZE: 22px;
	BACKGROUND: black;
	COLOR: white;
	TEXT-ALIGN: center
}
TD.surveyResultText {
	PADDING-RIGHT: 4px;
	PADDING-LEFT: 4px;
	FONT-SIZE: 15px;
	BACKGROUND: #ffe4b5;
	COLOR: #703200;
	TEXT-ALIGN: right
}
TD.surveyResultTextVoted {
	PADDING-RIGHT: 4px;
	PADDING-LEFT: 4px;
	FONT-SIZE: 15px;
	BACKGROUND: #e4ffb5;
	COLOR: #703200;
	TEXT-ALIGN: right
}
TD.surveyResultNumber {
	PADDING-RIGHT: 4px;
	PADDING-LEFT: 4px;
	FONT-SIZE: 20px;
	BACKGROUND: #ffe4b5;
	COLOR: red;
	TEXT-ALIGN: center
}
TD.surveyResultPercentage {
	PADDING-RIGHT: 4px;
	PADDING-LEFT: 4px;
	FONT-SIZE: 20px;
	BACKGROUND: #ffe4b5;
	COLOR: orange;
	TEXT-ALIGN: center
}
TD.surveyHeader {
	BACKGROUND: red;
	COLOR: white;
	TEXT-ALIGN: center;
	text-size: 10pt
}
TD.userdetails_header {
 background:#437C17;
 color:white;
 padding-left:2;
 padding-right:2

 }

TD.userdetails_title {
	PADDING-RIGHT: 2px;
	PADDING-LEFT: 2px;
	BACKGROUND: #8DE67E;
	VERTICAL-ALIGN: top;
	COLOR: black
}
TD.userdetails_data {
	PADDING-RIGHT: 2px;
	PADDING-LEFT: 2px;
	BACKGROUND: #ACE9AD;
	VERTICAL-ALIGN: top;
	COLOR: black
}
TD.optionheader {
	BORDER-RIGHT: buttonshadow 1px solid;
	PADDING-RIGHT: 2px;
	BORDER-TOP: buttonhighlight 1px solid;
	PADDING-LEFT: 2px;
	BACKGROUND: #2CDB28;
	BORDER-LEFT: buttonhighlight 1px solid;
	COLOR: white;
	BORDER-BOTTOM: buttonshadow 1px solid;
	TEXT-ALIGN: center
}
TD.optionheader_selected {
	BORDER-RIGHT: buttonshadow 1px solid;
	PADDING-RIGHT: 2px;
	BORDER-TOP: buttonhighlight 1px solid;
	PADDING-LEFT: 2px;
	BACKGROUND: #0CAA00;
	BORDER-LEFT: buttonhighlight 1px solid;
	COLOR: white;
	BORDER-BOTTOM: buttonshadow 1px solid;

TEXT-ALIGN: center
}
TD.stats_h {
	PADDING-RIGHT: 4px;
	PADDING-LEFT: 4px;
	FONT-SIZE: 14px;
	COLOR: white;
	BACKGROUND-COLOR: gray;
	TEXT-ALIGN: center
}
TD.stats_t {
	PADDING-RIGHT: 6px;
	PADDING-LEFT: 6px;
	FONT-SIZE: 12px;
	BACKGROUND-COLOR: #66BB6A
}
TD.stats_p {
	PADDING-RIGHT: 3px;
	PADDING-LEFT: 3px;
	FONT-SIZE: 14px;
	BACKGROUND-COLOR: #BBDDBD
}
TD.stats_g {
	PADDING-RIGHT: 3px;
	PADDING-LEFT: 3px;
	FONT-SIZE: 14px;
	COLOR: white;
	BACKGROUND-COLOR: #88BB8A
}
TD.stats_graph {
	BACKGROUND-COLOR: #004406;
	TEXT-ALIGN: right
}
TD.stats {
	PADDING-RIGHT: 3px;
	PADDING-LEFT: 3px;
	FONT-WEIGHT: bold;
	FONT-SIZE: 12px;
	FONT-FAMILY: helvetica,arial;
	BACKGROUND-COLOR: #D1F2CB;
	TEXT-ALIGN: center
}
TD.stats_info {
	FONT-SIZE: 18px;
	PADDING-BOTTOM: 3px;
	COLOR: white;
	PADDING-TOP: 3px;
	BACKGROUND-COLOR: #89BB88;
	TEXT-ALIGN: center
}
TD.stats_menu {
	BORDER-RIGHT: #ABD2AE 1px solid;
	PADDING-RIGHT: 3px;
	BORDER-TOP: #ABD2AE 1px solid;
	PADDING-LEFT: 3px;
	FONT-WEIGHT: bold;
	FONT-SIZE: 10px;
	PADDING-BOTTOM: 2px;
	VERTICAL-ALIGN: middle;
	BORDER-LEFT: #ABD2AE 1px solid;
	COLOR: green;
                TEXT-ALIGN: center
	PADDING-TOP: 2px;
	BORDER-BOTTOM: #ABD2AE 1px solid;
	BACKGROUND-COLOR: #E6FAE4; TEXT-ALIGN: right
}
/*----------------------------------------*/
TD.stats_red {
	BORDER-RIGHT: red 1px solid; PADDING-RIGHT: 3px; BORDER-TOP: red 1px solid; PADDING-LEFT: 3px; FONT-WEIGHT: bold; FONT-SIZE: 11px; PADDING-BOTTOM: 2px; VERTICAL-ALIGN: middle;
	BORDER-LEFT: red 1px solid; COLOR: red; TEXT-ALIGN: centerPADDING-TOP: 2px; BORDER-BOTTOM: red 1px solid; BACKGROUND-COLOR: #FFEDED; TEXT-ALIGN: center
}
TD.stats_orange {
	BORDER-RIGHT: orange 1px solid; PADDING-RIGHT: 3px; BORDER-TOP: orange 1px solid; PADDING-LEFT: 3px; FONT-WEIGHT: bold; FONT-SIZE: 11px; PADDING-BOTTOM: 2px; VERTICAL-ALIGN: middle;
	BORDER-LEFT: orange 1px solid; COLOR: orange; TEXT-ALIGN: centerPADDING-TOP: 2px; BORDER-BOTTOM: orange 1px solid; BACKGROUND-COLOR: #FFF2D1; TEXT-ALIGN: center
}
TD.stats_green {
	BORDER-RIGHT: green 1px solid; PADDING-RIGHT: 3px; BORDER-TOP: green 1px solid; PADDING-LEFT: 3px; FONT-WEIGHT: bold; FONT-SIZE: 11px; PADDING-BOTTOM: 2px; VERTICAL-ALIGN: middle;
	BORDER-LEFT: green 1px solid; COLOR: green; TEXT-ALIGN: centerPADDING-TOP: 2px; BORDER-BOTTOM: green 1px solid; BACKGROUND-COLOR: #D1D9FF; TEXT-ALIGN: center
}
TD.stats_green {
	BORDER-RIGHT: green 1px solid; PADDING-RIGHT: 3px; BORDER-TOP: green 1px solid; PADDING-LEFT: 3px; FONT-WEIGHT: bold; FONT-SIZE: 11px; PADDING-BOTTOM: 2px; VERTICAL-ALIGN: middle;
	BORDER-LEFT: green 1px solid; COLOR: green; TEXT-ALIGN: centerPADDING-TOP: 2px; BORDER-BOTTOM: green 1px solid; BACKGROUND-COLOR: #D1FFD6; TEXT-ALIGN: center
}

/*----------------------------------------*/
TD.stats_menuSel {
	BORDER-RIGHT: red 1px solid;
	PADDING-RIGHT: 3px;
	BORDER-TOP: red 1px solid;
	PADDING-LEFT: 3px;
	FONT-WEIGHT: bold;
	FONT-SIZE: 12px;
	PADDING-BOTTOM: 2px;
	VERTICAL-ALIGN: middle;
	BORDER-LEFT: red 1px solid;
	COLOR: red;
	PADDING-TOP: 2px;
	BORDER-BOTTOM: red 1px solid;
	BACKGROUND-COLOR: #ffe0e0;
	TEXT-ALIGN: right
}
TD.stats_menuCmd {
	BORDER-RIGHT: green 1px solid;
	PADDING-RIGHT: 3px;
	BORDER-TOP: green 1px solid;
	PADDING-LEFT: 3px;
	FONT-WEIGHT: bold;
	FONT-SIZE: 12px;
	PADDING-BOTTOM: 2px;
	VERTICAL-ALIGN: middle;
	BORDER-LEFT: green 1px solid;
	COLOR: green;
	PADDING-TOP: 2px;
	BORDER-BOTTOM: green 1px solid;
	BACKGROUND-COLOR: #e0e0ff;
	TEXT-ALIGN: right
}
TD.advert {
	BORDER-RIGHT: white 2px outset;
	BORDER-TOP: white 2px outset;
	BORDER-LEFT: white 2px outset;
	BORDER-BOTTOM: white 2px outset;
	BACKGROUND-COLOR: white
}
TD.optionsbar_title {
	FONT-WEIGHT: bold;
	FONT-SIZE: 18px;
	COLOR: white
}
TD.optionsbar_menus {
	BORDER-RIGHT: white 2px outset;
	PADDING-RIGHT: 4px;
	BORDER-TOP: white 2px outset;
	PADDING-LEFT: 4px;
	FONT-WEIGHT: bold;
	FONT-SIZE: 10px;
	VERTICAL-ALIGN: middle;
	BORDER-LEFT: white 2px outset;
	COLOR: black;
	BORDER-BOTTOM: white 2px outset;
	BACKGROUND-COLOR: #cceecc;
	TEXT-ALIGN: center
}
TD.optionsbar_menus2 {
	BORDER-RIGHT: white 2px outset;
	PADDING-RIGHT: 2px;
	BORDER-TOP: white 2px outset;
	PADDING-LEFT: 2px;
	FONT-WEIGHT: bold;
	FONT-SIZE: 10px;
	VERTICAL-ALIGN: middle;
	BORDER-LEFT: white 2px outset;
	COLOR: black;
	BORDER-BOTTOM: white 2px outset;
	BACKGROUND-COLOR: #eeffee;
	TEXT-ALIGN: center
}
TD.extras { text-align:center; font-size:12; color:black; font-weight:bold; background-color:#cceecc; padding-right:4px; padding-left:4px; border-color:white; border-width:2px; border-style:outset; vertical-align:middle; }
TD.extras2 {
	BORDER-RIGHT: white 2px outset;
	PADDING-RIGHT: 2px;
	BORDER-TOP: white 2px outset;
	PADDING-LEFT: 2px;
	FONT-WEIGHT: bold;
	FONT-SIZE: 12px;
	VERTICAL-ALIGN: middle;
	BORDER-LEFT: white 2px outset;
	COLOR: black;
	BORDER-BOTTOM: white 2px outset;
	BACKGROUND-COLOR: #ffeeee;
	TEXT-ALIGN: center
}
TD.cat {
	BORDER-RIGHT: buttonshadow 1px solid;
	PADDING-RIGHT: 2px;
	BORDER-TOP: buttonhighlight 1px solid;
	PADDING-LEFT: 2px;
	BACKGROUND: #317731;
	BORDER-LEFT: buttonhighlight 1px solid;
	COLOR: white;
	BORDER-BOTTOM: buttonshadow 1px solid;
	TEXT-ALIGN: center
}
TD.h {
	BORDER-RIGHT: buttonshadow 1px solid;
	PADDING-RIGHT: 2px;
	BORDER-TOP: buttonhighlight 1px solid;
	PADDING-LEFT: 2px;
	BACKGROUND: #317731;
	BORDER-LEFT: buttonhighlight 1px solid;
	COLOR: white;
	BORDER-BOTTOM: buttonshadow 1px solid;
}
TD.f1 {
	PADDING-RIGHT: 2px;
	PADDING-LEFT: 2px;
	BACKGROUND: #E8F7E8;
	VERTICAL-ALIGN: center;
	COLOR: midnightgreen
}
TD.f1m {
	PADDING-RIGHT: 2px;
	PADDING-LEFT: 2px;
	FONT-SIZE: 75%;
	BACKGROUND: #CEEACE;
	COLOR: midnightgreen
}
TD.f2ts {
	PADDING-RIGHT: 2px;
	PADDING-LEFT: 2px;
	FONT-SIZE: 75%;
	BACKGROUND: #D7E9D7;
	COLOR: midnightgreen;
	TEXT-ALIGN: center
}
INPUT {
	FONT-WEIGHT: bold;
	FONT-SIZE: 15px;
	BACKGROUND: #DFFFDD;
	COLOR: black;
	FONT-FAMILY: arial
}
INPUT.submit {
	FONT-WEIGHT: bold;
	FONT-SIZE: 13px;
	BACKGROUND: #DDFFDD;
	COLOR: black;
	FONT-FAMILY: arial
}
INPUT.log {
	FONT-WEIGHT: bold;
	FONT-SIZE: 13px;
	BACKGROUND: #eeffee;
	COLOR: black;
	FONT-FAMILY: arial
}
INPUT.small {
	FONT-WEIGHT: bold;
	FONT-SIZE: 12px;
	BACKGROUND: none transparent scroll repeat 0% 0%;
	COLOR: red;
	FONT-FAMILY: arial
}
TEXTAREA {
	FONT-WEIGHT: bold;
	FONT-SIZE: 16px;
	BACKGROUND: #E4F5E5;
	COLOR: black;
	FONT-FAMILY: arial
}
SELECT.insidetitle {font-family:arial;font-size:15;font-weight:bold;color:white;background=#437C17; }

SELECT {
	FONT-WEIGHT: bold;
	FONT-SIZE: 11px;
	BACKGROUND: #C8E0CB;
	COLOR: black;
	FONT-FAMILY: arial
}
SELECT.forumSelect {
	FONT-WEIGHT: bold;
	FONT-SIZE: 11px;
	BACKGROUND: #D8E9D8;
	COLOR: black;
	FONT-FAMILY: arial
}
SELECT.timezoneSelect {
	FONT-WEIGHT: normal;
	FONT-SIZE: 10px;
	COLOR: black;
	BACKGROUND-COLOR: orange
}
SELECT.styleSelect {
	FONT-WEIGHT: bold;
	FONT-SIZE: 10px;
	COLOR: white;
	BACKGROUND-COLOR: darkgreen
}
SELECT.optionsbar_select {
	FONT-WEIGHT: bold;
	FONT-SIZE: 12px;
	COLOR: black;
	BACKGROUND-COLOR: #CDEECC
}
FONT.online{
	COLOR: red;
}
TABLE.tborder{background: #e2e1ea;color: #000000;font: bold 15px arial, verdana, tahoma;border: 1px solid #F5F5FF;}
small{font-size:10px;}
';
 ?>