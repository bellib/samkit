<?php
/*********************************************** 
* - Samkit 0.0.1                               *
* - Programed by Bellia Habib * SAMSOL *       *
* - aug 2013                                   *
* - Is not free solft                          *
***********************************************/
    if(! defined('SAMSOL'))  die ('Can not script ! ');
	
	class Samimg extends SAMSOL_MODEL
	{
	
       
		static function index()
		{
 
		}
		static function file($id)
		{
		  $id  = htmlspecialchars($id);
		  
          $Url =  mjorFunc::SamGetInfoimage($id);
		  
		    if($Url != FALSE)
			{
			    // get url file
			    $Sam_File_Url = ROOT . "/SamSkins/medales/".$id.".html";
				
				    if(file_exists($Sam_File_Url))
					{
					
					     // file counte
					
					      $Sam_FileCount = file_get_contents($Sam_File_Url);
						  
						  // decoud file
						  $Sam_Decode_File = base64_decode($Sam_FileCount);
						  
						  @header('Content-Type: '.$Url);
		 
	                      @header('Cache-control: max-age=31536000');
		 
	                      @header('Last-Modified: ' . gmdate('D, d M Y H:i:s', time() + 60*60*24*3) . ' GMT');
						  
						  echo  $Sam_Decode_File;
						  
						   unset($Sam_Decode_File,$Sam_FileCount);
					
					 
					
					}else die('<h5>SAMKIT ERROR :</h5> no image !!.');
				 
			}else die('<h5>SAMKIT ERROR :</h5> no image1 !!.');

		}
        function __destruct()
        {
		 $cache = "Expires: ".gmdate("D, d M Y H:i:s", time() + 60*60*24*3)." GMT";
		 
         @header( $cache);
		 
        }















    }