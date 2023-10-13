import React, { useState } from 'react'
import './Carros.css';

const Carros = () => {

    const [modelos] = useState(['Fiat', 'Mustang', 'Gol', 'Voyage', 'Fusca', 'Gonçalves'])

    let cars = modelos.map((car) => {
        return car
    })

    return (
        <div className='div-container-carros'>
            <h1>Carros abaixo:</h1>
            <div className='carros'>
                <ul>
                    <li>{cars}</li>
                </ul>
            </div>
        </div>
    )
}

export default Carros