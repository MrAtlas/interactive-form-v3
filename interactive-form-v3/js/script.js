//MrAtlas

/**
 * 2)
 * So as first thing I am going to select the name field to give it focus automatically
 */

const nameInputField = document.getElementById('name');
nameInputField.focus();

/**
 * 3)
 * The input for the job title has a type text for the input other, this should be hidden by default and be shown
 * only if the users selects 'other' as option
 * I started by getting  the elements by their ID aand storing them in a variable
 * I then set the 'other-job-role' hidden by default
 * I added an event listener on the dropdown menu to listen for change
 * Using an if statement I checked if the select element value = to 'other'
 *      if so then set the element display property to an empty string
 *  else
 *      set it back to hidden
 */

const selectElementJobRole = document.getElementById('title');
const selectOtherJobRole = document.getElementById('other-job-role');

selectOtherJobRole.style.display = "none";

selectElementJobRole.addEventListener('change', () => {
    if(selectElementJobRole.value === 'other'){
        selectOtherJobRole.style.display = ""
    }else{
        selectOtherJobRole.style.display = "none";
    }
})


/**
 * 4)
 * Now we have to create some color and theme matches
 * I'll start by selecting the different elements design and color and labels
 * 
 * Then the color option should be disabled by default until a theme or design is choosen
 * I found  a way to disable a select element https://www.w3schools.com/jsref/prop_select_disabled.asp
 * 
 * I added an event listener to the design option
 * set the color option enabled as the design is selected
 * then using an if statement i checked if the value of design option is js puns or heart js
 * and set the display accordingly
 */

const designOption = document.getElementById('design');
const colorOption = document.getElementById('color');

colorOption.disabled = true;

designOption.addEventListener('change', () => {

    colorOption.disabled = false;

    if(designOption.value === 'js puns'){
        colorOption.options[1].style.display = "";
        colorOption.options[2].style.display = "";
        colorOption.options[3].style.display = "";
        colorOption.options[4].style.display = "none";
        colorOption.options[5].style.display = "none";
        colorOption.options[6].style.display = "none";
    }else if (designOption.value === 'heart js'){
        colorOption.options[1].style.display = "none";
        colorOption.options[2].style.display = "none";
        colorOption.options[3].style.display = "none";
        colorOption.options[4].style.display = "";
        colorOption.options[5].style.display = "";
        colorOption.options[6].style.display = "";
    }else{
        colorOption.disabled = true;
    }
})



/**
 * 5) (plus extra credit)
 * I started by getting the field set of the activity section
 * the total cost element and the checkboxes
 * 
 * made a totalCost variable that will hold the cost of all the activities 
 * a checkedActivities array 
 * set the totalCostElem text content to the total cost variable
 * 
 * adding an event listener for change
 * checkboxDataCost will get the checkbox cost and make it an Integer
 * the isChecked variable will check if the checkbox is actually checked
 * 
 * then the if statement will check the isChecked variable if it is
 *      add the checkbox dateAndTime value to the array
 *      then a for loop activity in checkboxes, if the activity is not the checkbox just checked, and the dateAndtime matches
 *          this will uncheck the activity
 *      update the total cost to the totalCost + the checkboxDataCost
 *  else
 *      I used a filter() method that compares for each item with dateAndTime
 *      totalcost is updated it to totalcost - the dataCost
 * 
 * Then I return the totalCostElement again
 */


const fieldsetActivity = document.getElementById('activities');
const totalCostElem = document.getElementById('activities-cost');
const checkboxes = fieldsetActivity.querySelectorAll('input[type="checkbox"]');

let totalCost = 0;
let checkedActivities = [];
totalCostElem.textContent = `Total: $${totalCost}`;

fieldsetActivity.addEventListener('change', (e) => {

    const checkbox = e.target;
    const checkboxDataCost = parseInt(checkbox.getAttribute('data-cost'));
    const dateAndTime = checkbox.getAttribute('data-day-and-time');

    const isChecked = checkbox.checked;

    if (isChecked){
        totalCost = totalCost + checkboxDataCost;
    }else {
        totalCost = totalCost - checkboxDataCost;
    }
    totalCostElem.textContent = `Total: $${totalCost}`;
})


