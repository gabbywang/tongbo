"use strict";

var gzt = document.querySelector('.gzt');
               var gz = document.querySelector('.gz');
               var gt = document.querySelector('.gt');
               var hualan = document.querySelector('.hualan');
         
               hualan.style.height = gzt.offsetHeight/gz.offsetHeight*gzt.offsetHeight + 'px';
               hualan.onmousedown = function(ev){
               var disy = ev.clientY - hualan.offsetTop;
               document.onmousemove = function(ev){
               var currtY= ev.clientY - disy;
               if (currtY<0) { currtY = 0;}
               if (currtY>gzt.offsetHeight-hualan.offsetHeight) {currtY = gt.offsetHeight-hualan.offsetHeight;}
               hualan.style.top = currtY + 'px';
               var scalY = currtY/(gt.offsetHeight-hualan.offsetHeight);
               console.log(gz.offsetHeight * scalY)
               gz.style.top = scalY * (gzt.offsetHeight - gz.offsetHeight ) + 'px'
               }
               document.onmouseup = function(ev){
               document.onmousemove = null;
               }
               return false;
               }