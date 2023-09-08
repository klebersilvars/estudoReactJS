import React, { useState } from 'react'


const Data = () => {
  const [listas] = useState(['Kleber', 'Matheus', 'João']) // esta renderizando toda a minha lista de array que foi criada

  const [users] = useState([
    {
      id: 1, nome: 'Kleber', age: 19,
      id: 2, nome: 'Matheus', age: 30,
      id: 3, nome: 'Kleberda', age: 14,
      id: 4, nome: 'Kleberawd2', age: 12,
    }
  ])
  return (
    <div>
      <h1> Renderizando listas</h1>

      {
        listas.map((valor, i) => {
          return <h1 key={i}>{valor}</h1>
        })
      }

      {
        users.map((user) => {
          return <li key={user.id}>  {user.nome} - {user.age}</li>
        })
      }
    </div>
  )
}

export default Data