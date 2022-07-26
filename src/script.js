const html = document.documentElement;
const homePage = document.getElementById("homePage");
const menuButton = document.getElementById("menuButton");
const menuPage = document.getElementById("menuPage");
const aboutPage = document.getElementById("aboutPage");
const teamPage = document.getElementById("teamPage");
const servicesPage = document.getElementById("servicesPage");
const services = document.querySelectorAll(".services");
const locationPage = document.getElementById("locationPage");
const logo = document.getElementById("logo");
const halfmandala = document.getElementById("halfmandala");
const halfbrain = document.getElementById("halfbrain");
const mandala = document.getElementById("mandala");
const oxytocin = document.getElementById("oxytocin");
const whereMotto = document.getElementById("whereMotto");
const scienceMotto = document.getElementById("scienceMotto");
const andMotto = document.getElementById("andMotto");
const presenceMotto = document.getElementById("presenceMotto");
const integrateMotto = document.getElementById("integrateMotto");

let activePage = homePage;
const pages = {
  "homeOption": homePage,
  "menuOption": menuPage,
  "aboutOption": aboutPage,
  "teamOption": teamPage,
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
  halfmandala.style.transform = `translateY(${scroll / 1.5}px)`;
  halfbrain.style.transform = `translateY(-${scroll / 1.5}px)`;
  if (scroll > 250) {
    halfmandala.style.transform = `translateX(-${scroll - 250}px) translateY(${scroll / 1.5}px)`;
    halfbrain.style.transform = `translateX(${scroll - 250}px) translateY(-${scroll / 1.5}px)`;
    integrateMotto.style.fontSize = `${(scroll - 250) / 2}px`;
  } else {integrateMotto.style.fontSize = `0px`;}
  if (scroll > 425) integrateMotto.style.fontSize = `${(425 - 250) / 2}px`;
  if (scroll < 170) whereMotto.style.transform = `translateX(${scroll}px)`;
  if (scroll < 235) scienceMotto.style.transform = `translateX(${scroll / 1.25}px)`;
  if (scroll < 200) andMotto.style.transform = `translateX(-${scroll}px)`;
  if (scroll < 210) presenceMotto.style.transform = `translateX(-${scroll / 1.25}px)`;
  // mandala.style.transform = `scale(${1 + scroll / 50})`;
  // mandala.style.transform = `rotate(${scroll / 2}deg)`;
  // if (scroll < 100) {
  //   oxytocin.style.transform = `scale(${1 - scroll / 100}) translateY(-${scroll}px)`;
  // }
};
