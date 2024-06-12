'use strict';

const appService = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: ' ',
    service2: '',

    start: function () {
        appService.asking()
        appService.allServicePrices = appService.allServicePrices()
        appService.fullPrice = appService.fullPrice()
        appService.servicePercentPrice = appService.servicePercentPrice()
        appService.title = appService.getTitle()

        appService.logger()
    },

    isNumber: function (num) {
        return !NaN(parseFloat(num) & isFinite(num))
    },

    asking: function () {
        appService.title = prompt('Как называется ваш проект?', 'Homework Number-05');
        appService.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
        do {
            appService.screenPrice = prompt('Сколько будет стоить данная работа?', 12000);
        } while (isNumber(screenPrice))
        {
            appService.adaptive = confirm('Нужен ли адаптив на сайте?');
        }
    },

    getAllServicePrices: function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            let price = 0;

            if (i === 0) {
                appService.service1 = prompt("Какой дополнительный тип услуги нужен?")
            } else if (i === 1) {
                appService.service2 = prompt("Какой дополнительный тип услуги нужен?")
            }

            do {
                price = promt("Сколько это будет стоить,")
            } while (!isNumber(price))
            sum += +price;
        }
        return sum;
    },

    getFullPrice: function () {
        return screenPrice + servicePrice1 + servicePrice2;
    },

    getServicePercentPrices: function () {
        return fullPrice - (fullPrice * (rollback / 100));
    },

    getTitle: function () {
        return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
    },

    getRollbackMessage: function (fullPrice) {
        if (fullPrice > 30000) {
            console.log('Даем скидку в 10%');
        } else if (fullPrice < 30000 && fullPrice > 15000) {
            console.log('Даем скидку в 5%');
        } else if (fullPrice > 0 && fullPrice < 15000) {
            console.log('Скидка не предусмотрена');
        } else if (fullPrice < 0) {
            console.log('Что то пошло не так?');
        }
    },

    logger: function () {
        console.log(appService.fullPrice)
        console.log(appService.servicePercentPrice)
    }
}

appService.start();