// Задание 1.

function numobj (number) {
    if(number > 999){
        console.log('Число слишком большое' + this)
        return;
    }
    this.hundreds = (number - number % 100) / 100;
    this.dozens = (number % 100 - number % 10) / 10;
    this.units = number % 10;
}

let newobj = new numobj(222);
console.log(newobj);

//Задание 2. Товары в корзине можно заменить объектами - так у них можно будет указать свойства,
// при этом не нагружая массив cart дополнительными массивами. Корзину при этом оставляем массивом - она просто принимает в себя товары-объекты.


function NewGood(name, price) {
    this.name = name;
    this.price = price;
}

let goodfirst = new NewGood('shirt', 43);
let goodsecond = new NewGood('pants', 432);


let cart = [goodfirst, goodsecond]


function countCartPrice(arr) {
    let sum = 0;
    for(i = 0; i < arr.length; i++){
        sum += arr[i].price;
    }
    console.log(sum);
}

countCartPrice(cart);


