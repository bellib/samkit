<?php
/*********************************************** 
* - Samkit 0.0.1                               *
* - Programed by Bellia Habib * SAMSOL *       *
* - feb 2013                                   *
* - Is not free solft                          *
***********************************************/

    class expget
    {
         private static $file ;
		 
         private static $url_file ;
		 
         private static $get_cont ;
		 
	     private static $cache;
		 
	     private static $JsFolder;
		 
	     private static $CsFolder;
	     
		 private static $ImgFolder;
		 
		 
	    function __construct()
	    {
		  
         self::$file  = false;
		 
         self::$JsFolder  = 'jscript';
		 
         self::$CsFolder  = 'stl';
		 
         self::$ImgFolder  = 'img';
		 
         self::$cache = "Expires: ".gmdate("D, d M Y H:i:s", time() + 60*60*24*3)." GMT";
		 
	    }
		static function Index()
		{
		  
		
		}
		 
	    static function desplay($file)
		{
		
	     self::$file = @ htmlspecialchars(strip_tags($file)) ;   
         
		 $url_file   =  TEMB.'/'.self::$JsFolder.'/'.self::$file.'_js.js';  
         
		 if(! file_exists($url_file))
        
		 exit("Page ".self::$file." not found !");
		 
         $get_cont = @file_get_contents($url_file);
		 
		 //@header('Content-Type: text/html; charset=utf8');
		 
         @header('Content-Type: text/javascript');
		 
         @header('Cache-control: max-age=31536000');
		 
	     @header('Last-Modified: ' . gmdate('D, d M Y H:i:s', time() + 60*60*24*3) . ' GMT');
		 
         echo @$get_cont;
		 
	     unset($get_cont);
 
		}
        static function css($file=false,$trans=false)
        {
         self::$file = @ htmlspecialchars(strip_tags($file));
	 
         $url_file = TEMB.'/'.self::$CsFolder.'/ar_'.self::$file.'.php'; 
	 
	     if(! file_exists($url_file))
	 
         exit("File ".$file." not found !");
	     
		 $opc =  (int) $trans == 0 ? 95 : $trans ;
		 
	     @header('Content-Type: text/css');
	 
         @header('Cache-control: max-age=31536000');
	 
	     @header('Last-Modified: ' . gmdate('D, d M Y H:i:s', time() + 60*60*24*3) . ' GMT');
		 
		 require($url_file);
	 
        } 
		static function sora($folder=false,$file=false)
        {
		
		 $folder     = htmlspecialchars(strip_tags($folder));
		 
		 $Dossier    = explode('z',$folder);

		    if(count($Dossier) == 2)
		    {
			 $FirstFolder  = $Dossier[0];
			 
			 $SecondFolder = $Dossier[1];
			 
			 $FolderImg    = $FirstFolder.'/'.$SecondFolder ; 
			
			}else $FolderImg = $folder;

         $file     = htmlspecialchars(strip_tags($file));
		 
		 $fileSamArr    = str_split($file);

         $GetImgTypeSAm = htmlspecialchars(strip_tags(trim($fileSamArr[0])));
		 
		    if($GetImgTypeSAm == 'i')
			
			 $ImgTypeSAm = 'png';
			 
			elseif($GetImgTypeSAm == 'g')
			
			 $ImgTypeSAm = 'jpg';
			 
			elseif($GetImgTypeSAm == 'k')
			
			 $ImgTypeSAm = 'gif';
			 
			else $ImgTypeSAm = 'bmp';
		 
		 
         self::$file = @substr($file, 1);     
		 
         $url_file = TEMB.'/'.self::$ImgFolder.'/'.$FolderImg.'/'.self::$file.'.'.$ImgTypeSAm; 

         if(! file_exists($url_file))
		 
         $url_file =  TEMB.'/'.self::$ImgFolder.'/noImg.png';
		 
         $get_cont = @file_get_contents($url_file);
		 
         @header('Content-Type: image/'.$ImgTypeSAm.'');
		 
	     @header('Cache-control: max-age=31536000');
		 
	     @header('Last-Modified: ' . gmdate('D, d M Y H:i:s', time() + 60*60*24*3) . ' GMT');
		 
         echo $get_cont;
		 
		 unset($get_cont,$url_file);
		 
        }
        function __destruct()
        {
		
         @header(self::$cache);
		 
        }

	 
	}
 