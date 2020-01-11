(function(){
    'use strict';
  
    var btn = document.getElementById('btn');
  
    btn.addEventListener('click', function(){
      var n = Math.random()
      if(n < 0.1){
        this.textContent = '大吉'; // 10%
      }else if (n < 0.3){
        this.textContent = '中吉';  // 20%
      }else if (n < 0.6){
        this.textContent = '小吉';  // 30%
      }else if (n < 0.9){
        this.textContent = '吉';  // 30%
      }else{
        this.textContent = '凶';  // 10%
      }
  
    });
    btn.addEventListener('mousedown', function(){
      this.className = 'pushed';
    });
    btn.addEventListener('mouseup', function(){
      this.className = '';
    });
  })();