// GET THE FORM ELEMENTS

var contactForm = document.getElementById("contactForm");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var messageInput = document.getElementById("message");
var formMessage = document.getElementById("formMessage");

// VALIDATE THE FORM WHEN SUBMITTED

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var phone = phoneInput.value.trim();
    var message = messageInput.value.trim();

    // CHECK FOR EMPTY FIELDS

    if (name === "" || email === "" || phone === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
    }

    // CHECK EMAIL FORMAT

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    // CHECK THAT PHONE CONTAINS ONLY DIGITS

    var phonePattern = /^[0-9]+$/;

    if (!phonePattern.test(phone)) {
        formMessage.textContent = "Phone number must contain digits only.";
        formMessage.style.color = "red";
        return;
    }

    // DISPLAY SUCCESS MESSAGE

    formMessage.textContent = "Your form has been submitted successfully!";
    formMessage.style.color = "green";

    contactForm.reset();

});