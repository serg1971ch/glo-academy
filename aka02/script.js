let title = "Lesson 2";//строка с названием проекта,
let screens = "Простые, Сложные, Интерактивные"; // строка с названиями типов экранов через запятую ("Простые, Сложные, Интерактивные"),
let screenPrice = 45; //любое число,
let rollback = 72; //любое число от 1 до 100,
let fullPrice = 200000; //любое число (сколько хотите заработать),
let adaptive = true; //булевое значение

console.log(typeof(title));
console.log(typeof(fullPrice));
console.log(typeof(adaptive));
console.log(" ");
console.log(screens.length);
console.log(" ");
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log(`Стоимость верстки экранов ${fullPrice} рублей/ долларов/гривен/юани`);
console.log(" ");
console.log(screens.toLowerCase().split(","));
console.log(" ");
rollback = fullPrice * (rollback/100);
console.log(`Процент отката посреднику за работу: ${rollback}`);