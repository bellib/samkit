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
 
 
	  function SamFiJs($txt)
	  {
	  
	     $txt = addslashes($txt);
		 
	     $txt = str_ireplace("","--",$txt);
		 
	     $txt = str_ireplace("meta","--",$txt);
		 
	     $txt = str_ireplace("'","*",$txt);
		 
	     $txt = str_ireplace("javascipt","--",$txt);
		 
	     $txt = str_ireplace("content","--",$txt);
		 
	     $txt = str_ireplace("position","p0s!tion",$txt);
		 
	     $txt = str_ireplace("http-equiv","--",$txt);
		 
         $txt = str_ireplace("script","<b>sc</b>cr<b>ipt</b>",$txt);
		 
	     $txt = str_ireplace("create","--",$txt);
	     
		 $txt = str_ireplace("mysql","<b>m</b>ys<b>ql</b>",$txt);
		 
		 $txt = str_ireplace("group","--",$txt);
	     
		 $txt = str_ireplace("limit","--",$txt);
	     
		 $txt = str_ireplace("select","s<b>el</b>ect",$txt);
	     
		 $txt = str_ireplace("update","--",$txt);
	     
		 $txt = str_ireplace("insert","--",$txt);
	     
		 $txt = str_ireplace("delete","--",$txt);
	     
		 $txt = str_ireplace("join","--",$txt);
	     
		 $txt = str_ireplace("from","--",$txt);
	     
		 $txt = str_ireplace("where","--",$txt);
	     
		 $txt = str_ireplace("iframe","--",$txt);
	     
		 $txt = str_ireplace("like","--",$txt);
	     
		 $txt = str_ireplace("input","--",$txt);
	     
		 $txt = str_ireplace("cookie","--",$txt);
	     
		 $txt = str_ireplace("into","--",$txt);
	
	     $txt = str_ireplace("document","do<b>c</b>ument",$txt);
	     
		 $txt = str_ireplace("\n","<br />",$txt);
	     
		 $txt = str_ireplace("\t"," ",$txt);
	     
		 $txt = str_ireplace("\r"," ",$txt);
	     
		 $txt = str_ireplace("[]", "", $txt);
	     
		 $txt = str_ireplace("<xxx","",$txt);
		 $txt = str_ireplace("#","",$txt);
	     
		 $txt = str_ireplace("BACKGROUND:#ffffff;BACKGROUND-IMAGE:;PADDING-LEFT:10px;PADDING-RIGHT:10px;PADDING-TOP:15px;PADDING-BOTTOM:15px;","",$txt);
         
		 return $txt;  
	  
    }
	/*
	   function clean get 
	*/
	function SamCleanUri($uri)
	{
	    
		// all value to hach
		$Sam_ValTo_Hack = array('?','.php','index');
	   
 	        foreach($Sam_ValTo_Hack as $vla)
			
		        if(strpos($uri,$vla) >- 1 )
			    {
			         die('<h1>Error . <h1>');
			  
			   }
	
	
	    return $uri;
	}
	/*
	  function return var js
	*/
	function vJs($var,$val)
	{
 
	  return   'var '.$var.' = "'.trim($val) .'" ; ' . "\n"   ;
	}
	/*
	   function add slash
	*/
	function SamAddSslash($str)
	{
	
	      return addcslashes($str,"\\\'\"&\n\r<>"); 
	
	
	}
	/*
	   function to change lrvel
	 */
	function  changeLvl($num)
    {
	     // member LVl
	    $SamMbrLvl = (int)$num ;
	 
	        if( $SamMbrLvl < 1)  die('SamKit Error : there is problem in levl');
			
		switch($SamMbrLvl)
		{
		     case 4:
               $SamNewMembeLevle = 5 ;
               break;
		
		     case 3:
               $SamNewMembeLevle = 4 ;
               break;
		
		     case 2:
               $SamNewMembeLevle = 2 ;
               break;
			   
		    case 1:
               $SamNewMembeLevle = 1 ;
               break;
		    
			default: $SamNewMembeLevle = 1 ;
		 
		}
		
		return $SamNewMembeLevle;
	 
	 
    }
     /*
	     function  SamDat return all type date to match in script
	 */
    function SamDat($date,$type)
	{
	  
	     $date = ($date+(60*60*TZ));
		 
	     $time = (time()+(60*60*TZ));

	     $y = gmdate("Y", $date);
		 
	     $m = gmdate("m", $date);
	 $d = gmdate("d", $date);
	 $h = gmdate("H", $date);
	 $i = gmdate("i", $date);
	 $s = gmdate("s", $date);

	 $ny = gmdate("Y", $time);
	$nm = gmdate("m", $time);
	$nd = gmdate("d", $time);
	$nh = gmdate("H", $time);
	$ni = gmdate("i", $time);
	$ns = gmdate("s", $time);
	
    if ($type == 0){
	$date = $y.$m.$d.$h.$i.$s;
	$history = $date;
	}else if ($type == 1){
	$date = $ny;
	$history = $date;
	}else if ($type == 2){
	$date = $m;
	$history = $date;
	}else if ($type == 3){
	$date = $d;
	$history = $date;
	}
	else if ($type == 4){
	if($d == $nd && $m == $nm && $y == $ny){
	$history = $h.$i.$s;
	}
	elseif($d == ($nd-1) && $m == $nm && $y == $ny){
	$history = "y".$h.$i.$s;
    }
	else {
	$history = $m.$d.$h.$i.$s;
	}
    }else if ($type == 5){
	$history = $y.'/'.$m.'/'.$d;
    }
	return $history;
    }
	/*
	function return header location
    
	*/
     function hl()
     {
         header('Location:'.GURLCLS);
        
     }
     /*
        get broser
     */
      function  Broser()
      {
		
		$u_agent = $_SERVER['HTTP_USER_AGENT']; 
     $ub = ''; 
    if(preg_match('/MSIE/i',$u_agent)) 
    { 
        $ub = "IE"; 
    } 
    elseif(preg_match('/Firefox/i',$u_agent)) 
    { 
        $ub = "Firefox"; 
    } 
    elseif(preg_match('/Safari/i',$u_agent)) 
    { 
        $ub = "Safari"; 
    } 
    elseif(preg_match('/Chrome/i',$u_agent)) 
    { 
        $ub = "Chrome"; 
    } 
    elseif(preg_match('/Flock/i',$u_agent)) 
    { 
        $ub = "Flock"; 
    } 
    elseif(preg_match('/Opera/i',$u_agent)) 
    { 
        $ub = "Opera"; 
    }else return false; 
    
    return $ub; 
} 
 
