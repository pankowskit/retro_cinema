angular.module("app").config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "app/templates/home.html"
    })
    .when("/comingsoon",{
        templateUrl: "app/templates/comingsoon.html"
    })
    .when("/movies",{
        templateUrl: "app/templates/movies.html"
    })
    .when("/plan",{
        templateUrl: "app/templates/plan.html"
    })
    .when("/playlist",{
        templateUrl: "app/templates/playlist.html"
    })
    .when("/privacy",{
        templateUrl: "app/templates/privacy.html"
    })
    .otherwise({
        templateUrl: "app/templates/error.html"
    });
});