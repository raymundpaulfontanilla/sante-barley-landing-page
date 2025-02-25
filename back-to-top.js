window.onscroll = function () {
  let button = document.getElementById("backToTop");
  if (document.documentElement.scrollTop > 200) {
    button.style.display = "block"; // Show button when scrolled down
  } else {
    button.style.display = "none"; // Hide when at the top
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
