const portfolioItem = [
  {
    image: "/portfolio/imgs/orientation-page.png",
    title: "Website: Cal Poly Pomona Orientation Services",
    link: "https://www.cpp.edu/orientation/index.shtml",
  },

  {
    image: "/portfolio/imgs/cyberfair-page.png",
    title: "Website: Cal Poly Pomona Cybersecurity Fair",
    link: "https://www.cpp.edu/cyberfair/index.shtml",
  },

  {
    image: "/portfolio/imgs/ginsaigon-page.png",
    title: "Website: Global Issues Conference 2017",
    link: "https://ginsgnconference2017.wordpress.com/",
  },

  {
    image: "/portfolio/imgs/cppcss.png",
    title: "Website: Computer Science Society",
    link: "https://cppcss.club/",
  },

  {
    image: "/portfolio/imgs/cpporientation.png",
    title: "Web Content: Instagram Content for CPP Orientation",
    link: "https://www.instagram.com/cpporientation/",
  },

  {
    image: "/portfolio/imgs/cyberfairig.png",
    title: "Web Content: Instagram Content for CPP Cybersecurity Fair",
    link: "https://www.instagram.com/cppcyberfair/",
  },

  {
    image: "/portfolio/imgs/cat-and-house.jpeg",
    title: "Digital Art: House and Cat",
    link: "/portfolio/imgs/cat-and-house.jpeg",
  },

  {
    image: "/portfolio/imgs/gin-logo.jpeg",
    title: "Graphic Design: Event Logo for Global Issues Conference",
    link: "/portfolio/imgs/gin-logo.jpeg",
  },

  {
    image: "/portfolio/imgs/shirt-astronaut.png",
    title: "Graphic Design: Event Shirt for Global Issues Conference",
    link: "/portfolio/imgs/shirt-astronaut.png",
  },

  {
    image: "/portfolio/imgs/blackshirt.png",
    title: "Graphic Design: Event Shirt for Global Issues Conference",
    link: "/portfolio/imgs/blackshirt.png",
  },

  {
    image: "/portfolio/imgs/whiteshirt-logo.png",
    title: "Graphic Design: Event Shirt for Global Issues Conference",
    link: "/portfolio/imgs/whiteshirt-logo.png",
  },

  {
    image: "/portfolio/imgs/whiteshirt.png",
    title: "Graphic Design: Event Shirt for Global Issues Conference",
    link: "/portfolio/imgs/whiteshirt.png",
  },

  {
    image: "/portfolio/imgs/earth.jpeg",
    title: "Graphic Design: Sticker for Global Issues Conference",
    link: "/portfolio/imgs/earth.jpeg",
  },

  {
    image: "/portfolio/imgs/moon-stuff.png",
    title: "Graphic Design: Sticker for Global Issues Conference",
    link: "/portfolio/imgs/moon-stuff.png",
  },

  {
    image: "/portfolio/imgs/duckie.jpeg",
    title: "Digital Art: Tired Ducky After Work",
    link: "/portfolio/imgs/duckie.jpeg",
  },

  {
    image: "/portfolio/imgs/tote-art.jpeg",
    title: "Graphic Design: Event Bag Design for Global Issues Conference",
    link: "/portfolio/imgs/tote-art.jpeg",
  },

  {
    image: "/portfolio/imgs/field.jpeg",
    title: "Digital Art: Field",
    link: "/portfolio/imgs/field.jpeg",
  },

  {
    image: "/portfolio/imgs/banner1.png",
    title: "Graphic Design: Banner for Global Issues Conference",
    link: "/portfolio/imgs/banner1.png",
  },

  {
    image: "/portfolio/imgs/honhon.jpeg",
    title: "Photo of Banner for Global Issues Conference",
    link: "/portfolio/imgs/honhon.jpeg",
  },

  {
    image: "/portfolio/imgs/grass.jpeg",
    title: "Digital Art: Grass Closeup",
    link: "/portfolio/imgs/grass.jpeg",
  },

  {
    image: "/portfolio/imgs/banner2.png",
    title: "Graphic Design: Banner for Global Issues Conference",
    link: "/portfolio/imgs/banner2.png",
  },
];

function generatePortfolioItem(portfolioItem) {
  return `


    <div class="portfolio-item">
        
        <a href="${portfolioItem.link}"
            target="_blank"
            rel="noopener noreferrer"
            class="workplace">
            <img src="${portfolioItem.image}"/>
            <div class="portfolio-title">${portfolioItem.title}</div>
        </a>

    </div>
      `;
}

function renderPortfolio() {
  document.querySelector(".portfolio-container").innerHTML = "";

  portfolioItem.forEach((portfolioItem) => {
    document.querySelector(".portfolio-container").innerHTML +=
      generatePortfolioItem(portfolioItem);
  });
}

renderPortfolio();
