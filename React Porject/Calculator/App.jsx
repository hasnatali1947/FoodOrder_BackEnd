
import { useEffect, useState } from "react";
import "./app.css"
import { ReactDOM } from "react";
import Task from "./taxt";
function App() {

  const [number , setnumber] = useState("")

  const handleClick = (e) => {
    setnumber(number.concat(e.target.name))
  }

  const ClickC = () => {
    setnumber (number.slice(0 , number.length -1))
  }

  const Clear = () => {
    setnumber("")
  }

  const Equal = () =>{
      setnumber(eval(number))
  }

  return (
    <div className="App">

    <form action="">
      <input type="text" value={number} />
    </form>

    <div className="Keypad" >
      <button onClick={Clear} >CLEAR</button>
      <button onClick={ClickC} >C</button>
      <button name="7" onClick={handleClick} >7</button>
      <button name="/" onClick={handleClick} >/</button>
      <button name="8" onClick={handleClick} >8</button>
      <button name="9" onClick={handleClick} >9</button>
      <button name="4" onClick={handleClick} >4</button>
      <button name="*" onClick={handleClick} >*</button>
      <button name="5" onClick={handleClick} >5</button>
      <button name="6" onClick={handleClick} >6</button>
      <button name="1" onClick={handleClick} >1</button>
      <button name="-" onClick={handleClick} >-</button>
      <button name="2" onClick={handleClick} >2</button>
      <button name="3" onClick={handleClick} >3</button>
      <button name="0" onClick={handleClick} >0</button>
      <button name="+" onClick={handleClick} >+</button>
      <button name="." onClick={handleClick} >.</button>
      <button id="equal" onClick={Equal} >=</button>
    </div>

    </div>
  );
  }

export default App;


