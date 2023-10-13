import React, { useDebugValue, useEffect, useState } from 'react'

const url = 'https://sujeitoprogramador.com/rn-api/?api=posts' // aqui estou pegando o url da minha api

const App = () => {
  const [aplicacao, setAplicacao] = useState([]); //virou um array pq ele vai armazenar varios itens

  useEffect( ()=>{
    async function fecthData() {
      const res = await fetch(url); //pego tudo que tem nessa url - response
      const data = await res.json(); // transformo json para objeto
      setAplicacao(data);
    }
    fecthData() //iniciando o meu projeto
  }, [])

  console.log(aplicacao)


  return (
    <div className="App">
      <h1>listas de produtos</h1>
      {aplicacao.map( (index)=> {
        return <article key={index.id}>
          <img src={index.capa}/>
          <h2>{index.titulo}</h2>
          <p>{index.subtitulo}</p>
          <p>{index.categoria}</p>
        </article>
      })}
    </div>
  )
}

export default App