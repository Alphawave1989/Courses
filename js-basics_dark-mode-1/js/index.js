import { mode } from '@chakra-ui/theme-tools';
console.clear();

// get a reference to the body element: 
const bodyElement = document.querySelector('[data-js="body"]');

// get a reference to the button element:
const button--dark = document.querySelector('[data-js="dark-mode-button"]');

const buttonlight = document.querySelector('[data-js="light-mode-button"]');

const togglebutton = document.querySelector('[data-js="toggle-button"]');

// add event listener to the button:

button--dark.addEventListener('click', () => {
    mainElement.classList.add("button--dark");
});

buttonlight.addEventListener('click', () => {
    mainElement.classList.remove("dark-mode");
});

togglebutton.addEventListener('click', () => {
    mainElement.classList.toggle("dark-mode");
});
