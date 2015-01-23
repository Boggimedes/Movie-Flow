<?php
// :colorscheme elflord
// Henri Aanstoot
// Onkyo Reciever Web Interface 2009
// Version 0.6b - 23 Oct 2009
// EDIT THIS
$receiveripnumber="192.168.1.6";
$receiverlistenport="60128";
// maximum to set volume (0-100) 
// !! some have 64 max????
$volumemax=60;
// (i had to enable this port by going onto the menu's on my Onkyo
// ---- NO EDITING BELOW THIS LINE

// test write to file
//$fp=fopen("test.txt", "wb");
// write to Receiver 
$fp = pfsockopen($receiveripnumber, $receiverlistenport, $errno, $errstr, 30);
//get command from post form
$command="!1" . $_POST['vol'];
//get volume if cmd is numeric
// if(is_numeric($command)) 
 // {
// if ($command > $volumemax) { $command=$volumemax; }
// echo $command;
  // $vol=str_pad(dechex($command), 2, '0', STR_PAD_LEFT);
  // $command="!1MVL$vol";
 // }
// Calculate header and datapacket lengths
$length=strlen($command); 
$length=$length+1;
$total=$length+16;
$code=chr($length);
// total eiscp packet to send 
$line="ISCP\x00\x00\x00\x10\x00\x00\x00$code\x01\x00\x00\x00".$command."\x0D";
#fputs($fp,$line,$total);
// write
fwrite($fp, $line);
// rest status part
   // while (!feof($fp)) {
       // echo fgets($fp, 128);
   // } 

fclose($fp);



?>
