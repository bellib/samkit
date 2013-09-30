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
 
 
    class regester extends SAMSOL_MODEL
	{
	
	    private function SamGetAllPost()
	    {
		  header( 'Cache-Control: no-store, no-cache, must-revalidate' ); 
          header( 'Cache-Control: post-check=0, pre-check=0', false ); 
          header( 'Pragma: no-cache' ); 
		 $this->UsrName   = htmlspecialchars(trim($_POST['user_name']));
		  
	     $this->UsrEmail  = htmlspecialchars(trim($_POST['user_email']));
		 
	     $this->UsrPass   = htmlspecialchars(trim($_POST['user_password1']));
		 
	     $this->UsrCity   =  htmlspecialchars($_POST['user_city']) ;
		 
	     $this->UsrStat   = htmlspecialchars($_POST['user_state']) ;
		 
	     $this->UsrContry = $_POST['user_country'];
		 
	     $this->UsrJop    =  htmlspecialchars($_POST['user_occupation']) ;
		 
	     $this->UsrAge    = intval($_POST['user_age']);
		 
	     $this->UsrSex    = $_POST['user_sex'];
		 
	     //$Captcha   = HtmlSpecialchars($_POST['security_code']);
		 
	     $this->UsrDate   = time();
		 
	     $this->Pass      = MD5(MD5($this->UsrPass));
		 
	     $this->Pass2     = base64_encode($this->UsrPass);
		 
		 $this->UsrIp     = getenv('remote_addr');
		

		}
	    function SamVeriFUsrInfo()
		{
		    global $SamFailed ;
		
		 $this->SamGetAllPost();
         
		 $NameExist  = parent::SamSelectCount('u_name','users','WHERE u_name = "'.$this->UsrName.'"') ;
		 
		 $NameFilter = parent::SamSelectCount('name','name_filter','WHERE name = "'.$this->UsrName.'"') ;
		 
		 $EmailExist = parent::SamSelectCount('u_name','users','WHERE u_email = "'.$this->UsrEmail.'"') ;
		 
			     if( self::SamBadWord($this->UsrName,'WORD') == TRUE  OR  empty($this->UsrName)) 
				     
					$RegisterPro = 'registration_failed';
					 
			    if( self::SamBadWord($this->UsrName,'namonly') == TRUE  OR  empty($this->UsrName)) 
				     
					  $RegisterPro = 'registration_failed';
 
	        if  ($NameExist > 0) 
		
	         $RegisterPro = 'registration_failed_name_exists';
 
	        elseif  ($NameFilter > 0)
		
	         $RegisterPro = 'registration_failed_name_invalid';
 
	        elseif  ($EmailExist > 0) 
		
	         $RegisterPro = 'registration_failed_email_used';
 
	        elseif (empty($this->UsrName) ||  empty($this->UsrPass)) 
		
	         $RegisterPro = 'registration_failed';
			 
			else
			{

				//user_id
	         $SamValuInsert  = "NULL, ";
			 
			// die('ttt');
              //u_name
		     $SamValuInsert .= "'".$this->UsrName."', ";
		     
			 
			 //u_login_name
			 $SamValuInsert .= "'".$this->UsrName."', ";
			 
			 
			 //u_pass
		     $SamValuInsert .= "'".$this->Pass."', ";
			 
			 //u_def_pass
		     $SamValuInsert .= "'".$this->Pass2."', ";
			 
			 
			 //u_email
		     $SamValuInsert .= "'".$this->UsrEmail."', ";
			 
			 
			 //u_country
		     $SamValuInsert .= "'".$this->UsrContry."', ";
			 
			 
			 //u_level
		     $SamValuInsert .= "1 , ";
			 
			 // posts
			 
		     $SamValuInsert .= "0 , ";
			 
			 //points
			 
		     $SamValuInsert .= "0 , ";				
			 
			 // regester date 
			 
		     $SamValuInsert .= "'".time()."', ";
			 
			 // last visite
			 
		     $SamValuInsert .= "'".time()."', ";
			 
			 // last post date
			 
		     $SamValuInsert .= "'".time()."' , ";
			 
			 // last ip
			 
		     $SamValuInsert .= "'".$this->UsrIp."', ";
			 
			 //   ip
			 
		     $SamValuInsert .= "'".$this->UsrIp."', ";
			 
			 // u_occupation
			 
		     $SamValuInsert .= "null, ";
			 
			 // sex u_sex
			 
		     $SamValuInsert .= "'".$this->UsrSex."', ";
			 
			 // age
			 
			 		 /**
 				'`user_id`',' `u_name`', '`u_login_name`', '`u_pass`', '`u_def_pass`', '`u_email`',' `u_country`', '`u_level`', '`u_posts`',
				'`u_points`',' `u_reg_date`', '`u_lh_date`', '`u_lp_date`',' `u_last_ip`', '`u_ip`', '`u_occupation`', '`u_sex`',' `u_age`',
				'`u_online`', '`u_bio`', '`u_sig`', '`u_marstatus`', '`u_city`', '`u_state`', '`u_photo_url`', '`u_title`', '`view`', '`u_color`', '`u_browse`',
				'`u_face`', '`u_allowmsg`', '`u_last_level`', '`u_status`', '`u_color_choise`', '`u_skin`',' `u_opacity`','`u_template`'  **/
 
		     $SamValuInsert .= "'".$this->UsrAge ."', ";
			 
			 // on line 
		     $SamValuInsert .= " 1 , ";
			 
			 //u_bio
		     $SamValuInsert .= "null, ";
			 
			 // u_sig
		     $SamValuInsert .= "null, ";
			 
			 // u_marstatus
		     $SamValuInsert .= "null, ";
			 
			 //u_city
		     $SamValuInsert .= "'".$this->UsrCity  ."', ";
			 
			 // u_state
		     $SamValuInsert .= "'".$this->UsrStat ."', ";
			 
			 // photo
			 
		     $SamValuInsert .= "null, ";
			 
			 //title
		     $SamValuInsert .= "null, ";
			 
			 // vew 
		     $SamValuInsert .= "0, ";
			 
			 // color
		     $SamValuInsert .= "null, ";
			 
			 //broser
		     $SamValuInsert .= "null, ";
			 
			 //face
		     $SamValuInsert .= "null, ";
			 
			 // u_allowmsg
		     $SamValuInsert .= "null, ";
			 
			 // u_last_level
		     $SamValuInsert .= "null, ";
			 
			 //u_status
		     $SamValuInsert .= "1, ";
			 
			 //u_color_choise
		     $SamValuInsert .= "null, ";
			 
			 // u_skin
		     $SamValuInsert .= "null, ";
			 
			 //u_opacity
		     $SamValuInsert .= "null, ";
			 
			 //u_template
		     $SamValuInsert .= "null  ,";
		     $SamValuInsert .= "null  ,";
		     $SamValuInsert .= "null  ,";
		     $SamValuInsert .= "null  ,";
		     $SamValuInsert .= "null  ,";
		     $SamValuInsert .= "null  ,";
		     $SamValuInsert .= "null   ";
			  
			 
			 
			 /**
 				'`user_id`',' `u_name`', '`u_login_name`', '`u_pass`', '`u_def_pass`', '`u_email`',' `u_country`', '`u_level`', '`u_posts`',
				'`u_points`',' `u_reg_date`', '`u_lh_date`', '`u_lp_date`',' `u_last_ip`', '`u_ip`', '`u_occupation`', '`u_sex`',' `u_age`',
				'`u_online`', '`u_bio`', '`u_sig`', '`u_marstatus`', '`u_city`', '`u_state`', '`u_photo_url`', '`u_title`', '`view`', '`u_color`', '`u_browse`',
				'`u_face`', '`u_allowmsg`', '`u_last_level`', '`u_status`', '`u_color_choise`', '`u_skin`',' `u_opacity`','`u_template`'  **/
			 
			 
			 $SamUsrFiled = implode(',',$SamFailed['USER']);
			
			 $insert      = parent::SamInsert('users',$SamUsrFiled,$SamValuInsert);
			
			 $RegisterPro = 'registration_ok';
			 
			} 
 
         return $RegisterPro; 	
		
		
		
		}
		private static function SamBadWord($msg,$bad)
		{
		 
		    $ErrWord = array(
			    'admin','administration','sex','fuck','zamel','na9ch','المدير','إداري','نقش','www','http','com','عطاي','forum'
   
					  );
					  
				for($i=0;$i<count($ErrWord);$i++)
				
				    if(preg_match('/'.$ErrWord[$i].'/',$msg ) && $bad == 'WORD'   )
				    {
 
				         return TRUE;
					 
		            }
				    if( ! preg_match('/[a-z0-9]{3,15}/',$msg ) && $bad ==  'namonly'  )
				    {
 
				         return TRUE;
					 
		            }
  
		    return FALSE;
		}
		private static function SamEmailMatch($Mail)
		{
     
		    $patren = '/^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/';

                if( ! preg_match($patren,$Mail) OR  ! filter_var($Mail, FILTER_VALIDATE_EMAIL))
                {
					 
				     return true;
					 
			    }					
            
		    return FALSE;
		
        }
	 
 
	}
