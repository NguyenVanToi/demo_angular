<?php
    class Database
    {
        private $host = 'localhost';
        private $user = 'root';
        private $pass = 'root';
        private $name = 'managerUser';
        public $link;
    //    connect database
        public function db_connect(){
            $this->link = NULL;
            try {
                $this->link = mysqli_connect($this->host, $this->user, $this->pass, $this->name);
            } catch (Exception $exception){
                echo "Connect error" . $exception->getMessage();
            }
            return $this->link;
        }
    }
?>