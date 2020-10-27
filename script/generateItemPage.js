import {catalog} from './catalog.js'
import { getData } from './getData.js';
import userData from './userData.js';

const NEW_COUNT_ITEM = 6;

const generateItemPage = () => {

    const renderCard = ({category, count, description, id, img, name: itemName, price, subcategory}) => {
        console.log(data);
        // const {category, count, description, id, img, name, price, subcategory} = data;
        //card.html

    const goodImages = document.querySelector('.good-images');
    const goodItemNew = document.querySelector('.good-item__new');
    const goodItemHeader = document.querySelector('.good-item__header');
    const goodItemDescription = document.querySelector('.good-item__description');
    const goodItemEmpty = document.querySelector('.good-item__empty');
    const goodItemPriceValue = document.querySelector('.good-item__price-value');
    const btnGood = document.querySelector('.btn-good');
    const btnAddWishlist = document.querySelector('.btn-add-wishlist');
    const breadcrumbLink = document.querySelectorAll('.breadcrumb__link'); //хлебные крошки
    
    ////хлебные крошки
    breadcrumbLink[0].textContent = category;
    breadcrumbLink[0].href = `goods.html?cat=${category}`
    breadcrumbLink[1].textContent = subcategory;
    breadcrumbLink[1].href = `goods.html?subcat=${subcategory}`
    breadcrumbLink[2].textContent = itemName;
    // const arr = [category, subcategory, itemName];
    // breadcrumbLink.forEach((item, index) => {
    //     item.textContent = arr[index];
    // })

    goodImages.textContent = '';
    goodItemHeader.textContent = itemName;
    goodItemDescription.textContent = description;
    goodItemPriceValue.textContent = price;
    btnGood.dataset.idd = id;
    btnAddWishlist.dataset.idd = id;

    img.forEach(item => {
        goodImages.insertAdjacentHTML('afterbegin', `
            <div class="good-image__item">
				<img src="${item}" alt="${itemName} - ${description}">
			</div>
        `);
    })
    if(count >= NEW_COUNT_ITEM){
        goodItemNew.style.display = 'block';
    } else if(!count) {
        goodItemEmpty.style.display = 'block';
        btnGood.style.display = 'none';
    }

    //список желаний
    // const checkWishList = () => {
    //     if(userData.wishList.includes(id)){
    //         btnAddWishlist.classList.add('contains-wishlist');
    //     } else{
    //         btnAddWishlist.classList.remove('contains-wishlist');
    //     }
    // };

    // btnAddWishlist.addEventListener('click', () => {
    //     userData.wishList = id;
    //     checkWishList();
    // });

    // checkWishList();


};

    if(location.hash && location.pathname.includes('card')){ //функция должна сработать только при этих условиях
        getData.item(location.hash.substring(1), renderCard);
    }
};

export default generateItemPage;
