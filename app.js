let form = document.querySelector(".form");
let inputEmail = document.querySelector(".email_input");
let error = document.querySelector(".error");

form.addEventListener("click", (event) => {
  event.preventDefault();
  let regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  if (regExp.test(inputEmail.value) == true) {
    inputEmail.style.border = "1px solid hsl(0, 36%, 70%)";
    inputEmail.style, (backgroundImage = 'url("")');
    error.innerHTML = "";
  } else {
    inputEmail.style.border = "1px solid red";
    inputEmail.style.backgroundImage = 'url("images/icon-error.svg")';
    error.innerHTML = "Please provide a valid email";
  }
});
