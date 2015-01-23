var $currentlySelected = null;
var $currentlySelected2 = null;
var selected1 = [];
var selected2 = [];
var Q6="";
var Q1="";
var classNames;
var filtered = 0;

$(function() {
$('#selectable').selectable({
    start: function(event, ui) {
        $currentlySelected = $('#selectable .ui-selected');
    },
    stop: function(event, ui) {
        for (var i = 0; i < selected1.length; i++) {
            if ($.inArray(selected1[i], $currentlySelected) >= 0) {
              $(selected1[i]).removeClass('ui-selected');
            }
        }
        selected1 = [];
    
		Q6 = "";
		$( ".ui-selected", this ).each(function() {
		var index = $( "#selectable li" ).index( this );
		Q6 = Q6 + "" + ( ( index + 1 )  );
		
		});
		if(Q6.length==0){
		$('figure').attr('style', '');
		changeClass('.folder', "block");
		$('#container').addClass('container');
		filtered = 0;
		carousel.modify();
		setTimeout(function(){$('figure').addClass('figure');}, 500);
		}
		else{
		classNames = Q6;
		classNames = classNames.replace("22",".SD");
		classNames = classNames.replace("21",".HD");
		classNames = classNames.replace("20",".Western");
		classNames = classNames.replace("19",".War");
		classNames = classNames.replace("18",".Thriller");
		classNames = classNames.replace("17",".Sci-Fi");
		classNames = classNames.replace("16",".Romance");
		classNames = classNames.replace("15",".Mystery");
		classNames = classNames.replace("14",".Musical");
		classNames = classNames.replace("13",".Music");
		classNames = classNames.replace("12",".Horror");
		classNames = classNames.replace("11",".History");
		classNames = classNames.replace("10",".Fantasy");
		classNames = classNames.replace("9",".Family");
		classNames = classNames.replace("8",".Drama");
		classNames = classNames.replace("7",".Crime");
		classNames = classNames.replace("6",".Comic-Book");
		classNames = classNames.replace("5",".Comedy");
		classNames = classNames.replace("4",".Animation");
		classNames = classNames.replace("3",".Adventure");
		classNames = classNames.replace("2",".Action");
		classNames = classNames.replace("1",".Favorites");
		changeClass(classNames, "none");
		}
	},
    selecting: function(event, ui) {
        $currentlySelected.addClass('ui-selected'); // re-apply ui-selected class to currently selected items
    },
    selected: function(event, ui) {
        selected1.push(ui.selected); 
    }
});


$('#selectable2').selectable({
    start: function(event, ui) {
        $currentlySelected2 = $('#selectable2 .ui-selected');
    },
    stop: function(event, ui) {
        for (var i = 0; i < selected2.length; i++) {
            if ($.inArray(selected2[i], $currentlySelected2) >= 0) {
              $(selected2[i]).removeClass('ui-selected');
            }
        }
        selected2 = [];
    
		Q1 = "";
		$( ".ui-selected", this ).each(function() {
		var index = $( "#selectable2 li" ).index( this );
		if(Q1.length==0){
		Q1 =  ( ( index + 1 )  );
		}
		else{
		Q1 = Q1 + "," + ( ( index + 1 )  );
		}
		});
		if(Q1.length==0){

		}
		else{
		classNames = Q1;
		classNames = classNames.replace("22","SD");
		classNames = classNames.replace("21","HD");
		classNames = classNames.replace("20","Western");
		classNames = classNames.replace("19","War");
		classNames = classNames.replace("18","Thriller");
		classNames = classNames.replace("17","Sci-Fi");
		classNames = classNames.replace("16","Romance");
		classNames = classNames.replace("15","Mystery");
		classNames = classNames.replace("14","Musical");
		classNames = classNames.replace("13","Music");
		classNames = classNames.replace("12","Horror");
		classNames = classNames.replace("11","History");
		classNames = classNames.replace("10","Fantasy");
		classNames = classNames.replace("9","Family");
		classNames = classNames.replace("8","Drama");
		classNames = classNames.replace("7","Crime");
		classNames = classNames.replace("6","Comic-Book");
		classNames = classNames.replace("5","Comedy");
		classNames = classNames.replace("4","Animation");
		classNames = classNames.replace("3","Adventure");
		classNames = classNames.replace("2","Action");
		classNames = classNames.replace("1","Favorites");
		document.getElementById('Genres').value = classNames;
		}
	},
    selecting: function(event, ui) {
        $currentlySelected2.addClass('ui-selected'); // re-apply ui-selected class to currently selected items
    },
    selected: function(event, ui) {
        selected2.push(ui.selected); 
    }
});

});


var style;
function changeClass(className, visibility) {

    if(typeof style == 'undefined') {
        var append = true;
        style = document.createElement('style');
    } else {
        while (style.hasChildNodes()) {
            style.removeChild(style.firstChild);
        }
    }
    var head = document.getElementsByTagName('head')[0];
    var rules = document.createTextNode(
        ".folder" + '{ display: ' + visibility + ';margin:10px;}' + className + '{ display: block' + '}'
    );
	$('figure').attr('style', '');
	$('#carousel').attr('style', 'transform: translate(0px,0px)');
	$('#container').removeClass('container');
	$('figure').removeClass('figure');
	filtered = 1;
	
    style.type = 'text/css';
    if(style.styleSheet) {
        style.styleSheet.cssText = rules.nodeValue;
    } else {
        style.appendChild(rules);
    }
    if(append === true) head.appendChild(style);
}
if (window.screen.width < 1000) {
   // resolution is below 10 x 7
   window.location = '/mobile.php'; //for example
 }
 
 
 
 
			$(document).ready(function(){
				//Examples of how to assign the Colorbox event to elements
				$(".inline").colorbox({
				inline:true, 
				width:"85%", 
				height:"90%",
				onClosed:function(){     scrollWrap.addEventListener("mousewheel", MouseWheelHandler, false); },
				onOpen:function(){     scrollWrap.removeEventListener("mousewheel", MouseWheelHandler, false); }
				});
			});