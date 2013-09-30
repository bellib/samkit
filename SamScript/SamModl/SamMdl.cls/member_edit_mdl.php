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
 
 

    class member_edit extends SAMSOL_MODEL //
	{
	     private static $UID;
	
	     /*
		    function to desplay user info 
		 */
		 
		static  function SamDesplayInfoMember()
		{
		
		    self::$UID = UID;
			
			// filed user
			
			$User_Sam_Filed = implode(',',parent::$FILED['USER']);
			
			// user in object
			
			$User_Object = parent::SamSetObject($User_Sam_Filed,'users','WHERE `user_id` = "'.self::$UID.'"');
			
			/* user level */
			
			$Sam_Memb_JS  =  vJs('user_level',$User_Object->u_level);
		
		/*
						'`user_id`',' `u_name`', '`u_login_name`', '`u_pass`', '`u_def_pass`', '`u_email`',' `u_country`', '`u_level`', '`u_posts`',
				'`u_points`',' `u_reg_date`', '`u_lh_date`', '`u_lp_date`',' `u_last_ip`', '`u_ip`', '`u_occupation`', '`u_sex`',' `u_age`',
				'`u_online`', '`u_bio`', '`u_sig`', '`u_marstatus`', '`u_city`', '`u_state`', '`u_photo_url`', '`u_title`', '`view`', '`u_color`', '`u_browse`',
				'`u_face`', '`u_allowmsg`', '`u_last_level`', '`u_status`', '`u_color_choise`', '`u_skin`',' `u_opacity`','`u_template`'  
				
		*/
		
		 /* user home page */
			
			$Sam_Memb_JS  .=  vJs('user_homepage',$User_Object->u_home_page);
	
			/* user home user_link1 */
			
			$Sam_Memb_JS  .=  vJs('user_link1',$User_Object->u_link1);
	
		    /* user home user_link2 */
			
			$Sam_Memb_JS  .=  vJs('user_link2',$User_Object->u_link2);
	
	    /* user home user_quote */
			
			$Sam_Memb_JS  .=  vJs('user_quote',$User_Object->u_quote);
	
		 /* user home user_hobbies */
			
			$Sam_Memb_JS  .=  vJs('user_hobbies',$User_Object->u_hobbies);
	
		 /* user home user_lnews */
			
			$Sam_Memb_JS  .=  vJs('user_lnews',$User_Object->u_lnews);
	
	    /* user home user_skin */
            $Sam_Memb_JS  .=  vJs('user_skin',$User_Object->u_skin);
	
	    // get user skin
		   $font = self::SamGetAutrInfo();
		   
		/* user home user_font */
           $Sam_Memb_JS  .=  vJs('user_font',$font['user_font_face']);
	    
		/* user home user_font */
           $Sam_Memb_JS  .=  vJs('user_fontsize',$font['user_fontsize']);
	    
		/* user home user_fontcolor */
           $Sam_Memb_JS  .=  vJs('user_fontcolor',$font['user_fontcolor']);
	
        /* user home user_fontalign */
           $Sam_Memb_JS  .=  vJs('user_fontalign',$font['user_fontalign']);
	
        /* user home user_opacity */
           $Sam_Memb_JS  .=  vJs('user_opacity',$User_Object->u_opacity);
	
        /* user home user_title */
           $Sam_Memb_JS  .=  vJs('user_title',$User_Object->u_title);
	 
    	 /* user home user_country */
           $Sam_Memb_JS  .=  vJs('user_country',$User_Object->u_country);
	   
	    /* user home user_gender */
           $Sam_Memb_JS  .=  vJs('user_gender',$User_Object->u_sex);
	
         /* user home user_photo_url */
           $Sam_Memb_JS  .=  vJs('user_photo_url',$User_Object->u_photo_url);
	
        /* user home sira datia */
           $Sam_Memb_JS  .=  vJs('user_bio',$User_Object->u_bio);
	
        /* user home user_age */
           $Sam_Memb_JS  .=  vJs('user_age',$User_Object->u_age);
	
         /* user home user_city */
           $Sam_Memb_JS  .=  vJs('user_city',$User_Object->u_city);
	
 
	     /* user home sitiation  */
           $Sam_Memb_JS  .=  vJs('user_marstatus',$User_Object->u_marstatus);
	
 
	  /* user home job */
           $Sam_Memb_JS  .=  vJs('user_occupation',$User_Object->u_occupation);
	
 
	  /* user home zon mecheria */
           $Sam_Memb_JS  .=  vJs('user_state',$User_Object->u_status);
	
          return $Sam_Memb_JS;
		}
		/*
		   function return array => ('user_font',);
		*/
		private static function SamGetAutrInfo()
		{
		
		    $SkinFiled = parent::SamsolSelectOne('u_template','users','WHERE user_id = "'.UID.'"') ;
			
			   
			   
			if(! empty($SkinFiled ))
			{
			
			  $Array_skin =  explode('*|*',$SkinFiled);
			  
			 return array(
			 
			   'user_fontsize'     => $Array_skin[0],
			   
			   'user_font_face'     => $Array_skin[1],
			   
			   'user_fontcolor'    => $Array_skin[2],
			   
			   'user_fontalign'    => $Array_skin[3],
			 
			 );
			
			}
		    else return NULL;
		
		
		
		
		
		
		
		}
		
		/*
		     updat user info 
		
		*/
		static function SamUpdatUserInfo(array $USR)
		{
		     // get the filed updat
			 
		    $Sam_filed_value_udated = array(
			
   
				   'user_city' => '`u_city`','user_state' => '`u_status`','user_country' => '`u_country`','user_occupation' => '`u_occupation`','user_marstatus' => '`u_marstatus`',
				   
				   'user_age' => ' `u_age`','user_allowmsgs' => '`u_allowmsg`','user_title' => '`u_title`','user_photo_url' => '`u_photo_url`',
				   
				   'user_homepage' => '`u_home_page`',
				   
                   'user_link1' => '`u_link1`','user_link2' => '`u_link2`','user_quote' => '`u_quote`' ,'user_bio' => '`u_bio`','user_hobbies' => '`u_hobbies`',
				   
				   'user_lnews' => '`u_lnews`','user_font' =>  '`u_template`','user_opacity' => ' `u_opacity`','user_skin' => '`u_skin`'
				   
				  /*[user_hideemail] => 0  ,  [user_hideactivity] => 0 */ 
   
			
			);
			
			     
				foreach($Sam_filed_value_udated as $key => $vla):
				
				    if($key ==  'user_font' )
				    {
					    
 
					    $USR['user_font'] = $USR['user_fontsize'].' *|* ' .$USR['user_font'].' *|* ' .$USR['user_color'].' *|* ' .$USR['user_fontalign'].' *|* '  ;
					
					}
					  // die($USR['user_skin']);
					 
					if(( int) $USR['user_skin'] < 0 or ( int) $USR['user_skin'] > 39  ) continue;
					   
					   
					   
					    if(! empty($USR[$key]))
				
			      parent::SamUpdat('users',$vla,"'".$USR[$key]."'", 'WHERE user_id = "'.UID.'"');
				 
				// echo '1'.$vla .'--'.$USR[$key] .'<br>' ; 
			 
			    endforeach;
	 
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	} 
/*

sql: 
 ALTER TABLE  `afo_users` CHANGE  `u_template`  `u_template` MEDIUMTEXT NULL DEFAULT  '';
 ALTER TABLE  `afo_users` ADD  `u_home_page` MEDIUMTEXT NOT NULL ;
 ALTER TABLE  `afo_users` ADD  `u_link1` MEDIUMTEXT NULL DEFAULT NULL ;
 ALTER TABLE  `afo_users` ADD  `u_link2` MEDIUMTEXT NULL DEFAULT NULL ;
 ALTER TABLE  `afo_users` ADD  `u_quote` MEDIUMTEXT NULL DEFAULT NULL ;
 ALTER TABLE  `afo_users` ADD  `u_hobbies` MEDIUMTEXT NULL DEFAULT NULL ;
 ALTER TABLE  `afo_users` ADD  `u_lnews` MEDIUMTEXT NULL DEFAULT NULL ;
 ALTER TABLE  `afo_medales_files` CHANGE  `m_countent`  `m_countent` MEDIUMTEXT NOT NULL ;
*/


