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

		    if(UID > 0 && self::$argemntLeft == strtoupper(md5(UID.UNM)) )
			{
	            if( isset($_SESSION[SESI.'usrid']))
			    {
				 parent::$_SM_model->SamLogOut(UID);
				 
			     unset($_SESSION[SESI.'usrid']);
				 
			     @session_destroy();
			
			    }
			    if( isset($_COOKIE[SESI.'usrid']))
			    {
                    parent::$_SM_model->SamLogOut(UID);
					
					$_SESSION[SESI.'usrid_Cooki'] = true;
		          
                   // setrawcookie(SESI.'usrid','' ) ;
			    }
				
				else header('Location: '.GURLCLS);
				 
				 
				  
				 hl();
				 
				
		    }
		    else
			
		     header('Location: '.GURLCLS);
		
	 

?>