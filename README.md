# ParkingLotApp
Can be found from: online.efecto.fi/ParkingLotApp

SQL for table:

CREATE TABLE ParkingLot (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    plname VARCHAR(30) NOT NULL,
    plstatus bit NOT NULL,
    pltotal int NOT NULL,
	  ploccupied int NOT NULL    
)
