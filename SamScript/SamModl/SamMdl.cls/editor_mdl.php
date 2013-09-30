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
 
 
    final class editor extends SAMSOL_MODEL
	{ 
	
	    static function SamGetfid($id)
		{
		
		
		 $Fid = parent::SamsolSelectOne('cat_id','forum','WHERE f_id = "'.$id.'"   LIMIT 1') ; 
		 
		 		 // verifier the topic is in frm hide
		 
         $FrmISnormal     = parent::SamSelectCount('f_id','forum',"WHERE `f_hide` <= '".(int)ULV ."' AND f_id	= '".(int)$id."' ");
		 
		    if($Fid > 0 && $FrmISnormal > 0 )
			
		     $F =  1;
			 
			else 
			 
			  header('Location: '.BASEURL);
			  
		     if($F =  1)
			 
		     $FrmName = $Fid = parent::SamsolSelectOne('f_name','forum','WHERE f_id = "'.$id.'"   LIMIT 1') ;
			 
			 else return null;
 
		
		 return array($F,$FrmName);
		}
		static function samEdittopic($tid)
		{
		     // verifier forum id
			 $forumId     = parent::SamSelectCount('forum_id','topics',"WHERE   topic_id	= '".(int)$tid."' ");
			 
			 if($forumId  != 1) hl();
			 
			 // select frm id
			 $forumId     = parent::SamsolSelectOne('forum_id','topics',"WHERE   topic_id	= '".(int)$tid."' ");

			 // verifier if forum id  exist and no hide
			 $forumId     = parent::SamsolSelectOne('f_id','forum',"WHERE `f_hide` <= '".(int)ULV ."' AND f_id	= '".(int)$forumId."' ");


         	$Issettopic  = parent::SamSelectCount('t_author','topics','WHERE topic_id = "'.$tid.'" AND forum_id = "'.$forumId.'"  ') ;

			 $Moderate    = mjorFunc::SamIsAdmin($forumId);

			    if($Issettopic < 1 )
			     
				 @hl();
				 
			 $FiledVerifier  = 't_subject,t_message,t_status,t_author,t_archive,t_approve,t_hide,t_delete';
			 
			 $SelectTopic    = parent::SamsolFetchArray($FiledVerifier,'topics','WHERE `topic_id` = "'.$tid.'" ' ); //
 
				    if(! $SelectTopic )
					
					 @hl();
					 
				 $TopAuth      = $SelectTopic['t_author'];
				 
				 $TopArch      = $SelectTopic['t_archive'];
				 
				 $TopApp       = $SelectTopic['t_approve'];
				 
				 $TopHide      = $SelectTopic['t_hide'];
				 
				 $TopDelel     = $SelectTopic['t_delete'];
				 
				 $TopTitle     = $SelectTopic['t_subject'];
				 
				 $TopMsge      = $SelectTopic['t_message'];
				 
				 $TopSTAT      = $SelectTopic['t_status'];
				 
				 // condition hacker
				 
				 
 
				    // can not edit topic in archiv or no user is topic or no admin
				    if($TopArch == 1 || $TopDelel == 1 ||  ($Moderate == 0 && $TopAuth != UID) && ULV != 4 )
					
					hl();
					
					// the topic is aproved and no admin 
					 
					elseif($Moderate == 0 && $TopAuth == UID && ($TopApp == 1 || $TopSTAT == 1) && UID != 1   )
					{
                         $Msg = $TopSTAT == 1 ? 'topiclockedchange' : 'topicpendingchange'; 
						 
					     return $Msg;
					}
				    else
					{
					 $Edit = array();
					 
					 $EditforumId  = $forumId;
					 
					 $EditTopTitle = SamFiJs($TopTitle);
					 
					 $EditTopMsge  = SamFiJs($TopMsge);
					 
					 $EditTopID    = $tid;
					 
					 $EditFname    = parent::SamsolSelectOne('f_name','forum','WHERE f_id = "'.$forumId.'"   LIMIT 1') ;
					 
                     return array($EditforumId,$EditTopTitle,$EditTopMsge,$EditTopID,$EditFname); 
					
			 
					
				}
				 
         
		
		}
		static function SamGetInfoRep($tid)
		{
		
			 $forumId     =  parent::SamsolSelectOne('forum_id','topics',"WHERE   topic_id	= '".(int)$tid."' "); 
		
		     $Issettopic  = parent::SamSelectCount('t_author','topics','WHERE topic_id = "'.$tid.'" AND forum_id = "'.$forumId.'"  ') ;
			 
			 $Moderate    = mjorFunc::SamIsAdmin($forumId);
			 
			    if($Issettopic != 1 )  hl();
				 
			 $FiledVerifier  = 't_subject,t_message,t_status,t_author,t_archive,t_approve,t_hide,t_delete';
			 
			 $SelectTopic    = parent::SamsolFetchArray($FiledVerifier,'topics','WHERE `topic_id` = "'.$tid.'" ' ); //
 
				    if(! $SelectTopic )  hl();
					 
				 $TopAuth      = $SelectTopic['t_author'];
				 
				 $TopAuth1      = mjorFunc::SamGetUsrClr($TopAuth);
				 
				 $TopArch      = $SelectTopic['t_archive'];
				 
				 $TopApp       = $SelectTopic['t_approve'];
				 
				 $TopHide      = $SelectTopic['t_hide'];
				 
				 $TopDelel     = $SelectTopic['t_delete'];
				 
				 $TopTitle     = $SelectTopic['t_subject'];
				 
				 $TopMsge      = $SelectTopic['t_message'];
				 
				 $TopSTAT      = $SelectTopic['t_status'];
				 
				 // condition hacker
				 
				 
 
				    // can not edit topic in archiv or no user is topic or no admin
				    if(($TopArch == 1 || $TopDelel == 1) || (($Moderate == 0) && ($TopAuth != UID) && ($TopApp == 1 || $TopSTAT == 1))   )
					
					hl();
					
					// the topic is aproved  
					 
					elseif( ($TopApp == 1 || $TopSTAT == 1) && ( $TopAuth == UID  ) && $Moderate == 0 )
					{
                         $Msg = $TopSTAT == 1 ? 'topiclockedchange' : 'topicpending'; 
						 
					     return $Msg;
					}
				    else
					{
					 
					 $EditforumId  = $forumId;
					 
					 $EditTopTitle = $TopTitle;
					 
					 $EditTopMsge  = $TopMsge;
					 
					 $EditTopID    = $tid;
					 
					 $EditFname    = parent::SamsolSelectOne('f_name','forum','WHERE f_id = "'.$forumId.'"   LIMIT 1') ;
					 
                     return array($EditforumId,$EditTopTitle,$TopAuth1); 
 
				    }
		}
		static function samEditReply($rid)
		{
		
		     // topic id
			 $tid  = parent::SamsolSelectOne('topic_id','replies','WHERE reply_id = "'.$rid.'"   LIMIT 1') ;
			 
			 // forum id 
			 $fid =  parent::SamsolSelectOne('forum_id','replies','WHERE reply_id = "'.$rid.'"   LIMIT 1') ;
			 
             $FiledVerifier  = 'forum_id,topic_id,r_message,r_author,r_approve,r_delete,r_archive_flag,r_hide_text';
			 
		     $SelectREP      = parent::SamsolFetchArray($FiledVerifier,'replies','WHERE `forum_id` = "'.$fid.'"  AND `topic_id` = "'.$tid.'"  AND  `reply_id` = "'.$rid.'" ' ); //
			 
		            if($SelectREP == NULL ) hl();
				 
				 $Moderate     = mjorFunc::SamIsAdmin($fid);
		
				 $RepAuth      = $SelectREP['r_author'];
				 
				 $RepAuth      = mjorFunc::SamGetUsrClr($RepAuth);
				 
				 $RepArch      = $SelectREP['r_archive_flag'];
				 
				 $RepApp       = $SelectREP['r_approve'];
  
				 $RepDelel     = $SelectREP['r_delete'];
 
				 $RepMsge      = $SelectREP['r_message'];
				 
				    if( ( $Moderate == 0 && $RepAuth != UID ) OR $RepDelel == 1 OR $RepArch == 1  ) hl();
				 
				 $TopTitle     = parent::SamsolSelectOne('t_subject','topics','WHERE topic_id = "'.$tid.'"   LIMIT 1') ; 
				 
				 $EditFname    = parent::SamsolSelectOne('f_name','forum','WHERE f_id = "'.$fid.'"   LIMIT 1') ;
				 
			 return Array($RepAuth,SamFiJs($RepMsge),$TopTitle,$fid,$tid);
 
		
		}
		/*
		   function get qouit replay
		*/
	     static function samQtReply($RepID,$Tid)
		{
		   
		    // verifier topic id
			$tid1  = parent::SamSelectCount('topic_id','replies','WHERE reply_id = "'.$RepID .'" AND `topic_id` = "'.$Tid .'"    LIMIT 1') ;
			
			    if($tid1 != 1) hl();
				
			 // admin 
			
			 $Moderate     = mjorFunc::SamIsAdmin(false,$Tid);
			 
			 /*
			     re verifier
			 */
			        $AND = ' AND `t_archive` = 0  AND  `t_archive_flag` = 0 AND `t_delete` = 0 ';
					
			      if($Moderate == 1)
				   $AND .=  '';
				   
				   else $AND .=  'AND `t_status` = 0 AND `t_approve` = 0 ';
				   
			 	 $tid2  = parent::SamSelectCount('topic_id','topics','WHERE `topic_id` = "'.$Tid .'"  '.$AND.'   LIMIT 1') ;
				 
			      if($tid2 != 1) hl();
			
		   // topic title
		   $TopiTitle  = parent::SamsolSelectOne('t_subject','topics','WHERE `topic_id` = "'.$Tid .'"    LIMIT 1') ; 
		   
		   // frm ID
		   $Forum_Id =  parent::SamsolSelectOne('forum_id','topics','WHERE `topic_id` = "'.$Tid .'"    LIMIT 1') ; 
		   
		   // topic autor
		   $Topic_USRNAM =  parent::SamsolSelectOne('t_author','topics','WHERE `topic_id` = "'.$Tid .'"    LIMIT 1') ;
		   
		   $Topic_USRNAM = mjorFunc::SamGetUsrClr($Topic_USRNAM);  ;
		   
		   // replay conti
		   $Msg = parent::SamsolSelectOne('r_message','replies','WHERE `topic_id` = "'.$Tid .'"  AND `reply_id` = "'.$RepID .'"   LIMIT 1') ; 
 
          $quoteAuthorID = parent::SamsolSelectOne('r_author','replies','WHERE `topic_id` = "'.$Tid .'"  AND `reply_id` = "'.$RepID .'"   LIMIT 1') ; 
		  
		  $quoteAuthor =  parent::SamsolSelectOne('u_name','users','WHERE user_id = "'.$quoteAuthorID.'"') ;
		  
          $quoteDate = parent::SamsolSelectOne('r_date','replies','WHERE `topic_id` = "'.$Tid .'"  AND `reply_id` = "'.$RepID .'"   LIMIT 1') ; 
          $quoteDate = SamDat( $quoteDate,0);  
		  
          $quoteTopic =$Tid;
		  
          $quoteReply = $RepID;
 
		 return array( SamFiJs($TopiTitle),$Topic_USRNAM, SamFiJs($Msg),$quoteAuthor,$quoteAuthorID, $quoteDate,$quoteTopic, $quoteReply,$Forum_Id);
		
		}
		/**
		    @ send mail from UID to $sam
		*/
		static function samSendMail($mid)
		{
		     global $SamLangAr;
		    /**
			   @ $mid : the member to send
			*/
		     $Sam_to = (int) $mid;
			 
			/**
			   @ verifier if the  $Sam_to is true
			 */
			 $Is_Sam_True = parent::SamSelectCount('user_id','users','WHERE user_id = "'.$Sam_to.'"') ;
			     
				if($Is_Sam_True != 1  )  hl();
		
		    /**
			   @ the member to name
			*/
			$Sam_to_Name =  parent::SamsolSelectOne('u_name','users','WHERE user_id = "'.$Sam_to.'"') ;  
			
			/**
			   @ JS user Name
			*/
		     $Sam_Memb_JS  = vJs('user_name',$Sam_to_Name); 
				
			 $Sam_Memb_JS .= vJs('user_id',$Sam_to);  'var user_id    =  '.$Sam_to ." ; \n";
			 
			 $Sam_Memb_JS .= vJs('topictitle',$SamLangAr['MAil_from'].UNM .$SamLangAr['to'].$Sam_to_Name);  
			 
			 return $Sam_Memb_JS;
 
		}
 
	
	}