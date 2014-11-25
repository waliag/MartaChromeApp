var app = angular.module('myMartaApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'view1.html',
        controller: 'SampleCtrl'
    })
        .when('/view2', {
            templateUrl: 'view2.html',
            controller: 'restCtrl'
        })
        .otherwise({ redirectTo: '/' });
});

app.controller('SampleCtrl', function ($scope) {
});

function restCtrl($scope, $http) {
    $scope.urlString = 'http://localhost:34025/Service1.svc/' + $scope.inputName;
    $http.get($scope.urlString).success(function (data) {
            $scope.response = data;
        });
}