'use strict';

let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 45;
let adaptive = true;
let title = "";
title = prompt('Как называется ваш проект?', 'Homework Number-03');
screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
screenPrice = prompt('Сколько будет стоить данная работа?', 12000);
adaptive = confirm('Нужен ли адаптив на сайте?');

let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = parseInt(service1);
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = parseInt(service2);
screenPrice = parseInt(screenPrice);

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
}

const getFullPrice = function () {
    return screenPrice + servicePrice1 + servicePrice2;
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100));
}

function getTitle() {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
}

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice < 30000 && fullPrice > 15000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice > 0 && fullPrice < 15000) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log('Что то пошло не так?');
}

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("allServicePrices ", allServicePrices);
console.log("fullPrice ", fullPrice);
console.log("servicePercentPrice ", servicePercentPrice);
console.log("title ", title);

