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
 
 
    class tpcdeitInfo extends SAMSOL_MODEL
	{
	
	    static function SamGetTopicUnfo($tid)
        {
		
	     $TocFiled     = implode (' , ', parent::$FILED['TPC']); // Initialis faileds list of topics
		 
		 $SamTopic     = parent::SamsolFetchArray($TocFiled,'topics','WHERE `topic_id` = "'.$tid.'" ' );  // SELECT * FROM topics
		 
		 unset($TocFiled);
 
		 if(count($SamTopic) == 0) //
		  
		  return NULL; //
		  
		 $CatId      =  $SamTopic['cat_id'] ;     //
		 
		 $ForumID    =  $SamTopic['forum_id'] ;     //
		 
		 $TopicTitle =  $SamTopic['t_subject'] ;     //
		 
		 $TopicStic  =  $SamTopic['t_stick'] ;       //
		 
		 $TopicTop   =  $SamTopic['t_top'] ;         //
		 
		 $Topicnews  =  $SamTopic['t_newsletter'] ;  //
		 
		 $TopicArchi =  $SamTopic['t_archive'] ;     //
		 
		 $TopicHot   =  $SamTopic['t_hottopic'] ;    //
		 
		 $TopicLink  =  $SamTopic['t_link'] ;        //
		 
		 unset($SamTopic);
		
         return array($CatId,$ForumID,$TopicTitle,$TopicStic,$TopicTop,$Topicnews,$TopicArchi,$TopicHot,$TopicLink);
		
		}
        static function SamChangeInfo()
        {
		
         $TopId               = intval(trim($_POST['topicinfo_id']));
		 
         $ReferNew            = $_POST['caller'];
		 
         $TitelTopicNew       = htmlspecialchars($_POST['topicinfo_subject']);
		 
         $TopewsletterNew     = intval(trim($_POST['topicinfo_newsletter']));
		
         $FrmIDNew            = intval(trim($_POST['topicinfo_forum']));
		 
         $TopStickNew         = intval($_POST['topicinfo_pinned']);
		 
         $TopilinkNew         = intval($_POST['topicinfo_mainlink']) ;
		 
         $TopTopNew           = intval($_POST['topicinfo_toptopic'])   ;
		 
         $ToparchiveNew       = intval($_POST['topicinfo_archiveable']);
		 
         $TophotNew           = intval($_POST['topicinfo_hottopic']);
		 
         //$TopsurveyidNew      = intval($_POST['survey_id']);
		 
         $TopauthorNew        = parent::SamsolSelectOne('t_author','topics','WHERE topic_id = "'.$TopId.'"   LIMIT 1') ; 
		 
		 $IsTpoSticed         = parent::SamsolSelectOne('t_stick','topics','WHERE topic_id = "'.$TopId.'"   LIMIT 1') ; 
		 
		 $IsTpolettered       = parent::SamsolSelectOne('t_newsletter','topics','WHERE topic_id = "'.$TopId.'"   LIMIT 1') ; 
		 
		 $IsTpoFrmIDed        = parent::SamsolSelectOne('forum_id','topics','WHERE topic_id = "'.$TopId.'"   LIMIT 1') ; 
		 
		 $IsTpoToped          = parent::SamsolSelectOne('t_top','topics','WHERE topic_id = "'.$TopId.'"   LIMIT 1') ; 
		 
		 $IsTpoarchiveed      = parent::SamsolSelectOne('t_archive_flag','topics','WHERE topic_id = "'.$TopId.'"   LIMIT 1') ; 
		 
		 $IsTpohoted          = parent::SamsolSelectOne('t_hottopic','topics','WHERE topic_id = "'.$TopId.'"   LIMIT 1') ; 
		 
		 $IsTpoTitled        = parent::SamsolSelectOne('t_subject','topics','WHERE topic_id = "'.$TopId.'"   LIMIT 1') ; 
		 
		 $IsTpolenked        = parent::SamsolSelectOne('t_link','topics','WHERE topic_id = "'.$TopId.'"   LIMIT 1') ; 
		 
		 $Faile               = null;
		 
		 $Extra               = 'WHERE topic_id = "'.$TopId.'"   LIMIT 1 ';
            
			if($IsTpoTitled != $TitelTopicNew )
			 
			 parent::SamUpdat('topics','t_subject','"'.$TitelTopicNew.'"',$Extra);
			 
			if($IsTpoSticed != $TopStickNew)
			{
			 $Faile           = 't_stick';
			 
			 $Value           = $TopStickNew ;
			 
			 parent::SamUpdat('topics',$Faile,$Value,$Extra);
		     
			}
            if($IsTpolenked != $TopilinkNew)
			{
			 $Faile           = 't_link';
			 
			 $Value           = $TopilinkNew ;
			 
			 parent::SamUpdat('topics',$Faile,$Value,$Extra);
		     
			}
            if($IsTpolettered != $TopewsletterNew )
			{
			 $Faile           = 't_newsletter';
			 
			 $Value           = $TopewsletterNew ;
			 
			 parent::SamUpdat('topics',$Value,$Extra);
		     
			}
		    if($IsTpoFrmIDed != $FrmIDNew)
			{
			 $forumUpdat      = "`forum_id` = '$FrmIDNew'";
			 
			 $Catid           = parent::SamsolSelectOne('cat_id','forum','WHERE f_id = "'.$FrmIDNew.'"   LIMIT 1 ') ;
			 
			 $CatUpdat        = " `cat_id` =  '$Catid' ," ;
			 
			 $Value           =  $CatUpdat.$forumUpdat    ;
			 
			 parent::SamUpdatMor('topics',$Value,$Extra);
			 
			 parent::SamUpdatMor('replies',$Value,$Extra);
			 
			 self::SamUpdatFrmChang($TopId,$IsTpoFrmIDed,$FrmIDNew,$Extra);
		     
			}
		    if( $IsTpoToped != $TopTopNew )
			{
			 $Faile           = 't_top';
			 
			 $Value           = '"'.$TopTopNew.'"' ;
			 
			 parent::SamUpdat('topics',$Faile,$Value,$Extra);
		     
			}
		    if($IsTpoarchiveed != $ToparchiveNew)
			{
			 $Faile           = 't_archive_flag';
			 
			 $Value           = $ToparchiveNew  ;
			 
			 parent::SamUpdat('topics',$Faile,$Value,$Extra);
		     
			}
		 
		 return array('member_details_changed',$FrmIDNew);
 
		}
        static function SamUpdatFrmChang($tid,$last,$new,$Extra)
        {
 
		 
		 // Selct Dernirer posted new frm
		 
		 $LastPostedNew = parent::SamSelectLastPosted($new);
		 
		 $ValFrmNew     = ' `f_lp_date` = "'.$LastPostedNew[0].'" ,   `f_lp_author` = "'.$LastPostedNew[1].'"' ;
		 
		 parent::SamUpdatMor('forum',$ValFrmNew,'WHERE `f_id` = "'.$new.'" ');
		 
		 // Selct Dernirer posted last frm
		 
		 $LastPostedNew = parent::SamSelectLastPosted($last);
		 
		 $ValFrmNew     = ' `f_lp_date` = "'.$LastPostedNew[0].'" ,   `f_lp_author` = "'.$LastPostedNew[1].'"' ;
		 
		 parent::SamUpdatMor('forum',$ValFrmNew,'WHERE `f_id` = "'.$last.'" ');
		 

		}		
	
 
	}