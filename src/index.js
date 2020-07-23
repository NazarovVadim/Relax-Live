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



showNumbers();
burgerMenu();
smoothScroll();
popupRepairTypes();
phoneMask();
popupPrivacy();
hints();
documentsSlider();
consultating();
//problems();

//hintsSlider
const hintsSlider = new HintsSlider({
        main: '.formula-slider-wrap',
        wrap: '.formula-slider',
        next: '#formula-arrow_right',
        prev: '#formula-arrow_left'
});
hintsSlider.init();
// /hintsSlider

//documents
if(document.documentElement.clientWidth < 577){
        const documentSlider = new HintsSlider({
                main: '.transparency-slider-wrap',
                wrap: '.transparency-slider',
                next: '#transparency-arrow_right',
                prev: '#transparency-arrow_left'
        });
        document.querySelector('.transparency-slider').style.cssText = `
                max-heght: 450px;
        `;
        documentSlider.init();
}
// /documents

//partnersSlider
const partnersSlider = new HintsSlider({
        main: '.wrapper',
        wrap: '.partners-slider',
        next: '#partners-arrow_right',
        prev: '#partners-arrow_left',
        
});
partnersSlider.init();

//repairSlider
// const repairSlider = new RepairSlider({
//         main: '.repair-types-slider-wrap',
//         wrap: '.repair-types-slider',
//         next: '',
//         prev: '',
//         paginations: '.nav-list-repair',
        
// });
// repairSlider.init();
// /repairSlider