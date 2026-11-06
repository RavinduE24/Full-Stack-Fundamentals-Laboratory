const themeToggle = document.getElementById("themeToggle");
const greeting = document.getElementById("greeting");

/* Show Good Morning / Afternoon / Evening */
function showGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    greeting.textContent = "Good Afternoon";
  } else {
    greeting.textContent = "Good Evening";
  }
}

/* Set dark or light theme */
function setTheme(theme) {
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);

  if (theme === "dark") {
    themeToggle.textContent = "Light Mode";
    themeToggle.classList.remove("btn-light");
    themeToggle.classList.add("btn-dark");
  } else {
    themeToggle.textContent = "Dark Mode";
    themeToggle.classList.remove("btn-dark");
    themeToggle.classList.add("btn-light");
  }
}

/* Load saved mode. Default is dark mode. */
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme("dark");
}

/* Change theme when button is clicked */
themeToggle.addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-bs-theme");

  if (currentTheme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
});

/* Display greeting */
showGreeting();