/**
 * 6)
 * I stored the paymentOption in a variable
 * Stored the credicard, paypal and bitcoin div in variables
 * set the paypal and bitcoin div display none as default 
 * 
 * then added an event listener on the paymentOption 
 *      if the value of paymentOption is creditCard 
 *          set the paypal and bitcoin display none and credit-card display to empty string 
 *      else if value of paymentOption is paypal 
 *          set the credit-card and bitcoin display none and paypal display to empty string
 *      else if value of paymentOption is bitcoin
 *          set the paypal and credit-card display none and bitcoin display to empty string
 */


const paymentOption = document.getElementById('payment');

const creditCardDiv = document.getElementById('credit-card');
const paypalDiv = document.getElementById('paypal');
const bitcoinDiv = document.getElementById('bitcoin');

paypalDiv.style.display = 'none';
bitcoinDiv.style.display = 'none';


paymentOption.addEventListener('change', () => {
    if (paymentOption.value === 'credit-card'){
        creditCardDiv.style.display = '';
        paypalDiv.style.display = 'none';
        bitcoinDiv.style.display = 'none';
    }else if(paymentOption.value === 'paypal'){
        paypalDiv.style.display = '';
        bitcoinDiv.style.display = 'none';
        creditCardDiv.style.display = 'none';
    }else if (paymentOption.value === 'bitcoin'){
        paypalDiv.style.display = 'none';
        bitcoinDiv.style.display = '';
        creditCardDiv.style.display = 'none';
    }
})




/**
 * 7)
 * Form Validation 
 * 
 *  Created a function for each element to validate
 */

/**
 * used .trmi() to remove withe spaces
 * then with an if statement I checked if the input is empty
 *      return false and show the hint
 *  else
 *      hide the hint and return true
 */

/**
 * 10)
 * Visual Validation Errors
 */



function validateName (nameElement, hintElement, nameLabelError){
    const nameInput = nameElement.value.trim();
    if (nameInput === ''){
        hintElement.style.display = 'block';
        nameLabelError.className = "not-valid";
        return false;
    }
    nameLabelError.className = "valid";
    hintElement.style.display = 'none';
    return true;
}


/**
 * 
 * created a variable to hold the expression to format the email
 * then with an if statement I checked if the input is not equal to the format 
 *      return false and show the hint 
 *  else
 *      hid ehint and return true 
 */
function validateEmail (emailElement, emailHint, emailLabelError){
    const emailInput =  /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailElement.value);
    if (!emailInput){
        emailHint.style.display = 'block';
        emailLabelError.className = 'not-valid';
        return false;
    }
    emailHint.style.display = 'none';
    emailLabelError.className = 'valid';
    return true;
}

/**
 * Activities
 * 
 * I created a function that takes a selectActivity and a hint
 * then from the selectActivity i used querySelectorAll to get all the inputs
 * with a for loop i checked if each one has been checked, if one has
 *      then hide the hint and return true
 * the function returns false and shows the hint
 */

function validateActivities(selectActivity, activityHint, activitiesError){
    const checkboxes = selectActivity.querySelectorAll('input[type="checkbox"]');
    
    for (let i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked){
            activityHint.style.display = 'none';
            activitiesError.className = 'valid';
            return true;
        }
    }
    activityHint.style.display = 'block';
    activitiesError.className = 'not-valid';
    return false;
}

/**
 * Payment
 * 
 * I made a function that takes an input and the hint 
 * it formats the card input to digits from 0 to 9 and i use the test method passing the value of the input
 * then it checkes if the inout is correct it goes to another check
 * if the length of the inout is more or equal to 13 and less or equal to 16
 *      hide the hint and return true
 *  else show the hint and return false
 * 
 *  Did the same thing for card, zipcode and cvv
 * Basically i just copied and pasted changing the variables
 *      
 */

