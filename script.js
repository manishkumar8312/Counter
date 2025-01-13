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
});
