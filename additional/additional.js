// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html
// в окремий масив. масив вивести в консоль

function reCall(startElement) {
    console.log(startElement);
    if (startElement.children.length) {
        for (const element of startElement.children) {
            reCall(element);
        }
    }

}

let ret = reCall(document.getElementsByClassName(''));
console.log(ret);