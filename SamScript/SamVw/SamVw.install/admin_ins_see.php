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
         
	global $Install_Sam;
	   echo '<form action="'.GURL.'?install/insert" method="post"name="SAMSOL_FORM">';
      echo '<tr><td class="f1" id="re_text_SAMSOL"   >'.$Install_Sam['ADMIN_NAME'].'</td> <tr> 
       <tr> <td class="f1" id="re_Input_SAMSOL"    ><input type="text" name="ADMIN_NAME"></td><tr>';
	  echo '<tr><td class="f1" id="re_text_SAMSOL"   >'.$Install_Sam['ADMIN_PASS'].'</td> <tr> 
       <tr> <td class="f1" id="re_Input_SAMSOL"    ><input type="password" name="ADMIN_PASS"></td><tr>';
	  echo '<tr><td class="f1" id="re_text_SAMSOL"   >'.$Install_Sam['ADMIN_PASS_R'].'</td> <tr> 
       <tr> <td class="f1" id="re_Input_SAMSOL"    ><input type="password" name="ADMIN_PASS_R"></td><tr>';
	  echo '<tr><td class="f1" id="re_text_SAMSOL"   >'.$Install_Sam['ADMIN_NAME_EMAIL'].'</td> <tr> 
       <tr> <td class="f1" id="re_Input_SAMSOL"    ><input type="text" name="ADMIN_NAME_EMAIL"></td><tr>';
	  echo '<tr><td class="f1" id="re_text_SAMSOL"   >'.$Install_Sam['SIT_NAME'].'</td> <tr> 
       <tr> <td class="f1" id="re_Input_SAMSOL"    ><input type="text" name="SIT_NAME"></td><tr>';
	  echo ' <tr> <td class="f1" align="center"  ><input type="button" value="'.$Install_Sam['NEXT'].'" onclick="samverifier()"></td><tr>';
	   echo '<form>';
	   echo ' </table>';
	  echo '<script type="text/javascript"> 
	  function samverifier()
	  {
	     var amin_name = SAMSOL_FORM.ADMIN_NAME.value ;
	     var ADMIN_PASS = SAMSOL_FORM.ADMIN_PASS.value ;
	     var ADMIN_PASS_R = SAMSOL_FORM.ADMIN_PASS_R.value ;
 
	     var ADMIN_NAME_EMAIL = SAMSOL_FORM.ADMIN_NAME_EMAIL.value ;
	     var SIT_NAME = SAMSOL_FORM.SIT_NAME.value ;
         
		 if((amin_name == "") || (ADMIN_PASS == "")  || (ADMIN_PASS_R == "")  || (ADMIN_NAME_EMAIL == "")   || (SIT_NAME == "")    )
		 {
		    alert("all filed obligatoir");
			return false;
		 }
		 if( ADMIN_PASS !=  ADMIN_PASS_R   )
		 {
		    alert("الباس غير متساوي");
			return false;
		 }
	    SAMSOL_FORM.submit();
	  }
	  </script>';