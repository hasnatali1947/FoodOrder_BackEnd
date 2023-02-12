
import { SliderData } from './sliderData'
import react, {useState} from 'react'

const ImageSlider = ({slide = SliderData}) => {
    
const [current , setcurrent] = useState(0)

    const Left = () => {
    const onleft = current === 0 ;
    const mines = onleft ? SliderData.length -1 : current -1
    setcurrent (mines) 
    }

    const Right = () => {
        const onRight =  current === SliderData.length -1;
        const plus = onRight ? 0 : current + 1;
        setcurrent (plus) 
    }

return (
    <div className='slider'> 
        <button onClick={Left} className='Left'>Left</button>
        <button onClick={Right} className='Right'>Right</button>
        {SliderData.map((slide , index)=>(
          <img className='images' src={slide.images} style={{display : index === current ? "flex" : "none"}} />  
        ))}
    </div>
)
}

export default ImageSlider
    