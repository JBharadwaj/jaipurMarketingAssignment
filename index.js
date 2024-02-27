function showSignupForm() {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("signupContainer").style.display = "block"; //block
    document.getElementById("content").style.display = "none";
}

function showLoginForm() {
    document.getElementById("signupContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "block";
    document.getElementById("content").style.display = "none";
}

function showContent() {
    document.getElementById("signupContainer").style.display = "none";
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("content").style.display = "block";
}

function saveFormData(event, formType) {
    event.preventDefault();

    let formId = (formType === 'login') ? 'loginForm' : 'signupForm';
    let formData = new FormData(document.getElementById(formId));
    let plainFormData = {};
    formData.forEach(function(value, key) {
        plainFormData[key] = value;
    });

    if (formType === 'login') {
        let userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            let find = userData.find(function(user) {
                return user.username === plainFormData.username && user.password === plainFormData.password;
            });
            if (find) {
                showContent();
                let headingEl = document.getElementById('heading');
                headingEl.textContent = "Hi! " + plainFormData.username;
                let headEl = document.getElementById('head');
                headEl.textContent = "What do you want to learn today " + plainFormData.username + "?";
            } else {
                alert('Invalid username or password. Please try again.');
            }
        } else {
            alert('No users found. Please sign up.');
        }
    } else {
        var newUser = {
            username: plainFormData.name, // Corrected: 'name' instead of 'username'
            password: plainFormData.password
        };

        var userData = JSON.parse(localStorage.getItem('userData')) || [];
        userData.push(newUser);
        localStorage.setItem('userData', JSON.stringify(userData));
        document.getElementById(formId).reset();
        showLoginForm();
    }
}




// Add event listeners to dots for navigation
// Add event listeners to dots for navigation
// Add event listeners to dots for navigation