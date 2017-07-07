<?php
    Class Users
    {
        private $link;
//        private $table_user = "User";
    //properties
        public $id;
        public $name;
        public $email;
        public $age;
     //contructor
        public function __construct($db)
        {
                $this->link = $db;
        }
        public function read(){
            $query = "select * from User";
            $result = mysqli_query($this->link, $query);
//            $temp->execute();
            return $result;
        }
        public function adduser(){
            $query1 = "insert into User VALUES ('$this->id', '$this->name', '$this->email', $this->age)";
            $result1 = mysqli_query($this->link, $query1);
            if ($result1) {
                return true;
            } else {
                return false;
            }
        }
        public function edituser(){
            $query2 = "update User set name = '$this->name', age = $this->age, email = '$this->email' WHERE id = '$this->id'";
            $result2 = mysqli_query($this->link, $query2);
            if ($result2) {
                return true;
            } else {
                return false;
            }
        }
        public function deluser(){
            $query3 = "Delete from User WHERE id = '$this->id'";
            $result3 = mysqli_query($this->link, $query3);
            if ($result3) {
                return true;
            } else {
                return false;
            }
        }
    }





