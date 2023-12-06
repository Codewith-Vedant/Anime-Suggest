window.addEventListener("scroll", function() {
    var nav = document.getElementById("mainNav");
    if (window.scrollY > 100) {
        nav.style.backgroundColor = "#391";
    } else {
        nav.style.backgroundColor = "#255";
    }
});