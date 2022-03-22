const header = document.querySelector(".header");
window.addEventListener("scroll", function(e) {
    if (window.scrollY >  80) {
        header.classList = "header bg";
    } else {
        header.classList = "header";
    }
});