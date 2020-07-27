const designers = () => {
    const btns = Array.from(document.querySelector('#designs-list').children);
    let slides = Array.from(document.querySelector('.custom').children);
    let index = 0;
    let popupOpened = false;

    
    
    document.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.designs-nav__item_base')){
            document.querySelector('#designs-list').querySelector('.active').classList.remove('active');
            btns.forEach((item, i) => {

                if(item == target){
                    item.classList.add('active');
                    document.querySelector('.custom').style.transform = `translateX(-${i * slides[0].offsetWidth}px)`;
                    index = i;

                }
            })
            document.querySelector('.preview-block').innerHTML = '';

        
            slides.forEach((item, i) => {
                let imgs = [];
                if(i === index){
                    
                    switch(item.classList.value.slice(item.classList.value.length-1)){
                        case '1':
                            imgs = [
                                '<img src="/images/designs/item1_preview.jpg" alt="">',
                                '<img src="/images/designs/item2_preview.jpg" alt="">',
                                '<img src="/images/designs/item3_preview.jpg" alt="">'
                            ];
                            break;
                        case '2':
                            imgs = [
                                '<img src="/images/designs/trad_item1_preview.jpg" alt="">',
                                '<img src="/images/designs/trad_item2_preview.jpg" alt="">'
                            ];
                            break;
                        case '3':
                            imgs = [
                                '<img src="/images/designs/loft1_preview.jpg" alt="">',
                                '<img src="/images/designs/loft2_preview.jpg" alt="">',
                                '<img src="/images/designs/loft3_preview.jpg" alt="">',
                                '<img src="/images/designs/loft4_preview.jpg" alt="">'
                            ]
                            break;
                        case '4':
                            imgs = [
                                '<img src="/images/designs/item1_preview.jpg" alt="">',
                                '<img src="/images/designs/item2_preview.jpg" alt="">',
                                '<img src="/images/designs/item3_preview.jpg" alt="">'
                            ]
                            break;
                        case '5':
                            imgs = [
                                '<img src="/images/designs/item1_preview.jpg" alt="">',
                                '<img src="/images/designs/item2_prevew.jpg" alt="">',
                                '<img src="/images/designs/item3_prevew.jpg" alt="">'
                            ]
                            
                            break;
                    }
                    imgs.forEach((pic, i) => {
                        const preview = document.createElement('div');
                        preview.classList.add('preview-block__item-inner');
                        preview.innerHTML = `Интерьер ${i+1}`;
                        const previewBlock = document.createElement('div');
                        previewBlock.classList.add('preview-block__item');
                        previewBlock.append(preview)
                        previewBlock.insertAdjacentHTML('beforeend',imgs[i]);
                        
                        document.querySelector('.preview-block').append(previewBlock);
                    });
                }
            })
        } else if(target.closest('.link-list-designs')){
            document.querySelector('.popup-design').style.cssText = `visibility: visible`;
            popupOpened = true;
            
        } else if((!target.closest('.popup-dialog-design') || target.closest('.close')) && popupOpened){
            
            document.querySelector('.popup-design').style.cssText = `visibility: hidden`;
            
            popupOpened = false;
        }
    })
    document.addEventListener('click', event => {
        let target = event.target;
        if(target.closest('.preview-block')){
            let currentSliderIndex;
            let index = 0;

            let trs = +document.querySelector('.custom').style.transform.replace(/\D/g, '');
            currentSliderIndex = Math.floor(trs / document.querySelector('.custom').offsetWidth);
            
            let currentSlider = document.querySelector('.custom').querySelector(`.designs-slider__style${currentSliderIndex+1}`);
            let previewBlock = Array.from(((target.parentNode).parentNode).children);
            previewBlock.forEach((item, i) => {
                if(target.closest('.preview-block__item') === item){
                    index = i;
                    currentSlider.style.cssText = `transition: all .5s; transform: translateY(-${i * 100}%);`;
                }
            })
            
        } else if(event.target.closest('#design_right') || event.target.closest('#design_left')){
            Array.from(document.querySelector('.custom').children).forEach((item, i) => {
                
            })
        }
    })

    
}



export default designers;
