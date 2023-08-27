import React from 'react'


function handleClique() {
  alert('você clicou no botão')
}

const App = () => {
  return (
    <div>
      <button onClick={handleClique}>Clique aqui</button>
      <button onClick={() => {
        alert('Você clicou no segundo botão')
      }}>Clique aqui também</button>
    </div>
  )
}

export default App