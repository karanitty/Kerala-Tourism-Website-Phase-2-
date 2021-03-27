var email = document.getElementById("email_signup");
var email_error = document.getElementById("error_email_signup");
var name = document.getElementById("name_signup");
var password1 = document.getElementById("password_signup1");
var password_error1 = document.getElementById("error_password_signup1");
var password2 = document.getElementById("password_signup2");
var password_error2 = document.getElementById("error_password_signup2");
var number = document.getElementById("number_signup");
var number_error = document.getElementById("error_number_signup");
var regexp=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
var passexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
var mobexp1 = /^\d{10}$/;
var mobexp2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var flag_email = 0;
var flag_password1 = 0;
var flag_password2 = 0;
var flag_mobile = 0;

function emailchange(){
    if(regexp.test(email.value)==true){
        email_error.innerHTML = "Email ID is valid";
        email_error.style.color = "green";
        flag_email=1;
    }
    else{
        email_error.innerHTML = "Enter valid Email ID";
        email_error.style.color = "red";
        flag_email=0;
    }
}

function password1change(){
    if(password1.value.length<=3){
        password_error1.innerHTML = "Password is too short";
        password_error1.style.color = "red";
        password1.style.border = "2px solid red";
        flag_password1 = 0;
    }
    else if(password1.value.length<=7){
        password_error1.innerHTML = "Password is short";
        password_error1.style.color = "orange";
        password1.style.border = "2px solid orange";
        flag_password1 = 0;
    }
    else if(passexp.test(password1.value)){
        password_error1.innerHTML = "Valid Password";
        password_error1.style.color = "green";
        password1.style.border = "2px solid green";
        flag_password1 = 1;
    }
    else{
        password_error1.innerHTML = "Please contain minimum 8 characters with atleast one uppercase, one lowercase and one number";
        password_error1.style.color = "red";
        flag_password1 = 0;
    }
}

function password2change(){
    if(password1.value!=password2.value){
        password_error2.innerHTML = "The passwords are different";
        password_error2.style.color = "red";
        flag_password2=0;
    }
    else{
        password_error2.innerHTML = "The passwords are matching";
        password_error2.style.color = "green";
        flag_password2=1;
    }
}

function mobilechange(){
    if(mobexp1.test(number.value)){
        number_error.innerHTML = "Valid Mobile Number";
        number_error.style.color = "green";
        flag_mobile = 1;
    }
    else if(mobexp2.test(number.value)){
        number_error.innerHTML = "Valid Mobile Number";
        number_error.style.color = "green";
        flag_mobile = 1;
    }
    else{
        number_error.innerHTML = "Invalid Mobile Number";
        number_error.style.color = "red";
        flag_mobile = 0;
    }
}

function validation(){
    if ((flag_email==1)&&(flag_mobile==1)&&(flag_password1==1)&&(flag_password2==1)){
        return true;
    }
    else{
        return false;
    }
}