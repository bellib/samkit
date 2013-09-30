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
 
 
    class Members extends SAMSOL_MODEL
	{
	    /*
		   return the filed user order by
		*/
	    static function SamGetOrder($order)
		{
		
         
		
		
		
		}
		static function SamGetMebr($SamFiled)
		{
		
		     /*
			     get user filed
			 
			 */
			  global $SamFailed;

            // filed users in array
            
             $SamUserArry = $SamFailed['USER'];		

            // user to put in sql

             $SamUserFiled = implode(',',$SamUserArry);		

             // select all user 			 
		    
			 $SamSelectUsr = parent::SamSelectAll($SamUserFiled,'users',$SamFiled);
			 
			    if($SamSelectUsr == NULL) return NULL;
				
				$Usr = array();
				
		     /*
			 
			     get user looop 
			 */
			 
			 foreach($SamSelectUsr as $usr):
			  
			    // user id
				
				// 'u_status', 'u_name', 'u_login_name', 'u_pass', 'u_def_pass', 'u_email',
//				'u_city', 'u_marstatus' , 'u_ip', 'u_last_ip', 'u_country', 'u_occupation', 'u_age', 'u_sex', 'u_reg_date'
				
				$SamUsrId  = $usr->user_id;
				
				// get member post 
 
				$SamUsrPost = $usr->u_posts;
				
				// get usr name
				
				$SamUsrName  = $usr->u_name;
				
				$SamUsrName  = mjorFunc::SamGetUsrClr($SamUsrId );
				
				// usr level
				
				$SamUsrLvl  = changeLvl($usr->u_level);
				
				    // hide admin 
					
					 if($usr->u_level == 4 && ULV !=4 )
					 
					    continue;
				
				// usr pointd
				
				$SamUserPoint = $usr->u_points;
				
				// email 
				
				   if(ULV == 4 )
				     
					$SamUsrEml = $usr->u_email;
					
					else $SamUsrEml = false;

			    // dat regestetr
				
				 $SamRegester = SamDat($usr->u_reg_date,0);
				 
				 // last post dat
				 
				 $SamLastPost = SamDat($usr->u_lp_date,0);
				 
				 // last visite
				 
				 $SamLastVisit = SamDat($usr->u_lh_date,4);
			    $Usr[] .= '"a",'.$SamUsrId.',"'.$SamUsrLvl.'",'.$SamUserPoint.','.$SamUsrPost.',"'.self::SamGetUsrStart($SamUsrPost).'","'.$SamUsrName.'","'.$SamUsrEml.'","","","'.$SamRegester.'","'.($SamLastVisit > 0 ? $SamLastVisit : "" ).'","","'.($SamLastPost > 0 ? $SamLastPost : "") .'",' ;
			 endforeach;
			 
			 return implode('',$Usr);
				
			//$__Users.= '"'.$H.'",'.$user_id.','.$u_level.','.$u_points.','.$u_posts.','.user_stars($user_id).',"'.$u_name.'","'.$Email.'","'.$u_title.'","'.code2count($u_country).'","'.hys($u_reg_date,0).'",
			//"'.($u_browse==1?($u_lh>0?hys($u_lh,4):""):"").'","","'.($u_lp>0?hys($u_lp,4):"").'",'."\n";
		
		 
		
		}
		static function SamGetUsrStart($po)
		{
		
		     if($po <= 100)
			 
			  $starts = 1;
		
             if($po > 100 && $po <= 250 )
			 
			  $starts = 2;
			  
            if($po > 250 && $po <=500 )
			 
			  $starts = 3;
			  
            if($po > 500 && $po <= 1000 )
			 
			  $starts = 4;
			  
           if($po > 1000 && $po <= 2000 )
			 
			  $starts = 5;
 
           if($po > 2000 && $po <= 3000 )
			 
			  $starts = 6;
 
           if($po > 3000 && $po <= 4000 )
			 
			  $starts = 7;
 
           if($po > 4000 && $po <= 5000 )
			 
			  $starts = 8;
 
           if($po > 5000 && $po <= 6000 )
			 
			  $starts = 9;
 
           if($po > 6000   )
			 
			  $starts = 10;
 
		
	     return  $starts;
		
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	} 