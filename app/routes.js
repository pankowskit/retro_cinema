angular.module("app").config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "app/templates/comingsoon.html"
    })
    .when("/privacy",{
        templateUrl: "app/templates/privacy.html"
    })
    .otherwise({
        templateUrl: "app/templates/error.html"
    });
});