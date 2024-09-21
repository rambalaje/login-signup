const form = document.getElementById("form");
const username = document.getElementById("username");
const mailid = document.getElementById("mailid");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}




function checkRequired(inputs){
    inputs.forEach(input => {
        if(input.value.trim() === ""){
            errorMessage(input,`${getName(input)} is required`);
        }
        else{
            successMessage(input);
        }
        
    });
}
function errorMessage(input,message){
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    const p = formGroup.querySelector("p");
    p.innerHTML = message;
}

function successMessage(input){
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
    const p = formGroup.querySelector("p");
    p.innerHTML = '';
}
function getName(input){
    return input.id;
}

function checkLength(input,min,max){
    data = input.value.trim().length;
    if(data<min){
        errorMessage(input,`${getName(input)} must be greater than ${min} characters`);

    }
    else if(data>max){
        errorMessage(input,`${getName(input)} must be lesser than ${max} characters`);

    }
}

function checkEmail(input){
    if(!input.value.trim().isEmail()){
        errorMessage(input,`${getName(input)} is not an valid email address`)
    }
}

function checkConfirmpassword(password,confirmPassword){
    if(password.value!=confirmPassword.value){
        errorMessage(confirmPassword,`${getName(confirmPassword)} password dosen't match`)
    }
}





form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username,mailid,password,confirmPassword]);
    checkLength(username,5,15);
    checkLength(mailid,5,15);
    checkLength(password,5,15);
    checkLength(confirmPassword,5,15);
    checkEmail(mailid);
    checkConfirmpassword(password,confirmPassword);


});


