import React, {useState, useEffect} from 'react'
import Image from 'next/image';

const Gallery = ({galleryData}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(null);
  // const [activeInfo, setActiveInfo] = useState(null);

  const carouselInfiniteScroll = () => {
    // if(currentIndex === data.length-1){
    //   return setCurrentIndex(0)
    // }
    
    return setCurrentIndex(currentIndex+1)
  }
  useEffect(() =>{
    // const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)
    // return () => clearInterval(interval)
    
  })
  const scrollLeft = () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  };
  const scrollRight = () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  };

  const handleThumbnailClick = (event, index) => {
    setCurrentIndex(index);
    // setCurrentTitle
    return setActiveImage(event.target.src)
  }
  
  const createGallery = () => {
    let activeGallery, thumbnails = [];
    galleryData.map((gallery, index) => {
      if(index === currentIndex){
        activeGallery = gallery
      }
      thumbnails.push(
        <div key={'gallery_image_'+index} className={`thumbnail ${index === currentIndex ? 'active-thumbnail' : ''}`} onClick={event => handleThumbnailClick(event, index)}>
          <img src={gallery.image} alt={gallery.name} />
          {index === currentIndex && <div className='thumbnail-overlay'><span>Now Viewing</span></div>}
        </div>
      )
    })

    return(
      <div className='inner-container'>
        <div className='active-image'>
          <img className='' src={activeImage ? activeImage : activeGallery.image}/>
          <div className='gallery-overlay'><span>{activeGallery.name}</span></div>
        </div>
        <div className='thumbnail-container'>  
          <div className='gallery-thumbnails'>
            {thumbnails}
          </div>
        </div>
      </div>
    )
  }

  return(
    <>
      <section className='gallery-wrapper'>
        <div className='gallery-container'>
          <div className='gallery-title'><h1 style={{textAlign: 'center'}}>My Photography</h1></div>
          {galleryData && createGallery()}
        </div>
      </section>
    </>
  )
}

export default Gallery