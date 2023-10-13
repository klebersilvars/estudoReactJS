import React, { useState } from 'react'


const Select = () => {
    const [select, setSelect] = useState('')
  return (
    <div>
        <form >
            <input type="email" />
            <input type="text" name="" id="" />
            <select onChange={ ()=> {setSelect(e.target.value)}}>
                <option value="Brincar">Brincar</option>
                <option value="Brincar">Correr</option>
                <option value="Brincar">Pular Corda</option>
                <option value="Brincar">Futebol</option>
                <option value="Brincar">Queimado</option>
            </select>
        </form>
    </div>
  )
}

export default Select