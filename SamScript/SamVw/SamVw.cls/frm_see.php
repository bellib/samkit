var forumStatus = "0";
var forumMods = "<?=$FrmMODS?>";
var forumExtra = "";
var forum_info = false;
var supervisor = true;
var forum_view = "f";
var unmoderated_topics = 0;
var unmoderated_replies = 0;
var held_topics = 0;
var held_replies = 0;
var whichauthor = -1;
var whichname = "";
var numdaysshown = 0;
var new_mail_forum = 0;
var new_notify_forum = 0;
var forum_guide = false;
var memberLevelSup = true;
var sortorder = 0;
var pagenum = '<?=$PAGE;?>';
var topics = new Array (
<?=$TPCS?>
"",0,"",0,"","",0,0,0,"","","",0);
 
var totalpages = <?=$ToTALPAGE;?>;
var count =  '';
var pagesize        = '<?=$NrLin;?>';
var authors = new Array (
<?=$AUTH;?>0,"");
var forumLinks = new Array (
<?=$LINK;?>0,"",0);
var elapsed = '';
