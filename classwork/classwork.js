// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let group = document.getElementById('main_header');
// group.classList.add('sep2021');
// console.log(group);

// b) робить шириниу елементу ul 400px


// let w = document.getElementsByTagName('ul');
// for (const wElement of w) {
//     wElement.style.width = '400px';
//     wElement.style.background = 'red';
// }




// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let elementsByClassName = document.getElementsByClassName('linkList');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.width = '50% ';
//     elementsByClassNameElement.style.background = ' red';
// }


// d) отримує текст який зберігається в елементі з класом listElement2
// function fun(text) {
//     let elementsByClassName = document.getElementsByClassName('listElement2');
//     elementsByClassName.innerText = text;
//     return elementsByClassName;
// }
// let fun1 = fun('Hello');
// console.log(fun1);


// e) отримує всі елементи li та змінює ім колір фону на сірий

//     let elementsByTagName = document.getElementsByTagName('li');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.background = 'silver'
// }





// f) отримує всі елементи 'a' та додає їм клас anchor
//

// let elementsByClassName = document.getElementsByTagName('a');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.classList.add('anchor')
// }


// g) отримує всі елементи 'a' та у випадку,
// якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let elementsByClassName = document.getElementsByTagName('a');
// for (let elementsByClassNameElement of elementsByClassName) {
//     if (elementsByClassNameElement.innerText === 'link3' ) {
//         elementsByClassNameElement.style.fontSize = '40px'
//     }
// }



// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let elementsByClassName = document.getElementsByTagName('a');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.classList.add(elementsByClassNameElement.innerText)
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let elementsByTagName = document.getElementsByClassName('sub-header');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.background = prompt();
// }




// j) отримує всі елементи 'sub-header' та змінює колір тексту у
// видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let elementsByTagName = document.getElementsByClassName('sub-header');
// for (const elementsByTagNameElement of elementsByTagName) {
//     if (elementsByTagName.innerText = 'content 2 segment') {
//         elementsByTagNameElement.style.background = prompt();
//     }
//
//
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
// let addText = document.getElementsByClassName('content_1');
// for (const addTextElement of addText) {
//     addTextElement.innerText = prompt();
// }




// l) отримати елементи p та змінити їм padding на 20px

// let elementsByTagName = document.getElementsByTagName('p');
// for (const elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.padding ='20px'
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let addText = document.getElementsByClassName('text2');
// for (const addTextElement of addText) {
//     addTextElement.innerText = 'sep-2021';
// }
