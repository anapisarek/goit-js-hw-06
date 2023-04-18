const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const { email, password } = formEl.elements;

  if (email.value === '' || password.value === '') {
    alert("Uzupełnij wszystkie pola formularzy!");
  } else {
    const formValues = {
      email: email.value,
      password: password.value,
    };

    console.log(formValues);
    formEl.reset();
  }
});