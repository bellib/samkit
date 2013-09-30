<?php

    class SamBuld extends SAMSOL_CONTROLLER
	{
	
	    private static $SamUrloca = NULL;
		
	    function index()
		{
		
            
		}
		static function sambuldci($type,$vale)
		{
		     
			 
			if(htmlspecialchars($type) == 'pC' && isset($vale))
			{
			      
				 $array = @explode('-',$vale);
				     
					if(count($array) == 2)
				    {
					  $PageCount = (int)$array[1];
					   
					  $FrmId     = (int)$array[0]; 
					  
					  setcookie(md5('pC'),'') ;
					  
                      $valuerexist = array(false,15,30,45,60,75);		
					     
						if(array_search($PageCount,$valuerexist))
                        {				
			               @ setcookie(md5('pC'),$PageCount,time() + 3600 *24*7) ;
						   
						   $url = GURLCLS."samfrm/forum".$FrmId;
							 		
						   @header("Location: ".$url);
							
					    }
						
						 
			        }
			} else hl();
		    
		 
 
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	}









?>