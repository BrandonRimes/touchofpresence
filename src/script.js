const html = document.documentElement;
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const menuButton = document.getElementById("menuButton");
const pageTitle = document.getElementById("pageTitle");
const bookButtons = document.querySelectorAll(".bookButton");
const learnMoreButtons = document.querySelectorAll(".learnMoreButton");
const homePage = document.getElementById("homePage");
const menuPage = document.getElementById("menuPage");
const aboutPage = document.getElementById("aboutPage");
const tribePage = document.getElementById("tribePage");
const servicesPage = document.getElementById("servicesPage");
const connectPage = document.getElementById("connectPage");
const bookPage = document.getElementById("bookPage");
const faqPage = document.getElementById("faqPage");
const faqQuestions = document.getElementById("faqQuestions");
const logo = document.getElementById("logo");
const cornerLogo = document.getElementById("cornerLogo");
const mandala = document.getElementById("mandala");
const oxytocin = document.getElementById("oxytocin");
const motto = document.querySelectorAll(".motto");
const whereMotto = document.getElementById("whereMotto");
const scienceMotto = document.getElementById("scienceMotto");
const andMotto = document.getElementById("andMotto");
const presenceMotto = document.getElementById("presenceMotto");
const integrateMotto = document.getElementById("integrateMotto");
const theName = document.getElementById("theName");
const touchName = document.getElementById("touchName");
const ofName = document.getElementById("ofName");
const presenceName = document.getElementById("presenceName");
const mapBox = document.getElementById("connectMap");
const banner = document.getElementById("banner");
const cta = document.querySelector(".CTA");
const bodyworksImg = document.getElementById("bodyworksImg");

let serverURL;

fetch(".netlify/functions/api")
.then(response => response.json())
.then(json => {
    serverURL = json.api;
    mapBox.innerHTML = 
  `<iframe
    width="100%"
    height="100%"
    frameborder="0" style="border:0"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed/v1/place?key=${serverURL}&q=1145+Gaskins+Road,+Suite+#105
    Henrico,+VA+23238"
    allowfullscreen
  >
  </iframe>`;
});

let activePage = homePage;

const pages = {
  "homeOption": homePage,
  "menuOption": menuPage,
  "aboutOption": aboutPage,
  "tribeOption": tribePage,
  "servicesOption": servicesPage,
  "connectOption": connectPage,
  "bookOption": bookPage,
  "faqOption": faqPage
};

const pageTitles = {
  "homeOption": "",
  "menuOption": "Menu",
  "aboutOption": "About",
  "tribeOption": "Practitioners",
  "servicesOption": "Services",
  "connectOption": "Connect",
  "bookOption": "Book",
  "faqOption": "FAQ"
};

const toggleMenuButton = () => {
  menuButton.className == "closed" ?
    menuButton.className = "open" :
    menuButton.className = "closed";
}

menuButton.addEventListener("click", (e) => {
  toggleMenuButton();

  menuPage.style.display == "flex" ?
    menuPage.style.display = "none" :
    menuPage.style.display = "flex";

  if (window.innerWidth < 1000) {
    activePage.style.display == "none" ?
      activePage.style.display = "flex" :
      activePage.style.display = "none";
  }

  ctaDisplay();
});

const loadBook = () => {
  const mBook = document.getElementById("mBook");
  const element = mBook.contentWindow.document.getElementById("central-phrase");
  element.style.color = "black";
};

menuPage.addEventListener("click", (e) => {
  let id = e.target.id;
  if (id in pages) {
    toggleMenuButton();
    menuPage.style.display = "none";
    activePage.style.display = "none";
    activePage = pages[id];
    activePage.style.display = "flex";
    html.scrollTop = 0;
    pageTitle.innerText = pageTitles[id];
    ctaDisplay();
  };
});

bookButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    activePage.style.display = "none";
    menuPage.style.display = "none";
    menuButton.className = "closed";
    activePage = pages["bookOption"];
    pageTitle.innerText = pageTitles['bookOption'];
    activePage.style.display = "flex";
    html.scrollTop = 0;
    ctaDisplay();
  });
});

learnMoreButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    activePage.style.display = "none";
    activePage = pages["servicesOption"];
    pageTitle.innerText = pageTitles['servicesOption'];
    activePage.style.display = "flex";
    if (e.target.id == "aboutNeuroInt") {
      html.scrollTop = 725;
    } else if (e.target.id == "aboutBodywork") {
      html.scrollTop = 1925;
    } else {
      html.scrollTop = 0;
    };
  });
});

banner.addEventListener("click", (e) => {
  banner.style.display = "none";
});

const ctaDisplay = () => {
  if (menuPage.style.display == "flex") {
    cta.style.display = "none";
  } else {
    cta.style.display = "block";
  }
}

cornerLogo.addEventListener("click", (e) => {
  activePage.style.display = "none";
  menuPage.style.display = "none";
  menuButton.className = "closed";
  activePage = pages["homeOption"];
  activePage.style.display = "flex";
  html.scrollTop = 0;
  pageTitle.innerText = pageTitles['homeOption'];
  ctaDisplay();
});

// window.onload = function() {
//   const mBook = document.getElementById("mBook");
//   const element = mBook.contentWindow.document.getElementById("central-phrase");
//   element.style.color = "black";
// }

window.onscroll = () => {
  let scroll = html.scrollTop;

  if (activePage != homePage) header.style.backgroundColor = `rgba(255, 255, 255, ${scroll / 1000})`;

  if (this.oldScroll < this.scrollY && scroll > 1) {
    footer.style.transform = "translateY(5.5rem)";
    banner.style.transform = "translateY(-5rem)";
  } else {
    footer.style.transform = "translateY(0rem)";
    banner.style.transform = "translateY(0rem)";
  }

  this.oldScroll = this.scrollY;

  theName.style.transform = `translateY(-${scroll * 1.5}px)`
  theName.style.opacity = `${100 - (scroll / 1)}%`

  if (scroll > 50) {
    touchName.style.transform = `translateY(-${(scroll - 50)}px)`
    touchName.style.opacity = `${100 - ((scroll - 50) / 1)}%`
  } else {
    touchName.style.transform = `translateY(0px)`
    touchName.style.opacity = "100%"
  };

  if (scroll > 100) {
    ofName.style.transform = `translateY(-${(scroll - 100) / 1.5}px)`
    ofName.style.opacity = `${100 - ((scroll - 100) / 2)}%`
  } else {
    ofName.style.transform = `translateY(0px)`
    ofName.style.opacity = "100%"
  };

  if (scroll > 150) {
    presenceName.style.transform = `translateY(-${(scroll - 150) / 2}px)`
    presenceName.style.opacity = `${100 - ((scroll - 150) / 2)}%`
  } else {
    presenceName.style.transform = `translateY(0px)`
    presenceName.style.opacity = "100%"
  };

  if (scroll > 250) {
    whereMotto.style.opacity = `${scroll - 250}%`;
    scienceMotto.style.opacity = `${scroll - 275}%`;
    andMotto.style.opacity = `${scroll - 350}%`;
    presenceMotto.style.opacity = `${scroll - 375}%`;
    integrateMotto.style.opacity = `${scroll - 450}%`;
  } else {motto.forEach(word => word.style.opacity = "0")}

  mandala.style.transform = `translateY(${scroll / 1.5}px)`;

  oxytocin.style.transform = `translateY(${scroll / 1}px)`;
  oxytocin.style.opacity = `${100 - (scroll / 2)}%`

  bodyworksImg.style.transform = `translateY(${(scroll * 1.1) - scroll - 200}px)`;

  const faqs = {
    "faqQ1": "faqA1",
    "faqQ2": "faqA2",
    "faqQ3": "faqA3",
    "faqQ4": "faqA4",
    "faqQ5": "faqA5",
    "faqQ6": "faqA6",
    "faqQ7": "faqA7",
    "faqQ8": "faqA8"
  };

  faqQuestions.addEventListener("click", (e) => {
    if (e.target.id in faqs) {
      let answer = document.getElementById(faqs[e.target.id]);
      let others = document.querySelectorAll(".faqAnswer");
      others.forEach(other => {
        other.style.color = "black"
      });
      answer.scrollIntoView({behavior: "smooth", block: "center"});
      answer.style.color = "var(--coral)";
    }
  });

};
