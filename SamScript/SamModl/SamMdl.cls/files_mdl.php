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
 
 
    class files extends SAMSOL_MODEL  
	{
	
	
	    static function Sam_GetFiles()
	    {
		 
		         // medales file filed
		         $Sam_Medales_Filed = implode(',',parent::$FILED['MEDALES_F']); 
				 
			 
				 
				 // Js Var arrau
				 
				 $Sam_Memb_JS    =  ' var userfiles = new Array (';
				 
				  // select count filed
				 $count = parent::SamSelectCount('m_id','medales_files','WHERE `m_uid` = "'.UID.'" ') ;
				     
					  // result is null 
					if($count == 0) $Sam_Memb_JS   .=  '"",' ;
					else
					{
					    $Sam_Medales = parent::SamSelectAll($Sam_Medales_Filed,'medales_files','WHERE `m_uid` = "'.UID.'" ' ); // 
						
					    foreach($Sam_Medales as $val):
						 
						  $Sam_Memb_JS   .=  '"'.GURL.'?samimg/file/'.$val->m_countent.'",' ;
						  
						  $Sam_Memb_JS   .=  '" '.$val->m_size.'",' ;
						  
						  $Sam_Memb_JS   .=  '" '.SamDat($val->m_date,4).'",' ;
						 
					    endforeach;
					
					}
					  
				 
				 
				 $Sam_Memb_JS   .=  ' "",0,"");';
				 
		         return $Sam_Memb_JS;
	    }
	
	
	
	
	
	
	
	
	}