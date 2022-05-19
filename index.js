const inputbox = document.querySelector('.input');
const button = document.querySelector('#btn');
// 여기서 선언하면 하나의 p의 내용이 계속 변경됨
// const createdelement = document.createElement('p');
const body = document.querySelector('body');

console.log(inputbox);

function click(e) {
    console.log(e);
}

function change(e) {
    console.log(e.target.value);
    // 여러 개를 만들렴녀 여기서 선언하면 됨
    const created_p = document.createElement('p');
    created_p.innerText = e.target.value;
    body.appendChild(created_p);
}

button.addEventListener('click', click);
inputbox.addEventListener('change', change);