"use strict";
const inputFrom = document.getElementById('from');
const spanDisplay = document.querySelector('span');

inputFrom.addEventListener('input', () => {
    spanDisplay.textContent = inputFrom.value; // Отображаем значение input в span
});

const messageBtn = document.querySelector('.messageBtn');
const messageBlock = document.querySelector('.message');

messageBtn.addEventListener('click', () => {
    messageBlock.classList.add('animate_animated', 'animate_fadeInLeftBig');
    messageBlock.style.visibility = 'visible'; // Делаем блок видимым
});

const form = document.querySelector('form');
const inputs = form.querySelectorAll('.form-control');

form.addEventListener('submit', (event) => {
    let formValid = true;

    inputs.forEach(input => {
        if (!input.value) {
            input.classList.add('error');
            formValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    if (!formValid) {
        event.preventDefault();
    }
});

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    });
});