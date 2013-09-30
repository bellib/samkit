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
         // file model
         parent::SamModel('constrm');
		 
		 
	     
	      $Cat = parent::$_SM_model->SamGetHome();
		  
		 self::$ModeSAM  = 'main';
		
         self::$VwSAM = 'main';
		 
		  self::$DataSAM         = array(
	          
	          'CAT'   =>  $Cat,
			  
	          'Topics'   => self::$Topics,
			  
			  'ONLINE'   =>  parent::$_SM_model->SamGetOnline()
	         
	        );
 
	  










?>