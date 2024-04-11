
/* 
  ftnSalutation is a conventional JS function
  it returns an array of strings where each
  element (or index) of the array consists
  of the salutations to pupulate inputSelect
  found in index.html
*/
function ftnSalutation() {
  //  implement your statement(s) here
  return new Array("Mr.", "Mrs.", "Ms.", "Dr.");
}

/* 
  ftnGreeting written as an ARROW function
  it uses the passed-in parameters to form
  a greeting to be returned to the function that
  calls it
*/
const ftnGreeting = (salutation, user) => {
  //  implement your statement(s) here (longer approach to store data first)
  const msg = "Hi " + salutation + " " + user + ".";
  return msg;
  // (shorter version) 
  // return "Hi " + salutation + " " + user + "."
}

/*
Complete the challenge statement below
Create the function validateInputs below
Hint: 
- validateInputs accepts two arguments (choice, name)
- name should include a default value name=""
- validateInputs returns false if either choice or name is incorrectly filled
- validateInputs returns true if both choice and name are correctly filled
*/

// Solution ONE
// function validateInputs(choice, name = "") {
//   if (choice == "")
//     return;

//   if (name == "")
//     return;

//   return true;
// }


// Solution TWO
// function validateInputs(choice, name = "") {
//   if (choice.length == 0)
//     return;

//   if (name.length == 0)
//     return;

//   return true;
// }

// Solution THREE
// if the choice is empty OR the name is empty, return the call prematurely.

function validateInputs(choice, name = "") {
  if (choice == "" || name == "")
    return;

  return true;
}

// Refactor the function to use a switch statement
// None:    "Thank you. No preference selected."
// Chicken: "The main course served is Chicken Cordon Bleu."
// Beef:    "The main course served is Beef Wellington."
// Others:  "We will contact you separately to arrange."

function ftnRadioMeal(meal) {
  //{ document.getElementById("displayPreference").textContent = meal;


  //using switch statement to provide the appropriate feedback to the user 

  switch (meal) {
    case "None":
      document.getElementById("displayPreference").textContent = "Thank you. No preference selected.";
      break;
    case "Chicken":
      document.getElementById("displayPreference").textContent = "The main course served is Chicken Cordon Bleu.";
      break;
    case "Beef":
      document.getElementById("displayPreference").textContent = "The main course served is Beef Wellington.";
      break;
    default: //triggered by selection of Vegetarian option as no statement assigned to it
      document.getElementById("displayPreference").textContent = "We will contact you separately to arrange.";
      break;
  }
}