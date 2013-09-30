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
 
 

                 parent::SamModel('member_edit'); 
   

				  
				  //print_r($_POST);
				  
				  /*
				  
				  [user_id] => 810567 
				  [caller] => 
				  [user_city] => city 
				  [user_state] => zone 
				  [user_country] => TP 
				  [user_occupation] => jope 
				  [user_marstatus] => sitiation 
				  [user_age] => 
				  [user_gender] => 1 
				  [user_hideemail] => 0 
				  [user_allowmsgs] => 0 
				  [user_hideactivity] => 1 
				  [user_title] => real name 
				  [user_photo_url] => photo 
				  [user_homepage] => page oficial 
				  [user_link1] => url 
				  [user_link2] => 3 
				  [user_quote] => qouite 
				  [user_bio] => sira 
				  [user_hobbies] => hoby 
				  [user_lnews] => last news 
				  [user_font] => decotype thuluth 
				  [user_fontsize] => 22 
				  [user_fontalign] => r 
				  [user_color] => #FF0066 
				  [user_opacity] => 18 
				  [scw] => 1366 
				  [user_skin] => 6 
 
				  */ 
				if(self::$argemntLeft == 'mod2')  
				{
				     $Sam_Edit = array();
					 
					  $SamArrayKeyExist = array('user_id','caller','user_city','user_state','user_country','user_occupation','user_marstatus',
					   'user_age','user_gender','user_hideemail','user_allowmsgs','user_hideactivity','user_title','user_photo_url','user_homepage',
					   'user_link1','user_link2','user_quote','user_bio','user_hobbies','user_lnews','user_font','user_fontsize','user_fontalign','user_color','user_opacity',
					   'scw','user_skin' );
					   
				    if(isset($_POST) && ULV > 0)
				    {
				         foreach($_POST as $k => $v):
						 
						  if(! in_array($k,$SamArrayKeyExist)) die('<h5>SAMKIT ERROR : </h5>the information not completed !! .');
						  
						  $Index = htmlspecialchars($k);
						  
						  $Sam_Edit[$Index] = mysql_real_escape_string($v);

                         endforeach;						 
                         
						 // print count (array_diff_assoc($SamArrayKeyExist,array_keys($Sam_Edit )));
                       //  print_r($Sam_Edit);
					   
					   // $SamArrayKeyExist = array('user_id','caller','user_city','user_state','user_country','user_occupation','user_marstatus',
					   // 'user_age','user_gender','user_hideemail','user_allowmsgs','user_hideactivity','user_title','user_photo_url','user_homepage',
					   // 'user_link1','user_link2','user_quote','user_bio','user_hobbies','user_lnews','user_font','user_fontsize','user_color','user_opacity',
					   // 'scw','user_skin' );
					      // for($x=0;$x<count($SamArrayKeyExist);$x++):
						  
						      // if($SamArrayKeyExist[$x] != $Sam_Edit[$x] )
							    
								// die($Sam_Edit[$x]);
								
						  // endfor;
						  
						  $Sam_model_reponce  = parent::$_SM_model->SamUpdatUserInfo($Sam_Edit);
						  
						  $MSG  = 'member_details_changed';
						  
						  $Src  = $Sam_Edit['caller'];
						  
						 self::$ModeSAM        = 'notice';
		 
				         self::$VwSAM          = 'notice' ;
						 
						 
						 
						 self::$DataSAM        = array(
						 
				  		 
				         'Noti' => $MSG  ,
				
				         'Sc'   => $Src ,
						 
						 
						 );
					}

                }else
				{
				    	 self::$ModeSAM        = 'editmember';
		 
				         self::$VwSAM          = 'editmember' ;
						 
						 $SamInfo   = parent::$_SM_model->SamDesplayInfoMember();
						 
						 self::$DataSAM        = array(
						 
						 
						   'INFO'   => $SamInfo 
						 
						 
						 );
				   
				}










                