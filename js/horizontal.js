
 // $('#movierows > li')[parseInt(($('#movierows > li').length/3))].style.clear = "both";
 // $('#movierows > li')[parseInt(($('#movierows > li').length/3)*2)].style.clear = "both";

		var $frame = $('#effects');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap  = $frame.parent();

		
		
		
		/*global Sly */

		// Call Sly on frame
		var sly = new Sly($frame,{
			horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateMiddle: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: -3,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			moveBy: 1000,  
			speed: 300,
			elasticBounds: 1,
			easing: 'swing',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			forward: $wrap.find('.forward'),
			backward: $wrap.find('.backward'),
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next'),
		}).init();
		
		$wrap.find('.toStart').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the start of the frame.
			// If no item is provided, the whole content will be animated.
			sly.toStart();
		});

		// To Center button
		$wrap.find('.toCenter').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the center of the frame.
			// If no item is provided, the whole content will be animated.
			sly.toCenter();
		});

		// To End button
		$wrap.find('.toEnd').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the end of the frame.
			// If no item is provided, the whole content will be animated.
			sly.toEnd();
		});


