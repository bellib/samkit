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

       class Chang extends  SAMSOL_CONTROLLER
	   {
	     
	     protected static $tz;
		 
	     protected static $argemntRight;
		 
	    static function index()
		{
		
		   
		
		
		}
		function __construct()
		{
		      session_start();
		
		
		
		
		
		
		
		
		
		
		}
		static function SamTime($x)
		{  
		    self::$tz = $x;
		
   		    
          
            if( is_numeric(self::$tz) )
			{ 
			    if(isset($_SESSION[SESI.'tz']))
				
                 unset($_SESSION[SESI.'tz']);
			   
              $_SESSION[SESI.'tz']  =  self::$tz;
			  
			  header('Location: '.GURLCLS);
			  
            }else header('Location: '.GURLCLS);
		 
		
		}
	    static function samstl($stl)
		{
 
		  self::$argemntRight = htmlspecialchars($stl);
           
		    if( !  self::$argemntRight )
     
	             header('Location:'.GURLCLS);

            if(isset($_SESSION['STL']))
	        {
	             unset($_SESSION['STL']);
	        }
	        if(self::$argemntRight == 'classic')
	   
	             $style = 17;
		 
	        elseif(self::$argemntRight == 'black')

	             $style = 18;
		 
	        else  header('Location:'.GURLCLS);
	 
	            $_SESSION['STL'] = $style  ;
	 
	         header('Location:'.GURLCLS);
		
		
		}
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   }

 