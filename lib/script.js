/**
 * Created by vinamilk26 on 27/06/2017.
 */
var app = angular.module("mypro", ["ngRoute"]);
app.controller("content", function ($scope, $http, $filter) {
//Get user from api
    $http.get("api/getUser.php").then(function (response) {
        $scope.users = response.data.users1;
    });
    $scope.sortlist = 'name';
    $scope.add_users = [];
    $scope.temp = [];
//disable button delete all
        $scope.disableBtndel = true;
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
    $scope.tempuser=[];
    $scope.select = function (x) {
        if(x.check){
            $scope.temp.push({id: x.id,name: x.name, age: x.age, email: x.email});
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
            $scope.disableBtndel = false;
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
            if($scope.users.length == 0){
                $scope.disableBtn = true;
            }
            $('#confirmation-add').modal({show:false});
            $scope.checkall = false;
        } else {
            $('#confirmation-add').modal({show:true});
        }
    };
//Delete user
    $scope.showmodalDel = function (x) {
        $("#confirmation-del").modal({show:true});
        $scope.userdel = x;
    };
    $scope.del = function () {
        $scope.users.push({id: $scope.userdel .id, name: $scope.userdel.name, age: $scope.userdel.age, email: $scope.userdel.email});
            var i;
            for (i = 0; i < $scope.add_users.length; i++) {
                if ($scope.add_users[i] == $scope.userdel) {
                    $scope.add_users.splice(i, 1);
                }
            }
        if ($scope.add_users.length == 0){
            $scope.disableBtndel = true;
        } else {
            $scope.disableBtndel = false;
        }
    };
//Sort user
    $scope.sortchange = true;
    $scope.sort = function (x) {
        $scope.orderby = x;
        $scope.sortchange = !$scope.sortchange;
    };
//Delete All Users
    $scope.showmodalDelall = function () {
        $("#confirmation-delall").modal({show:true});
    };
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
        $scope.disableBtndel = true;
        $scope.disableBtn = false;
        $scope.add_users.splice(0, $scope.add_users.length);
    };

});
////////// File list user
app.controller('listuser', function ($scope, $http){
    $http.get("api/getUser.php").then(function (response) {
        $scope.users1 = response.data.users1;
        $scope.totaluser = $scope.users1.length;

    });
// Search user
    //show full list
    $scope.fulllist = function () {
        if (!$scope.userinput)
            $scope.fil = "";
    };
    //search input
    $scope.search = function () {
        $scope.fil = $scope.userinput;
    };
//    Sort user
    //Sort user
    $scope.sortchange = true;
    $scope.sort = function (x) {
        $scope.orderby = x;
        $scope.sortchange = !$scope.sortchange;
    };
//add user
    $scope.modalAdduser =function () {
        $("#adduser").modal({show: true});
    };
    // $scope.difid = true;
    //different ID
    $scope.differentId = function () {
        var m = 0;
        while(m < $scope.users1.length){
            if ($scope.userid != $scope.users1[m].id){
                $scope.difid = false;
                break;
            } else {
                $scope.difid = true;
                break;
            }
            m ++;
        }
    };
    $scope.adduser = function () {
        var users={
            id: $scope.userid,
            name: $scope.username,
            age: $scope.userage,
            email: $scope.useremail
        };
        var config={
            headers: {
                'Content-Type': 'application/json'
            }
        };
        $http.post('api/adduser.php', users, config).then(function (response) {
            if(response.data[0] == "Success"){
                $("#adduser").modal('hide');
                window.location.href = "#!users";
            } else {
                $("#adduser").modal({show: true});
            }
        });
    };
//    edit user
    $scope.select = function (x) {
        $scope.edit_id = x.id;
        $scope.edit_name = x.name;
        $scope.edit_age = parseInt(x.age);
        $scope.edit_email = x.email;
        $scope.id_none=true;
        $("#edituser").modal({show: true});
    };
    $scope.edituser = function () {
        var users_edit={
            id: $scope.edit_id,
            name: $scope.edit_name,
            age: $scope.edit_age,
            email: $scope.edit_email
        };
        $http.post('api/edituser.php', users_edit).then(function (response1) {
            if(response1.data == "Success"){
                $("#edituser").modal('hide');
                window.location.href = "#!users"
            } else {
                $("#edituser").modal({show: true});
            }
        });
    };
//    Delete user
    $scope.selectdel = function (id) {
        $scope.userdel = id;
    };
    $scope.deluser = function () {
        var users_del={
            id: $scope.userdel
        };
        $http.post('api/deluser.php', users_del);
        window.location.href = "#!users";
    };
});

// route
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/", {
            title: "Manager User",
            templateUrl: "users/manageruser.html",
            controller: "content"
        })
        .when("/users", {
            title: "users",
            templateUrl: "users/users.html",
            controller: "listuser"
        })
        .when("/adduser", {
            title: "add user",
            templateUrl: "users/adduser.html",
            controller: "adduser"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);

