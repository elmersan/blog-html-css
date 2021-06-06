var bullets = document.querySelectorAll("#bullet");

let manualActive = function (manual) {
  //remove class
  bullets.forEach((bullet) => {
    bullet.classList.remove("bulletActive");
  });

  //active class
  bullets[manual].classList.add("bulletActive");
};

bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    manualActive(index);
  });
});

//themes
var themes = document.querySelectorAll("#theme");
const DEFAUL_THEME = "./css/nemiumA/nemiumA.css";
const THEMES_STYLES = {
  nemiumA: "./css/nemiumA/nemiumA.css",
  nemiumB: "./css/nemiumB/nemiumB.css",
  nemiumC: "./css/nemiumC/nemiumC.css",
  nemiumD: "./css/nemiumD/nemiumD.css",
  nemiumE: "./css/nemiumE/nemiumE.css",
};

let manualActiveTheme = function (manual) {
  //remove class
  themes.forEach((theme) => {
    theme.classList.remove("themeActive");
  });

  //active class
  themes[manual].classList.add("themeActive");
};

var themeLink = document.getElementById("linkTheme");

themes.forEach((theme, index) => {
  theme.addEventListener("click", () => {
    manualActiveTheme(index);
    const nameTheme = theme.getAttribute("name");
    const setHref = THEMES_STYLES[nameTheme] || DEFAUL_THEME;
    themeLink.setAttribute("href", setHref);
  });
});
