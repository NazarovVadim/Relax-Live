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



designers();
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
hints();
accardeon();
//portfolio();
consultating();
problems();
repairSlider();
designersMobile()

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
if(document.documentElement.clientWidth < 1090){
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
