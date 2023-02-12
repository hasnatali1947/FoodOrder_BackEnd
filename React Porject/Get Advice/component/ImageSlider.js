
import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'

const ImageSlider = () => {

const [data , setdata] = useState("")  
const Url = `https://api.adviceslip.com/advice`

const GetAdvice = () =>{
  axios.get(Url).then((response)=>{
    setdata(response.data.slip)
    console.log(response);
  })
}

useEffect(()=>{
  GetAdvice()
  console.log(GetAdvice);
},[]);

return (
    <div className='sliderContainer'>
      <div className='container'>
        <div className='advice'>
        {data ? <span>{data.advice}</span> : null} <br></br>
        </div>
        <button onClick={()=>GetAdvice()}>GET MORE ADVICE</button>
      </div>      
    </div>
        )
      }
      
export default ImageSlider
