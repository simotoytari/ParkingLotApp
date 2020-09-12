<?php
    require_once "dev_prod.php";
    $db = null;
    $response = array();
    $plname_ir = null;
    $plname_ir2 = null;

    #1: Connection
    try {
        $db = new PDO($dsn, $username, $password);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
        

        #Pushing values to database table
        $sql = "UPDATE ParkingLot SET ploccupied=33 WHERE plname='P2'";
        $db->exec($sql);
        

        $sql = "SELECT plname, plstatus, pltotal, ploccupied FROM ParkingLot";
        $stmt = $db->query($sql);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        while ($row = $stmt->fetch()){
            #check if total and occupied parkingspaces are the same. If they are set status to false and update database
            if(array_values($row)[2] == array_values($row)[3]){
               $row[plstatus] = 0;
               array_push($response, $row);
               $plname_ir = strval(array_values($row)[0]);
               $sql2 = "UPDATE ParkingLot SET plstatus=0 WHERE plname='" . $plname_ir . "'";
               $db->exec($sql2);
            }else{
                $row[plstatus] = 1;
                array_push($response, $row);
                $plname_ir2 = strval(array_values($row)[0]);
                $sql3 = "UPDATE ParkingLot SET plstatus=1 WHERE plname='" . $plname_ir2 . "'";
                $db->exec($sql3);
            } 
        }
        
        

    }
    catch(PDOException $e) {
          $response = "Error with connection.";
          exit();
    }


    $response = json_encode($response);
    header("Content-type: application/json");
    echo $response;
?>