/**
 * Created by ubuntu on 29/6/16.
 */
$(document).ready(function() {
    $("#logout").click(function () {

        $.get("/logout", function (data) {
            if (data == 'done') {
               // alert('data '+data);
                 location.href = "/index";
                // location.href = "http://www.google.com";
            }
        });
    });
});