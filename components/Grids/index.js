import React from "react";
import Copy from '../blocks/Copy'
import Router, { useRouter } from "next/router";
import Link from 'next/link';

const Grids = (prop) => {
  const router = useRouter();
  let imageArr=[
    {image: prop.gridImage2}, 
    {image: prop.gridImage3}, 
  ]

  let col1 =  <div className="grid-col-1">
    <div className="grid-image">
      <img width="690" height="557" src={prop.gridImage1} />
    </div>
    <div className="grid-caption">
      <p>{prop.gridCaption}</p>
    </div>
  </div>

  let col2 = <div className="grid-col-2">
    <div className="grid-images">
    {imageArr.map((item,index)=>{return(
      <div key={`col2-image__${index}`} className="grid-image">
        <img width={index == 0 ? 429 : 313} height={index == 0 ? 352 : 313} src={item.image} /> 
        {index == 0 &&
        <div class="grid-caption grid-caption-mobile">
        <p>{prop.gridCaption}</p>
        </div>
        }
      </div>
    )})}
    </div>
  </div>

  let sectionClassName = `section-grids ${(router.pathname == '/case-study') && 'case-study'}`

  return(
    <section className={sectionClassName}>

    {(router.pathname == '/case-study') && 
      <div className='section-head'>
        <div className='container'>
          <blockquote>
            <h2>{prop.headerTitle}</h2>
            {/* <h6>{prop.headerCopy}</h6> */}
            <h4>{prop.headerCopy}</h4>
            <Link href='/work'>See all work</Link>
          </blockquote>
        </div>
      </div>
    }
      
      {(prop.enableHeader == true && router.pathname != '/case-study')  && <Copy title={prop.headerTitle} sub={prop.headerSub} copy={prop.headerCopy}/>}
      
      <div className="section-body">
        <div className="grids">
          <div className={`grid-row ${prop.enableFullImage && 'grid-row-full'}`}>
            {prop.enableGrid && 
            <div className="container">
              <div className="grid-inner active">
              { prop.reverse == true ? <>{col2}{col1}</> : <>{col1}{col2}</> }
              </div>
            </div>
            }
            {prop.enableFullImage && 
            <div className="grid-inner active">
              <div className="grid-image-bg" 
                style={{backgroundImage: `url(${prop.fullImage})`}}></div>

              <div className="grid-caption">
                <div className="container">
                  <p>{prop.fullImageCopy}</p>
                </div>
              </div>
              
              <div className="grid-caption grid-caption-mobile">
                <div className="container">
                  <p>{prop.fullImageCopy}</p>
                </div>
              </div>
            </div>
            }
          </div>
        </div>
      </div>

    </section>
  )
}

export default Grids