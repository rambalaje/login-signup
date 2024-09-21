const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");


String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}


function checkRequired(inputs) {
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            errorMessage(input, `${getName(input)} is required`);
        } else {
            successMessage(input);
        }
    });
}

function getName(input) {
    return input.id; 
}

function errorMessage(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    const p = formGroup.querySelector("p");
    p.innerHTML = message;
}

function successMessage(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
    const p = formGroup.querySelector("p");
    p.innerHTML = "";
}

function checkLength(input, min, max) {
    const dataLength = input.value.trim().length;
    
    if (dataLength < min) {
        errorMessage(input, `${getName(input)} must be greater than ${min} characters`);
    } else if (dataLength > max) {  
        errorMessage(input, `${getName(input)} must be less than ${max} characters`); 
        successMessage(input); 
    }
}


function checkEmail(input){
    if(!input.value.trim().isEmail()){
        errorMessage(input, `${getName(input)} is not an valid email address`); 


    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkRequired([username, password]);
    checkLength(username, 5, 10);
    checkLength(password, 5, 10); 
    checkEmail(username);
});
