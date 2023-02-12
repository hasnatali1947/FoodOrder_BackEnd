
import { useEffect, useState } from "react";
import "./app.css"
import { ReactDOM } from "react";
import Task from "./taxt";
function App() {

    const [name , setname] = useState ("")
    const [emailname , setemailname] = useState ("")
    const [tasks , settasks] = useState ([])

    function Click(){
      if(name , emailname){
        let temp = tasks
        tasks.push({Name : name , Emailname : emailname})
        setname ("")
        setemailname ("")
        settasks([...temp])
      }
    }

    function complete(index){
      let temp = tasks

      temp[index].completed =! temp[index].completed
      settasks([...temp])
    }

    function Delete(index){
      let temp = []
      for(let i=0;i<tasks.length;i++){
        if(i !== index){
          temp.push(tasks[i])
        }
      }
      settasks([...temp])
    }

    return (
    <div className="App">

      <div className="container" >
        <input value={name} type="text" placeholder="SUBJECT NAME" onChange={(e)=>{setname(e.target.value)}} />
        <br /> <br />
        <input value={emailname} type="text" placeholder="FEES" onChange={(e)=>{setemailname(e.target.value)}} />
        <br /> <br />
        <button onClick={Click}>CLICK</button>
      </div>

      {tasks.map((value , index)=>(
        <div className="div">
          <p className={value.completed? "namevalue" : ""} > Name : {value.Name}</p>
          <p className={value.completed? "emailnamevalue" : ""} > Email : {value.Emailname}</p>
          <button className={value.completed? "completeButton" : ""} onClick={()=>complete(index)} >{value.completed? "Uncomplete" : "Completed"}</button>
          <button onClick={()=>Delete(index)}>DELETE</button>
        </div>
      ))}

    </div>
  );
  }

export default App;
  
