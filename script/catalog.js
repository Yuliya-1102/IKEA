import {getData} from './getData.js'
import generateSubCatalog from './generateSubCatalog.js';



export const catalog = () => {
const updateSubCatalog = generateSubCatalog();    
const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const btnClose = document.querySelector('.btn-close');
const subCatalog = document.querySelector('.subcatalog');
const subcatalogHeader = document.querySelector('.subcatalog-header');
const btnReturn = document.querySelector('.btn-return');

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);

const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};
const closeMenu = () => {
    closeSubMenu();
    catalog.classList.remove('open');
    overlay.classList.remove('active');
};
const handlerCatalog = (Event) => {
    Event.preventDefault();
    const target = Event.target;
    const itemList = target.closest('.catalog-list__item');
    
    if(itemList){
        getData.subCatalog(target.textContent, (data) => { //запрос для сервера
        updateSubCatalog(target.textContent, data) //для вывода на стр
        subCatalog.classList.add('subopen');
        })
    };
    if(target.closest('.btn-close'))  {
        closeMenu();
    }  
    
};
const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
}


btnBurger.addEventListener('click', openMenu);
// btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', handlerCatalog);
subCatalog.addEventListener('click', event => {
    if(event.target.closest('.btn-return')){
        closeSubMenu();
    }
});




document.addEventListener('keydown', (Event) => {
    if(Event.code === 'Escape'){
        closeMenu();
    };
})
};