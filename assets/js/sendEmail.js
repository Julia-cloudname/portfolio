// function sendMail(contactForm) {
//     emailjs.send("service_7x3q052", "template_ab4xh13", {
//         "from_name": contactForm.name.value,
//         "from_email": contactForm.emailaddress.value,
//         "project_request": contactForm.projectsummary.value
//     })
//     .then(
//         function(response) {
//             console.log("SUCCESS", response);
//         },
//         function(error) {
//             console.log("FAILED", error);
//         }
//     );
    
//     return false;  // To block from loading a new page
// }

function validateForm(form) {
    let isValid = true;

    let nameField = form.querySelector('#fullname');
    if (nameField.value.trim() === '') {
        alert('Please enter your name.');
        isValid = false;
    }

    let emailField = form.querySelector('#emailaddress');
    if (emailField.value.trim() === '') {
        alert('Please enter your email address.');
        isValid = false;
    } else if (!isValidEmail(emailField.value)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    let subjectField = form.querySelector('#subject');
    if (subjectField.value.trim() === '') {
        alert('Please enter the subject.');
        isValid = false;
    }

    let projectSummaryField = form.querySelector('#projectsummary');
    if (projectSummaryField.value.trim() === '') {
        alert('Please enter your project description.');
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function sendMail(contactForm) {
    if (validateForm(contactForm)) {
        emailjs.send("service_7x3q052", "template_ab4xh13", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                displaySuccessMessage();
            },
            function(error) {
                console.log("FAILED", error);
                displayErrorMessage();
            }
        );
    }
    
    return false;   
}

function displaySuccessMessage() {
    const formContainer = document.getElementById("form-container");
    formContainer.innerHTML = '<div class="success-message">Your message has been sent. Thank you!</div>';
    const successMessage = formContainer.querySelector('.success-message');
    successMessage.style.color = '#3c9e59';  
    successMessage.style.textAlign = 'center';  
}

function displayErrorMessage() {
    const formContainer = document.getElementById("form-container");
    formContainer.innerHTML = '<div class="error-message">Failed to send the message. Please try again later.</div>';
    const errorMessage = formContainer.querySelector('.error-message');
    errorMessage.style.color = '#ed3c0d';  
    errorMessage.style.textAlign = 'center';  
}
