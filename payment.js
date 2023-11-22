// Function to fill payment details from registration form
function fillPaymentDetails() {
    // Get values from the registration form
    var fullName = document.getElementById("fullName").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var email = document.getElementById("email").value;
  
    // Set values in the payment form
    document.getElementById("fullName").value = fullName;
    document.getElementById("mobileNumber").value = mobileNumber;
    document.getElementById("email").value = email;
  
    // Redirect to the payment page
    window.location.href = "payment.html";
  }
  