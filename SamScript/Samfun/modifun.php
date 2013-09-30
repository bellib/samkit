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
 
 
				 // desply models 
				  parent::SamModel('modila'); 
				  
				  // Array
				  $Sam_All_Frm =  parent::$_SM_model->SamGetFroumMidila();
				 
				  self::$ModeSAM        = 'modi';
		 
				  self::$VwSAM          = 'modi' ;
			
				  self::$DataSAM        = array(
			 
                   'AllFrlm'     => $Sam_All_Frm[0], 
				   
                   'FRMNOTIFI'   => $Sam_All_Frm[1], 
		 
				  );






















?>