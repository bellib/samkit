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
 /*
    a : approved 
	h : holde
	l : lock
	e : edited
	i : hide
 */
     if( ! defined('SAMSOL')) die('Can\'t Script. ');
	 
	class Sam extends SAMSOL_CONTROLLER
	{
	
	    private static $CodagSAM;
		
	    private static $SataSam;
		
	    private static $FnCodagSAM;
		
	    private static $VwSAM;
		
	    private static $DataSAM;
		
	    private static $Cat;
		
	    private static $ModeSAM;
		
		
	    private static $DltStlSAM;
		
	    private static $Modifucation;
		
		
	    private static $Farg;
		
	    private static $Sarg;
		
	    private static $Topics;
		
		private static $argemntRight;
		
		private static $argemntLeft;	
		
		private static $logout;
        
        // frm id 
        
        private static $FID;
        
        private static $CID;
        
        private static $DESC ;
		
        private static $QUID ;
		 
        private static $KEY ;
		
        private static $frmlist ;
		
        private static $LNG ;
		
        private static $Tid ;
		
		// to get user id
        private static $Samuid ;
		
		// admin links
        private static $Admin_Links ;
	
	    function __construct()
		{ 
		 //@setcookie(SESI.'usrid','' ) ;
 
		  session_start();
		  
		  // language 
		  
		    global $SamLangAr;
			
			self::$LNG  = $SamLangAr;
         
		 // the general file vw
    
		 self::$CodagSAM = 'd';
		 
		 self::$FnCodagSAM = 'f';
		 
		 // array general SataSam
		  
         self::$SataSam = array();
	    
		 self::$argemntRight   = null;
		 
		 self::$argemntLeft    = null;
		 
         self::$VwSAM          = null;
		 
         self::$Farg          = null;
		 
         self::$Sarg          = null;
		 
         self::$Cat          = null;
         
         // frm id
         
          self::$FID          = 0;
          
          // cat id
          
          self::$CID         = null;
		  
		  // toget user id
          self::$Samuid         = null;
		 
         self::$Topics          = null;
		 
         self::$DataSAM          = array();
		 
		 self::$InRealClass    =  true; 
		 
		 self::$ModeSAM        = null; 
		 
		 self::$Modifucation        = 9; 
		 
		
 
 
 	     self::$DESC           =  self::$LNG['description'];
		 
		 self::$KEY            =  self::$LNG['keywords'];	 
		 
		 // ip
		 
		    define('ip',getClientIp());
         
             // time zone 
	 
		 // self::TimeZone();
            if(isset($_SESSION[SESI.'tz']))
		    {
			    $time_zone = htmlspecialchars($_SESSION[SESI.'tz']);
				
				 setcookie(SESI.'tz','');
				 
		         setcookie(SESI.'tz',$time_zone,time()+ 3600*500*60);
			
			
			}

			else  $time_zone = 0;
			
		    /**
			   @ desible cookie
			*/
	        if(isset($_SESSION[SESI.'usrid_Cooki']) && TRUE === $_SESSION[SESI.'usrid_Cooki'])
		    {
  
			     @setcookie(SESI.'usrid','' ) ;
				 
				 unset($_SESSION[SESI.'usrid_Cooki']);
				 
				 hl();
			
			}
		    define('TZ',$time_zone );
		 
 
             parent::SamModel('generel'); 
			 
			

		     $SamUsrInfo = parent::$_SM_model->SamInfousr();
			 
			  
			    if(is_object($SamUsrInfo))  
			    {
			       define('UNM',$SamUsrInfo->u_name);
			       define('ULV',$SamUsrInfo->u_level);
			       define('UID',$SamUsrInfo->user_id);
			       define('UPS',$SamUsrInfo->u_posts);
				   
				   if(! isset($_SESSION[SESI.'usrid_mod']) && ULV > 1)
				   $_SESSION[SESI.'usrid_mod'] = UID;
			     
			     
			    }
				else
			    {
			       define('UNM','');
			       define('ULV',0);
			       define('UID',0);
			       define('UPS',0);
			     
			     
			    }
 
				// get forum list 
				
				self::$frmlist = parent::$_SM_model->SamGetFrmList();
				
				// get admin links
				
				self::$Admin_Links =  parent::$_SM_model->SamAdminLinks();
				
				 self::$QUID        = strtoupper(md5(UID.UNM)); 
				
				
						   // insert online
		    if(self::$FID == 0 ) $main = 1 ;else $main = 0;
			
		    mjorFunc::SamMatchOnline($main,self::$FID,0);
			//ALTER TABLE  `afo_users` ADD  `u_home_page` MEDIUMTEXT NOT NULL ;

		 
		}
		static function index()
		{
		  global $mjorFunc ;
		  //$mjorFunc->Samll();
		  parent::SamFilDeFunc('cons') ;

		}
        static function samfrm($forum,$topic=null)
        {
            
            self::$argemntLeft  = $forum;
            
            self::$argemntRight = $topic;
            
            parent::SamFilDeFunc('forum');
            
            
            
            
        }
		/*
		  pdf
		*/
	    static function sampdf()
        {
            
						   
		                 self::$ModeSAM        = 'notice';
		 
		                 self::$VwSAM          = 'notice' ;
			 
			             self::$DataSAM        = array(
			 
                         'Noti' => 'خاصيةتحويل المواضيع إلى ملف PDF  تحت الصيانة حاليا.',
				
				         'Sc'   => ''
			 
		 
		                 ); 
            
            
            
        }
		/*
		 samsol topic 
		*/
	    static function samtopic($topic,$autr=null)
		{
            self::$argemntLeft  = $topic;
            
            self::$argemntRight = $autr;
            
            parent::SamFilDeFunc('tpc');
		
		
		}
		/*
		   active topic
		*/
	    static function Samactiv()
		{
	     self::$ModeSAM        = 'active';
		 
	     self::$VwSAM          = 'act' ;
        
		 parent::SamFilDeFunc('act');
		  
		   

		
		}
		/*
		  desplay members
		*/
	    static function samusers($wat,$decr)
		{ 
 
	      self::$argemntRight = htmlspecialchars($wat);
		  
	      self::$argemntLeft  = htmlspecialchars($decr);
		  
		  
          parent::SamFilDeFunc('memb');
		  
 
		}
	    static function Regester($polce=false)
		{    
		     self::$argemntLeft = htmlspecialchars($polce);
			 
		     return  parent::SamFilDeFunc('reges') ;

		}
		static function Samlogin()
		{
		     parent::SamFilDeFunc('lgin') ;

		}
		/*
		
		  function log out
		*/
		
	    function logout($Qid)
		{    
		
		    self::$argemntLeft  = $Qid;
            
 
		  return parent::SamFilDeFunc('logout') ;

		}
		/*
		   function editor countent
		
		*/
		static function Samedit($mode,$wate)
		{
		
            self::$argemntLeft  = $mode;
            
            self::$argemntRight = $wate;
			
		  return parent::SamFilDeFunc('edtior') ;
		
		
		}
      /*
	  
	     samsol insert topic.........
	  
	  */
	    static function saminsert()
		{ 
           return parent::SamFilDeFunc('insr');
 
		}
		/*
		  generateur
		*/
		 static function generateur()
		{
		     self::$ModeSAM        = 'gene';
		 
		     self::$VwSAM          = 'gn' ; 
 
		
		}
		/*
		   archiv
		*/
		static function Samarchiv()
		{
		
		     self::$ModeSAM        = 'notice';
		 
		     self::$VwSAM          = 'notice' ;
			 
			 self::$DataSAM        = array(
			 
             'Noti' => 'archiv_no_active',
				
			 'Sc'   => ''
 
		    );
		
		     exit(); 
		}
		/*
		   function delet rep
		*/
		static function SamDeletRep($id,$QID)
		{
             if(ULV > 0 && htmlspecialchars($QID) == self::$QUID ) 
			 
			 return parent::$_SM_model->SamSeletrep($id);
			 
			 else hl();
		
		}
        /*
		   function edit info
		
		*/
		final static function Sameditinfo($tid)
		{
		    if(ULV < 2) hl();
		 self::$Tid             = str_replace('topic','',$tid) ; //
		 
         parent::SamModel('tpcdeitInfo'); 
		 
		    if(isset($_POST['topicinfo_id']) && isset($_SESSION['Inf']) && $_POST['naver'] ==  $_SESSION['Inf'] )
		    {
			 unset($_SESSION['Inf']);
			  
			 $msq         =  parent::$_SM_model->SamChangeInfo(self::$Tid);
			  
		         self::$ModeSAM        = 'notice';
		 
		         self::$VwSAM          = 'notice' ;
			 
			     self::$DataSAM        = array(
			 
                 'Noti' => $msq[0],
				
				 'Sc'   => GURLCLS.'samfrm/forum'.$msq[1].''
			 
		 
		            );
			  
		       
		    }
		    elseif(! isset($_POST['topicinfo_id'] ))
			{
		     
		     unset($_SESSION['Inf']);
			 
			 $_SESSION['Inf']      = md5(time());
			 
		     $TopicInfo            = parent::$_SM_model->SamGetTopicUnfo(self::$Tid);
		 
		     self::$FID          = $TopicInfo[1] ;
		 
		     self::$CID            = $TopicInfo[0] ;
		 
             self::$ModeSAM        = 'topicinfo';
		 
		     self::$VwSAM          = 'tpcdeitInfo' ;
		 
			 self::$DataSAM        = array(
			 
		         'TPCS'     => $TopicInfo,
			 
                 'Tid'      => self::$Tid,
				 
				 'Session'  => $_SESSION['Inf']
		        );
		    }else
			 
			  echo 'no';
		
		exit();
		}
		/*
		    function to desplay service of modilation 
		
		*/
		function sammodi()
		{
		   if(ULV < 2) hl();
		   parent::SamFilDeFunc('modi');
		
		
		}
		/*
		  function SamUsr 
		   -- desplay all information of member
		*/
		function samusr($Samuid)
		{
		
           self::$Samuid  = htmlspecialchars($Samuid);
		   
		   return parent::SamFilDeFunc('usr');
		
		}
		/*
		   user plack
		*/
		function samplack()
		{
		    if(UID < 2) hl();
		  return parent::SamFilDeFunc('plack');
		
		}
		/*
		    uploades plackes
		*/
		function samfiles($type)
		{
		   if(ULV < 2) hl();
		   self::$argemntLeft = htmlspecialchars($type);
		   // print_r($_FILES);
		    return parent::SamFilDeFunc('file');
		}
		function samember($type)
		{
		   if(UID > 0)
		    {
		      self::$argemntLeft = htmlspecialchars($type);
			  
		      return parent::SamFilDeFunc('pro');
			  
		    }else hl();
		
		}
	     function samfiles2()
		{    if(UID > 0)
		   print_r($_FILES);
		   
		   $f = 'SamSkins/medales/';
		   $tp = $_FILES['upl2']['tmp_name'];
		   $fn = $_FILES['upl2']['name'];
		   
		    
		   move_uploaded_file($tp,$f.$fn);
		     
		}
	    /*
		    function rederect in url
		*/
	    function samurl($url)
		{
		      self::$argemntLeft = htmlspecialchars($url);
			  
		      return parent::SamFilDeFunc('url');
		  
		     
		}
		function __destruct()
		{
          
		  
		  eval(parent::$_SM_Func);
		   
		  self::$SataSam         = array(
	          
	          
	         
	     );
		 
		   //$stl = isset($_SESSION['STL']) ? $_SESSION['STL'] : 17;  
		   $stl = mjorFunc::SamgetStyle();  
			 
		   self::$DltStlSAM      = self::$ModeSAM == 'editor'  ? '17' :  $stl;
		   
		   $IDisAdmin = mjorFunc::SamIsAdmin(self::$FID);
		   

			
		        self::$SataSam = array(
				
				    // style
					
					'SAMSTL'   => self::$DltStlSAM,
					
					// mod page
					
					'MODE'     => self::$ModeSAM ,
                    
                    // frm id
                    
                    'FRMID'   => self::$FID,
                    
                    //cat id
                    
                    'CATID'  => self::$CID,
				
				    'Descrip'    => self::$DESC,
				 
				    'KeyWord'    => self::$KEY ,
					
					'FRMLST'    => self::$frmlist,
					
					'ISADMIN'   => $IDisAdmin,
					
					// links admin 
					'LINKS'     => self::$Admin_Links,
					
					'CIP'       => mjorFunc::SamGetIpName(),
					
					'CHBG'     => self::$Modifucation 
				
				
				
				         );
						
             if(file_exists(ROOT.SEP.'lok.php') && UID != 1)
			 {
			 
			 
			     include(ROOT.SEP.'lok.php');
			     die();
			  }
	        //ob_start() ;
				 
            //if( extension_loaded('zlib')) {  ob_start('ob_gzhandler'); }
		   @header('Content-Type: text/html; charset=utf8');
		   
           parent::SamSee(self::$CodagSAM,self::$SataSam);
		   
		   if(self::$VwSAM != "")
        
           parent::SamSee(self::$VwSAM,self::$DataSAM);
		   
           parent::SamSee(self::$FnCodagSAM,array('MODE'     => self::$ModeSAM ));
		   
	    //  if( extension_loaded('zlib')) {  ob_end_flush(); }

		
		
		}
	
 
	
	}

 