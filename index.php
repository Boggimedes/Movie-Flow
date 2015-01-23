<!DOCTYPE html>
<html ng-app="myApp" ng-controller="MovieFlowCtrl">   
<head lang="en">
<meta charset="utf-8" />
<meta name="viewport" content="initial-scale=1.0, user-scalable=0" />
<script type="text/Javascript" src="/js/jquery.min.js"></script>
<script type="text/Javascript" src="/js/jquery-ui.min.js"></script>
<script type="text/Javascript" src="/js/jquery.contextmenu.js"></script>
<script type="text/Javascript" src="/js/jquery.swipe.js"></script>
<link rel="stylesheet" href="/css/jquery.contextmenu.css"/>
<link rel="stylesheet" href="/css/jquery-ui.css" />
<link rel="stylesheet" href="/css/app.css" />
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.3/angular.min.js"></script>
<script type="text/Javascript" src="/js/mousewheel.js"></script>
<script type="text/Javascript" src="/js/hamster.js"></script>
<script type="text/javascript" src="app.js"></script>
</head>
<body  id="cWrap" style="background-color:black;height:100%;width:100%;overflow:hidden;">
<section id="container" class="container panels-backface-invisible" >
<div movies="" id="carousel" ng-style="cStyle">
<figure ng-repeat="movie in movies.data | filter:search | filterMultiple:{genres:selectedDept}" class="folder figure" style="transform: {{carousel.rotateFn}}({{carousel.theta*$index}}deg) translateZ({{carousel.radius}}px) translate(0px, {{carousel.rows($index)}}px);">
<img src="/covers/{{movie.sortTitle | lowercase}}.jpg" title="{{movie.title}}" />
</figure>
</div>
</section>
<div class="searchbox"><label>Wildcard Title Search</label>
<input type="text" style="" ng-model="search.title">
</div>
<section class="genres">
<ol class="parent" ng-model="selectedDept"  ui-selectable doc-array="genrelist" id="selectable" >
<li class="ui-widget-content" ng-repeat="genre in genrelist" ng-click="dosomething($index)">{{genre}}</li>
</ol>
<button ng-click="clearSelection()">Clear Genres</button>
</section>

<img id="volume" onmouseover="volactive('volume');" onmouseout="scrollactive('volume');" src="updown.png" usemap="#imgmap201519145956"/>
<map id="imgmap201519145956" name="imgmap201519145956">
<area shape="poly" id="vup" coords="34,0,0,35,16,34,16,58,52,58,52,35,67,35,65,33,65,33" onmouseover="volactive('vup');" onmouseout="scrollactive('vup');" style="cursor:pointer;" href="#" target="" onclick="$.post( 'tcp.php',{vol: 'MVLUP'});"/>
<area shape="poly" id="vdown" coords="82,104,48,68,64,69,64,46,99,46,99,68,115,69" onmouseover="volactive('vdown');" onmouseout="scrollactive('vdown');" style="cursor:pointer;" href="#" target=""  onclick="$.post( 'tcp.php',{vol: 'MVLDOWN'});"/></map>
<div id="mute" onclick='if(this.innerHTML=="Mute"){$.post( "tcp.php",{vol: "AMT01"});this.innerHTML="UnMute";}else{$.post( "tcp.php",{vol: "AMT00"});this.innerHTML="Mute";}'>Mute</div>
<img id="playpause" src="play.png" onclick="$.post( 'http://htpc:13579/command.html',{'wm_command': '889', 'submit': 'Go!'});"/>
<img id="stop" src="stop.png" onclick="$.post( 'http://htpc:13579/command.html',{'wm_command': '890', 'submit': 'Go!'});"/>
<img id="fullscreen" src="fullscreen.png" onclick="$.post( 'http://htpc:13579/command.html',{'wm_command': '830', 'submit': 'Go!'});"/>
<img id="subtitle" src="subtitle.png" onclick="$.post( 'http://htpc:13579/command.html',{'wm_command': '956', 'submit': 'Go!'});"/>

<script src="/js/utils.js"></script>

<script>

    </script>
  

</body>
</html>