'use strict'

// 1) Почему код дает именно такие результаты?
var a = 1, b = 1, c, d;
c = ++a; alert(c);       // 2 увеличение инкримента на 1
d = b++; alert(d);       // 1 увеличение инкримента для b, но выводим первоначальное значение
c = (2 + ++a); alert(c); // 5 в 1 шаге у нас а=2 и теперь увеличиваем инкримент затем складываем и выводим с 
d = (2 + b++); alert(d); // 4 во 2 шаге b=2 и теперь увеличиваем инкримент зате складываем и выводим предыдущее значение (2) поэтому 4
alert(a);                // 3 т.к. в шаге 1 и 3 увеличивали
alert(b);                // 3 т.к. в шаге 2 и 4 увеличивали


// 2) Чему будет равен x? 
var a = 2;
var x = 1 + (a *= 2); // 5 т.к. а*=2 эквивалентно a * 2 т.е. 2*2=4 
console.log(x);


// 3) Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
//если а и b разных знаков, вывести их сумму;
// Ноль можно считать положительным числом.
var a = 2, b = 2;
if (a >= 0 && b >= 0) {
    console.log('если a и b положительные, вывести их разность: ', a - b);
}
var a = -5, b = -2;
if (a <= 0 && b <= 0) {
    console.log('если а и b отрицательные, вывести их произведение: ', a * b);
}
var a = 5, b = -2;
if ((a <= 0 && b >= 0) || (a >= 0 && b <= 0)) {
    console.log('если а и b разных знаков, вывести их сумму: ', a + b);
}


// 4) Присвоить переменной а значение в промежутке [0..15]. 
// С помощью оператора switch организовать вывод чисел от a до 15.
var a = 5;
var numbers = []
switch (a) {
    case 1:
        for (var i = 0; i < 15; i++) {
            numbers[i] = i + 1;
        }
        console.log(numbers);
        break;
    case 2:
        for (var i = 1; i < 15; i++) {
            numbers[i] = i + 1;
        }
        console.log(numbers);
        break;
    case 3:
        for (var i = 2; i < 15; i++) {
            numbers[i] = i + 1;
        }
        console.log(numbers);
        break;
    case 4:
        for (var i = 3; i < 15; i++) {
            numbers[i] = i + 1;
        }
        console.log(numbers);
        break;
    case 5:
        for (var i = 4; i < 15; i++) {
            numbers[i] = i + 1;
        }
        console.log(numbers);
        break;
    case 6:
        for (var i = 5; i < 15; i++) {
            numbers[i] = i + 1;
        }
        console.log(numbers);
        break;
    case 7:
        for (var i = 6; i < 15; i++) {
            numbers[i] = i + 1;
        }
        console.log(numbers);
        break;
    case 8:
        for (var i = 7; i < 15; i++) {
            numbers[i] = i + 1;
        }
        console.log(numbers);
        break;
    case 9:
        for (var i = 8; i < 15; i++) {
            numbers[i] = i + 1;
        }
        console.log(numbers);
        break;
    case 10:
        for (var i = 9; i < 15; i++) {
            numbers[i] = i + 1;
        }
        console.log(numbers);
        break;
    case 11:
        for (var i = 10; i < 15; i++) {
            numbers[i] = i + 1;
        }
        console.log(numbers);
        break;
    case 12:
        for (var i = 11; i < 15; i++) {
            numbers[i] = i + 1;
        }
        console.log(numbers);
        break;
    case 13:
        for (var i = 12; i < 15; i++) {
            numbers[i] = i + 1;
        }
        console.log(numbers);
        break;
    case 14:
        for (var i = 13; i < 15; i++) {
            numbers[i] = i + 1;
        }
        console.log(numbers);
        break;
    case 15:
        for (var i = 14; i < 15; i++) {
            numbers[i] = i + 1;
        }
        console.log(numbers);
        break;
}


// 5) Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.
function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}

function multiplication(a, b) {
    return a * b;
}

console.log('addition: ', addition(5, 5));
console.log('subtraction: ', subtraction(5, 5));
console.log('division: ', division(5, 5));
console.log('multiplication: ', multiplication(5, 5));


// 6) Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
// В зависимости от переданного значения выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (применить switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return arg1 + arg2;
        case 'вычитание':
            return arg1 - arg2;
        case 'деление':
            return arg1 / arg2;
        case 'умножение':
            return arg1 * arg2;
    }
}

console.log(mathOperation(1, 1, 'сложение'));


// 7) * Сравнить null и 0. Объяснить результат.
var status = false;
if (null > 0) {
    status = true;
}
console.log('null > 0 ==>', status);

var status = false;
if (null < 0) {
    status = true;
}
console.log('null < 0 ==>', status);

var status = false;
if (null == 0) {
    status = true;
}
console.log('null == 0 ==>', status);

var status = false;
if (null <= 0) {
    status = true;
}
console.log('null <= 0 ==>', status);

var status = false;
if (null >= 0) {
    status = true;
}
console.log('null >= 0 ==>', status);

// null > 0 ==> false 
// null < 0 ==> false
// null == 0 ==> false
// null <= 0 ==> true
// null >= 0 ==> true
//сделал наглядный пример, объяснение достаточное ёмкое, прочитал статью тут
// https://habr.com/ru/company/ruvds/blog/337732/


// 8) * С помощью рекурсии организовать функцию возведения числа в степень. 
// Формат: function power(val, pow), где val — заданное число, pow –— степень.

function power(val, pow) {
    if (pow > 0) return val * power(val, pow - 1);
    if (pow < 0) return 1.0 / power(val, -pow);
    return 1;
}

console.log(power(2, 3));
console.log(power(2, -3));

