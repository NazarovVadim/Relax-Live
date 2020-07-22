class HintsSlider{
    constructor({main, wrap, position = 0, next, prev, slidesToShow = 1, infinity = true}){
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow)
        };

    }

    init(){
        this.addGloClass();
        this.addSlyles();
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
                overflow: hidden !important;
            }
            .glo-slider__wrap{
                display: flex !important;
                align-items: center !important;
                transition: all .5s !important;
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
        }
        
    }

    nextSlider(){
        if(this.options.infinity || this.options.position < this.slides.length - this.slidesToShow){
            ++this.options.position;
            if(this.options.position > this.slides.length - this.slidesToShow){
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
        
    }

    addArrow(){

    }
}
export default HintsSlider;