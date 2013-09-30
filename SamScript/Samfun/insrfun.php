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
// print_r($_POST);
// echo md5($_POST['checksum']) .'<br>';
// echo md5( $_SESSION['Top']);
// die;	 
 
	//  parent::SamModel('insert'); 
 /*
 
 [msg] => mm 
 [caller] => f.asp%3Ff%3D36 
 [format] => FONT-FAMILY:arial;FONT-SIZE:17px;TEXT-ALIGN:center;COLOR:#0000cc;
 [forum] => 1 
 [checksum] => 396429624 
 [action] => post 
 [post] => newtopic 
 [newtopic_hidden] => on
 [newtopic_locked] => on 
 [newtopic_pinned] => on 
 [subject] => tt 
 [message] => 
 
 */ 
    // the filed post
    $verifier = false;
	
	$TID = 0 ;
	
	$FID = 0 ;
	
	$M   = array();
	
	$MSG = 'NO DATA';
	
	$Src  = null;
	
	if(ULV > 0 && isset($_POST['checksum'] )  && isset($_SESSION['Top'] ) && md5($_POST['checksum']) == md5( $_SESSION['Top'] ) )
    {     
	     unset($_SESSION['Top']);
	 
	      parent::SamModel('insert'); 
	 
	    if(  isset($_POST['post']) &&( htmlspecialchars($_POST['post']) == 'newtopic'  || htmlspecialchars($_POST['post']) == 'edittopic') )
 
		    {
                 $post = array('msg','checksum','caller','format','forum','action','subject','keyWord');
   
 
	
                 // 	verification if all filed post its in the post 
                
				 
				 foreach( $post  as $key ) 
	
				 if( ! array_key_exists($key, $_POST) )
				 {
  
				 $MSG = 'البينات المرسلة غير واضحة';
		   
				 $Src = null;
		    
				 $verifier = true;
      
				 }
	             // verifi if value is null 
	 
				 foreach( $_POST as $key => $value ) 
 
				 if( trim($value == '') && $key != 'message'   )
				 {
  
				 $MSG = 'بعض البيانات فارغة';
		   
				  $Src = null;
		   
				 $verifier = true;
		 
				 }
	   
		
				 if(isset($_POST['checksum']) &&  $verifier == false && htmlspecialchars($_POST['post']) == 'newtopic' )
				 {
 
				 $M  = parent::$_SM_model->SamInsertTopic();
				 }
				 elseif($verifier == false && htmlspecialchars($_POST['post']) == 'edittopic')
				 {
 
				 $M  = parent::$_SM_model->SamInsertTopic();
 
				 }
	        }
			/*
			    insert mail
			*/
			    elseif (isset($_POST['post']) &&( htmlspecialchars($_POST['post']) == 'message '  ))
        	    {

                       print_r($_POST);  die;    

				
				}
			elseif (isset($_POST['post']) &&( htmlspecialchars($_POST['post']) == 'newreply'  || htmlspecialchars($_POST['post']) == 'editreply'))
			{
			 /*
			  [msg] => sdsdsdsd
			  [qid] => 4F3C4F6430EAAD2BAA1664123FB91C7E 
			  [post] => newreply 
			  [format] => quick 
			  [quickmode] => 1 
			  [topicnam] => 1d0cc1b9d317edfecd23c1f130d5dbcc 
			  [topic] => 5 
			  [forum] => 1 
			  [checksum] => 0 
			  [caller] => http%3A//localhost/na/%3Fsam/samtopic/topic5 
			 
			 */
			     
			     $M =  parent::$_SM_model->SamInseRep();
			       
				    /**
					   if is an notic 
					*/
			        if(! is_array($M))
					{
					     $MSG = $M;
					}   
			
			
			
			
			}

				 if(is_array($M) and count($M) == 4)
				 {
				 // notic mode
				 $MSG = $M[0];
	       
				  // caller
				  $Src = $M[1];
		   
				 // topic id
				  $TID = $M[2];
		   
				 // f id
				 $FID = $M[3];
				 }
	     
				  self::$ModeSAM        = 'notice';
		 
				  self::$VwSAM          = 'notice' ;
	 		  
				  self::$DataSAM        = array(
			 
				 'Noti' => $MSG  ,
				
				 'Sc'   => $Src ,
		 
				 'TID' => $TID > 0 ? $TID : '',
		 
				 'FID' => $FID > 0 ? $FID : ''
			 
		 
				  ); 
	             }else 
	             {
	                hl();
	
				  // self::$ModeSAM        = 'notice';
		 
				  // self::$VwSAM          = 'notice' ;
	 		  
				  // self::$DataSAM        = array(
			 
				  // 'Noti' => 'notmember_Log_in'  ,
				
				 // 'Sc'   => '' ,
		 
				  // 'TID' => $TID > 0 ? $TID : '',
		 
				 // 'FID' => $FID > 0 ? $FID : ''
				  // );
 
	            }
    //print_r($_POST);
 