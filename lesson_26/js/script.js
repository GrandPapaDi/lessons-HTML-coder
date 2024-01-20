// Строгий режим
"use strict";

/*Задача №1
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас */
const items = document.querySelectorAll(".item");
function clickReaction() {
  this.classList.toggle("active"); // створюю функцію clickReaction для додавання класу active, якщо його немає, або видаляти, якщо він вже присутній.
}
items.forEach((item) => {
  item.addEventListener("click", clickReaction); // використав forEach для додавання слухача події до кожного елемента
});

/*Задача №2
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.*/

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded"); // додаю клас "loaded" до body при повному завантаженню сторінки
});
/*Задача №3
Дано в html: header main footer
При наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.*/

const header = document.querySelector("header"); //знайшов "header" - зберіг у const header
const footer = document.querySelector("footer"); //знайшов "footer" - зберіг у const footer

header.addEventListener("mouseover", function () {
  footer.classList.add("yellow"); //слухаю подію "mouseover", щоб при наведенні курсору на header змінювати колір фону у footer
});

header.addEventListener("mouseout", function () {
  footer.classList.remove("yellow"); //слухаю подію "mouseout", щоб коли курсор пішов з header повертати початковий фон для footer
});
/*Задача №4
Дано в html: текст, елемент з класом main__item, текст. Так, що елемент з класом main__item за межами в'юпотрта.
Створити функцію яка будує інтервал, який буде змінювати контент в елементі main__item виводячи цифру
 яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в
 дата атрибутах елемента main__item.
Функція має запускатись коли ми доскролюємо до елементу main__item (його видно), і не запускатись повторно.*/

//==================Timer===========================
//функція, що викликається, коли стан елемента змінюється(видимий або ні)
function observeElementVisibility(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startTimer(entry.target); //перевіряю, чи елемент став видимий
      observer.unobserve(entry.target); //спостереження припиняю
    }
  });
}

function startTimer(element) {
  const startNum = parseInt(element.dataset.start) || 1; // функція для інтервалу
  const endNum = parseInt(element.dataset.end) || 10;
  let currentNum = startNum;

  const interval = setInterval(() => {
    if (currentNum <= endNum) {
      element.textContent = currentNum;
      currentNum++;
    } else {
      clearInterval(interval); // зупиняю інтервал, коли досягнуто максимального числа
    }
  }, 1000);
}

const item = document.querySelector(".main__item"); // вибираю елемент з класом "main__item" і слідкую
const observer = new IntersectionObserver(observeElementVisibility);
observer.observe(item);

//==============================================

//==============================================
//==============================================
//==============================================
/*document.addEventListener("click", documentAction);

function documentAction(e) {
  const targetElement = e.target;
  // Меню бургер
  if (targetElement.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
    // Навігація по сторінці
  } else if (targetElement.closest(".menu__link")) {
    if (document.documentElement.classList.contains("menu-open")) {
      document.documentElement.classList.remove("menu-open");
    }
    const link = targetElement.closest(".menu__link");
    const goto = link.dataset.goto;
    const gotoElement = document.querySelector(goto);

    if (gotoElement) {
      gotoElement.scrollIntoView({
        behavior: "smooth",
      });
    }
    e.preventDefault();
    // Показати пароль
  } else if (targetElement.closest(".show-pass")) {
    const inputPass = document.querySelector(".pass-input");
    if (inputPass.getAttribute("type") === "password") {
      inputPass.setAttribute("type", "text");
      targetElement.closest(".show-pass").textContent = "Приховати пароль";
    } else {
      inputPass.setAttribute("type", "password");
      targetElement.closest(".show-pass").textContent = "Показати пароль";
    }
  }
}*/

/*button.addEventListener("click", function (e) {
  console.log("Click!");
});
button.addEventListener("click", function (e) {
  console.log("ClAck!");
});*/
/*const options = {
  capture: false,
  once: true,
  passive: false,
};*/
/*const button = document.querySelector(".button");
function showConsole(event) {
  console.log(event.type);
  console.log(event.target);
}
button.addEventListener("click", showConsole);
//button.addEventListener("mouseenter", showConsole);*/
/*const lesson = document.querySelector(".lesson");
function showConsole() {
  console.log("Ura!");
}
lesson.addEventListener("click", function (event) {
  if (event.target.closest(".button")) {
    showConsole();
  }
});*/
//Делегирование
/*const menuBody = document.querySelector(".menu");

document.addEventListener("click", menu);

function menu(event) {
  if (event.target.closest(".menu__button")) {
    menuBody.classList.toggle("_active");
  }
  if (!event.target.closest(".menu")) {
    menuBody.classList.remove("_active");
  }
}
document.addEventListener("keyup", function (event) {
  if (event.code === "Escape") {
    menuBody.classList.remove("_active");
  }
  console.log(event);
});
const link = document.querySelector(".link");

link.addEventListener("click", function (event) {
  console.log("Our business");
});*/

/*const button = document.querySelector(".button");

button.addEventListener("mousedown", function (event) {
  console.log(`Button push ${event.which}`);
});
button.addEventListener("click", function (event) {
  console.log("Button push main button");
});
button.addEventListener("contextmenu", function (event) {
  console.log("Call context menu (button mouse)");
});*/
