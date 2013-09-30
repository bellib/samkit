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
 
 

    class tpc extends SAMSOL_MODEL //
	{ //
	    
		static function SamTopicinFrm($tid)
		{
		
         $Select = parent::SamSelectCount('cat_id','topics','WHERE topic_id = "'.$tid.'" ') ;
		 
		 // verifier the topic is in frm hide
		 
         //$FrmISnormal     = parent::SamSelectCount('f_id','forum',"WHERE `f_hide` <= '".(int)ULV ."' AND f_id	= '".(int)$fid."' ");
		 
		    if($Select != 1) hl();

			else return;
		
		}
		
        /*
		   $ url : medidffd.php?mode=fgsdfs&f=54..
		   function return all url to netalarabi.com/?sam/smaurl/$url
		*/
		private static function SamChangeUrl($text)
		{
		
		     // $x  = $text;
             // $doc=new DOMDocument();
             // $doc->loadHTML($x);
             // $xml=simplexml_import_dom($doc); 
             // $images=$xml->xpath('//a');
             // foreach ($images as $img)  
			 // {
            
				// $x   = str_replace( $img['href'],GURLCLS.'samurl/'.$img['href'],$x ); 
		    
       

			// }
			$x  =  $text;
 
preg_match_all ("/a[\s]+[^>]*?href[\s]?=[\s\"\']+".
                "(.*?)[\"\']+.*?>"."([^<]+|.*?)?<\/a>/",
                $x, $matches);

$matches = $matches[1];
$list = array();

foreach($matches as $var)
{    
   $x = str_replace( $var,GURLCLS.'samurl/'.$var,$x ); 
}
		     return $x;
		
		
		}
	    static function SamTopics($tid) //
		{ //
		
		     global $SamFailed;
		 
		 $tid = (int)$tid;
		 
		 if($tid < 1)
		 
		 return NULL;
		 
		 $TocFiled     = implode (' , ', $SamFailed['TPC']); //
		 
		 $ReplyFiled     = implode (' , ', $SamFailed['REP']); //
		 
		 self::SamInsetTpcView($tid); //
		 
		 $SamTopics    = parent::SamSelectAll($TocFiled,'topics','WHERE `topic_id` = "'.$tid.'" '.self::SamGetTopicWhere($tid).' ' ); //
		 
		 $_Topics = array(); //
		 
		 $__Reply = array(); //
		 
		 $__Author = array(); //
 
		 if(count($SamTopics) == 0) //
		  
		  return NULL; //
		
		 foreach($SamTopics As $SamTopic):         //
		 
		 $TopicID        = $SamTopic->topic_id;      //

         $AuthorToId     = $SamTopic->t_author;      //
		 
         $TopicDate      = $SamTopic->t_date;        //
		 
         $TopicStat      = $SamTopic->t_status;        //
         
		 
		 
		 $Topickey      = $SamTopic->t_keyWord;        //
		 
		 
		 
		 // topic msg
		 
         // $TopicMsg       = self::SamChangeUrl($SamTopic->t_message) ;     //
             //
		 
		 $ForumId        = $SamTopic->forum_id;
		 
		 $FrmStatu       = self::SamFrmStat($SamTopic->forum_id);
		 
		 $TopicTitl      = $SamTopic->t_subject ;  //
		 
		 $TopicMsg       =  SamReplaceHref($SamTopic->t_message,$TopicTitl)  ; 
		 
		 $TopicFolder    = mjorFunc::SamGetTopFolder($TopicID);
		 
		 $SamAuthTpcName = parent::SamsolSelectOne('u_name','users','WHERE user_id = "'.$AuthorToId.'"') ; //
		 
		 $SamAuthTpcLvl  = parent::SamsolSelectOne('u_level','users','WHERE user_id = "'.$AuthorToId.'"') ; //
		 
		 $SamAuthTpcPHOTO  = parent::SamsolSelectOne('u_photo_url','users','WHERE user_id = "'.$AuthorToId.'"') ; //
		 
		 $LevelTemp      = self::LevelTemp($SamAuthTpcLvl); //
		 
         $SaminfoUsr     = self::SamGetInfo($AuthorToId); //
		 
		 $Moderate       = mjorFunc::SamIsAdmin($ForumId);
		 
		 	    if(ULV != 4 && $Moderate == 0)
				
				 if( $AuthorToId != UID && ($SamTopic->t_approve == 1 || $SamTopic->t_hide == 1)   )
		     
                  return NULL;	
		 
		 $__Author[]    .= ''.$AuthorToId.',"'.$SamAuthTpcName.'",'.$LevelTemp.',"'.$SaminfoUsr[1].'","'.$SaminfoUsr[3].'","'.$SaminfoUsr[4].'","'.$SaminfoUsr[2].'","'.$SaminfoUsr[0].'","'. SamGetUsrCountry($SaminfoUsr[5]).'","'.self::SamGetTitleMod($AuthorToId,$ForumId).'"," '.SamFiJs($SamAuthTpcPHOTO).' ","",1,' ."\n";
		 
		 $SamReplics     = parent::SamSelectAll($ReplyFiled,'replies','WHERE `topic_id` = "'.$TopicID.'" '.self::SamGetRepWhere($TopicID).' ' );
		 
		 if( $SamReplics > 0)
		 
		 foreach( $SamReplics As $rep):
 
         $Rid           = $rep->reply_id;
		 
         $RepAuthId     = $rep->r_author; 
		 
		 $SamAuthRepName = parent::SamsolSelectOne('u_name','users','WHERE user_id = "'.$RepAuthId.'"') ;
		 
         $RepTime       = $rep->r_date; 
		 
		 $SamAuthrepLvl  = parent::SamsolSelectOne('u_level','users','WHERE user_id = "'.$RepAuthId.'"') ; //
		 
		 $SamAuthrepPHOTO  = parent::SamsolSelectOne('u_photo_url','users','WHERE user_id = "'.$RepAuthId.'"') ; //
		 
		 $LevelTempR    = self::LevelTemp($SamAuthrepLvl);
		 
         $RepMsg        = $rep->r_message; 
		 
		     if(ULV != 4 && $Moderate == 0)
				
				 if( $RepAuthId != UID && ($rep->r_approve == 1 || $rep->r_hide == 1)   )
		     
                  continue; 
		 
		 $__Reply[]       .= '"'.self::SamGetRepFolderStat($Rid).'",'.$Rid.','.$RepAuthId.',"'.SamDat($RepTime,4).'",0,0,"'.self::SamGetInfoChang($Rid,'rep').'","'. SamFiJs($RepMsg) .'",'."\n";
		 
		 $SaminfoUsrply   = self::SamGetInfo($RepAuthId);
		
		 $__Author[]    .= ''.$RepAuthId.',"'.$SamAuthRepName.'",'.$LevelTempR.',"'.$SaminfoUsrply[1].'","'.$SaminfoUsrply[3].'","'.$SaminfoUsrply[4].'","'.$SaminfoUsrply[2].'","'.$SaminfoUsrply[0].'","'.SamGetUsrCountry($SaminfoUsrply[5]).'","'.self::SamGetTitleMod($RepAuthId,$ForumId).'","'.SamFiJs($SamAuthrepPHOTO).'","",1,' . "\n";      
		 
		 endforeach;
		 
		 $_Topics[]   .= '"t'.$TopicFolder.'",'.$TopicID.','.$AuthorToId.',"'.SamDat($TopicDate, 4).'"
		 ,"0","0","'.self::SamGetInfoChang($TopicID,'topic').'",
		 "'.SamFiJs($TopicMsg).'",'.implode('',$__Reply).' ';  
		 
		 
		 endforeach;
		 
		 $Alltopis = implode('',$_Topics).'"",0,"",0,"","",0,0,0,"","", ""';
		 
		 $Allauthor = implode('',$__Author).'0,""';
		 
		 return array($Alltopis,$Allauthor,$TopicTitl,$TopicStat,$TopicFolder,$FrmStatu,$TopicID,$ForumId,$Topickey);
 
		}
		private static function LevelTemp($levl)
		{
		
		    if($levl ==  4 )
		   
		     $UserTemp    =  3 ;
			 
		    elseif($levl ==  3 )
		   
		     $UserTemp    =  1 ;
			 
            elseif($levl ==  2 )
		   
		     $UserTemp    =  2 ;
			 
			else 
			
			 $UserTemp    =  1 ;
         
		 return $UserTemp;
		}
		private static function SamGetInfo($uid)
		{
		
	     $SamAuthCountTpc = parent::SamSelectCount('topic_id','topics','WHERE t_author = "'.$uid.'" AND t_approve = 0 AND t_delete = 0') ;
		 
		 $SamAuthCountRep = parent::SamSelectCount('reply_id','replies','WHERE r_author = "'.$uid.'" AND r_approve = 0 AND r_delete = 0') ;
		 
		 $CountRepTp = $SamAuthCountTpc + $SamAuthCountRep;
		 
		 $AuthPoint  = parent::SamsolSelectOne('u_points','users','WHERE user_id = "'.$uid.'"') ;
		 
		 $AuthPoint  = parent::SamsolSelectOne('u_points','users','WHERE user_id = "'.$uid.'"') ;
		 
		 $AuthDate   = parent::SamsolSelectOne('u_reg_date','users','WHERE user_id = "'.$uid.'"') ;
		 
		 $AuthCont   = parent::SamsolSelectOne('u_country','users','WHERE user_id = "'.$uid.'"') ;
		 
		 $DatReg     = (time()- $AuthDate)/(24*3600);
		 
		 $DatReg     = ceil($DatReg);
		 
		 $AuthLVl  = parent::SamsolSelectOne('u_level','users','WHERE user_id = "'.$uid.'"') ;
		 
		 $AuthOn   = parent::SamsolSelectOne('u_online','users','WHERE user_id = "'.$uid.'"') ;
		 
		    if($AuthLVl > 1 )
			
			 $AuthPoint = 0 ;
			 
		     $SamStar    = array(1,2,3,4,5,6,7,8,9,10);
			 
		     $SamTopics  = array(100,200,300,400,500,600,700,800,900,1000);
		   
			for($t=0;$t< 10;$t++)
			{
 
			    if(($CountRepTp > $SamTopics[0]) && ($CountRepTp < $SamTopics[9])  )
				{
			  
			        if(  ($CountRepTp <= $SamTopics[$t]) &&  ($CountRepTp > $SamTopics[$t-1]) )
			 
                     $star  = $SamStar[$t] ;
 				     
					 break;
                }
		        else
				{ 
			      
                 $star  = $CountRepTp < $SamTopics[0] ? $SamStar[0] : $SamStar[9] ;
				 
				 break;
				 }
				  
			}
		    if($AuthLVl == 3 )
			
			 $star = 100 + $star ;
		 $star = isset($star) ? $star : 0 ;
		 
         return array($CountRepTp,$AuthPoint,$star,$AuthOn,$DatReg,$AuthCont);
		 
		}
		private static function SamInsetTpcView($tid)
		{
		 
		 $UsrIp           = getenv('REMOTE_ADDR');
		 
	     $TopiVeFiled     = parent::SamsolSelectOne('t_views','topics','WHERE topic_id = "'.$tid.'"') ;
		 
		 $TopiVeFiledArry = explode('|',$TopiVeFiled);
		 
		 $NewVal          = "'".$UsrIp."| ".$TopiVeFiled."'";
 
		     if( ! in_array($UsrIp,$TopiVeFiledArry))
 
			 parent::SamUpdat('topics','t_views',$NewVal ,'WHERE `topic_id` = "'.$tid.'" ');
 
		}
		private static function SamGetInfoChang($tid,$type)
		{
		   global $SamFailed;
		    if(UID <1) 
		     
			  return NULL;
			 
			if($type == 'topic')
			 
			 $Table = 'topic_status';
			 
			else
			 
			 $Table = 'reply_status';
			  
		 $TopOptionFld   = implode(',',$SamFailed['TOPST']);
		 
		 $GetInfoes      = parent::SamSelectAll($TopOptionFld,$Table,'WHERE id = "'.$tid.'"  ORDER BY date ASC ');
		 
		 $GetInfoesF     = parent::SamsolFetchArray($TopOptionFld,$Table,'WHERE id = "'.$tid.'" AND type = "f"  ORDER BY date DESC LIMIT 1 ');
		 
		    if(! $GetInfoes)
		     
			 return NULL;
		
		 $ChangCont      = array();
		 
		 $AUTHID  = null;
			 
		 foreach($GetInfoes as $GetInfo ):
		 
		 $Type           = $GetInfo->type ; 
		 
		    if($GetInfo->type  == 'f')
		 
		     continue;
			 
		 $Dat            = SamDat($GetInfo->date,4) ; 
		 
		 $AUTHID         = $GetInfo->author ; 
		 
		 $AUTH           = mjorFunc::SamGetUsrClr($AUTHID) ;
		 
		 $SkinAU         = '<a href='.GURLCLS.$AUTHID.'>'.$AUTH.'</a>';
 
		 $ChangCont[]    .= $Type.'-'.$Dat.'-'.$SkinAU ;
		 
		 endforeach;
		 
		    if($GetInfoesF > 0)
			{
			
			 $AUTH           = mjorFunc::SamGetUsrClr($GetInfoesF['author']) ;
			 
			 $SkinAU         = '<a href='.GURLCLS.$AUTHID.'>'.$AUTH.'</a>';
			 
			 $ContF          = parent::SamSelectCount('type','topic_status','WHERE id = "'.$tid.'" AND type = "f"     '); 
			 
			 $ChangCont[]    .= $GetInfoesF['type'].'-'.SamDat($GetInfoesF['date'],4).'-'.$SkinAU.'-'.$ContF ;
			}
		 
		 return implode('|',$ChangCont);
		
		}
		static function SamGetTitleMod($uid,$fid)
		{
		 $UsrLevel      = parent::SamsolSelectOne('u_level','users','WHERE user_id = "'.$uid.'"') ;
		 
		 $UsrGender     = parent::SamsolSelectOne('u_sex','users','WHERE user_id = "'.$uid.'"') ;
		 
		 $Line          = array();
		 
		    if($UsrLevel > 0 && $UsrLevel == 1)
			{
				  global $SamFailed;
			 $TitlFld   = implode(',',$SamFailed['USRTITLE']); 
				 
			 $SamTitle  = parent::SamSelectAll($TitlFld,'ustitle','WHERE usr_id = "'.$uid.'" ');
			 
			 
			     
				if(! $SamTitle)
		     
			     return NULL;
			
			 $TitLevel      = parent::SamsolSelectOne('t_leval','ustitle','WHERE user_id = "'.$uid.'"') ;
				 
			    if($UsrGender == 1)
				{ 
				    if($TitLevel ==1) $user = 'عضو'; 
				    if($TitLevel ==2) $user = 'نائب رئيس'; 
				    if($TitLevel ==3) $user = 'رئيس'; 
				    if($TitLevel ==4) $user = 'قائد'; 
				} 
			    else 
			    { 
				    if($TitLevel ==1) $user = 'عضوة'; 
				    if($TitLevel ==2) $user = 'نائبة رئيسة'; 
				    if($TitLevel ==3) $user = 'رئيسة'; 
				    //if($TitLevel ==4) $user = 'قائد'; 
			    }
			     foreach( $SamTitle as $Title):
				 
				 $color         = $Title->t_color;
				 
				    if($color == NULL)
					{
					 $FontCol  = '';
					 $FinFontCol  = '';
					}
					else 
					{
					 $FontCol  = '<font color='.$color.'>';
					 $FinFontCol  = '</font>';
                    }
				 $Line[]      .= $FontCol.$user.' '.$Title->usr_titel.$FinFontCol.'<br />';

				 endforeach;
			
			
			}
			elseif($UsrLevel == 2)
			{
			  global $SamFailed;
			 $ModsFld   = implode(',',$SamFailed['MODS']); 

             $Mods      = parent::SamSelectAll($ModsFld,'mods','WHERE u_id = "'.$uid.'" ');			 
			
				if(! $Mods)
		     
			     return NULL;
				 
			    if($UsrGender == 1)
				{ 
				  $user = 'مشرف'; 
 
				} 
			    else 
			    { 
				  $user = 'مشرفة'; 
 
			    }
				 
			     foreach( $Mods as $Mod):
				 
				 $ForumId    = $Mod->f_id;
 
                 $FrmN       = parent::SamsolSelectOne('f_name','forum','WHERE f_id = "'.$ForumId.'"') ;
				 
                 $FrmN       = $fid == $ForumId ? 'المنتدى ' : $FrmN  ;				 
				 
                 $Url        =  '<a target=_new href='.GURLCLS.'samfrm/forum'.$ForumId.'><font color=#DD0000>'.$user.' '.$FrmN.'</font></a><br />';
				 
                 $UrlNorm    =  '<font color=#DD0000>'.$user.' '.$FrmN.'</font><br />';
				 
				 $UrlSckin   = $fid == $ForumId ?  $UrlNorm  : $Url  ;
				 
                 $Line[]     .=  $UrlSckin;
				 
				 endforeach;

			
			}
			elseif($UsrLevel == 3)
			{
 
			 $SelectMon      = parent::SamSelectAll('cat_id,f_id','forum','WHERE f_mon = "'.$uid.'" ');
			 
			    if($SelectMon > 0 )
				{
				    if($UsrGender == 1)
				   
				     $user = 'مراقب'; 
 
			        else 
 
				     $user = 'مراقبة'; 
 
			     foreach( $SelectMon as $Mon):
				 
				 $CatId        = $Mon->cat_id;
				 
				 $ForumId      = $Mon->f_id;
 
                 $CatN       = parent::SamsolSelectOne('c_name','cat','WHERE c_id = "'.$CatId.'"') ;
				 
                 $CatN       = $fid == $ForumId ? 'المنتدى ' : $CatN  ;				 
				 
                 $UrlNorm    =  '<font color=#B0934D>'.$user.' '.$CatN.'</font><br />';

				 
                 $Line[]     .=  $UrlNorm;
				 
				 endforeach;
				
				
				
				}
			
 
			
			}
 
		 return  implode('',$Line);
		}
		private static function SamFrmStat($Fid)
		{
		  $FrmSt       = parent::SamsolSelectOne('f_status','forum','WHERE f_id = "'.$Fid.'"') ;	
 
            if ($FrmSt == 0)
            
			 $Status = 'l';
            
			else
             
			 $Status = '';
			 
         return $Status;
		 
		}
		private static function SamGetRepFolderStat($rid)
		{
		
		 $RepFiled    =  'r_approve, r_hide, r_delete, r_date' ;
		 
		 $SamSelctTop = self::SamsolFetchArray($RepFiled,'replies','WHERE reply_id = "'.$rid.'"') ;
 
	     $approve = $SamSelctTop['r_approve'];
		 
	     $hide = $SamSelctTop['r_hide'];
		 
	     $delete = $SamSelctTop['r_delete'];
		 
	     $lp_date = $SamSelctTop['r_date'];
	     $folder = '';
	     $folders = '';
	        if ($approve == 1){
			
		     $folder .= 'm';
	        }
	        else if ($approve == 2){
		     $folder .= 'M';
	        }
	        if ($hide == 1){
		     $folder .= 'i';
	        }
	        if ($delete == 1){
		     $folder .= 'd';
	        } 
            if (0){
		     $folder .= 's';
	        }
	         $folder = $folder.$folders;
	     return $folder;
 
		}
		private static function SamGetTopicWhere($tid)
		{
		
		    if(ULV == 2 && mjorFunc::SamIsAdmin(false,$tid) == 1)
			
			 $LVL = 2;
			 
			else $LVL = 1;
			
		    if(ULV == 3 && mjorFunc::SamIsAdmin(false,$tid) == 1)
			
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

			
                 $SamTopics     = "AND t_delete = 0 AND `t_archive` = 0   ";

			
			}
			else 
			 
			 $SamTopics     =  " AND `t_approve` = 0 AND `t_delete` = 0 AND `t_hide` = 0 AND `t_archive` = 0   " ;
			  
         return $SamTopics ;
		
		}
		private static function SamGetRepWhere($tid)
		{
		
		    if(ULV == 2 && mjorFunc::SamIsAdmin(false,$tid) == 1)
			
			 $LVL = 2;
			 
			else $LVL = 1;
			
		    if(ULV == 3 && mjorFunc::SamIsAdmin(false,$tid) == 1)
			
			 $LVL = 3;
			 
			else $LVL = 1;
			
			if(ULV == 1) $LVL = 1;
			
		    if(ULV  == 4)
			
             $SamTopics     = "";
 
            elseif($LVL == 3)
		     
             $SamTopics     = "";
		    
			elseif($LVL == 2 )
		     
             $SamTopics     = "AND r_delete = 0    ";
		
		    elseif($LVL == 1)
		    {

			
                 $SamTopics     = "AND r_delete = 0 AND `r_archive_flag` = 0   ";

			
			}
			else 
			 
			 $SamTopics     =  " AND `r_approve` = 0 AND `r_delete` = 0 AND `r_hide` = 0 AND `r_archive_flag` = 0   " ;
			  
         return $SamTopics ;
		
		}
	
 
	
	}