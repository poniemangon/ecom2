import { useState } from "react"
import Counter from "./Counter"


const CounterContainer = ({onAdd, counter, setCounter}) => {
    
  return (
    
    <Counter counter={counter} setCounter={setCounter} onAdd={onAdd}/>
    
  )
}

export default CounterContainer;
