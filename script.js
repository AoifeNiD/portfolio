// create the module and name it myApp
// also include ngRoute for all our routing needs
var myApp = angular.module('myApp', ['ngRoute']);

// configure our routes
myApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/splash.html',
            controller  : 'splashController'
        })

        // route for the contact page
        .when('/projects', {
            templateUrl : 'pages/projects.html',
            controller  : 'projectsController'
        })

        // route for the contact page
        .when('/info', {
            templateUrl : 'pages/info.html',
            controller  : 'infoController'
        })

        // route for the dendro page
        .when('/dendro', {
            templateUrl : 'pages/dendro.html',
            controller  : 'dendroController'
        })

        // route for the videotool page
        .when('/videotool', {
            templateUrl : 'pages/videotool.html',
            controller  : 'videotoolController'
        });
});

// create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = '';
});

myApp.controller('aboutController', function($scope) {
    $scope.message = 'Great! You did it!';
});

myApp.controller('contactController', function($scope) {
    $scope.message = 'Complete the puzzle';
});

myApp.controller('completeController', function($scope) {
    $scope.message = 'Well Done!! You have completed testing the App! Thank you for your help :)';
});
