import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
//require('formdata-polyfill');

import showNumbers from './modules/showNumbers';
import burgerMenu from './modules/burgerMenu';
import smoothScroll from './modules/smoothScroll';
import popupRepairTypes from './modules/popupRepairTypes';
import phoneMask from './modules/phoneMask';
import popupPrivacy from './modules/popupPrivacy';
import hints from './modules/hints';
import HintsSlider from './modules/hintsSlider';
import RepairSlider from './modules/repairsSlider';
import documentsSlider from './modules/documentsSlider';
import problems from './modules/problems';
import consultating from './modules/consultating';
import portfolio from './modules/portfolio';
import designers from './modules/designers';
import designersMobile from './modules/designersMobile';
import repairSlider from './modules/repairsSlider';
import repairsMobile from './modules/repeirsMobile';
import accardeon from './modules/accardeon';
import working from './modules/working';
import workingMobile from './modules/workingMobile'
import sendForm from './modules/sendForm';
import designersPopup from './modules/designersPopup';
import typesRepair from './modules/typesRepair';



designers();
typesRepair();
repairsMobile();
designersPopup();
sendForm();
showNumbers();
burgerMenu();
workingMobile();
working();
smoothScroll();
popupRepairTypes();
phoneMask();
popupPrivacy();
accardeon();
portfolio();
consultating();
problems();
repairSlider();
designersMobile();
hints();

//hintsSlider
const hintsSlider = new HintsSlider({
        main: '.formula-slider-wrap',
        wrap: '.formula-slider',
        next: '#formula-arrow_right',
        prev: '#formula-arrow_left'
});
hintsSlider.init();

const problemsSlider = new HintsSlider({
        main: '.problems-slider-wrap',
        wrap: '.problems-slider-slider',
        next: '#problems-arrow_right',
        prev: '#problems-arrow_left'
});
problemsSlider.init();
// /hintsSlider

window.addEventListener('resize', () => {
        if(document.documentElement.clientWidth < 1025){
                document.querySelector('.formula-slider').style.transform = `translate(0)`;
                document.querySelectorAll('.formula-slider__slide').forEach(item => item.classList.remove('active-item'))
                document.querySelector('.problems-slider-slider').style.transform = `translate(0)`;
                document.querySelectorAll('.problems-slider__slide').forEach(item => item.classList.remove('active-item'));
                problems();
        }
        hints();
        if(document.documentElement.clientWidth < 1090){
                const documentSlider = new HintsSlider({
                        main: '.transparency-slider-wrap',
                        wrap: '.transparency-slider-nomain',
                        next: '#transparency-arrow_right',
                        prev: '#transparency-arrow_left'
                });
                documentSlider.init();
                documentsSlider();
        } else{
                documentsSlider();
                document.querySelector('.transparency-slider-wrap').querySelectorAll('.glo-slider__item').forEach(item => {
                        item.classList.remove('glo-slider__item');
                })
        }
})

//documents
document.querySelector('.transparency-slider').style.cssText = `overflow: hidden`;
document.querySelector('.transparency-slider-nomain').style.cssText = `display:flex; margin: 0 auto;`;
if(document.documentElement.clientWidth < 1090){
        const documentSlider = new HintsSlider({
                main: '.transparency-slider-wrap',
                wrap: `.transparency-slider-nomain`,
                next: '#transparency-arrow_right',
                prev: '#transparency-arrow_left'
        });
        documentSlider.init();
        documentsSlider();
}else{
        documentsSlider();
}
if(document.documentElement.clientWidth < 1025){
        const problemsSlider = new HintsSlider({
                main: '.problems-slider-wrap',
                wrap: '.problems-slider-slider',
                next: '#problems-arrow_right',
                prev: '#problems-arrow_left'
        });
        problemsSlider.init();
        
}
// /documents

//partnersSlider
const partnersSlider = new HintsSlider({
        main: '.partners-wrapper',
        wrap: '.partners-slider',
        next: '#partners-arrow_right',
        prev: '#partners-arrow_left',
        
});
partnersSlider.init();

//reviewsSlider
const reviewsSlider = new HintsSlider({
        main: '.reviews-slider-wrap',
        wrap: '.reviews-slider',
        next: '#reviews-arrow_right',
        prev: '#reviews-arrow_left',
        
});
reviewsSlider.init();
