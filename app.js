const ham = document.querySelector(".ham");
const cross = document.querySelector(".cross");

ham.addEventListener("click", () => {
  document.querySelector(".nav-links ul").style.transform = "translateX(-2%)";
});


cross.addEventListener("click", () => {
    document.querySelector(".nav-links ul").style.transform = "translateX(-110%)";
  });
  