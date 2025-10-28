// Get the button
const scrollUpBtn = document.getElementById("scrollUpBtn");

// Show the button when user scrolls down 200px
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

// When clicked, scroll smoothly to top
scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});