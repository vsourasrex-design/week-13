// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Select elements
    const greetBtn = document.getElementById("greetBtn");
    const darkModeBtn = document.getElementById("darkModeBtn");
    const hoverImage = document.getElementById("hoverImage");

    // Select ALL images on the page
    const allImages = document.querySelectorAll("img");

    // -----------------------------
    // IMAGE SIZE RESTRICTION
    // -----------------------------
    // Set max width and auto height for all images
    allImages.forEach(function (img) {
        img.style.maxWidth = "300px";
        img.style.height = "auto";
    });

    // -----------------------------
    // GREETING BUTTON
    // -----------------------------
    greetBtn.addEventListener("click", function () {
        alert("Hello! Welcome to my interactive webpage!");
    });

    // -----------------------------
    // DARK MODE TOGGLE
    // -----------------------------
    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // -----------------------------
    // IMAGE HOVER EFFECT
    // -----------------------------
    hoverImage.addEventListener("mouseover", function () {
        hoverImage.src = "assets/image2.jpg";
    });

    hoverImage.addEventListener("mouseout", function () {
        hoverImage.src = "assets/image1.jpg";
    });

});

