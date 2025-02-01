// Counter Functionality
document.addEventListener("DOMContentLoaded", () => {
  const countElement = document.querySelector(".count");
  const minusButton = document.querySelector(".minus-btn");
  const plusButton = document.querySelector(".plus-btn");
  const resetButton = document.querySelector(".reset-btn");
  const changeByInput = document.querySelector(".changeBy");

  let count = 0;

  function updateCount() {
    countElement.textContent = count;
  }

  minusButton.addEventListener("click", () => {
    const changeBy = parseInt(changeByInput.value, 10) || 1;
    count -= changeBy;
    updateCount();
  });

  plusButton.addEventListener("click", () => {
    const changeBy = parseInt(changeByInput.value, 10) || 1;
    count += changeBy;
    updateCount();
  });

  resetButton.addEventListener("click", () => {
    count = 0;
    updateCount();
  });

  // Keyboard Support for Counter
  document.addEventListener("keydown", (event) => {
    if (event.key === "+") {
      count += parseInt(changeByInput.value, 10) || 1;
    } else if (event.key === "-") {
      count -= parseInt(changeByInput.value, 10) || 1;
    } else if (event.key.toLowerCase() === "r") {
      count = 0;
    } else {
      return; // Ignore other keys
    }
    updateCount();
  });
});

// Calculator Keyboard Input
document.addEventListener("keydown", function (event) {
  const display = document.querySelector('input[name="display"]'); // Corrected selector
  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    ".",
  ];

  if (allowedKeys.includes(event.key)) {
    display.value += event.key;
  } else if (event.key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (event.key === "Escape") {
    display.value = "";
  }
});
