'use strict'

// 1) Продолжаем реализовывать модуль корзины:
// a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
// b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.

// каталог товаров
let catalog = [
    {
        id: 1,
        product: "iPhone 5s",
        price: "5000.00"
    },
    {
        id: 2,
        product: "Laptop Acer Nitro 5",
        price: "86000.00"
    },
    {
        id: 3,
        product: "Mouse Bloody V8",
        price: "3999.99"
    },
    {
        id: 4,
        product: "JBL Flip 5",
        price: "6990.54"
    },
]

// отображение каталога
function fun_catalog(catalog) {
    let show_catalog = document.querySelector('#catalog');
    for (let card of catalog) {
        let item = document.createElement('div');
        item.id = "item";

        let item_name = document.createElement('h1');
        item_name.style.marginLeft = "auto";
        item_name.style.marginRight = "auto";
        item_name.style.display = "block";
        item_name.style.textAlign = "center";
        item_name.textContent = card.product;
        item.appendChild(item_name);

        let item_img = document.createElement("div");
        item_img.id = "item_img";
        item_img.value = card.id;
        item_img.style.display = "block";
        item_img.style.backgroundImage = "url(img/" + card.id + ".png)";
        item.appendChild(item_img);

        let item_price = document.createElement("h1");
        item_price.style.display = "block";
        item_price.style.textAlign = "center";
        item_price.style.marginLeft = "auto";
        item_price.style.marginRight = "auto";
        item_price.textContent = "Цена: " + card.price + " руб.";
        item.appendChild(item_price);

        let item_btn = document.createElement("a");
        item_btn.style.display = "block";
        item_btn.id = "item_btn";
        item_btn.textContent = "В корзину";
        item_btn.href = "#";
        item_btn.value = card.id;

        item_btn.style.marginLeft = "25%";
        item_btn.style.marginRight = "25%";

        item_btn.style.color = "#fff";
        item_btn.style.textDecoration = "none";
        item_btn.style.textAlign = "center";
        item_btn.style.fontWeight = "bold";
        item_btn.style.userSelect = "none";
        item_btn.style.borderRadius = "10px";
        item_btn.style.backgroundColor = "rgb(13, 191, 43)";
        item_btn.style.padding = ".7em 1.5em";
        item_btn.style.border = "1px solid";
        item_btn.style.marginTop = "1%";
        item_btn.onmouseenter = function () {
            this.style.backgroundColor = "rgb(168, 5, 5)";
        }
        item_btn.onmouseleave = function () {
            this.style.backgroundColor = "rgb(13, 191, 43)";
        }

        item.appendChild(item_btn);

        show_catalog.appendChild(item);
    }
}

fun_catalog(catalog);

// итого сумма и количество
let fullPrice = 0;
var fullQuantity = 0;

// создаем первоначальное отображение итогов
let basket = document.querySelector('.basket');
let hd = document.createElement('h3');
hd.id = 'result';
hd.textContent = 'Корзина пустая';
hd.style.textAlign = 'center';
basket.appendChild(hd);

let basket_btn = document.createElement("a");
basket_btn.id = "basket_btn";
basket_btn.href = "#";
basket_btn.textContent = "Отобразить";
basket.appendChild(basket_btn);

// корзина пользователя
let user_basket = [];

// добавление в корзину и рассчет итогов
function add_basket(value_id) {
    function add_new_item_basket(value_id) {
        for (let catalog_item of catalog) {
            if (catalog_item.id == value_id) {
                var obj = {
                    id: catalog_item.id,
                    product: catalog_item.product,
                    price: catalog_item.price,
                    quantity: 1
                };
                user_basket.push(obj);
                break;
            }
        }
    }
    function search_catalog_obj_item(value_id) {
        for (var item of user_basket) {
            if (item.id == value_id) {
                console.log(item.id + " " + item.product + " " + item.price + " " + item.quantity)
                return true;
            }
        }
        return false;
    }
    // для отображения корзины в углу
    for (let catalog_item of catalog) {
        if (catalog_item.id == value_id) {
            fullPrice += parseFloat(catalog_item.price);
            fullQuantity += 1;
        }
    }
    //корзина клиента

    // пустая
    if (user_basket.length == 0) {
        // alert("1-вызов, Элементов в корзине: " + user_basket.length);
        add_new_item_basket(value_id);
    }
    // что-то есть
    else {
        // alert("Элементов в корзине: " + user_basket.length);
        if (search_catalog_obj_item(value_id)) {
            // alert("update");
            for (let basket_item of user_basket) {
                if (basket_item.id == value_id) {
                    basket_item.quantity += 1;
                }
            }
        }
        else {
            add_new_item_basket(value_id);
            // alert("add");
        }
    }
}

