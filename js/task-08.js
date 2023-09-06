const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", formSubmit);
function formSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    alert("Please, fill  the gap!");
    return;
  } else {
    const details = {
      login: email,
      password: password,
    };
    console.log(details);
  }
  form.reset();
}
