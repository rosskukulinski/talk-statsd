// Ugh, replace this crap with Angular Directives

function Example2($scope, $timeout) {
  $scope.base = 'http://162.242.212.227/render/?width=586&height=308&_salt=1387326405.706&from=-5minutes&lineMode=connected&drawNullAsZero=true&target=stats.gauges.example2.gauge1&target=stats.gauges.example2.gauge2'
  
  $scope.imageSource = $scope.base;
  
  $scope.refresh = false;
  
  $scope.toggleRefresh = function() {
    $scope.refresh = !$scope.refresh;
  };
  
  $scope.updater = function updater() {
    if ($scope.refresh) {
      $scope.imageSource = $scope.base+'&_ts='+new Date().getTime()+'&.jpg';
      console.log($scope.imageSource);
    }
    $timeout($scope.updater, 1000);
  };
  
  $scope.updater();
}

function Example3($scope, $timeout) {
  $scope.base = 'http://162.242.212.227/render/?width=586&height=308&_salt=1387326405.706&from=-5minutes&lineMode=connected&drawNullAsZero=true&target=stats.example3.counter'
  
  $scope.imageSource = $scope.base;
  
  $scope.refresh = false;
  
  $scope.toggleRefresh = function() {
    $scope.refresh = !$scope.refresh;
  };
  
  $scope.updater = function updater() {
    if ($scope.refresh) {
      $scope.imageSource = $scope.base+'&_ts='+new Date().getTime()+'&.jpg';
      console.log($scope.imageSource);
    }
    $timeout($scope.updater, 1000);
  };
  
  $scope.updater();
}

function Example4($scope, $timeout) {
  $scope.base = 'http://162.242.212.227/render/?width=586&height=308&_salt=1387353038.973&from=-5minutes&target=stacked(stats.timers.example4.timer1.mean)&target=stats.timers.example4.timer1.upper_90&target=stats.timers.example4.timer1.lower'
  
  $scope.imageSource = $scope.base;
  
  $scope.refresh = false;
  
  $scope.toggleRefresh = function() {
    $scope.refresh = !$scope.refresh;
  };
  
  $scope.updater = function updater() {
    if ($scope.refresh) {
      $scope.imageSource = $scope.base+'&_ts='+new Date().getTime()+'&.jpg';
      console.log($scope.imageSource);
    }
    $timeout($scope.updater, 1000);
  };
  
  $scope.updater();
}

function Example5($scope, $timeout) {
  $scope.base = 'http://162.242.212.227/render/?width=586&height=308&_salt=1387353038.973&from=-5minutes&target=stacked(stats.timers.example5.timer1.mean)&target=stats.timers.example5.timer1.upper_90&target=stats.timers.example5.timer1.lower'
  
  $scope.imageSource = $scope.base;
  
  $scope.refresh = false;
  
  $scope.toggleRefresh = function() {
    $scope.refresh = !$scope.refresh;
  };
  
  $scope.updater = function updater() {
    if ($scope.refresh) {
      $scope.imageSource = $scope.base+'&_ts='+new Date().getTime()+'&.jpg';
      console.log($scope.imageSource);
    }
    $timeout($scope.updater, 1000);
  };
  
  $scope.updater();
}

function Example6($scope, $timeout) {
  $scope.base = 'http://162.242.212.227/render/?width=586&height=308&_salt=1387356816.432&target=stats.sets.example6.user.count&from=-5minutes&yMax=&yMin=0&yMax=3'
  
  $scope.imageSource = $scope.base;
  
  $scope.refresh = false;
  
  $scope.toggleRefresh = function() {
    $scope.refresh = !$scope.refresh;
  };
  
  $scope.updater = function updater() {
    if ($scope.refresh) {
      $scope.imageSource = $scope.base+'&_ts='+new Date().getTime()+'&.jpg';
      console.log($scope.imageSource);
    }
    $timeout($scope.updater, 1000);
  };
  
  $scope.updater();
}

function Express1($scope, $timeout) {
  $scope.base = 'http://162.242.212.227/render/?width=586&height=308&_salt=1387359849.132&from=-5minutes&lineMode=connected&drawNullAsZero=true&target=stacked(stats.timers.express.response_time.GET_root.mean)&target=stats.timers.express.response_time.GET_root.upper&target=stats.timers.express.response_time.GET_root.lower';
  
  $scope.imageSource = $scope.base;
  
  $scope.refresh = false;
  
  $scope.toggleRefresh = function() {
    $scope.refresh = !$scope.refresh;
  };
  
  $scope.updater = function updater() {
    if ($scope.refresh) {
      $scope.imageSource = $scope.base+'&_ts='+new Date().getTime()+'&.jpg';
      console.log($scope.imageSource);
    }
    $timeout($scope.updater, 1000);
  };
  
  $scope.updater();
}