const burgerMenu = () => {
    const menu = document.querySelector('.popup-menu');

    document.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.menu')){
            menu.style.cssText = `visibility: visible;`;
            menu.querySelector('.popup-dialog-menu').style = 'transform: translate3D(0,0,0);'
        } else if(target.closest('.close-menu') || !target.closest('.row') || target.closest('.menu-link') || target.closest('.button-footer')){
            menu.style.cssText = `visibility: hidden;`;
            if(document.documentElement.clientWidth < 577)
                menu.querySelector('.popup-dialog-menu').style = 'transform: translate3D(0,-100vh,0);'
            else
                menu.querySelector('.popup-dialog-menu').style = 'transform: translate3D(625px,0,0);'
        }
    })
}
export default burgerMenu;