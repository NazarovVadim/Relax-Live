const portfolio = () => {
    const sliderDesktop = document.querySelector('.portfolio-slider').querySelector('div');
    const sliderMobile = document.querySelector('.portfolio-slider-mobile').querySelector('div');
    const sliderPopup = document.querySelector('.popup-portfolio-slider');
    const arrowRightDesktop = document.querySelector('#portfolio-arrow_right');
    const arrowRightMobile = document.querySelector('#portfolio-arrow-mobile_right');
    const arrowRightPopup = document.querySelector('#popup_portfolio_right');
    const arrowLeftDesktop = document.querySelector('#portfolio-arrow_left');
    const arrowLeftMobile = document.querySelector('#portfolio-arrow-mobile_left');
    const arrowLeftPopup = document.querySelector('#popup_portfolio_left');
    const mobileCounter = document.querySelector('#portfolio-counter');
    const mobileCounterCurrent= mobileCounter.querySelector('.slider-counter-content__current');
    const mobileCounterTotal= mobileCounter.querySelector('.slider-counter-content__total');
    const popupCounter = document.querySelector('#popup-portfolio-counter');
    const popupCounterCurrent= popupCounter.querySelector('.slider-counter-content__current');
    const popupCounterTotal = popupCounter.querySelector('.slider-counter-content__total');
    const slides1 = Array.from(sliderMobile.children);
    const slides2 = Array.from(sliderDesktop.children);
    const slidesPopup = Array.from(sliderPopup.children);
    const texts = document.querySelectorAll('.popup-portfolio-text');
    let popupOpened = false;
    let index = 0; 
    let popupIndex = 0;
    texts[0].style.display = 'block';
    arrowRightMobile.style.cssText = `z-index: 11`;
    arrowLeftMobile.style.cssText = `z-index: 11`;
    mobileCounterTotal.textContent = slides1.length;
    popupCounterTotal.textContent = slidesPopup.length;
    window.addEventListener('resize', () => {
        index = 0;
        if(document.documentElement.clientWidth > 577){
            arrowRightMobile.style.display = `none`;
            arrowLeftMobile.style.display = `none`;
        }
        arrowLeftDesktop.style.display = 'none';
        arrowLeftMobile.style.display = 'none';
        sliderDesktop.style.cssText = `transform: translateX(-${0}px); display: flex`;
        sliderMobile.style.cssText = `transform: translateX(-${0}px); display: flex`;
    })
    sliderDesktop.querySelectorAll('.portfolio-slider__slide-frame').forEach((item, i) => {
        item.addEventListener('click', () => {
            document.querySelector('.popup-portfolio').style.visibility = 'visible';
            popupOpened = true;
            popupIndex = i;
            texts.forEach(item => item.style.display = 'none')
            texts[popupIndex].style.display = 'block';
            popupCounterCurrent.textContent = popupIndex + 1;
            if(popupIndex > 0) arrowLeftPopup.style.display = 'flex';
            if(popupIndex === slidesPopup.length-1) arrowRightPopup.style.display = 'none';
            if(popupIndex < slidesPopup.length-1) arrowRightPopup.style.display = 'flex';
            if(popupIndex === 0) arrowLeftPopup.style.display = 'none';
            sliderPopup.style.cssText = `transform: translateY(-${slidesPopup[popupIndex].offsetTop}px);`;
        })
    })
    
    document.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('#portfolio-arrow_right')){
            index ++;
            if(index > 0) arrowLeftDesktop.style.display = 'flex';
            if(document.documentElement.clientWidth > 1024){
                if(index === slides2.length-3) arrowRightDesktop.style.display = 'none';
            } else if(document.documentElement.clientWidth > 768 && document.documentElement.clientWidth <= 1024){
                if(index === slides2.length-2) arrowRightDesktop.style.display = 'none';
            } else if(document.documentElement.clientWidth <= 768){
                if(index === slides2.length-1) arrowRightDesktop.style.display = 'none';
            }
            
            sliderDesktop.style.cssText = `transform: translateX(-${slides2[index].offsetLeft}px); display: flex`;
        }
        if(target.closest('#portfolio-arrow_left')){
            index --;
            if(index < slides2.length-3) arrowRightDesktop.style.display = 'flex';
            if(index === 0) arrowLeftDesktop.style.display = 'none';
            sliderDesktop.style.cssText = `transform: translateX(-${slides2[index].offsetLeft}px); display: flex`;
        }
        if(target.closest('#portfolio-arrow-mobile_right')){
            index++;
            mobileCounterCurrent.textContent = index+1;
            if(index > 0) arrowLeftMobile.style.display = 'flex';
                if(index === slides1.length-1) arrowRightMobile.style.display = 'none';
            
            sliderMobile.style.cssText = `transform: translateX(-${slides1[index].offsetLeft}px); display: flex`;
        }
        if(target.closest('#portfolio-arrow-mobile_left')){
            index --;
            mobileCounterCurrent.textContent = index+1;
            if(index < slides1.length-1) arrowRightMobile.style.display = 'flex';
            if(index === 0) arrowLeftMobile.style.display = 'none';
            sliderMobile.style.cssText = `transform: translateX(-${slides1[index].offsetLeft}px); display: flex`;
        }
        if(popupOpened && (target.closest('.close'))){
            document.querySelector('.popup-portfolio').style.visibility = 'hidden';
        }if(target.closest('#popup_portfolio_right')){
            popupIndex++;
            texts[popupIndex].style.display = 'block';
            texts[popupIndex-1].style.display = 'none';
            popupCounterCurrent.textContent = popupIndex + 1;
            if(popupIndex > 0) arrowLeftPopup.style.display = 'flex';
            if(popupIndex === slidesPopup.length-1) arrowRightPopup.style.display = 'none';
            sliderPopup.style.cssText = `transform: translateY(-${slidesPopup[popupIndex].offsetTop}px);`;
        }
        if(target.closest('#popup_portfolio_left')){
            popupIndex --;
            texts[popupIndex].style.display = 'block';
            texts[popupIndex+1].style.display = 'none';
            popupCounterCurrent.textContent = popupIndex + 1;
            if(popupIndex < slidesPopup.length-1) arrowRightPopup.style.display = 'flex';
            if(popupIndex === 0) arrowLeftPopup.style.display = 'none';
            sliderPopup.style.cssText = `transform: translateY(-${slidesPopup[popupIndex].offsetTop}px);`;
        }
    })
}
export default portfolio;