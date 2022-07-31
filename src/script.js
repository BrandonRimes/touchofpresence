const html = document.documentElement;
const homePage = document.getElementById("homePage");
const menuButton = document.getElementById("menuButton");
const menuPage = document.getElementById("menuPage");
const aboutPage = document.getElementById("aboutPage");
const tribePage = document.getElementById("tribePage");
const servicesPage = document.getElementById("servicesPage");
const services = document.querySelectorAll(".services");
const locationPage = document.getElementById("locationPage");
const logo = document.getElementById("logo");
const mandala = document.getElementById("mandala");
const oxytocin = document.getElementById("oxytocin");
const oxyPieces = document.getElementById("oxyPieces");
const oxyPiece1 = document.getElementById("oxyPiece1");
const oxyPiece2 = document.getElementById("oxyPiece2");
const oxyPiece3 = document.getElementById("oxyPiece3");
const oxyPiece4 = document.getElementById("oxyPiece4");
const oxyPiece5 = document.getElementById("oxyPiece5");
const oxyPiece6 = document.getElementById("oxyPiece6");
const oxyPiece7 = document.getElementById("oxyPiece7");
const oxyPiece8 = document.getElementById("oxyPiece8");
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

let activePage = homePage;
const pages = {
  "homeOption": homePage,
  "menuOption": menuPage,
  "aboutOption": aboutPage,
  "tribeOption": tribePage,
  "servicesOption": servicesPage,
  "locationOption": locationPage
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

  activePage.style.display == "none" ?
    activePage.style.display = "flex" :
    activePage.style.display = "none";
});

menuPage.addEventListener("click", (e) => {
  if (e.target.id in pages) {
    toggleMenuButton();
    menuPage.style.display = "none";
    activePage = pages[e.target.id];
    activePage.style.display = "flex";
  };
});

servicesPage.addEventListener("click", (e) => {
  if (e.target.parentElement.className.includes("services")) {
    let openService = document.getElementById(`${e.target.parentElement.id}`);
    services.forEach(element => {
      if (element.id != openService.id) {
        element.className = "services"
      }
    });
    openService.classList.toggle("open");
  }
});


window.onscroll = () => {
  let scroll = html.scrollTop;

  theName.style.transform = `translateY(-${scroll * 1.5}px)`
  theName.style.opacity = `${100 - (scroll / 1.5)}%`

  if (scroll > 50) {
    touchName.style.transform = `translateY(-${(scroll - 50)}px)`
    touchName.style.opacity = `${100 - ((scroll - 50) / 2)}%`
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

  // if (scroll > 90 && scroll <= 315) oxyPiece1.style.transform = `translateX(${7.35 - ((scroll - 90) / 35)}rem) translateY(${-4.6 + ((scroll - 90) / 50)}rem) scale(${1 - ((scroll - 90) / 225)})`;

  // if (scroll > 60 && scroll <= 260) oxyPiece2.style.transform = `translateX(${3.72 - ((scroll - 60) / 75)}rem) translateY(${-2.6 + ((scroll - 60) / 100)}rem) scale(${1 - ((scroll - 60) / 200)})`;

  // if (scroll > 100 && scroll <= 300) oxyPiece3.style.transform = `translateX(${7.3 - ((scroll - 100) / 25)}rem) translateY(${-0.3 + ((scroll - 100) / 1000)}rem) scale(${1 - ((scroll - 100) / 200)})`;

  // if (scroll > 70 && scroll <= 300) oxyPiece4.style.transform = `translateX(${7.75 - ((scroll - 70) / 30)}rem) translateY(${3.95 - ((scroll - 70) / 75)}rem) scale(${1 - ((scroll - 70) / 230)})`;

  // if (scroll > 20 && scroll <= 320) oxyPiece5.style.transform = `translateX(${3.65 - ((scroll - 20) / 75)}rem) translateY(${3.4 - ((scroll - 20) / 75)}rem) scale(${1 - ((scroll - 20) / 300)})`;

  // if (scroll > 0 && scroll <= 200) oxyPiece6.style.transform = `translateX(${0.97 - (scroll / 200)}rem) translateY(${1.25 - (scroll / 100)}rem) scale(${1 - (scroll / 200)})`;

  // if (scroll > 40 && scroll <= 240) oxyPiece7.style.transform = `translateX(${-3.65 + ((scroll - 40) / 50)}rem) translateY(${2.75 - ((scroll - 40) / 75)}rem) scale(${1 - ((scroll - 40) / 200)})`;

  // if (scroll > 80 && scroll <= 255) oxyPiece8.style.transform = `translateX(${-6.85 + ((scroll - 80) / 25)}rem) translateY(${3.42 - ((scroll - 80) / 50)}rem) scale(${1 - ((scroll - 80) / 175)})`;

  mandala.style.transform = `translateY(${scroll / 1.5}px)`;
  // mandala.style.transform = `rotate(${scroll / 3}deg)`;
  // if (scroll < 100) {
  oxytocin.style.transform = `translateY(-${scroll / 20}px)`;
  oxytocin.style.opacity = `${100 - (scroll / 5)}%`
};
