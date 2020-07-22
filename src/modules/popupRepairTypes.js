const popupRepairTypes = () => {
    const menu = document.querySelector('.popup-menu');
    const popUpRepairTypes= document.querySelector('.popup-repair-types');
    const list = menu.querySelector('.link-list');
    let opened = false;
    document.addEventListener('click', event => {
        if(event.target.closest('.link-list')){
            popUpRepairTypes.style.visibility = 'visible';
            opened = true;
        } else if((event.target.closest('.close') || !event.target.closest('.row')) && opened){
            popUpRepairTypes.style.visibility = 'hidden';
        }
    })
}
export default popupRepairTypes;