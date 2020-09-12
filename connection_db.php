<?php
    require_once "dev_prod.php";

    //connection
    $conn = new mysqli($dsn, $username, $password);

    //check connection
    if($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected succsfully";
?>