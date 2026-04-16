

document.addEventListener("DOMContentLoaded", function () {

   
    const greetBtn = document.getElementById("greetBtn");
    const darkModeBtn = document.getElementById("darkModeBtn");
    const hoverImage = document.getElementById("hoverImage");

   
    greetBtn.addEventListener("click", function () {
        alert("Hello! Welcome to my interactive webpage!");
    });

    
    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

   
    hoverImage.addEventListener("mouseover", function () {
        hoverImage.src = "assets/image2.jpg";
    });

    hoverImage.addEventListener("mouseout", function () {
        hoverImage.src = "assets/image1.jpg";
    });

});
