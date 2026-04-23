
document.addEventListener("DOMContentLoaded", function () {


    const greetBtn = document.getElementById("greetBtn");
    const darkModeBtn = document.getElementById("darkModeBtn");
    const hoverImage = document.getElementById("hoverImage");


    const allImages = document.querySelectorAll("img");


    allImages.forEach(function (img) {
        img.style.maxWidth = "300px";
        img.style.height = "auto";
    });

    
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

