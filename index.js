AOS.init();

const skillsArray = [
  {
    name: "HTML",
    percentage: 90,
    filePath: "html.svg",
  },
  {
    name: "CSS",
    percentage: 90,
    filePath: "css.svg",
  },
  {
    name: "JavaScript",
    percentage: 80,
    filePath: "javascript.svg",
  },
  {
    name: "React",
    percentage: 80,
    filePath: "react.svg",
  },
  {
    name: "Redux",
    percentage: 70,
    filePath: "redux.svg",
  },
  {
    name: "React Query",
    percentage: 70,
    filePath: "react-query.svg",
  },

  {
    name: "Node.js",
    percentage: 70,
    filePath: "node-js.svg",
  },
  {
    name: "MongoDB",
    percentage: 70,
    filePath: "mongodb.svg",
  },
  {
    name: "Express.js",
    percentage: 70,
    filePath: "express.svg",
  },

  {
    name: "Java",
    percentage: 60,
    filePath: "java.svg",
  },
  {
    name: "Git",
    percentage: 80,
    filePath: "github.svg",
  },
  {
    name: "Bootstrap",
    percentage: 80,
    filePath: "bootstrap.svg",
  },
  {
    name: "Materialize",
    percentage: 80,
    filePath: "materialize.svg",
  },
  {
    name: "Tailwind CSS",
    percentage: 70,
    filePath: "tailwind-css.svg",
  },
];

const achievementsArray = [
  {
    name: "Apana Collage Dsa",
    description: "Won the Hackathon conducted by the college.",
    date: "2021",
    filePath: "certificate-alpha-ready-batch-1.png",
  },
  {
    name: "Cloundinary",
    description: "Won the Hackathon conducted by the college.",
    date: "2021",
    filePath: "cloudinary.png",
  },
  {
    name: "JavaScript Basic",
    description: "Won the Hackathon conducted by the college.",
    date: "2021",
    filePath: "javascript-basic.png",
  },
];

const projectsArray = [
  // {
  //   name: "E-Commerce Website",
  //   description: "A simple E-Commerce website.",
  //   filePath: "",
  //   category: "e-commerce",
  //   tags: ["React", "Redux", "Node.js", "MongoDB"],
  //   link: "https://e-commerce-ten.vercel.app/",
  // },
  {
    name: "Todo App",
    description:
      "A responsive Todo app with features to add tasks before or after existing ones, and local storage support.",
    filePath: "todo-app.png",
    category: "todo",
    tags: ["React", "Redux", "localstorage"],
    link: "https://ifastkrishna-todo.netlify.app",
  },
  // {
  //   name: "Weather App",
  //   description: "A simple Weather App.",
  //   filePath: "",
  //   category: "weather",
  //   tags: ["React", "API"],
  //   link: "https://weather-app-ten.vercel.app/",
  // },
  {
    name: "Apana Collage Clone",
    description:
      "A responsive landing page built with HTML, JavaScript, and Tailwind CSS. It offers a clean, modern design.",
    filePath: "apna-collage-landing.png",
    category: "clone",
    tags: ["React", "Tailwind css"],
    link: "https://apnacollage-landing.netlify.app",
  },
  {
    name: "Pexels Clone",
    description:
      "A responsive landing page built with Nextjs,React query, and Tailwind CSS. It offers a clean, modern design.",
    filePath: "pexels.png",
    category: "clone",
    tags: ["React", "Tailwind css"],
    link: "https://github.com/IfastKrishna/pexels-clone.git",
  },
  {
    name: "Rock Paper Scissors",
    description:
      "Implemented using HTML, CSS, and JavaScript. It features a simple and intuitive user interface.",
    filePath: "rock_paper_sessior.png",
    category: "game",
    tags: ["React"],
    link: "https://ifastrps.netlify.app",
  },
  {
    name: "Feedback App",
    description:
      "A responsive feedback app that allows users to rate their experience and provide feedback.",
    filePath: "Feedback.png",
    category: "feedback",
    tags: ["Html", "cass", "google sheet"],
    link: "https://ifast-feedback-app.netlify.app",
  },
];

const skillsContainer = document.getElementById("skillsContainer");
// skills
skillsArray.forEach((skill, i) => {
  const skillElement = document.createElement("div");

  skillElement.classList.add("col", "s12", "m6");
  if ((i + 1) % 2 == 0) {
    skillElement.setAttribute("data-aos", "fade-left");
  } else {
    skillElement.setAttribute("data-aos", "fade-right");
  }

  skillElement.setAttribute("data-aos-anchor-placement", "bottom-center");

  skillElement.innerHTML = `
        <div class="card hover">
            <div class="card-content flex align-items-center gap-4 waves-effect waves-red lighten-5">
                <div class="col s6">
                    <img src="./assets/skills/${skill.filePath}" alt="${skill.name}" class="class="skill-icon" width="144px"  />
                </div>
                <div class="col s6">
                    <h5>${skill.name}</h5>
                </div>
            </div>
        </div>
    `;
  skillsContainer.appendChild(skillElement);
});

// achievements
const achievementsContainer = document.getElementById("achievementsContainer");

achievementsArray.forEach((achievement, i) => {
  const achievementElement = document.createElement("div");
  achievementElement.classList.add("col", "s12", "m7", "my-2");

  if ((i + 1) % 2 == 0) {
    achievementElement.classList.add("right");
  } else {
    achievementElement.classList.add("left");
  }
  achievementElement.setAttribute("data-aos", "fade-up");
  achievementElement.setAttribute("data-aos-anchor-placement", "bottom-center");

  achievementElement.innerHTML = `
     <div class="card achievement-card red-lighten-5-card"> 
          <div class="card-image">
          <img class="materialboxed responsive-img" src="./assets/achivements/${achievement.filePath}" alt="trophy" />
          </div>
      </div>
  `;
  achievementsContainer.appendChild(achievementElement);
});

// projects
const projectsContainer = document.getElementById("projectsContainer");

projectsArray.forEach((project, i) => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("col", "s12", "m6");

  if ((i + 1) % 2 == 0) {
    projectElement.setAttribute("data-aos", "fade-right");
  } else {
    projectElement.setAttribute("data-aos", "fade-left");
  }
  projectElement.setAttribute("data-aos-anchor-placement", "bottom-center");

  projectElement.innerHTML = `
     <div class="card waves-effect waves-red lighten-5 card-hight project-card">
          <div class="card-image">
              <img src="./assets/projects/${project.filePath}" style="object-fit: cover;" alt="Feedback Project">
          </div>
            <div class="card-content project-info">
              <span class="card-title">${project.name}</span>
              <p>${project.description}</p>
              <a href="${project.link}" target="_blank" class="link-hover">Go There</a>
          </div>
      </div>
  `;

  projectsContainer.appendChild(projectElement);
});

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
