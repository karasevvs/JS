'use strict'

// 1) С помощью цикла while вывести все простые числа в промежутке от 0 до 100

console.log("=".repeat(25) + " Задание 1 " + "=".repeat(25));
let number = 0;
while (number <= 100) {
    let check = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            check = false;
            break;
        }
    }
    if (check) {
        console.log(number);
    }
    number++;
}

// 2 и 3) С этого урока начинаем работать с функционалом интернет-магазина. 
// Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
// Товары в корзине хранятся в массиве.Задачи:
// - Организовать такой массив для хранения товаров в корзине;
// - Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

console.log("=".repeat(25) + " Задание 2 и 3 " + "=".repeat(25));
let basket = [
    {
        product: "iPhone 5s",
        price: "5000.00"
    },
    {
        product: "Laptop Aser Nitro 5",
        price: "86000.00"
    },
    {
        product: "Mouse Bloody V8",
        price: "3999.99"
    },
    {
        product: "JBL Flip 5",
        price: "6990.54"
    },
]
let FullPrice = 0;

function countBasketPrice(mass_basket) {
    for (let prod of mass_basket) {
        FullPrice += parseFloat(prod.price);
    }
    return FullPrice;
}
console.log("Общая цена корзины: ", countBasketPrice(basket));


// 4) *Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//for ($i = 0; console.log($i); $i++ <= 9;)

console.log("=".repeat(25) + " Задание 4 " + "=".repeat(25));
for (var i = 0; i <= 9; console.log(i), i++);


// 5) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

console.log("=".repeat(25) + " Задание 5 " + "=".repeat(25));
for (var x = 1; x <= 20; x++) {
    console.log("x".repeat(x));
}
