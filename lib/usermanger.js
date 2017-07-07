/**
 * Created by vinamilk26 on 04/07/2017.
 */
var app = angular.module("mypro", ["ngRoute"]);
app.config(function ($route) {
    $route
        .when("/", {
            title: "Manager User",
            templateUrl: "../index.html"
        })
        .when("/users", {
            title: "All users",
            templateUrl: "../users/users.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});