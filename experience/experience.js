const experience = [
  {
    year: "2023-2024",
    role: "Software Engineer",
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
      "Conducted web accessibility testing for campus and vendor websites. Resolved compliance issues through manual assessments based on Web Content Accessibility Guidelines (WCAG) 2.1 AA standards.",
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
      "Managed campus website content and created inclusive marketing materials to inform students and boost online engagement",
    tags: ["Cascade", "Tableau", "PeopleSoft", "Customer Service"],
  },
  {
    year: "2016-2017",
    role: "Webmaster & PR",
    workplace: "Southeast Asia Global Issues Network Conference 2017",
    worklink: "https://ginsgnconference2017.wordpress.com/",
    descrip:
      "Spearheaded the conference's digital strategy to drive engagement, optimize website content, create marketing materials, and design event merchandise",
    tags: ["WordPress", "Graphic Design", "Content Creation"],
  },
];

function generateExperience(experience) {
  let tagButtons = experience.tags
    .map((tag) => `<button>${tag}</button>`)
    .join("");

  return `
    <div class="experience-block">

      <div class="year">
        <p><strong>${experience.year}</strong></p>
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
