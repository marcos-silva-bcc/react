import ListGroup from "./Components/ListGroup/ListGroup"; 
import { useState } from "react";
import { IoMapSharp } from "react-icons/io5";
import Button from "./Components/Button/Button";
import Like from "./Components/Like";
import { FaFlagUsa } from "react-icons/fa";
import produce from "immer";

function App() {
  const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false},
    {id: 2, title: 'Bug 2', fixed: false},
  ]);
  const handleClick = () => {
    //setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true } : bug))
    setBugs(produce(d)
  }
}

export default App;