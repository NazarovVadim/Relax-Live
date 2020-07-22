const showNumbers = () => {
    const arrow = document.querySelector('.header-contacts__arrow');
    const secondNumberWrapper = document.querySelector('.header-contacts__phone-number-accord');
    const secondNumber = secondNumberWrapper.querySelector('.header-contacts__phone-number');
    let rotated = false;
    arrow.addEventListener('click', (e) => {
        if(!rotated){
            // arrow.style.cssText = ``;
            rotated = true;
            secondNumberWrapper.style.position = 'relative';
            secondNumber.style.opacity = '1';
            arrow.querySelector('img').style.cssText = `
                transform: rotateX(180deg);
                transition: all .4s;
            `;
            arrow.style.cssText = `
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            `;
        } else{
            arrow.querySelector('img').style.cssText = `
                transform: rotateX(0deg);
                transition: all .4s;
            `;
            rotated = false;
            secondNumberWrapper.style.position = 'absolute';
            secondNumber.style.opacity = '0';
        }
        
    });
}

export default showNumbers;