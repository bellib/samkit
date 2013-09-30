<?php
 
    
	
	class insert_topic extends SAMSOL_MODEL
	{
	
        private static $SamType;
		
        private static $SamTitle;
		
        private static $SamVedUrl;

        private static $SamMsg;
   
	     
		static function InitionPost()
		{
		     
			 /*
			     get type of topic ... vedio , image, article .......
			 */
			 
		    self::$SamType = htmlspecialchars($_POST['Samtype']);
			
			/*
			     get topic title SamTitle
			*/
			
		    self::$SamTitle = htmlspecialchars($_POST['SamTitle']);
			
			/*
			     get url vedio SamVedUrl
			*/
		  
		    self::$SamVedUrl = isset($_POST['SamVedUrl']) ? htmlspecialchars($_POST['SamVedUrl']) : NULL;		
			
			/*
			    get msg content SamMsg
			*/
		
		    self::$SamMsg = htmlspecialchars($_POST['SamMsg']);
		
		
 
		} 
		static function SamInsertTopi()
		{
		
		
		  self::InitionPost();
		  
		  echo self::$SamMsg;
		
		
		
		}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	}
















?>