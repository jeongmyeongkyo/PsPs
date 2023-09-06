import React from 'react';
import './App.css';
import logo from "./img/logo.png"
import makalong from "./img/makalong.png"

function App() {
  return (
    <div class="App">
      <div class="ses">
        <img className="logo" alt="logo" src={logo} />
        <div class="shop">shop</div>
        <div class="login">로그인</div>
        <div class="ms">검색</div>
        <div class="make">회원가입</div>
        <img className="mein" alt="mein" src={makalong} />
      </div>
    </div>
  )
}
export default App;

