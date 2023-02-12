
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
      <div>

        <div className="jactketimages">
          < Slider />
        </div>

      </div>
    </div>
  );
}
export default App;