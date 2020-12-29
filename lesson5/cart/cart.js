function NewGood(name, price) {
    this.name = name;
    this.price = price;
}

let goodfirst = new NewGood('shirt', 43);
let goodsecond = new NewGood('pants', 432);

let products = [goodfirst, goodsecond];

function countCartPrice(arr) {
    let sum = 0;
    for(i = 0; i < arr.length; i++){
        sum += arr[i].price;
    }
    return sum;
}

function cartSum(arr){
    let cart = document.querySelector('.cart');
    if(arr.length == 0){
        cart.textContent = "Корзина пуста.";
    }
    else {
        cart.textContent = "В корзине " + arr.length + " товара/ов на сумму " + countCartPrice(arr) + " рублей.";
    }
}

cartSum(products);
