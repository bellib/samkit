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

 

        // new topic
		/*
		               self::$argemntLeft  = $mode;
            
            self::$argemntRight = $wate;
		*/

		 if(UID > 0 )
		 {
		    if(self::$argemntLeft == 'newtopic'   && isset(self::$argemntRight) && UID > 0 )
			{
			
			   			  
			 $CountntId = explode('-',self::$argemntRight);
			 
			   if(! is_array($CountntId) or count($CountntId) != 3 ) hl();
			 
			 // forum id
			 
			 $forumId   = str_replace('forum','',$CountntId[0]);
         
			 $Qid      = $CountntId[1];
			 
			 $src      = $CountntId[2];
			 
			 $src      = str_replace('z','/',$src);
			 
			 parent::SamModel('editor'); 
                
				if($forumId > 0 && $Qid == strtoupper(md5(UID.UNM))  )  
				{
				
			     $FrmResult = parent::$_SM_model->SamGetfid($forumId);
			 
			     $fID       = (int)$FrmResult[0];
				 
			     $foid = (int)$forumId;
				 
			     self::$FID = (int)$forumId;
				 
				}
				else hl();
				
				 $_SESSION['Top']      = md5(time().$Qid);
				
				 $SessioNum            = $_SESSION['Top']; 
                 
				 				
			     		 self::$ModeSAM  = 'editor';
		
                         self::$VwSAM = 'editor';
 
			     self::$DataSAM        = array(
			 
                 'FID' => isset($foid) ? $foid : 0,
				 
				 'SES'    => $SessioNum,
				 
				 //'BROSER'     => self::$Broser,
				 
				 'FNAME'      => $FrmResult[1],
				 
				 'EditMode'   => self::$argemntLeft,
				 
				 'src'       => $src
 
		        );	

 
			}
            // edit topic			
			elseif(self::$argemntLeft == 'edittopic'  && isset(self::$argemntRight) && UID > 0)
			{
			   $CountntId = explode('-',self::$argemntRight);
				 
			   if(! is_array($CountntId) or count($CountntId) != 3 ) hl();
			 
			     $TopicID      = (int)str_replace('topic','',$CountntId[0]);
 
			     $src      =  $CountntId[2];
				 
			     $src      = str_replace('z','/',$src);
				 
			     $Qid          = $CountntId[1];
				 
				  if( $Qid  != strtoupper(md5(UID.UNM))) hl();
				 
				 parent::SamModel('editor'); 
				 
				 $EditResult = parent::$_SM_model->samEdittopic($TopicID);
			
			        if(! is_array($EditResult))
					{    
		             self::$ModeSAM        = 'notice';
		 
		             self::$VwSAM          = 'notice' ;
			 
			         self::$DataSAM        = array(
			 
                     'Noti' => $EditResult,
				
				     'Sc'   => $src
			 
		 
		                 ); 
					 
                    }
                    else					
					{
				     $_SESSION['Top']      = md5(time().$Qid);
				
				     $SessioNum            = $_SESSION['Top']; 
			
		             self::$ModeSAM        = 'editor';
		 
		             self::$VwSAM          = 'editor' ;
					 
					 self::$FID = (int)$EditResult[0] ;
 
			         self::$DataSAM        = array(
			 
                     'FID'        => $EditResult[0] ,
				 
				     'SES'        => $SessioNum,
				 
				     'BROSER'     => '',
				 
				     'TopiTitle'  => $EditResult[1],
					 
				     'Msg'    => $EditResult[2],
					 
				     'TopiId'     => $EditResult[3],
					 
					 'FNAME'      => $EditResult[4],
				 
				     'EditMode'   => self::$argemntLeft,
					 
					 'src'       => $src
 
		        );		
					
					
					
					
					
					} 
					 
					 
					 
					 
					 
		    }
			elseif(self::$argemntLeft == 'newreply'  && isset(self::$argemntRight) && UID > 0)
			{
			   $CountntId = explode('-',self::$argemntRight);
				 
			   if(! is_array($CountntId) or count($CountntId) != 3 ) hl();
			 
			     $TopicID      = (int)str_replace('topic','',$CountntId[0]);
 
			     $src      =  $CountntId[2];
				 
			     $src      = str_replace('z','/',$src);
				 
			     $Qid          = $CountntId[1];
				 
				 if( $Qid  != strtoupper(md5(UID.UNM))) hl();
				 
				 parent::SamModel('editor'); 
				 
				 $EditResult = parent::$_SM_model->SamGetInfoRep($TopicID);
			 
			        if(! is_array($EditResult))
					{    
					     // forum id
					     
						   
		                 self::$ModeSAM        = 'notice';
		 
		                 self::$VwSAM          = 'notice' ;
			 
			             self::$DataSAM        = array(
			 
                         'Noti' => $EditResult,
				
				         'Sc'   => $src
			 
		 
		                 ); 
					 
                    }
                    else					
					{
					     self::$FID = $EditResult[0];
					    
				         $_SESSION['Top']      = md5(time().$Qid);
				
				         $SessioNum            = $_SESSION['Top']; 
			
		                 self::$ModeSAM        = 'editor';
		 
		                 self::$VwSAM          = 'editor' ;
 
			             self::$DataSAM        = array(
 
				         'SES'        => $SessioNum,
				 
				         'TopiTitle'  => $EditResult[1],
					 
				         'USRNAM'     => $EditResult[2],
					 
				         'TopiId'     =>   $TopicID ,
                          
						  'src'       => $src,
				 
				         'EditMode'   => self::$argemntLeft
 
		                );		
                    }  
			
	 
			}
		    elseif( self::$argemntLeft == 'editreply'   && isset(self::$argemntRight) && UID > 0   )
			{
			
                 $CountntId = explode('-',self::$argemntRight);
				 
				    if((int)count($CountntId) != 3 ) hl();
				 
				 $Rep      = (int)str_replace('rep','',$CountntId[0]);
 
				 $Qid          = $CountntId[1];
				 
				 // src 
				 $src          = $CountntId[2];
				 
				 $src      = str_replace('z','/',$src);
				    
					if($Rep > 0  && $Qid === strtoupper(md5(UID.UNM))  )
					{
					     parent::SamModel('editor'); 
						 
						 $EditResult = parent::$_SM_model->samEditReply($Rep );
						 // $RepAuth,$RepMsge,$TopTitlet,$fid,$tid)
						 
						    if( is_array($EditResult) && count($EditResult) == 5 )
							{
					              self::$FID = $EditResult[3];
								 
				                 $_SESSION['Top']      = md5(time().$Qid);
				
				                 $SessioNum            = $_SESSION['Top']; 
			
		                         self::$ModeSAM        = 'editor';
		 
		                         self::$VwSAM          = 'editor' ;
								 
								 
 
			                     self::$DataSAM        = array(
			  
				                 'SES'        => $SessioNum,
				 
				                 'TopiTitle'  => $EditResult[2],
					 
				                 'USRNAM'     => $EditResult[0],
					 
				                 'TopiId'     => $EditResult[4],

				                 'EditMode'   => self::$argemntLeft,
								 
								 'Msg'    => $EditResult[1],
								 
								 'rId'    => $Rep,
								 
								  'src'       => $src
 
		                        );
							}
						    else
							{
		                         self::$ModeSAM        = 'notice';
		 
		                         self::$VwSAM          = 'notice' ;
			 
			                     self::$DataSAM        = array(
			 
                                 'Noti' => 'notmember',
				
				                 'Sc'   => 'ff'
			 
		 
		                        );
							
							}
					}
			        else 
					{
					     
						hl();
					     
					}  
					 
			
			
			
			
			
			
			}
			elseif( self::$argemntLeft == 'qt'   && isset(self::$argemntRight) && UID > 0   )
			{
                 $CountntId = explode('-',self::$argemntRight);
				 
				    if((int)count($CountntId) != 4 ) hl();
				 
				 $RepID      = (int)str_replace('rep','',$CountntId[0]);
 
				 $Tid          = (int)$CountntId[1];
				 
				 $Qid          = $CountntId[2];
				 
				 // src 
				 $src          = $CountntId[3];
				 
				 $src      = str_replace('z','/',$src);
				    
					if($RepID > 0  && $Tid > 0  && $Qid === strtoupper(md5(UID.UNM))  )
					{
					     parent::SamModel('editor'); 
						 
						 $EditResult = parent::$_SM_model->samQtReply($RepID,$Tid);
						 
						    if( is_array($EditResult) && count($EditResult) == 9 )
							{
					              self::$FID = $EditResult[8];
								 
				                 $_SESSION['Top']      = md5(time().$Qid);
				
				                 $SessioNum            = $_SESSION['Top']; 
			
		                         self::$ModeSAM        = 'editor';
		 
		                         self::$VwSAM          = 'editor' ;
 
			                     self::$DataSAM        = array(
								 // $TopiTitle,$Topic_USRNAM,$Msg,$quoteAuthor,$quoteAuthorID, $quoteDate,$quoteTopic, $quoteReply,$Forum_Id
			  
				                 'SES'        => $SessioNum,
				 
				                 'TopiTitle'  => $EditResult[0],
					 
				                 'USRNAM'     => $EditResult[1],
					 
				                 'TopiId'     => $Tid,

				                 'EditMode'   => 'newreply' ,
								 
								 'Msg'    => $EditResult[2],
								 
								 'quoteAuthor' => $EditResult[3],
								 
								 'quoteAuthorID' => $EditResult[4],
								 
								 'quoteDate' => $EditResult[5],
								 
								 'quoteTopic' => $EditResult[6],
								 
								 'quoteReply' => $EditResult[7],
								 
 
								  'src'       => $src
 
		                        );
							}
						    else
							{
		                         self::$ModeSAM        = 'notice';
		 
		                         self::$VwSAM          = 'notice' ;
			 
			                     self::$DataSAM        = array(
			 
                                 'Noti' => 'notmember',
				
				                 'Sc'   => 'ff'
			 
		 
		                        );
							
							}
			        
						 
				    }
			}
			elseif(self::$argemntLeft == 'message'   && isset(self::$argemntRight) && UID > 0 )
			{
			

		             self::$ModeSAM        = 'editor';
		 
		             self::$VwSAM          = 'editor' ;
					 
					 // create session 
					$_SESSION['Top']      = md5(time().self::$QUID);
					 
					 $SessioNum            = $_SESSION['Top']; 
					 
					 $MsgInfo = explode('-',self::$argemntRight);
					 
					    if( count($MsgInfo) != 3 ) 
					    {
                            hl();

						
						}
						
					$Sam_member_id_arr 	= str_replace('user',null,$MsgInfo[0]);
					
					// get member id
					$Sam_member_id 	= (int) $Sam_member_id_arr ;
					
					// get QID
			        $Member_Sam_Qid = $MsgInfo[1];
					
					// get src
					$src  = $MsgInfo[2];
					
					parent::SamModel('editor'); 
					
					$EditResult = parent::$_SM_model->samSendMail($Sam_member_id);
					
					
					// 
			        self::$DataSAM        = array(
								 // $TopiTitle,$Topic_USRNAM,$Msg,$quoteAuthor,$quoteAuthorID, $quoteDate,$quoteTopic, $quoteReply,$Forum_Id
			  
				         'SES'        => $SessioNum,
				 
				         'MAILLER'  => $EditResult ,
					  
					    // 'USRNAM'     => $EditResult[1],
					 
				        // 'TopiId'     => $Tid,
                       
					     'EditMode'   => 'message' ,
			
			
			
			            );
			
			
			
			
			
			}
			else hl();
			
			}
			else 
		    {
							
							
				 $CountntId = explode('-',self::$argemntRight);
				 
			   if(! is_array($CountntId) or count($CountntId) != 3 ) hl();
			 
			     $TopicID      = (int)str_replace('topic','',$CountntId[0]);
 
			     $src      =  $CountntId[2];
				 
			     $src      = str_replace('z','/',$src);
				 
			     $Qid          = $CountntId[1];
				 
		                         self::$ModeSAM        = 'notice';
		 
		                         self::$VwSAM          = 'notice' ;
			 
			                     self::$DataSAM        = array(
			 
                                 'Noti' => 'notmember',
				
				                 'Sc'   => $src 
			 
		 
		                        );
							
							}
 















?>