// обработка добавления в корзину
document.addEventListener("click", function (e) {
    if (e.target.id == "item_btn") {
        add_basket(parseInt((e.target.value)));
        hd.textContent = "В корзине: " + fullQuantity + " товаров на сумму " + fullPrice.toFixed(2) + " руб.";

    }
});

// Просмотр фото
let OPEN_STATUS = false;
document.addEventListener("click", function (e) {
    if (e.target.id == "item_img") {
        if (OPEN_STATUS == false) {
            item_modal(e.target.value);
            OPEN_STATUS = true;
        }
    }
});

function draw_basket() {
    let big_basket = document.querySelector('#big_basket');
    let item = document.createElement('div');
    item.id = "show_user_basket";

    let i = 1;
    for (let item_user_basket of user_basket) {
        let card_div = document.createElement('div');
        card_div.id = "card_div";

        let item_name = document.createElement('h3');
        item_name.style.position = "absolute";
        item_name.style.top = 10 + i + "%";

        item_name.textContent = "# " + item_user_basket.product;

        let btn_minus = document.createElement('button');
        btn_minus.value = item_user_basket.id;
        btn_minus.textContent = "-"
        btn_minus.id = "button_minus";
        btn_minus.style.position = "absolute";
        btn_minus.style.left = "180px";
        btn_minus.style.top = 10 + i + "%";
        btn_minus.style.color = "red";
        btn_minus.style.fontWeight = "bold";
        card_div.appendChild(btn_minus);

        let quantity = document.createElement('h3');
        quantity.id = "itemQuantity_" + item_user_basket.id;
        quantity.style.position = "absolute";
        quantity.style.top = 10 + i + "%";
        quantity.style.left = "200px";
        quantity.textContent = "    " + item_user_basket.quantity + "    ";
        card_div.appendChild(quantity);

        let btn_plus = document.createElement('button');
        btn_plus.value = item_user_basket.id;
        btn_plus.textContent = "+"
        btn_plus.id = "btn_plus";
        btn_plus.style.position = "absolute";
        btn_plus.style.left = "220px";
        btn_plus.style.top = 10 + i + "%";
        btn_plus.style.color = "green";
        btn_plus.style.fontWeight = "bold";
        card_div.appendChild(btn_plus);
        let extra = document.createElement('h3');
        extra.id = "item_" + item_user_basket.id;
        extra.style.position = "absolute";
        extra.style.top = 10 + i + "%";
        extra.style.left = "240px";
        extra.textContent = "Цена: " + item_user_basket.price + " Сумма: " + (item_user_basket.quantity * item_user_basket.price).toFixed(2);
        card_div.appendChild(extra);
        card_div.appendChild(item_name);
        card_div.appendChild(document.createElement('br'));

        big_basket.appendChild(item);
        item.appendChild(card_div);
        i += 8;
    }
}

// Просмотр корзины
document.addEventListener("click", function (e) {
    if (e.target.id == "basket_btn") {
        if (Object.keys(user_basket).length == 0) {
            alert("Корзина пустая!");
        }
        else {
            show_big_basket();
            draw_basket();
        }
    }
});


