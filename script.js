const userInput = document.querySelector("#user-input");
const checkButton = document.querySelector("#check-btn");
const clearButton = document.querySelector("#clear-btn");
const resultsSection = document.querySelector("#results-div");

const phoneRegex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

const resultsArray = []

document.querySelector('form').addEventListener("submit", (event) => {
  event.preventDefault();
});

checkButton.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
  } 
  else {
    
    const result = document.createElement('p');
    
    if (phoneRegex.test(userInput.value)) {
      result.id = "results-valid-div";
      result.innerText = `Valid US number: ${userInput.value}`;
    } 
    
    else {
      result.id = "results-invalid-div";
      result.innerText = `Invalid US number: ${userInput.value}`;
    }
    resultsArray.push(result);
    resultsSection.appendChild(result);
  }
});

clearButton.addEventListener("click", () => {
  userInput.value = "";
  resultsSection.innerText = "";
  resultsSection.value = "";
});
