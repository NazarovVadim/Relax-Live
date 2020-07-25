class RepairSlider{
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
            if(target.closest('.repair-types-nav__item')){
                this.counterCurrent.textContent = 1;
                this.options.position = 0;
            } if(target.closest(`.${this.prev.classList.value.split(' ')[1]}`) || target.closest(`.${this.next.classList.value.split(' ')[1]}`)){
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
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for(let item of this.slides){
            item.classList.add('glo-slider__item')
        }
    }

    addSlyles(){
        const style = document.createElement('style');
        style.id = 'repairSlider-slide';
        document.head.append(style);
        style.textContent = `
            .repairSlider-slider{
                /*overflow: hidden !important;*/
            }
            .repairSlider__wrap{
                display: flex !important;
                flex-wrap: nowrap !important;
                align-items: center !important;
                transition: all .5s !important;
                /* justify-content: center !important;*/
                will-change: transform !important;
                margin: 0 auto !important;
            }
            .repairSlider__item{
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

const repairSlider = () => {
    const btns = Array.from(document.querySelector('.nav-list-repair').children);
    let slides = Array.from(document.querySelector('.repair-types-slider').querySelector('div').children);
    let index = 0;
    document.querySelector('.slider-counter-content__total').textContent = Array.from(slides[0].children).length;
    slides.forEach((item, i) => {
        item.style.display = 'flex';
        let trs = document.querySelector('.repair-types-slider').querySelector('div').style.transform.replace(/\D/g, '');
            const itemSlider = new RepairSlider({
                    main: '.repair-types-slider',
                    wrap: `.${item.classList.value}`,
                    prev: '#repair-types-arrow_left',
                    next: '#repair-types-arrow_right',
                    counter: '.slider-counter-content',
                    counterCurrent: '.slider-counter-content__current',
                    counterTotal: '.slider-counter-content__total'
            });
            itemSlider.init();
    });
    document.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.repair-types-nav__item')){
            
            document.querySelector('.nav-list-repair').querySelector('.active').classList.remove('active');
            btns.forEach((item, i) => {

                if(item == target){
                    item.classList.add('active');
                    document.querySelector('.repair-types-slider').querySelector('div').style.transform = `translateY(-${i * slides[0].offsetWidth}px)`;
                    index = i;

                }
            })
        
        slides.forEach((item, i) => {
            if(index === i){
                document.querySelector('.slider-counter-content__total').textContent = Array.from(item.children).length;
                document.querySelector('.slider-counter-content__current').textContent = '1';
                item.style.transform = 'translate(0)';
                
            }
        })
        }
    })
    
}



export default repairSlider;