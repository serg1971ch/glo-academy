'use strict';

const title= prompt('Как называется ваш проект?', 'Dz #03');
console.log(" ");

const screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
console.log(" ");

let screenPrice = prompt('Сколько будет стоить данная работа?', 12000);
console.log(" ");

const adaptive = confirm('Нужен ли адаптив на сайте?');
console.log(" ");

const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = parseInt(service1);
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrive2 = parseInt(service2);
screenPrice = parseInt(screenPrice);
let fullPrice = servicePrice1 + servicePrive2 + screenPrice;
console.log(fullPrice);

let rollback = 72;
rollback = fullPrice * (rollback / 100);
let servicePercentPrice = fullPrice - rollback;
// alert(Math.ceil(servicePercentPrice));
console.log(Math.ceil(servicePercentPrice));

if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice < 30000 && fullPrice > 15000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice > 0 && fullPrice < 15000) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log('Что то пошло не так?');
}

