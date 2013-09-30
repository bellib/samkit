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

		    if(isset($_POST['scw'])  )
		    {
			
		     parent::SamModel('login'); 
		 
		     $LogMsg    = parent::$_SM_model->SamGetAllPstLogun();
		 
		        if(empty($LogMsg))
			 
			     header('Location: '.GURLCLS);
				 
			    else
		        {
				
		         self::$ModeSAM        = 'notice';
		 
		         self::$VwSAM          = 'notice' ;
			 
			     self::$DataSAM        = array(
			 
                 'Noti' => $LogMsg,
				
				 'Sc'   => GURLCLS
			 
		 
		            );
			    }
			}else die('hhh');
		
		


?>