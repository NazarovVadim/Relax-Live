const problems = () => {
    document.querySelector('.problems-item-popup-1').querySelectorAll('.problems-item-popup__descr').forEach(item => item.style.transform = 'rotateZ(180deg)');
    document.querySelector('.problems-item-popup-1').querySelectorAll('.problems-item-popup__title-title').forEach(item => item.style.transform = 'rotateZ(180deg)');
    const icons = document.querySelectorAll('.problems-item__icon');
    const style = document.createElement('style');
    icons.forEach(item => {
        item.addEventListener('mouseenter', (event) => {
            let target = event.target;
            let h = target.querySelector('.problems-item-popup').offsetHeight;
            const popupInfo = target.querySelector('.problems-item-popup');
            if(event.clientY < h){
                if(!target.querySelector('.problems-item-popup').classList.contains('problems-item-popup-1')){
                    target.querySelector('.problems-item-popup').style.cssText = `
                        top: ${h / 1.5}px;
                        transform: rotateZ(180deg);
                        visibility: visible;
                        opacity: 1;
                    `;
                    target.querySelector('.problems-item-popup').querySelector('div').style.cssText = `
                        transform: rotateZ(180deg);
                    `;  
                } else{
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
                    target.querySelector('.problems-item-popup').style.cssText = `
                        visibility: visible;
                        opacity: 1;
                    `;
                    target.querySelector('.problems-item-popup').querySelector('div').style.cssText = `
                        transform: rotateZ(0);
                    `;
                }
            }
            
        });
        item.addEventListener('mouseleave', (event) => {
            let target = event.target;
            let h = target.querySelector('.problems-item-popup').offsetHeight;
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