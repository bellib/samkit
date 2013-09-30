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
 
 
             // all Url the arg left
			    if(isset(self::$argemntLeft))
			    {
				        
				     /**
 					 put  the arg left in array for  select the 
                          like /topic13-7/ 
						  13 : topic id
						  7  : page id
					  */

                     $SamUrl  = explode('-', self::$argemntLeft);

                        if(is_array($SamUrl) && count($SamUrl) == 2)
                        {
						     /**
							     topic id arg
							 */
						     $Sam_Tpc_Arg = $SamUrl[0];
							 
							 /**
							     pagination arg
							 */
							 $Sam_Pagination = $SamUrl[1];
							 
							 
						}
                        else
                        {
						
						     $Sam_Tpc_Arg = self::$argemntLeft;
							 
							 $Sam_Pagination = false;
						
						
						
						
						}						
				
				}else hl();
			   
			 
			        
			 $Tid          = str_replace('topic','',$Sam_Tpc_Arg ) ;
			 
			 $Tid          = (int)$Tid   ;
			 
			 parent::SamModel('tpc'); 
			
			 parent::$_SM_model->SamTopicinFrm($Tid);
			
			 $Topics               = parent::$_SM_model->SamTopics($Tid);
			 
			 if($Topics == NULL) hl();
			 
			 // frm id 
			 
			 self::$FID   = $Topics[7];
			 
			 // description 
			 //self::$DESC  = $Topics[2];
			 
			 self::$DESC  = SamSeo::SamGetConyeny(1,$Topics[2]) .'' ;
			 
			 self::$KEY   = ! empty($Topics[8]) ? $Topics[8] : false;
			 
			 $_SESSION['Top']      = md5(time().( UID > 0 ? strtoupper(md5(UID.UNM)) : 0 ));
			 
			 $SesRep               = $_SESSION['Top'] ;
			 
			 self::$DataSAM        = array(
			 
		         'TPCS'     => $Topics[0],
			 
		         'AUTH'     => $Topics[1],
				 
				 'TPCTITLE' => $Topics[2],

                 'TopicST'	=> $Topics[3],
				 
                 'TopFlg'	=> $Topics[4],
				 
                 'FrmStat'	=> $Topics[5],
				 
                 'TID'	    => $Topics[6], 
				 
                 'Ses'	=> $SesRep 			 
		        );
			 
		     self::$ModeSAM        = 'topic';
		 
		     self::$VwSAM          = 'tpc' ;