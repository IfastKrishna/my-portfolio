AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var elems2 = document.querySelectorAll(".materialboxed");

  M.Sidenav.init(elems);
  M.Materialbox.init(elems2);

  M.Carousel.init({
    fullWidth: true,
    indicators: true,
  });
});

const navMenus = document.querySelectorAll(".nav>li");

navMenus.forEach((menu) => {
  menu.addEventListener("click", navMenuClick);
});

function navMenuClick(e) {
  navMenus.forEach((menu) => {
    menu.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
}

navMenus.forEach((menu) => {
  if (menu.firstElementChild.href == window.location.href) {
    menu.classList.add("active");
  }
});

function scrollDown() {
  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
}

// Function to apply the theme
function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("theme-toggle").innerHTML =
      '<i class="large material-icons">brightness_4</i>';
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document.getElementById("theme-toggle").innerHTML =
      '<i class="large material-icons">brightness_high</i>';
  }
  localStorage.setItem("theme", theme);
}

// Function to toggle between light and dark modes
function toggleTheme() {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    applyTheme("light");
  } else {
    applyTheme("dark");
  }
}

// Check the user's system preference
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
const savedTheme = localStorage.getItem("theme");

// Apply the saved theme if it exists, otherwise apply the system preference
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme(systemPrefersDark ? "dark" : "light");
}

// Add event listener to the toggle button
document
  .querySelectorAll("#theme-toggle")
  .forEach((b) => b.addEventListener("click", toggleTheme));

// Optional: Update the theme if the system preference changes and the user hasn't set a preference
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });

const whatsappMessageButton = document.getElementById("whatsappMessageButton");
whatsappMessageButton.addEventListener("click", () => {
  window.open("https://wa.me/919905242174?message=Hello", "_blank");
});

const hover = document.querySelectorAll(".hover");
hover.forEach((h) => {
  h.addEventListener("mouseenter", () => {
    h.classList.add("z-depth-5", "darken-1");
    h.style.transform = "scale(1.03)";
    h.style.transition = "0.6s";
  });
  h.addEventListener("mouseleave", () => {
    h.classList.remove("z-depth-5", "darken-1");
    h.style.transform = "scale(1)";
    h.style.transition = "0.6s";
  });
});
