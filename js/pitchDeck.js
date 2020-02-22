/*
 * pitchDeck.js
 * Create an entire slideshow out of a single large image.
 */

const iw = 5280, ih = 4080; // image width and height

var vw, vh, zw, zh; // viewport and zoom width and height

var controller; // ScrollMagic controller

var scene01, scene02, scene03, scene04, scene05, // scenes
	scene06, scene07, scene08, scene09, scene10, scene11;

var t01, t02, t03, t04, t05, t06, t07, t08, t09, t10, t11,
	t12, t13, t14, t15, t16, t17, t18, t19, t20, t21; // tweens

// Called when the page first loads and whenever the window is resized
function drawTrack() {

  // refresh viewport info
  vw = $(window).width();
  vh = $(window).height();

	// Set zoom
	zw = 3.5 * vw;
	zh = zw * (ih / iw);

	// Set property values for all tweens
	tween20Vars = {y: vh/2, ease: Linear.easeInOut};
	tween21Vars = {...tween20Vars, x: vw/2};
	tween01From = {...tween21Vars, xPercent: -50, yPercent: -50};
	tween01To   = {width: zw,      y:  0.035 * zh + vh/2, ease: Linear.easeInOut};
	tween02Vars = {x: -0.100 * zw, y:  0.500 * zh, ease: Linear.easeIn        };
	tween03Vars = {x: -(3/14)* zw,                 ease: Linear.easeOut};
	tween04Vars = {                y:  0.220 * zh + vh/2, ease: Linear.easeInOut};
	tween05Vars = {x: -0.150 * zw, ease: Linear.easeIn                       };
	tween06Vars = {x:  0.400 * zw, y:  0.500 * zh, ease: Linear.easeNone   };
	tween07Vars = {x:  0.500 * zw,    ease: Linear.easeOut                 };
	tween08Vars = {                    y: -0.030 * zh + vh/2, ease: Linear.easeInOut};
	tween09Vars = {x:  0.450 * zw, ease: Linear.easeIn                        };
	tween10Vars = {x: -0.080 * zw, y: -0.140 * zh + vh/2, ease: Linear.easeNone};
	tween11Vars = {x: -0.185 * zw, ease: Linear.easeOut                      };
	tween12Vars = {                    y: -0.500 * zh + vh, ease: Linear.easeInOut};
	tween13Vars = {x: -0.100 * zw, ease: Linear.easeIn                      };
	tween14Vars = {x:  0.450 * zw, y: -0.460 * zh + vh, ease: Linear.easeOut};
	tween15Vars = {                    y: -0.305 * zh + vh/2, ease: Linear.easeInOut};
	tween16Vars = {x:  0.370 * zw, ease: Linear.easeIn            };
	tween17Vars = {x:  0.280 * zw, y:  0.250 * zh + vh/2, ease: Linear.easeOut};
	tween18Vars = {x:  0.140 * zw, ease: Linear.easeInOut            };
	tween19Vars = {x: -(3/14)* zw, y:  0.080 * zh + vh/2, ease: Linear.easeIn};

  // Ensure the image fills the whole window at the beginning and end
  if (vw / vh >= iw / ih) { // Landscape display mode
		tween01From = {...tween01From, width: "100%", height: "auto"};
		tween21Vars = {...tween21Vars, width: "100%"};
  } else { // Portrait display mode
		tween01From = {...tween01From, height: "100%", width: "auto"};
		tween01To = {...tween01To, height: "auto"};
		tween21Vars = {...tween21Vars, height: "100%", width: "auto"};
  }

	// Build tweens
	t01 = TweenMax.fromTo("#target", 2, tween01From, tween01To);

	t02 = TweenMax.to("#target", 1, tween02Vars);
	t03 = TweenMax.to("#target", 1, tween03Vars); // A BROKEN SEARCH
	t04 = TweenMax.to("#target", 1, tween04Vars);
	t05 = TweenMax.to("#target", 1, tween05Vars);
	t06 = TweenMax.to("#target", 1, tween06Vars);
	t07 = TweenMax.to("#target", 1, tween07Vars); // OUR APPROACH
	t08 = TweenMax.to("#target", 1, tween08Vars);
	t09 = TweenMax.to("#target", 1, tween09Vars);
	t10 = TweenMax.to("#target", 1, tween10Vars);
	t11 = TweenMax.to("#target", 1, tween11Vars); // JAKE
	t12 = TweenMax.to("#target", 1, tween12Vars);
	t13 = TweenMax.to("#target", 1, tween13Vars);
	t14 = TweenMax.to("#target", 1, tween14Vars);
	t15 = TweenMax.to("#target", 1, tween15Vars); // REFERENCE FILMS
	t16 = TweenMax.to("#target", 1, tween16Vars);
	t17 = TweenMax.to("#target", 1, tween17Vars);
	t18 = TweenMax.to("#target", 1, tween18Vars); // PROJECT TIMELINE
	t19 = TweenMax.to("#target", 1, tween19Vars);
	t20 = TweenMax.to("#target", 1, tween20Vars); // CONTACT
	t21 = TweenMax.to("#target", 1, tween21Vars);

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
		scene11,
		scene12,
		scene13,
		scene14,
		scene15,
		scene16,
		scene17,
		scene18,
		scene19,
		scene20,
		scene21
	]);

  // build
	scene01.setTween(t01).addIndicators().addTo(controller);
	scene02.setTween(t02).addIndicators().addTo(controller);
	scene03.setTween(t03).addIndicators().addTo(controller);
	scene04.setTween(t04).addIndicators().addTo(controller);
	scene05.setTween(t05).addIndicators().addTo(controller);
	scene06.setTween(t06).addIndicators().addTo(controller);
	scene07.setTween(t07).addIndicators().addTo(controller);
	scene08.setTween(t08).addIndicators().addTo(controller);
	scene09.setTween(t09).addIndicators().addTo(controller);
	scene10.setTween(t10).addIndicators().addTo(controller);
	scene11.setTween(t11).addIndicators().addTo(controller);
	scene12.setTween(t12).addIndicators().addTo(controller);
	scene13.setTween(t13).addIndicators().addTo(controller);
	scene14.setTween(t14).addIndicators().addTo(controller);
	scene15.setTween(t15).addIndicators().addTo(controller);
	scene16.setTween(t16).addIndicators().addTo(controller);
	scene17.setTween(t17).addIndicators().addTo(controller);
	scene18.setTween(t18).addIndicators().addTo(controller);
	scene19.setTween(t19).addIndicators().addTo(controller);
	scene20.setTween(t20).addIndicators().addTo(controller);
	scene21.setTween(t21).addIndicators().addTo(controller);
}

// Define a debounced version of our function
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
		duration: 2000,
		offset: 1019
	});

	scene03 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 500,
		offset: 3019
	});

	scene04 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 3519
	});

	scene05 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 500,
		offset: 4519
	});

	scene06 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 2000,
		offset: 5019
	});

	scene07 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 500,
		offset: 7019
	});

	scene08 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 2000,
		offset: 7519
	});

	scene09 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 500,
		offset: 9519
	});

	scene10 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 2000,
		offset: 10019
	});

	scene11 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 500,
		offset: 12019
	});

	scene12 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 12519
	});

	scene13 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 500,
		offset: 13519
	});

	scene14 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 2000,
		offset: 14019
	});

	scene15 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 16019
	});

	scene16 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 500,
		offset: 17019
	});

	scene17 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 2000,
		offset: 17519
	});

	scene18 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 19519
	});

	scene19 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 2000,
		offset: 20519
	});

	scene20 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 22519
	});

	scene21 = new ScrollMagic.Scene({
		triggerElement: "#trigger",
		triggerHook: "onLeave",
		duration: 1000,
		offset: 23519
	});

	drawTrack();
	document.getElementById("loader").style.display = "none";
	document.getElementById("target").style.display = "block";

});
