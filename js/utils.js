// ======================= DOM Utility Functions from PastryKit =============================== //

// Sure, we could use jQuery or XUI for these, 
// but these are concise and will work with plain vanilla JS

Element.prototype.hasClassName = function (a) {
    return new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)").test(this.className);
};

Element.prototype.addClassName = function (a) {
    if (!this.hasClassName(a)) {
        this.className = [this.className, a].join(" ");
    }
};

Element.prototype.removeClassName = function (b) {
    if (this.hasClassName(b)) {
        var a = this.className;
        this.className = a.replace(new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)", "g"), " ");
    }
};

Element.prototype.toggleClassName = function (a) {
  this[this.hasClassName(a) ? "removeClassName" : "addClassName"](a);
};


var translock=true;
scrollactive();
function scrollactive(areaID){
var scrollWrap = document;
var scrollVol = document.getElementById(areaID);
    scrollWrap.addEventListener("mousewheel", MouseWheelHandler, false);
try{   scrollVol.removeEventListener("mousewheel", VolumeHandler, false);}
catch(err){}
}

function volactive(areaID){
var scrollWrap = document;
var scrollVol = document.getElementById(areaID);
   scrollWrap.removeEventListener("mousewheel", MouseWheelHandler, false);
    scrollVol.addEventListener("mousewheel", VolumeHandler, false);
}

function VolumeHandler(e) {
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
if(delta>0){$.post( "204.php",{vol: "MVLUP"});}
else{$.post( "204.php",{vol: "MVLDOWN"});}
	
}
function MouseWheelHandler(e) {
	var carousel = document.getElementById('carousel');
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	if(filtered == 0){
		rotation += theta * delta * mrows;
		if(translock){
		carousel.style[ transformProp ] = 'translateZ(-' + radius + 'px) ' + rotateXY + '(' + rotation + 'deg)';
		console.log("transform");
		translock=false;
		setTimeout(function(){
		translock=true; 
		 carousel.style[ transformProp ] = 'translateZ(-' + radius + 'px) ' + rotateXY + '(' + rotation + 'deg)';
		}, 200);
		}
		else{console.log("locked");}
	}
    return false;
}

 $(function() {      
      $("html").swipe( {allowPageScroll:"vertical",
        swipeStatus:function(event, phase, direction, distance) {
		var delta = 1;
		if(direction=="left"){delta=-1;}
      if(filtered == 0){
	  if(phase=="move"){
      rotation += theta * delta * 0.1;
		carousel.style[ transformProp ] = 'translateZ(-' + radius + 'px) ' + rotateXY + '(' + rotation + 'deg)';
	  }
	  else{
      rotation += theta * delta * 0.01 * distance;
		carousel.style[ transformProp ] = 'translateZ(-' + radius + 'px) ' + rotateXY + '(' + rotation + 'deg)';
			}
		}
        },
         threshold:75
      });
    });
$('html').on('mouseup', function() {
    $('figure img').off('mousemove');
});
$('figure img').on('mouseup', function() {
    $('figure img').off('mousemove');
});
$("span").slideUp();