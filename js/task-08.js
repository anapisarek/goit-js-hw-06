const form =document.querySelector("form")

const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    alert("Uzupełnij wszystkie pola formularzy!");
  } else console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
}