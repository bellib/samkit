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
	 
    require ROOT.SEP.FDRVR.SEP.'SamTabel.php';
	
	
    require ROOT.SEP.FUNCFOLD.SEP.'StrFunc.php';
	
	/***
	   - Iclude file of db cofig 
	**/
	    require ROOT.SEP.'Samconfig/dbinfo.php';
		
		
	/*
	   includ the model file and help file model
	*/
	
    require ROOT.SEP.FDRVR.SEP.'SamModel.cls.php';
	
	/**/

	
	// get ip contry
	
    //require ROOT.SEP.LNG.SEP.'phpip2country.class.php';
	
    require ROOT.SEP.FDRVR.SEP.'mjorFunc.cls.php';
	
	// class deo
    require ROOT.SEP.FDRVR.SEP.'class_seo.cls.php';
	 
	 
	/* includ language*/
	
	require ROOT.SEP.LNG.SEP.'SamLanguage'.SEP.'Arabic.php';
	
	/*
	   includ the controller file
	*/
	
    require ROOT.SEP.FDRVR.SEP.'SamCntrl.cls.php';