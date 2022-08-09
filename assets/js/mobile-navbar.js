var ul = document.querySelector('.nav-list');
var menuBtn = document.querySelector('.menu-btn i');
/* Show Menu */
function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}