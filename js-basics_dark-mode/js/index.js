console.clear();

// Get a reference to the body element
const body = document.querySelector('[data-js="body"]');

// Get references to all buttons with the 'data-js' attribute
const buttons = document.querySelectorAll("[data-js]");

// Function to apply dark mode
function setDarkMode(isDark) {
  if (isDark) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
}

// Check initial state of dark mode based on body class
const isDarkMode = body.classList.contains("dark");
setDarkMode(isDarkMode); // Apply initial state

// Add event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const { dataset } = button; // Destructure data-js attribute

    switch (dataset.js) {
      case "dark-mode-button":
        setDarkMode(true);
        break;
      case "light-mode-button":
        setDarkMode(false);
        break;
      case "toggle-button":
        setDarkMode(!body.classList.contains("dark")); // Toggle based on current state
        break;
    }
  });
});
