const repairsMobile = () => {
    const btns = Array.from(document.querySelector('.nav-list-repair').children);
    const btnsBlock = document.querySelector('.nav-list-repair');
    let index = 0;
    let trs = 0;
    const arrowRight = document.querySelector('#nav-arrow-repair-right_base');
    const arrowLeft = document.querySelector('#nav-arrow-repair-left_base');

    arrowRight.addEventListener('click', () => {
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
}
export default repairsMobile;