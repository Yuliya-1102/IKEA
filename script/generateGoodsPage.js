import {getData} from './getData.js'
// import userData from './userData.js'

const COUNTER = 6;
const generateGoodsPage = () => {
    const mainHeader = document.querySelector('.main-header');
    const goodsList = document.querySelector('.goods-list');

    const generateCards = (data) => {
        goodsList.textContent = '';
        if(!data.length){
            const goods = document.querySelector('.goods');
            goods.textContent = location.search == '?wishlist' ? 'Cписок желаний пуст' : 'По вашему запросу ничего не найдено';
        }
        data.forEach((item) => {
            //деструктуризация = достае свойства объекта
            const { name: itemName, count, description, id, img: image, price } = item;
            console.log(item);
            console.log(itemName);
            goodsList.insertAdjacentHTML('afterbegin', `
                <li class="goods-list__item">
					<a class="goods-item__link" href="card.html#${id}">
						<article class="goods-item">
							<div class="goods-item__img">
								<img src=${image[0]}
									 ${image[1] ? `data-second-image=${image[1]}` : ''}>
							</div>
                            ${count > COUNTER ? '<p class="goods-item__new">Новинка</p>' : ''}
                            ${!count ? '<p class="goods-item__new">Нет в наличии</p>' : ''}
							<h3 class="goods-item__header">${itemName}</h3>
							<p class="goods-item__description">${description}</p>
							<p class="goods-item__price">
								<span class="goods-item__price-value">${price}</span>
								<span class="goods-item__currency"> ₽</span>
                            </p>
                            ${count ? '<button class="btn btn-add-card" aria-label="Добравить в корзину" data-idd="${id}"></button>' : ''}
						</article>
					</a>
                </li>
                `);
        })
    };

    if(location.pathname.includes('goods') && location.search){ //includes('goods') = защита, что только на стр с goods(в строке)
        const search = decodeURI(location.search);
        const prop = search.split('=')[0].substring(1);
        const value = search.split('=')[1];
        console.log('search: ', search);
        console.log('prop: ', prop);
        console.log('value: ', value);
        
        if(prop == 's'){ //поиск
            getData.search(value, generateCards);
            mainHeader.textContent = `Поиск: ${value}`;
        } else if(prop == 'wishlist'){
            getData.wishList(wishlist, generateCards);
            mainHeader.textContent = 'Список желаний';
        } else if (prop === 'cat' || prop === 'subcat'){
            getData.category(prop, value, generateCards)
            mainHeader.textContent = value;
        }
    }
};

export default generateGoodsPage;