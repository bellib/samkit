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
 
     parent::SamModel('forum'); 
			 
     $Activ =  parent::$_SM_model->SamGetActiv();
 
       self::$DataSAM = array(
	   
	   
	   'Activ'  => $Activ
	   
	   
	   
	   );