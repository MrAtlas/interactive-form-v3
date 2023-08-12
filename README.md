# interactive-form-v3
 Unit 3 of the techdegree


//Real-Time Input Validation (Extra Credit)

/*
creditCardInput.addEventListener('keyup', () => {
    cardValidation(creditCardInput, creditCardHint, creditCardLabelError);
})

nameElement.addEventListener('keyup', () => {
    validateName(nameElement, nameHintElement, nameLabelError);
})

emailElement.addEventListener('keyup', () => {
    validateEmail(emailElement, emailHintElement, emailLabelError);
})

zipcodeInput.addEventListener('keyup', () => {
    zipcodeValidation(zipcodeInput, zipcodeHint, zipcodeLabelError);
})

cvvInput.addEventListener('keyup', () => {
    cvvValidation(cvvInput, cvvHint, cvvLabelError);
})
*/

This will simply add an event listener to each input with the keyup event, calling it's function in real time as the user is typing



// validateEmail Function

The "validateEmail" function is used to validate an email input field based on a specific format using a regular expression.

// Parameters
emailElement: The HTML input element representing the email input field.
emailHint: The HTML element where error messages for the email validation will be displayed.
emailLabelError: The HTML element representing the label associated with the email input field, used to provide a visual indication of validation status.

Function 
The "validateEmail" function performs the following steps:

1. It uses a regular expression to test whether the email input value matches a specific email format.

2. If the email input is empty, it displays an error message, shows the error hint with the message "Cannot be ampty", and sets the label to have the class 'not-valid'. It returns "false" to indicate validation failure.

3. If the email input value doesn't match the expected format, it displays an error message, shows the error hint (original), and sets the label to have the class 'not-valid'. It returns "false" to indicate validation failure.

4. If the email input value is not empty and matches the expected format, it hides the error hint and sets the label to have the class 'valid'. It returns "true" to indicate successful validation.


