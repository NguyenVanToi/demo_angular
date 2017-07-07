<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
//    include file connect data & object
    include_once "db_connection.php";
    include_once "connect_data.php";
// Connect database
    $database = new Database();
    $db = $database->db_connect();
// Connect object data
    $user = new Users($db);
// Get user
    $result = $user->read();
    $num = mysqli_num_rows($result);
    if ($num > 0){
        $user_arr = array();
        $user_arr['users1'] = array();
        while ($rows = mysqli_fetch_array($result)){
            $user_item = array(
                "id" => $rows['id'],
                "name" => $rows['name'],
                "email" => $rows['email'],
                "age" => $rows['age']
            );
        array_push($user_arr['users1'], $user_item);
        }
        echo json_encode($user_arr);
    }

