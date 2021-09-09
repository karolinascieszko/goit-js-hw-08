import throttle from 'lodash.throttle';

const qs = selector => document.querySelector(selector);
const qsa = selector => document.querySelectorAll(selector);
const form = qs('.feedback-form');
const formEmail = qs('[name="email"]');
const formMessage = qs('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const updateOutput = () => {
  try {
    formEmail.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email;
    formMessage.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message;
  } catch {
    console.log(error.name);
  }
};

const saveData = () => {
  let data = {
    email: `${formEmail.value}`,
    message: `${formMessage.value}`,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};

const handleSubmit = event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
};
updateOutput();
form.addEventListener('input', throttle(saveData, 500));
form.addEventListener('submit', handleSubmit);
