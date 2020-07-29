const sendForm = () => {
    const formsFeedback = document.querySelectorAll('.feedback__form');
    const feedbackBlockForm = document.querySelectorAll('.feedback-block__form');
    const loadMessage = `<div class="sk-rotating-plane"></div>`;
    const checkbox = document.querySelector('.checkbox');
    formsFeedback.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();
            item.querySelector('.checkbox').parentNode.querySelectorAll('div').forEach(item => {
                if(item.classList.contains('errorMessage')){
                    item.remove();
                }
            });
            const errMsg = document.createElement('div');
            const formData = new FormData(item);
            errMsg.innerHTML = loadMessage;
            item.querySelector('.checkbox').parentNode.append(errMsg);
            let body = {};
            formData.forEach((value,key) => body[key] = value);
            if(item.querySelector('.checkbox__input').checked){
                postData(body)
                .then((response) => {
                    if(response.status !== 200) throw new Error('status network not 200')
                    
                        setTimeout(() => {
                            document.querySelector('.popup-thank').style.cssText = 'visibility: visible; z-index:9999';
                            item.querySelector('.checkbox__input').checked = false;
                            item.querySelectorAll('input').forEach(input => input.value = '');
                            errMsg.innerHTML = '';
                            errMsg.remove();
                        }, 2000);
                        
                        document.addEventListener('click', event => {
                            let target = event.target;
                            if(!target.closest('.popup-thank-bg') || target.closest('.close-thank')){
                                document.querySelector('.popup-thank').style.visibility = 'hidden'
                            }
                        })
                })
                .catch(error => console.error(error));
            } else{
                errMsg.innerHTML = '';
                const style = document.createElement('style');
                style.textContent = `
                    .errorMessage{
                        color: red !important;
                        position: absolute;
                        bottom: 0;
                    }
                `;
                document.querySelector('header').append(style);
                    
                errMsg.insertAdjacentHTML('beforeend', `<span>Прочтите Пользовательское соглашение</span>`);
                errMsg.classList.add('errorMessage');
                item.querySelector('.checkbox').parentNode.append(errMsg);
                setTimeout(() => errMsg.remove(), 3000)
            }
            
        });
    });
    feedbackBlockForm.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();
            item.querySelector('.checkbox').parentNode.querySelectorAll('div').forEach(item => {
                if(item.classList.contains('errorMessage')){
                    item.remove();
                }
            });
            const errMsg = document.createElement('div');
            const formData = new FormData(item);
            errMsg.innerHTML = loadMessage;
            item.querySelector('.checkbox').parentNode.append(errMsg);
            let body = {};
            formData.forEach((value,key) => body[key] = value);
            if(item.querySelector('.checkbox__input').checked){
                postData(body)
                .then((response) => {
                    if(response.status !== 200) throw new Error('status network not 200')
                        setTimeout(() => {
                            document.querySelector('.popup-thank').style.cssText = 'visibility: visible; z-index:9999';
                            item.querySelector('.checkbox__input').checked = false;
                            item.querySelectorAll('input').forEach(input => input.value = '')
                            errMsg.innerHTML = '';
                            errMsg.remove();
                        }, 2000);
                        
                        document.addEventListener('click', event => {
                            let target = event.target;
                            if(!target.closest('.popup-thank-bg') || target.closest('.close-thank')){
                                document.querySelector('.popup-thank').style.visibility = 'hidden'
                            }
                        })

                })
                .catch(error => console.error(error));
            } else{
                errMsg.innerHTML = '';
                const style = document.createElement('style');
                style.textContent = `
                    .errorMessage{
                        color: red !important;
                        position: absolute;
                        bottom: -10px;
                    }
                `;
                document.querySelector('header').append(style);
                errMsg.innerHTML = `<span>Прочтите Пользовательское соглашение</span>`;
                errMsg.classList.add('errorMessage');
                item.querySelector('.checkbox').parentNode.append(errMsg);
                setTimeout(() => errMsg.remove(), 3000);
            }
            
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