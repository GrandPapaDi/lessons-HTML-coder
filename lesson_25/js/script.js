// Строгий режим
"use strict";
/*Задача №1
Отримати в константу елемент <body>*/
const bodyElement = document.body;
console.log(bodyElement);

/*Задача №2
Написати функцію, яка додає в <body> список UL
з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)*/

function addListToBody(quantity = 4) {
  const itemUl = document.createElement("ul"); // створюю елементи
  for (let i = 1; i <= quantity; i++) {
    const itemLi = document.createElement("li");
    itemLi.textContent = `Item №${i}`;
    itemUl.appendChild(itemLi);
  }
  bodyElement.insertAdjacentElement("afterbegin", itemUl); //  - додаю списк в <body>
}
addListToBody(10); // - викликаю функцію.

/*Задача №3
Додати до елементу <body> класс loaded.
Потім перевірити чи є клас loaded у елемента <body>
і, якщо є, додати стиль кольору тесту зедлений.*/

bodyElement.classList.add("loaded"); //додаю до елементу <body> класс loaded
//перевіряю чи є клас loaded у елемента <body>
if (bodyElement.classList.contains("loaded")) {
  bodyElement.style.color = "green"; // якщо є, додаю стиль кольору тесту зелений.
}

/*Задача №4
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, 
та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".*/

const item = document.querySelectorAll(".item"); // отримую елементи з класом "item" в константу
// змінюю його клас на active та перезаписую контент всередені кожного елемента
item.forEach((item, index) => {
  item.classList.add("active");
  item.textContent = `Елемент №${index + 1}`;
});

/*Задача №5
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки*/

const button = document.querySelector(".button"); // отримав елемент кнопки
// перевіряю, чи існує елемент з класом button
if (button) {
  button.scrollIntoView({ behavior: "smooth" }); // за допомогою методу scrollIntoView, прокручую скрол сторінки до кнопки
}
/*Задача №6
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Потім отримати значення отрибуту та, якщо значення меньше 200
пофарбувати колір тексту посилання в червоний*/

const link = document.querySelector(".link"); // отримав елемент "link"
if (link) {
  link.setAttribute("data-quantity", 100); // додаю дата-атрибут зі значенням 100
  const dataQuantity = link.getAttribute("data-quantity"); // отримую значення дата-атрибуту
  // перевірив, чи значення менше 200
  if (parseInt(dataQuantity) < 200) {
    link.style.color = "red"; // якщо значення меньше 200, міняю колір тексту на червоний
  }
}
