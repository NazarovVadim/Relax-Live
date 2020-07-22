const popupPrivacy = () => {
    const popupPrivacy = document.querySelector('.popup-privacy');
    let opened = false;
    document.addEventListener('click', event => {
        if(event.target.closest('.link-privacy')){
            popupPrivacy.style.visibility = 'visible';
            opened = true;
        } else if((event.target.closest('.close') || !event.target.closest('.row')) && opened){
            popupPrivacy.style.visibility = 'hidden';
        }
    })
}

export default popupPrivacy;