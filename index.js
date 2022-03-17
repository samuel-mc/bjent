const header = document.querySelector(".header");
const dropMenu = document.querySelector(".dropdown-menu")
window.addEventListener("scroll", function(e) {
    if (window.scrollY >  120) {
        header.classList = "header bg";
        dropMenu.classList = "dropdown-menu bg";
    } else {
        header.classList = "header";
        dropMenu.classList = "dropdown-menu";

    }
    console.log(window.scrollY)
});

// console.log(window.scrollY);