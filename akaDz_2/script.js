'use strict';

llet screens = "Простые, Сложные, Интерактивные";
let screenPrice = 45;
let adaptive = true;
let title = "";

let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = parseInt(service1);
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = parseInt(service2);
screenPrice = parseInt(screenPrice);

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const isNumber = function (num) {
    return !NaN(parseFloat(num)& isFinite(num))
}

const getFullPrice = function () {
    return screenPrice + servicePrice1 + servicePrice2;
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice*(rollback/100));
}
function getTitle() {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
}

const asking = function () {
    title = prompt('Как называется ваш проект?', 'Homework Number-05');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    do {
        screenPrice = prompt('Сколько будет стоить данная работа?', 12000);
    } while (isNumber(screenPrice)) {
        adaptive = confirm('Нужен ли адаптив на сайте?');
    }
}

const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        let price = 0;

        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?")
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?")
        }

        do {
            price = promt("Сколько это будет стоить,")
        } while (!isNumber(price))
        sum += +price;
    }
    return sum;
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice < 30000 && fullPrice > 15000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice > 0 && fullPrice < 15000) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log('Что то пошло не так?');
}

console.log("allServicePrices ", allServicePrices);
console.log("fullPrice ", fullPrice);
console.log("servicePercentPrice ", servicePercentPrice);
console.log("title ", title);

