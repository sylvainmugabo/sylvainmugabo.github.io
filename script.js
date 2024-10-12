// Dark mode toggle functionality
const toggleThemeBtn = document.getElementById("toggle-theme");
const body = document.body;

toggleThemeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
