const typesRepair = () => {

    const nav = document.querySelector('.nav-list-popup-repair');
    const tablesBlock = document.querySelector('.popup-repair-types-content-table');
    const currentTable = document.querySelector('#switch-inner');
    const arrowRight = document.querySelector('#nav-arrow-popup-repair_right');
    const arrowLeft = document.querySelector('#nav-arrow-popup-repair_left');
    

    getData()
        .then(response => {
            if(response.status !== 200) throw new Error('status network not 200')
            return response.json()
        })
        .then(response => {
            response.forEach((element, i) => {
                if(element.title){
                    
                    if(i === 1){
                        nav.insertAdjacentHTML('beforeend', `<button class="button_o popup-repair-types-nav__item active">${element.title}</button>`);
                        currentTable.textContent = `${element.title}`;
                    } else{nav.insertAdjacentHTML('beforeend', `<button class="button_o popup-repair-types-nav__item">${element.title}</button>`);}
                    
                    const table = document.createElement('table');
                    table.classList.add('popup-repair-types-content-table__list');
                    table.insertAdjacentHTML('beforeend', `<tbody></tbody>`)
                    element.priceList.forEach(item => {
                        table.querySelector('tbody').insertAdjacentHTML('beforeend', `
                            <tr class="mobile-row showHide">
                                <td class="repair-types-name">${item.typeService}</td>
                                <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                                <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                                <td class="repair-types-value">${item.units}</td>
                                <td class="repair-types-value">${item.cost} руб.</td>
                            </tr>
                        `);
                    });
                    tablesBlock.append(table);
                    Array.from(tablesBlock.children).forEach((item, i) => {if(i !== 1) item.style.display = 'none'});
                    const btns = document.querySelectorAll('.popup-repair-types-nav__item');
                    const tables = document.querySelectorAll('.popup-repair-types-content-table__list');
                    let index = 0;
                    document.addEventListener('click', event => {
                        const target = event.target;
                        if(target.closest('.popup-repair-types-nav__item')){
                            btns.forEach((item, i) => {
                                if(item.classList.contains('active')){
                                    item.classList.remove('active');
                                }
                            })
                            btns.forEach((btn, i) => {
                                if(btn === target){
                                    currentTable.textContent = btn.textContent;
                                        btn.classList.add('active');
                                        index = i;
                                        document.querySelectorAll('.popup-repair-types-content-table__list').forEach((item, ii) => {
                                            item.style.display = 'none';
                                        });
                                        document.querySelectorAll('.popup-repair-types-content-table__list').forEach((item, ii) => {
                                            if(index === ii)item.style.display = 'block';
                                            
                                        })
                                    
                                }
                            })
                            //tables.forEach(item)
                        }
                    })
                }
            });
        })
        .catch(error => console.error(error));

    const btns = document.querySelectorAll('.popup-repair-types-nav__item');
    const btnsBlock = document.querySelector('.nav-list-popup-repair');
    let index = 0,
        trs = 0,
        indexMob = 0;
    window.addEventListener('resize', () => {
        index = 0;
        trs = 0;
        btnsBlock.style.transform = `translateX(-${index}%)`;
    })
    arrowRight.addEventListener('click', () => {
            index++;
            if(index > btnsBlock.querySelectorAll('button').length-1){
                btnsBlock.style.transform = `translateX(-${0}px)`;
                index = 0;
            } else{
                btnsBlock.style.transform = `translateX(-${btnsBlock.querySelectorAll('button')[index].offsetLeft}px)`;
            }

        
    });
    arrowLeft.addEventListener('click', () => {
            index--;
            if(index < 0){
                btnsBlock.style.transform = `translateX(-${btnsBlock.querySelectorAll('button')[btnsBlock.querySelectorAll('button').length - 1].offsetLeft}px)`;
                index = btnsBlock.querySelectorAll('button').length - 1;
            } else{
                btnsBlock.style.transform = `translateX(-${btnsBlock.querySelectorAll('button')[index].offsetLeft}px)`;
            }
        
        
    });
}
const getData = () => {
    return fetch('/db/db.json');
}

export default typesRepair;