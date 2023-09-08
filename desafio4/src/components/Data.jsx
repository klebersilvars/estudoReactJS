import React, { useState } from 'react'
import '../components/Data.css';

const Data = () => {
    
    const [lista] = useState([
        {id: 1, nome:'Kleber', age: 20},
        {id: 2, nome:'Fabio', age: 24},
        {id: 3, nome:'Juliana', age: 25},
    ])

    const mapeado = lista.map( (valor)=> {
        return <h1 key={valor.id}>{valor.nome} - {valor.age}</h1>
    } )
    return (
        <div className='div-container'>
            <h1>Data</h1>
            <li>{mapeado}</li>
        </div>
    )
}

export default Data