var email = document.getElementById("email_signin");
var email_error = document.getElementById("error_email_signin");
var password = document.getElementById("password_signin");
var password_error = document.getElementById("error_password_signin");
var regexp=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
var passexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

var flag_email = 0;
var flag_password = 0;

function emailcheck(){
    if(regexp.test(email.value)==true){
        email_error.innerHTML = "";
        flag_email=1;
    }
    else{
        email_error.innerHTML = "Incorrect Email Format";
        email_error.style.color = "red";
        flag_email=0;
    }
}

function passwordcheck(){
    if(passexp.test(password.value)){
        password_error.innerHTML = "";
        flag_password = 1;
    }
    else{
        password_error.innerHTML = "Incorrect Password Format";
        password_error.style.color = "red";
        flag_password = 0;
    }
}


function validation(){
    if ((flag_email==1)&&(flag_password==1)){
        return true;
    }
    else{
        return false;
    }
}