const sendForm = () => {
    const formsFeedback = document.querySelectorAll('.feedback__form');
    const checkbox = document.querySelector('.checkbox');
    formsFeedback.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(item);
            let body = {};
            formData.forEach((value,key) => body[key] = value);
            postData(body)
                .then((response) => {
                    if(response.status !== 200) throw new Error('status network not 200')
                    if(item.querySelector('.checkbox__input').checked){
                        setTimeout(() => {
                            document.querySelector('.popup-thank').style.cssText = 'visibility: visible; z-index:9999';
                            item.querySelector('.checkbox__input').checked = false;
                        }, 2000);
                        item.querySelectorAll('input').forEach(input => input.value = '')
                        document.addEventListener('click', event => {
                            let target = event.target;
                            if(!target.closest('.popup-thank-bg') || target.closest('.close-thank')){
                                document.querySelector('.popup-thank').style.visibility = 'hidden'
                            }
                        })
                    }
                    
                })
                .catch(error => console.error(error));
        });
    })



    const postData = (body) => {
        return fetch('/server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    } 
}

export default sendForm;