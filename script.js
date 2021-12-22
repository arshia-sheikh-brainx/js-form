//select the form
const vForm = document.querySelector("#validationForm");

//select the form inputs
const inputs = document.querySelectorAll(".input");

// add event listener on each input
inputs.forEach(element => {
    element.addEventListener("keyup", (e) => { validateF(e); });
});

// checks for each input
var checks = {
    fname: true,
    lname: true,
    age: true,
    email: true,
    phone: true,
    password: true,
    confirmPassword: true
}

//validation function
function validateF(trigger) {

    let value = trigger.target.value; //value of input feild
    let id = trigger.target.id; //id of input feild

    //varable to get required feilds
    let email = document.getElementById("email");
    let lname = document.getElementById('lname');
    let fname = document.getElementById('fname');
    let age = document.getElementById('age');
  
    if (id == "fname") {
        nameVerification(trigger, value, id);

    }
    else if (id == "lname") {
        nameVerification(trigger, value, id);
    }
    else if (id == "age") {
        ageVerification(trigger, value, id);
    }
    else if (id == "phone") {
        phoneVerification(trigger, value, id);
    }
    else if (id == "email") {
        emailVerification(trigger, value, id);

    } else if (id == "password") {
        passwordVerification(trigger, value, id);
    } else if (id == "confirmPassword") {
        confirmPasswordVerification(trigger, value, id);
    }
    else {
        //do nothing
    }
    //check every feild
    document.getElementById("validationFormBtn").disabled = true;
    if (Object.values(checks).every(item => item === true)) {
        if (age.value != "" && lname.value != "" && fname.value != "" && email.value != "") {
            document.getElementById("validationFormBtn").disabled = false;
        }

    }

}
//checks both first and last name feilds 
function nameVerification(trigger, value, id) {

    let formContainer = trigger.target.parentNode;
    let messageBox = formContainer.querySelector(".message");
    if (value.length <= 0 || value == "") {
        messageBox.classList.add("text-danger");
        messageBox.textContent = "Please enter the text";
        checks[id] = false;
    } else {
        messageBox.classList.remove("text-danger");
        messageBox.textContent = "";
        checks[id] = true;
    }

}
//checks age 
function ageVerification(trigger, value, id) {

    let formContainer = trigger.target.parentNode;
    let messageBox = formContainer.querySelector(".message");
    if (value < 18 || value > 150 || value == "") {
        messageBox.classList.add("text-danger");
        if (value == "") {
            messageBox.textContent = " This feild cant be empty";
        } else {
            messageBox.textContent = "Age must be between 18 and 150 ";
        }
        checks[id] = false;
    } else {
        messageBox.classList.remove("text-danger");
        messageBox.textContent = "";
        checks[id] = true;

    }
}
// checks phone no
function phoneVerification(trigger, value, id) {
    let formContainer = trigger.target.parentNode;
    let messageBox = formContainer.querySelector(".message");
    if (value.length !== 11 && value.length > 0) {
        messageBox.classList.add("text-danger");
        messageBox.textContent = "Phone Number must be 11 digit Long";
        checks[id] = false;

    } else {
        messageBox.classList.remove("text-danger");
        messageBox.textContent = "";
        checks[id] = true;

    }

}
// checks email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function emailVerification(trigger, value, id) {
    let formContainer = trigger.target.parentNode;
    let messageBox = formContainer.querySelector(".message");
    let emails = value.split(',');
    for (let i = 0; i < emails.length; i++) {

        answer = validateEmail(emails[i]);
        if (!answer || value == "") {
            messageBox.classList.add("text-danger");
            if (value == "") {
                messageBox.textContent = " This feild cant be empty";
            } else {
                messageBox.textContent = " This is not the valid email emails should be comma seprated";
            }
            checks[id] = false;
            break;
        }
        else {
            messageBox.classList.remove("text-danger");
            messageBox.textContent = "";
            checks[id] = true;
        }
    }


}
function validatePassword(p) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(p);
}

//check password
function passwordVerification(trigger, value, id) {
    let formContainer = trigger.target.parentNode;
    let messageBox = formContainer.querySelector(".message");
    if (id == "password") {
        pass1 = value;
    }

    if (!validatePassword(value) || (value.length > 0 && value.length < 8)) {
        messageBox.classList.add("text-danger");
        messageBox.textContent = "Password should be minimum 8 character long and should contain 1 Uppercase 1 Lowercase and 1 Numeric value";
        checks[id] = false;
    }
    else {
        messageBox.classList.remove("text-danger");
        messageBox.textContent = "";
        checks[id] = true;
    }



}

//checks confirm password
function confirmPasswordVerification(trigger, value, id) {
    passwordVerification(trigger, value, id);
    let formContainer = trigger.target.parentNode;
    let messageBox = formContainer.querySelector(".message");
    if (pass1 != value) {
        messageBox.classList.add("text-danger");
        messageBox.textContent = "confirm password doesn't match";
        checks[id] = false;
    }
    else {
        messageBox.classList.remove("text-danger");
        messageBox.textContent = "";
        checks[id] = true;
    }

}
