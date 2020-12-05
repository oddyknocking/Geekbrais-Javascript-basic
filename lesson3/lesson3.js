// Задание 1. Долго не мог понять, как это сделать: допер, что нужна функция для проверки, но сам написать верную не смог, пришлось гуглить.

function check(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}

let a = 0;
let n = 100;

while(a <= n){
    if(check(a)){
        console.log(a);
    }
    a++
}



// Задание 2-3.

let basket = [492, 242, 921, 543];

function countBasketPrice(arr) {
    let sum = 0;
    for(i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}

countBasketPrice(basket);

// Задание 4. Тоже пришлось погуглить, но теперь знаю, что в условиях for не только инкремент можно использовать.

for(let i = 0; i <= 9; console.log(i++)){}

// Задание 5. Если честно, сам удивился, что получилось так просто: стоило только вспомнить про join.


function arrPush(rows){
    let arr = []
    for(let i = 1; i <= rows; i++){
        arr.push('x')
        console.log(arr.join(''));
    }
}

arrPush(20);