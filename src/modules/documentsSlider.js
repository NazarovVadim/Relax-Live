class DocumentsSlider{
    constructor({main, wrap, position = 0, next, prev, slidesToShow = 1, infinity = true, index = 0, counter, counterCurrent, counterTotal}){
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.counter = document.querySelector(counter);
        this.counterCurrent = this.counter.querySelector(counterCurrent);
        this.counterTotal = this.counter.querySelector(counterTotal);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            index,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow)
        };

    }

    init(){
        this.addGloClass();
        this.addSlyles();
        this.counterTotal.textContent = this.slides.length;
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
        style.id = 'hintsSlider-style';
        document.head.append(style);
        style.textContent = `
            .glo-slider{
                /*overflow: hidden !important;*/
            }
            .glo-slider__wrap{
                display: flex !important;
                /*overflow: hidden !important;*/
                flex-wrap: nowrap !important;
                align-items: center !important;
                transition: transform .5s !important;
                /* justify-content: center !important;*/
                will-change: transform !important;
                margin: 0 auto !important;
            }
            .glo-slider__item{
                flex: 0 0 ${this.options.widthSlide}% !important;
                margin: auto 0 !important;
            }
        `;
    }

    controlSlider(){
        this.wrap.style.transform = `translateX(-${this.options.index * this.options.widthSlide}%)`;
        this.counterCurrent.textContent = this.options.index + 1;
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider(){
        if(this.options.infinity || this.options.position > 0){
            --this.options.position;
            if(this.options.position < 0){
                this.options.position = this.slides.length - this.slidesToShow
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            if(document.documentElement.clientWidth < 1024)
                document.querySelector('.transparency-slider-nomain').style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            this.counterCurrent.textContent = this.options.position + 1;
        }
        
    }

    nextSlider(){
        if(this.options.infinity || this.options.position < this.slides.length - this.slidesToShow){
            ++this.options.position;
            if(this.options.position > this.slides.length - this.slidesToShow){
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            if(document.documentElement.clientWidth < 1024)
                document.querySelector('.transparency-slider-nomain').style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
            this.counterCurrent.textContent = this.options.position + 1;
        }
        
    }

    addArrow(){

    }
}

const documentsSlider = () => {
    let index = 0;
    document.addEventListener('click', event => {
        let target= event.target;
        document.querySelector('.transparency-slider.row').querySelectorAll('.transparency-item__img').forEach((img, i) => {
            if(target.closest('.transparency-item__img') === img){
                index = i;
                document.querySelector('.popup-transparency').style.visibility = 'visible';
                const docs = new DocumentsSlider({
                    main: '.popup-transparency-slider-wrap',
                    wrap: '.popup-transparency-slider-slider',
                    next: '.popup-arrow_transparency_right',
                    prev: '.popup-arrow_transparency_left',
                    counter: '#transparency-popup-counter',
                    counterCurrent: '.slider-counter-content__current',
                    counterTotal: '.slider-counter-content__total',
                    index: index
                });
                docs.init();
            }
        });
        if(!target.closest('.transparency-item__img') && !target.closest('.popup-arrow_transparency_right') && !target.closest('.popup-arrow_transparency_left')){
            document.querySelector('.popup-transparency').style.visibility = 'hidden';
        }
    });

}
export default documentsSlider;
