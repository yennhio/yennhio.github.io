const experience = [
  {
    year: "2023-2024",
    role: "Full Stack Lead",
    workplace:
      "The Human Centered, Adaptive, and Personalized Information Interaction Lab",
    worklink: "https://hapii-lab.github.io/",
    descrip:
      "Develop a Node.js web application with a MySQL backend for user data collection. Work with RESTful APIs and JSON handling to enable communication and data exchange between client and server. Conduct user experiments and run data analyses.",
    tags: ["HTML", "JavaScript", "CSS", "Node.JS", "MySQL"],
  },
  {
    year: "2022",
    role: "IT Student Assistant",
    workplace: "Cal Poly Pomona Information Technology Security & Compliance",
    worklink: "https://www.cpp.edu/it/security.shtml",
    descrip:
      "Executed code reviews and manual compliance testing for web applications. Conducted compliance assessments and generated security reports based on Web Content Accessibility Guidelines (WCAG) 2.1 AA standards. Monitored and documented compliance gaps. Identified and resolved accessibility barriers/challenges for product enhancements.",
    tags: [
      "ServiceNow",
      "Compliance Testing",
      "Web Accessibility",
      "HTML",
      "JavaScript",
      "CSS",
      "ARIA",
      "Technical Writing",
    ],
  },
  {
    year: "2021-2023",
    role: "Office Assistant",
    workplace: "Cal Poly Pomona Office of New Student Programs",
    worklink: "https://www.cpp.edu/orientation/index.shtml",
    descrip:
      "Administered orientation programs and arranged student scheduling/reservations.",
    tags: ["Cascade", "Tableau", "PeopleSoft", "Customer Service"],
  },
];

function generateExperience(experience) {
  let tagButtons = experience.tags
    .map((tag) => `<button>${tag}</button>`)
    .join("");

  return `
    <div class="experience-block">

      <div class="year">
        <p>${experience.year}</p>
      </div>

      <div class="role">
        <p>${experience.role}</p>

          <a
            href="${experience.worklink}"
            target="_blank"
            rel="noopener noreferrer"
            class="workplace"
          >
            ${experience.workplace}
          </a>
          <img class="icons" src="/experience/link.svg" style="width:13px; ">

        <div class="experience-descrip">${experience.descrip}</div>
        <div class="experience-tags">${tagButtons}</div>

      </div>
    </div>
    `;
}

function renderExperience() {
  document.querySelector(".experience-container").innerHTML = "";

  experience.forEach((experience) => {
    document.querySelector(".experience-container").innerHTML +=
      generateExperience(experience);
  });
}

renderExperience();
