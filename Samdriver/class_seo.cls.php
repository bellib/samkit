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
 
 
 

    class SamSeo extends SAMSOL_MODEL
	{
	
	     
		static function SamGetConyeny($cat_id,$count)
		{
		
		     $__Sam_Count = NULL;
			 
			// select key word
			$Sam_Key_Word =  parent::SamsolSelectOne('k_word','key_word','WHERE `k_cat_id` = "'.(int)$cat_id.'"') ; //
		
		   
		        if($Sam_Key_Word == NULL) return false;
				
				// filtr all code html from msg
				$Sam_Msg = SamFltrHtml($count,'&nbsp;');
				
				// put msg in array 
				
				//$Sam_Msg_array  = explode(' ',$Sam_Msg );
				 
				// put key word in msg 
				$Sam_Word_array  = explode(',',$Sam_Key_Word );
				
				     
					 foreach ( $Sam_Word_array as $val)
					 
					 if (preg_match("/".$val."/i", $Sam_Msg))
					    
						$__Sam_Count .=  $val . '  ' ;
		
		
		
		    return  $__Sam_Count; 
		
		
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	}








?>