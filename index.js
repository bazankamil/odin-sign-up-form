const myForm = document.querySelector(".form__sign-in");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirmPassword");

myForm.addEventListener("click", function e() {
  console.log("test");
});

password.addEventListener("input", function () {
  const inputValue = password.value;
  if (inputValue.length >= 5 && inputValue.length < 15) {
    password.classList.remove("error");
  } else {
    password.classList.add("error");
  }
});

confirmPassword.addEventListener("input", function () {
  const inputValue = confirmPassword.value;
  if (inputValue.length >= 5 && inputValue.length < 15) {
    confirmPassword.classList.remove("error");
  } else {
    confirmPassword.classList.add("error");
  }
});
