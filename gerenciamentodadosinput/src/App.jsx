import React from 'react'
import './App.css';
import { useState } from 'react';
import Inline from './components/Inline';
import Select from './components/Select';


const App = () => {
  const  [name, setName] = useState('');
  const [valor, setValor] = useState(name);

  const handleName = (e) => {
    console.log(setName(e.target.value)); //usando para pegar o valor do meu input
  }
  const valorName =name;

  
  function EnviarValor() {
    setValor(valorName);
  }
  return (
    <div className='container-div'>
      <input type="text" onChange={handleName} placeholder='texto' />
      <input type="password" placeholder='senha'/>
      <input type="email" placeholder='email' required/>
      <button onClick={EnviarValor}>Enviar valor</button>
      <h1>{valor}</h1>
      <Inline/>
      <Select/>
    </div>
  )
}

export default App