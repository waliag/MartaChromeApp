var app = angular.module('myMartaApp', ['ngRoute']);

//angular change to remove unsafe url
app.config([
    '$compileProvider',
    function( $compileProvider )
    {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
]);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'view1.html',
        controller: 'SampleCtrl'
    })
        .when('/timings/:stationVal', {
            templateUrl: 'view2.html',
            controller: 'restCtrl'
        })
        .otherwise({ redirectTo: '/' });
});

app.controller('SampleCtrl', function ($scope) {
    $scope.stationList = ['FivePoints', 'SandySprings'];
    $scope.station = 'FivePoints';
});

function restCtrl($scope, $http, $routeParams) {
    $scope.urlString = 'http://localhost:34025/Service1.svc/' + $routeParams.stationVal;
    $http.get($scope.urlString).success(function (data) {
            $scope.response = data;
        });
}