
(function () {
  'use strict';

  var btn = document.getElementById('Featur__design__js');
  var btn2 = document.getElementById('Featur__design__js__strings');

  btn.addEventListener('click', function () {
    var n = Math.random()
    var id;
    if (n < 0.1) {
      btn2.textContent = '大吉'; // 10%
      id = '01';
    } else if (n < 0.3) {
      btn2.textContent = '中吉';  // 20%
      id = '02';
    } else if (n < 0.6) {
      btn2.textContent = '小吉';  // 30%
      id = '03';
    } else if (n < 0.9) {
      btn2.textContent = '吉';  // 30%
      id = '04';
    } else {
      btn2.textContent = '凶';  // 10%
      id = '05';
    }
    // 結果をajaxで送る
    $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbzKoa3cnDSfHUz1KVfwc1f6ZQKYsXImMQ-mjh2srxTyKDnV-f4l/exec?code=' + id,
      type: 'GET'
    })
    .done(function(data) {
      console.log("正常");
    })
    .fail(function() {
      console.log("エラー");
    });
  });
})();
