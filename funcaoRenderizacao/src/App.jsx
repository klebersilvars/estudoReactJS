import React from 'react'

const renderSomething = (x) => {
  if(x) {
    return <h1>Verdadeiro</h1>
  }else {
    return <h1>Falso</h1>
  }
}
const App = () => {
  return (
    <div>{renderSomething(true)}

    {renderSomething(false)}
    
    </div>
  )
}

export default App