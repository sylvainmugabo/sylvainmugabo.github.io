const toggleThemeBtn = document.getElementById("toggle-theme");
const body = document.body;

// Function to update the theme button icon
function updateThemeIcon() {
  if (body.classList.contains("dark-mode")) {
    toggleThemeBtn.textContent = "🌞 Light Mode"; // Sun icon for light mode
  } else {
    toggleThemeBtn.textContent = "🌙 Dark Mode"; // Moon icon for dark mode
  }
}

// Toggle dark mode and update the button icon
toggleThemeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  updateThemeIcon();
});

// Initial call to set the correct icon on page load
updateThemeIcon();
