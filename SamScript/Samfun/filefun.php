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

            if(isset($_FILES['upl2']) && isset($_SESSION['SamF']) && self::$argemntLeft == $_SESSION['SamF']  )
		    {
			        
					
				  unset($_SESSION['SamF']);
				  
				  self::$ModeSAM        = 'notice';
		 
				  self::$VwSAM          = 'notice' ;
				  
				  parent::SamModel('insert'); 
				  
				  $Reponce_to_file = parent::$_SM_model->SamInsFile();
				  
				  $MSG = $Reponce_to_file == true ? 'File_Uploade_ok' : 'File_Uploade_no';
				  
				  $Src = GURLCLS.'samfiles';
	 		  
				  self::$DataSAM        = array(
			 
				 'Noti' => $MSG  ,
				
				 'Sc'   => $Src  
 
				  );
			
			
			}
			else
			{
			  $_SESSION['SamF']     = md5( UNM . time() );
			  
              self::$ModeSAM        = 'files';
		 
              self::$VwSAM          = 'file';
			  
			  parent::SamModel('files'); 
			  
				  self::$DataSAM        = array(
			 
				 'SESSION' =>  $_SESSION['SamF']  ,
				 
				 'FILES'   =>  parent::$_SM_model->Sam_GetFiles()
				
				 
 
				  );
 
			}













