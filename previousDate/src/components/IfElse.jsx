import React, { useState } from 'react'
import '../components/ConditionRender.css';

const IfElse = () => {
    const [x] = useState(true)
    const [nome] = useState('Kleber');
  return (
    <div className='div-container'>
        <h1>If e else</h1>
        { x ? <p>Deu verdadeiro</p> : <p>Deu falso</p>}
        {nome == 'Kleber' ? 'Bem-vindo, chefe': 'Invasor a vista!'}
    </div>
  )
}

export default IfElse