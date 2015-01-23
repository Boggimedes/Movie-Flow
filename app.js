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
		// document.getElementById('Genres').value = classNames;
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



var theta;
var radius;
var rotateXY;
var rotation;


var myApp = angular.module('myApp', ['monospaced.mousewheel']);
var gobj = [];

myApp.factory('movieData', function($http) {
    var movieData = {};
		$http.get('moviedata.php').
  success(function(data) {
	movieData.count = data.length*2;
    movieData.data = data;
	  return movieData;
  })
  return movieData;
})

myApp.controller('MovieFlowCtrl',  function ($scope, $rootScope, movieData) {
    $scope.movies = movieData;
    $rootScope.genrelist=["Favorites","Action","Adventure","Animation","Comedy","Comic-Book","Crime","Drama","Family","Fantasy","History","Horror","Music","Musical","Mystery","Romance","Sci-Fi","Thriller","War","Western","HD","SD"];
	$rootScope.genrefilter = [];
   $scope.$watch('selectedItems', function (data) {
    });
    $scope.clearSelection=function() {
	$rootScope.genrefilter = [];
	$('#selectable .ui-selected').removeClass('ui-selected');
    }
	
    $scope.dosomething= function (index) {
     var selectedind = $rootScope.genrefilter.indexOf($rootScope.genrelist[index]);
	  if(selectedind>=0){
	  $rootScope.genrefilter.splice(selectedind,1);
	  }
	  else{
	  $rootScope.genrefilter.push($rootScope.genrelist[index]);
	  }
    }
	$scope.carousel = {};
	$scope.carousel.element = document.getElementById('carousel');
	$scope.carousel.rotation = 0;
	$scope.carousel.panelCount = 0;
	$scope.carousel.totalPanelCount = $scope.carousel.panelCount;
	$scope.carousel.theta = 0;
	$scope.carousel.isHorizontal = true;



	
	$scope.carousel.init = function(panels) {
	 console.log("init");
          
      $scope.carousel.panelCount = panels;
       $scope.carousel.modify();
       $scope.carousel.rotation += -4;
      setTimeout( function(){
        document.body.addClassName('ready');
      }, 0);
	  
	      $scope.carousel.toggleCarousel(panels);
    }
		  $scope.carousel.sz1 = sz1;

	$scope.carousel.rows = function(index) {
		if(mrows==2 && (index+1)%2 ==0){return $scope.carousel.sz1;}
		if(mrows==3 && (index+1)%3 ==0){return $scope.carousel.sz1;}
		if(mrows==3 && (index+1)%2 ==0){return $scope.carousel.sz1;}
		return 0;
		}
	
	$scope.carousel.modify = function() {
		console.log("modify");
		var panel, angle, i;
		$scope.carousel.panelSize = $scope.carousel.element[ $scope.carousel.isHorizontal ? 'offsetWidth' : 'offsetHeight' ];
		$scope.carousel.rotateFn = $scope.carousel.isHorizontal ? 'rotateY' : 'rotateX';
		$scope.carousel.theta = 359 / (($scope.carousel.panelCount+mrows)/mrows);
		theta = $scope.carousel.theta;
		rotateXY = $scope.carousel.rotateFn;
		var sizeadj = 15;
		if(mrows == 1){sizeadj = 0.8;}	  
		if(mrows == 2){sizeadj = sz2;}	  

		$scope.carousel.radius = Math.round(( $scope.carousel.panelSize/sizeadj) / Math.tan( Math.PI / (($scope.carousel.panelCount+mrows)/mrows) ) );
		radius = $scope.carousel.radius;
		// adjust rotation so panels are always flat
		$scope.carousel.rotation = Math.round( $scope.carousel.rotation / $scope.carousel.theta ) * $scope.carousel.theta;
		rotation = $scope.carousel.rotation;
		carousel.style[ transformProp ] = 'translateZ(-' + radius + 'px) ' + rotateXY + '(' + rotation + 'deg)';
		}






	$scope.carousel.toggleCarousel = function(panelcount){
		if(panelcount > 20){
			$('#container').addClass('container');
			$('figure').addClass('figure');
			filtered = 0;
			$scope.carousel.modify();
		}
		else{
			// $('figure').attr('style', '');
			$('#carousel').attr('style', 'transform: translate(0px,0px)');
			$('#container').removeClass('container');
			$('figure').removeClass('figure');
			filtered = 1;
			}
		carousel.style[ transformProp ] = 'translateZ(-' + radius + 'px) ' + rotateXY + '(' + rotation + 'deg)';
		}


	})


    myApp.directive('scrollDown', [function($parse){
      return function(scope, element) {
        element[0].parentNode.scrollTop = 999999;
      };
    }]);

    myApp.directive('userAgent', [function(){
      return function(scope) {
        scope.ua = window.navigator.userAgent;
      };
    }]);
	
	
