class ShoppingCart{
    constructor(){
        this.shoppingList = ['coffee'];
    }

    //public methods
    getShoppingList(){
        return this.shoppingList.join(', ');
    }

    addItems(newItem){
        this.shoppingList.push(newItem)
    }
}

export default ShoppingCart;