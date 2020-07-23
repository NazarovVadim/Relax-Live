const consultating = () => {
    let opened = false;
    document.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.button_wide') && !opened){
            opened = !opened;
            document.querySelector('.popup-consultation').style.visibility = 'visible';
        } else if((!target.closest('.button_wide') && opened && !target.closest('.feedback-wrap')) || target.closest('.close-consultation')){
            opened = !opened;
            document.querySelector('.popup-consultation').style.visibility = 'hidden';
        }
    })
}
export default consultating;