import ListGroup from "./Components/ListGroup/ListGroup"; 
import { useState } from "react";
import { IoMapSharp } from "react-icons/io5";
import Button from "./Components/Button/Button";
import Like from "./Components/Like";

function App() {
  const[alertVisible, setAlertVisibility] = useState(false)
  let items = ['São Paulo', 'Rio de Janeiro', 'Toquio','Londres', 'Paris'];

  return (
  <div>
    <IoMapSharp/>
    <ListGroup heading="Cidades" items={items}/>
    <Button onClick={() => {}}>
      Submit
    </Button>
    <Like></Like>
  </div> )

  /*return(
    <div>
    {alertVisible&& <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
    <Button Color="warning" onClick={() => setAlertVisibility(true)}>My Button </Button>
    </div>*/
  ;
}

export default App;