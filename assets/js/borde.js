// Borde
let flyer = document.querySelector('.flyer');

document.querySelector('.flyer').addEventListener('click', function () {
    if (flyer.style.border === "") {
        flyer.style.border = "2px solid red";
    } else if (flyer.style.border === "2px solid red") {
        flyer.style.removeProperty("border");
    }
});