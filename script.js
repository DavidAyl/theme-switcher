// Access toggle switch HTML element
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function () {
  // If mode is dark, apply light background
  var isDark = container.classList.contains("dark");
  if (isDark) {
    container.classList.remove("dark");
    container.classList.add("light");
  }
  // If mode is light, apply dark background
  else {
    container.classList.add("dark");
    container.classList.remove("light");
  }
});
