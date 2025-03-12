document.getElementById('is-student').addEventListener('change', function () {
    const universityIdGroup = document.getElementById('university-id-group');
    if (this.checked) {
        universityIdGroup.style.display = 'block';
    } else {
        universityIdGroup.style.display = 'none';
    }
});

document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const isStudent = document.getElementById('is-student').checked;
    const universityId = document.getElementById('university-id').value;

    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    if (isStudent && !universityId) {
        errorMessage.innerText = "Please enter your University ID.";
        errorMessage.style.display = 'block';
        return;
    }

    const user = {
        username,
        password,
        isStudent,
        universityId
    };
    localStorage.setItem('user', JSON.stringify(user));
    successMessage.innerText = 'Sign Up Successful!';
    successMessage.style.display = 'block';

    setTimeout(() => {
        window.location.href = '../Signin/Signin.html';
    }, 1500);
});