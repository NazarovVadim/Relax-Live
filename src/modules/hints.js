const showHint = (icon) => {
    if(document.documentElement.clientWidth > 1024){
        let target = (icon != event) ? icon : event.target;
        if(target == event.target){
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
        } else{
            target.classList.add('active-item');
            let h = target.textContent.trim();
            h = h.replace(/\D+/g, '');
            h = target.querySelector(`.formula-item-popup-${h}`).offsetHeight;
            target = target.closest('.formula-item');
            const popupInfo = target.querySelector('.formula-item-popup');
            target.closest('.formula-item').style.cssText = `z-index: 1`;
                    popupInfo.style.cssText = `
                        visibility: visible;
                        opacity: 1;
                    `;
        }
    }
};

const hideHint = () => {
    if(document.documentElement.clientWidth > 1024){
        const target = event.target;
        if(target.closest('.formula-item__icon-inner-text')){
            target.closest('.formula-item__icon').classList.toggle('active-item');
            document.querySelector(`.formula-item-popup-${target.textContent}`).style.cssText = `
                visibility: hidden;
                opacity: .1;
            `;
        }
    } 
    
}

const hints = () => {
    if(document.documentElement.clientWidth > 1024){
        document.addEventListener('mouseover', showHint);
        document.addEventListener('mouseout', hideHint);
    } else{
        const slides = document.querySelectorAll('.formula-slider__slide');
        let index = 0;

        slides[0].classList.add('active-item');
        document.addEventListener('click', event => {
            let target = event.target;
            if(target.closest('#formula-arrow_right') || target.closest('#formula-arrow_left')){
                slides.forEach((item, i) => {if(item.classList.contains('active-item')){item.classList.remove('active-item')}});
            }
            if(target.closest('#formula-arrow_right')){
                index++;
                if(index > slides.length - 1) index = 0;
                slides[index].classList.add('active-item');
            }
            if(target.closest('#formula-arrow_left')){
                index--;
                if(index < 0){
                    index = slides.length -1;
                }
                slides[index].classList.add('active-item');
            }
        })
    }
    


};

export default hints;