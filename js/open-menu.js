let opened = false;
const menu_bar = document.querySelector('.menu')
const content = document.querySelector('.content')
const footer = document.querySelector('.footer')

function open_menu() {
    opened = !opened;
    if (opened) {
        menu_bar.style.display = 'flex';
    }
    else {
        menu_bar.style.display = 'none';
    }
};
content.addEventListener('click',()=> {
    opened = false;
    menu_bar.style.display = 'none';
});
footer.addEventListener('click',()=> {
    opened = false;
    menu_bar.style.display = 'none';
})