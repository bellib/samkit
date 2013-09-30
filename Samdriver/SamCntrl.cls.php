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
 
 
    class SAMSOL_CONTROLLER
	{
	
	     protected static $_SM_model ;

         protected static $_SM_desplay ;	 
	 
         protected static $_SM_lib ;	
		 
         protected static $_SM_Func ;	 
	 
	     protected static $file;
		 
	     protected static $InRealClass;
		 
		/*
		function SamModel
		
		return object in self::$_SM_model
		  
		*/

	    static function SamModel($file)
	    {
    
	      self::$file = htmlspecialchars($file);
		  
		  
		
		    if(class_exists('Sam') )
            {
 
	             self::$file =  ROOT.SEP.FlSC.SEP.FMDL.SEP.'SamMdl.cls'.SEP.self::$file.'_mdl.php';
 
			}
			elseif(class_exists('sammodi') || class_exists('install'))
			{
			
	             self::$file =  ROOT.SEP.FlSC.SEP.FMDL.SEP.'SamEdit.cls'.SEP.self::$file.'_mdl.php';
			
			}
            else die('NO s cls'.__LINE__);		
 
			
            if(! file_exists(self::$file)) die('file model no ex');			
 
		    require  self::$file;  
			
           
			
            self::$_SM_model = new $file(); 
		}
	
		/*
		function SamSee
		
		require the file  
		
		  
		*/
	
        protected static function SamSee($file,$array=false)
		{
		
	      self::$file = htmlspecialchars($file);
		
		    if(class_exists('Sam') )
            {
 
	         self::$file =  ROOT.SEP.FlSC.SEP.FVW.SEP.'SamVw.cls'.SEP.self::$file.'_see.php';
 
			}
		   else if(class_exists('install') )
            {
             	  

	              self::$file =  ROOT.SEP.FlSC.SEP.FVW.SEP.'SamVw.install'.SEP.self::$file.'_see.php';
 
			}
            else die('NO cls cls'.__LINE__);		

	        if(is_array($array))
		 
	         extract($array);		

            if(! file_exists(self::$file)) die('file vw no ex');				 
             
		     require  self::$file;  
 
		}
	    static function  SamFilDeFunc($file)
		{
		
	      self::$file = htmlspecialchars($file);
		
		    if(class_exists('install')  )
		    {     
	             self::$file =  ROOT.SEP.FlSC.SEP.'Samfun_install'.SEP.self::$file.'fun.php';
		    }
			
		    if(class_exists('Sam')  )
		    {     
	             self::$file =  ROOT.SEP.FlSC.SEP.'Samfun'.SEP.self::$file.'fun.php';
		    }
			
			self::$InRealClass == false;
			
            if(! file_exists(self::$file)) die('file fn no ex');
           
            self::$_SM_Func = " require self::\$file ;";
			
			if(self::$InRealClass == true)
		   
  		    return self::$_SM_Func;
 

		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	 
	 
	 
	}













