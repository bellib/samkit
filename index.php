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
 
	define('SAMSOL',true);
	
	define('SEP',DIRECTORY_SEPARATOR);
	
	define("ROOT",dirname(__FILE__));
	
    /***
	* desplay error
	**/
        error_reporting(E_ALL);
        @ini_set('display_errors','On');
        @ini_set('log_errors', 'On');
        @ini_set('error_log', 'error_log');
        @ini_set('error_log', ROOT.SEP.'error_log.txt');
 
	    @ini_set("doc_root","");
 

        @ini_set("cgi.force_redirect",0);
		
    @require ROOT.SEP.'Samconfig/SamDefin.php';
    
	@require ROOT.SEP.'Samconfig/SamInclud.php';
	
	@require ROOT.SEP.'Samconfig/SamUri.php';
	
	  