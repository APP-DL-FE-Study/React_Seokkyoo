const inputbox = document.querySelector('.input')
const button = document.querySelector('#btn')
// 여기서 선언하면 하나의 p의 내용이 계속 변경됨
// const createdelement = document.createElement('p')
const body = document.querySelector('body')
const div_textlist = document.querySelector('#textlist')

// const button2 = document.querySelector('button');

// 이벤트 버블링을 이용한 이벤트 위임
div_textlist.addEventListener('click', e => {
    console.log()
    if (e.target.id !== "createdBtn") return
    // if문을 넘었다면 e는 createdBtn이기 때문에 parentNode는 div가 된다.
    // 따라서 parentNode에서 removeChild 하면 span과 button이 지워진다.
    div_textlist.removeChild(e.target.parentNode)
})

console.log(inputbox)

function click(e) {
    console.log(e.target)
}

function change(e) {
    console.log(e.target.value)
    // 여러 개를 만들려면 여기서 선언하면 됨
    const created_div = document.createElement('div')
    // span은 p와 달리 inline이기 때문에 한 줄을 통째로 점유하지 않는다.
    const created_span = document.createElement('span')
    const created_btn = document.createElement('button')
    created_div.id = 'createdDiv'
    created_span.innerText = e.target.value
    created_span.id = 'createdSpan'
    created_btn.innerText = '삭제'
    created_btn.id = 'createdBtn'
    created_div.appendChild(created_span)
    created_div.appendChild(created_btn)
    div_textlist.appendChild(created_div)
    inputbox.value = ''
}

button.addEventListener('click', click);
inputbox.addEventListener('change', change);