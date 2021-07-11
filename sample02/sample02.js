'use strict'

const randomNumber = Math.floor(Math.random() * 20);

const btn = document.getElementById('btn');
const resultText = document.getElementById('result');
const number = document.getElementById('number');

btn.onclick = function () {
    document.getElementById('n1').innerHTML = `<h1>${randomNumber}</h1>`
    if (number.value > randomNumber) {
        resultText.textContent = '大きい'
    } else if (number.value < randomNumber) {
        resultText.textContent = '小さい'
        resultText.style.color = 'red'
    }
}
