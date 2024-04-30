document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var fullName = document.getElementById('registrationForm').querySelector('input[type="text"]').value;
    var email = document.getElementById('registrationForm').querySelector('input[type="email"]').value;
    var password = document.getElementById('registrationForm').querySelector('input[type="password"]').value;
    var confirmPassword = document.getElementById('registrationForm').querySelectorAll('input[type="password"]')[1].value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Here you can add code to process the registration form data
    // and then redirect the user to Google.com upon successful registration.
    window.location.href = "https://www.google.com"; // Redirect to Google.com
});
// Toggle password visibility for login and registration forms
document.querySelectorAll('.show-password').forEach(function(button) {
    button.addEventListener('click', function() {
        var passwordField = this.parentElement.querySelector('input[type="password"]');
        if (passwordField.type === "password") {
            passwordField.type = "text";
            this.textContent = "Hide Password";
        } else {
            passwordField.type = "password";
            this.textContent = "Show Password";
        }
    });
});
