// # TODO: Form Validation

const form = document.getElementById('form');
const username = document.getElementById('username');
const first_name = document.getElementById('first_name');
const middle_name = document.getElementById('middle_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const language = document.getElementById('language');
const pincode = document.getElementById('pincode');
const mentor_pincode = document.getElementById('mentor_pincode');
const address = document.getElementById('address');
const contact_number = document.getElementById('contact_number');
const pancard = document.getElementById('pancard');
const pancard_number = document.getElementById('pancard_number');

const pattern = /^[^ ]+@[^ ]+\.[a-z](2,3)$/;

function getCookie (name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// form.addEventListener('submit', (e) => {


//     // Checking all inputs
//     is_error = checkInputs();

//     // if (!is_error) {
//     //     e.preventDefault();
//     // }

//     // return is_error;

// });


function checkInputs() {

    var returnVal = true;

    // Get the Values From the inputs
    const username_value = username.value.trim();
    console.log('Username : ', username_value);

    const first_name_value = first_name.value.trim();
    const middle_name_value = middle_name.value.trim();
    const last_name_value = last_name.value.trim();
    const email_value = email.value.trim();
    const password1_value = password1.value.trim();
    const password2_value = password2.value.trim();
    const language_value = language.value;
    const pincode_value = pincode.value.trim();
    const address_value = address.value;
    const contact_number_value = contact_number.value.trim();
    const mentor_pincode_value = mentor_pincode.value.trim();

    const pancard_value = pancard.value;
    const pancard_number_value = pancard_number.value.trim();

    if (username_value === '') {
        // Show error 
        // add error class
        setErrorFor(username, 'Username cannot be blank.');
        returnVal = false;
    } else {
        // add success class
        setSuccessFor(username);
    }

    if (first_name_value === '') {
        setErrorFor(first_name, 'First name cannot be blank.');
        returnVal = false;
    } else if (first_name_value.length < 3 | first_name_value.length > 15) {
        setErrorFor(first_name, 'Type correct first name.');
        returnVal = false;
    } else if (!isAlphaNumeric(first_name_value)) {
        setErrorFor(first_name, 'First name should contains only letters.');
        returnVal = false;
    } else {
        setSuccessFor(first_name);
    }

    if (middle_name_value === '') {
        setErrorFor(middle_name, 'Middle name cannot be blank.');
        returnVal = false;
    } else if (middle_name_value.length < 3 | middle_name_value.length > 15) {
        setErrorFor(middle_name, 'Type correct middle name.');
        returnVal = false;
    } else if (!isAlphaNumeric(middle_name_value)) {
        setErrorFor(middle_name, 'Middle name should contains only letters.');
        returnVal = false;
    } else {
        setSuccessFor(middle_name);
    }

    if (last_name_value === '') {
        setErrorFor(last_name, 'Last name cannot be blank.');
        returnVal = false;
    } else if (last_name_value.length < 3 | last_name_value.length > 15) {
        setErrorFor(last_name, 'Type correct last name.');
        returnVal = false;
    } else if (!isAlphaNumeric(last_name_value)) {
        setErrorFor(last_name, 'Last name should contains only letters.');
        returnVal = false;
    } else {
        setSuccessFor(last_name);
    }

    if (email_value === '') {
        email.innerText = 'Please fill email';
        setErrorFor(email, 'Email cannot be blank');
        returnVal = false;
    } else if (!isEmail(email_value)) {
        setErrorFor(email, 'Email is not Valid.');
        returnVal = false;
    } else {
        setSuccessFor(email);
    }

    if (password1_value === '') {
        setErrorFor(password1, 'Enter password');
        returnVal = false;
    } else if (password1_value.length < 8) {
        setErrorFor(password1, 'Minimum 8 character required.');
        returnVal = false;
    } else {
        setSuccessFor(password1);
    }

    if (password2_value === '') {
        setErrorFor(password2, 'Enter password');
        returnVal = false;
    } else if (password2_value.length < 8) {
        setErrorFor(password2, 'Minimum 8 character required.');
        returnVal = false;
    } else {
        setSuccessFor(password2);
    }

    if (password2_value === '') {
        setErrorFor(password2, 'Enter password');
        returnVal = false;
    } else if (password2_value != password1_value) {
        setErrorFor(password2, 'Passwords does not match.');
        returnVal = false;
    } else {
        setSuccessFor(password2);
        setSuccessFor(password1);
    }

    if (pincode_value === '') {
        setErrorFor(pincode, 'Pincode cannot be blank.');
        returnVal = false;
    } else if (pincode_value.length < 6 | pincode_value.length > 6) {
        setErrorFor(pincode, 'Type valid pincode.');
        returnVal = false;
    } else {
        setSuccessFor(pincode);
    }
    if (mentor_pincode_value){
        if (mentor_pincode_value.length < 6 | mentor_pincode_value.length > 6) {
            setErrorFor(mentor_pincode, 'Invalid Referrence Mentor code');
            returnVal = false;
        } else {
            setSuccessFor(mentor_pincode);
        }
    }
    

    if (language_value === '') {
        setErrorFor(language, 'language cannot be blank.');
        returnVal = false;
    }

    if (address_value === '' ) {
        setErrorFor(address, 'Address cannot be blank.');
        returnVal = false;
    } else {
        setSuccessFor(address);
    }

    if (contact_number_value === '') {
        setErrorFor(contact_number, 'Contact cannot be blank.');
        returnVal = false;
    } else if (isAlphaNumeric(contact_number_value)) {
        setErrorFor(contact_number, 'Contact number should be of 10 digits');
        returnVal = false;
    } else if (contact_number_value.length < 10 | contact_number_value.length > 10) {
        setErrorFor(contact_number, 'Contact number should be of 10 digits');
        returnVal = false;
    } else {
        setSuccessFor(contact_number);
    }

    // if (pancard_value === '') {
    //     setErrorFor(pancard, 'Pancard Required.');
    //     returnVal = false;
    // } else {
    //     setSuccessFor(pancard);
    // }

    if (pancard_number_value === '') {
        setErrorFor(pancard_number, 'Pancard Number cannot be blank.');
        returnVal = false;
    } else if (pancard_number_value.length < 10 | pancard_number_value.length > 10) {
        setErrorFor(pancard_number, 'Pancard Number should be of 10 digits.');
        returnVal = false;
    } else if (isAlphaNumeric(pancard_number_value)) {
        setErrorFor(pancard_number, 'Pancard Number is Aplhanumeric code.');
        returnVal = false;
    } else {
        setSuccessFor(pancard_number);
    }

    if (!form.terms.checked) {
        alert("Please indicate that you accept the Terms and Conditions");
        form.terms.focus();
        return false;
    }

    return returnVal;

}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error message 
    small.innerText = message;
    formControl.className = 'form-controls error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-controls success';
}

// Email Checking 
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isAlphaNumeric(input) {
    return /^[A-Za-z]+$/.test(input);
}