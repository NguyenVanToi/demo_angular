<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    include_once "db_connection.php";
    include_once "connect_data.php";
    $database = new Database();
    $db = $database->db_connect();
    $user = new Users($db);
    $data = json_decode(file_get_contents("php://input"));
    $user->id = $data->id;
    $user->name = $data->name;
    $user->age = $data->age;
    $user->email = $data->email;
    if ($user->adduser()){
        echo json_encode(["Success"]);
    } else {
        echo json_encode(["Failed"]);
    }