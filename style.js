

const textBtn = document.getElementById("textBtn");
const title = document.getElementById("title");
const darkModeBtn = document.getElementById("darkModeBtn");
const myImage = document.getElementById("myImage");


textBtn.addEventListener("click", function() {
  title.textContent = "You clicked the button!";
});


darkModeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});


myImage.addEventListener("mouseover", function() {
  myImage.src = "image2.jpg";
});

myImage.addEventListener("mouseout", function() {
  myImage.src = "image1.jpg";
});
