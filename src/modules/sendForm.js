const sendForm = () => {
    const formsFeedback = document.querySelectorAll('.feedback__form');
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = `<div class="sk-rotating-plane"></div>`,
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `font-size: 2rem;`;
    formsFeedback.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(item);
            let body = {};
            formData.forEach((value,key) => body[key] = value);
            console.log(body);
            postData(body)
                .then((response) => {
                    console.log(response);
                    if(response.status !== 200) throw new Error('status network not 200')
                    statusMessage.innerHTML = successMessage;
                    setTimeout(() => statusMessage.innerHTML = '', 3000);
                })
                .catch(error => {console.error(error); statusMessage.innerHTML = errorMessage; setTimeout(() => statusMessage.innerHTML = '', 3000);});
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