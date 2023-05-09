import React from 'react';
import logo from './logo.svg';
import './App.css';

import Icon from './3WsJpu48nLY.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
				{/* / <img className='img' src={Icon} /> */}
				<div className='img'></div>
				<h2 style={{fontSize: '96px'}}>АНТОХА КРУТОЙ</h2>
				<h3 style={{color: '#2BCC1E'}} >УСЛУГИ:</h3>
				<br/>
				<h3 style={{color: '#2BCC1E'}} >ВЫЕХАТЬ ЗА ПИВОМ</h3>
				<h3 style={{color: '#1ECC9F'}} >свозить В МАК</h3>
				<h3 style={{color: '#C121D4'}} >уСТРОЙИТЬ	нагоняй ПАТЛАТОМУ</h3>
				<h3 style={{color: '#C121D4'}} >ВАША УСЛУГА - <a  target="_blank" href='https://web.telegram.org/a/#383988124'>ТЕЛЕГРАМ @toxakrut</a></h3>
				+7 981 442 1175
				<br/>
      </header>
    </div>
  );
}

export default App;
