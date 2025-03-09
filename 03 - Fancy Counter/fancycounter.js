const counterEl = document.querySelector(".counter");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const counterValueEl = document.querySelector(".counter__value");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterTitleEl = document.querySelector(".counter__title");

resetButtonEl.addEventListener("click", () => {
  // set value to 0
  counterValueEl.textContent = 0;
  // reset background color
  counterEl.classList.remove("counter--limit");
  // reset counter title
  counterTitleEl.textContent = "Fancy Counter";
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
  // Unfocus (blur) the button
  resetButtonEl.blur();
});

incrementCounter = () => {
  // get current value of the counter
  const currentValue = counterValueEl.textContent;
  // convert the value to number
  const currentValueNumber = +currentValue;
  // increase the value by 1
  let newValue = currentValueNumber + 1;
  // check if new value is greater than 10
  if (newValue > 10) {
    // if it is greater than 10, set the value to 10
    newValue = 10;

    // Give visual feedback to the user
    counterEl.classList.add("counter--limit");
    // update counter title based on the new value
    counterTitleEl.innerHTML = "Limit! Buy Pro for more!";
    //   disable the increase and decrease buttons
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }
  // set the new value to the counter
  counterValueEl.textContent = newValue;
  // Unfocus (blur) the button
  increaseButtonEl.blur();
};

increaseButtonEl.addEventListener("click", incrementCounter);
document.addEventListener("keydown", incrementCounter);

decreaseButtonEl.addEventListener("click", () => {
  const currentValue = counterValueEl.textContent;
  const currentValueNumber = +currentValue;
  let newValue = currentValueNumber - 1;
  // check if new value less than 0
  if (newValue < 0) {
    // if it is less than 0, set the value to 0
    newValue = 0;
  }
  counterValueEl.textContent = newValue;

  // Unfocus (blur) the button
  decreaseButtonEl.blur();
});
