const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobile-menu');
const sideClose = document.getElementById('sidebar-close');

mobileMenu.addEventListener('click', () => {
  sidebar.classList.add('sidebar-active');
  overlay.classList.add('overlay-active');
});

sideClose.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-active');
  overlay.classList.remove('overlay-active');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-active');
  overlay.classList.remove('overlay-active');
});

window.addEventListener('resize', () => {
  sidebar.classList.remove('sidebar-active');
  overlay.classList.remove('overlay-active');
})