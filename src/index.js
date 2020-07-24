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



designers();
showNumbers();
burgerMenu();
smoothScroll();
popupRepairTypes();
phoneMask();
popupPrivacy();
hints();
//portfolio();
consultating();
problems();

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
if(document.documentElement.clientWidth < 1025){
        const documentSlider = new HintsSlider({
                main: '.transparency-slider-wrap',
                wrap: '.transparency-slider',
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

//design



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