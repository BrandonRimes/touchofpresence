const html = document.documentElement;
const homePage = document.getElementById("homePage");
const menuButton = document.getElementById("menuButton");
const menuPage = document.getElementById("menuPage");
const aboutPage = document.getElementById("aboutPage");
const tribePage = document.getElementById("tribePage");
const servicesPage = document.getElementById("servicesPage");
const services = document.querySelectorAll(".services");
const servicesBG = document.getElementById("bgServices");
const servicesHeader = document.getElementById("servicesHeader");
const connectPage = document.getElementById("connectPage");
const logo = document.getElementById("logo");
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

let activePage = homePage;
const pages = {
  "homeOption": homePage,
  "menuOption": menuPage,
  "aboutOption": aboutPage,
  "tribeOption": tribePage,
  "servicesOption": servicesPage,
  "connectOption": connectPage
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

  servicesBG.style.transform = `translateY(-${scroll / 1.4}px)`;
  // let servicesHeaderY = servicesHeader.getBoundingClientRect().y;
  // if (scroll > 0) {
  //   servicesHeader.classList.add("atTop");
  // } else {
  //   servicesHeader.classList.remove("atTop");
  // };;
};
