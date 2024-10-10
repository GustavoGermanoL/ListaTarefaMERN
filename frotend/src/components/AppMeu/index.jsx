import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css';
import SearchBar from '../SearchBar';
import Lista from '../List';

function App() {
   
  const [lista, setLista] = useState([]);
  
  function adicionaItemLista(item){
    if(item){
      setLista([...lista, item]);
    }
  }

  return (
    <>

    
      <Title />
      <SearchBar adicionaItem = {adicionaItemLista}/>
      <Lista lista = {lista} />

    
    </>
  )
}

export default App
