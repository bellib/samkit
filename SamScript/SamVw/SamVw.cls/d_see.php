<?php
/*********************************************** 
* @ Samkit 0.1                                 *
* @ Programed by Bellia Habib - SAMSOL -       *   
* @ Tél : 00213 670161303                      *
* @ @ : <bellib@hotmail.fr>                    *
* @ Fb: samsol.samsoli                         *
* @ contry: mecheria -Algeria                  *
* @ feb 2013                                   *
* @ Is  free solft                             *
***********************************************/
 if( ! defined('SAMSOL')) die('Can\'t Script. ');
 
    echo '<html dir="rtl">';
 

?> 
<head>
<base href="<?=GURL;?>" /><!--[if IE]></base><![endif]-->
<?php
 if(   $MODE != 'main' )
 {
    echo '<link rel="canonical" href="'.GURL.'" />'."\n";
	
}
?>
<meta  charset="utf-8" />
<meta name="generator" content="HTML Tidy for Linux (vers 25 March 2009), see www.w3.org" />
<meta name="copyright" content="Samkit 0.1: Copyright (C) 2012-2013 SAMSOL --BELLIA HABIB.">
<meta http-equiv="Pragma" content="no-cache" />
 
 
<meta name="keywords" content="<?=$KeyWord;?>">
<meta name="description" content="<?=$Descrip;?>" />
<meta name="abstract" content="SAMKIT " />
<meta name="robots" content="index, follow" />
<meta name="robots" content="all" />
<meta name="revisit-after" content="1 hours" />
<meta name="rating" content="General" />
<meta name="distribution" content="Global" />
<meta name="MSSmartTagsPreventParsing" content="true" />
<meta http-equiv="Content-Language" content="AR" />
<meta name="Expires" content="0" />
<meta name="reply-to" content="webmaster@goodzila.net" />
<meta name="owner" content="admin" />
<meta name="classification" content="All" />
 
<meta name="googlebot" content="archive" /> 
<meta name="resource-type" content="document" />
<meta http-equiv="Cache-Control" content="Public" />
 
<link rel="stylesheet" type="text/css" href="<?=GURLGET;?>css/<?=$SAMSTL;?>/<?=$CHBG;?>" />
 <link rel="stylesheet" type="text/css" href="<?=GURLGET?>css/405/<?=$CHBG;?>"> 
<script type="text/javascript" src="<?=GURLGET;?>desplay/jqry/<?=$CHBG;?>"></script>
<script type="text/javascript" src="<?=GURLGET;?>desplay/phjs/<?=$CHBG;?>"></script>
<script type="text/javascript" src="<?=GURLGET;?>desplay/lang_ar/<?=$CHBG;?>"></script>
<?php
if($MODE != 'editor')
 {
 echo '
<script type="text/javascript" src="'.GURLGET.'desplay/'.$MODE.'/'.$CHBG.'"></script>  ';
$bod = null;
}else $bod = 'onbeforeunload="return onbeforeunload();"'; 

?>
<script type="text/javascript" src="<?=GURLGET;?>desplay/forums/<?=$CHBG;?>"></script>
<title>:: forum SAMKIT :: </title>
 </head>
<body <?=$bod;?> topmargin=0 leftmargin=0 marginwidth=0 marginheight=0 dir="rtl" > 
<div id=loadnotice name=loadnotice style='visibility:hidden;position:absolute;width:100%;'><p dir=rtl align=center><br><font color=red><b>الرجاء الإنتظار -- يتم تحميل الصفحة الآن<br><br><font color=green><b>اذا لم تظهر الصفحة في وقت قصير الرجاء <br>الضغط على الوصلة أدناه للمحاولة مرة أخرى<br><br><a href='javascript:location.href = location.href;'>-- إعادة التحميل --</a><br><br><font size=-1 color=black>(الرجاء عدم استخدام أيقونة اعادة التحديث من المتصفح <br>لأنها تأخذ وقت أطول من الوصلة أعلاه لإعادة تحميل الصفحة)</p></div>
<script language="JavaScript">
if (self != top) top.location.href = "";
var loadnotice_hide = false;
var AdminEmail      = "bellib@hotmail.fr";
var HelpForum       = 0;
var cpy_right       = "© SAMSOL";
var cpy_prg         = "Samkit 0.1<sup><font color=yellow size=-2>beta</font></sup>";
var main_site_title = "forum SamKit";
var browser         = "<?=Broser();?>";
var real_url        = "";
var skin            = "basic";
var style           = <?=$SAMSTL;?>;
var language        = "ar";
var logo_f          = "";
var styleURL        = real_url+"";
var fileURL         = real_url;
var Icones          = "<?=GURLGET;?>sora/";
var SAMURL          = "<?=GURL;?>";
var mode            = "<?=$MODE;?>";
var link            = "<?=GURLCLS;?>";
var forum_id        = "<?=$FRMID;?>";
var timezone        = "<?=TZ;?>";
var thisYear        = "<?= SamDat(time(),1);?>";
var thisMonth       = "<?= SamDat(time(),2);?>";
var thisDay         = "<?= SamDat(time(),3);?>";
var cat_id          = "<?=$CATID;?>";
var isarchive       = false;
var currentTime     = "<?= SamDat(time(),0);?>";
var page_refresh    = 0;
var templogin       = false;
var adLink          = "";
var adImage         = "";
var adLink2         = "";
var adLink3         = "";
var adSideBar       = "";
var new_mail        = 0;
var adLogo          = "";
var blockedForums   = new Array (0);
var siteID          = 1;
var memberID        = <?=UID;?> ;
var memberName      = "<?=UNM;?>" ;
var memberLoginName = "";
var memberQID       = "<?=( UID > 0 ? strtoupper(md5(UID.UNM)) : 0 );?>";
var memberTitle     = "";
var memberPosts     = "<?=UPS;?>"; 
var memberLevel     = <?=ULV;?> ;
var memberGender    =  "1" ;
var curIP           = "<?=getClientIp();?>";
var curCountry      = "<?=$CIP?>";
var changedIP       = false;
var moderate        =  <?= $ISADMIN == 1 ? "true" : "false" ?> ;
var pagesize        = "";
var topicpagesize   = 30;
var UNkno           =  "" ;
var links2          = new Array ("","","");
var links = new Array (
<?=$LINKS;?>
"","","");


var membersInChat  = new Array ();
var opci            = 30;
var mainpagemode = "<?=$MODE;?>";
var other_forums = new Array (-1,0);
var forums_url      = SAMURL;
var forums_logo_url = real_url+"";
var elapsed = '';
var forums_windowtitle = ':: ' + main_site_title + ' :: ';
<?php
if($MODE != 'main')
  echo 'var forums = new Array (
'.$FRMLST.'"" );
';
?>
 