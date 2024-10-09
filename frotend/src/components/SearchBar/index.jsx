// import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';


function SearchBar() {

  const [lista, setLista] = useState([])
  const [newItem, setnewItem] = useState("")

  // const [count, setCount] = useState(0)
  function adicionaItem(item){
    if(!newItem){
      return;
    }
    return item;

  }

  return (
    <>

        <TextField id="outlined-basic" type = "text" label="Outlined" variant="outlined" />
        <Button onClick = {adicionaItem} variant="contained" endIcon={<SendIcon />}>
            Add
        </Button>

        

        
    </>
  )
}

export default SearchBar
