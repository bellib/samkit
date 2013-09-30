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
 
 
 
    class generel extends SAMSOL_MODEL
	{
	
		 private static $UsrId;
	
	    static function SamInfousr()
		{
                self::$UsrId = null;
		     
	        if(isset($_SESSION[SESI.'usrid']) XOR isset($_COOKIE[SESI.'usrid']))
	        {
	     
		        if(isset($_SESSION[SESI.'usrid']))
                {
		
                 self::$UsrId = (int)$_SESSION[SESI.'usrid'];
			 
	            }
		        if(isset($_COOKIE[SESI.'usrid']))
                {
		
                  self::$UsrId = (int)$_COOKIE[SESI.'usrid'];
			 
	            }   
		
		     $IssetId     = parent::SamSelectCount('`user_id`','users','WHERE `user_id` = "'.self::$UsrId.'"  ');
			 
		     $PS          = parent::SamSelectCount('`u_pass`','users','WHERE `user_id` = "'.self::$UsrId.'"  ');
			 
			    if(isset($_COOKIE[SESI.'no']) or isset($_COOKIE[SESI.'no']))
                {
		
                  self::$UsrId = (int)$_COOKIE[SESI.'usrid'];
				  
			    if(isset($_SESSION[SESI.'no']))
                {
		
                 $ver_pss =  $_SESSION[SESI.'no'];
			 
	            }
		        if(isset($_COOKIE[SESI.'no']))
                {
		
                  $ver_pss =  $_COOKIE[SESI.'no'];
			 
	            }  
				$New_pass = md5(md5((int)self::$UsrId.'SAMSOL'));
				// echo  $ver_pss.'<br>'.  $New_pass;die;
				    if( $ver_pss != $New_pass ) 
					{
					     // @session_destroy();
						 // if(isset($usrid[SESI.'usrid']))
						 // setrawcookie(SESI.'usrid','' ) ;
					return false;
					
					}
			 
	            }   
 
		 
		        if( ( self::$UsrId && $IssetId ) > 0  )
		        {
		
			         global $SamFailed ;
				 
			         $SamUsrFiled = implode(',',$SamFailed['USER']);
				      
			         $SelCtObject = parent::SamSetObject($SamUsrFiled,'users','WHERE `user_id` = "'.self::$UsrId.'" LIMIT 1 ');
		
		        // foreach ($SelCtObject as $key => $Vlue):
				
				    // if($key == 'u_pass')
				 
				     // continue;
					 
				    // define($key,$Vlue);
					
			    // endforeach;
				 
			      
		             return $SelCtObject;
		        }
 
		    } else return false;
	
	    
	
	}
	static function SamLogOut($id)
	{
	
	
	     parent::SamUpdat('users','u_online','0','WHERE `user_id` = "'.(int)$id.'" ');
	
	
	
	
	
	}
		static function SamGetFrmList()
		{
		 global $SamFailed;
		 
		  
 
		 $CatFiled = implode(',',$SamFailed['CAT']);
		 
		 $FrmFiled = implode(',',$SamFailed['FRM']);
		 
		 $cates    = parent::SamSelectAll($CatFiled,'cat','WHERE `c_level` <= "'.ULV.'" ');
		 
		 $_frmsArr = array();
		 
		 if(count($cates) == 0)
		  
		  return NULL;
		
		 foreach($cates As $cat):
		 
		  $SamResultCatId       = $cat->c_id;
		  
		  $SamResultCatName     = $cat->c_name;
		  
		  $SamResultCatStat     = $cat->c_status;
		  
		  $_frmsArr[].='"-1",0,"'.$SamResultCatName.'",' ;
		  
		  $FrmsResutlSam        = parent::SamSelectAll($FrmFiled,'forum','WHERE `cat_id` = "'.$SamResultCatId .'" ');
		  
		  if(count($FrmsResutlSam) <= 0 )
		  continue;
		  
		   foreach($FrmsResutlSam As $Frm):
		   
		   $FrmSamId            = $Frm->f_id; 
		   
		   $FrmSamName          = $Frm->f_name; 
		   
		   $fhid                = parent::SamsolSelectOne('f_level','forum','WHERE f_id = "'.$FrmSamId.'"') ;
		   if($fhid > ULV )
		  continue;
		   
 
		   $_frmsArr[].= ''.$Frm->f_id.','.$SamResultCatId .',"'.$FrmSamName.'",';
		   
		   endforeach;
		 
           		 
		 
		 endforeach;
		 
		 return implode(' ',$_frmsArr);
		
 
		}
		// links for modelator .. admin .. 
		static function SamAdminLinks()
		{
		
		    $array = null ;
			
			// administrateur
			if(ULV == 4)
			{
			  $array .= '"إدارة <br> المنتديات","admin","",1,2,';
			
			
			} 
		    // all admin
			if(ULV >= 2)
			{
			  $array .= '"<FONT face=\"Times New Roman\">إشرافك</font>","sammodi","new",1,1,';
			  $array .= '"<FONT face=\"Times New Roman\">ملفاتك</font>","samfiles","samfiles",1,1,';
			  $array .= '"<FONT face=\"Times New Roman\">الشكاوي</font>","chak","new",1,1,';
			  $array .= '"<FONT face=\"Times New Roman\">خدمات</font>","samplack","new",1,1,';
			  $array .= '"<FONT face=\"Times New Roman\">مراسلة المدير</font>","msgtoadm","new",1,1,';
			  $array .= '"<FONT face=\"Times New Roman\">رقابة ومنع</font>","lock","new",1,1,';
			
			
			}

			return $array;
			  
 
		}
		/*
		   @ delet replay
		*/
		static function SamSeletrep($id)
		{
		
		
		    if((int) $id > 0 )
			{
			    
			    /*
				   verifier si replay is => uID
				*/
				
				 $Is_Id = parent::SamSelectCount('reply_id','replies','WHERE reply_id = "'.(int) $id.'" AND `r_author` = "'.UID.'"') ;
				 
				    if($Is_Id == 1 )
					{
					    
						parent::SamUpdat('replies','r_delete', 1,'WHERE `reply_id` = "'.(int) $id.'"');
						
						 $TopUpdatStatF   = 'status , author ,id , type , date ';
					 
					     $TopUpdatStatV   = ' "0" ,  "'.UID.'" , "'.(int) $id.'" ,   "d" , "'.time().'" ';
 
					    parent::SamInsert('reply_status',$TopUpdatStatF,$TopUpdatStatV);
						
					$TID =  parent::SamsolSelectOne('topic_id','replies','WHERE `reply_id` = "'.(int) $id.'"') ;
					    
					 @header('Location:'.GURLCLS.'samtopic/topic'.$TID );
					}else hl();
			
			
			
			
			
			
			}
		
		
		
		
		
		
		
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
 