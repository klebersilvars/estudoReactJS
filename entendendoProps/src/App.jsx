import React from 'react'
import Data from './components/Data';
import DesestruturarProps from './components/DesestruturarProps';

const App = () => {
  const name = 'Kleber'
  return (
    <div>
      <h1>entendendo props</h1>
      <Data name={name}/>
      <DesestruturarProps marca="Fiat" km="0" preco="R$ 90.000"/>
    </div>
  )
}

export default App