class DesignersPopupSlider{
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
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
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
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
        
    }
}

const designersPopup = () => {
    const block = document.querySelector('#nav-list-popup-designs');
    const items = block.querySelectorAll('.designs-nav__item_popup');
    const wrap = document.querySelector('.popup-design-slider').querySelector('div');
    const sliders = Array.from(wrap.children);
    document.querySelector('#slider-counter-content__total').textContent = Array.from(sliders[0].children).length;
    sliders.forEach((item, i) => {
        item.style.cssText = `display: flex;`;
        const slider = new DesignersPopupSlider({
            main: '.popup-design-slider',
            wrap: `.${item.classList.value}`,
            next: '#popup_design_right',
            prev: '#popup_design_left',
            counter: '#slider-counter-content',
            counterCurrent: '#slider-counter-content__current',
            counterTotal: '#slider-counter-content__total'
        });
        slider.init();
    })
    //const slides = document.querySelectorAll('.scheme-slider__slide');
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
                }
            });
            sliders.forEach((slider, i) => {
                if(index === i){
                    wrap.style.cssText = `transform: translateY(-${(i * 100) / sliders.length}%); transition: transform .5s`;
                    document.querySelector('#slider-counter-content__total').textContent = Array.from(slider.children).length;
                    document.querySelector('#slider-counter-content__current').textContent = '1';
                    slider.style.transform = 'translate(0)';
                } 
            })}
        // } else if(target.closest('#popup_design_right') || target.closest('#popup_design_left')){
        //     if(+document.querySelector('#slider-counter-content__current').textContent > +document.querySelector('#slider-counter-content__total').textContent){

        //     }
        // }
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
}
export default designersPopup;