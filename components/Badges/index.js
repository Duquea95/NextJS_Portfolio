import Image from 'next/image';
import images  from './data.js';

const Badges = () => {

  let row = [], row2 = [], row3 = [];

  const createRows = () => {
    images.map( (image, count) => {
      if (count <= 3){
        row.push(
          <div key={'badgeComponent__'+count} className='badge'>
            <Image src={image.src} width={175} height={175} alt={image.name}/>
          </div>
        )
      }
      else if(count > 3 && count < 8){
        row2.push(
          <div key={'badgeComponent__'+count} className='badge'>
            <Image src={image.src} width={175} height={175} alt={image.name}/>
          </div>
        )
      }
      else{
        row3.push(
          <div key={'badgeComponent__'+count} className='badge'>
            <Image src={image.src} width={175} height={175} alt={image.name}/>
          </div>
        )
      }
    })
  }

  const createBadges = () =>{
    createRows();
    return(
      <>
        <div className='flex'>{row}</div>
        <div className='flex'>{row2}</div>
        <div className='flex' style={{justifyContent: 'space-evenly'}}>{row3}</div>
      </>
    )

  }
  
  return(
    <section className='badges'>
      <div className='flex flex-center'>
        <div className='content'>
          <div><p>I'm proud to have collaborated with these awesome companies</p></div>
          {createBadges()}
        </div>
      </div>
    </section>
  ) 
}

export default Badges