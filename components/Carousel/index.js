import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import tabData from './data';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = ['Web Development', 'Ux & UI Design', 'SEO & Marketing'];

  const carouselInfiniteScroll = () => {
    if(currentIndex === data.length-1){
      return setCurrentIndex(0)
    }
    
    return setCurrentIndex(currentIndex+1)
  }

  useEffect(() =>{
    const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)
    return () => clearInterval(interval)
  })

  const scrollLeft = () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  };

  const scrollRight = () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  };

  const getPillClasses = (skill) => {
    switch(skill){
      case 'HTML':
      case 'Shopify':
        return 'pillFull';

      case 'CSS':
        return 'pill90';
          
      case 'Javascript': 
      case 'React':
      case 'Photography':
      case 'Figma': 
        return 'pill82';
            
      case 'Adobe Photoshop': 
      case 'SEO': 
      case 'Node JS':
      case 'Social Media Marketing':
        return 'pill75';
          
      case 'Google Ads & Analytics':
      case 'MongoDB': 
      case 'Sketch': 
        return 'pill65';
          
      case 'Ruby on Rails':
      case 'PHP':
        return 'pillHalf';
    }
  }

  return(
    <>
      <section className="slider-wrapper">
        {/* <button className="slide-arrow slide-arrow-back" onClick={scrollLeft}>
          &#8249;
        </button>
        
        <button className="slide-arrow slide-arrow-next" onClick={scrollRight}>
          &#8250;
        </button> */}
        
        <div className="slides-container">
          {tabData.map((tab, index) => {
            return(
              <div className="slide">
                <div className='slide-head'>
                    <Image src={tab.image} width={45} height={45} alt={tab.name} />
                    <h2 className="">{tab.name}</h2>
                </div>
                <div className='slide-copy'>
                  <p>{tab.description}</p>
                </div>
                <div className='slide-list'>
                  <div className='list-header'><span>SKILLS</span></div>
                  { tab.skills.map((skill, index) => {
                    return(
                      <div key={index} className='slide-list-item'>
                        <p>{skill}</p>
                        {/* <div className='pill'><div className={`pill-fill` + (pillCSS ? (' ' + pillCSS) : '')}></div></div> */}
                      </div>
                  )})}
                </div>
              </div>
            )  
          })}
        </div>
      </section>
    </>
  )
}

export default Carousel