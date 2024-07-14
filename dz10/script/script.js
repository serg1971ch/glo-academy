'use strict'

// Восстановить порядок книг.
const lsBooks =  document.querySelectorAll(".book")
lsBooks[0].before(lsBooks[1]);
lsBooks[3].before(lsBooks[4])
lsBooks[5].after(lsBooks[2]);

const mainBody = document.querySelector('body');
mainBody.style.background = 'url(./image/you-dont-know-js.jpg)'

const title = lsBooks[4].querySelector('h2');
title.textContent = "Книга 3. this и Прототипы Объектов";
title.style.color = 'darkkhaki'

const advertisement = document.querySelector(".adv");
advertisement.remove();

const elems2 = lsBooks[0].querySelectorAll('ul li');
const elems5 = lsBooks[5].querySelectorAll('ul li');

elems2[3].after(elems2[6]);
elems2[6].after(elems2[8]);
elems2[9].after(elems2[2]);

elems5[4].after(elems5[2])
elems5[1].after(elems5[9])
elems5[7].after(elems5[5])

const elems6 = lsBooks[2].querySelectorAll('ul li');
elems6[8].insertAdjacentHTML('afterend','<li>Глава 8: За пределами ES6</li>')