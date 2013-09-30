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
 
 
    class frm extends SAMSOL_MODEL
	{
	    static $SamTpcs;
	 
	    static function SamGetWHERE()
		{
		
		
		
		
		
		
		
		}
		static function SamGetTopics($fid)
		{
		             global $SamFailed ;
	        /*
			    get Frm filed from array $SamFailed in SamTable.php
			 */			 
			 
			 $SamTopcFiled  = implode(',',$SamFailed['TPC']);
		
			 /*
			   select topics in array
			 */
			 
			 self::$SamTpcs   = parent::SamSelectAll($SamTopcFiled,'topics','WHERE   `forum_id` = "'.$fid.'" ');
			 
			    if(self::$SamTpcs == NULL) return FALSE;
			 
			    foreach(self::$SamTpcs As $key => $tpc ):
				
				 $TopicId   = $tpc->topic_id;
				 
				 $FrmId     = $tpc->forum_id;
				 
				 $TpcTile   = $tpc->t_subject;
				 
				 $TpcMsg    =   $tpc->t_message ;
				 
				 $TpcAuth   = $tpc->t_author;
				 
				 $TpcRep    = $tpc->t_replies;
				 
				 $TpcDat    = $tpc->t_date;
				 
				 $array[]  .= '"'.$TopicId.'","'.$FrmId.'","'.$TpcTile.'","'.$TpcMsg.'","'.$TpcAuth.'","'.$TpcRep.'","'.$TpcDat.'",';
				 
				
				
				
				endforeach;
		
		
		      
		     return implode('',$array);
		
		
		}

	
	
	
	
	
	
	
	
	
	
	
	}