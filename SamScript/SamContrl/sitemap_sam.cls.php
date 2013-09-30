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
	class sitemap_sam extends SAMSOL_CONTROLLER
	{
	
	    static $sitmap ;
	    static $connect ;
		
		function __construct()
		{
		
         self::$connect = @mysql_connect(HOST,USRNM,PASS);
        
            if( self::$connect != 0  )
            {
                if( mysql_select_db(DBNM,self::$connect))
				{
				
				 @mysql_query("SET NAMES 'utf8'");
				
				 return true;
				 
				}
	    
                else return false;
	    
            }
		
		
		
		
		
		
		}
 
	    function  index()
		{
		
 
			 
 		        @header('Content-Type: text/xml');
				
               self::$sitmap  ='<?xml version="1.0" encoding="utf-8"?>'. "\r\n";
               self::$sitmap .='<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'."\r\n";
               self::$sitmap .="<url>\r\n";
               self::$sitmap .= "<changefreq>weekly</changefreq>\r\n";
               self::$sitmap .="<priority>1.0</priority>\r\n";
               self::$sitmap .="<loc>http://netalarabi.com/sam/</loc>\r\n";
               self::$sitmap .="</url>\r\n";
               $cat_query = mysql_query("SELECT c_id FROM ".TP."cat ORDER BY c_id DESC");
			   
			   if(mysql_num_rows($cat_query ) > 0 )
			   
                while($cat_info = mysql_fetch_array($cat_query))
                {
                  self::$sitmap .= "\t<url>\r\n";
                  self::$sitmap .=  "\t\t<changefreq>weekly</changefreq>\r\n";
                  self::$sitmap .=  "\t\t<priority>0.5</priority>\r\n";
                  self::$sitmap .=  "\t\t<loc>http://netalarabi.com/sam/samcat/catigori".$cat_info['c_id']."</loc>\r\n";
                  self::$sitmap .=  "\t</url>\r\n";
                }

                $thread_query = mysql_query("SELECT f_id,f_name,f_lp_date FROM ".TP."forum WHERE `f_level` = 0 ORDER BY f_id DESC");
				
				if(mysql_num_rows($thread_query ) > 0 )
				
                while($thread_info = mysql_fetch_array($thread_query))
                {
                  self::$sitmap .=  "\t<url>\r\n";
                  self::$sitmap .=  "\t\t<changefreq>always</changefreq>\r\n";
                  self::$sitmap .=  "\t\t<priority>0.8</priority>\r\n";
                  self::$sitmap .=   "\t\t<lastmod>".date("Y-m-d\TH:m:s",$thread_info['f_lp_date'])."+00:00</lastmod>\r\n";
                  self::$sitmap .=  "\t\t<loc>http://netalarabi.com/sam/samfrm/forum".$thread_info['f_id']."</loc>\r\n";
                  self::$sitmap .=  "\t</url>\r\n";      
                }
                $Topic_query = mysql_query("SELECT topic_id,t_date  FROM ".TP."topics WHERE `t_delete` = 0 ORDER BY topic_id DESC");
				
				if(mysql_num_rows($Topic_query ) > 0 )
                
               while($t_info = mysql_fetch_array($Topic_query))
                {
                  self::$sitmap .=  "\t<url>\r\n";
                  self::$sitmap .=  "\t\t<changefreq>always</changefreq>\r\n";
                  self::$sitmap .=  "\t\t<priority>1.0</priority>\r\n";
                  self::$sitmap .=   "\t\t<lastmod>".date("Y-m-d\TH:m:s",$t_info['t_date'])."+00:00</lastmod>\r\n";
                  self::$sitmap .=  "\t\t<loc>http://netalarabi.com/sam/samtopic/topic".$t_info['topic_id']."</loc>\r\n";
                  self::$sitmap .=  "\t</url>\r\n";      
                }

                  self::$sitmap .="</urlset>";  
			
		   
			  print(self::$sitmap);
 
		
		}
		function __destruct()
		{
		
		
		
		   
	/*	  header('Content-Type: text/xml');
		   echo '<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->

<url>
  <loc>http://netalarabi.com/</loc>
  <lastmod>2013-08-18T22:22:18+00:00</lastmod>
</url>
<url>
  <loc>http://netalarabi.com/?samdef/samdernier</loc>
  <lastmod>2013-08-18T22:22:18+00:00</lastmod>
</url>
</urlset>
		   ';*/
		
		
		
		
		}
	
	
	
	} 
	
	
	
	