import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function Lista() {

  // function adicionaItemLista(item){

  //   setnewItem(item);
  //   const newLista = [...lista, {text: item }]
  //   setLista(newLista);
  //   setnewItem("");

  // }
  return (
    <>
      <List>
        {lista.map((item, index) => (
        <ListItem key={index}>
          <ListItemText primary={item} />
        </ListItem>
        ))}
      </List>
    </>
  )
}

export default Lista
