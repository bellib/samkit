<?php
/*********************************************** 
* - Samkit 0.0.1                               *
* - Programed by Bellia Habib * SAMSOL *       *
* - feb 2013                                   *
* - Is not free solft                          *
***********************************************/
 /*
    a : approved 
	h : holde
	l : lock
	e : edited
	i : hide
 */
	class robots extends SAMSOL_CONTROLLER
	{
	
	    static $robot ;
	
	    function __construct()
		{
 
		   

 		     self::$robot  = "User-agent: * "   . " \r\n ";  
 		     self::$robot .= "  "   . " \r\n ";  
 		     self::$robot .= "Sitemap: ".GURL."sitemap.xml"   . " \r\n ";  
			
		   
				  @header('Content-Type: text/txt'); 
		
		   echo  self::$robot;
 
		
		}
		function index()
		{
		 
		
		
		
		}
	
	
	
	} 
	
	
	
	