import React from "react"
// import { useNavigate} from "react-router-dom"
import Link from 'next/link';
import os from '../../public/images/our-work/oscar-stone.jpeg'
import ja from '../../public/images/our-work/jonathan-adler.jpeg'
import bmcc from '../../public/images/our-work/bmcc_marketing.jpeg'
import coco from '../../public/images/our-work/coco-and-breezy.jpeg'
import dada from '../../public/images/our-work/dada-daily.jpeg'

const List = () => {

  let head = {title: "Great ideas, delivered right.", description: "Creating digital products for consumer use has led to a confidence that drives consistent improvements to my skillset.", tags: null,}
  return(
        <section className="section-list">
          <div className="section-container">
            <div className="container">
              <div className="list">
                <ul>
                  <li className="list-item list-item__head">
                    <h3>{head.title}</h3>
                    <p>{head.description}</p>
                  </li>
                  {listData.map((item, index) => { return(
                  <li key={`list-item__${item.title}`} className="list-item">
                    <article>
                      {/* <Link href={`/case-study/${item.slug}`} /> */}
                      {/* <Link href={`/case-study`} /> */}
                      <Link href={`/work`} />
                      <div className="list-item__image" style={{backgroundImage: `url(${item.src})`}}>
                        <img width="1024" height="953" src={item.src} className="attachment-large size-large" alt={'Marketing image of '+item.title}></img>
                      </div>
                      <div className="article-body">
                          <h5>{item.title}</h5>
                          <p>{item.description}</p>
                          <h6>{item.tags}</h6>
                      </div>
                    </article>
                  </li>
                  )})}
                  <li className="list-item list-action active">
                    <Link href='/work' className="btn-circle">
                      <span className="btn-body">
                        <span className="btn-body-holder">See<br/>More Work</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  )
}

export default List

const listData = [
  {title: "Oscar Stone", slug: 'oscar-stone', description: "King of diamond jewelry.", tags: "Front-end Development, E-commerce Design, Marketing, Photography", src: "https://live.staticflickr.com/65535/52630694325_d6f208e2df_c.jpg"
  },
  {title: "Jonathan Adler", slug: 'jonathan-adler', description: "A fabulous lifestyle.", tags: "Full-stack Development, Marketing, Graphic Design", src: ja.src
  },
  {title: "BMCC", slug: 'bmcc', description: "Building futures today.", tags: "Front-end Development", src: bmcc.src
  },
  {title: "Dada Daily", slug: 'dada-daily', description: "A healhtier way to snack.", tags: "Front-end Development, E-commerce Design", src: dada.src 
  },
]