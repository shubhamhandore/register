function updateAmount() {
    var passtypeSelect = document.getElementById('tpass');
    var amountInput = document.getElementById('amount');
    var passPrices = {

        'stud-d': 35,
        'stud-w': 225,
        'stud-m': 750,
        'stud-y': 5000,

        'seni-d': 30,
        'seni-w': 200,
        'seni-m': 650,

        'passenger-d': 40,
        'passenger-w': 225,
        'passenger-m': 900,
        'passenger-y': 6500,
    };

    var selectedPass = passtypeSelect.value;

    amountInput.value = passPrices[selectedPass];
}

function validateForm() {
    return true;
}