document.addEventListener("click", function (e) {
    if (e.target.id == "button_minus") {
        for (let item of user_basket) {
            if (item.id == e.target.value) {
                if (item.quantity - 1 > 0) {
                    item.quantity -= 1;

                    fullPrice -= parseFloat(item.price);
                    fullQuantity -= 1;
                    let basket = document.querySelector('#result');
                    if (fullQuantity === 0) { fullPrice = 0; }
                    basket.textContent = "В корзине: " + fullQuantity + " товаров на сумму " + fullPrice.toFixed(2) + " руб.";

                    let extra = document.querySelector("#item_" + e.target.value);
                    extra.textContent = "Цена: " + item.price + " Сумма: " + (item.quantity * item.price).toFixed(2);
                    let itemQuantity = document.querySelector("#itemQuantity_" + e.target.value);
                    itemQuantity.textContent = "    " + item.quantity + "    ";
                }
                else {
                    fullPrice -= parseFloat(item.price);
                    fullQuantity -= 1;
                    let basket = document.querySelector('#result');
                    basket.textContent = "В корзине: " + fullQuantity + " товаров на сумму " + fullPrice.toFixed(2) + " руб.";

                    user_basket.pop(item);
                    document.querySelector("#show_user_basket").remove();
                    if (fullQuantity === 0) { fullPrice = 0; }
                    draw_basket();
                }
            }
        }
    }
    if (e.target.id == "btn_plus") {
        for (let item of user_basket) {
            if (item.id == e.target.value) {
                item.quantity += 1;

                fullPrice += parseFloat(item.price);
                fullQuantity += 1;
                let basket = document.querySelector('#result');
                basket.textContent = "В корзине: " + fullQuantity + " товаров на сумму " + fullPrice.toFixed(2) + " руб.";

                let extra = document.querySelector("#item_" + e.target.value);
                extra.textContent = "Цена: " + item.price + " Сумма: " + (item.quantity * item.price).toFixed(2);
                let itemQuantity = document.querySelector("#itemQuantity_" + e.target.value);
                itemQuantity.textContent = "    " + item.quantity + "    ";
            }
        }
    }
});



function item_modal(id) {
    let show_catalog = document.querySelector('body');
    document.querySelector('#catalog').style.filter = "blur(2px)";
    document.querySelector('.menu').style.filter = "blur(2px)";
    let big_item = document.createElement('div');
    big_item.id = "big_item";
    let big_img = document.createElement('div');
    big_img.id = "big_img";

    let div_images = document.createElement('div');
    div_images.id = "div_images";
    for (let j = 1; j < 4; j++) {
        let img_i = document.createElement('img');
        img_i.src = ("img/" + id + "/" + j + ".jpg");
        img_i.style.height = "128px";
        img_i.style.width = "128px";
        img_i.style.border = "1px solid";
        img_i.value = j;
        img_i.title = id;
        img_i.id = "img_small";
        div_images.appendChild(img_i);
        div_images.appendChild(document.createElement('br'));
    }
    big_item.appendChild(div_images);

    big_img.style.backgroundImage = "url(img/" + id + ".png)";
    big_item.appendChild(big_img);

    let new_button = document.createElement('a');
    new_button.textContent = "Закрыть";
    new_button.id = "close_modal";

    big_item.appendChild(new_button);
    show_catalog.appendChild(big_item);
}

document.addEventListener("click", function (e) {
    if (e.target.id == "close_basket") {
        if (document.querySelector("#big_basket")) {
            document.querySelector("#big_basket").remove();
        }
        if (document.querySelector('#adress')) {
            document.querySelector('#adress').remove();
        }
        if (document.querySelector('#comment')) {
            document.querySelector('#comment').remove();
        }
        document.querySelector('#catalog').style.filter = "";
        document.querySelector('.menu').style.filter = "";
    }
    if (e.target.id == "close_modal") {
        if (document.querySelector('#big_item')) {
            document.querySelector('#big_item').remove();
            document.querySelector('#catalog').style.filter = "";
            document.querySelector('.menu').style.filter = "";
        }
        OPEN_STATUS = false;
    }
});

document.addEventListener("mouseover", function (e) {
    if (e.target.id == "img_small") {
        let big_img = document.getElementById('big_img');
        big_img.style.backgroundImage = "url(img/" + e.target.title + "/" + e.target.value + ".jpg)";
    }
});

