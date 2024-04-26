window.onscroll = function() { updateProgressBar() };

function updateProgressBar() {
  // Calculate the scroll progress
  var scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

  // Update the width of the progress bar
  var progressBar = document.getElementById("progress-bar");
  progressBar.style.width = scrolled + "%";

  // Add or remove class based on scroll position
  if (window.scrollY > 0) {
    progressBar.classList.add("scroll-chocolate");
  } else {
    progressBar.classList.remove("scroll-chocolate");
  }
}
