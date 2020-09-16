$(document).ready(function() {
    var timerId = 0;

    var checkDatabaseAgain = function() {
        timerId = setInterval(function() {
            checkConnection();
        }, 20000);
    };

    var checkConnection = function() {
        $.ajax({
            type: "GET",
            cache: false,
            url: "Serverside/connection_db.php",
            dataType: "json",
            success: function(response) {
                //console.log(response);
                $(".table").empty();
                $(".table").append(
                    '<tr>',
                    '<th>Parking Lot Name</th>',
                    '<th>Parking Lot Status</th>',
                    '<th>Total amount of parking spaces</th>',
                    '<th>Occupied parking spaces</th>',
                    '</tr>'
                );
                //data fetched successfully from database
                for (var i = 0; i < response.length; i++) {
                    if (response[i].plstatus == 1) response[i].plstatus = "Open";
                    else response[i].plstatus = "Closed";
                    $(".table").append(
                        '<tr>',
                        '<td>' + response[i].plname + '</td>',
                        '<td>' + response[i].plstatus + '</td>',
                        '<td>' + response[i].pltotal + '</td>',
                        '<td>' + response[i].ploccupied + '</td>',
                        '</tr>'
                    );
                }

            },
            error: function(error) {
                console.log(error);
            },
            complete: function() {
                clearInterval(timerId);
                //checkDatabaseAgain();
                console.log("Check database updates.");
            }
        });
    };
    //redirect page to https:// if it's not already 
    /*REMOVED (switched index.html to .php and placed the code there.)
    $.get("Serverside/redirect_https.php", function(response) {
        //console.log(response);
    });*/
    checkConnection();
});