// разделил на 3, для дальнейшей модификации внутри

function show_big_basket() {
    let show_catalog = document.querySelector('body');
    document.querySelector('#catalog').style.filter = "blur(2px)";
    document.querySelector('.menu').style.filter = "blur(2px)";

    let big_basket = document.createElement('div');
    big_basket.id = "big_basket";

    let h = document.createElement('h1');
    h.style.position = "absolute";
    h.style.left = "40%";
    h.textContent = "Состав корзины";

    big_basket.appendChild(h);

    let new_button = document.createElement('a');
    new_button.textContent = "Закрыть";
    new_button.id = "close_basket";

    let next_button = document.createElement('a');
    next_button.textContent = "Продолжить";
    next_button.id = "to_adress";

    big_basket.appendChild(new_button);
    big_basket.appendChild(next_button);
    show_catalog.appendChild(big_basket);
}


function show_adress() {
    let show_adress = document.querySelector('body');
    document.querySelector('#catalog').style.filter = "blur(2px)";
    document.querySelector('.menu').style.filter = "blur(2px)";

    let big_basket = document.createElement('div');
    big_basket.id = "adress";

    let h = document.createElement('h1');
    h.style.position = "absolute";
    h.style.left = "40%";
    h.textContent = "Адрес доставки";
    big_basket.appendChild(h);

    let textarea = document.createElement('textarea');
    textarea.id = "full_addres";
    textarea.style = "absolute";
    textarea.style.marginTop = "6%"
    textarea.style.height = "400px";
    textarea.style.marginLeft = "15%";
    textarea.style.width = "70%";
    textarea.placeholder = "Введите полный адрес доставки, пример: с. Колотушкино, ул. Пушкина, д. Колотушкина, кв. Петрова, спросить Ивана";
    big_basket.appendChild(textarea);

    let new_button = document.createElement('a');
    new_button.textContent = "Закрыть";
    new_button.id = "close_basket";

    let next_button = document.createElement('a');
    next_button.textContent = "Продолжить";
    next_button.id = "to_comment";

    big_basket.appendChild(new_button);
    big_basket.appendChild(next_button);
    show_adress.appendChild(big_basket);
}

function show_comment() {
    let show_adress = document.querySelector('body');
    document.querySelector('#catalog').style.filter = "blur(2px)";
    document.querySelector('.menu').style.filter = "blur(2px)";

    let big_basket = document.createElement('div');
    big_basket.id = "comment";

    let h = document.createElement('h1');
    h.style.position = "absolute";
    h.style.left = "40%";
    h.textContent = "Комментарий";
    big_basket.appendChild(h);

    let textarea = document.createElement('textarea');
    textarea.id = "full_addres";
    textarea.style = "absolute";
    textarea.style.marginTop = "6%"
    textarea.style.height = "300px";
    textarea.style.marginLeft = "15%";
    textarea.style.width = "70%";
    textarea.placeholder = "Пожелания к доставке, например: курьер с шариками ;)";
    big_basket.appendChild(textarea);


    let new_button = document.createElement('a');
    new_button.textContent = "Закрыть";
    new_button.id = "close_basket";

    let next_button = document.createElement('a');
    next_button.textContent = "Продолжить";
    next_button.id = "to_finish";

    big_basket.appendChild(new_button);
    big_basket.appendChild(next_button);
    show_adress.appendChild(big_basket);
}


document.addEventListener("click", function (e) {
    if (e.target.id == "to_adress") {
        document.querySelector('#big_basket').style.display = "none";
        show_adress();
    }
    if (e.target.id == "to_comment") {
        document.querySelector('#adress').style.display = "none";
        show_comment();
    }
    if (e.target.id == "to_finish") {
        document.querySelector('#big_basket').remove();
        document.querySelector('#adress').remove();
        document.querySelector('#comment').remove();
        user_basket = [];
        fullQuantity = 0;
        fullPrice = 0;
        document.querySelector('#catalog').style.filter = "";
        document.querySelector('.menu').style.filter = "";
        hd.textContent = 'Корзина пустая';
        alert("Заказ успешно оформлен!");

    }
});