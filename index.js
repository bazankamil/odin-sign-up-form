const myForm = document.querySelector(".form__sign-in");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirmPassword");

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

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = myForm.querySelector('input[type="text"]').value;
});
