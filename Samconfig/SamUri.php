<?php
/*------------------------------------------------------\
| @ Salam alikom                                        |
| @ samuri.php file                                     |
| @ UCMVJ 0.1                                           |
| @ This script programed by Bellia Habib - SAMSOL -    |
| @ In 22/11/2012 01:43                                 |
| @ All right reserved bellia habib 2012                |
\------------------------------------------------------*/
    if(!defined('SAMSOL')) die('can not');
     
	   final class SamUri_MVC
	{
	
	     private static $SamUri; 
		 
	     private static $SamArrUri; 
		 
	     private static $SamFilter;
		 
	     private static $SamClass; 
		 
	     private static $SamFunction; 
		 
	     private static $SamFirstArg; 
		 
	     private static $SamSecondArg; 
		 
	     private static $ObjectSamsol; 
		 
	     private static $SamMethod; 
	 
	    function __construct()
		{
		
	     self::$SamUri       = NULL; 
		 
	     self::$SamArrUri    = NULL; 
		 
	     self::$SamFilter    = NULL;
		 
	     self::$SamClass     = NULL; 
		 
	     self::$SamFunction  = NULL; 
		 
	     self::$SamFirstArg  = NULL; 
		 
	     self::$SamSecondArg = NULL;
		 
	     self::$ObjectSamsol = NULL;
		 
	     self::$SamMethod    = NULL;
		 
		}
        private static function SamInitialUri()
		{

	       // self::$SamUri      = trim($_SERVER['REQUEST_URI']);
			 
	         self::$SamUri      = implode('/',array_keys($_GET));
	 
	         self::$SamArrUri   = explode('/',self::$SamUri) ;
	 
	         self::$SamFilter   = array_filter(self::$SamArrUri) ;
	 
	        // array_shift(self::$SamFilter);
	 
	         return self::$SamArrUri ;
			 
	    }
		private static function SamGetOrderUri()
		{     
		
             $SamNetUrl          = self::SamInitialUri();
		
	         self::$SamClass     = isset($SamNetUrl[0]) ? htmlspecialchars(trim($SamNetUrl[0])) : NULL; 
		 
	         self::$SamFunction  = isset($SamNetUrl[1]) ? htmlspecialchars(trim($SamNetUrl[1])) : NULL; 
		 
	         self::$SamFirstArg  = isset($SamNetUrl[2]) ?  $SamNetUrl[2] : NULL; 
		 
	         self::$SamSecondArg = isset($SamNetUrl[3]) ?  $SamNetUrl[3] : NULL;
 
		}
		private static function SamGetClass()
		{
		     
                if(!file_exists(ROOT.SEP.FlSC.SEP.FlMCTRL.SEP.self::$SamClass.'.cls.php'))
		        {
                     self::$SamClass = 'sam';
		        }
             require ROOT.SEP.FlSC.SEP.FlMCTRL.SEP.self::$SamClass.'.cls.php';
	 
                if(! class_exists(self::$SamClass))
		        {
                     self::$SamClass = 'sam';
		        }
				
             self::$ObjectSamsol = new self::$SamClass; 
		
		}
		private static function SamGetMethod()
		{
		
             self::$SamMethod = ! isset(self::$SamFunction) ? NULL : self::$SamFunction  ; 
	 
                if(! method_exists(self::$ObjectSamsol,self::$SamMethod) )
		        {
                  //die('The func '.$method.' was not fond');
		 
		             self::$SamMethod = 'index';  
		        }
		
		}
		private static function SamDesplyMethod()
		{
		
             self::$SamFirstArg  = is_null(isset(self::$SamFirstArg) ? self::$SamFirstArg : null) ? false : self::$SamFirstArg ;
	 
             self::$SamSecondArg = is_null(isset(self::$SamSecondArg) ? self::$SamSecondArg : null) ? false : self::$SamSecondArg ;

             call_user_func_array(array(self::$ObjectSamsol,self::$SamMethod),array(self::$SamFirstArg,self::$SamSecondArg)); 
		
		}
	    final public static function SamExucut()
		{
		
		     self::SamGetOrderUri();
			 
		     self::SamGetClass();
			 
		     self::SamGetMethod();
			 
		     self::SamDesplyMethod();

		}
 
	}
 
		   
	     SamUri_MVC::SamExucut();