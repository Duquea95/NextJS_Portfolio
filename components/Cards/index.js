import Button from '../Button';
import Image from 'next/image'
import Link from 'next/link'
import os from '../../public/images/os.jpeg'
// import os from '../../public/images/oscar_stone_thumbnail.png'
import ja from '../../public/images/jonathan_adler_thumbnail.jpeg'

const Cards = (props) => {

  let cardElements = [
    {
      name: <h2>Oscar Stone</h2>,
      subText:  'Jewelry brand specializing in gold and diamond jewelry.',
      url: 'https://oscarstonenyc.com',
      src: os.src,
    },
    {
      name: <h2>Jonathan Adler</h2>,
      subText: 'A high-end, home furnishing and interiors business located in Soho.',
      url: 'https://jonathanadler.com',
      src: ja.src,
    }
  ]

  return(
    <section className='cards'>
      <div className="content">
        <div className='content-title'><h2>{props.title}</h2></div>
        <div className='content-copy'><p>{props.copy} <a href={`mailto:`+props.email}>Email me</a></p></div>
        <div className='flex card-grid'>
          {cardElements.map((card, idx) =>{
            return(
            <figure className='card' key={'card__'+idx}>
              <Image alt='Anthony Duque - Front-End Engineer' priority src={card.src} width={345} height={290}/>
              <figcaption>
                <div>
                  {card.name}
                  <p>{card.subText}</p>
                  <div className='link-container'><a className='card-link' href={card.url}>Visit Website</a></div>
                </div>
              </figcaption>
              <div className='overlay'></div>
            </figure>)
          })}
        </div>
      </div>
    </section>
  )
}

export default Cards;