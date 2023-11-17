const nav = document.getElementById("topMenu");
const button = document.getElementById("buttonGroup"); 
const switchTheme = document.getElementById("switch");

function showNavMenu() {
    if (nav.className === "topMenu") {
        nav.className += " responsive";
        button.className += " responsive";
        switchTheme.className += " responsive";
    } else {
        nav.className = "topMenu";
        button.className = "buttonGroup";
        switchTheme.className = "switch"
    }
}

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

const logoBlack = document.getElementById("black");
const logoWhite = document.getElementById("white");

function changeColor() {
    if (localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-light');
        logoWhite.style.display = "none"
        logoBlack.style.display = "block"

    } else {
        setTheme('theme-dark');
        logoWhite.style.display = "block"
        logoBlack.style.display = "none"

    }
}

(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        logoWhite.style.display = "block"
        logoBlack.style.display = "none"
    } else {
        setTheme('theme-light');
        logoWhite.style.display = "none"
        logoBlack.style.display = "block"
    }
})();