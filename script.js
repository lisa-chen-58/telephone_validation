const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultsSection = document.getElementById("results-div");

const phoneRegex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

checkButton.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
  } else {
    const result = document.createElement('p');
    if (phoneRegex.test(userInput.value)) {
      result.id = "results-valid-div";
      result.innerText = `Valid US number: ${userInput.value}`;
    } else {
      result.id = "results-invalid-div";
      result.innerText = `Invalid US number: ${userInput.value}`;
    }
    resultsSection.appendChild(result);
  }
});

clearButton.addEventListener("click", () => {
  userInput.value = "";
  resultsSection.innerText = "";
  resultsSection.value = "";
});
