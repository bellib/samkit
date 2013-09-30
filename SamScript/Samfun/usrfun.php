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
 
 
	 self::$ModeSAM        = 'user';
		 
	 self::$VwSAM          = 'user' ;
	 
	   $user =  str_replace('us',null,htmlspecialchars(self::$Samuid));
	   
	    
	   parent::SamModel('member'); 
	   
	   
	   $Samsol_User = parent::$_SM_model->SamGetMemberInfo($user); 
	   
	   
	   self::$DataSAM        = array(
	   
	   
	      'USER_Info'   =>  $Samsol_User
	   
	   );











