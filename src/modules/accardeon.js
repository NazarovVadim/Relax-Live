const accardeon = () => {
    const faq = document.querySelector('.accordion').querySelector('ul');
    const li = [];
    faq.querySelectorAll('li').forEach(item => {
        li.push(item.querySelector('.title_block'));
    });
    faq.addEventListener('click', event => {
        let target = event.target;
        if(target.closest('.title_block')){
            if(target.closest('.title_block').classList.contains('msg-active')){
                target.closest('.title_block').classList.remove('msg-active');
            } else{
                li.forEach(item => {
                    if(item.classList.contains('msg-active')){
                        item.classList.remove('msg-active');
                    }
                })
                target.closest('.title_block').classList.add('msg-active');
            }
        }
    })

}
export default accardeon;