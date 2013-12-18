//master.js

var lynx = require('lynx');
var metrics = new lynx('162.242.212.227', 8125);

// example2.js
function updateGauges() {
  metrics.gauge('example2.gauge1', Math.random()+3);
  metrics.gauge('example2.gauge2', Math.random());
  setTimeout(updateGauges, 500);
}

updateGauges();

// example3.js
function increment() {
  for (var j=0; j<Math.random()*200; j++) {
    metrics.increment('example3.counter');
    // metrics.decrement('example3.counter');
  }
  setTimeout(increment, 500);
}
increment();

// example4.js
var lynx = require('lynx');
var metrics = new lynx('162.242.212.227', 8125);
function timer4() {
  for (var i=0; i<20; i++) {
    metrics.timing('example4.timer1', Math.random()*50); // time in ms
  }
  setTimeout(timer4, 500);
}
timer4();

// example5.js
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

// example6.js
function pageVisit(user) {
  metrics.set('example6.user', user);
}
function pick() {
  pageVisit('ross');
  pageVisit('ross');
  if (Math.random() > 0.9) { pageVisit('jared'); }
  setTimeout(pick, 1000);
}
pick();


// Express server
var express = require('express');
var lynxExpress = require('lynx-express');
// Setup your lynx StatsD client as normal
var lmetrics = new lynx('162.242.212.227', 8125, {prefix: 'express'});
// Create the lynx Express middleware
var lynxMiddleware = lynxExpress(lmetrics);
var app = express();
// Tell Express to use your lynx middleware
app.use(lynxMiddleware({timeByUrl: true}));
function randResp(req, res, next) {
  var offset = 1000;
  if (req.url === '/users/') {
    offset = 3000;
  }
  if (Math.random() > 0.95) {
    offset = offset*2;
  }
  setTimeout(function() {res.send(req.url);}, Math.random()*offset);
};
app.get('/', randResp);
app.get('/users/', randResp);
app.get('/users/:user', randResp);
app.listen(3000);



// benchmark express site
var Benchmark = require('benchmark-pages');

var pages = {
  "main": {
    url: "/",
    weight: 1
  },
  "users": {
    url: "/users/",
    weight: 1
  },
  "rossk": {
    url: "/users/rossk/",
    weight: 1
  },
  "will": {
    url: "/users/will/",
    weight: 1
  }
};

var engines = {
  "express": "http://localhost:3000",
};

function main() {
  var benchmark = new Benchmark(engines, pages, { iterations: 100 });
  benchmark.runMultiple(
    [
      100, 100, 100, 100, 100, 100, 100
 
    ],
    function () {
    }
  );
}

main();

function prod() {
  metrics.increment('deploy.production');
  setTimeout(prod, 30000);
}
prod();