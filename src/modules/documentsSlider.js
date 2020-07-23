import HintsSlider from './hintsSlider';

const documentsSlider = () => {
    document.addEventListener('click', event => {
        if(event.target.closest('.transparency-item__img')){
            document.querySelector('.popup-transparency').style.visibility = 'visible';
            const documents = new HintsSlider({
                main: '.popup-transparency-slider-wrap',
                wrap: '.popup-transparency-slider',
                next: '#transparency_left',
                prev: '#transparency_right'
            });
            document.querySelector('.popup-transparency-slider').style.overflow = 'hidden';
            documents.init();
        } else if(!event.target.closest('#transparency_left') && !event.target.closest('#transparency_right')){
            document.querySelector('.popup-transparency').style.visibility = 'hidden';
        }
    });

}
export default documentsSlider;