import { catalog } from './catalog.js';
import { getData } from './getData.js';


    

export const loadData = () => {
    //location
    
    // if(location.hash){
    //     getData.item(location.hash.substring(1), (data) => console.log(data));
    //      console.log('hash');
    // }
    if(location.pathname.includes('cart')){ //корзина
        getData.cart(cartList, (data) => console.log(data));
        console.log('cart');
    }

    // getData.catalog((data) => console.log(data))
    // getData.subCatalog('Декор', (data) => console.log(data))
    
};