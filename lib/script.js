/**
 * Created by vinamilk26 on 27/06/2017.
 */
angular.module("mypro", []).controller("content", function ($scope, $http, $filter) {
    //Get user from users.json

    $http.get("users.json").then(function (response) {
        $scope.users = response.data.users;
    });
    $scope.sortlist = 'name';
    $scope.add_users = [];
    $scope.temp = [];
    //show full list
    $scope.fulllist = function () {
        if (!$scope.userinput)
            $scope.fil = "";
    };
    //search input
    $scope.search = function () {
        $scope.fil = $scope.userinput;
    };
    //select user
    $scope.select = function (x) {
        if (x.check) {
            $scope.tempuser = $filter('filter')($scope.users, x.name);
            $scope.temp.push({
                id: $scope.tempuser[0].id,
                name: $scope.tempuser[0].name,
                age: $scope.tempuser[0].age,
                email: $scope.tempuser[0].email
            });
             if ($scope.temp.length == $scope.users.length) {
                $scope.checkall = true;
                $scope.all = true;
             }
        } else {
            var i = 0;
            while (i < $scope.temp.length) {
                if ($scope.temp[i].id == x.id) {
                    $scope.temp.splice(i, 1);
                }
                i++;
            }
            if ($scope.temp.length < $scope.users.length) {
                $scope.all = false;
            }
        }
    };
    //select all users
    $scope.selectAll = function () {
        if ($scope.users.length > 0 && $scope.checkall == true) {
            $scope.temp = angular.copy($scope.users);
        } else {
            $scope.temp = [];
        }
    };
    //Add user
    $scope.adduser = function () {
        var i = 0, j = 0, k = 0;
        if ($scope.temp.length > 0) {
            $scope.showmodal = false;
            while (j < $scope.temp.length) {
                for (k = 0; k < $scope.users.length; k++) {
                    if ($scope.users[k].id == $scope.temp[j].id) {
                        $scope.users.splice(k, 1);
                    }
                }
                j++;
            }
            while (i < $scope.temp.length) {
                $scope.add_users.push({
                    id: $scope.temp[i].id,
                    name: $scope.temp[i].name,
                    age: $scope.temp[i].age,
                    email: $scope.temp[i].email
                });
                $scope.temp.shift();
            }
            $scope.checkall = false;
        } else {
            $scope.showmodal = true;

        }
    };
    //Delete user
    $scope.del = function (x) {
            $scope.users.push({id: x.id, name: x.name, age: x.age, email: x.email});
            var i = 0;
            for (i = 0; i < $scope.add_users.length; i++) {
                if ($scope.add_users[i] == x) {
                    $scope.add_users.splice(i, 1);
                }
            }
    };
    //Sort user
    $scope.sortchange = true;
    $scope.sort = function (x) {
        $scope.orderby = x;
        $scope.sortchange = !$scope.sortchange;
    };
    //Delete All Users
    $scope.delAll = function () {
        var i = 0;
        while (i < $scope.add_users.length) {
            $scope.users.push({
                id: $scope.add_users[i].id,
                name: $scope.add_users[i].name,
                age: $scope.add_users[i].age,
                email: $scope.add_users[i].email
            });
            i++;
        }
        $scope.add_users.splice(0, $scope.add_users.length);
    };
});


