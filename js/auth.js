const emailInput = document.getElementById('email-field');
const passwordInput = document.getElementById('pwd-field');
const submitButton  = document.getElementById('signup');
const errorMessage = document.getElementById('error');

const userDetails = [];

const registration = (event) => {
    event.preventDefault();

    if (emailInput.value === "" && passwordInput.value === "") {
        errorMessage.textContent = "Please fill out the form with your details";
        return false;
    }

    else if (emailInput.value === "" || !emailInput.value.includes("@")){
        errorMessage.textContent = "Please enter a valid email address";
        return false;
    }

    else if (passwordInput.value.length < 7 || passwordInput === ""){
        errorMessage.textContent = "Password must be at least than 7 characters";
        return false;
    }

    const user = {
        username: emailInput.value,
        password: passwordInput.value,
    };

    userDetails.push(user);
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    window.location.href="taskflow.html";
};

submitButton.addEventListener("click", function(event){
    registration(event);
});