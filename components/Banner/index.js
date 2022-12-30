import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import anthony from'../../public/images/anthony.png' 

const titleSlider = () => {
  const[activeIndex, setActiveIndex] = useState(0); 
  const [count, setCount] = useState(0)
  let texts = ['People', 'Impact', 'Change', 'Action', 'Good', 'People'];

  useEffect(() => {
    const interval = setInterval(() => {
      if(activeIndex == texts.length-1){
        setCount(count+1);
        return setActiveIndex(0);
        
      }else{
        return setActiveIndex(activeIndex+1);
      }
    }, 2500);
    
    return () => clearInterval(interval);
  }, [activeIndex])

  return(
    <div>
      <p>Anthony Duque<span className='dsktp-only'> - Frontend Engineer</span></p>
      <h1 className='main-lg'>Creating<br/>For<br/></h1>
      <div className='title-slider'>
        {texts.map((text,idx) => {return (
          <h1 key={idx} className={`main-lg ${(idx == 0 && count == 0) ? 'slideIn-start' : ''} ${idx == 0 ? 'start' : 'hide-slide'} ${idx==activeIndex ? 'active': 'inactive'} ${idx <= activeIndex ? 'hide-slideUp' : ''} ${idx == text.length-1 ? 'last' : ''}`}>{text}</h1>
        )})}
      </div>
    </div>
  )
}

const Banner = (props) => {

  return(
    <div className='flex flex-center banner grad' style={{willChange: 'opacity', opacity: 1}}>
      <div className='padding content'>
        <div>
          <h1>{props.title}</h1>
          <p style={{fontSize: '1rem'}}>{props.subtitle}</p>
          <div className='banner-image'><Image alt='Anthony Duque - Front-End Engineer' priority src={anthony.src} width={240} height={300}/></div>
        </div>
      </div>
    </div>
  )
}

export default Banner;