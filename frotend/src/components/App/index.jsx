import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css';
import SearchBar from '../SearchBar';
import Lista from '../List';

function App() {
   
  

  return (
    <>

    
      <Title />
      <SearchBar />
      <Lista {[lista]}/>

    
    </>
  )
}

export default App
