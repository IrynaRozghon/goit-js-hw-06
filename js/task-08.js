const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value.trim === "" || password.value === "") {
    return alert(`Заповніть поле!`);
  }
  const userInformation = { email: email.value, password: password.value };

  console.log(userInformation);
  event.currentTarget.reset();
}
