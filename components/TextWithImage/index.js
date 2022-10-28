import Image from 'next/future/image';
import jaImage from'../../public/images/jonathan-adler.jpeg' ;
import billysImage from'../../public/images/billys-bakery.jpg';
import oscarStoneImage from'../../public/images/oscar-stone.jpeg';
import bmccImage from'../../public/images/bmcc.jpeg';

const imageArray = [oscarStoneImage, jaImage,bmccImage,billysImage];

const TextWithImage = (props) => {
  const imageCollection = () => {
    return(
      <>
      {imageArray.map((image, idx) =>{
        return <Image key={'imageArray_' + idx} src={image.src} width={500} height={350}/>
      })}
      </>
    )
  }

  return(
    <div className="section flex flex-center text-with-image">
      <div className='padding content'>
      <div className='flex'>
        <div className='copy'>
          <h1>Over the<br/>past 5 years</h1>
          <p>
            I've built online solutions for large companies and small businesses ranging from marketing websites to complex solutions. My focus is always on fast, elegant and accessible user experiences.
            <br className='show-br'/> <br className='show-br'/>
            My last role was Director Of E-Commerce at Oscar Stone NYC.I led a team of graphic designers, copywriter, and social media assistant in developing monthly marketing strategies to boost sales through their Shopify storefront.
            <br className='show-br'/> <br className='show-br'/>
            Prior to that, I was a Front-End Engineer at Jonathan Adler building JavaScript applications and interfaces that improved functionality, automated processes, and supported marketing campaigns.
             {/* <br className='show-br'/> <br className='show-br'/>
            I am currently looking for new opportunities as a Front-End Engineer. I loved my experience in a marketing-based role, but my passion lies in creating memorable user-experiences. */}
          </p>
        </div>
        <div className='image' id="cf4a">
          {imageCollection()}
        </div>
      </div>
      </div>
    </div>
  )
}

export default TextWithImage;