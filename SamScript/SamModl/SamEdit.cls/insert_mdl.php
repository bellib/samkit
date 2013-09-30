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
 
    final class insert extends SAMSOL_MODEL
	{ 
	
        function Insert_Admin()
        {
            /**
			 [ADMIN_NAME] 
			 [ADMIN_PASS]
			 [ADMIN_PASS_R]
			 [ADMIN_NAME_EMAIL] 
			 [SIT_NAME]
			 
			*/
			if(isset($_POST['ADMIN_NAME']) && isset($_POST['ADMIN_PASS']) && isset($_POST['ADMIN_PASS_R']) && isset($_POST['ADMIN_NAME_EMAIL']) && isset($_POST['SIT_NAME']))
            {
			
			    extract($_POST);
				
				$filed_sam_user = "`u_name`,`u_pass`,`u_email`";
				
				     if($ADMIN_PASS != $ADMIN_PASS_R ) return 'filed';
					 
					  mysql_query("
 	                  INSERT INTO `".TP."users` (`user_id`, `u_name`,  `u_pass`,  `u_email`  , `u_level`,   `u_reg_date`   ) VALUES
 	                 (null, '".$_POST['ADMIN_NAME']."' , '".md5(md5($ADMIN_PASS))."', '".$ADMIN_NAME_EMAIL."','4', '".time()."' );
	                 ") or die(mysql_error()); 
			         return 'ok';
			
			
			}
       
        }



}