function cardValidation(creditCardInput, creditCardHint, creditCardLabelError){

    const formatedCard = /^[0-9]+$/.test(creditCardInput.value); 

    if (formatedCard){
        if(creditCardInput.value.length >= 13 && creditCardInput.value.length <= 16){
            creditCardHint.style.display = 'none';
            creditCardLabelError.className = 'valid';
            return true;
        }else{
            creditCardHint.style.display = 'block';
            creditCardLabelError.className = 'not-valid';
            return false;
        }
        
    }else{
        creditCardHint.style.display = 'block';
        creditCardLabelError.className = 'not-valid';
        return false;
    }

    
}

function zipcodeValidation(zipcodeInput, zipcodeHint, zipcodeLabelError){

    const formatZipcode = /^[0-9]+$/.test(zipcodeInput.value); 

    if (formatZipcode){
        if(zipcodeInput.value.length === 5){
            zipcodeHint.style.display = 'none';
            zipcodeLabelError.className = 'valid';
            return true;
        }else{
            zipcodeHint.style.display = 'block';
            zipcodeLabelError.className = 'not-valid';
            return false;
        }
        
    }else{
        zipcodeHint.style.display = 'block';
        zipcodeLabelError.className = 'not-valid';
        return false;
    }

    
}

function cvvValidation(cvvInput, cvvHint, cvvLabelError){

    const cvvFormat = /^[0-9]+$/.test(cvvInput.value); 

    if (cvvFormat){
        if(cvvInput.value.length === 3){
            cvvHint.style.display = 'none';
            cvvLabelError.className = 'valid';
            return true;
        }else{
            cvvHint.style.display = 'block';
            cvvLabelError.className = 'not-valid';
            return false;
        }
        
    }else{
        cvvHint.style.display = 'block';
        cvvLabelError.className = 'not-valid';
        return false;
    }

    
}

//All the inputs and hints
const form = document.querySelector('form');

const nameElement = document.getElementById('name');
const nameHintElement = document.getElementById('name-hint');

const emailElement = document.getElementById('email');
const emailHintElement = document.getElementById('email-hint');

const activities = document.getElementById('activities-box');
const activityHint = document.getElementById('activities-hint');

const creditCardInput = document.getElementById('cc-num');
const creditCardHint = document.getElementById('cc-hint');

const zipcodeInput = document.getElementById('zip');
const zipcodeHint = document.getElementById('zip-hint');

const cvvInput = document.getElementById('cvv');
const cvvHint = document.getElementById('cvv-hint');

//all the labels for errors
const nameLabelError = nameInputField.parentNode;
const emailLabelError = emailElement.parentNode;
const activitiesError = document.getElementById('activities');
const creditCardLabelError = creditCardInput.parentNode;
const zipcodeLabelError = zipcodeInput.parentNode;
const cvvLabelError = cvvInput.parentNode;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateName(nameElement, nameHintElement, nameLabelError);
    validateEmail(emailElement, emailHintElement, emailLabelError);
    validateActivities(activities, activityHint, activitiesError);
    cardValidation(creditCardInput, creditCardHint, creditCardLabelError);
    zipcodeValidation(zipcodeInput, zipcodeHint, zipcodeLabelError);
    cvvValidation(cvvInput, cvvHint, cvvLabelError);
})



/**
 * 8)
 * Focus on Activity
 * 
 * This was tricky but it works
 * saved the activity checkboxes by selecting all the inputs in the dom of type checkboxes
 * and the lables by getting the class activities label
 * 
 * Looping through the checkboxes I added to each one 
 * focus event listener and if it's focused then add the className focus
 * blur event listener if the event triggeres it will remove the class name
 * 
 * credits: 
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
 * https://www.w3schools.com/howto/howto_js_remove_class.asp
 * https://stackoverflow.com/questions/10908212/select-all-checkbox-by-javascript-or-console
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
 */


const checkboxesActivity = document.querySelectorAll('input[type="checkbox"]');
const activityLabels = document.querySelectorAll('.activities label');

//console.log(checkboxesActivity, activityLabels);

for (let i = 0; i < checkboxesActivity.length; i++){
    checkboxesActivity[i].addEventListener('focus', (e) => {
        if(e){
            activityLabels[i].className = 'focus';
        }
    })
    checkboxesActivity[i].addEventListener('blur', (e) => {
        if(e){
            activityLabels[i].classList.remove('focus');
        }
    })
}



