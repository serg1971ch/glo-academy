'use strict';

const appService = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},

    start: function () {
        appService.asking()
        appService.addPrices()
        appService.allServicePrices = appService.getAllServicePrices()
        appService.fullPrice = appService.getFullPrice()
        appService.servicePercentPrice = appService.getServicePercentPrices()
        appService.title = appService.getTitle()

        appService.logger()
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },

    isText: function (text) {
        return /\D/.test(text)
    },

    asking: function () {
        appService.title = prompt('Как называется ваш проект?', 'Homework Number-08');

        for (let i = 0; i < 2; i++) {
            let name = prompt("Какие типы экранов нужно разработать?", "Простые, сложные")
            let price = 0;

            do {
                price = prompt("Сколько это будет стоить данная работа?")
            } while (appService.isText(price))

            appService.screens.push({id: i, name: name, price: price})
        }

        for (screen of appService.screens) {
            appService.screenPrice += +screen.price;
        }

        for (let i = 0; i < 2; i++)  {
            let name = prompt("Какой дополнительный тип услуги нужен?");
            let price = 0;

            do {
                price = prompt("Сколько это будет стоить?")
            } while (appService.isText(price))
            appService.services[name] = +price;
        }
        console.log("Массив сервисов: " + this.services)

        appService.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    addPrices: function () {
        for (let screen of appService.screens) {
            appService.screenPrice += +screen.price
        }
    },

    getAllServicePrices: function () {
        for (let key in appService.services) {
            appService.allServicePrices += appService.services[key]
        }
    },

    getFullPrice: function () {
        appService.fullPrice = +appService.screenPrice + appService.allServicePrices;
    },

    getServicePercentPrices: function () {
        appService.fullPrice = appService.fullPrice - (appService.fullPrice * (appService.rollback / 100));
    },

    getTitle: function () {
        appService.title.trim()[0].toUpperCase() + appService.title.trim().substr(1).toLowerCase();
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
        for (let key in appService) {
            if (appService.hasOwnProperty(key)) {
                console.log(key, appService[key]);
            }
        }
    }
}

appService.start();