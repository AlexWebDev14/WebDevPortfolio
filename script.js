const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');

  const isExpanded = navMenu.classList.contains('active');
  navToggle.setAttribute('aria-expanded', isExpanded);
  navToggle.setAttribute('aria-label', isExpanded ? 'Cerrar menú' : 'Abrir menú');
});

// Cerrar menú al hacer clic en un enlace
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir menú');
  });
});