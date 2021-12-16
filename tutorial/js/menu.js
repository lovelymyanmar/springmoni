function openMenu() {
    document.querySelector('#menu-btn').onclick = function() {
        document.querySelector('.menu-container').style.display = 'block';
    }
}
function closeMenu() {
    document.querySelector('#close-menu').onclick = function() {
        document.querySelector('.menu-container').style.display = 'none';
    }
}
export {
    openMenu,
    closeMenu
}
