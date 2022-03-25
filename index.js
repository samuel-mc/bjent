let isShowing = false;

const header = document.querySelector(".header");
const navbar = document.querySelector(".header__nav");
const iconHamburguer = document.getElementById('iconHamburguer');
const iconCross = document.getElementById('iconCross');


window.addEventListener("scroll", function(e) {
    if (window.scrollY >  80) {
        header.classList = "header bg";
    } else {
        header.classList = "header";
    }
});

const handleShowNav = () => {
    if (!isShowing) {
        isShowing = true;
        navbar.style.display = "block";
        iconHamburguer.style.display = "none";
        iconCross.style.display = "block";


    } else {
        isShowing = false;
        navbar.style.display = "none";
        iconHamburguer.style.display = "block";
        iconCross.style.display = "none";
    }
}