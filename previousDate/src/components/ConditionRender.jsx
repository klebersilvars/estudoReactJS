import React from 'react'
import '../components/ConditionRender.css';
import { useState } from 'react';
import Data from './Data';


const ConditionRender = () => {
    const [x] = useState(true);
  return (
    <div className='div-container'>
        <h1>Renderização condicional</h1>
        {x && <p>Isso será exibido quando o X for true</p>}
    </div>
  )
}

export default ConditionRender