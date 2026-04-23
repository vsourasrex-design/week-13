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
const canvas = document.getElementById("jungleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 50; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3,
    speedY: Math.random() * 1 + 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(144, 238, 144, 0.7)";

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    p.y -= p.speedY;
    if (p.y < 0) {
      p.y = canvas.height;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animate);
}

animate();

