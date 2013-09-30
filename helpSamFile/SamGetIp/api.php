<?php
require_once('./browser.php'); 
$browser = new Browser();
$web= $browser->getBrowser() ;
require_once('geoip.php');
$gi          = geoip_open('geoip.dat',GEOIP_STANDARD);
$code     = geoip_country_code_by_addr($gi, $_SERVER['REMOTE_ADDR']);
$name    = geoip_country_name_by_addr($gi, $_SERVER['REMOTE_ADDR']);
geoip_close($gi);

$country = strtolower($code);
if ($country =="") $country ="fam";
if ($name =="") $name="Unknown";
$ip=  $_SERVER['REMOTE_ADDR'];
$nm=  $name ;
$ct=  $country . '.png';
$wb=  $web . '.png';
$os = $browser->getOs() ;
if ($os == "unknown") {$os = $browser->getPlatform() ;}
?>
<?php

$arr = array( 'ip'=> $ip, 'name' =>$nm , 'country' =>$ct , 'web' =>$wb ,'browser' => array('getBrowser' => $browser->getBrowser() , 'getVersion' =>$browser->getVersion() , 'getOs' => $os ) );
echo json_encode($arr); 
exit;
?>