// Function to get the client ip address
function getClientIp() {
$result = null;
$ipSourceList = array(
'HTTP_CLIENT_IP','HTTP_X_FORWARDED_FOR',
'HTTP_X_FORWARDED', 'HTTP_FORWARDED_FOR',
'HTTP_FORWARDED','REMOTE_ADDR'
);
foreach($ipSourceList as $ipSource){
if ( isset($_SERVER[$ipSource]) ){
$result = $_SERVER[$ipSource];
break;
}
}
return $result;
}

/*
  get page prewes
*/
    function PrevwPg()
	{
	
	    $pg = $_SERVER['HTTP_REFERER'];
		
		$_SESSION['previous_page'] = $pg;
	
	
	
	  return $pg;
	}
 		function SamArryCountry()
		{
		  $Contry = array(
		  
          "ET" => "إثيوبيا","AZ" => "إذربيجان","AM" => "أرمينيا","AW" => "أروبا","ER" => "إريتريا","UZ" => "أزبكستان","ES" => "أسبانيا","AU" => "أستراليا",
          "EE" => "إستونيا","SS" => "إسكوتلندا","AF" => "أفغانستان","AL" => "ألبانيا","DE" => "ألمانيا","DD" => "ألمانيا الشرقية","AG" => "أنتيجا وبربودا",
		  "EN" => "إنجلترا","AI" => "أنجيلا","AD" => "أندورا","ID" => "إندونيسيا","AO" => "أنغولا","UY" => "أوروجواي","UG" => "أوغندا","UA" => "أوكرانيا",
		  "IR" => "إيران","IE" => "إيرلندا","ND" => "إيرلندا الشمالية","IS" => "أيسلندا","IT" => "إيطاليا","ZS" => "الإتحاد السوفيتي","AR" => "الأرجنتين","JO" => "الأردن","EC" => "الإكوادور","AE" => "الإمارات","BH" => "البحرين",
          "BR" => "البرازيل","PT" => "البرتغال","BS" => "البهاما","BA" => "البوسنة والهرسك","CZ" => "التشيك",
          "GA" => "الجابون","DZ" => "الجزائر","DK" => "الدانمارك","DO" => "الدومينيكان","AS" => "الساموا الأمريكية","SA" => "السعودية","SV" => "السلفادور",
		  "SN" => "السنغال","SD" => "السودان","SE" => "السويد","SC" => "السيشيل","SO" => "الصومال","CN" => "الصين","IQ" => "العراق","PH" => "الفلبين",
		  "CM" => "الكاميرون","CG" => "الكونجو","KW" => "الكويت","HU" => "المجر","MA" => "المغرب","MX" => "المكسيك","MU" => "الموريشيس","NO" => "النرويج",
		  "AT" => "النمسا","NP" => "النيبال","NE" => "النيجر","IN" => "الهند","HN" => "الهوندوراس","US" => "الولايات المتحدة الأمريكية","JP" => "اليابان",
          "YE" => "اليمن","GR" => "اليونان","AQ" => "انتاركتيكا","PG" => "بابوا نيو جيني","PY" => "باراجواي","PK" => "باكستان","PW" => "بالاو","BB" => "بربادوس",
          "BM" => "برمودا","BN" => "بروناي دار السلام","GB" => "بريطانيا","BE" => "بلجيكا","BG" => "بلغاريا","BZ" => "بليز","BD" => "بنغلادش","PA" => "بنما",
          "BJ" => "بنين","BT" => "بوتان","BW" => "بوتسوانا","PR" => "بورتو ريكو","BF" => "بوركينا فاسو","BI" => "بوروندي","PL" => "بولندا","BO" => "بوليفيا",
		  "PF" => "بولينيسيا الفرنسية","PE" => "بيرو","TJ" => "تاطجكستان","TH" => "تايلاند","TW" => "تايوان","TM" => "تركمنستان","TR" => "تركيا","TT" => "ترينيداد وتوباجو",
          "TD" => "تشاد","CE" => "تشيكوسلوفاكيا","CL" => "تشيلي","TZ" => "تنزانيا","TG" => "توجو","TV" => "توفالو","TO" => "تونجا","TN" => "تونس",
          "TP" => "تيمور الشرقية","GM" => "جامبيا","JM" => "جاميكا","GI" => "جبل طارق","GD" => "جرنادا","AN" => "جزر الأنتيل","RE" => "جزر الرينيون",
		  "SB" => "جزر السولومون","FK" => "جزر الفلكلاند","KM" => "جزر القمر","KY" => "جزر الكايمان","CC" => "جزر الكوكوس","MH" => "جزر المارشال","MV" => "جزر المالديف",
          "GL" => "جزر جرينلاند","FO" => "جزر فاروه","FJ" => "جزر فيجي","CK" => "جزر كوك","BV" => "جزيرة بوفيه","CF" => "جمهورية أفريقيا الوسطى","CD" => "جمهورية الكونجو",
          "ZA" => "جنوب أفريقيا","GT" => "جواتيمالا","GP" => "جوادلوب","GU" => "جوام","GE" => "جورجيا","DJ" => "جيبوتي","GW" => "جينيا بيساو","DM" => "دومينيكا",
          "RW" => "رواندا","RU" => "روسيا","BY" => "روسيا البيضاء","RO" => "رومانيا","ZM" => "زامبيا","ZW" => "زمبابوي","CI" => "ساحل العاج","WS" => "ساموا",
          "SM" => "سان مارينو","LC" => "سانت لوسيا","LK" => "سري لانكا","SK" => "سلوفاكيا","SI" => "سلوفينيا","SG" => "سنغافورة","SZ" => "سوازيلاند",
          "SY" => "سوريا","SR" => "سورينام","CH" => "سويسرا","SL" => "سييرا ليون","SX" => "صربيا","OM" => "عمان","GH" => "غانا","GY" => "غيانا",
"GF" => "غيانا الفرنسية",
"GN" => "غينيا",
"GQ" => "غينيا الإستوائية",
"VU" => "فاناتو",
"FR" => "فرنسا",
"PS" => "فلسطين",
"VE" => "فنزويلا",
"FI" => "فنلندا",
"VN" => "فيتنام",
"CY" => "قبرص",
"QA" => "قطر",
"CV" => "كاب فيردي",
"KZ" => "كازاخستان",
"NC" => "كاليدونيا الجديدة",
"HR" => "كرواتيا",
"KH" => "كمبوديا",
"CA" => "كندا",
"CU" => "كوبا",
"KR" => "كوريا الجنوبية",
"KP" => "كوريا الشمالية",
"CR" => "كوستا ريكا",
"CO" => "كولمبيا",
"KG" => "كيرجيستان",
"KI" => "كيريباتي",
"KE" => "كينيا",
"LV" => "لاتفيا",
"LA" => "لاوس",
"LB" => "لبنان",
"LU" => "لوكسمبرج",
"LY" => "ليبيا",
"LR" => "ليبيريا",
"LT" => "ليثوانيا",
"LS" => "ليسوثو",
"LI" => "ليشتنشتين",
"MQ" => "مارتينيك",
"MO" => "ماكاو",
"MW" => "مالاوي",
"MT" => "مالطة",
"ML" => "مالي",
"MY" => "ماليزيا",
"FM" => "مايكرونيسيا",
"MG" => "مدغشقر",
"EG" => "مصر",
"MK" => "مقدونيا",
"MR" => "موريتانيا",
"MZ" => "موزمبيق",
"MD" => "مولدوفا",
"MC" => "موناكو",
"MS" => "مونسرات",
"MN" => "مونغوليا",
"MM" => "ميانمار",
"NA" => "ناميبيا",
"NR" => "ناورو",
"NU" => "نوي",
"NG" => "نيجيريا",
"NI" => "نيكاراجوا",
"NZ" => "نيو زيلندا",
"HT" => "هايتي",
"NL" => "هولندا",
"HK" => "هونج كونج",
"WA" => "ويلز",
"YU" => "يوغوسلافيا");
		
		
		return $Contry;
		}
		function SamGetUsrCountry($code)
		{
		 $CountryList =  SamArryCountry();
		 
            if (array_key_exists($code, $CountryList))  
		
		     $Country = $CountryList[$code]; 
		
		     else return NULL;
     
	     return $Country;
 
		}
    /*
	    function werifier value array 
	*/
    function array_search_i($str,$array){ 
        foreach($array as $key => $value)
		{ 
		
            if(stristr($str,$value)) return 1; 
        } 
        return false; 
    }
    /*
	   fuction error msg
	*/	
	function SERR()
	{
	
	    
	    @require '../index.html';
	     die();
	
	}
	/*
	   ffunction filter all code html
	*/
	function SamFltrHtml($text,$suff=false)
	{
 
	    return strip_tags($text,$suff);
 
	}
	/**
	    retuen href = BU/url
	***/
	function SamReplaceHref($html,$seo=false)
    {
            preg_match_all("|<a href=\"(.*)\"+>|U",$html,$match);
			
		//	print_r($match[1]);
			$x= array();
			
			foreach($match[1] as $val)
			{
			   $x[] .= str_replace($val,GURLCLS.'samurl/'.$val,implode(' ',$match[1]));
			
			}
			/*print_r($match[1]);
			print_r($x);
			die();*/
			//return $html;
			
		//	for($i=0;$i<count($match[1]);$i++)
			
			$x =  preg_replace("|<a href=\"(.*)\"+>|U",'<a href="'.GURLCLS.'samurl/s--$1--s/'.$seo.' " target= "_blank ">',$html);
			
			 return ff($x) ;
          
    }
	function ff($m)
	{
	
	  preg_match_all("|s--(.*)--s|U",$m,$match);
	  // print_r($match[1]);
	  foreach($match[1] as $val)
	  $m = str_replace($val, base64_encode($val), $m);
	  
	  $m = str_replace('s--',null, $m);
	  $m = str_replace('--s',null, $m);

	return $m;
	}
