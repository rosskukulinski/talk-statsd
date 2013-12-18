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
