var lynx = require('lynx');

var metrics = new lynx('162.242.212.227', 8125);

function updateGauges() {
  metrics.gauge('example2.gauge1', Math.random()+3);
  metrics.gauge('example2.gauge2', Math.random());
  setTimeout(updateGauges, 500);
}

updateGauges();