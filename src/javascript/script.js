const toggleBtn = document.querySelector('.toggle-btn');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const btnClose = document.querySelector('.btn-close');

const toggleMenu = () => {
    menu.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
};

const closeMenu = () => {
    menu.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
};

toggleBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);
btnClose.addEventListener('click', closeMenu);
