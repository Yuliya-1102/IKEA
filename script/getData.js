const PARAM = {
    cat: "category",
    subcat: "subcategory",
    search: ['name', 'category', 'description'],
}

export const getData = {
    url: 'database/dataBase.json',
    get(process){
        // console.log(this);
        fetch(this.url)
            .then((response) => response.json())
            .then(process); //данные json передаются в эту функцию и вызывается ниже в wishList this.get((data))...
    },
    wishList(list, callback){ //list == wishlist[] на стр loadData
        this.get((data) => {
            const result = data.filter((item) => list.includes(item.id)); //data == json данные, list == наш массив wishlist в lofdData
            callback(result); //callback == на стр loadData console.log();
        })
    },
    item(value, callback){
        this.get((data) => {
            const result = data.find((item) => item.id === value); //find выводит элемент
            callback(result); //callback == на стр loadData console.log();
        }) 
    },
    cart(list, callback){
        this.get((data) => {
            const result = data.filter((item) => list.some(obj => obj.id === item.id));//some вывщдит true
                // console.log('cart: ', obj.id);
                // console.log('base: ', item.id);
            callback(result); //callback == на стр loadData console.log();
        })
    },
    category(prop, value, callback){
        this.get((data) => {
            const result = data.filter(item => item[PARAM[prop]].toLowerCase() === value.toLowerCase());
            callback(result);
        })
    },
    search(value, callback){
        this.get((data) => {
            const result = data.filter(item => { //item = в json объекты, которые перебираем
                for(const prop in item){ //prop = это свойство каждого объекта, а item[prop] = значение
                    if(PARAM.search.includes(prop) && item[prop].toLowerCase().includes(value.toLowerCase())){
                        return true;
                    }
                }
            })
            callback(result);
        })
    },
    catalog(callback){
        this.get((data) => {
            const result = data.reduce((arr, item) => {
                if(!arr.includes(item.category)){
                    arr.push(item.category);
                }
                return arr;
            }, [])
            // const arr = [];
            // data.forEach((element) => {
            //     for(const prop in element){
            //         if(prop === PARAM.cat && !arr.includes(element[prop])){
            //            arr.push(element[prop]);
            //         }
            //     }
            // })
            callback(result)
        })
    },
    subCatalog(value, callback){
        this.get((data) => {
            const result = data.filter(item => item.category === value) //value = передается header в catalog
            .reduce((arr, item) => {
                if(!arr.includes(item.subcategory)){
                    arr.push(item.subcategory);
                }
                return arr;
            }, []);

            callback(result)
        })
    }
};

getData.get(console.log);