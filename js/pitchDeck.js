/*
 * pitchDeck.js
 * Create an entire slideshow out of a single large image.
 */

const width  = 4000; // image width
const height = 3091; // image height

var vWidth;          // viewport width
var vHeight;         // viewport height

// tweens
var tween01, tween02, tween03, tween04, tween05,
	tween06, tween07, tween08, tween09, tween10, tween11;

// scenes
var scene01, scene02, scene03, scene04, scene05,
	scene06, scene07, scene08, scene09, scene10, scene11;

var controller; // ScrollMagic controller

function drawTrack() {

  // refresh viewport info
  vWidth  =  $(window).width();
  vHeight = $(window).height();

  // Landscape display mode
  if (vWidth / vHeight >= width / height) {

    // Build first
    tween01 = TweenMax.fromTo("#target", 2, {
      width: "100%",
			height: "auto",
			x: 0.5 * vWidth,
      y: 0.5 * vHeight,
      xPercent: -50,
      yPercent: -50
    }, {
      width: 3.7 * vWidth,
			yPercent: -46.5
    });

    // Build last
    tween11 = TweenMax.to("#target", 2, {
      width: "100%",
      xPercent: -50,
			yPercent: -50
		});

  // Portrait display mode
  } else {

    // Build first
    tween01 = TweenMax.fromTo("#target", 2, {
			height: "100%",
			width: "auto",
			x: 0.5 * vWidth,
			y: 0.5 * vHeight,
			xPercent: -50,
			yPercent: -50
		}, {
			height: 4 * vHeight,
			yPercent: -46.5
		});

    // Build last
    tween11 = TweenMax.to("#target", 2, {
      height: "100%",
      xPercent: -50,
      yPercent: -50
    });
  }

  // build rest
	tween02 = TweenMax.to("#target", 2, {xPercent: -85,   yPercent: -9   });
  tween03 = TweenMax.to("#target", 2, {                 yPercent: -30  });
  tween04 = TweenMax.to("#target", 2, {xPercent: -13.6, yPercent: -9   });
  tween05 = TweenMax.to("#target", 2, {                 yPercent: -50  });
  tween06 = TweenMax.to("#target", 2, {xPercent: -82.5, yPercent: -63  });
  tween07 = TweenMax.to("#target", 2, {                 yPercent: -91  });
  tween08 = TweenMax.to("#target", 2, {xPercent: -19,   yPercent: -80.5});
  tween09 = TweenMax.to("#target", 2, {xPercent: -45,   yPercent: -25  });
  tween10 = TweenMax.to("#target", 2, {xPercent: -86.4, yPercent: -50  });

	controller.removeScene([
		scene01,
		scene02,
		scene03,
		scene04,
		scene05,
		scene06,
		scene07,
		scene08,
		scene09,
		scene10,
		scene11
	]);

  // build
	scene01.setTween(tween01).addIndicators().addTo(controller);
	scene02.setTween(tween02).addIndicators().addTo(controller);
	scene03.setTween(tween03).addIndicators().addTo(controller);
	scene04.setTween(tween04).addIndicators().addTo(controller);
	scene05.setTween(tween05).addIndicators().addTo(controller);
	scene06.setTween(tween06).addIndicators().addTo(controller);
	scene07.setTween(tween07).addIndicators().addTo(controller);
	scene08.setTween(tween08).addIndicators().addTo(controller);
	scene09.setTween(tween09).addIndicators().addTo(controller);
	scene10.setTween(tween10).addIndicators().addTo(controller);
	scene11.setTween(tween11).addIndicators().addTo(controller);
}

// Define the debounced function
var debouncedDrawTrack = debounce(drawTrack, 500);

// Call the debounced function on every resize
window.onresize = debouncedDrawTrack;

// wait for document ready
$(function () {

	controller = new ScrollMagic.Controller();

	scene01 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 19
	});

	scene02 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 1019
	});

	scene03 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 2019
	});

	scene04 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 3019
	});

	scene05 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 4019
	});

	scene06 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 5019
	});

	scene07 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 6019
	});

	scene08 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 7019
	});

	scene09 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 8019
	});

	scene10 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 9019
	});

	scene11 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 10019
	});

	drawTrack();

});
