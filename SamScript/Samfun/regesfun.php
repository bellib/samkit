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
 
 

		    if(self::$argemntLeft == 'policy')
		    {
		          self::$VwSAM = false;
				  
				 self::$ModeSAM        = 'policy'; 
		    }
		    elseif(self::$argemntLeft == 'rules') 
		 
		     self::$ModeSAM        = 'rules';
		 
		    elseif((self::$argemntLeft == 'insert') && ( isset($_POST['vari']) && isset($_SESSION['REG']) && $_POST['vari'] == $_SESSION['REG']  ))
		    { 
	         unset($_SESSION['REG']);
			 
		     parent::SamModel('regester'); 
			 
			 self::$ModeSAM        = 'register';
			 
			 $MsgSamRege       = parent::$_SM_model->SamVeriFUsrInfo();
		 
		     $_POST = array();
		   
		    }
		 
		    else
			 
		 
		     self::$ModeSAM        = 'register';
		 
		     self::$VwSAM          = 'register' ;
		 
		     $_SESSION['REG']      = md5(time());
		 
	         self::$DataSAM        = array(
			 
		     'SESSION'  => $_SESSION['REG'] ,
   
             'Msg'      => isset($MsgSamRege)  ? $MsgSamRege : ''  
			 
		 
		        );

 




?>