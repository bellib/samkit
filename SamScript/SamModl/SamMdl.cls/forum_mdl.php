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
 
 
     class Forum extends SAMSOL_MODEL
     {
        // forum id
        private static $FrmId;
        
        // cookie
        
        private static $cookie = array();
        
        /*
           function return and verifier cat and forum id
        
        */
        static function forumid($fid)
        {
            
            
             self::$FrmId = (int) $fid;
             
                if(self::$FrmId <= 0)   hl();
                
               // verifier if the forum id exist 
             $IdIsreal = parent::SamSelectCount('`f_id`','forum','WHERE `f_id` = "'.self::$FrmId.'"  ');
                
             if($IdIsreal == 1) 
             { 
                $catid  = parent::SamsolSelectOne('cat_id','forum','WHERE `f_id` = "'.self::$FrmId.'"  ') ;
                
                return array(self::$FrmId,$catid);
             }
             else hl();   
     
        }
		static function SamPagination($pagina,$fid)
		{
		   // return LIMITE $x,$y
		
		 
		 /*
		     get page limit 
		 
		 */
		 self::$cookie  = $_COOKIE;
		 
		 $page          = (int)$pagina;
		 
		    if(isset($_COOKIE[md5('pC')]) && (int)$_COOKIE[md5('pC')] > 0 )
		    {
 
			 $NrLin         = self::$cookie[md5('pC')];
 
			}else
			
		    $NrLin         = 15;
  
		 $GetCountTop   = parent::SamSelectCount('topic_id','topics',"WHERE `forum_id` = '".(int)$fid."'  AND t_delete	= '0' ");
		 
		 $NemberOfage   = (int)ceil($GetCountTop / $NrLin );
		 
		    if($page > $NemberOfage OR $page <= 0   )
			{
			  $page  = 1;
			
			}
		 
		 $Dlimit        = ($page - 1) * $NrLin ;
		 
		 $FLimit        = $NrLin;
		 
		 
		 $Limite        = 'LIMIT '.$Dlimit.' , '.$FLimit .'';
		 
		    return array($Limite,$NemberOfage,$NrLin);
		}
        /*
           select topics
        */
 	    static function SamGetTopics($fid,$pagina)
        {
            global $SamFailed;
            
            // filed topics
            $TpcFiled      = implode (' , ', $SamFailed['TPC']);
            
            // get premition of select
            
            $Select        = self::SamSelectTopics($fid);
            
            // get limite of page
 
            $Limite        = self::SamPagination($pagina,$fid);
            
            // where
            
		    $WHERE            = "WHERE `forum_id` = ".$fid ."   ".$Select."   ORDER BY  t_stick DESC, t_lp_date DESC ".$Limite[0] ." ";
		
	        $SamTopics     = parent::SamSelectAll($TpcFiled,'topics',$WHERE);
            
		    // verifier le frm is admin or no or blocked
		 
		    $FrmISnormal     = parent::SamSelectCount('f_id','forum',"WHERE `f_hide` <= '".(int)ULV ."' AND f_id	= '".(int)$fid."' ");
	 	 
		    if($FrmISnormal <= 0) hl();
 
		 
		    if(count($SamTopics) == 0 )
		  
		    return NULL;
            
            return $SamTopics;
            
            
        }
        /*
           put topics in array
        */
        function SamTopiCsArr($fid,$pagina)
        {
            
            $topics = self::SamGetTopics($fid,$pagina);
            
			if(count($topics) == 0 ) return null;
			 
            $_TopArr = array();
		 
		    $_Author = array();
            
		    foreach($topics As $tpc):
 
            // topic id
		    $TopcId         = $tpc->topic_id;
            
            
		    // topic title
		    $TopcSubject    = htmlspecialchars($tpc->t_subject);
            
            
		     // topic autor
		    $TopcAuthoId    = $tpc->t_author;
            
            
            //topic author name
            $TopcAuthoName  = self::SamsolSelectOne('u_name','users','WHERE user_id = "'.$TopcAuthoId.'"') ;
            
            // topic dat
		 
		    $TopcDat        = $tpc->t_date;
            
            // topics replays **
            
            $TopcReply     = $tpc->t_replies;
            
            // topics vews
            
            $TopcViwe       = mjorFunc::SamGetCountView($TopcId);
            
            // topic last post date
            
             $TopcTimeRepl   = $tpc->t_lp_date;
             
             // topic last post author id
             $TopcDerAuth    = $tpc->t_lp_author;
             
             // topic lst post name 
             
            $AuthRreply      =  mjorFunc::SamGetUsrClr($TopcDerAuth) ;
            
            // get aprove id replay and msg
            
            $AprovRepID     = parent::SamsolSelectOne('reply_id','replies','WHERE topic_id = "'.$TopcId.'" AND  r_approve = 1 ORDER BY  r_date ASC   LIMIT 1') ;
		 
		    $AprovRepMSG    = parent::SamsolSelectOne('r_message','replies','WHERE topic_id = "'.$TopcId.'" AND r_approve = 1 ORDER BY  r_date ASC   LIMIT 1') ;
		 
   		    $Moderate        = mjorFunc::SamIsAdmin($fid);
           
           /*
               hide the topic aproved when not my topiccs
           */
           
           	     if(ULV != 4 && $Moderate == 0)
				
				 if( $TopcAuthoId != UID && ($tpc->t_approve == 1 || $tpc->t_hide == 1)   )
		     
                  continue;	
                  
         $_TopArr[]     .= '"'.mjorFunc::SamGetTopFolder($TopcId).'",'.$TopcId.',"'.$TopcSubject.'",'.$TopcAuthoId.',"","'.SamDat($TopcDat,4).'","'.$TopcReply.'","'.$TopcViwe.'" ,"'.$TopcDerAuth.'","'.$AuthRreply.'","'.SamDat($TopcTimeRepl,4).'","'.($Moderate == 1 ? SamFiJs($AprovRepMSG) : "").'","'.($Moderate == 1 ?$AprovRepID : "").'",'  ."\n";
		 
		 $_Author[]     .= '"'.$TopcAuthoId.'","'.mjorFunc::SamGetUsrClr($TopcAuthoId).'",';
		 
		 endforeach;
 
	     $Allfrm = array(implode($_TopArr),implode($_Author));
 
		 
         return $Allfrm  ; 
        }
		private static function SamSelectTopics($fid)
		{
		
		
		    if(ULV == 2 && mjorFunc::SamIsAdmin($fid) == 1)
			
			 $LVL = 2;
			 
			else $LVL = 1;
			
		    if(ULV == 3 && mjorFunc::SamIsAdmin($fid) == 1)
			
			 $LVL = 3;
			 
			else $LVL = 1;
			
			if(ULV == 1) $LVL = 1;
			
		    if(ULV  == 4)
			
             $SamTopics     = "";
 
            elseif($LVL == 3)
		     
             $SamTopics     = "";
		    
			elseif($LVL == 2 )
		     
             $SamTopics     = "AND t_delete = 0    ";
		
		    elseif($LVL == 1)
		    {
                                  
			 // $SamTopic     = parent::SamsolSelectOne('topic_id','topics','WHERE `t_author` = "'.UID.'"   AND t_link = 0 AND t_delete = 0 OR t_approve = 1 OR t_hide = 1 ' );
	
			    // if($SamTopic > 0)
			
                 $SamTopics     = "AND t_delete = 0 AND `t_archive` = 0   ";
					
			    // else
				
				 // $SamTopics     =  "AND t_approve = 0 AND t_hide = 0 AND t_delete = 0 AND `t_archive` = 0 AND t_approve = 0 " ;
		
			
			
			}
			else 
			 
			 $SamTopics     =  " AND `t_approve` = 0 AND `t_delete` = 0 AND `t_hide` = 0 AND `t_archive` = 0   " ;
			  
         return $SamTopics ;
		}
        
		static function SamGetMods($fid)
		{
		    global $SamFailed;
            
         $Modelator = array();   
		 $ModFiled = implode (' , ',  $SamFailed['MODS']);
		 
		 $AllMode  = parent::SamSelectAll($ModFiled,'mods','WHERE `f_id` = "'.$fid .'" ');
		 
		    if(! $AllMode  )
			 
             return NULL;

         foreach($AllMode as $mod):
		 
		     $MdId         = $mod->u_id;

             $ModName      = parent::SamsolSelectOne('u_name','users','WHERE user_id = "'.$MdId.'"') ;			 
		 
		 
		     $Modelator[]  .= '<a href='.GURLCLS.'samusr/user'.$MdId.'>'.$ModName.'</a>';
		 
		 endforeach;
         		 
		
		
		 return implode('|',$Modelator);
		
		}
        
        /*
           get seio frm
        */
         static function SamGetSeoFrm($fid)
		{
		 
		 $fid       = (int)$fid;
		     
			if($fid < 1)
			 
             return NULL;
			 
		 $SelectFrm = parent::SamsolFetchArray('f_name,f_desc','forum','WHERE `f_id` = "'.$fid.'" ' );
		 
		 $Fname     = $SelectFrm['f_name'] ;
		 
		 $Fdesc     = $SelectFrm['f_desc'] ;
		
         return array($Fname,$Fdesc);
		
		}
        
		/*
		    topic linked
		*/
		static function SamGetTopicLinked($fID)
		{
		 $SamTopics     = parent::SamSelectAll('topic_id,t_subject,t_link','topics','WHERE `forum_id` = "'.$fID .'"  AND (t_link = 1 OR t_link = 2) ' );
		 
		
		 
		    if(! $SamTopics)
		     
			 return NULL;
			 
			$FoLink = array();
		
		 foreach($SamTopics as $Tlink):
		  
		  $TopicTitle   = $Tlink->t_subject;
		  
		  $TopicID      = $Tlink->topic_id;
		  
		  $TopicLink    = $Tlink->t_link;
		 
		 $FoLink[] .= '"'.$TopicID.'","'.$TopicTitle.'","'.$TopicLink.'",';
		 
		 endforeach;
		
		 return implode('',$FoLink);
		  
		}
        
        /*
		   function active
           return page active

		*/
		
	    static function SamGetActiv()
		{
		
         $TopicFilds  = implode (' , ', parent::$FILED['TPC']);
		 
		 $ACTIVTop    = array();
		 
		 $Where       = 'WHERE t_hide = 0 AND t_archive = 0 AND t_link = 0 AND t_delete = 0 AND t_hide_text = 0 ORDER BY t_lp_date DESC LIMIT 0,30  ';
		
         $TpcAc       = parent::SamSelectAll($TopicFilds,'topics',$Where);
		 
	 
		 foreach($TpcAc As $Activ):
 
		 $fid            = $Activ->forum_id;
		 
	     $Moderate       = mjorFunc::SamIsAdmin($fid);
		 
		 $TopcId         = $Activ->topic_id; 
		 
		 $TopcSubject    = htmlspecialchars($Activ->t_subject);
		 
         $TopcAuthoId    = $Activ->t_author;

		 $FrmIsHid      = parent::SamsolSelectOne('f_level','forum','WHERE f_id = "'.$fid.'"') ;
		 
		 if(  ULV < $FrmIsHid )  continue;	
		 
			 if(ULV != 4 && $Moderate == 0)
				
				 if( $TopcAuthoId != UID && ($Activ->t_approve == 1 || $Activ->t_hide == 1) )
		     
                  continue;	
		 
		 $TopcDat        = $Activ->t_date;
		 
	     $TopcReply      = $Activ->t_replies;

		 $TopcViwe       = mjorFunc::SamGetCountView($TopcId);
		 
		 $TopcTimeRepl   = parent::SamsolSelectOne('t_lp_date','topics','WHERE topic_id = "'.$TopcId.'"  LIMIT 1') ;
		 
		 $TopcDerAuth    = parent::SamsolSelectOne('t_lp_author','topics','WHERE topic_id = "'.$TopcId.'"   LIMIT 1') ;
		 
		 $AuthRreply     = mjorFunc::SamGetUsrClr($TopcDerAuth) ;
		 
		 
		 $ACTIVTop[] .=''.$fid.',"'.mjorFunc::SamGetTopFolder($TopcId).'",'.$TopcId.',"'.$TopcSubject.'",'.($TopcAuthoId>0?$TopcAuthoId:0).',"'.($TopcAuthoId>0?mjorFunc::SamGetUsrClr($TopcAuthoId):"").'","'.SamDat($TopcDat,4).'",'.$TopcReply.','.$TopcViwe.','.($TopcDerAuth>0?$TopcDerAuth:0).',"'.($TopcDerAuth>0?$AuthRreply:"").'","'.((($TopcTimeRepl > 0) && ($TopcTimeRepl > $TopcDat) )   ? SamDat($TopcTimeRepl,4): "").'",'."\n";
		
		 endforeach;
		
		 return implode('',$ACTIVTop); 
		
		
		
		
		
		}
 		
        
        
        
        
        
        
        
        
     }














