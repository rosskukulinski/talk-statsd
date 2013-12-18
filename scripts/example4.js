var lynx = require('lynx');
var metrics = new lynx('162.242.212.227', 8125);
function timer() {
  for (var i=0; i<20; i++) {
    metrics.timing('example4.timer1', Math.random()*50); // time in ms
  }
  setTimeout(timer, 500);
}
timer();