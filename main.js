(function () {
  'use strict';

  var btn = document.getElementById('Featur__design__js');
  var btn2 = document.getElementById('Featur__design__js__strings');

  btn.addEventListener('click', function () {
    var n = Math.random()
    if (n < 0.1) {
      btn2.textContent = '大吉'; // 10%
    } else if (n < 0.3) {
      btn2.textContent = '中吉';  // 20%
    } else if (n < 0.6) {
      btn2.textContent = '小吉';  // 30%
    } else if (n < 0.9) {
      btn2.textContent = '吉';  // 30%
    } else {
      btn2.textContent = '凶';  // 10%
    }
  });
})();