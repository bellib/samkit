<?php
/*********************************************** 
* - Samkit 0.0.1                               *
* - Programed by Bellia Habib * SAMSOL *       *
* - feb 2013                                   *
* - Is not free solft                          *
***********************************************/
 /*
    a : approved 
	h : holde
	l : lock
	e : edited
	i : hide
 */


       class aprove  extends SAMSOL_MODEL
       {
	   
	        private static $UsrId = 0;
		 
		
		    private static function SamInsetSatats($m,$val,$type,$uid)
		    {         
			            
			          if($m === 'r')  $filed = 'reply';
					  
			          if($m == 't')  $filed = 'topic';
					  
					 $TopUpdatStatF   = 'status , author ,id , type , date ';
					 
					 $TopUpdatStatV   = ' "0" ,  "'.$uid.'" , "'.$val.'" ,   "'.$type.'" , "'.time().'" ';
 
					 parent::SamInsert($filed.'_status',$TopUpdatStatF,$TopUpdatStatV);
		
		    }
			static function memberLevel($uid)
			{
			
			    $ml =   parent::SamsolSelectOne('u_level','users',' WHERE  `user_id` = "'.(int) $uid.'" ') ;
			
			   if($ml > 0 ) return $ml ; else return 0;
			
			}
			/*
			   updat last post info
			*/
			private static function SamUpdatLastInfo($type,$value)
			
			{
			        
					    if($type == 'r')
                 		{			  
						   $table = 'replies';
						   $filed = 'reply_id';
						   $author = 'r_author';
					  
					    }
						
					    if($type == 't')
  					    {
					      $table = 'topics';
						  $filed = 'topic_id';
						  $author = 't_author';
					    }
			
                            // select thuthor of rep or topic
					   
					        $authore  =   parent::SamsolSelectOne($author,$table,'WHERE `'.$filed.'` = "'. $value.'" ') ;
							
							
							// frm id
							 //die($value);
							$Frm_Id   =   parent::SamsolSelectOne('forum_id',$table,' WHERE `'.$filed.'` = "'. $value.'" ') ;
							
							
                        	// last post  date				   
						    parent::SamUpdat('users','u_lp_date',time(),'WHERE user_id = "'.$authore.'"');
							
					        //  updat posts
				            parent::SamUpdat('users','u_posts',' `u_posts` + "1" ','WHERE user_id = "'.$authore.'" ');
							
							 
						    if($type == 'r')
					        {   
		                       // updat replayes count in frm					
	     		               parent::SamUpdat('forum','f_replies',' `f_replies` + "1" ','WHERE `f_id` = "'.$Frm_Id.' "',__line__);
							   
							   //  topic id
							  $Rep_Topic_Id =  parent::SamsolSelectOne('topic_id' ,'replies','WHERE `'.$filed.'` = "'. $value.'" ') ;
							   
						       // updat replays topics
						       
						       parent::SamUpdat('topics','t_replies','`t_replies` + "1" ','WHERE `topic_id` = "'.$Rep_Topic_Id.'"');
							   

							   // last post dat intopics
						       parent::SamUpdat('topics','t_lp_date',time(),'WHERE `topic_id` = "'.$Rep_Topic_Id.'"');
							
							   // last post  user id in topic
						       parent::SamUpdat('topics','t_lp_author',$authore,'WHERE `topic_id` = "'.$Rep_Topic_Id.'"');
						
							 
					        }
					       // last post dat inforum
						   
				           parent::SamUpdat('forum','f_lp_date',time(),'WHERE `f_id` = "'.$Frm_Id.'" ');
				      
					       // last post user id
					       parent::SamUpdat('forum','f_lp_author',$authore,'WHERE `f_id` = "'.$Frm_Id.'"');
						   

 
			
			}
			static function approve($tpe,$val,$uid)
			{ 
			    
				if( is_array($val) )
				{
				    //$val = implode('-',$val);
				 
				}
                 				
			   // echo $tpe .'<br >' . $val .'<br />'.$uid;
				
				 //verifier
				    if($tpe == 'ra' )
			        {
					
					    // if replayse no >1
						
						if(! is_array($val))
						{
						      
							// topic id
							$Aprove_FR_Id =  parent::SamsolSelectOne('forum_id','replies','WHERE reply_id = "'. (int)$val.'"') ;
 
							
							// verifier
							
							if( ! $Aprove_FR_Id ) hl();
							
							// is admin

							$Is_SamAdmin = mjorFunc::SamIsAdmin( $Aprove_FR_Id );
							// verifier
							
							if( $Is_SamAdmin != 1 ) hl();
							
							 parent::SamUpdat('replies','r_approve',0,'WHERE reply_id = "'. $val.'"');
							 
							 // updat statu
							 self::SamInsetSatats('r',$val,'a',$uid);
							 
							 // updat last info
							 self::SamUpdatLastInfo('r',$val);
							 
							 
 
						}
					
					
					
					
					}
					if($tpe == 'a')
					{
						    $Array_Topic = array();
							    
								/*
								   put the values of $val in array if is array
								*/
								if(is_array($val)) 
                                {
								    foreach($val as $key => $id)
								    {
								      $Array_Topic[] = $id;
								    }
								
								}								
						        else $Array_Topic[] =  $val;
								
							 foreach ($Array_Topic as $key => $v):
							// topic id
							$Aprove_Topic_Id =  $v ;
							 
							// verifier
							
							$IS_true =  parent::SamSelectCount('cat_id','topics','WHERE topic_id = "'.$Aprove_Topic_Id.'" ') ;
							
							if( $IS_true != 1 ) hl();
 
							// is admin
							
							$Aprove_FR_Id =  parent::SamsolSelectOne('forum_id','topics','WHERE topic_id = "'. (int)$v.'"') ;

							$Is_SamAdmin = mjorFunc::SamIsAdmin( $Aprove_FR_Id );
							// verifier
							
							if( $Is_SamAdmin != 1 ) hl();
							
							  // updat topic
							 parent::SamUpdat('topics','t_approve',0,'WHERE topic_id = "'. $Aprove_Topic_Id.'"');
							 
							 // updat topics+1 from forum
							 $ForumId = parent::SamsolSelectOne('forum_id','topics','WHERE topic_id = "'.$Aprove_Topic_Id.'"') ;
							 
							 parent::SamUpdat('forum','f_topics',' `f_topics` + "1" ','WHERE f_id = "'.$ForumId.'"');
							 
							 // updat statu
							 self::SamInsetSatats('t',$Aprove_Topic_Id,'a',$uid);
					
					         // updat last info
							 self::SamUpdatLastInfo('t',$Aprove_Topic_Id);
					
					        endforeach;
					
					
					    
					}
			
			
			
			
			}
			/*
			  fonction stic and unstic  topic
			  l u
			  i => hide , 
			  v => un hide
			*/
			static function Samsolstic_Lock($CType,$CV,$UID)
			{
			        $Is_SamAdmin = mjorFunc::SamIsAdmin(false,(int) $CV);
							// verifier
							
			        if( $Is_SamAdmin != 1 ) hl();
				    // topic stic
				    if($CType == 'p'  OR $CType == 'P' )
				    {
			          $filed = 't_stick';  
				    }
					// topic lock unlock
				    if($CType == 'l'  OR $CType == 'u' )
				    {
			          $filed = 't_status';  
				    }
				    // topic hide un hide
				    if($CType == 'i'  OR $CType == 'v' )
				    {
			          $filed = 't_hide';  
				    }
				    // topic delit un delit
				    if($CType == 'd'  OR $CType == 'z' )
				    {
			          $filed = 't_delete';  
				    }
				 // verifier topic if not in archiv
				 
				 $Topic_Is_Normal =  parent::SamSelectCount('cat_id','topics','WHERE topic_id = "'.(int) $CV.'" AND `t_archive` = 0  AND `t_archive_flag` = 0  AND `t_hide_text` = 0  AND `t_delete` = 0 ') ;
				 
				    if( $Topic_Is_Normal != 1) hl();
				 // get value of filed
				 
				 $Topic_Stic = parent::SamsolSelectOne($filed,'topics','WHERE `topic_id` = "'.(int) $CV.'"') ;
				  
				    // topic is srticed and cmd is 1 
				    if( ($CType == 'p' && $Topic_Stic == 1) OR ($CType == 'P' && $Topic_Stic == 0) ) 
					{
					
					    return False;
					
					
					}
					// topic lock un lock
				    if( ($CType == 'l' && $Topic_Stic == 1) OR ($CType == 'u' && $Topic_Stic == 0) ) 
					{
					
					    return False;
					
					
					}
				    // topic lock un lock
				    if( ($CType == 'i' && $Topic_Stic == 1) OR ($CType == 'v' && $Topic_Stic == 0) ) 
					{
					
					    return False;
					
					
					}
				     // topic delet un delet
				    if( ($CType == 'd' && $Topic_Stic == 1) OR ($CType == 'z' && $Topic_Stic == 0) ) 
					{
					
					    return False;
					
					
					}
				 
			    if($CType == 'p' ) 
				{
				   $vl = 1 ; 
				   $tp =  'p';
			    
				}
				if($CType == 'P' ) 
				{
				   $vl = 0; 
				   $tp =  'x';
				
				}
                // lock
				if($CType == 'l' ) 
				{
				   $vl = 1; 
				   $tp =  'l';
				
				}
				// un lock
				if($CType == 'u' ) 
				{
				   $vl = 0; 
				   $tp =  'u';
				
				}
	           // hide
				if($CType == 'i' ) 
				{
				   $vl =   1  ; 
				   $tp =  'i';
				
				}
				// un hide
				if($CType == 'v' ) 
				{
				   $vl =   0 ; 
				   $tp =  'v';
				}
                // delet
				if($CType == 'd' ) 
				{
				   $vl =   1 ; 
				   $tp =  'd';
				
				}
			    // un  delet
				if($CType == 'z' ) 
				{
				   $vl =   0 ; 
				   $tp =  'r';
				
				}
				//updat  stic or un stictopic
				parent::SamUpdat('topics', $filed, $vl,'WHERE topic_id = "'. $CV.'"');
							 
				  // updat statu
			     self::SamInsetSatats('t',$CV,$tp ,$UID);
			}
			static function SamHid_Delet_Rep($cmd,$val,$uid)
			{
	 
			   
			    if($cmd == 'ri')
				{
				    $filed = 'r_hide';
					$vl    = 1 ;
					$type  = 'i';
				
				}
			    if($cmd == 'rv')
				{
				    $filed = 'r_hide';
					$vl    = 0 ;
					$type  = 'v';
				
				}
			    if($cmd == 'rd')
				{
				    $filed = 'r_delete';
					$vl    = 1 ;
					$type  = 'd';
				
				}
			    if($cmd == 'ru')
				{
				    $filed = 'r_delete';
					$vl    = 0 ;
					$type  = 'u';
					
				
				}
			
			
			
			
			
			
			    parent::SamUpdat('replies', $filed, $vl,'WHERE reply_id = "'. $val.'"');
				
				self::SamInsetSatats('r',$val,$type,$uid);
			
			}
		
		
		}
 