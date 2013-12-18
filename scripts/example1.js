var lynx = require('lynx');
var metrics = new lynx('162.242.212.227', 8125);
metrics.gauge('example1.gauge', 300);