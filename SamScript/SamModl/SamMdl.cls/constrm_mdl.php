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
 
 
    class constrm extends SAMSOL_MODEL
	{
	    private static  $SamCtigory = array();
		
	    private static  $SamfrmArr = array();
		
	    private static  $SamHom     = array();
		 
	    static function SamGetHome()
		{
	
             global $SamFailed ,$mjorFunc ;

             /*
			    get cat filed from array $SamFailed in SamTable.php
			 */		
			 
			 $SamCatFiled  = implode(',',$SamFailed['CAT']);
			 
	        /*
			    get Frm filed from array $SamFailed in SamTable.php
			 */			 
			 
			 $SamFrmFiled  = implode(',',$SamFailed['FRM']);
			 
			 /*
			   select catigori in array
			 */
			 
			 self::$SamCtigory   = parent::SamSelectAll($SamCatFiled,'cat','WHERE `c_level` <= "'.ULV.'"ORDER BY  `c_order` ASC');
			 
			    if( self::$SamCtigory == null) return null;
				
			    foreach(self::$SamCtigory As $key => $cat ):
                 
				     $CatId           = $cat->c_id;

                     $CatName	      = $cat->c_name;	
 
                     self::$SamHom[] .= '"c","'.$CatId.'","'.$CatName.'","",0,"","","","",0,0,0,"",' ;

                     /*
					  select frm in array
					 */					 
			         self::$SamfrmArr   = parent::SamSelectAll($SamFrmFiled,'forum','WHERE `cat_id` = "'.$CatId.'"');
					 
					    if(count(self::$SamfrmArr) < 1)
						  
						    continue;
							
					    foreach(self::$SamfrmArr As $clé => $frm):
						 
						     $FrmId    = $frm->f_id;
							 
							 $frmName  = $frm->f_name;
							 
							 $frmDesc  = $frm->f_desc;
							 
							  // frm replay
							  
							  // frm hide
							  		   if($frm->f_level > ULV )
		                               continue;
							 
							 $Freps    = $frm->f_replies;
							 
							 $Ftpcs    = $frm->f_topics;
							 
							 $FLstusr  = $frm->f_lp_author;
							 
							 $FLstusrInf = '';
							 
							 // all moderateur of forum 
							 
							 $FrmModelatoe = self::SamGetModelator($FrmId);
							 
							 // monitorid
							 
							 $FrmMonitorId = $frm->f_mon;
							 
							 // monitor name
							 
							 $FrmMoniName = parent::SamsolSelectOne('u_name','users','WHERE user_id = "'.$FrmMonitorId.'"') ;
							 
							 // last post data in forum
							 
							 $FrmSamLastDat  = $frm->f_lp_date;
							 
							 // frm online
							 
							// $Frmonline   = $frm->f_onlinef;
							
							 $Frmonline   =  parent::SamSelectCount('o_id','onlin','WHERE o_frm = "'.$FrmId.'" ') ;
							 
							 // last post name f_lp_author	
							 
							 $lastPstId = $frm->f_lp_author	;
 
							 $FrmLstPstName =  mjorFunc::SamGetUsrClr($lastPstId) ;
 
                             self::$SamHom[] .= '"n",'.$FrmId.',"'.$frmName.'","'.$frmDesc .'"," ",'.$Ftpcs.',"'.$FrmModelatoe.'","'.$FrmMoniName.'","'.($FrmSamLastDat>0 ? SamDat($FrmSamLastDat,4):"").'",'.$Freps.',"'.$Frmonline.'","'.$lastPstId.'","'.$FrmLstPstName.'",' ;
						 
						endforeach;
				 
                endforeach;			

             return implode('',self::$SamHom)	;			
	
	    }
		protected static function SamGetModelator($fid)
		{
		
		    global $SamFailed ;
			 
		 $FrmModsFiled = implode (' , ', $SamFailed['MODS']);
		 
		 $InfoSamModelaro = array();
		 
		 $FrmModelator        = parent::SamSelectAll($FrmModsFiled,'mods','WHERE `f_id` = '.$fid.' ');

         if(empty($FrmModelator))

         return NULL;		 
		 
		 foreach( $FrmModelator As $mod):
		 
		 $MoselatorId        = $mod->u_id;
		 
		 $MoselatorName      = parent::SamsolSelectOne('u_name','users','WHERE user_id = "'.$MoselatorId.'"') ;
		 
		 $InfoSamModelaro[] .= '<a href='.GURLCLS.'samuser/us'.$MoselatorId.'>'.$MoselatorName.'</a>|'; 
		 
		 endforeach;
		 
		 $modeArr1  =  implode('',$InfoSamModelaro);
		 
		 $modeArr2  =  explode('|',$modeArr1);
		  
		  $data = array();
		  
          foreach($modeArr2 as $val)
		  
	      if(trim($val) !="") 
		  
	      $data[] = $val;
		  
 
	      return implode('|',$data);
 
          
		}
		static function SamGetOnline()
		{
		   $visitor  =  parent::SamSelectCount('o_id','onlin','WHERE o_uid = "0" ') ;
		   
		   $members   = parent::SamSelectCount('o_id','onlin','WHERE o_uid = "1" ') ;
		   
		   $monitors  = parent::SamSelectCount('o_id','onlin','WHERE o_uid = "2" ') ;
		
		
		   $on = '"'. $visitor.'","'. $members.'","'. $monitors.'"';
		   return $on;
		
		}
		
		 
	
 
	
	}