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
       
          $pageNum = false;
         /* $forum_id = str_replace('forum','',self::$argemntLeft) ;
          
                if( (int) $forum_id <= 0)
                
                 hl();
                  
          parent::SamModel('frm');*/

            $forum  = explode('-',self::$argemntLeft);
             
             $forum_id = str_replace('forum','',$forum[0]) ;
          
                if( (int) $forum_id <= 0)
                
                 hl();
              if(count($forum) == 2) $pg   = (int) $forum[1];
              
              else $pg = 1;
                  
            parent::SamModel('forum');
            
            // frm id verifier
            
            $Info  = parent::$_SM_model->forumid($forum_id);
            
             self::$FID = $Info[0];
             
             self::$CID = $Info[1];
 
		     $TopicsFrm            = parent::$_SM_model->SamTopiCsArr(self::$FID,$pg);
			 
			 $MODS                 = parent::$_SM_model->SamGetMods(self::$FID);
			 
			 $LINK                 = parent::$_SM_model->SamGetTopicLinked(self::$FID);
			 
			 $SEO                  = parent::$_SM_model->SamGetSeoFrm(self::$FID);
			 
			 $ToTALPAGE            =  parent::$_SM_model->SamPagination($pg,self::$FID);
			 
			 
			 
			     
				 if(is_array($SEO))
				 {
		         self::$DESC           = $SEO[0];
		 
		         self::$KEY            = $SEO[1];
				 }
		 
		     self::$ModeSAM        = 'forum';
		 
		     self::$VwSAM          = 'frm' ;
		
	         self::$DataSAM        = array(
			 
		         'TPCS'      => $TopicsFrm[0],
			 
		         'AUTH'      => $TopicsFrm[1],
				 
		         'FrmMODS'   => $MODS,
				 
				 'LINK'      => $LINK,
				 
				 'ToTALPAGE' => $ToTALPAGE[1],
				 
				 'PAGE'      => $pg,
				 
				 'NrLin'     => $ToTALPAGE[2] ,
		        );
             
             

  





?>