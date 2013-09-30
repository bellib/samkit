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
 
 
    class Insert extends SAMSOL_MODEL
	{ 
	
	
	    static function SamInsertTopic()
		{
		  
		   /*
  
 [msg] => mm 
 [caller] => f.asp%3Ff%3D36 
 [format] => FONT-FAMILY:arial;FONT-SIZE:17px;TEXT-ALIGN:center;COLOR:#0000cc;
 [forum] => 1 
 [checksum] => 396429624 
 [action] => post 
 [post] => newtopic 
 [newtopic_hidden] => on
 [newtopic_locked] => on 
 [newtopic_pinned] => on 
 [subject] => tt 
 [message] => 
 
 */
 
 
		  // forum id
         $ForumId    = (int)$_POST['forum']; 
		 
		 
		 // msg continu
	     $TopcMsg    =  $_POST['msg'] ;
 
		 
		 //topic title
		 $TopcTitle  =  mysql_real_escape_string(htmlspecialchars($_POST['subject'])) ;
		 
		 // topic id
		 
		 $SamTopiID = null;
		 
		 // is admin 
		 
		 // verifier if forum is real 
		 
		 $FrmISnormal     = parent::SamSelectCount('f_id','forum',"WHERE `f_hide` <= '".(int)ULV ."' AND f_id	= '".$ForumId."' ");
		 
		 // heder location if not
		 
		 if($FrmISnormal <=0 ) hl();
		 
		  // is admin 
		  
		  $UsrIsAdmin = mjorFunc::SamIsAdmin($ForumId);
		  
		    if($UsrIsAdmin  == 1)
		    {
		        $TopcLoc    = isset($_POST['newtopic_locked']) ?  1 : false ;
		 
		        $TopcStic   = isset($_POST['newtopic_pinned']) ?  1  : false ;
		 
		        $TopcHid    = isset($_POST['newtopic_hidden']) ?  1  : false ;
		    }
		 // topic model
 
		 $TopcMod    = mysql_real_escape_string(htmlspecialchars($_POST['post']));
		 
		 // key word
		 $keyWord    = mysql_real_escape_string(htmlspecialchars($_POST['keyWord']));
		 
		    if( $TopcMod  == 'edittopic')
		    {  
			   // topic id
			   $tid = (int)$_POST['topic'];
			   
			   
			   /*
			     verification if the topic is it
				   if in forum ande topic id 
			   
			   */
	 
			  $SamIStopic1 = parent::SamSelectCount('topic_id','topics','WHERE topic_id = "'.$tid.' AND " and `t_archive` = 0 ');
			    
				 if(ULV == 1 or $UsrIsAdmin == 0)
				 
				$SamIStopic1 .= 'AND `t_approve` = 0 ';
			  
			    if($SamIStopic1 != 1  ) hl();
			  
			  // fin
			  
			  /*
			   verifie if topic is same uid author id
			   
			  
			  */
			  $SamIStopic = parent::SamsolSelectOne('t_author','topics','WHERE topic_id = "'.$tid.'"') ;
			  
			  /*
			     if not his topic and not admin
			  */
			   if(UID != $SamIStopic && $UsrIsAdmin == 0) hl();
			  
			  // fin
			  
              $SamTopiID = $tid;
			 
			   
			
			}
	     
		 
		 $UsrId      = UID;
 
		 
		 $CFrmId     = parent::SamsolSelectOne('cat_id','forum','WHERE f_id = "'.$ForumId.'"') ; //
		 
		 // aproved
		 
		 $Aprive     = parent::SamsolSelectOne('u_posts','users','WHERE user_id = "'.$UsrId.'"') ;
 
		
		    if($CFrmId > 0 &&  $ForumId > 0   )
		    {
			 /*
			     '`cat_id`','`forum_id`','`topic_id`','`t_status`','`t_subject`','`t_message`','`t_replies`','`t_views`','`t_author`','`t_date`','`t_lp_date`'
				 ,'`t_lp_author`','`t_archive`','`t_archive_flag`','`t_stick`','`t_approve`','`t_hide`','`t_hide_text`','`t_delete`','`t_auth_del`'
				 ,'`t_top`','`t_link`','`t_survey`','`t_newsletter`','`t_hottopic`','`t_mv`' 
				 
			 
			 */
			 
			 $Insert                    = array();
			 
			 $Insert['cat_id']          = '"'.$CFrmId.'",';
			 
			 $Insert['forum_id']        = '"'.$ForumId.'",';
			 /*
			    if mod is in edit topic 
			  */
			    
			 $Insert['topic_id']        = '"'.$SamTopiID.'" ,';
			 
			 $Insert['t_status']        = '"'.($UsrIsAdmin  == 1 ? $TopcLoc : 0).'",';
			 
			 $Insert['t_subject']       = '"'. SamAddSslash($TopcTitle ).'",';
			 
			 $Insert['t_message']       = '"'. SamAddSslash($TopcMsg) .'",';
			 
			 $Insert['t_replies']       = '0 ,';
			 
			 $Insert['t_views']         = '0 ,';
			 
			 $Insert['t_author']        = '"'.$UsrId.'",';
			 
			 $Insert['t_date ']         = '"'.time().'",';
			 
			 $Insert['t_lp_date']       = '"'.time().'",';
			 
			 $Insert['t_lp_author']     = '"'.$UsrId.'",';
			 
			 $Insert['t_archive']       = '0 ,';
			 
			 $Insert['t_archive_flag']  = '0 ,';
			 
			 $Insert['t_stick']         = '"'.($UsrIsAdmin  == 1 ? $TopcStic : 0 ).'",';
			 
			 $Insert['t_approve']       = '"'.($Aprive > 50 ? 0 : 1) .'",';;
			 
			 $Insert['t_hide']          = '"'.($UsrIsAdmin  == 1 ?  $TopcHid : 0 ).'",';
			 
			 $Insert['t_hide_text']     = '0 ,';
			 
			 $Insert['t_delete']        = '0 ,';
			 
			 $Insert['t_auth_del']      = '0 ,';
			 
			 $Insert['t_top']           = '0 ,';
			 
			 $Insert['t_link']          = '0 ,';
			 
			 $Insert['t_survey']        = '0 ,';
			 
			 $Insert['t_newsletter']    = '0 ,';
			 
			 $Insert['t_hottopic']      = '0 ,';
			 
			 $Insert['t_mv']            = '0 ,';
			 
			 $Insert['t_keyWord']            = ' "'.$keyWord.'"  ';
			 
			 $ValInsert                 = implode(' ',$Insert);
			 
			 global $SamFailed;
			 
			 $TocFiled   = implode (',', $SamFailed['TPC']); //
			 
			 $FormUpdatLast             = 'f_lp_date = "'.time().'" , f_lp_author = "'.$UsrId.'" ';
			 
			 $Where                     = 'WHERE f_id = "'.$ForumId.'" ';
			 
			 /*
			    insert if new topic
			 */
			    if( $TopcMod  == 'newtopic')
				{
			      parent::SamInsert('topics',$TocFiled,$ValInsert);
				  
				  $ToicID    = mysql_insert_id();
			    }
			 /*
			    updat if editor mode
			 */
			    if( $TopcMod  == 'edittopic')
				{
				
	                 $TopUpdat        = 't_subject = "'.SamAddSslash($TopcTitle) .'" , t_message = "'.SamAddSslash( $TopcMsg ).'" ';
 
			         $Where           = 'WHERE `topic_id` = "'.$SamTopiID.'" ';
					 
					 /*
                        inset in change topic
					    '`id`', '`user_id`', '`post_id`', '`post_type`', '`change_subject`', '`change_message`', '`subject`', '`message`', '`date`'
					 */
					 $TITLE = parent::SamsolSelectOne('t_subject','topics','WHERE topic_id = "'.$SamTopiID.'"') ;
					 
					 
					 $MSG   = parent::SamsolSelectOne('t_message','topics','WHERE topic_id = "'.$SamTopiID.'"') ;
					 
					  global $SamFailed;
					 
					 $FILEDCHANGE = $SamFailed['CHNGE'] ;
					 
					 $FILEDCHANGE = implode(',',$FILEDCHANGE) ;
					 
					 //$change  = array();
					 
					 $change  = 'null,';
					 
					 $change .= '"'.UID.'",';
					 
					 $change .= '"'.$SamTopiID.'",';
					 
					 $change .= '"t",';
					 
					 $change .= 'null,';
					 
					 $change .= 'null,';
					 
					 $change .= '"'.  SamAddSslash($TITLE) .'",';
					 
					 $change .= '"'. SamAddSslash($MSG)  .'",';
					 
					 $change .= '"'.time().'"';
					 
					 parent::SamInsert('edit',$FILEDCHANGE,$change);
					 
					   /*
					    aprove topic if posts < 50
					   */
					  if($Aprive < 50)
					  
					  $TopUpdat      .= ', t_approve = "1"   ';
					  
					 
					 parent::SamUpdatMor('topics',$TopUpdat,$Where);
					 
					 // topic stat
					 
					 					 
					 $TopUpdatStatF   = 'status , author ,id , type , date ';
					 
					 $TopUpdatStatV   = ' "0" ,  "'.UID.'" , "'.$SamTopiID.'" ,   "f" , "'.time().'" ';
 
					 if(UID != 1)
					 parent::SamInsert('topic_status',$TopUpdatStatF,$TopUpdatStatV);
 
				     $ToicID    = $SamTopiID;
					 
					 
				  
                }
			 
			 // updat frm info
                if($Aprive > 50)
				{
				      parent::SamUpdat('users','u_lp_date',time(),'WHERE user_id = "'.$UsrId.'"');
					  
					  
					  /*
					     post +1 if inset
					  */
					  if( $TopcMod  == 'newtopic')
					  
				      parent::SamUpdat('users','u_posts',' `u_posts` + "1" ','WHERE user_id = "'.$UsrId.'"');
					  
				      parent::SamUpdat('forum','f_topics',' `f_topics` + "1" ','WHERE f_id = "'.$ForumId.'"');
					  
					  // last post dat inforum
				      parent::SamUpdat('forum','f_lp_date',time(),'WHERE f_id = "'.$ForumId.'"');
				      
					  // last post user id
					  parent::SamUpdat('forum','f_lp_author',UID,'WHERE f_id = "'.$ForumId.'"');
				
				
				}//else  if(UPS > 1) parent::SamUpdat('users','u_posts',' `u_posts` - "1" ','WHERE user_id = "'.$UsrId.'"');
			        
					 if( $TopcMod  == 'newtopic')
				 
			          $MSGFINAL  = $Aprive < 50 ? 'topic_add_pending' : 'topic_add_ok';
			 
			         else 
					 
					  $MSGFINAL  = $Aprive < 50 ? 'topic_change_panding' : 'topic_change_ok'; 
			 
			 $Caller    = $_POST['caller'] ;
			 
		    }
			else
            {
			 $MSGFINAL  = 'topic_add_failed';
			 
			 $Caller    =  '';
		
		    }
			
			 
         return  array($MSGFINAL,$Caller,$ToicID,$ForumId);
		}
	    static function SamInseRep()
		{
 			  /*[msg] => sdsdsdsd
			  [qid] => 4F3C4F6430EAAD2BAA1664123FB91C7E 
			  [post] => newreply 
			  [format] => quick 
			  [quickmode] => 1 
			  [topicnam] => 1d0cc1b9d317edfecd23c1f130d5dbcc 
			  [topic] => 5 
			  [forum] => 1 
			  [checksum] => 0 
			  [caller] => http%3A//localhost/na/%3Fsam/samtopic/topic5 */
			  
			  
		 	 // print_r($_POST); die();
			  /*
			  
			  
	    [msg] => vbncvbnn 
		[caller] => http%3A//localhost/na/%3Fsam/samfrm/forum1 
		[format] => FONT-FAMILY:arial;FONT-SIZE:17px;TEXT-ALIGN:center;COLOR:#0000cc; 
		[forum] => 1 
		[checksum] => 396429624 
		[action] => post 
		[post] => newreply
		[topic] => 16 
		[newreply_hide] => on
		[newreply_lock] => on 
		[message] => )
			  
			  
			  */
			  
			  /* edit replay
			  
			  
			   [msg] => dsdsdsd
			   [caller] => http%3A//localhost/na/%3Fsam/samtopic/topic13 
			   [format] => FONT-FAMILY:arial;FONT-SIZE:17px;TEXT-ALIGN:center;COLOR:#0000cc; 
			   [forum] => 1
			   [checksum] => 396429624 
			   [action] => post 
			   [post] => editreply 
			   [topic] => 13 
			   [reply] => 1 
			   [message] => 
			  
			  
			  */
			 
			  $Replay_msg = SamAddSslash($_POST['msg']);
			  
			  // type of the replay msg
			  
			  $Replay_type = htmlspecialchars($_POST['post']);
			  
			  /*
			      mod of replay 
				  if isset quik mode ==> no edtor 
				  else if it is && = 1  => locktopic = 0 else if =2  locktopic = 1 
			  */   
			   
			  $Replay_Mode = isset($_POST['quickmode']) ?(int) $_POST['quickmode'] : 0;
			  
			  // lock topic
			  $Replay_Lock_Topic = isset($_POST['newreply_lock']) ? 1 : 0;
			  
			  
			  // hide topic
			  $Replay_Hide_Topic = isset($_POST['newreply_hide']) ? 1  : 0;
			  
			  // topic id 
			  
			  $Rep_Topic_Id  = (int) $_POST['topic'];
			  
			  // forum id 
			  
			  $Rep_Frm_ID   = (int) $_POST['forum'];
			  
			  // caler 
			  
			  $Caller = $_POST['caller'];
			  
			  // is admin 
			  
			  $UsrIsAdmin = mjorFunc::SamIsAdmin($Rep_Frm_ID);
			  
			  /*
			     verifier if the type is new replay 
			  */
			       
				if(($Replay_type != 'newreply') and  ($Replay_type != 'editreply')) hl();
				
		     /*
			    lock topic 
			 */
			 
			 $SamLock_Topic = 0 ;
			 
			    if($UsrIsAdmin == 1 && $Replay_Mode == 2 ) $SamLock_Topic = 1 ;
				
		     /*
			     verifier if the topic id and forum id is true
			 */
			     if(ULV == 4) $AND = null;
				 
				 // modilator and monitor
				 
				 elseif ((ULV == 2 or ULV == 3 ) AND $UsrIsAdmin == 1 )
				 
				    $AND = 'AND `t_delete` = 0 AND `t_archive` = 0';
					
				 else $AND = 'AND `t_delete` = 0 AND `t_archive` = 0  AND `t_approve` = 0 ';
				 
			  
                if($Rep_Topic_Id > 0 && $Rep_Frm_ID > 0 )
                {			    
				     $Topic_Frm_Id_True = parent::SamSelectCount('t_subject','topics','WHERE topic_id = "'.$Rep_Topic_Id.'"  AND forum_id ="' .$Rep_Frm_ID.' '.$AND.' "') ;
			         
					   // header location if not verifier 
					   
					     if($Topic_Frm_Id_True != 1 ) hl();
		
		        } else hl();
				
				    if($UsrIsAdmin == 1)
					{
					     $TopcANd = '';
					}
					else
					{
					
					      $TopcANd = '`t_approve` = 0 AND `t_status` = 0 ';
					
					
					}
				
				// cat id
				
				$Rep_Cat_Id  = parent::SamsolSelectOne('cat_id','topics','WHERE topic_id = "'.$Rep_Topic_Id.'" '.$TopcANd.'') ;
				
				   
				    /*
					    if is null the the notic 
					*/
					  
					  //  if($Rep_Cat_Id <= 0 )  return 'topicpending';
				
				 
				/*
				  inisial the val insert
				*/
				
				$Rep_Value = array();
				
				/*
				
				 '`cat_id`', '`forum_id`',' `topic_id`',' `reply_id`', '`r_author`', '`r_message`', '`r_date`',' `r_hide`', '`r_approve`', '`r_delete`', 
		        '`r_auth_del`', '`r_hide_text`', '`r_archive_flag`', '`r_type`'
				*/
				
				 // cat id
				$Rep_Value['cat_id'] = '"'.$Rep_Cat_Id.'" ,';
				
				 // forum id
				$Rep_Value['forum_id'] = '"'.$Rep_Frm_ID.'" ,';
				
				// topic id
				$Rep_Value['topic_id'] = '"'.$Rep_Topic_Id.'" ,';
				
				// replay id 
				$Rep_Value['reply_id'] = '"null" ,';
				
				// author id
			    $Rep_Value['r_author'] = '"'.UID.'" ,';	
				
				// msg
			    $Rep_Value['r_message'] = '"'.$Replay_msg.'" ,';	
				
				// date
			    $Rep_Value['r_date'] = '"'.time().'" ,';	
				
				// r hide
				$Rep_Value['r_hide'] = '"0" ,';
				
				// aprove reply
				$Rep_Value['r_approve'] = '"'.(UPS > 50 ? 0 : 1 ).'" ,';
				
				// e deleted 
				$Rep_Value['r_delete'] = '"0" ,';
				
				// r author hwo delet replay
				$Rep_Value['r_auth_del'] = '"0" ,';
				
				// hide tevt
				$Rep_Value['r_hide_text'] = '"0" ,';
				
				// in archiv
				$Rep_Value['r_archive_flag'] = '"0" ,';
				
				// type
				$Rep_Value['r_type'] = '"0"  ';
				
				/*
				
				   get filed of replay from parent class ** parent::$FILED
				*/
				 global $SamFailed;
				
				$Sam_Rep_Filed =  implode (',',  $SamFailed['REP']);
				
				// value insert
				
				$Sam_Value_Insert = implode(' ',$Rep_Value);
			
				   // insert
				   
				     if( $Replay_type == 'newreply' )
					 
				     parent::SamInsert('replies',$Sam_Rep_Filed,$Sam_Value_Insert);
					 
					/*
					
					  updat replay and insert in edit 
					*/
					   					 /*
                        inset in change topic
					    '`id`', '`user_id`', '`post_id`', '`post_type`', '`change_subject`', '`change_message`', '`subject`', '`message`', '`date`'
					 */
					   
			    if( $Replay_type == 'editreply' )
			    {    
					 $Replay_Id = (int)$_POST['reply'];
					 
					    if( $Replay_Id < 0 ) hl();
		 
					
					 $MSG   = parent::SamsolSelectOne('r_message','replies','WHERE reply_id = "'.$Replay_Id.'"') ;
					 
					 if( !  $MSG  ) hl();
					 
					  global $SamFailed;
					 
					 $FILEDCHANGE = $SamFailed['CHNGE'] ;
					 
					 $FILEDCHANGE = implode(',',$FILEDCHANGE) ;
					 
					 //$change  = array();
					 
					 $change  = 'null,';
					 
					 $change .= '"'.UID.'",';
					 
					 $change .= '"'.$Replay_Id.'",';
					 
					 $change .= '"r",';
					 
					 $change .= 'null,';
					 
					 $change .= 'null,';
					 
					 $change .= '"null",';
					 
					 $change .= '"'. SamAddSslash($MSG)  .'",';
					 
					 $change .= '"'.time().'"';
					 
					 parent::SamInsert('edit',$FILEDCHANGE,$change);
					 
					 $TopUpdat        =  '  `r_message` = "'. $Replay_msg .'" ';
 
			         $Where           = 'WHERE `reply_id` = "'.$Replay_Id.'" ';
					 
					   /*
					    aprove topic if posts < 50
					   */
					  if(UPS < 50)
					  
					  $TopUpdat      .= ', r_approve = "1"   ';
					  
					 
					 parent::SamUpdatMor('replies',$TopUpdat,$Where);
					 
					 /*
					     updat replay stat
					 */
 
					 					 
					 $TopUpdatStatF   = 'status , author ,id , type , date ';
					 
					 $TopUpdatStatV   = ' "0" ,  "'.UID.'" , "'.$Replay_Id.'" ,   "f" , "'.time().'" ';
 
					 //if(UID != 1)
					 parent::SamInsert('reply_status',$TopUpdatStatF,$TopUpdatStatV);
 
				     $ToicID    = $Rep_Topic_Id;
					 
				}
					 /*
					    fin of updat topic
					 */
                        					 
					   /* if quck mode == 2
					     lock topic
						 or hide topic
					   
					   */
					        if($UsrIsAdmin == 1 && ($Replay_Mode == 2 OR $Replay_Lock_Topic == 1 OR $Replay_Hide_Topic == 1 ) && $Replay_type == 'newreply'  )
					        {   
						         // lock topic
						        if ($Replay_Mode == 2 XOR $Replay_Lock_Topic == 1 )
							    {
						 	       $Filed_Insert = 't_status';
								   $type = 'l';
							    }
							      // hide topic 
							    if($Replay_Hide_Topic == 1 )
							    {
							       $Filed_Insert = '`t_hide`';
								   $type = 'i';
							    }
								parent::SamUpdat('topics',$Filed_Insert,'1','WHERE `topic_id` = "'.$Rep_Topic_Id.'"');

								 /*
								     insert topic stat
								 */
					             $TopUpdatStatF   = 'status , author ,id , type , date ';
					 
					             $TopUpdatStatV   = ' "0" ,  "'.UID.'" , "'.$Rep_Topic_Id.'" ,   "'.$type.'" , "'.time().'" ';
 
					             //if(UID != 1)
								 
					             parent::SamInsert('topic_status',$TopUpdatStatF,$TopUpdatStatV);
						    }
					    // updat lastinfo 
						if( UPS > 50 && $Replay_type == 'newreply' )
					    {
						
						    parent::SamUpdat('users','u_lp_date',time(),'WHERE user_id = "'.UID.'"');
					   
				            parent::SamUpdat('users','u_posts',' `u_posts` + "1" ','WHERE user_id = "'.UID.'"');
					  
				            parent::SamUpdat('forum','f_replies',' `f_replies` + "1" ','WHERE f_id = "'.$Rep_Frm_ID.'"');
					  
					       // last post dat inforum
				           parent::SamUpdat('forum','f_lp_date',time(),'WHERE f_id = "'.$Rep_Frm_ID.'"');
				      
					       // last post user id
					       parent::SamUpdat('forum','f_lp_author',UID,'WHERE f_id = "'.$Rep_Frm_ID.'"');
						   
						   // updat replays topics
						   
						    parent::SamUpdat('topics','t_replies','`t_replies` + "1" ','WHERE `topic_id` = "'.$Rep_Topic_Id.'"');
							
							// last post dat intopics
						    parent::SamUpdat('topics','t_lp_date',time(),'WHERE `topic_id` = "'.$Rep_Topic_Id.'"');
							
							// last post  user id in topic
						    parent::SamUpdat('topics','t_lp_author',UID,'WHERE `topic_id` = "'.$Rep_Topic_Id.'"');
						
						
						
						}
				
			          if($Replay_type == 'newreply')
					  
 				         $MSGFINAL = UPS > 50 ?  'reply_add_ok' : 'reply_add_pending';
						 
						 else  $MSGFINAL = UPS > 50 ?  'reply_change_ok' : 'reply_change_pending';
				
				$Caller   = $Caller ;
				
				$ToicID   = $Rep_Topic_Id ;
				
				$ForumId  = $Rep_Frm_ID ;
	 
			 return  array($MSGFINAL,$Caller,$ToicID,$ForumId);
		
		}
		/*
		     function insert file
		*/
		static function SamInsFile() 
		{
		
		   /* '`m_id`' ,'`m_uid`' ,'`m_date`' ,'`m_type`' ,'`m_size`'
		   
		   [upl2] => Array ( 
		   [name] => [type] => [tmp_name] => [error] => 4 [size] => 0 ) )
		   */
		   
		   // name of file 
		   $Sam_File_Name = $_FILES['upl2']['name'];
		   
		   // type of file  png gif ....
		   $Sam_File_type = $_FILES['upl2']['type'];
		   
		   // continue of file   
		   $Sam_File_cont  = $_FILES['upl2']['tmp_name'];
		   
		 // error of file   
		   $Sam_File_error = (int)$_FILES['upl2']['error'];
		   
		 // size of file   
		   $Sam_File_size = $_FILES['upl2']['size'];
		   
		   // verification 
		   
		    $array_image_type = array('image/gif','image/png','image/jpg','image/jpeg');
			
			$Sam_Max_Upload_Size = 50000;
			
			    if( (! in_array($Sam_File_type,$array_image_type) ) OR  ($Sam_File_error > 0 )
				OR (empty($Sam_File_cont)) OR ($Sam_File_size > $Sam_Max_Upload_Size ) ) return false;
				
				
		        $content = base64_encode(file_get_contents( $Sam_File_cont));
				
				$Sam_URL_file =  (md5(time().UID));
				
				$Sam_URL_file =  substr($Sam_URL_file, 0, 10);
				
                $fp = @fopen(ROOT . "/SamSkins/medales/".$Sam_URL_file.".html","w");
				
                @fwrite($fp,$content);
				
                @fclose($fp);
				
				
		   
		   /*
		       get value insert
			   '`m_id`' ,'`m_uid`' ,'`m_date`' ,'`m_countent`','`m_type`' ,'`m_size`'
		   */
		    
		   $medales_file_filed = implode(',',parent::$FILED['MEDALES_F']); 
		   // id
		   $Sam_Medal_Values = 'null,';
		   
		   // m_uid
		   $Sam_Medal_Values .= '"'.UID.'",';
		   
		 // time
		   $Sam_Medal_Values .= '"'.time().'",';
		   
		 // file url
		   $Sam_Medal_Values .= '"'.$Sam_URL_file .'",';
		   
		 // type
		   $Sam_Medal_Values .= '"'.$Sam_File_type.'",';
		   
		 // size
		   $Sam_Medal_Values .= '"'.$Sam_File_size.'" ';
		   
		   parent::SamInsert('medales_files',$medales_file_filed,$Sam_Medal_Values); 
		   
		
		  return true;
		
		}
 
 
	}