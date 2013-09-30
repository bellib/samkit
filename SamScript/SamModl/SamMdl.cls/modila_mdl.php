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
 
    class modila extends SAMSOL_MODEL
	{
	
	
	
	
	
	    static function SamGetFroumMidila()
        {
		    /*
			  verifi if member is modila
			  
			*/
			
		    // get the filed of table of modelateur   
			
			$SamModsFileds = implode(',',parent::$FILED['MODS']);
			
			// put in and 
			$SamAnd = null;
			

			if(ULV  == 2)
			{
   			    $Select = parent::SamSelectCount('mod_id','mods','WHERE `u_id` = "'.UID.'" ') ;
			   
			      if($Select <= 0 ) hl();
				  
				    			
			        // select rows of modolateur by modilateur id 
		          	$SamSelectrows = parent::SamSelectAll($SamModsFileds,'mods','WHERE `u_id` = "'.UID.'" ' );  
				     
					/* 
					     **select forum id
						** put forum id in  array $forumId
						
				
					
					*/
					$forumId = array();
					
					foreach($SamSelectrows as $mod):
					    
						$forumId[] = $mod->f_id;
					
					endforeach;
					
					 
					        $SamAnd  = null;
						 
			   
			
			
			
			}
			
		 
			
            if(ULV == 3)		
            {
			      
				$SamAnd = 'AND `f_mon` = "'.UID.'"';
			    
			
			}
			if(ULV == 4) $SamAnd = null;

			
			  // frm filed =
			  
			  $Forum_Files = implode(',',parent::$FILED['FRM']);
			     
               // select forum 
			   
			   $SamSelectrowsFrms = parent::SamSelectAll($Forum_Files,'forum','WHERE `f_id` > 0  '.$SamAnd .' ' );  
			   
			    // verifier if no forum selected
				
				     if(count($SamSelectrowsFrms) <= 0) die('error in modikateur');
					 
			    // frm modila
				$forumModerationSummary = array();
				
				 // frm notification 
				$forumNotifySummary = array();
					 
			    foreach( $SamSelectrowsFrms as $frm):
				
				     // forum id 
					 
					 $forumIdMOD = $frm->f_id;
					 
					    if(ULV == 2)
						{
						     if(  array_search_i($forumIdMOD,$forumId) != 1) continue;
						
						} 
					 
					 // frm name
				 
				     $SamFrmNam = $frm->f_name;
					 
					 
					 /*
					      		// 5  ,  22         ,  0  ,   66      ,  0  ,  0  ,  0  ,
						               topic aprov          aprov rep
					 
					 */
					 
					 // topic aproved 
					 $SamTopicAproved = parent::SamSelectCount('cat_id','topics','WHERE `forum_id` = "'.$forumIdMOD .'" AND `t_approve` = 1 ') ;
					 
					 // replay aproved 
					 $SamRepAproved = parent::SamSelectCount('cat_id','replies','WHERE `forum_id` = "'.$forumIdMOD .'" AND `r_approve` = 1 ') ;
					 
					 
					$forumModerationSummary[] .= '"'.$forumIdMOD.'","'.$SamTopicAproved.'","","'.$SamRepAproved.'","","","",'."\n";
					
					
					           // 5,12,13,14, => fid,chakaoi,chakwato admin ,new msg forum
					$forumNotifySummary[] .= '"'.$forumIdMOD.'","0","0","0",'."\n";
					 
				endforeach;
			
              
	        return array(implode('',$forumModerationSummary),implode('',$forumNotifySummary));
	   
	   }		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	}

 