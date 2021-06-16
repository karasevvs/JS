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
hd.textContent = 'Корзина пустая';
hd.style.textAlign = 'center';
basket.appendChild(hd);

let basket_btn = document.createElement("a");
basket_btn.id = "basket_btn";
basket_btn.href = "#";
basket_btn.textContent = "Отобразить";
basket_btn.style.color = "#fff";
basket_btn.style.textDecoration = "none";
basket_btn.style.fontWeight = "bold";
basket_btn.style.userSelect = "none";
basket_btn.style.borderRadius = "10px";
basket_btn.style.backgroundColor = "rgb(168, 5, 5)";
basket_btn.style.padding = ".7em 1.5em";
basket_btn.style.border = "1px solid";
basket_btn.style.display = "block";
basket_btn.style.textAlign = 'center';
basket_btn.style.marginTop = "1%";
basket_btn.style.marginLeft = "25%";
basket_btn.style.marginRight = "25%";

basket_btn.onmouseenter = function () {
    this.style.backgroundColor = "rgb(13, 191, 43)";
}
basket_btn.onmouseleave = function () {
    this.style.backgroundColor = "rgb(168, 5, 0)";
}
basket.appendChild(basket_btn);

// корзина пользователя
const user_basket = []

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

// Просмотр корзины
document.addEventListener("click", function (e) {
    if (e.target.id == "basket_btn") {
        if (document.getElementById("show_user_basket")) {
            document.getElementById("show_user_basket").remove();
        }
        let show_catalog = document.querySelector('#catalog');
        let item = document.createElement('div');
        item.id = "show_user_basket";

        for (let item_user_basket of user_basket) {
            let item_name = document.createElement('h2');
            item_name.textContent = "# " + item_user_basket.product + " Количество: " + item_user_basket.quantity + " Цена: "
                + item_user_basket.price + " Сумма: " + item_user_basket.quantity * item_user_basket.price;
            item.appendChild(item_name);
            item.appendChild(document.createElement('br'));

            show_catalog.appendChild(item);
        }
        if (Object.keys(user_basket).length == 0) {
            alert("Корзина пустая!");
        }
    }
});

// 2) У товара может быть несколько изображений.Нужно:
// a. Реализовать функционал показа полноразмерных картинок товара в модальном окне;
// b. Реализовать функционал перехода между картинками внутри модального окна.

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
    new_button.style.position = "absolute";
    new_button.style.right = 0;
    new_button.style.borderRadius = "10px";
    new_button.style.color = "#fff";
    new_button.style.textDecoration = "none";
    new_button.style.fontWeight = "bold";
    new_button.style.userSelect = "none";
    new_button.style.backgroundColor = "rgb(168, 5, 5)";
    new_button.style.padding = ".7em 1.5em";
    new_button.style.border = "1px solid";

    new_button.onmouseenter = function () {
        this.style.backgroundColor = "rgb(13, 191, 43)";
    }
    new_button.onmouseleave = function () {
        this.style.backgroundColor = "rgb(168, 5, 0)";
    }

    big_item.appendChild(new_button);
    show_catalog.appendChild(big_item);
}

document.addEventListener("click", function (e) {
    if (e.target.id == "close_modal") {
        document.querySelector('#big_item').remove();
        document.querySelector('#catalog').style.filter = "";
        document.querySelector('.menu').style.filter = "";
        OPEN_STATUS = false;
    }
});

document.addEventListener("mouseover", function (e) {
    if (e.target.id == "img_small") {
        let big_img = document.getElementById('big_img');
        big_img.style.backgroundImage = "url(img/" + e.target.title + "/" + e.target.value + ".jpg)";
    }
});