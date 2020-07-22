import showNumbers from './modules/showNumbers';
import burgerMenu from './modules/burgerMenu';
import smoothScroll from './modules/smoothScroll';
import popupRepairTypes from './modules/popupRepairTypes';
import phoneMask from './modules/phoneMask';
import popupPrivacy from './modules/popupPrivacy';
import hints from './modules/hints';
import HintsSlider from './modules/hintsSlider';



showNumbers();
burgerMenu();
smoothScroll();
popupRepairTypes();
phoneMask();
popupPrivacy();
hints();

//hintsSlider
const hintsSlider = new HintsSlider({
        main: '.formula-slider-wrap',
        wrap: '.formula-slider',
        next: '#formula-arrow_right',
        prev: '#formula-arrow_left'
});

hintsSlider.init();

// /hintsSlider