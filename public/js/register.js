/**
 * Created by hussain on 9/2/17.
 * /
$(document).ready(function() {
    $("#signup").click(function () {
        fname = $("#first_name").val();
        lname = $("#last_name").val();
        email = $("#email").val();
        pass = $("#password").val();
        // console.log(fname );
        if (fname !== "" && lname !=="" && email !== "" && pass !== "") {
           // console.log("helloooo");
            $.post("/signup",
                {
                    first_name: fname,
                    last_name : lname,
                    email: email,
                    password: pass
                },
                function (data) {
                    console.log(data);
                    if (data.status == '200') {
                        alert(data.data);
                        //document.loacation='/';
                        window.location.href = '/login';
                    } else {
                        //alert('error !!!!!'+data.status);
                        window.location.href = '/error';
                    }
                });
        }
    });

    $("#login").click(function(){
        email = $('#emailLogin').val();
        pass = $('#passwordLogin').val();
        if(email !=='' && pass !== ''){
            $.post("/login" ,
                {
                    emailLogin : email,
                    passwordLogin : pass
                },
                function(data){
                    if(data.status == '200'){
                      //  alert(' render the home page');
                        console.log(data.status);
                        window.location.href='/';
                    } else {
                      //  alert('error !!!!!'+data.status);
                        console.log(data.status);
                        window.location.href = '/error';
                    }
                });
        }
    });

  /*  $("#logout").click(function(){
        email = $('#emailLogin').val();
        //pass = $('#passwordLogin').val();
            //if(email !==''){
            $.delete("auth/logout" ,
                {
                    emailLogin : email
                },
                function(data){
                    if(data.status == '200'){
                        //  alert(' render the home page');
                        window.location.href='/';
                    } else {
                        //  alert('error !!!!!'+data.status);
                        window.location.href = '/error';
                    }
                });
        //}
    });* /
});*/