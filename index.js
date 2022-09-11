(function ($) {
  "use strict";

  $(".card").tilt({
    maxTilt: 25,
    perspective: 1400,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 1200,
    glare: true,
    maxGlare: 0.5,
    scale: 1.1
  });
})(jQuery);
