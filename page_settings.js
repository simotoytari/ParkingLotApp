$(document).ready(function() {
    var checkConnection = function() {
        $.ajax({
            type: "POST",
            cache: false,
            url: "Serverside/connection_db.php",
            crossDomain: true,
            contentType: "application/json; charcet=utf-8",
            dataType: "json",
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            },
        });
    };

    checkConnection();
});