import React from 'react'
import { useState } from 'react'

const Inline = () => {

  const [namee, setNamee] = useState('');
  const [emaill, setEmaill] = useState('');

  const [valorNamee, setValorNamee] = useState('')
  const [valorEmaill, setValorEmaill] = useState('')

  function enviarValor() {
    setValorEmaill(emaill)
    setValorNamee(namee);
  }

  function handleSubmit(event) {
      event.preventDefault(); // paro de dar o reload no meu formulário
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={  (e)=> {setNamee(e.target.value) }} className='namee' />
        <input type="email" onChange={ (e)=> {setEmaill(e.target.value)}} className='emaill' />
        <button onClick={enviarValor}>Enviar inline</button>
        <h1>{valorNamee}</h1>
        <h1>{valorEmaill}</h1>
      </form>
    </div>
  )
}

export default Inline