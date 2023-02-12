
import axios from "axios"
import { useEffect, useState } from "react";
import "./app.css"
import { ReactDOM } from "react";

function App() {
  
  const [data , setData] = useState({})
  const [location , setlocation] = useState('')
  
  const APIkey = "bade5986f338cd84a201f41eecd691eb"
  const Url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bade5986f338cd84a201f41eecd691eb`
  const searchLocation = (event) => {
    if(event.key === "Enter"){
      axios.get(Url).then((response) => {
        setData(response.data)
        setlocation("")
        console.log(response.data);
      })
    }
  }
  return (
    <div className="App">

    <div className="img">
      <h1 className="WeatherApp" >Weater App</h1>
      <input className="Input" value={location} type="text" onChange={event => setlocation(event.target.value)} 
      onKeyPress={searchLocation} />
      <button className="Button" >SEARCH</button>
    </div>

    <br /><br />

    <div className="col-mid-12 text-center mt-5" >
      <div className="shadow ronded weaterResultBox" >
      <h2>{data.name}</h2> <br />

      {data.main ? <h1>{((data.main.temp) - 273.15).toFixed(2)} °C</h1> : null}

    </div>
    </div>
    </div>
  );
  }
export default App;


