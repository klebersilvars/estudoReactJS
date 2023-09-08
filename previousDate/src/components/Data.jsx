import React from 'react'
import '../components/Data.css';
import { useState } from 'react';

const Data = () => {

    const [Number, setNumber] = useState(0)
  return (
    <div className='data-container'>
        <h1>Testando data</h1>
        
        <h1>{Number}</h1>

        <button onClick={  ()=> {setNumber(Number + 1)}}>Clique aqui para aumentar o valor</button>
        
        <button onClick={() => {setNumber(Number - 1)}}>Diminuir valor</button>
    </div>
  )
}

export default Data