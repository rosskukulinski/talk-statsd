var lynx = require('lynx');
var metrics = new lynx('162.242.212.227', 8125);
function timer5() {
  var timer = metrics.createTimer('example5.timer1');
  setTimeout(function(){timer.stop()}, Math.random()*25);
}
function timers5() {
  for (var i=0; i<20; i++) {
    timer5();
  }
  setTimeout(timers5, 500);
}
timers5();