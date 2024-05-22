
function logout() {
    sessionStorage.clear(); 
    
    localStorage.clear();
    window.location.href = "../html/login.html"; 
    }
    
    function redirectToAddUser() {
    window.location.href = "../html/addUser.html";
    }
    
    document.getElementById("logoutButton").addEventListener("click", logout);
    document.getElementById("Add User").addEventListener("click", redirectToAddUser);