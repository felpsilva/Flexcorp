document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('open');

    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('open');
}