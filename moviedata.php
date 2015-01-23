<?php 
define("HOST", "localhost");     // The host you want to connect to.
define("USER", "localadmin");    // The database username. 
define("PASSWORD", "password");    // The database password. 
define("DATABASE", "server");    // The database name.
 

$mysqli = new mysqli(HOST, USER, PASSWORD, DATABASE);
$link = mysqli_connect(HOST, USER, PASSWORD, DATABASE);

$results = mysqli_query($link,$sql);
$i=0;
while($row = mysqli_fetch_array($results)){
$addgen=" notfound";
$SortTitle = strtolower($row['SortTitle']);
if($row["Path"] == null){
if(
file_exists("../../../home/localadmin/Archive/My Movies/" . $SortTitle . "/" . $SortTitle . ".avi") OR
file_exists("../../../home/localadmin/Archive/My Movies/" . $SortTitle . "/" . $SortTitle . ".iso") OR
file_exists("../../../home/localadmin/Archive/My Movies/" . $SortTitle . "/" . $SortTitle . ".mkv") OR
file_exists("../../../home/localadmin/Archive/My Movies/" . $SortTitle . "/" . $SortTitle . ".ts") OR
file_exists("../../../home/localadmin/Archive/My Movies/" . $SortTitle . "/" . $SortTitle . ".mp4") OR
file_exists("../../../home/localadmin/Archive/My Movies/" . $SortTitle . "/" . $SortTitle . ".mpg") OR
file_exists("../../../home/localadmin/Archive/My Movies/" . $SortTitle . "/" . $SortTitle . ".mpeg") OR
$_GET['type'] == 'new'
){$addgen = "";}
}
else{$addgen = "";}


$Movies[] = array("title" => $row['Title'],
					sortTitle => $SortTitle,
					"year" => $row['Year'],
					"rating" => $row['Rating'],
					"runtime" => $row['Runtime'],
					"description" => htmlentities($row['Description']),
					"genres" => split(",",str_replace(" ","",$row['Genres'])),
					"path" => $row['Path']);
$i=$i+1;
}
$y=$i;
$y = $mrows-($i % $mrows);
if($y>0 AND $y != $mrows){
for($x=0;$x<$y;$x++){
$Movies[] = array("title" => "",
					sortTitle => "",
					"year" => "",
					"rating" => "",
					"runtime" => "",
					"description" => "",
					"genres" => "",
					"path" => "");
$i=$i+1;
}}

$Movies = json_encode($Movies);
echo $Movies;
 
?>