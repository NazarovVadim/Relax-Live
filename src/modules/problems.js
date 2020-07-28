const problems = () => {
    document.querySelector('.problems-item-popup-1').querySelectorAll('.problems-item-popup__descr').forEach(item => item.style.transform = 'rotateZ(180deg)');
    document.querySelector('.problems-item-popup-1').querySelectorAll('.problems-item-popup__title-title').forEach(item => item.style.transform = 'rotateZ(180deg)');
    const icons = document.querySelectorAll('.problems-item__icon');
    document.querySelector('.problems-slider__slide').classList.remove('active-item');
    if(document.documentElement.clientWidth <= 1024){
        let slides = document.querySelector('.problems-slider-slider').querySelectorAll('.problems-item__icon');
        slides[0].parentNode.classList.add('active-item');
        let index = 0;
        document.addEventListener('click', event => {
            let target = event.target;
            if(target.closest('#problems-arrow_right') || target.closest('#problems-arrow_left')){
                slides.forEach((item, i) => {if(item.parentNode.classList.contains('active-item')){item.parentNode.classList.remove('active-item')}});
            }
            if(target.closest('#problems-arrow_right')){
                index++;
                if(index > slides.length - 1) index = 0;
                slides[index].parentNode.classList.add('active-item');
            }
            if(target.closest('#problems-arrow_left')){
                index--;
                if(index < 0){
                    index = slides.length -1;
                }
                slides[index].parentNode.classList.add('active-item');
            }
        })
        // document.addEventListener('click', event => {
        //     let target = event.target;
        //     if(target.closest('#problems-arrow_right') || target.closest('#problems-arrow_left')){
        //         slides.forEach((item, i) => {if(item.parentNode.classList.contains('active-item')){ item.parentNode.classList.remove('active-item'); index = i}})
        //     }
        //     if(target.closest('#problems-arrow_right')){
        //         if(index + 1 > slides.length-1) index = -1; 
        //         slides[index + 1].parentNode.classList.add('active-item');
        //     }
        //     if(target.closest('#problems-arrow_left')){
        //         if(index - 1 < 0) index = slides.length;
        //         slides[index - 1].parentNode.classList.add('active-item');
        //     }
        // })
    }
    const style = document.createElement('style');
    icons.forEach(item => {
        item.addEventListener('mouseenter', (event) => {
            let target = event.target;
            item.parentNode.classList.add('active-item')
            let h = target.querySelector('.problems-item-popup').offsetHeight;
            const popupInfo = target.querySelector('.problems-item-popup');
            if(event.clientY < h){
                if(!target.querySelector('.problems-item-popup').classList.contains('problems-item-popup-1')){
                    if(document.documentElement.clientWidth > 1024){
                        target.querySelector('.problems-item-popup').style.cssText = `
                        top: ${h / 1.5}px;
                        transform: rotateZ(180deg);
                        visibility: visible;
                        opacity: 1;
                    `;
                    target.querySelector('.problems-item-popup').querySelector('div').style.cssText = `
                        transform: rotateZ(180deg);
                    `; 
                    } 
                    
                } else{
                    if(document.documentElement.clientWidth > 1024){
                        target.querySelector('.problems-item-popup').style.cssText = `
                        top: ${h / 1.5}px;
                        transform: rotateZ(0);
                        visibility: visible;
                        opacity: 1;
                    `;
                    target.querySelector('.problems-item-popup').querySelector('div').style.cssText = `
                        transform: rotateZ(180deg);
                    `;
                    }
                    
                }
                
            } else{
                if(!target.querySelector('.problems-item-popup').classList.contains('problems-item-popup-1')){
                        target.querySelector('.problems-item-popup').style.cssText = `
                        visibility: visible;
                        opacity: 1;
                    `;
                    target.querySelector('.problems-item-popup').querySelector('div').style.cssText = `
                        transform: rotateZ(0);
                    `;
                    
                } else{
                    if(document.documentElement.clientWidth > 1024){
                        target.querySelector('.problems-item-popup').style.cssText = `
                        visibility: visible;
                        opacity: 1;
                    `;
                    target.querySelector('.problems-item-popup').querySelector('div').style.cssText = `
                        transform: rotateZ(0);
                    `;
                    }
                    
                }
            }
            
        });
        item.addEventListener('mouseleave', (event) => {
            let target = event.target;
            let h = target.querySelector('.problems-item-popup').offsetHeight;
            item.parentNode.classList.remove('active-item')
            const popupInfo = target.querySelector('.problems-item-popup');
            if(event.clientY < h*1.5){
                target.querySelector('.problems-item-popup').style.cssText = `
                    visibility: hidden;
                    opacity: .5;
                `;
            } else{
                target.querySelector('.problems-item-popup').style.cssText = `
                    visibility: hidden;
                    opacity: .5;
                `;
            }
            
        });
    })
}

export default problems;