myApp.directive('movies', function() {
    return {
        link: function($scope, element, attrs) {
            // Trigger when number of children changes,
            // including by directives like ng-repeat
            var watch = $scope.$watch(function() {
                return element.children().length;
            }, function() {
                // Wait for templates to render
                $scope.$evalAsync(function() {
                    // Finally, directives are evaluated
                    // and templates are renderer here
                    var children = element.children();
                    if(children.length>0){$scope.carousel.init(children.length*2);}
                });
            });
        },
    };
});

myApp.filter('filterMultiple',['$filter','$rootScope',function ($filter,$rootScope) {
return function (items, keyObj) {
    var filterObj = {
        data:items,
        filteredData:[],
        applyFilter : function(obj,key){
			obj = $rootScope.genrefilter;
            var fData = [];
            if (this.filteredData.length == 0)
                this.filteredData = this.data;
            if (obj){
                var fObj = {};
                if (!angular.isArray(obj)){
                    fObj[key] = obj;
                    fData = fData.concat($filter('filter')(this.filteredData,fObj));
                } else if (angular.isArray(obj)){
                    if (obj.length > 0){
                        for (var i=0;i<obj.length;i++){
                            if (angular.isDefined(obj[i])){
                                fObj[key] = obj[i];
								// INclusive filter, Match ANY
                                // fData = fData.concat($filter('filter')(this.filteredData,fObj));    
								// EXclusive filter, Match ALL
                                this.filteredData = $filter('filter')(this.filteredData,fObj);    
                            }
                        }

                   }
                }
                if (fData.length > 0){
                    this.filteredData = fData;
                }
				
            }
        }
    };
    if (keyObj){
        angular.forEach(keyObj,function(obj,key){
            filterObj.applyFilter(obj,key);
        });
 	$rootScope.genrelist=[];
	  if(typeof filterObj.filteredData !== 'undefined'){
	for (var i=0;i<filterObj.filteredData.length;i++){
		for (var z=0;z<filterObj.filteredData[i].genres.length;z++){
			if($rootScope.genrelist.indexOf(filterObj.filteredData[i].genres[z])==-1)
			{
			if(filterObj.filteredData[i].genres[z] !="")
				{$rootScope.genrelist.push(filterObj.filteredData[i].genres[z]);}
			}
		}
	}
	}
	$rootScope.genrelist.sort();
   }
   if(angular.isDefined(carousel.transform)){carousel.transform();}
    return filterObj.filteredData;
}
}]);


myApp.filter('unique', function() {
    return function(input, key) {
        var unique = {};
        var uniqueList = [];
        for(var i = 0; i < input.length; i++){
            if(typeof unique[input[i][key]] == "undefined"){
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
});



myApp.directive('uiSelectable', function ($parse) {
    return {
        link: function (scope, element, attrs, ctrl) {
        scope.$on('clearselection', function (event, genre) {
          element.find('.ui-selected').removeClass('ui-selected')
       });

            element.selectable({
               stop: function (evt, ui) {
                   var collection = scope.$eval(attrs.docArray)
                    var selected = element.find('ol.parent.ui-selected').map(function () {
                        var idx = $(this).index();
                        return { genre: collection[idx] }
                    }).get();
                    scope.selectedItems = selected;
                    scope.$apply()
                }
            });
        }
    }
});




