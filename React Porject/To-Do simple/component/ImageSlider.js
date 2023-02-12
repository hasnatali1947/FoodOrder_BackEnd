
import React, { useEffect, useState } from 'react'

const ImageSlider = () => {

  const [showcontainer , setshowcontainer ] = useState(true)
  const [showcontaine2 , setshowcontainer2] = useState(false)
  const [emailvalue , setemailvalue] = useState("")
  const [passwordvalue , setpasswordvalue] = useState("")

  const confirm = () =>{
    setshowcontainer (false)
    setshowcontainer2 (true)
  }
  
  const CLOSE = () => {
    setshowcontainer (true)
    setshowcontainer2 (false)
    setemailvalue("")
    setpasswordvalue("")
  }
  
  const SEND = () => {
    setshowcontainer (true)
    setshowcontainer2 (false)
    setemailvalue("")
    setpasswordvalue("")
  }

return (
    <div className='sliderContainer'>
        {showcontainer ? (
        <div className='container'>
          <input className='name' onChange={(e)=>setemailvalue(e.target.value)} placeholder='Type Name' type="text" /> <br></br> <br></br>
          <input className='password' onChange={(e)=>setpasswordvalue(e.target.value)} placeholder='Type password' type="text" /> <br></br> <br></br>
          <button onClick={()=>confirm()} className='CONFIRM'>CONFIRM</button>
        </div>
        ) : 
        ("")}
        {showcontaine2 ? (
          <div className='second-container'>
          <button onClick={CLOSE} className='CLOSE'>CLOSE</button>
          <h1>Your Information</h1> <br></br>
          <h2 className='email'>Email : {emailvalue}</h2> <br></br>
          <h2>Password : {passwordvalue}</h2>
          <button onClick={SEND} className='SEND'>SEND</button>
        </div>
          ) : ("")} 
    </div>
  )
}

export default ImageSlider
