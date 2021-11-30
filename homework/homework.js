// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName
// або document.getElementsByTagName :


// -- отримує текст з параграфа з id "content"
//
// let content = document.getElementById("content");
// console.log(content);
// -- отримує текст з блоку з id "rules"

// let rules = document.getElementById("rules");
// console.log(rules);

// -- замініть текст параграфа з id 'content' на будь-який інший
// let content1 = document.getElementById("content");
// console.log(content1);
// content1.innerText = "Hello"



// -- замініть текст параграфа з id 'rules' на будь-який інший
// let rules1 = document.getElementById("rules");
// console.log(rules1);
// rules1.innerText = 'Hello'

// -- змініть кожному елементу колір фону на червоний
// let children = document.body.children;
// for (const child of children) {
//     child.style.background = "red";
// }



// -- змініть кожному елементу колір тексту на синій
// let children = document.body.children;
// for (const child of children) {
//     child.style.color = "blue";
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let rules = document.getElementById("rules").classList;
// console.log(rules);


// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let fc= document.getElementsByClassName("fc_rules");
// for (const fcElement of fc) {
//     fcElement.style.color = 'red'
// }