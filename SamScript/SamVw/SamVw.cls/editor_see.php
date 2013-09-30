var editor_lin = '<?=DM;?>'; 
var IconURL = Icones  ;
var blockedForums = new Array (7,13,15,27,28,46,59,60,61,62,63,64,65,66,67,69,70,71,72,73,74,75,76,83,89,93,107,110,113,117,0);
var pagesize = 50;
var topicpagesize = 30;
var topictype = 1;
var supervisor  = false;
var sizeLimit = 500000;
var forumStatus = "";
var editMode = "<?=$EditMode;?>";
var topicID = "<?= isset($TopiId) ? $TopiId : '' ?>";
var replyID = "<?= isset($rId) ? $rId : '' ?>";
var maxTopicsAllowedInForum = 10;
var userTopicsInForum = "0"; 
var topictitle = "<?= isset($TopiTitle) ? $TopiTitle : '' ?>"; 
var content = "<?= isset($Msg) ? $Msg : '' ?>";
var topicauthor = "<?=isset($USRNAM) ? $USRNAM : '' ?>";
var maxRepliesAllowedInForum = 250;
var userRepliesInForum = "0";
var quoteAuthor = "<?=isset($quoteAuthor) ? $quoteAuthor : '' ?>";
var quoteAuthorID = "<?=isset($quoteAuthorID) ? $quoteAuthorID : '' ?>";
var quoteDate = "<?=isset($quoteDate) ? $quoteDate : '' ?>";
var quoteTopic = "<?=isset($quoteTopic) ? $quoteTopic : '' ?>";
var quoteReply = "<?=isset($quoteReply) ? $quoteReply : '' ?>";
 
 
var mail_area = 0;
<?php

    if($EditMode == 'message')
	  
	  echo $MAILLER;


?>
 
 
var thread_id = 0;
var reply_id = 0;
var reply_to = '';
var quoteID = 0;


var properties = "FONT-FAMILY:arial;FONT-SIZE:17px;TEXT-ALIGN:center;COLOR:#0000cc;";
var codeURL = "get.asp";
var uniqueChecksum = '<?=$SES ; ?>';
var allowHTML = false;
var editCaller = "<?= isset($src) ? $src : '';?>";
 
</SCRIPT>
<SCRIPT language=JavaScript src="<?=DM;?>js/language.js"></SCRIPT>
<SCRIPT language=JavaScript src="<?=DM;?>js/header.js"></SCRIPT>
 

<link rel="stylesheet" type="text/css" href="<?=DM;?>js/dm/assets/style-1.0.min.css">
<SCRIPT language=JavaScript src="<?=DM;?>js/editor_lang.js?v=1"></SCRIPT>
<SCRIPT language=JavaScript src="<?=DM;?>js/editor_begin.js?v=1"></SCRIPT>
<script language=JavaScript src="<?=DM;?>js/jquery_1.7.1.min.js?v=1"></script>
<script language=JavaScript src="<?=DM;?>js/dm/dm_1.0.min.js?v=1"></script>
<script language=JavaScript src="<?=DM;?>js/dm/editor/editor_1.0.min.js?v=1"></script>
<script language=JavaScript src="<?=DM;?>js/editor_func.js?v=1"></script>
<SCRIPT language=JavaScript src="<?=DM;?>js/editor_end.js?v=1"></SCRIPT>

 
 