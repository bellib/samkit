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
 
	  // get patren samforum
        $SamPatren = '/^samforum[0-9]/i';
	  
	     // kill script if url no match
	        if(! preg_match($SamPatren,self::$Farg))
		 
		     die('fdfdf');
			 
	  	$Samirst = str_replace('samforum','',self::$Farg);
      
        /*
		  get all topic from frm mdl
		*/
		
		     // verifier fid if is number 
			 
			if((int)$Samirst <= 0 )
			
			    header('Location:'.GURL.'sam/');
				
		parent::SamModel('frm');
		
	    self::$Topics = parent::$_SM_model->SamGetTopics($Samirst);














?>