/*
 * pitchDeck.js
 * Create an entire slideshow out of a single large image.
 */

$(function () { // wait for document ready

  // make sure the entire viewport is covered
  const imageRatio = 4000 / 3091;
  var viewportRatio = $(window).width() / $(window).height();
  if (viewportRatio >= imageRatio) {
    document.getElementById("target").style.width = "100%";

    var tween01 = TweenMax.to("#target", 2, {width: "4000px", x: "-2000px", y: "-1440px"});
    var tween11 = TweenMax.to("#target", 2, {width: "100%", x: -$(window).width(), y: -$(window).width() * (3091/4000), xPercent: 50, yPercent: 50});
  } else {
    console.log("getting target...");
    document.getElementById("target").style.width = "auto";
    document.getElementById("target").style.height = "100%";

    var tween01 = TweenMax.to("#target", 2, {height: "3091px", top: "50%", left: "50%", x: "-1333px", y: "-1000px"});
    var tween11 = TweenMax.to("#target", 2, {height: "100%", xPercent: 50, yPercent: 50});
  }

  // init controller
  var controller = new ScrollMagic.Controller();

  // build tweens
  // var tween01 = TweenMax.to("#target", 2, {width: "4000px", top: "50%", left: "50%", xPercent: -33, yPercent: -31});
  // var tween01 = TweenMax.to("#target", 2, {width: "4000px", top: "50%", left: "50%", x: "-1333px", y: "-1000px"});
  var tween02 = TweenMax.to("#target", 2, {xPercent: -66, yPercent: 5});
  var tween03 = TweenMax.to("#target", 2, {yPercent: -10});
  var tween04 = TweenMax.to("#target", 2, {xPercent: 0, yPercent: 5});
  var tween05 = TweenMax.to("#target", 2, {yPercent: -35});
  var tween06 = TweenMax.to("#target", 2, {xPercent: -66, yPercent: -50});
  var tween07 = TweenMax.to("#target", 2, {yPercent: -74});
  var tween08 = TweenMax.to("#target", 2, {xPercent: -1, yPercent: -65});
  var tween09 = TweenMax.to("#target", 2, {xPercent: -28, yPercent: -10});
  var tween10 = TweenMax.to("#target", 2, {xPercent: -66, yPercent: -33});
  // var tween11 = TweenMax.to("#target", 2, {width: "100%", xPercent: 0, yPercent: 0});

  // build scenes
  var scene01 = new ScrollMagic.Scene({triggerElement: "#trigger", triggerHook: "onLeave", duration: 500, offset: 19})
    .setTween(tween01)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  var scene02 = new ScrollMagic.Scene({triggerElement: "#trigger", triggerHook: "onLeave", duration: 500, offset: 519})
    .setTween(tween02)
    .addIndicators()
    .addTo(controller);

  var scene03 = new ScrollMagic.Scene({triggerElement: "#trigger", triggerHook: "onLeave", duration: 500, offset: 1019})
    .setTween(tween03)
    .addIndicators()
    .addTo(controller);

  var scene04 = new ScrollMagic.Scene({triggerElement: "#trigger", triggerHook: "onLeave", duration: 500, offset: 1519})
    .setTween(tween04)
    .addIndicators()
    .addTo(controller);

  var scene05 = new ScrollMagic.Scene({triggerElement: "#trigger", triggerHook: "onLeave", duration: 500, offset: 2019})
    .setTween(tween05)
    .addIndicators()
    .addTo(controller);

  var scene06 = new ScrollMagic.Scene({triggerElement: "#trigger", triggerHook: "onLeave", duration: 500, offset: 2519})
    .setTween(tween06)
    .addIndicators()
    .addTo(controller);

  var scene07 = new ScrollMagic.Scene({triggerElement: "#trigger", triggerHook: "onLeave", duration: 500, offset: 3019})
    .setTween(tween07)
    .addIndicators()
    .addTo(controller);

  var scene08 = new ScrollMagic.Scene({triggerElement: "#trigger", triggerHook: "onLeave", duration: 500, offset: 3519})
    .setTween(tween08)
    .addIndicators()
    .addTo(controller);

  var scene09 = new ScrollMagic.Scene({triggerElement: "#trigger", triggerHook: "onLeave", duration: 500, offset: 4019})
    .setTween(tween09)
    .addIndicators()
    .addTo(controller);

  var scene10 = new ScrollMagic.Scene({triggerElement: "#trigger", triggerHook: "onLeave", duration: 500, offset: 4519})
    .setTween(tween10)
    .addIndicators()
    .addTo(controller);

  var scene11 = new ScrollMagic.Scene({triggerElement: "#trigger", triggerHook: "onLeave", duration: 500, offset: 5019})
    .setTween(tween11)
    .addIndicators()
    .addTo(controller);
});
