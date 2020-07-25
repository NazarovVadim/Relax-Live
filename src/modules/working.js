const working = () => {
    const block = document.querySelector('#scheme-list');
    const items = block.querySelectorAll('.scheme-nav__item');
    const wrap = document.querySelector('.scheme-slider').querySelector('div');
    const slides = document.querySelectorAll('.scheme-slider__slide');
    const descs = document.querySelectorAll('.scheme-description-block');
    let index = 0;
    document.addEventListener('click', event => {
        let target = event.target;
        if(target.closest('.scheme-nav__item')){
            items.forEach((item, i) => {
                if(item.classList.contains('active')){
                    item.classList.remove('active');
                }
                if(item === target.closest('.scheme-nav__item')){
                    item.classList.add('active');
                    index = i;
                }
            });
            descs.forEach((item, i) => {
                if(item.classList.contains('visible-content-block')){
                    item.classList.remove('visible-content-block');
                }
                if(i === index){
                    item.classList.add('visible-content-block');
                }
                
            })
            wrap.style.cssText = `
                transform: translateY(-${(index * 100) / 6}%);
                transition: transform .5s;
            `;

        }
    })
}
export default working;