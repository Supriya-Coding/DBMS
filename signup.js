document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        // Store user credentials in localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.username === newUsername);

        if (userExists) {
            alert('Username already exists. Please choose another.');
        } else {
            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Signup successful! Redirecting to login page.');
            window.location.href = 'login.html';
        }
    });
});