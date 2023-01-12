import Image from 'next/image';
import jaImage from'../../public/images/jonathan-adler.jpeg' ;
import oscarStoneImage from'../../public/images/oscar-stone.jpeg';
import bmccImage from'../../public/images/bmcc.jpeg';

const TextWithImage = (props) => {
  const activeImage = () => {
    return(
      <div className='image' id="cf4a">
      {/* {imageArray.map((image, idx) =>{
        return (
          <Image key={'imageArray_' + idx} src={image.src} width={500} height={350} alt={image.name}/>
        )
      })} */}
      </div>
    )
  }

  return(
    <section className="text-with-image">
      <div className='padding content'>
        <div className={`blocks-container ${props.position == 'end' ? 'reverse-block' : ''}`}>
          <div className='text-container'>
            <div className='container-content'>
              <div>
                <h1>{props.title}</h1>
              </div>
              <div className='copy'>
                <p>{props.copy}</p>
              </div>
            </div>
          </div>
          {props?.image && <div className='image-container'>
            <div className='container-content'>
            <img src={props.image}/></div></div>}
        </div>
      </div>
    </section>
  )
}

export default TextWithImage;

          {/* <h1>Over the<br/>past 5 years</h1> */}
          {/* <p>
            I've built online solutions for large companies and small businesses ranging from marketing websites to complex solutions. My focus is always on fast, elegant and accessible user experiences.
            <br className='show-br'/> <br className='show-br'/>
            My last role was Director Of E-Commerce at Oscar Stone NYC.I led a team of graphic designers, copywriter, and social media assistant in developing monthly marketing strategies to boost sales through their Shopify storefront.
            <br className='show-br'/> <br className='show-br'/>
            Prior to that, I was a Front-End Engineer at Jonathan Adler building JavaScript applications and interfaces that improved functionality, automated processes, and supported marketing campaigns.
             <br className='show-br'/> <br className='show-br'/>
            I am currently looking for new opportunities as a Front-End Engineer. I loved my experience in a marketing-based role, but my passion lies in creating memorable user-experiences.
          </p> */}