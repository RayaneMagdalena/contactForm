// select elements from html
const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const button = document.querySelector('button');

// disable submit button
button.disabled = true;

// VALIDATIONS

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!isNameValid(nameInput.value)) {
        alert('Please fill in First and Last Name');
        return;
    }

    if (!isEmailValid(emailInput.value)) {
        alert('Please enter a valid email');
        return;
    }

    if (!isMessageValid(messageInput.value)) {
        alert('Send a message with at least 20 characters');
        return;
    }

    form.submit();
});

// Checks if the name is valid
function isNameValid(name) {
    const nameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
    return nameRegex.test(name);
}

// Check if the email is valid
function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
}

// Checks if the message is valid
function isMessageValid(message) {
    return message.length >= 20;
}

// ENABLE BUTTON

//  Enable button - Inputs
function checkInputs(inputs) {
    return Array.from(inputs).every(input => input.value !== "");
}

const inputs = document.querySelectorAll("input");
inputs.forEach(input => {

    input.addEventListener("keyup", () => {
        button.disabled = !checkInputs(inputs) || !checkCheckbox(checkboxes);
    });
});


// Enable button - Checkbox
function checkCheckbox(checkboxes) {
    return Array.from(checkboxes).some((checkbox) => checkbox.checked);
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {

    checkbox.addEventListener('change', () => {
        button.disabled = !checkInputs(inputs) || !checkCheckbox(checkboxes);
    });
});

// SAVE TO LOCALSTORAGE

// Input
form.addEventListener('submit', () => {
    const data = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };

    localStorage.setItem('userData', JSON.stringify(data));

});

//   Checkbox

function saveSelectedInterests() {
    const selectedInterests = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedInterests.push(checkbox.id);
        }
    });

    localStorage.setItem('selectedInterests', JSON.stringify(selectedInterests));
}

form.addEventListener('submit', () => {
    saveSelectedInterests();
});