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
 
      if(!defined('SAMSOL')) die('can not');
 
      define('FlSC','SamScript');
	  
	  $SIT_URL = '//localhost/ml/';
	  
	  $editor_url = '//localhost/ed/';
	
	  define('FlMCTRL','SamContrl');
	  
	  define('FDRVR','Samdriver');
	  
	  define('FMDL','SamModl');
	  
	  define('FVW','SamVw');
	  
	  define('SESI',md5('SAMSOL'));
 
     @define('FUNCFOLD','SamFunctions');
	 
     @define('TEMB','SamSkins');
	 
     @define('GURL',$SIT_URL);
	 
     @define('GURLCLS',$SIT_URL .'?sam/');
	 
     @define('GURLGET',$SIT_URL .'?expget/');
	 
	 @define('FNT','');
	 
	 @define('DM',$editor_url);
	 
	 // folder language
	 
	 @define('LNG','helpSamFile');
	 
	 /*
	     actualisser la page
	 */
 
	  define('AC',time());
 
     require ROOT.SEP.LNG.SEP.'SamLanguage'.SEP.'install.php';

 