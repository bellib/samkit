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
 
 
     class mjorFunc extends SAMSOL_MODEL
	 {
	     private static $SamAdmin;
	 
	     function Samll()
		 {
		  
		 }
	/*
	
	  FUNCTION samGet FlagIp
	*/
	    static function SamGetIpName($ip=0)
	    {
		   // op
		    if($ip == 0 )  $Sip = ip; else $Sip = $ip;
			
         $ip_number = sprintf("%u", ip2long($Sip));
		
         // $sql = mysql_query("select * from ".tp."count_ip where stars <= ".$ip_number." and end >= ".$ip_number." ") or die(my_error(__line__));
		
         // $a = mysql_fetch_array($sql);
		 
		  $a = parent::SamsolSelectOne('avr','count_ip'," where stars <= '".$ip_number."' and end >= '".$ip_number."' ") ;
		
         $_show_from_country =($a  != '' ? code2count($a ) : (ip == '127.0.0.1' ? '' : 'DZ'));		
	
	        return $_show_from_country;
	    }

		 /*
		    function return color of user
		 */
        static function SamGetUsrClr($uid)
        {
 
		 $UsrLvl      =  parent::SamsolSelectOne('u_level','users','WHERE user_id = "'.$uid.'"') ;
		 
		 $UsrName     =  parent::SamsolSelectOne('u_name','users','WHERE user_id = "'.$uid.'"') ;
		    if(ULV !=0)
		    {
		        if( $UsrLvl == 4  )
				
		         $UserSkin = '<font color=blue>'.$UsrName.'</font>';
				 
		        elseif($UsrLvl == 2)
				
		         $UserSkin = '<font color=#cc0033>'.$UsrName.'</font>';
				 
				 elseif($UsrLvl == 3)
				
		         $UserSkin = '<font color=#B0934D>'.$UsrName.'</font>';
				 
		        else
				
		         $UserSkin = '<font color=#000>'.$UsrName.'</font>';
				 
		    }else
			
		 $UserSkin = '<font color=#000>'.$UsrName.'</font>';
		 
		 return $UserSkin; 
		}
	 
		static function SamIsAdmin($fid=false,$tid=false)
		{
		  if($tid==false)
		  
		  $fid = (int)$fid;
		  
		 else $fid = self::SamsolSelectOne('forum_id','topics','WHERE topic_id = "'.(int)$tid.'"') ; 
		 
		 if(! defined('UID'))
		 {      
		        $UsrId = 0;
		 	    if(isset($_SESSION[SESI.'usrid']))
                {
		
                $UsrId = (int)$_SESSION[SESI.'usrid'];
			 
	            }
		        if(isset($_COOKIE[SESI.'usrid']))
                {
		
                  $UsrId = (int)$_COOKIE[SESI.'usrid'];
			 
	            } 
 
		 define('UID',$UsrId);
		 
		 }
		 $UsrLvel = self::SamsolSelectOne('u_level','users','WHERE user_id = "'.UID.'"') ; 
		     
			if( is_numeric(UID) && UID > 0 && ($UsrLvel > 0)  )
			{
			
			 $Modelator = self::SamsolSelectOne('f_id','mods','WHERE u_id = "'.UID.'" AND f_id = "'.$fid.'"  ') ;
			 
			 $Monitor   = self::SamsolSelectOne('f_id','forum','WHERE f_mon = "'.UID.'" AND f_id = "'.$fid.'" ') ;
			 
			    if(UID == '1' or UID == '2')
				
				 self::$SamAdmin = 1;
				 
				elseif($Modelator > 0 && $fid == $Modelator )
				
				 self::$SamAdmin = 1;
				 
				elseif($Monitor > 0 && $Monitor == $fid )
				
				 self::$SamAdmin = 1;
				 
				else
				
				 self::$SamAdmin = 0;
 
			}
            else
			 
			 self::$SamAdmin = 0;
             			
         return self::$SamAdmin;
	     }
         /*
             get topics ves
            
         */
	     static function SamGetCountView($tid)
        {
		
	     $TopiVeFiled     = parent::SamsolSelectOne('t_views','topics','WHERE topic_id = "'.$tid.'"') ;
		 
		 $TopiVeFiledArry = explode('|',$TopiVeFiled);
		 
		 $CoutnArr = count($TopiVeFiledArry);
		 
		 $Count   =  $CoutnArr  >= 1 ?  $CoutnArr-1 : 0;
		 
		 return $Count  ;
		}
	 /*
        function get topic folder
     */
	    static function SamGetTopFolder($tid)
        {
            
          global $SamFailed;
            
            // filed topics
         $TpcFiled      = implode (' , ', $SamFailed['TPC']);
 
		 $SamSelctTop = self::SamsolFetchArray($TpcFiled,'topics','WHERE topic_id = "'.$tid.'"') ;
 
	     $Status      = $SamSelctTop['t_status'];
		 
	     $Replies     = $SamSelctTop['t_replies'];
		 
	     $Approve     = $SamSelctTop['t_approve'];
		 
	     $Hide        = $SamSelctTop['t_hide'];
		 
	     $Stiky       = $SamSelctTop['t_stick'];
		 
         $Top         = $SamSelctTop['t_top'];
		 
	     $Delete      = $SamSelctTop['t_delete'];
		
	     $Survey      = $SamSelctTop['t_survey'];
		 
	     $LstIpDate   = $SamSelctTop['t_lp_date'];
		 
	     $ThreeDys    = 60*60*24*3;
		 
		 $folders     = '';
		 
		 $folder      = '';
	
	        if ($Approve == 1)
			{
		     $folder .= 'm';
	        }
	        else if ($Approve == 2)
			{
		     $folder .= 'M';
	        }
	        if ($Hide == 1)
			{
		     $folder .= 'i';
	        }
	        if ($Stiky == 1)
			{
		     $folder .= 'f';
	        }
	        if ($Top == 1)
			{
		     $folder .= 't';
	        }
	        else if ($Top == 2)
			{
		     $folder .= 'T';
	        }
	        if ($Delete == 1)
			{
		     $folder .= 'd';
	        }
	        if ($Survey == 1)
			{
		     $folder .= 'v';
	        }
	        if ($Status == 1 && $Replies < 20 )//&& time() > $LstIpDate + $ThreeDys)
			{
		     $folders .= 'l';
	        }
	        else if ($Status == 1 && $Replies < 20 && time() < $LstIpDate + $ThreeDys)
			{
		     $folders .= 'nl';
	        }
	        else if ($Status == 1 && $Replies >= 20 && time() > $LstIpDate + $ThreeDys)
			{
		     $folders .= 'l';
	        }
	        else if ($Status == 0 && $Replies < 20 && time() > $LstIpDate + $ThreeDys)
			{
		     $folders .= '';
	        }
	        else if ($Status == 0 && $Replies < 20 && time() < $LstIpDate + $ThreeDys)
			{
		     $folders .= 'n';
	        }
	        else if ($Status == 0 && $Replies >= 20 && time() > $LstIpDate + $ThreeDys)
			{
		     $folders .= 'h';
	        }
	        else if ($Status == 0 && $Replies >= 20 && time() < $LstIpDate + $ThreeDys)
			{
		     $folders .= 'nh';
	        }
	        else{
		     $folders = '';
	        }
	     $Dosser = $folder.$folders;
		 
	     return $Dosser;
 
		}
		/*
		     function get info inmage
		*/
		static function SamGetInfoimage($id)
		{
		   
		    // id ixist 
			$Is_Id = parent::SamSelectCount('m_id','medales_files','WHERE `m_countent` = "'.$id.'" ') ;
			
			    if($Is_Id == 1)
                {
				
			 	    // medales file filed
		            $Sam_Medales_Filed = implode(',',parent::$FILED['MEDALES_F']); 
				 
				     // all info imafe in object 
				    $File_Object = parent::SamSetObject($Sam_Medales_Filed,'medales_files','WHERE `m_countent` = "'.$id.'" ');
					
                    return  (
				
				        // type
						$File_Object->m_type
						
				
				
				    ); 
				
				
				
				   
				
				}else return false;				 
		
		
		
		
		
		
		}
		/*
		  insert on line
		*/
		
		static function SamMatchOnline($main,$frm,$topic)
		{
		
		   // ip user
		   
		   $SamIp = getClientIp();
		   // '`o_id`', '`o_main`', '`o_frm`',' `o_top`', '`o_ip`',' `o_dat`', '`o_uid`'
		   
		   // type => frm .. topic .. main
		   
		   // in frm
		   
		   /* seprimer last visite*/
		  $fin_date = time() - 500; 
		  
		  mysql_query('DELETE FROM `'.TP.'onlin` WHERE  `o_ip`  = "'.$SamIp.'" LIMIT 1 ') or die(mysql_error());
		  
		  mysql_query('DELETE FROM `'.TP.'onlin` WHERE  `o_dat` <= "'.(int)$fin_date.'" ') or die(mysql_error());
		  
		  
		    if(UID > 0)
		    {
		       // updat last visit 
		       parent::SamUpdat('users','u_lh_date',time(),'WHERE user_id = "'.UID.'"');
		   
		      // updat online
		       parent::SamUpdat('users','u_online',0,'WHERE u_lh_date  <= "'.$fin_date.'"');
			   
			   // is online
			  parent::SamUpdat('users','u_online',1,'WHERE user_id = "'.UID.'"');
			   
		   
			   
		       
	        }
		   
		   $SamInmain = $main ;
		   
		   $SamInfrm = $frm ;
		   
		   $SamIntopic = $topic ;
		   
		   $SamOnline = array();
		   
		   $SamOnline['o_id'] = 'null ,';
		   
		   $SamOnline['o_main'] = '"'.$SamInmain.'" ,';
		   
		   $SamOnline['o_frm'] = '"'.$SamInfrm.'" ,';
		   
		   $SamOnline['o_top'] = '"'.$SamIntopic.'" ,';
		   
		   $SamOnline['o_ip'] = '"'.$SamIp.'" ,';
		   
		   $SamOnline['o_dat'] = '"'.time().'" ,';
		   
		   $SamOnline['o_uid'] = '"'.ULV.'" ';
		   
		   // insert
		   
		      parent::SamInsert('onlin',implode(' ,',parent::$FILED['OLN']),implode(' ',$SamOnline) );
 
		
		}
		static function SamgetStyle()
		{
		
		    $Sam_Style = 33 ;
			
			    if(UID > 0)
				{
		          $Style = parent::SamsolSelectOne('u_skin','users','WHERE user_id = "'.UID.'"') ; //
				  
				    if((int)$Style > 0 && (int)$Style < 40 ) return $Style;
		        }
				
				
		    return $Sam_Style;
		
 
		}
	 
	 
	 }

 