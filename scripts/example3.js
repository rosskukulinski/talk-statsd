var lynx = require('lynx');
var metrics = new lynx('162.242.212.227', 8125);
function increment() {
  for (var j=0; j<Math.random()*200; j++) {
    metrics.increment('example3.counter');
    // metrics.decrement('example3.counter');
  }
  setTimeout(increment, 500);
}
increment();