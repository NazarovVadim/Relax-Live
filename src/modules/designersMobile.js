

const designersMobile = () => {
    const btns = Array.from(document.querySelector('#designs-list').children);
    const btnsBlock = document.querySelector('#designs-list');
    let index = 0;
    let trs = 0;
    const arrowNavRight = document.querySelector('#nav-arrow-designs_right');
    const arrowNavLeft = document.querySelector('#nav-arrow-designs_left');
    const arrowRight = document.querySelector('#design_right');
    const arrowLeft = document.querySelector('#design_left');
    const counter = document.querySelector('#designs-counter');
    const counterCurrent= counter.querySelector('.slider-counter-content__current');
    const counterTotal = counter.querySelector('.slider-counter-content__total');
    const sliders = Array.from(document.querySelector('.custom').children);


    window.addEventListener('resize', () => {
        document.querySelectorAll('.designPopupSlider__wrap').forEach(item => item.style.dislplay= 'block')
    })
    counterCurrent.textContent = 1;
    counterTotal.textContent = sliders[0].querySelectorAll('.designs-slider__style-slide').length;

    let slideIndex = 0;
    let currentSlider = 0;
    document.addEventListener('click', evt => {
        const target = evt.target;
        if(target.closest('.designs-nav__item_base')){
            counterCurrent.textContent = 1;
            slideIndex = 0;
            btns.forEach((btn, i) => {
                if(btn === target.closest('.designs-nav__item_base')){
                    currentSlider = i;
                }
            })
            counterTotal.textContent = sliders[currentSlider].querySelectorAll('.designs-slider__style-slide').length;
            sliders[currentSlider].style.cssText = `transition: transform .5s; transform: translateY(-${0}%)`
        }
        if(target.closest('#design_right')){
            slideIndex++;
            counterCurrent.textContent = slideIndex+1;
            if(slideIndex > counterTotal.textContent - 1){
                slideIndex = 0;
                counterCurrent.textContent = slideIndex+1;
            }
            sliders[currentSlider].style.cssText = `transition: transform .5s; transform: translateY(-${slideIndex*100}%)`
        }
        if(target.closest('#design_left')){
            slideIndex--;
            counterCurrent.textContent = slideIndex+1;
            if(slideIndex < 0){
                slideIndex = counterTotal.textContent - 1;
                counterCurrent.textContent = slideIndex+1;
            }
            sliders[currentSlider].style.cssText = `transition: transform .5s; transform: translateY(-${slideIndex*100}%)`
        }
    })

    arrowNavRight.addEventListener('click', () => {
        if(document.documentElement.clientWidth < 580){
            if(index < btns.length - 1){
                index++;
                trs += btns[index].offsetWidth;
                btnsBlock.style.cssText = `transform: translateX(-${trs}px)`
            } else{
                index = 0;
                trs = 0;
                btnsBlock.style.cssText = `transform: translateX(-${trs}px)`
            }
        }else if(document.documentElement.clientWidth > 580 && document.documentElement.clientWidth < 1025){
            if(index < btns.length - 2){
                index++;
                trs += btns[index].offsetWidth;
                btnsBlock.style.cssText = `transform: translateX(-${trs}px)`
            } else{
                index = 0;
                trs = 0;
                btnsBlock.style.cssText = `transform: translateX(-${trs}px)`
            }
        } else if(document.documentElement.clientWidth > 1025 && document.documentElement.clientWidth < 1140){
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
    arrowNavLeft.addEventListener('click', () => {
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
}
export default designersMobile;