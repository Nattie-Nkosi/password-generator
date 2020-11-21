/* Grab the elements from the html */
const pwEl = document.querySelector('#pw');
const copyEl = document.querySelector('#copy');
const lenEl = document.querySelector('#length');
const upperEl = document.querySelector('#upper');
const lowerEl = document.querySelector('#lower');
const numberEl = document.querySelector('#number');
const symbolEl = document.querySelector('#symbol');
const generateEl = document.querySelector('#generate');

/* Setters */
const upperCaseLetters = 'ABCADEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()-+=';

/* Getters */
const getUpperCase = () => {
  return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
};

const getLowerCase = () => {
  return lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
};

const getNumber = () => {
  return numbers[Math.floor(Math.random() * numbers.length)];
};

const getSymbol = () => {
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = () => {
  const len = lenEl.value;

  let password = '';

  if (upperEl.checked) {
    password += getUpperCase();
  }

  if (lowerEl.checked) {
    password += getLowerCase();
  }
  if (numberEl.checked) {
    password += getNumber();
  }
  if (symbolEl.checked) {
    password += getSymbol();
  }

  for (let i = password.length - 1; i < len; i++) {
    const x = generateX();
    password += x;
  }

  pwEl.innerHTML = password;
};

const generateX = () => {
  const xs = [];

  if (upperEl.checked) {
    xs.push(getUpperCase());
  }

  if (lowerEl.checked) {
    xs.push(getLowerCase());
  }
  if (numberEl.checked) {
    xs.push(getNumber());
  }
  if (symbolEl.checked) {
    xs.push(getSymbol());
  }

  if (xs.length === 0) return '';

  return xs[Math.floor(Math.random() * xs.length)];
};

generateEl.addEventListener('click', generatePassword);

/* Copy to clipboard code */
copyEl.addEventListener('click', () => {
  const textArea = document.createElement('textarea');
  const password = pwEl.innerText;

  if (!password) {
    return;
  }

  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  textArea.remove();
  alert('Password copied to clipboard');
});
