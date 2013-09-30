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
 
 
 
    class member extends SAMSOL_MODEL
	{
	
	    private static $Sam_Memb_Id;
		
	    private static $Sam_Memb_JS;
          
	     
        private static function SamIsstId($uid)
        {
		     // iniital user id
		    self::$Sam_Memb_Id = (int)$uid;
			
			// select count were uid 
			
			$Us = parent::SamSelectCount('u_level','users','WHERE user_id = "'.self::$Sam_Memb_Id.'"') ;
			
			    if($Us == 1) return  $Us;
				
				else return hl();
 
		
		
		}	
        static function SamGetMemberInfo($uid)
        {
		
		     self::SamIsstId($uid) ;
			 
			 
			 $SamUsrFiled = implode(',',parent::$FILED['USER']);
			 //
             $SelCtObject = parent::SamSetObject($SamUsrFiled,'users','WHERE `user_id` = "'.self::$Sam_Memb_Id.'" LIMIT 1 ');
			 
			 /*
			    '`user_id`',' `u_name`', '`u_login_name`', '`u_pass`', '`u_def_pass`', '`u_email`',' `u_country`', '`u_level`', '`u_posts`',
				'`u_points`',' `u_reg_date`', '`u_lh_date`', '`u_lp_date`',' `u_last_ip`', '`u_ip`', '`u_occupation`', '`u_sex`',' `u_age`',
				'`u_online`', '`u_bio`', '`u_sig`', '`u_marstatus`', '`u_city`', '`u_state`', '`u_photo_url`', '`u_title`', '`view`', '`u_color`', '`u_browse`',
				'`u_face`', '`u_allowmsg`', '`u_last_level`', '`u_status`', '`u_color_choise`', '`u_skin`',' `u_opacity`','`u_template`'  
				 
			 */
			 
			 // user id
			 $Sam_Memb_JS  = 'var SamUid =  '.$SelCtObject->user_id  ." ; \n";
			 
			 //member name
			 $Sam_Memb_JS  .= 'var SamUserName = "'.SamFiJs($SelCtObject->u_name).'" ;' ."\n";
		
		    //member SamPOsts
			 $Sam_Memb_JS  .= 'var SamPOsts = "'.SamFiJs($SelCtObject->u_posts).'" ;'  ."\n";
		
		    //member SamPoints
			 $Sam_Memb_JS  .= 'var SamPoints = "'.SamFiJs($SelCtObject->u_points).'" ;'  ."\n";
		
		    //member SamPoints
			 $Sam_Memb_JS  .= 'var SamEmail = "'.SamFiJs($SelCtObject->u_email).'" ;'  ."\n";
		
		     //member Samdescript
			 $Sam_Memb_JS  .= 'var Samdescript = "'.SamFiJs($SelCtObject->u_title).'" ;'  ."\n";
		
		     //member Sam country
			 $Sam_Memb_JS  .= 'var Samcountry = "'.SamFiJs($SelCtObject->u_country).'" ;'  ."\n";
		    
			//member Sam adress
			 $Sam_Memb_JS  .= 'var Samadress = "'.SamFiJs($SelCtObject->u_city).' <br> '.SamFiJs($SelCtObject->u_state).'" ;'  ."\n";
		
		     //member Samsituation
			 $Sam_Memb_JS  .= 'var Samsituation = "'.SamFiJs($SelCtObject->u_status).' " ;'  ."\n";
		    
			 //member SamAge
			 $Sam_Memb_JS  .= 'var SamAge = "'.SamFiJs($SelCtObject->u_age).' " ;'  ."\n";
		
		     //member Sam LastVisite
			 $Sam_Memb_JS  .= 'var SamLastVisite =  "'.SamDat($SelCtObject->u_lh_date,4). '"  ; '  ."\n";
		
		    //member Sam regdat
			 $Sam_Memb_JS  .= 'var regdat =  "'.SamDat($SelCtObject->u_reg_date,4). '"  ; '  ."\n";
		    
			//member Sam view
			 if(ULV != 4 ) $v = null ; else $v = $SelCtObject->view;
			 
			 $Sam_Memb_JS  .= 'var Samview =  "'. $SelCtObject->view . '"  ; '  ."\n";
		
		    //member Sam SamLastIp
			if(ULV != 4 ) $u_last_ip = null ; else $u_last_ip = $SelCtObject->u_last_ip;
			
			 $Sam_Memb_JS  .= 'var SamLastIp =  "'. $u_last_ip . '"  ; '  ."\n";
		
		    //member Sam SamLastIp
			if(ULV != 4 ) $u_ip = null ; else $u_ip = $SelCtObject->u_ip;
			
			 $Sam_Memb_JS  .= 'var SamIp =  "'. $u_ip . '"  ; '  ."\n";
		
		    //member Sam SamLastIp flage
			if(ULV != 4 ) $flg = null ; else $flg = mjorFunc::SamGetIpName($SelCtObject->u_last_ip);
			 $Sam_Memb_JS  .= 'var SamIpflage =  "'.$flg. '"  ; '  ."\n";
		
		    //member Sam SamBroser
			 $Sam_Memb_JS  .= 'var SamBroser =  "'. SamFiJs( $SelCtObject->u_browse)  . '"  ; '  ."\n";
		
		    //member Sam online
			   if($uid == 1  or (UID !=1 && $uid == 27)) $on = 0 ; else $on = $SelCtObject->u_online;
			 $Sam_Memb_JS  .= 'var SamUsrIsOnline =  "'.  $on  . '"  ; '  ."\n";
		      
			  
		     //member Sam SamImgPro
			 $Sam_Memb_JS  .= 'var SamImgPro =  "'.  SamFiJs($SelCtObject->u_photo_url)  . '"  ; '  ."\n";
		
		    //member Sam SamImgPro
			 $Sam_Memb_JS  .= 'var SamImgPro_ral =  "'.  SamFiJs($SelCtObject->u_template)  . '"  ; '  ."\n";
		
		
		
		
		
		    return $Sam_Memb_JS;
		
		}		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	 
	 
	 
	 
	}