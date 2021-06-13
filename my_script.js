'use strict'

// 1) Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. 
// Доска должна быть верно разлинована на черные и белые ячейки. 
// Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.

function my_initiation() {
    let cell = document.createElement("div");
    cell.className = "cell";
    table.append(cell);
    cell.style.width = "50px";
    cell.style.height = "50px";
    cell.style.margin = "0px";
    cell.style.padding = "0px";
    cell.style.textAlign = "center";
    cell.style.fontWeight = "bold";
    cell.style.fontSize = "40px";
}

for (var n = 0; (n < 100); n++) {
    window.onload = my_initiation();
}

let masCell = document.querySelectorAll(".cell");

// ячейки
for (var i = 11; i < 89; i++) {
    var color;
    // не совсем оптимально, можно сделать через проверку т.е.
    // 2 ячейки подряд не могут быть одного цвета
    if ((Number(String(i)[0])) % 2 == 0) {
        if (i % 2 == 0) {
            color = "white"
            masCell[i].style.backgroundColor = "white";
        }
        else {
            color = "grey";
        }
    }
    else {
        if (i % 2 != 0) {
            color = "white"
            masCell[i].style.backgroundColor = "white";
        }
        else {
            color = "grey";
        }
    }
    masCell[i].style.backgroundColor = color;
}
// цифры
var massDG = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var d_left = 10;
var revert = 7;
while (d_left <= 80) {
    masCell[d_left].innerText = massDG[revert + d_left / 10];
    masCell[d_left].style.backgroundColor = "";
    d_left += 10;
    revert -= 2;
}
var d_right = 19;
while (d_right < 99) {
    masCell[d_right].innerText = massDG[(d_right - 9) / 10];
    masCell[d_right].style.backgroundColor = "";
    d_right += 10;
}
// буквы
var revert = 7;
var massWD = ["A", "B", "C", "D", "E", "F", "G", "H"];
for (var wd_top = 1; (wd_top < 9); wd_top++) {
    masCell[wd_top].innerText = massWD[revert + wd_top - 1];
    revert -= 2;
}
for (var wd_top = 91; (wd_top < 99); wd_top++) {
    masCell[wd_top].innerText = massWD[wd_top - 91];
}

// 2) Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML - структуре.Там должен быть только div,
// в который будет вставляться корзина, сгенерированная на базе JS:
// a. Пустая корзина должна выводить строку «Корзина пуста»;
// b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

let basket = [
    {
        product: "iPhone 5s",
        price: "5000.00",
        quantity: 1
    },
    {
        product: "Laptop Aser Nitro 5",
        price: "86000.00",
        quantity: 1
    },
    {
        product: "Mouse Bloody V8",
        price: "3999.99",
        quantity: 1
    },
    {
        product: "JBL Flip 5",
        price: "6990.54",
        quantity: 2
    },
]

function countBasketPrice(mass_basket) {
    let fullPrice = 0;
    var fullQuantity = 0;
    for (let prod of mass_basket) {
        fullPrice += parseFloat(prod.price) * prod.quantity;
        fullQuantity += prod.quantity;
    }
    var res_obj = {
        fullPrice: fullPrice,
        fullQuantity: fullQuantity
    };
    return res_obj;
}

let main = document.querySelector('.card');
let hd = document.createElement('h1');
hd.className = 'header';
let full = countBasketPrice(basket);
if (full.fullPrice != 0) {
    hd.textContent = "В корзине: " + full.fullQuantity + " товаров на сумму " + full.fullPrice + " руб.";
}
else {
    hd.textContent = 'Корзина пуста';
}

hd.style.textAlign = 'center';
main.appendChild(hd);

// 3) * Сделать так, чтобы товары в каталоге выводились при помощи JS:
// Создать массив товаров(сущность Product);
// При загрузке страницы на базе данного массива генерировать вывод из него.HTML - код должен содержать только div id =”catalog” без вложенного кода.
// Весь вид каталога генерируется JS.


function showCard(mass_card) {
    let catalog = document.querySelector('#catalog');
    let i = 1;
    for (let card of mass_card) {
        let item = document.createElement('h3');
        item.id = "item";
        item.textContent = i + "# " + card.product + " #Количество: " + card.quantity + " #Сумма: " + parseFloat(card.price) * card.quantity;
        catalog.appendChild(item);
        i++;
    }
}

showCard(basket);