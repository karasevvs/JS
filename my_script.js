'use strict'

// 1) Написать функцию, преобразующую число в объект.Передавая на вход число от 0 до 999, 
// надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 надо получить следующий объект: { ‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2 }.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function transform_number(user_number) {
    var digit = {
        number: 0,
        units: 0,
        tens: 0,
        hundreds: 0,
    };
    if (user_number <= 999 & user_number >= 0) {
        if (user_number <= 9) {
            digit.number = number;
            return digit;
        }
        else {
            digit.units = Math.floor(user_number % 10);
            digit.tens = Math.floor(user_number / 10 % 10);
            digit.hundreds = Math.floor(user_number / 100 % 10);
            return digit;
        }
    }
    else {
        console.log("Число не соответствует диапазону от 0 до 999");
        return digit;
    }

}

console.log("=".repeat(25) + " Задание 1 " + "=".repeat(25));
console.log(transform_number(765));


// 2) Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов.Какими объектами можно заменить их элементы ?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно - ориентированную базу.

console.log("=".repeat(25) + " Задание 2 " + "=".repeat(25));
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
console.log(typeof (basket));