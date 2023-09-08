import React from 'react'
import './Login.css';

const Login = () => {
    const n = 23;
    return (
        <div className='div-container'>
                { /* isso foi inserido um css inline*/}
            <h1 style={{ color: 'black', border: "5px solid black" }}>Login</h1>

            {/*AGORA VAMOS INSERIR UM CSS INLINE DINÂMICO */}
            <h1 style={ n < 25 ? {color: 'pink'} : {color: 'black'}  }>Se N for menor do que 25, será mudada a letra para a cor ROSA</h1>
        </div>
    )
}

export default Login