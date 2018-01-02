var products = [{
    name: "test",
    price: 12.9,
    inventory: 20
}, {
    name: "test2",
    price: 30,
    inventory: 80
}];

class ProductLineItem {
    constructor(product) {
        this.name = product.name;
        this.quantity = 1;
        this.price = product.price * this.quantity;
    }

    getName() {
        return this.name;
    }

    getQuantity() {
        return this.quantity;
    }

    getPrice() {
        return this.price;
    }

    setQuantity(quantity) {
        this.price /= this.quantity;
        this.quantity = quantity;
        this.price *= this.quantity;
    }
}

var basket = (function () {
    var buy = [];

    return {
        addProduct: function (PrId) {
            var exists = false;

            buy.forEach(function (item, i, buy) {
                exists = (item.getName() == products[PrId].name) ? true : false;
            });
            if (exists) alert("Товар уже в корзине");
            else buy[buy.length] = new ProductLineItem(products[PrId]);
        },
        removeProduct: function (PrId) {
            buy.forEach(function (item, i, buy) {
                if (item.getName() == products[PrId].name) buy.splice(i, 1);
            })
        },
        updateProductQuantity: function (PrId, quantity) {
            buy.forEach(function (item, i, buy) {
                if (item.getName() == products[PrId].name) {
                    item.setQuantity(quantity);
                }
            })
        },
        getTotalPrice: function () {
            var TotalPrise = 0;

            buy.forEach(function (item, i, buy) {
                TotalPrise += item.getPrice();
            })
            return TotalPrise;
        }
    }
})();