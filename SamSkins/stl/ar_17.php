<?php
echo'
BODY { 
SCROLLBAR-ARROW-COLOR: white; SCROLLBAR-DARKSHADOW-COLOR: black; SCROLLBAR-BASE-COLOR: #437c17; background: #E8FFE8;
scrollbar-highlight-color:#aaddaa; scrollbar-3dlight-color:#ddffdd;
}
 
SPAN.test_ok{
background-color:#CCFFCC; color:#336600; font-size:12px; FONT-FAMILY:tahoma; border: 1px solid #336600; HEIGHT: 20;
}
SPAN.test_faild{
background-color:#ffdccC; color:#990000; font-size:12px; FONT-FAMILY:tahoma; border: 1px solid #990000; HEIGHT: 20
}
IMG.java{
	CURSOR: pointer; border : 0
}
A {
	COLOR: black; FONT-WEIGHT: bold; TEXT-DECORATION: none
}
A:visited {
	COLOR: black; FONT-WEIGHT: bold; TEXT-DECORATION: none
}
A:hover {
	COLOR: red; FONT-WEIGHT: bold; TEXT-DECORATION: none
}
A.menu {
	COLOR: green; FONT-SIZE: 9pt; FONT-WEIGHT: bold; TEXT-DECORATION: none
}
A.menu:visited {
	COLOR: green
}
A.menu:hover {
	COLOR: orange
}
A.menu2 {
	COLOR: red; FONT-SIZE: 9pt; FONT-WEIGHT: bold; TEXT-DECORATION: none
}
A.menu2:visited {
	COLOR: red
}
A.menu2:hover {
	COLOR: orange
}
A.menu3 {
	COLOR: green; FONT-SIZE: 9pt; FONT-WEIGHT: bold; TEXT-DECORATION: none
}
A.menu3:visited {
	COLOR: green
}
A.menu3:hover {
	COLOR: red
}
A.menu_admin {
	COLOR: white; FONT-SIZE: 9pt; FONT-WEIGHT: bold; TEXT-DECORATION: none
}
A.menu_admin:visited {
	COLOR: white
}
A.menu_admin:hover {
	COLOR: red
}
TABLE.mods {
	TEXT-ALIGN: right; COLOR: orange; FONT-SIZE: 75%
}
TR.normal {
	BACKGROUND-COLOR: #ffffec
}
TR.fixed {
	BACKGROUND-COLOR: #ddefdd
}
TR.deleted {
	BACKGROUND-COLOR: #99bb99
}
TR.lastposter {
	BACKGROUND-COLOR: #cccccc
}
TR.highlighted {
	BACKGROUND-COLOR: #f2c2c2
}
TD {
	FONT-FAMILY: Helvetica,Arial; COLOR: #005500; FONT-SIZE: 100%; FONT-WEIGHT: bold
}
TD.cat {
	BORDER-BOTTOM: buttonshadow 1px solid; BORDER-LEFT: buttonhighlight 1px solid; TEXT-ALIGN: center; PADDING-LEFT: 2px; PADDING-RIGHT: 2px; BACKGROUND: #437c17; COLOR: white; BORDER-TOP: buttonhighlight 1px solid; BORDER-RIGHT: buttonshadow 1px solid
}
TD.list {
	PADDING-LEFT: 2px; PADDING-RIGHT: 4px; COLOR: midnightblue; VERTICAL-ALIGN: top
}
TD.list_avater {
	PADDING-LEFT: 2px; PADDING-RIGHT: 4px; COLOR: midnightblue
}
TD.fixed {
	BACKGROUND-COLOR: #ffffdd
}
TD.list_center {
	TEXT-ALIGN: center; PADDING-LEFT: 2px; PADDING-RIGHT: 2px; COLOR: midnightblue
}
TD.list_date {
	TEXT-ALIGN: center; PADDING-LEFT: 2px; PADDING-RIGHT: 2px; COLOR: red; FONT-SIZE: 75%
}
TD.list_small {
	TEXT-ALIGN: center; PADDING-LEFT: 2px; PADDING-RIGHT: 2px; COLOR: midnightblue; FONT-SIZE: 75%
}
TD.list_small2 {
	TEXT-ALIGN: center; PADDING-LEFT: 2px; PADDING-RIGHT: 2px; BACKGROUND: #eeffee; COLOR: midnightblue; FONT-SIZE: 75%
}
TD.list_names {
	TEXT-ALIGN: right; PADDING-LEFT: 2px; PADDING-RIGHT: 4px; COLOR: gray; FONT-SIZE: 75%
}
TD.list_email {
	TEXT-ALIGN: center; PADDING-LEFT: 2px; PADDING-RIGHT: 2px; COLOR: black; FONT-SIZE: 66%
}
TD.list_options {
	TEXT-ALIGN: center; PADDING-BOTTOM: 4px; PADDING-LEFT: 4px; PADDING-RIGHT: 4px; BACKGROUND: #ddefdd; COLOR: midnightblue; PADDING-TOP: 4px
}
TD.h {
	BORDER-BOTTOM: buttonshadow 1px solid; TEXT-ALIGN: center; BORDER-LEFT: buttonhighlight 1px solid; PADDING-LEFT: 2px; PADDING-RIGHT: 2px; BACKGROUND: #437c17; COLOR: white; BORDER-TOP: buttonhighlight 1px solid; BORDER-RIGHT: buttonshadow 1px solid
}
TD.posticon {
	BORDER-BOTTOM: buttonshadow 1px solid; TEXT-ALIGN: center; BORDER-LEFT: buttonhighlight 1px solid; PADDING-LEFT: 2px; PADDING-RIGHT: 2px; BACKGROUND: none transparent scroll repeat 0% 0%; COLOR: menutext; FONT-SIZE: 10px; VERTICAL-ALIGN: middle; BORDER-TOP: buttonhighlight 1px solid; BORDER-RIGHT: buttonshadow 1px solid
}
TD.menu {
	TEXT-ALIGN: center; PADDING-BOTTOM: 0px; PADDING-LEFT: 2px; PADDING-RIGHT: 2px; COLOR: black; FONT-SIZE: 9pt; PADDING-TOP: 0px; valign: bottom
}
TD.menu_out {
	PADDING-BOTTOM: 3px; PADDING-LEFT: 3px; PADDING-RIGHT: 3px; BACKGROUND: #660000; COLOR: white; FONT-SIZE: 9pt; PADDING-TOP: 3px
}
TD.menu_admin {
	PADDING-BOTTOM: 3px; PADDING-LEFT: 3px; PADDING-RIGHT: 3px; FONT-SIZE: 9pt; PADDING-TOP: 3px
}
TD.menu0 {
	PADDING-BOTTOM: 1px; PADDING-LEFT: 1px; PADDING-RIGHT: 1px; COLOR: white; FONT-SIZE: 9pt; FONT-WEIGHT: bold; TEXT-DECORATION: none; PADDING-TOP: 1px
}
TD.main {
	PADDING-RIGHT: 2px; COLOR: red; FONT-SIZE: 12pt; FONT-WEIGHT: bold; TEXT-DECORATION: none
}
TD.duplicate {
	PADDING-LEFT: 10px; PADDING-RIGHT: 15px; PADDING-BOTTOM: 10px; PADDING-TOP: 15px; BACKGROUND: #eeffee
}
TD.logo {
   BACKGROUND:    #ffffec;
}
TD.user {
	PADDING-BOTTOM: 0px; PADDING-LEFT: 0px; PADDING-RIGHT: 0px; COLOR: black; FONT-SIZE: 14px; PADDING-TOP: 0px
}
TD.footer {
	PADDING-BOTTOM: 3px; PADDING-LEFT: 3px; PADDING-RIGHT: 3px; BACKGROUND: #ffffec; COLOR: green; FONT-SIZE: 14px; PADDING-TOP: 3px
}
TD.editedby {
	PADDING-BOTTOM: 3px; PADDING-LEFT: 3px; PADDING-RIGHT: 3px; BACKGROUND: #ffddcc; COLOR: red; FONT-SIZE: 9px; PADDING-TOP: 3px
}
div.msg_register{
position:absolute; border: 1px solid black; padding: 4px; background-color: white; visibility: hidden; z-index: 0;
}
div.stat_register{
border: 1px solid black; padding: 0px; background-color: #dfffdd; width: 250px;
}
INPUT.radio {
	BACKGROUND: #ddefdd; COLOR: #000000
}
INPUT {
	FONT-FAMILY: arial; BACKGROUND: #ddefdd; COLOR: black; FONT-SIZE: 15px; FONT-WEIGHT: bold
}
INPUT.submit {
	FONT-FAMILY: arial; BACKGROUND: #ddefdd; COLOR: black; FONT-SIZE: 13px; FONT-WEIGHT: bold
}
SELECT.submit {
	FONT-FAMILY: arial; BACKGROUND: #ddefdd; COLOR: black; FONT-SIZE: 11px; FONT-WEIGHT: bold
}
SELECT.insidetitle {
	FONT-FAMILY: arial; BACKGROUND: #437c17; COLOR: white; FONT-SIZE: 15px; FONT-WEIGHT: bold
}
INPUT.small {
	FONT-FAMILY: arial; BACKGROUND: none transparent scroll repeat 0% 0%; COLOR: red; FONT-SIZE: 12px; FONT-WEIGHT: bold
}
TEXTAREA {
	FONT-FAMILY: arial; BACKGROUND: #ffffec; COLOR: black; FONT-SIZE: 16px; FONT-WEIGHT: bold
}
SELECT {
	FONT-FAMILY: arial; BACKGROUND: #ffffec; COLOR: black; FONT-SIZE: 11px; FONT-WEIGHT: bold
}
CHECKBOX {
	FONT-FAMILY: arial; BACKGROUND: none transparent scroll repeat 0% 0%; COLOR: black; FONT-SIZE: 16px; FONT-WEIGHT: bold
}
A.tiny {
	COLOR: #667c26; FONT-SIZE: 7pt; FONT-WEIGHT: bold; TEXT-DECORATION: none
}
A.tiny:visited {
	COLOR: #667c26
}
A.tiny:hover {
	COLOR: red
}
TD.f1 {
	PADDING-LEFT: 2px; PADDING-RIGHT: 2px; BACKGROUND: #ffffec; COLOR: midnightblue; VERTICAL-ALIGN: top
}
TD.f2ts {
	TEXT-ALIGN: center; PADDING-LEFT: 2px; PADDING-RIGHT: 2px; BACKGROUND: #ddefdd; COLOR: midnightblue; FONT-SIZE: 75%
}
SELECT.forumSelect {
	BACKGROUND-COLOR: #115422; COLOR: white; FONT-SIZE: 10px; FONT-WEIGHT: bold
}
SELECT.timezoneSelect {
	BACKGROUND-COLOR: #d4a017; COLOR: black; FONT-SIZE: 10px; FONT-WEIGHT: normal
}
SELECT.styleSelect {
	BACKGROUND-COLOR: #115422; COLOR: white; FONT-SIZE: 10px; FONT-WEIGHT: bold
}
TABLE.topholder {
	
}
TABLE.mainheader {
	BACKGROUND: white
}
TABLE.menubar {
	
}
TABLE.userbar {
	
}
TABLE.footerbar {
	BACKGROUND: white
}
TABLE.optionsbar2 {
	BACKGROUND: #c5e693
}
TABLE.optionsbar {
	BORDER-BOTTOM: white 2px outset; BORDER-LEFT: white 2px outset; BACKGROUND: #437c17; BORDER-TOP: white 2px outset; BORDER-RIGHT: white 2px outset
}
TD.optionsbar_title {
	COLOR: white; FONT-SIZE: 18px; FONT-WEIGHT: bold
}
TD.advert {
	BORDER-BOTTOM: white 2px outset; BORDER-LEFT: white 2px outset; BACKGROUND-COLOR: white; BORDER-TOP: white 2px outset; BORDER-RIGHT: white 2px outset
}
TD.optionsbar_menus {
	BORDER-BOTTOM: white 2px outset; TEXT-ALIGN: center; BORDER-LEFT: white 2px outset; BACKGROUND-COLOR: #c5e693; PADDING-LEFT: 4px; PADDING-RIGHT: 4px; COLOR: black; FONT-SIZE: 10px; VERTICAL-ALIGN: middle; BORDER-TOP: white 2px outset; FONT-WEIGHT: bold; BORDER-RIGHT: white 2px outset
}
TD.optionsbar_menus2 {
	BORDER-BOTTOM: white 2px outset; TEXT-ALIGN: center; BORDER-LEFT: white 2px outset; BACKGROUND-COLOR: #ffffec; PADDING-LEFT: 2px; PADDING-RIGHT: 2px; COLOR: black; FONT-SIZE: 10px; VERTICAL-ALIGN: middle; BORDER-TOP: white 2px outset; FONT-WEIGHT: bold; BORDER-RIGHT: white 2px outset
}
TD.optionsbar_menus3 {
	BORDER-BOTTOM: white 2px outset; TEXT-ALIGN: center; BORDER-LEFT: white 2px outset; BACKGROUND-COLOR: #ccffcc; PADDING-LEFT: 2px; PADDING-RIGHT: 2px; COLOR: black; FONT-SIZE: 10px; VERTICAL-ALIGN: middle; BORDER-TOP: white 2px outset; FONT-WEIGHT: bold; BORDER-RIGHT: white 2px outset
}
TD.extras {
	BORDER-BOTTOM: white 2px outset; TEXT-ALIGN: center; BORDER-LEFT: white 2px outset; BACKGROUND-COLOR: #c5e693; PADDING-LEFT: 4px; PADDING-RIGHT: 4px; COLOR: black; FONT-SIZE: 12px; VERTICAL-ALIGN: middle; BORDER-TOP: white 2px outset; FONT-WEIGHT: bold; BORDER-RIGHT: white 2px outset
}
TD.extras2 {
	BORDER-BOTTOM: white 2px outset; TEXT-ALIGN: center; BORDER-LEFT: white 2px outset; BACKGROUND-COLOR: #ffeeee; PADDING-LEFT: 2px; PADDING-RIGHT: 2px; COLOR: black; FONT-SIZE: 12px; VERTICAL-ALIGN: middle; BORDER-TOP: white 2px outset; FONT-WEIGHT: bold; BORDER-RIGHT: white 2px outset
}
SELECT.optionsbar_select {
	BACKGROUND-COLOR: #c5e693; COLOR: black; FONT-SIZE: 12px; FONT-WEIGHT: bold
}
TABLE.grid {
	BACKGROUND: gray
}
TABLE.chatusers {
	BACKGROUND: #c5e693
}
TD.chatusers {
	TEXT-ALIGN: center; PADDING-BOTTOM: 1px; PADDING-LEFT: 1px; PADDING-RIGHT: 1px; BACKGROUND: #ddefdd; FONT-SIZE: 11px; PADDING-TOP: 1px
}
TD.forumusers {
	TEXT-ALIGN: center; PADDING-BOTTOM: 1px; PADDING-LEFT: 1px; PADDING-RIGHT: 1px; BACKGROUND: #bbddbb; FONT-SIZE: 11px; PADDING-TOP: 1px
}
TD.chatusersholder {
	PADDING-BOTTOM: 3px; PADDING-LEFT: 3px; PADDING-RIGHT: 3px; PADDING-TOP: 3px
}
TD.surveyQuestion {
	TEXT-ALIGN: center; PADDING-LEFT: 20px; PADDING-RIGHT: 20px; BACKGROUND: black; COLOR: white; FONT-SIZE: 22px; FONT-WEIGHT: bold
}
TD.surveyResultText {
	TEXT-ALIGN: right; PADDING-LEFT: 4px; PADDING-RIGHT: 4px; BACKGROUND: #ffe4b5; COLOR: #703200; FONT-SIZE: 15px
}
TD.surveyResultTextVoted {
	TEXT-ALIGN: right; PADDING-LEFT: 4px; PADDING-RIGHT: 4px; BACKGROUND: #e4ffb5; COLOR: #703200; FONT-SIZE: 15px
}
TD.surveyResultNumber {
	TEXT-ALIGN: center; PADDING-LEFT: 4px; PADDING-RIGHT: 4px; BACKGROUND: #ffe4b5; COLOR: red; FONT-SIZE: 20px
}
TD.surveyResultPercentage {
	TEXT-ALIGN: center; PADDING-LEFT: 4px; PADDING-RIGHT: 4px; BACKGROUND: #ffe4b5; COLOR: orange; FONT-SIZE: 20px
}
TD.surveyHeader {
	TEXT-ALIGN: center; BACKGROUND: red; COLOR: white; text-size: 10pt
}
TABLE.surveyTable {
	BACKGROUND: black
}
TD.userdetails_header {
	PADDING-LEFT: 2px; PADDING-RIGHT: 2px; BACKGROUND: #437c17; COLOR: white
}
TD.userdetails_data {
	PADDING-LEFT: 2px; PADDING-RIGHT: 2px; BACKGROUND: #ddefdd; COLOR: black; FONT-SIZE: 75%; VERTICAL-ALIGN: top
}
TD.userdetails_title {
	PADDING-LEFT: 2px; PADDING-RIGHT: 2px; BACKGROUND: #84bd8f; COLOR: black; VERTICAL-ALIGN: top
}
TD.optionheader {
	BORDER-BOTTOM: buttonshadow 1px solid; TEXT-ALIGN: center; BORDER-LEFT: buttonhighlight 1px solid; PADDING-LEFT: 2px; PADDING-RIGHT: 2px; BACKGROUND: #437c17; COLOR: white; BORDER-TOP: buttonhighlight 1px solid; BORDER-RIGHT: buttonshadow 1px solid
}
TD.optionheader_selected {
	BORDER-BOTTOM: buttonshadow 1px solid; TEXT-ALIGN: center; BORDER-LEFT: buttonhighlight 1px solid; PADDING-LEFT: 2px; PADDING-RIGHT: 2px; BACKGROUND: #aa0000; COLOR: white; BORDER-TOP: buttonhighlight 1px solid; BORDER-RIGHT: buttonshadow 1px solid
}
INPUT.optionheader_radio {
	BACKGROUND: none transparent scroll repeat 0% 0%; COLOR: #000000
}
INPUT.option_transparent {
	BACKGROUND: none transparent scroll repeat 0% 0%; COLOR: #000000
}
TD.stats_h {
	TEXT-ALIGN: center; BACKGROUND-COLOR: gray; PADDING-LEFT: 4px; PADDING-RIGHT: 4px; COLOR: white; FONT-SIZE: 14px
}
TD.stats_t {
	BACKGROUND-COLOR: #66bb66; PADDING-LEFT: 6px; PADDING-RIGHT: 6px; COLOR: #eeffee; FONT-SIZE: 12px
}
TD.stats_p {
	BACKGROUND-COLOR: #bbddbb; PADDING-LEFT: 3px; PADDING-RIGHT: 3px; COLOR: red; FONT-SIZE: 14px
}
TD.stats_g {
	BACKGROUND-COLOR: #88bb88; PADDING-LEFT: 3px; PADDING-RIGHT: 3px; COLOR: white; FONT-SIZE: 14px
}
TD.stats_graph {
	TEXT-ALIGN: right; BACKGROUND-COLOR: #004400
}
TD.stats {
	TEXT-ALIGN: center; BACKGROUND-COLOR: #ddefdd; PADDING-LEFT: 3px; PADDING-RIGHT: 3px; FONT-FAMILY: helvetica,arial; FONT-SIZE: 12px; FONT-WEIGHT: bold
}
TD.stats_info {
	TEXT-ALIGN: center; PADDING-BOTTOM: 3px; BACKGROUND-COLOR: green; COLOR: white; FONT-SIZE: 18px; PADDING-TOP: 3px
}
TD.stats_menu {
	BORDER-BOTTOM: #aabbaa 1px solid; TEXT-ALIGN: right; BORDER-LEFT: #aabbaa 1px solid; PADDING-BOTTOM: 2px; BACKGROUND-COLOR: #e0ffe0; PADDING-LEFT: 3px; PADDING-RIGHT: 3px; COLOR: red; FONT-SIZE: 12px; VERTICAL-ALIGN: middle; BORDER-TOP: #aabbaa 1px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #aabbaa 1px solid; PADDING-TOP: 2px
}
TD.stats_menuSel {
	BORDER-BOTTOM: red 1px solid; TEXT-ALIGN: right; BORDER-LEFT: red 1px solid; PADDING-BOTTOM: 2px; BACKGROUND-COLOR: #ffe0e0; PADDING-LEFT: 3px; PADDING-RIGHT: 3px; COLOR: red; FONT-SIZE: 12px; VERTICAL-ALIGN: middle; BORDER-TOP: red 1px solid; FONT-WEIGHT: bold; BORDER-RIGHT: red 1px solid; PADDING-TOP: 2px
}
TD.stats_menuCmd {
	BORDER-BOTTOM: blue 1px solid; TEXT-ALIGN: right; BORDER-LEFT: blue 1px solid; PADDING-BOTTOM: 2px; BACKGROUND-COLOR: #e0e0ff; PADDING-LEFT: 3px; PADDING-RIGHT: 3px; COLOR: blue; FONT-SIZE: 12px; VERTICAL-ALIGN: middle; BORDER-TOP: blue 1px solid; FONT-WEIGHT: bold; BORDER-RIGHT: blue 1px solid; PADDING-TOP: 2px
}
DIV.cat {
	WIDTH: 170px
}
.cat-title {
	BORDER-BOTTOM: #666666 1px solid; BORDER-LEFT: #666666 2px solid; PADDING-LEFT: 2px; PADDING-RIGHT: 2px; BACKGROUND: #aa0000; COLOR: black; BORDER-TOP: #666666 1px solid; FONT-WEIGHT: bold; BORDER-RIGHT: #666666 2px solid
}
.cat-group {
	BORDER-BOTTOM: #aa0000 1px solid; BORDER-LEFT: #aa0000 2px solid; BORDER-TOP: #aa0000 0px solid; BORDER-RIGHT: #aa0000 2px solid
}
.cat-link {
	BORDER-BOTTOM: #666666 1px solid; BORDER-LEFT: #666666 1px solid; PADDING-RIGHT: 2px; BACKGROUND: #ffffec; CURSOR: pointer
	COLOR:black; BORDER-RIGHT: #666666 1px solid
}
.cat-link-over {
	BORDER-BOTTOM: #666666 1px solid; BORDER-LEFT: #666666 1px solid; PADDING-RIGHT: 2px; BACKGROUND: #ddefdd; CURSOR: pointer; BORDER-RIGHT: #666666 1px solid
}
.head {
	BORDER-BOTTOM: white 0px solid; POSITION: relative; BORDER-LEFT: 0px; PADDING-BOTTOM: 0px; LIST-STYLE-TYPE: none; MARGIN: 0px; PADDING-LEFT: 32px; PADDING-RIGHT: 0px; BACKGROUND: url(icon.aspx?style=vert/menu.gif) #ccffcc; HEIGHT: 35px; BORDER-TOP: 0px; BORDER-RIGHT: 0px; PADDING-TOP: 0px
}
.head LI {
	BACKGROUND: url(icon.aspx?style=vert/menus_bg.gif); FLOAT: right
}
.head LI A {
	TEXT-ALIGN: center; PADDING-BOTTOM: 0px; LINE-HEIGHT: 35px; PADDING-LEFT: 8px; PADDING-RIGHT: 0px; FONT-FAMILY: arial, verdana, sans-serif; FLOAT: left; HEIGHT: 35px; COLOR: white; FONT-SIZE: 15px; CURSOR: pointer; FONT-WEIGHT: bold; TEXT-DECORATION: none; PADDING-TOP: 0px
}
.head LI A B {
	PADDING-BOTTOM: 0px; PADDING-LEFT: 8px; PADDING-RIGHT: 16px; FLOAT: left; COLOR: white; PADDING-TOP: 0px
}
.head LI A:hover {
	BACKGROUND: url(icon.aspx?style=vert/menus_bghover.gif); COLOR: yellow
}
.head LI A:hover B {
	BACKGROUND: url(icon.aspx?style=vert/menus_bghover.gif) no-repeat right top; COLOR: yellow
}
span.topicons{font-size:10px;} ';
 ?>
 
