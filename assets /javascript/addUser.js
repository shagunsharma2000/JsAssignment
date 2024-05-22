document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('Add User');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const formData = {
            name: form.elements['name'].value,
            email: form.elements['email'].value,
            driverLicenceNumber: form.elements['driver licence number'].value,
            driverLicenceExpiryDate: form.elements['driver licence expiry date'].value,
            vehicleNumber: form.elements['vehicle number'].value,
            vehicleColor: form.elements['vehicle color'].value,
            vehicleModel: form.elements['vehicle model'].value,
            startInsuranceDate: form.elements['start insurance date'].value,
            lastInsuranceDate: form.elements['last insurance date'].value,
            wheelerType: form.elements['wheeler-type'].value
        };

     
        const jsonData = JSON.stringify(formData);

       
        localStorage.setItem('userData', jsonData);

      
        form.reset();

        alert('User data has been saved to local storage!');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const userData = localStorage.getItem('userData');
    if (userData) {
        const parsedData = JSON.parse(userData);
        const userDataDisplay = document.getElementById('user-data-display');
        userDataDisplay.innerHTML = `
            <p>Name: ${parsedData.name}</p>
            <p>Email: ${parsedData.email}</p>
            <p>Driver Licence Number: ${parsedData.driverLicenceNumber}</p>
            <p>Driver Licence Expiry Date: ${parsedData.driverLicenceExpiryDate}</p>
            <p>Vehicle Number: ${parsedData.vehicleNumber}</p>
            <p>Vehicle Color: ${parsedData.vehicleColor}</p>
            <p>Vehicle Model: ${parsedData.vehicleModel}</p>
            <p>Start Insurance Date: ${parsedData.startInsuranceDate}</p>
            <p>Last Insurance Date: ${parsedData.lastInsuranceDate}</p>
            <p>Wheeler Type: ${parsedData.wheelerType}</p>
            window.location.href = "../html/homepage.html";
        `;
       
    }
});