function SamReplacsseHref($html,$seo=false)
{
 preg_replace("/(<\/?)(\w+)([^>]*>)/e", 
             "'\\1'.strtoupper('\\2').'\\3'", 
             $html_body);
 return  preg_replace(
     array(
       '/(?(?=<a([^href="\']?)>.+<\/a>)
             (?:<a([^href="\']?)>.+<\/a>)
             |
             ([^href="\']?)((?:https?|ftp|bf2|):\/\/[^<> \n\r]+)
         )/iex',
       '/<a([^>]*)target="?[^"\']+"?/i',
       '/<a([^>]+)>/i',
       '/(^|\s)(www.[^<> \n\r]+)/iex',
       '/(([_A-Za-z0-9-]+)(\\.[_A-Za-z0-9-]+)*@([A-Za-z0-9-]+)
       (\\.[A-Za-z0-9-]+)*)/iex'
       ),
     array(
       "stripslashes((strlen('\\2')>0?'\\1<a href=\"\\2\">\\2</a>\\3':'\\0'))",
       '<a\\1',
       '<a \\1 target="_blank">',
       "stripslashes((strlen('\\2')>0?'\\1<a href=\"http://\\2\">\\2</a>\\3':'\\0'))",
       "stripslashes((strlen('\\2')>0?'<a href=\"mailto:\\0\">\\0</a>':'\\0'))"
       ),
       $html
   );
}
function get_url_final($url)
{

 
	 $Url_decod =  $url_f ;
	 
	 return GURLCLS.'samurl/'.$Url_decod;




}



