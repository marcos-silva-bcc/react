import ListGroup from "./Components/ListGroup/ListGroup"; 
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { useState } from "react";
import "./App.css"

function App() {
  const[alertVisible, setAlertVisibility] = useState(false)
  let items = ['São Paulo', 'Rio de Janeiro', 'Toquio','Londres', 'Paris'];

  return (
  <div><ListGroup items={items} heading="Cities"/>
  </div>)

  /*return(
    <div>
    {alertVisible&& <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
    <Button Color="warning" onClick={() => setAlertVisibility(true)}>My Button </Button>
    </div>*/
  ;
}

export default App;