const hints = () => {
    document.addEventListener('mouseover', event => {
        let target = event.target;
        if(target.closest('.formula-item__icon')){

            target.closest('.formula-item__icon').classList.toggle('active-item');
            let h = document.querySelector(`.formula-item-popup-${target.textContent}`).offsetHeight;
            target = event.target.closest('.formula-item');
            const popupInfo = target.querySelector('.formula-item-popup')

            if(event.clientY < h*1.5){
                target.closest('.formula-item').style.cssText = `z-index: 1`;
                popupInfo.style.cssText = `
                    visibility: visible;
                    opacity: 1;
                    transform: rotateZ(180deg);
                    bottom: -${h + 75}px;
                `;
                popupInfo.querySelector('div').style.cssText = `
                    transform: rotateZ(180deg);
                `;
            } else {
                popupInfo.style.cssText = `
                    visibility: visible;
                    opacity: 1;
                    bottom: 90px;
                    transform: rotateZ(0);
                `;
                popupInfo.querySelector('div').style = '';
            }
        }
    });
    document.addEventListener('mouseout', event => {
        const target = event.target;
        if(target.closest('.formula-item__icon-inner-text')){
            target.closest('.formula-item__icon').classList.toggle('active-item');
            document.querySelector(`.formula-item-popup-${target.textContent}`).style.cssText = `
                visibility: hidden;
                opacity: .1;
            `;
        }
    });    
}
export default hints;