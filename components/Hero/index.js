import React, {useState} from "react"
import { useRouter } from "next/router"
import main from '../../public/images/about/workspace.jpeg'
import os from '../../public/images/expertise/oscar-stone.png'
import ja from '../../public/images/expertise/jonathan-adler.jpeg'
import dada from '../../public/images/expertise/dada.png'

const heroData = {
  linkOne: '/work',
  linkOneCopy: 'We are makers',
  textCopyOne: ' who mean business. We partner directly with clients, solving',
  linkTwo: '/experise',
  linkTwoCopy: 'creative',
  linkTwo: '/expertise',
  linkCopyTwo: 'production',
  linkThree: '/expertise',
  linkCopyThree: ' challenges to help brands work better.',
}

const Hero = (prop) => {
  const [enableImage, setEnableImage] = useState(false)
  const [heroImage, setHeroImage] = useState(undefined)
  const [activeButton, setActiveButton ] = useState(null)

  const router = useRouter();
  
  const handleMouseOut = (event) => {
    return (
      setActiveButton(event.target.parentElement.getAttribute('data-index')),
      setActiveButton(null),
      setEnableImage(false)
    )
  }
  const handleMouseOver = (event) => {
    return (
      setActiveButton(event.target.parentElement.getAttribute('data-index')),
      setHeroImage(event.target.parentElement.getAttribute('data-src')),
      setEnableImage(true)
    )
  }

  const handleClick = (event) => {
    if(event.target.parentElement.getAttribute('data-href') === '/work'){
      router.push(event.target.parentElement.getAttribute('data-href'));
    }else{
      router.push(event.target.parentElement.getAttribute('data-href'))
      router.push({
        pathname: event.target.parentElement.getAttribute('data-href'),
        query: event.target.parentElement.getAttribute('data-index')
      })
    }
  }
  


  return(
    <section className="section-hero homepage-hero">
      <div className="homepage-hero__copy">
        <div className={`homepage-hero__copy-holder homepage-hero__copy-holder__on`}>
          <p>
            <span className={`hero-copy-btn copy-btn hero-copy-btn--on ${enableImage == true ? ' inactive' : ''} ${activeButton == 4 ? ' active' : ''}`} data-href="/work" data-index={4} data-src={main.src} onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              I'm a developer<span className="hero-copy-btn__underline">&nbsp;</span>
            </span>

            <span className={`copy-btn${enableImage ? ' inactive': ''}`}> who means business. I partner directly with clients to solve </span> 

            <span className={`hero-copy-btn copy-btn hero-copy-btn--on ${enableImage == true ? ' inactive' : ''} ${activeButton == 0 ? ' active' : ''}`} data-href="/expertise" data-index={0} data-src={os.src} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick}>creative<span className="hero-copy-btn__underline">&nbsp;</span></span>

            <span className={`copy-btn${enableImage ? ' inactive': ''}`}>, </span> 

            <span className={`hero-copy-btn copy-btn hero-copy-btn--on ${enableImage == true ? ' inactive' : ''} ${activeButton == 1 ? ' active' : ''}`} data-href="/expertise" data-index={1} data-src={ja.src} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick}>production<span className="hero-copy-btn__underline">&nbsp;</span></span>
            
            <span className={`copy-btn${enableImage ? ' inactive': ''}`}>, and </span><span className={`hero-copy-btn copy-btn hero-copy-btn--on ${enableImage == true ? ' inactive' : ''} ${activeButton == 2 ? ' active' : ''}`} data-href="/expertise" data-index={2} data-src={dada.src} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick}>technological<span className="hero-copy-btn__underline">&nbsp;</span></span><span className={`copy-btn${enableImage ? ' inactive': ''}`}> challenges to help brands work better.</span>
          </p>
        </div>
      </div>
      <div className="homepage-hero__images">
        <div className={`homepage-hero__image${enableImage ? ' homepage-hero__image--on': ''}`} style={{backgroundImage: `url(${heroImage})`}}>
      </div>
        <div className={`homepage-hero__cover${enableImage ? '' : ' homepage-hero__cover--on'}`}>
      </div>
      </div>
    </section>
  )
}

export default Hero