const designersPopup = () => {
    const block = document.querySelector('#nav-list-popup-designs');
    const items = block.querySelectorAll('.designs-nav__item_popup');
    const wrap = document.querySelector('.popup-design-slider').querySelector('div');
    const sliders = Array.from(wrap.children);
    const arrowSliderRight = document.querySelector('#popup_design_right')
    const arrowSliderLeft = document.querySelector('#popup_design_left')
    document.querySelector('#slider-counter-content__total').textContent = Array.from(sliders[0].children).length;
    const texts = document.querySelectorAll('.popup-design-text');
    
    //const slides = document.querySelectorAll('.scheme-slider__slide');
    wrap.style.cssText = `display:flex`;
    let activeSlider = 0;
    let index = 0;
    document.addEventListener('click', event => {
        let target = event.target;
        if(target.closest('.designs-nav__item_popup')){
            items.forEach((item, i) => {
                if(item.classList.contains('active')){
                    item.classList.remove('active');
                }
                if(item === target.closest('.designs-nav__item_popup')){
                    item.classList.add('active');
                    
                    index = i;
                    texts.forEach((text) => {
                        if(text.classList.contains('visible-content-block')){
                            text.classList.remove('visible-content-block')
                        }
                    })
                    texts.forEach((text, i) => {
                        if(i === index){
                            text.classList.add('visible-content-block')
                        }
                    })
                    
                }
            });
            sliders.forEach((slider, i) => {
                if(index === i){
                    wrap.style.cssText = `transform: translateX(-${sliders[i].offsetLeft}px); transition: transform .5s; display:flex`;
                    activeSlider = i;
                    document.querySelector('#slider-counter-content__total').textContent = Array.from(slider.children).length;
                    document.querySelector('#slider-counter-content__current').textContent = '1';
                    slider.style.transform = 'translate(0)';
                } 
            })}
    })
    const btns = Array.from(document.querySelector('#nav-list-popup-designs').querySelector('div').children);
    const btnsBlock = document.querySelector('#nav-list-popup-designs').querySelector('div');
    let indexMob = 0;
    let trs = 0;
    const arrowRight = document.querySelector('#nav-arrow-popup-designs_right');
    const arrowLeft = document.querySelector('#nav-arrow-popup-designs_left');

    arrowRight.addEventListener('click', () => {
        if(document.documentElement.clientWidth < 580){
            if(indexMob < btns.length - 1){
                indexMob++;
                trs += btns[indexMob].offsetWidth;
                btnsBlock.style.cssText = `transform: translateX(-${trs}px)`
            } else{
                indexMob = 0;
                trs = 0;
                btnsBlock.style.cssText = `transform: translateX(-${trs}px)`
            }
        }else if(document.documentElement.clientWidth > 580 && document.documentElement.clientWidth < 1025){
            if(indexMob < btns.length - 2){
                indexMob++;
                trs += btns[indexMob].offsetWidth;
                btnsBlock.style.cssText = `transform: translateX(-${trs}px)`
            } else{
                indexMob = 0;
                trs = 0;
                btnsBlock.style.cssText = `transform: translateX(-${trs}px)`
            }
        } else if(document.documentElement.clientWidth > 1025 && document.documentElement.clientWidth < 1140){
            if(indexMob < btns.length - 4){
                indexMob = 1;
                trs = btns[btns.length-1].offsetWidth;
                btnsBlock.style.cssText = `transform: translateX(-${trs}px)`
            } else{
                indexMob = 0;
                trs = 0;
                btnsBlock.style.cssText = `transform: translateX(-${trs}px)`
            }
        }
        
    });
    arrowLeft.addEventListener('click', () => {
        if(document.documentElement.clientWidth < 580){
            if(index > 0){
                index--;
                trs -= btns[index].offsetWidth;
                btnsBlock.style.cssText = `transform: translateX(-${trs}px)`
            } else{
                index = btns.length - 1;
                trs = 0;
                btns.forEach((item, i) => trs += btns[i].offsetWidth);
                trs -= btns[index].offsetWidth;
                btnsBlock.style.cssText = `transform: translateX(-${trs}px)`;
            } 
        }else if(document.documentElement.clientWidth > 580 && document.documentElement.clientWidth < 1025){
            if(index > 0){
                index--;
                trs -= btns[index].offsetWidth;
                btnsBlock.style.cssText = `transform: translateX(-${trs}px)`
            } else{
                index = btns.length - 2;
                trs = 0;
                btns.forEach((item, i) => trs += btns[i].offsetWidth);
                trs -= btns[index].offsetWidth*2;
                btnsBlock.style.cssText = `transform: translateX(-${trs}px)`;
            } 
        }else if(document.documentElement.clientWidth > 1025 && document.documentElement.clientWidth < 1140){
            if(index < btns.length - 4){
                index = 1;
                trs = btns[btns.length-1].offsetWidth;
                btnsBlock.style.cssText = `transform: translateX(-${trs}px)`
            } else{
                index = 0;
                trs = 0;
                btnsBlock.style.cssText = `transform: translateX(-${trs}px)`
            }
        }
    });
    let activeSlide = 0;
    sliders.forEach(item => {
        item.style.cssText = `transition:transform .5s;`;
    })
    document.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('#popup_design_right')){
            activeSlide++;
            if(activeSlide+1 > document.querySelector('#slider-counter-content__total').textContent){
                activeSlide = 0;
            }
            document.querySelector('#slider-counter-content__current').textContent = activeSlide+1;
            sliders[activeSlider].style.cssText = `transition:transform .5s;transform: translateY(-${sliders[activeSlider].querySelectorAll('.popup-design-slider__style-slide')[activeSlide].offsetTop}px)`;
        }
        if(target.closest('#popup_design_left')){
            activeSlide--;
            if(activeSlide < 0){
                activeSlide = +document.querySelector('#slider-counter-content__total').textContent-1;
            }
            document.querySelector('#slider-counter-content__current').textContent = activeSlide+1;
            sliders[activeSlider].style.cssText = `transition:transform .5s;transform: translateY(-${sliders[activeSlider].querySelectorAll('.popup-design-slider__style-slide')[activeSlide].offsetTop}px)`;
        }
    })
}
export default designersPopup;