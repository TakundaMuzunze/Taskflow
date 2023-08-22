const nameInput = document.getElementById('name-field');
const emailInput = document.getElementById('email-field');
const passwordInput = document.getElementById('pwd-field');
const inputFields = document.querySelectorAll('.text-field');
const submitButton  = document.getElementById('signup');
const errorMessage = document.getElementById('error');
const pwdErrorMessage = document.getElementById('error-pwd');
const nameErrorMessage = document.getElementById('error-name');
const emailErrorMessage = document.getElementById('error-email');

const userDetails = [];

const handleRegistration = (event) => {
    event.preventDefault();

    if (emailInput.value === "" && passwordInput.value === "" && nameInput.value === "") {
        emailInput.classList.add('text-field-error');
        nameInput.classList.add('text-field-error');
        passwordInput.classList.add('text-field-error');
        alert("Please fill out the form with your details to create an account");
        return false;
    }

    else if(nameInput === ""){
        nameErrorMessage.textContent = "Please enter your full name";
        nameInput.classList.add('text-field-error');
    }

    else if (emailInput.value === "" || !emailInput.value.includes("@")){
        emailErrorMessage.textContent = "Please enter a valid email address"
        emailInput.classList.add('text-field-error');
        return false;
    }

    else if (passwordInput.value.length < 7 || passwordInput === ""){
        pwdErrorMessage.textContent = "Password must be at least than 7 characters";
        passwordInput.classList.add('text-field-error');
        return false;
    }

    const user = {
        username: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    };

    userDetails.push(user);
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    window.location.href="taskflow.html";
};

submitButton.addEventListener("click", function(event){
    handleRegistration(event);
});