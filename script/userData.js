

const userData = {

    wishListData: ['idd005', 'idd100', 'idd055', 'idd066'],
    get wishList() {
        console.log(this.wishListData);
        return this.wishListData;
    },
    set wishList(id){
        if(this.wishListData.includes(id)){
            const index = this.wishListData.indexOf(id);
            this.wishListData.splice(index, 1);
        } else {
            this.wishListData.push(id);
        }
        
    },

    cartList: [
        {
            id: 'idd055',
            count: 2
        },
        {
            id: 'idd014',
            count: 1
        }, 
        {
            id: 'idd001',
            count: 3
        }
    ]
    };

    export default userData;