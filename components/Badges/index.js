import Image from 'next/image';
import images  from './data.js';

const Badges = () => {

  // let row = [], row2 = [], row3 = [];

  // const createRows = () => {
  //   images.map( (image, count) => {
  //     if (count <= 3){
  //       row.push(
  //         <div key={'badgeComponent__'+count} className='badge'>
  //           <Image src={image.src} width={125} height={125} alt={image.name}/>
  //         </div>
  //       )
  //     }
  //     else if(count > 3 && count < 8){
  //       row2.push(
  //         <div key={'badgeComponent__'+count} className='badge'>
  //           <Image src={image.src} width={125} height={125} alt={image.name}/>
  //         </div>
  //       )
  //     }
  //     else{
  //       row3.push(
  //         <div key={'badgeComponent__'+count} className='badge'>
  //           <Image src={image.src} width={125} height={125} alt={image.name}/>
  //         </div>
  //       )
  //     }
  //   })
  // }

  const createBadges = () =>{
    return images.map( (image, count) => {
      return <div key={'badgeComponent__'+count} className='badge'><Image src={image.src} width={125} height={125} alt={image.name}/></div>
  })}
  
  return(
    <section className='badges'>
      <div className='flex flex-center'>
        <div className='content'>
          <div><p>I'm proud to have collaborated with these awesome companies</p></div>
          <div className='flex'>
            {createBadges()}
          </div>
        </div>
      </div>
    </section>
  ) 
}

export default Badges