import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css';
import Title from '../List';

function Title() {
  const [count, setCount] = useState(2)
  const [text, setText] = useState("Seu Nome")

  return (
    <>
      <h1> Lista de Tarefas  </h1>
    </>
  )
}

export default Title
