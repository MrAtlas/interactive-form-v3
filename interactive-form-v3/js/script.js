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
 * 5)
 * I started by getting the field set of the activity section
 * then the total cost element
 * I then created a variable total cost and set it to 0
 * updated the text content of the lement total cost replacing the string 0 to the totalCost variable
 * 
 * I added an event listener to the fieldset 
 *      I then set the target to the checkbox
 *      and stored the data-cost attribute in a variable and used parseInt to make it an int
 *      I also created another variable called isChecked to store the checkbox check
 *      if it is checked add the value of data-cost to the totalCost
 *      else if is unchecked subtract from it
 *      I then updated the totalCostElem again with the new value
 */


const fieldsetActivity = document.getElementById('activities');
const totalCostElem = document.getElementById('activities-cost');

let totalCost = 0;

totalCostElem.textContent = `Total: $${totalCost}`;

fieldsetActivity.addEventListener('change', (e) => {

    const checkbox = e.target;
    const checkboxDataCost = parseInt(checkbox.getAttribute('data-cost'));

    const isChecked = checkbox.checked;

    if (isChecked){
        totalCost = totalCost + checkboxDataCost;
    }else if (!isChecked){
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
function validateName (nameElement, hintElement){
    const nameInput = nameElement.value.trim();
    if (nameInput === ''){
        hintElement.style.display = 'block';
        return false;
    }
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
function validateEmail (emailElement, emailHint){
    const emailInput =  /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailElement.value);
    if (!emailInput){
        emailHint.style.display = 'block';
        return false;
    }
    emailHint.style.display = 'none';
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

function validateActivities(selectActivity, activityHint){
    const checkboxes = selectActivity.querySelectorAll('input[type="checkbox"]');
    
    for (let i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked){
            activityHint.style.display = 'none';
            return true;
        }
    }
    activityHint.style.display = 'block';
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

function cardValidation(creditCardInput, creditCardHint){

    const formatedCard = /^[0-9]+$/.test(creditCardInput.value); 

    if (formatedCard){
        if(creditCardInput.value.length >= 13 && creditCardInput.value.length <= 16){
            creditCardHint.style.display = 'none';
            return true;
        }else{
            creditCardHint.style.display = 'block';
            return false;
        }
        
    }else{
        creditCardHint.style.display = 'block';
        return false;
    }

    
}

function zipcodeValidation(zipcodeInput, zipcodeHint){

    const formatZipcode = /^[0-9]+$/.test(zipcodeInput.value); 

    if (formatZipcode){
        if(zipcodeInput.value.length === 5){
            zipcodeHint.style.display = 'none';
            return true;
        }else{
            zipcodeHint.style.display = 'block';
            return false;
        }
        
    }else{
        zipcodeHint.style.display = 'block';
        return false;
    }

    
}

function cvvValidation(cvvInput, cvvHint){

    const cvvFormat = /^[0-9]+$/.test(cvvInput.value); 

    if (cvvFormat){
        if(cvvInput.value.length === 3){
            cvvHint.style.display = 'none';
            return true;
        }else{
            cvvHint.style.display = 'block';
            return false;
        }
        
    }else{
        cvvHint.style.display = 'block';
        return false;
    }

    
}

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

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateName(nameElement, nameHintElement);
    validateEmail(emailElement, emailHintElement);
    validateActivities(activities, activityHint);
    cardValidation(creditCardInput, creditCardHint);
    zipcodeValidation(zipcodeInput, zipcodeHint);
    cvvValidation(cvvInput, cvvHint);
})



/**
 * 8)
 * Focus on Activity
 * 
 * 
 */





