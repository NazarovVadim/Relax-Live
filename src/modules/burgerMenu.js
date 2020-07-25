const burgerMenu = () => {
    const menu = document.querySelector('.popup-menu');
    let device = (document.documentElement.clientWidth > 576) ? 'desktop' : 'mobile';

    window.addEventListener('resize', event => {
        let dev0 = device;
        device = (document.documentElement.clientWidth > 576) ? 'desktop' : 'mobile';
        if(dev0 !== device){
            if(device === 'desktop'){
                menu.querySelector('.popup-dialog-menu').style = 'transform: translate3D(625px,0,0);'
            } else{
                menu.querySelector('.popup-dialog-menu').style = 'transform: translate3D(0,-100vh,0);'
            }
        }
    })

    document.addEventListener('click', event => {
        const target = event.target;
        if(device === 'desktop'){
            if((target.closest('.menu') || target.closest('.popup-dialog-menu')) && !target.closest('.close-menu')){
                menu.style.cssText = `visibility: visible;`;
                menu.querySelector('.popup-dialog-menu').style = 'transform: translate3D(0,0,0);'
            } else if((!target.closest('.row') || target.closest('.close-menu') ||target.closest('.menu-link') || target.closest('.button-footer'))){
                menu.style.cssText = `visibility: hidden;`;
                menu.querySelector('.popup-dialog-menu').style = 'transform: translate3D(625px,0,0);'
            } 
        } else if (device === 'mobile'){
            if((target.closest('.menu') || target.closest('.popup-dialog-menu')) && !target.closest('.close-menu')){
                menu.style.cssText = `visibility: visible;`;
                menu.querySelector('.popup-dialog-menu').style = 'transform: translate3D(0,0,0);'
            } else if((!target.closest('.row') || target.closest('.close-menu') ||target.closest('.menu-link') || target.closest('.button-footer'))){
                menu.style.cssText = `visibility: hidden;`;
                menu.querySelector('.popup-dialog-menu').style = 'transform: translate3D(0,-100vh,0);'
            }
        }
        
    })
}
export default burgerMenu;