angular.module('app').directive('mainDirective', function() {

  return {
    templateUrl: 'views/home.html',
    restrict: 'AE',
    controller: "main-control"
    }
});
