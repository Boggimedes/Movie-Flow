<?php
$receiveripnumber="192.168.1.6";
$receiverlistenport="60128";
$volumemax=60;
$fp = pfsockopen($receiveripnumber, $receiverlistenport, $errno, $errstr, 30);
$command="!1" . $_POST['vol'];
$length=strlen($command); 
$length=$length+1;
$total=$length+16;
$code=chr($length);
$line="ISCP\x00\x00\x00\x10\x00\x00\x00$code\x01\x00\x00\x00".$command."\x0D";
fwrite($fp, $line);
fclose($fp);
?>
