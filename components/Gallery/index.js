import React, {useState, useEffect, useRef} from 'react'
// import useKeypress from '../hooks/useKeypress';
import Image from 'next/image';

const Gallery = ({galleryData}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(null);
  const [imageTitle, setImageTitle] = useState(null);
  const [key, setKey] = useState();

  const inputDiv = useRef();
  let thumbnails = [];

  galleryData.map((gallery, index) => {
    thumbnails.push(
      <div key={'gallery_image_'+index} className={`thumbnail ${index === currentIndex ? 'active-thumbnail' : ''}`} onClick={event => handleThumbnailClick(event, index)}>
        <img src={gallery.image} alt={gallery.name} />
        {index === currentIndex && <div className='thumbnail-overlay'><span>Now Viewing</span></div>}
      </div>
    )
  })

  const mouseEnter = (e) => {
    inputDiv.current.focus({preventScroll: true});
  }
  const mouseLeave = (e) => {
    inputDiv.current.blur();
  }
  const updateIndex = (index) => {
    return setCurrentIndex(index);
  }
  const updateActiveImage = (image) => {
    return setActiveImage(image);
  }
  const updateImageTitle = (title) => {
    return setImageTitle(title);
  }

  const keyDown = (event) => {
    if(event.code == 'ArrowRight'){
      if(currentIndex == galleryData.length - 1) return
      updateIndex(currentIndex + 1)
      updateActiveImage(thumbnails[currentIndex+1].props.children[0].props.src);
      updateImageTitle(thumbnails[currentIndex+1].props.children[0].props.alt);
    }
    if(event.code == 'ArrowLeft'){
      if(currentIndex == 0) return
      updateIndex(currentIndex - 1)
      updateActiveImage(thumbnails[currentIndex-1].props.children[0].props.src);
      updateImageTitle(thumbnails[currentIndex-1].props.children[0].props.alt)
    }
  }

  const handleThumbnailClick = (event, index) => {
    updateIndex(index);
    updateImageTitle(event.target.alt)
    updateActiveImage(event.target.src)
  }

  return(
    <>
      <section className='gallery-wrapper' ref={inputDiv} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onKeyDown={keyDown} tabIndex={0}>
        <div className='gallery-container'>
          <div className='inner-container'>
            <div className='gallery-title'>
                <h1 style={{textAlign: 'center'}}>Photography</h1>
            </div>
            <div className='active-image'>
              <img src={activeImage ? activeImage : thumbnails[0].props.children[0].props.src}/>
              <div className='gallery-overlay'><span>{imageTitle ? imageTitle : thumbnails[0].props.children[0].props.alt}</span></div>
            </div>
            <div className='thumbnail-container'>  
              <div className='gallery-thumbnails'>
                {thumbnails}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery