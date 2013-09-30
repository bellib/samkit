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
 
 
    class login extends SAMSOL_MODEL
	{
	
	
	    function SamGetAllPstLogun()
        {
		
		 $UsrName     = htmlspecialchars(trim($_POST['Username']));
		 
         $UsrPass     = md5(md5(htmlspecialchars(trim($_POST['Password']))));
		 
         $UsrRema     =  (int)$_POST['remember'] ;
		 
		    if( empty($UsrName) || empty($UsrPass) )
			
			 return NULL;
		 
		 $SamVerifier = parent::SamSelectCount('u_name','users','WHERE u_name = "'.$UsrName.'"   AND u_pass = "'.$UsrPass.'" ') ;
		 
		    if($SamVerifier < 1)
			{
			 
			 $SamNotName = parent::SamSelectCount('u_name','users','WHERE u_name = "'.$UsrName.'"  ') ;
			 
			 //$SamNotPass = parent::SamSelectCount('u_name','users','WHERE u_pass = "'.$UsrPass.'" ') ;
			 
			    if($SamNotName < 1 )
				
			     $Noti = 'login_bad_user';

				else 

			     $Noti = 'login_bad_password';

			}
			else
			{
			 
			 $UserName  = parent::SamsolSelectOne('u_name','users','WHERE u_name = "'.$UsrName.'" ');
			 
			 $UserLevel = parent::SamsolSelectOne('u_level','users','WHERE u_name = "'.$UsrName.'" ');
			 
			 $UserId    = parent::SamsolSelectOne('user_id','users','WHERE u_name = "'.$UsrName.'" ');
			 
			 parent::SamUpdat('users','u_online','1','WHERE `user_id` = "'.$UserId.'" ');
             
             // updat last information 
             
              parent::SamUpdat('users','`u_lh_date`',time(),'WHERE `user_id` = "'.$UserId.'" ');
              
              // updat last ip 
              $ip = getClientIp();
			  
              parent::SamUpdat('users','`u_last_ip`',"'$ip'",'WHERE `user_id` = "'.$UserId.'" ');
			
			  $New_pass = md5(md5($UserId.'SAMSOL'));
			     // sessin
			    if($UsrRema == 0 || $UsrRema == 1 )
				{
  
				 $_SESSION[SESI.'usrid'] = $UserId; 
				 $_SESSION[SESI.'no']    =  $New_pass ; 
				
				}
				 // cookies
				if($UsrRema == 2)
				{
 
				  setcookie(SESI.'usrid',$UserId,time()+60*60*24*365);
				  
				  setcookie(SESI.'no',$New_pass,time()+60*60*24*365);
				
				}
				
			 $Noti = '';
 
			}
			
		 return $Noti; 

		}
 
	}