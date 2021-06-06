var bullets = document.querySelectorAll("#bullet");

let manualActive = function (manual, array, nameClass) {
  //remove class
  array.forEach((bullet) => {
    bullet.classList.remove(nameClass);
  });

  //active class
  array[manual].classList.add(nameClass);
};

//active slider
bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    manualActive(index, bullets, "bulletActive");
  });
});

//themes
var themes = document.querySelectorAll("#theme");
var themeLink = document.getElementById("linkTheme");
//Select theme
const DEFAUL_THEME = "./css/nemiumA/nemiumA.css";
const THEMES_STYLES = {
  nemiumA: "./css/nemiumA/nemiumA.css",
  nemiumB: "./css/nemiumB/nemiumB.css",
  nemiumC: "./css/nemiumC/nemiumC.css",
  nemiumD: "./css/nemiumD/nemiumD.css",
  nemiumE: "./css/nemiumE/nemiumE.css",
};

themes.forEach((theme, index) => {
  theme.addEventListener("click", () => {
    manualActive(index, themes, "themeActive");
    const nameTheme = theme.getAttribute("name");
    const setHref = THEMES_STYLES[nameTheme] || DEFAUL_THEME;
    themeLink.setAttribute("href", setHref);
  });
});
