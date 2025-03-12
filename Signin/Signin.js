document.getElementById('signin-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const staySignedIn = document.getElementById('stay-signed-in').checked;

    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    const fakeUser = {
        username: "testuser",
        password: "test123"
    };

    if (username === fakeUser.username && password === fakeUser.password) {
        successMessage.innerText = 'Sign In Successful!';
        successMessage.style.display = 'block';
        if (staySignedIn) {
            localStorage.setItem('staySignedIn', 'true');
        }
        setTimeout(() => {
            window.location.href = '../Home/Home.html';
        }, 1500); 
    } else {
        errorMessage.innerText = 'Invalid username or password.';
        errorMessage.style.display = 'block';
    }
});