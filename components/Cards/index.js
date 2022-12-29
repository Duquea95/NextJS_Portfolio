import Button from '../Button';
import Image from 'next/image'
import Link from 'next/link'
import os from '../../public/images/os.jpeg'
// import os from '../../public/images/oscar_stone_thumbnail.png'
import ja from '../../public/images/jonathan_adler_thumbnail.jpeg'

const Cards = (props) => {

  let cardElements = [
    {
      name: <h1>Oscar Stone</h1>,
      subText:  'A New York jewelry brand specializing in gold and diamond jewelry.',
      url: 'https://oscarstonenyc.com',
      src: os.src,
    },
    {
      name: <h1>Jonathan Adler</h1>,
      subText: 'A high-end, home furnishing and interiors business located in Soho.',
      url: 'https://jonathanadler.com',
      src: ja.src,
    }
  ]

  return(
    <section className='cards'>
      <div className="content">
        <div className='content-title'><h2>My Recent Work</h2></div>
        <div className='content-copy'><p>Here are some of my most recent work. Want so see more? <a href='mailto:duquea95@gmail.com'>Email me</a></p></div>
        <div className='flex card-grid'>
          {cardElements.map((card, idx) =>{
            return(
            <figure className='card' key={'card__'+idx}>
              <Image alt='Anthony Duque - Front-End Engineer' priority src={card.src} width={400} height={200}/>
              <figcaption>
                <div>
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