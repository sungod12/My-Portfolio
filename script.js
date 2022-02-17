function animateBar() {
  var reveals = document.querySelectorAll(".bar");

  for (let i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function animateDiv() {
  var reveals = document.querySelectorAll(".intro-container");

  var elementTop = reveals[0].getBoundingClientRect().top;
  if (elementTop > -8.5) {
    reveals[0].classList.add("active");
  } else {
    reveals[0].classList.remove("active");
  }
}

function animateProject() {
  var reveals = document.querySelectorAll(".project-container");

  var windowHeight = window.innerHeight;
  var elementTop = reveals[0].getBoundingClientRect().top;
  var elementVisible = 250;

  if (elementTop < windowHeight - elementVisible) {
    reveals[0].classList.add("active");
  } else {
    reveals[0].classList.remove("active");
  }
}

window.addEventListener("scroll", animateDiv);
window.addEventListener("scroll", animateBar);
window.addEventListener("scroll", animateProject);
