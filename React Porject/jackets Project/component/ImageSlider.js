
import React, { useEffect, useState } from 'react'

const ImageSlider = () => {

  const [range1 ,setrange1] = useState(44)
  const [range2 ,setrange2] = useState(66)
  const [current , setcurrent] = useState(1)
  const [jacketshow , setjacketshow] = useState(false)
  const [colour , setcolour] = useState("white")
  const [size , setsize] = useState("medium")

  const jacketDetail = [{
    name : "Gray jacket",
    Colour : "Black", 
    Size : "Small", 
    Length : "44 CM", 
    Chest : "26 CM", 
    images : "https://www.rei.com/media/f6bdbcf8-9187-440e-b038-2716b9df8438?size=576x768",
  },
  {
    name : "Black Lather", 
    Colour : "Gray" ,
    Size : "Medium" ,
    Length : "56 CM" ,
    Chest : "32 CM",
    images : "https://freepngimg.com/thumb/categories/1524.png",
  },
  {
    name : "Light jacket" ,
    Colour : "Light Gray" ,
    Size : "Extra Large" ,
    Length : "72 CM" ,
    Chest : "53 CM", 
    images : "https://i.pinimg.com/originals/1d/55/bb/1d55bbe650e79ce7b20472152ae78c65.png",
  },
];

const [toAdd , settoAdd] = useState(jacketDetail[current])

useEffect(()=>{

},[toAdd])

const Click = () => {
  let object = jacketDetail[current]
  object.Colour = colour
  object.Length = range1
  object.Chest = range2
  object.Size = size
  settoAdd(object)
}

const ResultButton = () =>{
  setjacketshow(!jacketshow)
}

const buttonLeft = () => {
  const onleft = current === 0 ;
  const newIndex = onleft ? jacketDetail.length -1 : current -1;
  setcurrent(newIndex)
}

const buttonRight = () => {
  const onright = current === jacketDetail.length -1 ;
  const newIndex = onright ? 0 : current + 1 ;
  setcurrent (newIndex)
}

const jumpTo = (index1) => {
  setcurrent(index1);
}

return (
    <div className='sliderContainer'>
        <button onClick={buttonLeft} className='buttonLeft'>Left</button>
        <button onClick={buttonRight} className='buttonRight'>Right</button>
      {jacketDetail.map((e , index)=>(
        <img className='jactketimages' src={e.images} style={{display : index === current? "flex" : "none" }} />
      ))}

          <button onClick={ResultButton} className="ResultButton">
            <div className="dot dot1"></div>
            <div className="dot dot2"></div>
            <div className="dot dot3"></div>
          </button>

        {jacketshow ? (
          <div className="jacketDetail" onChange={settoAdd} >
            <div>Name : {toAdd.name}</div>
            <div>Colour : {toAdd.Colour}</div>
            <div>Size : {toAdd.Size}</div>
            <div>Length : {toAdd.Length}</div>
            <div>Chest : {toAdd.Chest}</div>
          </div>
            ) : (
              "" 
            )}
              
        <div className='div'>
          {jacketDetail.map((slide , index1)=>(
            <div className='imgDots' onClick={()=>jumpTo(index1)}>.</div>
          ))}
        </div>

        <div className="div-right">
          <div className="colour-div">
            <span className="colour">COLOUR</span>
              <div className="colour-mark">
                <div className={`colour-show ${colour}`}></div>
                <div onClick={()=>setcolour("white")} className="white"></div>
                <div onClick={()=>setcolour("gray")} className="gray"></div>
                <div onClick={()=>setcolour("dark-gray")} className="dark-gray"></div>
                <div onClick={()=>setcolour("black")} className="black"></div>
              </div>
          </div>

          <div className="size-div">
            <span className="size">SIZE</span>
            <div className="sizes">
              <div className={`circle ${size}`}  ></div>
              <span onClick={()=>{setsize("small")}} className="S">S</span>
              <span onClick={()=>{setsize("medium")}} className="M">M</span>
              <span onClick={()=>{setsize("large")}} className="L">L</span>
              <span onClick={()=>{setsize("extra-large")}} className="XL">XL</span>
            </div>
          </div>

          <div>
            <div className="sleeve">
              <span>SLIEEVE LENGTH</span>
              <span className="sleeve44">{range1} CM</span> <br /><br />
              <input className="sleeveRange" min="0" max="100" step="1" onChange={(e)=>setrange1(e.target.value)} type="range" />
            </div>
          </div>

          <div className="chest">
            <span>CHEST</span>
            <span className="chest66">{range2} CM</span> <br /><br />
            <input className="chestRange" min={0} max={100} step={1} onChange={(e)=>setrange2(e.target.value)} type="range" />
          </div> <br /><br />
            
          <button onClick={Click} className="CLICK">CLICK</button>
        </div>
    </div>
  )
}

export default ImageSlider
