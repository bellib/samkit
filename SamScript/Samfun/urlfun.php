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
 
 
      
	        if(isset(self::$argemntLeft))
		    {
                            
              $URL =  base64_decode(self::$argemntLeft) ;
			  
	        }else
			{
			
			    $URL =  GURLCLS;
			}
			
			
	 	     self::$ModeSAM        = 'samurl';
		 
		     self::$VwSAM          = 'samurl' ;

		       self::$DataSAM        = array(
			   
			   
			   'URL'  => $URL 
			   
			   
			   );


 