const firstName = document.querySelector("#first_name"),
      lastName = document.querySelector("#last_name"),
      email = document.querySelector("#mail"),
      password = document.querySelector("#user_password"),
      phoneNumber = document.querySelector("#number"),
      confirmPassword = document.querySelector("#confirm_password"),
      errorFields = document.getElementsByClassName("error"),
      inputFields = document.querySelectorAll("input"),
      signUpButton = document.querySelector("#sign_up")

function checkIfThereIsNoValue(name, setter) {
    if (!name) {
        setter.setAttribute("status", "neutral");
    } else if (name < 2) {
        setter.setAttribute("status", "error");
    }
    else {
        setter.setAttribute("status", "success");
    }
    checkAllInput()
}

function checkEmailLength(mail, setter) {
    if (!mail) {
        setter.setAttribute("status", "neutral");
    } else if (mail < 7 || (email.value.includes("@") == false)) {
        setter.setAttribute("status", "error");
    } else {
        setter.setAttribute("status", "success");
    }
    checkAllInput()
}

function checkNumberLength(number, setter) {
    if (!number) {
        setter.setAttribute("status", "neutral");
    } else if (number < 10) {
        setter.setAttribute("status", "error");
    } else {
        setter.setAttribute("status", "success");
    }
    checkAllInput()
}

function checkPasswordLength(currentPassword, setter) {
    if (!currentPassword) {
        setter.setAttribute("status", "neutral");
    } else if (currentPassword < 7) {
        setter.setAttribute("status", "error");
    } else {
        setter.setAttribute("status", "success");
    }
    checkAllInput()
}

function matchPassword(verifyPassword) {
    if (!verifyPassword) {
        verifyPassword.setAttribute("status", "neutral");
    } else if (password.value === verifyPassword.value) {
        verifyPassword.setAttribute("status", "success");
    } else {
        verifyPassword.setAttribute("status", "error");
    }
    checkAllInput()
}

function checkSignUp() {
    if (signUpButton.getAttribute("status") == "error") {
        signUpButton.disabled = true;
    } else {
        signUpButton.disabled = false;
    }
}

function checkAllInput() {
    if (firstName.getAttribute("status") == "success" && lastName.getAttribute("status") == "success" && email.getAttribute("status") == "success"
    && phoneNumber.getAttribute("status") == "success" && password.getAttribute("status") == "success" && confirmPassword.getAttribute("status") == "success") {
        signUpButton.setAttribute("status", "success");
        checkSignUp()
    }
}
function main() {
    checkSignUp()
}

main()