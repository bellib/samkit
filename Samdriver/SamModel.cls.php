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
 
 

    class SAMSOL_MODEL
	{
	
	 protected   static $connect;
	 
	 private static $SamAdmin;
	 
	 
	 public static $FILED;
	 
	    function __construct()
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
        function deconnect()
        {
	     mysql_close(self::$connect);
	 
	    }
		protected static function SamMySqlError($line=__line__)
		{
		 
		  return null; // '<b>SAMKIT ERR </b>: '.mysql_error().$line;
		
		}
	    protected static function SamSelectAll($f= '*',$table,$extra='')
	    {
 
         $sprintSAM    = sprintf('SELECT %s FROM %s%s%s %s ',$f,TP,$table,FN,$extra);
		 
         $SamRunQury = mysql_query($sprintSAM) or die(self::SamMySqlError());
		 
		 unset($sprintSAM);
		 
         if( ! $SamRunQury)
		 
          return null;
		 
         $CountSamRows  = mysql_num_rows($SamRunQury);
		 
         if($CountSamRows == 0)
		 
          return null;
		 
         $rows = array(); 
		 
         for($i=0; $i<$CountSamRows;$i++)
		 
          $rows[count($rows)] = mysql_fetch_object($SamRunQury); 
		 
         @mysql_free_result($SamRunQury);
   
         return $rows;

        }
		/*
		  SamsolSelectOne return value of $faled
		*/
		protected static function SamsolSelectOne($faled,$table,$extra=null)
		{
		 $sprintSAM    = sprintf('SELECT %s FROM %s%s %s  ',$faled,TP,$table,$extra);
		 
		 $SamRunQury = @mysql_query($sprintSAM);
		 
		    if (@mysql_num_rows($SamRunQury) > 0)
	        {
		      $ResourceObject =  mysql_fetch_object($SamRunQury);
			  
              $AtrSamOne = $ResourceObject->$faled;
			  
		    } else return NULL;
			
		 @mysql_free_result($SamRunQury);
			
		 return $AtrSamOne ;
		
		}
		/*
		   function select number of rows
		*/
		protected static function SamSelectCount($f= '*',$table,$extra='')
	    {
 
         $sprintSAM    = sprintf('SELECT %s FROM %s%s %s ',$f,TP,$table,$extra);
		 
         $SamRunQury = mysql_query($sprintSAM) or die(self::SamMySqlError());
		 
		 unset($sprintSAM);
		 
         if( ! $SamRunQury)
		 
          return null;
		 
         $CountSamRows  = mysql_num_rows($SamRunQury);
		 
		 return $CountSamRows;
		 
        }
		/*
		   function insert
		*/
	    static function SamInsert($table,$filed,$value)
        {
 
         $sprintSAM    = sprintf("INSERT INTO   %s%s (%s) VALUES (%s) ",TP,$table,$filed,$value);
		 
         $SamRunQury    = mysql_query($sprintSAM) or die(self::SamMySqlError());
         
         if(!$SamRunQury)
        
         return null;
   
         else return true;
		 
        }
		
		/*
		  function updat data 
		*/
		protected static function SamUpdat($table,$filed,$val="",$extra="",$line=false)
	    {
 
         $Sql    = sprintf("UPDATE %s%s SET  %s = %s  %s",TP,$table,$filed,$val,$extra);
		 
	     $RunSql = mysql_query($Sql) or die(self::SamMySqlError($line));
       
         if(! $Sql)
		 
         return "obj_no_q_exist";
		 
	    }
		/* 
		  function update mor filed
		
		*/
		
		protected static function SamUpdatMor($table,$val="",$extra="")
	    {
 
         $Sql    = sprintf("UPDATE %s%s SET  %s  %s ",TP,$table,$val,$extra);
		 
	     $RunSql = mysql_query($Sql) or die(self::SamMySqlError());
       
         if(! $Sql)
		 
         return "obj_no_q_exist";
		 
	    }
	    /*
		   function put in object
		*/	
		protected static function SamSetObject($f= '*',$table,$extra='')
	    {
 
         $sprintSAM    = sprintf('SELECT %s FROM %s%s  %s ',$f,TP,$table,$extra);
		 
         $SamRunQury = mysql_query($sprintSAM) or die(self::SamMySqlError());
				 
		    if (mysql_num_rows($SamRunQury) > 0)
	        {
 
				 $ResourceObject =  mysql_fetch_object($SamRunQury);
				 
				 return  $ResourceObject;
  
		    } else return false;
			
		 return false;
		
		}
		protected static function SamsolFetchArray($faled,$table,$extra=null,$x = false)
		{
		 $sprintSAM    = sprintf('SELECT %s FROM %s%s %s  ',$faled,TP,$table,$extra);
		 
		 $SamRunQury = @mysql_query($sprintSAM);
		 
		    if (mysql_num_rows($SamRunQury) > 0)
	        {
		       if($x == 1 )
			   $ResourceArray =  mysql_fetch_object($SamRunQury);
			   else
			   $ResourceArray =  mysql_fetch_array($SamRunQury);
 
			  
		    } else return NULL;
			
		 @mysql_free_result($SamRunQury);
			
		 return $ResourceArray ;
		
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	}





