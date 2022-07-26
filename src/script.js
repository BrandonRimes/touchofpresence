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
const mandala = document.getElementById("mandala");
const oxytocin = document.getElementById("oxytocin");

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
  // mandala.style.transform = `scale(${1 + html.scrollTop / 50})`;
  // mandala.style.transform = `rotate(${html.scrollTop / 2}deg)`;
  // if (html.scrollTop < 100) {
  //   oxytocin.style.transform = `scale(${1 - html.scrollTop / 100}) translateY(-${html.scrollTop}px)`;
  // }
};
