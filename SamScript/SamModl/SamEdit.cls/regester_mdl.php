<?php

    class regester extends SamsolModel
	{
	
	    private function SamGetAllPost()
	    {
		
		 $this->UsrName   = htmlspecialchars(trim($_POST['user_name']));
		  
	     $this->UsrEmail  = htmlspecialchars(trim($_POST['user_email']));
		 
	     $this->UsrPass   = htmlspecialchars(trim($_POST['user_password1']));
		 
	     $this->UsrCity   =  htmlspecialchars($_POST['user_city']) ;
		 
	     $this->UsrStat   = htmlspecialchars($_POST['user_state']) ;
		 
	     $this->UsrContry = $_POST['user_country'];
		 
	     $this->UsrJop    =  htmlspecialchars($_POST['user_occupation']) ;
		 
	     $this->UsrAge    = intval($_POST['user_age']);
		 
	     $this->UsrSex    = $_POST['user_sex'];
		 
	     //$Captcha   = HtmlSpecialchars($_POST['security_code']);
		 
	     $this->UsrDate   = time();
		 
	     $this->Pass      = MD5(MD5($this->UsrPass));
		 
	     $this->Pass2     = base64_encode($this->UsrPass);
		 
		 $this->UsrIp     = getenv('remote_addr');
		

		}
	    function SamVeriFUsrInfo()
		{
		
		 $this->SamGetAllPost();
         
		 $NameExist  = parent::SamSelectCount('u_name','users','WHERE u_name = "'.$this->UsrName.'"') ;
		 
		 $NameFilter = parent::SamSelectCount('name','name_filter','WHERE name = "'.$this->UsrName.'"') ;
		 
		 $EmailExist = parent::SamSelectCount('u_name','users','WHERE u_email = "'.$this->UsrEmail.'"') ;
 
	        if  ($NameExist > 0) 
		
	         $RegisterPro = 'registration_failed_name_exists';
 
	        elseif  ($NameFilter > 0)
		
	         $RegisterPro = 'registration_failed_name_invalid';
 
	        elseif  ($EmailExist > 0) 
		
	         $RegisterPro = 'registration_failed_email_used';
 
	        elseif (empty($this->UsrName) ||  empty($this->UsrPass)) 
		
	         $RegisterPro = 'registration_failed';
			 
			else
			{
 
	         $SamValuInsert  = "'1', ";
 
		     $SamValuInsert .= "'$this->UsrName', ";
		     
			 $SamValuInsert .= "'$this->UsrName', ";
			 
		     $SamValuInsert .= "'".$this->Pass."', ";
			 
		     $SamValuInsert .= "'".$this->Pass2."', ";
			 
		     $SamValuInsert .= "'$this->UsrEmail', ";
			 
		     $SamValuInsert .= "'$this->UsrCity', ";
			 
		     $SamValuInsert .= "'$this->UsrStat', ";
			 
		     $SamValuInsert .= "'".$this->UsrIp."', ";
			 
		     $SamValuInsert .= "'".$this->UsrIp."', ";
			 
		     $SamValuInsert .= "'$this->UsrContry', ";
			 
		     $SamValuInsert .= "'$this->UsrJop', ";
			 
		     $SamValuInsert .= "'$this->UsrAge', ";
			 
		     $SamValuInsert .= "'$this->UsrSex', ";
			 
		     $SamValuInsert .= "'$this->UsrDate' ";
			 
			 $SamUsrFiled = implode(',',parent::UsrSamFiled());
			
			 $insert      = self::SamInsert('users',$SamUsrFiled,$SamValuInsert);
			
			 $RegisterPro = 'registration_ok';
			 
			} 
 
         return $RegisterPro; 	
		
		
		
		}
 
	}
