function enableSmoothScroll() {
  var links = document.querySelectorAll('.nav-link');

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
      var target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
function trackActiveSection() {
  var links = document.querySelectorAll('.nav-link');
  var sections = [];

  for (var i = 0; i < links.length; i++) {
    var section = document.querySelector(links[i].getAttribute('href'));
    if (section) sections.push({ link: links[i], element: section });
  }

  function update() {
    var line = window.scrollY + (window.innerHeight / 2);
    var current = null;

    for (var i = 0; i < sections.length; i++) {
      if (sections[i].element.offsetTop <= line) current = sections[i];
    }

    for (var j = 0; j < sections.length; j++) {
      sections[j].link.classList.remove('is-active');
    }
    if (current) current.link.classList.add('is-active');
  }

  window.addEventListener('scroll', update);
  update();
}

function enableBackToTop() {
  var button = document.getElementById('to-top');
  if (!button) return;

  function update() {
    if (window.scrollY > 600) {
      button.classList.add('is-visible');
    } else {
      button.classList.remove('is-visible');
    }
  }

  button.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', update);
  update();
}

document.addEventListener('DOMContentLoaded', function () {
  enableSmoothScroll();
  trackActiveSection();
  enableBackToTop();
});