import ListGroup from "./Components/ListGroup/ListGroup"; 
import { useState } from "react";
import { IoMapSharp } from "react-icons/io5";

function App() {
  const[alertVisible, setAlertVisibility] = useState(false)
  let items = ['São Paulo', 'Rio de Janeiro', 'Toquio','Londres', 'Paris'];

  return (
  <div>
    <IoMapSharp color="green" size={25}/>
    <ListGroup items={items} heading="Cidades" onSelectItem={() => {}}/>
  </div>)

  /*return(
    <div>
    {alertVisible&& <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
    <Button Color="warning" onClick={() => setAlertVisibility(true)}>My Button </Button>
    </div>*/
  ;
}

export default App;