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
    // 여러 개를 만들려면 여기서 선언하면 됨
    const created_div = document.createElement('div');
    // span은 p와 달리 inline이기 때문에 한 줄을 통째로 점유하지 않는다.
    const created_span = document.createElement('span');
    const created_btn = document.createElement('button');
    created_span.innerText = e.target.value;
    created_btn.innerText = '삭제';
    created_div.appendChild(created_span);
    created_div.appendChild(created_btn);
    body.appendChild(created_div);
}

button.addEventListener('click', click);
inputbox.addEventListener('change', change);