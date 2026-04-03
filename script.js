window.onload = function() {
    var duration = 5 * 1000;
    var end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffffff', '#ff758c']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ffffff', '#ff758c']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
};
