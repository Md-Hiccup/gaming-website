/**
 * Created by ubuntu on 29/6/16.
 */
$(document).ready(function(){
    var email,pass;
    $("#login").click(function(){
        email=$("#email").val();
        pass=$("#password").val();
        if(email !== "" && pass !== "" ){
                 console.log("helo");
           $.post("/auth/login",{email : email,password :pass  },
                 function(data){
                     if(data.status === '200') {
                        console.log(data);
                         $(location).attr('href',"/");
                     }
                  }); 
           }
           /* else {            
            $.get("/login",function(data){
                alert('Enter values');
                location.href = "/home";
           });
        }  */
    });

    $("#register").click(function(){

        $.get("/register" ,  function(data){
            location.href = "/register";
          });
    });
});