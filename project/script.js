const projects = [
  {
    name: "Inventory Management",
    descrip:
      "AWS-based inventory management solution for board games. Easily create, update items and access monthly sales reports for informed decisions.",
    github: "https://github.com/PenguGH/CS4990-W24-BoardGameTracker",
    tags: ["AWS", "React.JS", "DynamoDB", "GraphQL", "Amplify"],
  },
  {
    name: "Node.js Online Quiz",
    descrip:
      "Powered by Node.js and backed by a MySQL database, this online quiz offers an immersive learning experience that helps you explore the nuances of data visualization. Challenge your understanding of visual data and spot inaccuracies in COVID19 graphs and charts.",
    github: "https://github.com/CPP-HAPII/MisleadingChartsQuiz",
    tags: [
      "Node.js",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "GazePoint",
      "OpenFace",
    ],
  },
  {
    name: "AI Charades Game",
    descrip:
      "An interactive word-guessing game powered by ChatGPT, where players provide clues for a word, and the AI attempts to guess it within 50 tries. The game leverages the PyQt6 framework for its graphical user interface and OpenAI's GPT-3.5 turbo model for advanced natural language processing capabilities.",
    github: "https://github.com/Cyber-Booleam/AICharades",
    tags: ["Python", "PyQt6", "OpenAI API", "JSON parsing"],
  },
  {
    name: "Budgeti Mobile App",
    descrip:
      "Take control of your finances with Budgeti, the ultimate money management app designed for students. Developed with Flutter and Dart, Budgeti offers a sleek interface to help you track your expenses, manage your budget, and stay on top of finances. Once deployed on Google Play and had 6 downloads.",
    github: "https://github.com/yennhio/budgeti",
    tags: ["Flutter", "Dart", "SharedPreferences", "Android Studio"],
  },
];

function generateProjects(project) {
  let tagButtons = project.tags
    .map((tag) => `<button>${tag}</button>`)
    .join("");

  return `
  <div class="project-block">

    <div class="project-name">
      <p>${project.name}</p>
    </div>
    
    <div class="project-descrip">

      <p>${project.descrip}</p>
        
      <a
        href="${project.github}"
        target="_blank"
        rel="noopener noreferrer"
        class="github-link"
        >
          <svg
            class="icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            style="fill: #9ecea5"
          >
            <--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            />
          </svg>
      </a>

      <div class="project-tags">${tagButtons}</div>

      </div>
    
    </div>

  </div>

  `;
}

function renderProjects() {
  document.querySelector(".project-container").innerHTML = "";

  projects.forEach((project) => {
    document.querySelector(".project-container").innerHTML +=
      generateProjects(project);
  });
}

renderProjects();



