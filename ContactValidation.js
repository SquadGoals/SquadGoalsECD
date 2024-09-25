const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const messagebox = document.getElementById('messagebox');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const messageboxValue =messagebox.value.trim();
   

    if(usernameValue === '') {
        setError(username, 'Username is required');

    }
     else if (usernameValue.length  < 6)
     {
        setError(username, 'Please enter your full name and surnmame ');
     }
    
    else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(messageboxValue === '') {
        setError(messagebox, 'message is required');
    } 
    else if (messageboxValue.length > 100)
  {
    setError(messagebox, 'You have reached the text limit, characters should not be more than 100');
  }
    
    else {
        setSuccess(messagebox);
    }

    

};