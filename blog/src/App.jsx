import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']); 
  let [logo, setLogo] = useState('ReactBlog'); 
  let [따봉, c] = useState(0);
  // 변수와 state의 차이는 변경 시 자동 재렌더링
  // 아무데나 쓰지 말고! 변경이 잦은 곳에 권장. 변경이 뜸하다면 비추.
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color : 'red', fontSize : '16px' }}>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{ 글제목[0] } <span>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
