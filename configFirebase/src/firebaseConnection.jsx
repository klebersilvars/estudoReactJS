import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2UoxSDvdmWhBtUt5fpLmZXW8JcjN_yUc",
  authDomain: "servico-de-viaturas.firebaseapp.com",
  projectId: "servico-de-viaturas",
  storageBucket: "servico-de-viaturas.appspot.com",
  messagingSenderId: "1072971218062",
  appId: "1:1072971218062:web:23355d6dd8eed3fdc41ddf",
  measurementId: "G-7JXNXW6KVM"
};

  const app = initializeApp(firebaseConfig); // aqui estou iniciando a configuração do firebase
  const db = getFirestore(app); // aqui estou passando o firestore e passando a inicialização do banco de dados
  export default db;
