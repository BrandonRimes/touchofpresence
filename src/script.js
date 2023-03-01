const html = document.documentElement;
const homePage = document.getElementById("homePage");
const menuButton = document.getElementById("menuButton");
const footer = document.getElementById("footer");
const bookButton =document.getElementById("footerBook");
const menuPage = document.getElementById("menuPage");
const aboutPage = document.getElementById("aboutPage");
const tribePage = document.getElementById("tribePage");
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
const bodyworkImg = document.getElementById("bodyworkImg");

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
  "connectOption": connectPage,
  "bookOption": bookPage,
  "faqOption": faqPage
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

menuPage.addEventListener("click", (e) => {
  if (e.target.id in pages) {
    toggleMenuButton();
    menuPage.style.display = "none";
    activePage.style.display = "none";
    activePage = pages[e.target.id];
    activePage.style.display = "flex";
    html.scrollTop = 0;
    ctaDisplay();
  };
});

bookButton.addEventListener("click", (e) => {
  activePage.style.display = "none";
  menuPage.style.display = "none";
  menuButton.className = "closed";
  activePage = pages["bookOption"];
  activePage.style.display = "flex";
  html.scrollTop = 0;
  ctaDisplay();
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
  ctaDisplay();
});

window.onload = function() {
  const mBook = document.getElementById("mBook");
  const element = mBook.contentWindow.document.getElementById("central-phrase");
  element.style.color = "black";
}

window.onscroll = () => {
  let scroll = html.scrollTop;

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

  bodyworkImg.style.transform = `translateY(${(scroll * 1.3) - scroll - 200}px)`;

  const faqs = {
    "faqQ1": "faqA1",
    "faqQ2": "faqA2",
    "faqQ3": "faqA3",
    "faqQ4": "faqA4",
    "faqQ5": "faqA5",
    "faqQ6": "faqA6"
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
