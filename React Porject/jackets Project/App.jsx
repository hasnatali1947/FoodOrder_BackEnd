
import axios from "axios"
import { useEffect, useState } from "react";
import "./app.css"
import { ReactDOM } from "react";
import Slider from './component/ImageSlider'
import main from '../src/main.jpeg';
import { SliderData } from "./component/sliderData";

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="jactketimages">
          < Slider />
        </div>
        <div className="div-image">
          <span className="span1">Fjallraven</span>
          <h1 className="h1 Fjallraven">Fjallraven</h1>
          <h1 className="h1 JACKET">JACKET</h1>
          <img className="image-main" src={main} alt="main" />
        </div>
      </div>
    </div>
  );
}
export default App;