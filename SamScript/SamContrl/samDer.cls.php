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
 
    class samDer extends SAMSOL_CONTROLLER
    {
          
		 
	    function __construct()
	    { 
  
 
		 
	    }
		function index()
		{
		     parent::SamModel('admin');
		   
		     $topic = parent::$_SM_model->SamAdminGetTopAppro();
			 
		     $arr = array('Top' => $topic);
			 
			 parent::SamVeiw('dernier',$arr);
		}
		function samgetgene()
		{
          @sleep(1);
        $action   = htmlspecialchars($_POST['action']);
        $ajax     = htmlspecialchars($_POST['ajax']);
        $bgnLine  = htmlspecialchars($_POST['begin_line']) ;
        $user     = htmlspecialchars($_POST['user']);
        $pass     = htmlspecialchars($_POST['pass']);
        $lng_usr  = (int)$_POST['lng_usr'];
        $lng_pw   = (int)$_POST['lng_pw'];
        $end_line = htmlspecialchars($_POST['end_line']); 
        $total    = (int)$_POST['total'];
        $ran_usr  = isset($_POST['random_usr']) ? htmlspecialchars($_POST['random_usr']) : '' ;
        $ran_pw   = isset($_POST['random_pw'])  ? htmlspecialchars($_POST['random_pw'])   : '';
 
        if(isset($_POST['action'])&& $action == 'generator' && $ajax == 'true'  && $total > 0 && $total <= 1000)
        {  
            for($x=1;$x<=$total;$x++)
	        {
              $generateur  =  $bgnLine.'&nbsp;';
		 
		     // creat user
		        if($ran_usr == 'on' && $lng_usr > 0)
		        {   
		           $word = substr(md5(time().$user.$x),0,$lng_usr);
		           $generateur .=  $word.'&nbsp;&nbsp;';
		        }
		        else $generateur .=  $user.$x.'&nbsp;&nbsp;';
		
		        // pass word
		        if($ran_pw == 'on' && $lng_pw > 0)
		        {   
		           $word = substr(md5(time().$pass.$x),0,$lng_pw);
		           $generateur .=  $word.'&nbsp;&nbsp;';
		        }
		        else $generateur .=  $pass.'&nbsp;&nbsp;';
		
		         // fin
		        if(isset($end_line))
		
                $generateur .=  $end_line.'&nbsp; ';
		 
		        echo '<li style="list-style: none;padding:2px;">'.$generateur.'</li>' ;
		
		 
	        } 
	           exit();
        }else exit();		
		
		
		}
		
		function __destruct()
		{
		
		   //parent::SamVeiw('dernier',0);
		
		}
		 

	 
	}
 