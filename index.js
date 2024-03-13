let sideMenu = document.getElementById('aside');
let menuBtn = document.getElementById('menu-btn');
let closeBtn = document.getElementById('close-btn');
let themeToggler = document.getElementById('theme-toggler');
let setting = document.getElementById('setting');
let lang = document.getElementById('lang');
let closeSetting = document.getElementById('colse-setting');
let english = $('#english');
let defalult = $('#Default');
let persion = $('#persion');
// let selection = $('#lan');
menuBtn.addEventListener('click', (event) => {
    sideMenu.style.display = 'block';
});


closeBtn.addEventListener('click', (e) => {
    sideMenu.style.display = 'none';
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('img:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('img:nth-child(2)').classList.toggle('active');
})
// ..................
// closesetting

setting.addEventListener('click', (e) => {
    lang.style.top = "0";
    e.preventDefault();
});
closeSetting.addEventListener('click', () => {
    lang.style.top = "-100vh";
});



