import React from 'react'
                            //coloco como objeto nas propriedades
const DesestruturarProps = ({marca, km, preco}) => {
  return (
    <div>
        <h1>Desestruturando props</h1>

        <h1>CARROS DISPONÍVEIS</h1>
        <ul>
            <li>Marca: {marca /*PUXO AQUI AS PROPRIEDADES QUE PASSEI ACIMA*/}</li> 
            <li>Km: {km}</li>
            <li>Preço: {preco}</li>
        </ul>
       
    </div>
  )
}

export default DesestruturarProps