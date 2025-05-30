const menuButton = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  sideMenu.classList.toggle('open');
});
