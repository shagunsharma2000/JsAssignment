$(document).ready(function() {
    $('#vehicle-form').submit(function(event) {
        event.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let dlNumber = $('#dl-number').val(); 
        let expireDate = new Date($('#expire-date-dl').val()); 
        
        let currentDate = new Date();
        let expirationStatus = "Green";
        
        let daysUntilExpiration = Math.ceil((expireDate - currentDate) / (1000 * 60 * 60 * 24));
        
        if (daysUntilExpiration < 0) {
            expirationStatus = "Red";
        } else if (daysUntilExpiration <= 10) {
            expirationStatus = "Yellow";
        }
        
        let dlStatus = {
            name: name,
            email: email,
            dlNumber: dlNumber,
            expireDate: expireDate.toDateString(),
            expirationStatus: expirationStatus
        };

      
        localStorage.setItem('dlStatus', JSON.stringify(dlStatus));

        let dlStatusHTML = "<div class='user'>" +
            "<p>Name: " + name + "</p>" +
            "<p>Email: " + email + "</p>" +
            "<p>DL Number: " + dlNumber + "</p>" +
            "<p>Expiration Date: " + expireDate.toDateString() + "</p>" +
            "<p style='color: " + expirationStatus + ";'>DL Status: " + expirationStatus + "</p>" +
            "</div>";
        
        $('#check-status').html(dlStatusHTML); 
    });

   
    let storedDlStatus = localStorage.getItem('dlStatus');
    if (storedDlStatus) {
        let dlStatus = JSON.parse(storedDlStatus);
        let dlStatusHTML = "<div class='user'>" +
            "<p>Name: " + dlStatus.name + "</p>" +
            "<p>Email: " + dlStatus.email + "</p>" +
            "<p>DL Number: " + dlStatus.dlNumber + "</p>" +
            "<p>Expiration Date: " + dlStatus.expireDate + "</p>" +
            "<p style='color: " + dlStatus.expirationStatus + ";'>DL Status: " + dlStatus.expirationStatus + "</p>" +
            "</div>";
        $('#check-status').html(dlStatusHTML); 
    }
});
