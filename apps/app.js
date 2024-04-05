// Initialization of global variables
let equalPressed = 0;
let buttonInput = document.querySelectorAll(".button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

// Reset input field on window load
window.onload = () => {
  input.value = "";
};

// Append button values to input field
buttonInput.forEach((buttonClass) => {
  buttonClass.addEventListener("click", () => {
    if (equalPressed === 1) {
      equalPressed = 0;
    }
    input.value += buttonClass.value;
  });
});

// Calculate and display solution or error
equal.addEventListener("click", () => {
  equalPressed = 1;
  let inputValue = input.value;
  try {
    let solution = math.evaluate(inputValue);
    if (Number.isNaN(solution) || !Number.isFinite(solution)) {
      throw new Error("Invalid expression");
    }
    input.value = Number.isInteger(solution) ? solution : solution.toFixed(5);
  } catch (error) {
    const originalValue = inputValue; 
    input.value = "Invalid expression"; 

    setTimeout(() => {
      input.value = originalValue;
    }, 1000);
  }
});

// Clear input field
clear.addEventListener("click", () => {
  input.value = "";
});

// Erase last character in input field
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});

// Change button backgrounds and revert styles
document.addEventListener('DOMContentLoaded', function () {
  const digitButtons = document.querySelectorAll('.digit-button');
  const operationButtons = document.querySelectorAll('.operation-button');

  function changeBackgroundAndTextColor(event) {
      const button = event.target;
      let originalBackgroundImage, temporaryBackgroundImage;
      let originalTextColor = button.style.color; 
      let temporaryTextColor = "white"; 
      let originalBackgroundSize = "150% 150%"; 
      let temporaryBackgroundSize = "175% 190%"; 

      if (button.classList.contains('operation-button')) {
          originalBackgroundImage = "url('/assets/orngButton.png')";
          temporaryBackgroundImage = "url('/assets/blkButton.png')";
      } else if (button.classList.contains('digit-button')) { 
          originalBackgroundImage = "url('/assets/blkButton.png')";
          temporaryBackgroundImage = "url('/assets/orngButton.png')";
          originalBackgroundSize = "170% 170%";
          temporaryBackgroundSize = "170%"; 
          temporaryTextColor = originalTextColor; 
      }

      button.style.backgroundImage = temporaryBackgroundImage;
      button.style.backgroundSize = temporaryBackgroundSize;
      button.style.color = temporaryTextColor; 

      setTimeout(function() {
          button.style.backgroundImage = originalBackgroundImage;
          button.style.backgroundSize = originalBackgroundSize;
          button.style.color = originalTextColor; 
      }, 200); 
  }

  digitButtons.forEach(button => button.addEventListener('click', changeBackgroundAndTextColor));
  operationButtons.forEach(button => button.addEventListener('click', changeBackgroundAndTextColor));
});
