/*
 * pitchDeck.js
 * Create an entire slideshow out of a single large image.
 */

$(function () { // wait for document ready

  // Please enter the image width and height, in pixels.
  const width  = 4000;
  const height = 3091;

  // computed information about the image
  const halfWidth  = width  / 2;
  const halfHeight = height / 2;

  const whRatio = width  / height;
  const hwRatio = height /  width;

  // information about the viewport
  const vWidth  =  $(window).width();
  const vHeight = $(window).height();

  const halfVWidth  = vWidth  / 2;
  const halfVHeight = vHeight / 2;

  // Landscape display mode
  if (vWidth / vHeight >= whRatio) {
    // Make sure the image covers the entire viewport
    document.getElementById("target").style.width = "100%";

    // Build first tween
    var tween01 = TweenMax.to(
      "#target", 2, {width: width, x: -halfWidth, y: 128 - halfHeight}
    );

    // Build last tween
    var tween11 = TweenMax.to(
      "#target", 2, {
        width: "100%",
        x: -vWidth,
        y: -vWidth * hwRatio,
        xPercent: 50,
        yPercent: 50
      }
    );

  // Portrait display mode
  } else {
    // Make sure the image covers the entire viewport
    document.getElementById("target").style.height = "100%";

    // Build first tween
    var tween01 = TweenMax.to(
      "#target", 2, {height: height, x: -halfWidth, y: 128 - halfHeight}
    );

    // Build last tween
    var tween11 = TweenMax.to(
      "#target", 2, {
        height: "100%",
        x: -vHeight * whRatio,
        y: -vHeight,
        xPercent: 50,
        yPercent: 50
      }
    );
  }

  // init controller
  var controller = new ScrollMagic.Controller();

  // build rest of tweens
  var tween02 = TweenMax.to("#target", 2, {x: halfVWidth - width, y: -halfVHeight});
  var tween03 = TweenMax.to("#target", 2, {y: -halfVHeight - 500});
  var tween04 = TweenMax.to("#target", 2, {x: -halfVWidth, y: -halfVHeight});
  var tween05 = TweenMax.to("#target", 2, {y: -halfVHeight - 1100});
  var tween06 = TweenMax.to("#target", 2, {x: 100 + halfVWidth - width, y: halfVHeight - height + 700});
  var tween07 = TweenMax.to("#target", 2, {y: halfVHeight - height});
  var tween08 = TweenMax.to("#target", 2, {x: -halfVWidth, y: halfVHeight - height + 200});
  var tween09 = TweenMax.to("#target", 2, {x: 200 - halfWidth, y: 750 - halfHeight});
  var tween10 = TweenMax.to("#target", 2, {x: halfVWidth - width, y: -halfHeight});

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
