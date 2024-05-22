$(document).ready(function() {
    $('#vehicle-form').submit(function(event) {
        event.preventDefault();
        let vehicleNumber = $('#vehicle-number').val();
        let vehicleColor = $('#vehicle-color').val();
         vehicleModel = $('#vehicle-model').val();
        let startInsuranceDate = new Date($('#start-insurance-date').val());
        let lastInsuranceDate = new Date($('#last-insurance-date').val());
        let wheelerType = $('#wheeler-type').val();

         currentDate = new Date();
         insuranceStatus = "Green";

        let daysUntilExpiration = Math.ceil((lastInsuranceDate - currentDate) / (1000 * 60 * 60 * 24));

        if (daysUntilExpiration < 0) {
            insuranceStatus = "Red";
        } else if (daysUntilExpiration <= 10) {
            insuranceStatus = "Yellow";
        }

   
        let vehicleData = {
            vehicleNumber: vehicleNumber,
            vehicleColor: vehicleColor,
            vehicleModel: vehicleModel,
            startInsuranceDate: startInsuranceDate.toDateString(),
            lastInsuranceDate: lastInsuranceDate.toDateString(),
            wheelerType: wheelerType,
            insuranceStatus: insuranceStatus
        };

      
        localStorage.setItem('vehicleData', JSON.stringify(vehicleData));

    
        let vehicleStatus = "<div class='vehicle-item " + insuranceStatus + "'>" +
            "<p>Vehicle Number: " + vehicleNumber + "</p>" +
            "<p>Vehicle Color: " + vehicleColor + "</p>" +
            "<p>Vehicle Model: " + vehicleModel + "</p>" +
            "<p>Start Insurance Date: " + startInsuranceDate.toDateString() + "</p>" +
            "<p>Last Insurance Date: " + lastInsuranceDate.toDateString() + "</p>" +
            "<p>Wheeler Type: " + wheelerType + " Wheeler</p>" +
            "<p>Insurance Status: <span class='" + insuranceStatus + "'>" + insuranceStatus + "</span></p>" +
            "</div>";

        $('#vehicle-list').append(vehicleStatus);
    });
});
