function reverseString() {
    var input = document.getElementById("inputString");
    var output = document.getElementById("output");
    var inputStringValue = input.value;
    var reversedString = "";

    for(var i = inputStringValue.length - 1; i >= 0; i--) {
        reversedString = reversedString + inputStringValue[i];
    }
    output.innerHTML = "Reversed String is: " + reversedString;
}

function checkPalindrome() {
    var input = document.getElementById("inputNumbers");
    var output = document.getElementById("outputPalindrome");
    var inputNumbers = input.value;

    const isNumeric = /^\d+$/.test(inputNumbers);
    var i = inputNumbers;
    var c = 0, t;
    while (inputNumbers > 0) {
        t = inputNumbers % 10;
        c = c*10 + t;
        inputNumbers = Math.floor(inputNumbers / 10);
    }
    if (!isNumeric) {
        output.innerHTML = "Enter a valid numeric input.";
    } 
    else {
        if (c == i) {
            output.innerHTML = "It's a palindrome!";
        }
        else {
            output.innerHTML = "It's not a palindrome!";
        }
    }
}


function calculateTotal() {
    var subtotal = document.getElementById("subtotal");
    var tipPercentage = document.getElementById("tipPercentage");
    var totalAmount = document.getElementById("totalAmount");

    var subtotal = parseFloat(subtotal.value);
    var tipPercentage = parseFloat(tipPercentage.value);

    if (isNaN(subtotal) || isNaN(tipPercentage) || subtotal < 0 || tipPercentage < 0) {
        totalAmount.innerHTML = "Enter valid positive numbers for both subtotal and tip percentage.";
    } 
    else {
        var tipAmount = (tipPercentage / 100) * subtotal;
        var totalAmount = subtotal + tipAmount;
        totalAmount.innerHTML = `Total Amount (including tip) is: ${totalAmount.toFixed(2)}`;
    }
}