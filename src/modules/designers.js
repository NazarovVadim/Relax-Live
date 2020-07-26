class DesignersMobileSlider{
    constructor({main, wrap, position = 0, next, prev, slidesToShow = 1, infinity = true, counter, counterCurrent, counterTotal}){
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.counter = document.querySelector(counter);
        this.counterCurrent = document.querySelector(counterCurrent);
        this.counterTotal = document.querySelector(counterTotal);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow)
        };

    }

    listeners(){
        document.addEventListener('click', event => {
            let target = event.target;
            if(target.closest('.designs-nav__item_popup')){
                this.counterCurrent.textContent = 1;
                this.options.position = 0;
            } if(target.closest(`#${this.prev.id}`) || target.closest(`#${this.next.id}`)){
                if(+this.counterCurrent.textContent > +this.counterTotal.textContent){
                    this.counterCurrent.textContent = 1;
                }
            }
        });
    }

    init(){
        this.counterCurrent.textContent = 1;
        this.options.position = 0;
        this.addGloClass();
        this.addSlyles();
        this.listeners();
        if(this.prev && this.next) this.controlSlider();
        else {
            this.addArrow();
            this.controlSlider();
        }
    }

    addGloClass(){
        this.main.classList.add('designPopupSlider-slider');
        this.wrap.classList.add('designPopupSlider__wrap');
        for(let item of this.slides){
            item.classList.add('designPopupSlider__item')
        }
    }

    addSlyles(){
        const style = document.createElement('style');
        style.id = 'designPopupSlider-slide';
        document.head.append(style);
        style.textContent = `
            .designPopupSlider-slider{
                /*overflow: hidden !important;*/
            }
            .designPopupSlider__wrap{
                display: flex !important;
                flex-wrap: nowrap !important;
                align-items: center !important;
                transition: transform .5s !important;
                /* justify-content: center !important;*/
                will-change: transform !important;
                margin: 0 auto !important;
            }
            .designPopupSlider__item{
                flex: 0 0 ${this.options.widthSlide}% !important;
                margin: auto 0 !important;
            }
        `;
    }

    controlSlider(){
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider(){
        if(this.options.infinity || this.options.position > 0){
            --this.options.position;
            this.counterCurrent.textContent = this.options.position + 1;
            if(this.options.position < 0){
                this.options.position = this.slides.length - this.slidesToShow
                this.counterCurrent.textContent = this.options.position + 1;
            }
            this.wrap.style.transform = `translateY(-${this.options.position * this.options.widthSlide}%)`;
        }
        
    }

    nextSlider(){
        if(this.options.infinity || this.options.position < this.slides.length - this.slidesToShow){
            ++this.options.position;
            this.counterCurrent.textContent = this.options.position + 1;
            if(this.options.position > this.slides.length - this.slidesToShow){
                this.options.position = 0;
                this.counterCurrent.textContent = 1;
            }
            this.wrap.style.transform = `translateY(-${this.options.position * this.options.widthSlide}%)`;
        }
        
    }
}

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
                console.log(item);
                if(i === index){
                    const slider = new DesignersMobileSlider({
                        main: `.${item.parentNode.classList.value}`,
                        wrap: `.${item.classList.value}`,
                        next: '#design_right',
                        prev: '#design_left',
                        counter: `.${document.querySelector('#designs-counter').querySelector('.slider-counter-content').classList.value}`,
                        counterCurrent: `.${document.querySelector('#designs-counter').querySelector('.slider-counter-content__current').classList.value}`,
                        counterTotal: `.${document.querySelector('#designs-counter').querySelector('.slider-counter-content__total').classList.value}`
                    });
                    slider.init();
                }
            })
        }
    })

    
}



export default designers;
