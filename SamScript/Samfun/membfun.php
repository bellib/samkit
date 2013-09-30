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
 
 
         self::$ModeSAM        = 'members';
		 
	     self::$VwSAM          = 'membr' ;
		 
		 parent::SamModel('members');
		 
		 /*
		    get order by mode point postes names .... 
		 */
		 
		 // order by post
		    if( self::$argemntRight == 'posts')
		    {
		      $SamOrderBy = 'posts';
			  
			  $SamFiled = 'ORDER BY `u_posts` DESC';
              			  
			}
		 // order by points
		    elseif( self::$argemntRight == 'points')
		    {
		     $SamOrderBy = 'points';	
			 
			 $SamFiled = 'ORDER BY `u_points` DESC';
			}
		 // order by online
		    elseif( self::$argemntRight == 'online')
		    {
			 $SamOrderBy = 'online';
			 
		     $SamFiled = 'WHERE `u_online` = 1';	
		    }
	     // by name		 
            elseif( self::$argemntRight == 'name')
		    {
		     $SamOrderBy = 'name';	
			 
			 $SamFiled = 'ORDER BY `u_name` DESC';
		    }
 	     // by country		 
            elseif( self::$argemntRight == 'country')
		    {
		     $SamOrderBy = 'country';
			 
			 $SamFiled = 'ORDER BY `u_country` DESC';
		    }
  	     // by country		 
            elseif( self::$argemntRight == 'lastpost')
		    {
		     $SamOrderBy = 'lastpost';	
			 
			 $SamFiled = 'ORDER BY `u_lp_date` DESC';
		    }
  	     // by lasthere		 
            elseif( self::$argemntRight == 'lasthere')
		    {
		     $SamOrderBy = 'u_lh_date';	
			 
			 $SamFiled = 'ORDER BY `u_lh_date` DESC';
		    }
  	     // by regdate		 
            elseif( self::$argemntRight == 'regdate')
		    {
		     $SamOrderBy = 'regdate';	
			 
			 $SamFiled = 'ORDER BY `u_reg_date` DESC';
		    }
   	     // by mods		 
            elseif( self::$argemntRight == 'mods')
		    {
		     $SamOrderBy = 'regdate';	
			 
		     $SamFiled = 'WHERE `u_level` =  2  ';
		    }
			 
		    else
			{

  		      $SamOrderBy = 'posts';
		 
		      $SamFiled = 'ORDER BY `u_posts` DESC';	 
		    }
		 
		 /*
		    get order crossont ou decroissant
		 */
		 
		 if(empty(self::$argemntLeft))
		 
		     $dsc   = 'D';
		 
		 elseif( self::$argemntLeft == 'crois')
		 
		     $dsc   = 'C';
			 
		 elseif( self::$argemntLeft == 'decr')
		 
		     $dsc   = 'D';
		 
		 else 
		 
		     $dsc   = 'D';
		 
		 $members =  parent::$_SM_model->SamGetMebr($SamFiled);
		 
	         self::$DataSAM        = array(
			 
		         'MBR'      => $members ,
				 'ORDERB'   => $SamOrderBy 
				 
				); 




?>