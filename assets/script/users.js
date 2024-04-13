'use strict';

// Store the login credentials in localStorage
localStorage.setItem('username', 'fakeuser');
localStorage.setItem('password', 'fakepassword');

// Add an event listener to the login button
const loginButton = document.querySelector('button.btn.btn-primary');
loginButton.addEventListener('click', handleLogin);

function handleLogin(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the entered username and password from the login form
  const enteredUsername = document.getElementById('username').value;
  const enteredPassword = document.getElementById('password').value;

  // Check if the entered credentials match the stored credentials
  if (enteredUsername === localStorage.getItem('username') && 
  enteredPassword === localStorage.getItem('password')) {
    // Redirect the user to the homepage
    redirectToHomePage();
  } else {
    // Display an error message
    alert('Incorrect username or password');
  }
}

function redirectToHomePage() {
  window.location.href = 'home.html';
}
