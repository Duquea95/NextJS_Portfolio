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
            I've built online solutions for large companies and<br/>small businesses ranging from marketing websites<br/>to complex solutions. My focus is always on fast,<br/>elegant and accessible user experiences.
            <br/><br/>
            My last role was Director Of E-Commerce at Oscar<br/>Stone NYC.I led a team of graphic designers,<br/>copywriter, and social media assistant in developing<br/>monthly marketing strategies to boost sales through<br/>their Shopify storefront.
            <br/><br/>
            Prior to that, I was a Front-End Engineer at Jonathan<br/>Adler building JavaScript applications and interfaces<br/>that improved functionality, automated processes,<br/>and supported marketing campaigns.
            <br/><br/>
            I am currently looking for new opportunities as a<br/>Front-End Engineer. I loved my experience in a<br/>marketing-based role, but my passion lies in<br/>creating memorable user-experiences.
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