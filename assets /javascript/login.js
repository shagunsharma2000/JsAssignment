document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

  
    function generateSessionToken() {
        return Math.random().toString(36).substring(2);
    }

  
    var form = event.target;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
      
         emailInput = form.querySelector('#email');
         passwordInput = form.querySelector('#password');
       
         emailError = form.querySelector('#emailError');
         passwordError = form.querySelector('#passwordError');

       
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const hashPassword = window.btoa(password);
        const sessionToken = generateSessionToken();

      
        emailError.textContent = '';
        passwordError.textContent = '';

        if (!email || !password) {
            if (!email) emailError.textContent = 'Please enter email';
            if (!password) passwordError.textContent = 'Please enter password';
        } else if (password === 'Admin@123' && email === 'admin@gmail.com') {
            var adminData = { email: email, password: hashPassword, token: sessionToken };
            console.log('Saving to localStorage:', adminData);
            localStorage.setItem('currentAdmin', JSON.stringify(adminData));
            console.log('Data saved to localStorage:', localStorage.getItem('currentAdmin'));
            window.location.href = "../html/homepage.html";
        } else {
            alert("Incorrect username or password");
        }
    });
});
