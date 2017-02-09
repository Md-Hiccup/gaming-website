/**
 * Created by hussain on 9/2/17.
 */
$(document).ready(function() {
    $("#signup").click(function () {
        fname = $("#first_name").val();
        lname = $("#last_name").val();
        email = $("#email").val();
        pass = $("#password").val();
        // console.log(fname );
        if (fname !== "" && lname !=="" && email !== "" && pass !== "") {
            console.log("helloooo");
            $.post("/auth/signup",
                {
                    first_name: fname,
                    last_name : lname,
                    email: email,
                    password: pass
                },
                function (data) {
                    console.log(data);
                    if (data.status == '200') {
                        alert("Email is registered");
                        window.location.href = "/";
                    } else {
                        alert('error !!!!!'+data.status);
                        window.location.href = '/error';
                    }
                });
        }
    });

    $("#login").click(function(){
        email = $('#emailLogin').val();
        pass = $('#passwordLogin').val();
        if(email !=='' && pass !== ''){
            $.post("/auth/login" ,
                {
                    emailLogin : email,
                    passwordLogin : pass
                },
                function(data){
                    if(data.status == '200'){
                        alert(' render the home page');
                        window.location.href='/about';
                    } else {
                        alert('error !!!!!'+data.status);
                        window.location.href = '/error';
                    }
                });
        }
    });
});