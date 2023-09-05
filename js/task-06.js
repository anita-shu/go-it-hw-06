const input = document.querySelector("#validation-input");

const userInput = (event) => {
  const currentTargets = event.currentTarget.value;
  if (currentTargets.length === 6) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", userInput);