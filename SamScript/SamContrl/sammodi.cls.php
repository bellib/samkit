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
 
session_start();
 
 /*
    a : approved 
	h : holde
	l : lock
	e : edited
	i : hide
	d : delet
	m : chnge forum movment
	v : un hide
	x : un stick
	p : stic
 */
    class sammodi extends SAMSOL_CONTROLLER
	{
	
	    private static $SamUrloca = NULL;
		
	    private static $UsrId = 0;
		
	    function index()
		{
		
		        if(isset($_SESSION[SESI.'usrid_mod']))
                {
		
                 self::$UsrId = (int)$_SESSION[SESI.'usrid_mod'];
			 
	            }
		        // if(isset($_COOKIE[SESI.'usrid']))
                // {
		
                  // self::$UsrId = (int)$_COOKIE[SESI.'usrid'];
			 
	            // } 
				 
				//print_r($_POST);
				
				/* aprove replay 
				Array ( [moderate] => ra,89 [url] => http://localhost/na/?sam/samfrm/forum1 )
				*/
				/*
				 aprove topi'cS'
				 Array ( [moderate] => a,29,28,27 [url] => http://localhost/na/?sam/samfrm/forum1 )
				 aprove topic
				 Array ( [moderate] => a,29 [url] => http://localhost/na/?sam/samfrm/forum1 )
				*/
				 
				if(isset($_POST['moderate']) &&  self::$UsrId > 0  )
				{
				
				     @extract($_POST);
					 
					 // $src
					 $src  = $url;
					 
					 // type
					 $type = $moderate;
					
					 // put type in array
					 $Commend = explode(',',$type);
					
					    if(count($Commend) < 2) hl();
						
					 // comende mode aprove ... lock .....
					 
					 $SamCommendType = $Commend[0];
 
					 //cmd value
				        if(count($Commend) == 2)
						{
						     $Cmmd_Value = $Commend[1];
						
						}
						else
                        {    
						     // shift the comd type
						     array_shift($Commend);
							 
							  
						     $Cmmd_Value = $Commend ;
						
						
						}						
					 
					  parent::SamModel('aprove'); 
					  
					    $ULV = parent::$_SM_model->memberLevel(self::$UsrId);
					    // aprove topic and replay
					    if( ($SamCommendType == 'ra' OR  $SamCommendType == 'a'  ) && $ULV > 1)
					    {
					      parent::$_SM_model->approve($SamCommendType,$Cmmd_Value,self::$UsrId);
					    }
						// tatbit 
						 if( ( $SamCommendType == 'p' OR  $SamCommendType == 'P' OR $SamCommendType == 'l'  OR $SamCommendType == 'u' 
						 
						  OR $SamCommendType == 'i'  OR $SamCommendType == 'v'   OR $SamCommendType == 'd' 
						 )  && $ULV > 1)
					    {
					      parent::$_SM_model->Samsolstic_Lock($SamCommendType,$Cmmd_Value,self::$UsrId);
					    }
						/*
						   delet replay => rd
						   hid replay   => ri
						   no hid       => rv
						*/
					    if( ($SamCommendType == 'ri' OR  $SamCommendType == 'rd'  OR  $SamCommendType == 'rv'  OR  $SamCommendType == 'ru'  ) && $ULV > 1)
					    {
					      parent::$_SM_model->SamHid_Delet_Rep($SamCommendType,$Cmmd_Value,self::$UsrId);
					    }
					      
						 
				
				    header('Location:'. $src);
				
				
				}else hl();
		   
		}
		 
	
	
	
	
	
	
	
	
	}

 