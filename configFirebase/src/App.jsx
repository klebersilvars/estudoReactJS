import React, { useState } from 'react';
import './App.css';
import db  from './firebaseConnection';
import { doc, setDoc, collection, addDoc} from 'firebase/firestore';

const App = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  // aqui estou inserindo um documento novo no meu banco de dados do firebase
  async function handleAdd () {
    await addDoc(collection(db, 'user',), {
      name: name, 
      password: pass
    })

    .then ( ()=> {
      console.log('deu certo')
    })

    .catch((error)=> {
      console.log('deu errado' + error)
    })
  }
    
  return (
    <div>
      <label>
        Nome
        <input type="text" placeholder='Digite seu nome' value={name} onChange={(e) => { setName(e.target.value) }} />
      </label>

      <label>
        Senha
        <input type="password" placeholder='Digite sua senha' value={pass} onChange={(e) => { setPass(e.target.value) }} />
      </label>

      <button onClick={handleAdd}>Cadastrar no banco de dados</button>
    </div>
  );
}

export default App;
