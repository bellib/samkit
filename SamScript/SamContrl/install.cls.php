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
	
    
	
 	class Install extends SAMSOL_CONTROLLER
	{
 
	 protected   static $connect;
	 
	 private static $SamAdmin;
	 
	 
	 public static $FILED;
	 
	 
	    function __construct()
		{
 
		    parent::SamSee('hed',NULL);
		
		
		
		}
	    function index()
		{
		
		    parent::SamSee('home',NULL);
		
		
		
		}
		function start()
		{  
		   self::sam_construct();
		   
		   parent::SamSee('start',NULL);
		   
		   
	    }
		function insatall_admin()
		{
		
		    parent::SamSee('admin_ins',NULL);
		
		
		
		}
	    function insert()
		{
		
		      parent::SamModel('insert'); 
			  
		      $rponse = parent::$_SM_model->Insert_Admin();
			  
			  parent::SamSee('fin',NULL);
		
		}
	    static function sam_construct()
	    {
		
	        if(self::Samconect() == true)
			
	         self::Samconect();
			 
	         else die("NO CONNECT ! ");
			 
			 global $SamFailed;
			 
			 self::$FILED = $SamFailed;
			 
			 
			 
			 
	    }
        protected static function  Samconect()
        {
        
         self::$connect = @mysql_connect(HOST,USRNM,PASS);
        
            if( self::$connect != 0  )
            {
                if( mysql_select_db(DBNM,self::$connect))
				{
				
				 @mysql_query("SET NAMES 'utf8'");
				
				 return true;
				 
				}
	    
                else return false;
	    
            }  
			
         return false;
		 
        }
	
	
	
	}