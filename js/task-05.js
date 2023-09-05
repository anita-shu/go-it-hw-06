const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const userName = (event) => {
  const currentTargets = event.currentTarget.value;
  if (!currentTargets.length || currentTargets.trim() === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = currentTargets;
  }
};
input.addEventListener("input", userName);