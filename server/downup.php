<?php
header('Access-Control-Allow-Origin: *');
//include "twitpic.class.php";
// maximum execution time in seconds
set_time_limit (24 * 60 * 60);

// folder to save downloaded files to. must end with slash
$destination_folder = 'mydownloads/';
$types = array(
        1 => 'gif',
        2 => 'jpg',
        3 => 'png',
        4 => 'swf',
        5 => 'psd',
        6 => 'bmp',
        7 => 'TIFF(intel byte order)',
        8 => 'TIFF(motorola byte order)',
        9 => 'jpc',
        10 => 'jp2',
        11 => 'jpx',
        12 => 'jb2',
        13 => 'swc',
        14 => 'iff',
        15 => 'wbmp',
        16 => 'xbm'
    );
$url = $_POST['url'];
$size = getimagesize($url);
$newfname = $destination_folder . md5(basename($url)) . "." . $types[$size[2]];

$file = fopen ($url, "rb");
if ($file) {
  $newf = fopen ($newfname, "wb");

  if ($newf){
	  while(!feof($file)) {
	    fwrite($newf, fread($file, 1024 * 8 ), 1024 * 8 );
	  }
        $postfields = array(); 
        $postfields['username'] = $_POST['username']; 
        $postfields['password'] = $_POST['password'];
        $postfields['message'] = $_POST['mensaje'];
        $postfields['media'] = "@$newfname"; 
        $twitter_url = 'http://twitpic.com/api/uploadAndPost'; 
        $curl = curl_init(); 
        curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 2); 
        curl_setopt($curl, CURLOPT_HEADER, false); 
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); 
        curl_setopt($curl, CURLOPT_BINARYTRANSFER, 1); 
        curl_setopt($curl, CURLOPT_URL, $twitter_url); 
        curl_setopt($curl, CURLOPT_POST, 3); 
        curl_setopt($curl, CURLOPT_POSTFIELDS, $postfields); 
        $result = curl_exec($curl); 
        curl_close($curl); 
        $login_xml = new SimpleXMLElement($result); 
        if (isset($login_xml->error)) { 
        print_r($login_xml); 
        } else { 
            echo "ok"; 
        }  
		chmod($newfname, 0755);  // octal; correct value of mode
		unlink($newfname);
	}
}

if ($file) {
  fclose($file);
}

if ($newf) {
  fclose($newf);
}

?>