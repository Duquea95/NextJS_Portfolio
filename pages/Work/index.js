import React from "react";
import { useRouter } from "next/router"
import Layout from '../../components/layout';
import Copy from '../../components/blocks/Copy'
import Badges from '../../components/Badges'
import os from '../../public/images/our-work/oscar-stone.jpeg'
import ja from '../../public/images/our-work/jonathan-adler.jpeg'
import bmcc from '../../public/images/our-work/bmcc_marketing.jpeg'
import coco from '../../public/images/our-work/coco-and-breezy.jpeg'
import dada from '../../public/images/our-work/dada-daily.jpeg'
import ml from '../../public/images/our-work/morgan-lane.jpeg'
import bb from '../../public/images/our-work/billys-bakery.jpeg'
import ssl from '../../public/images/our-work/sports-science-lab.png'

const Work = (prop) => {

  return(
    <>
      <section className="section-white-header active"></section>
      <section className="cards">
        <Copy title="I'm proud of my work." sub={null} copy="Here are my past experiences."/>
        <div className="section-body">
          <div className="container">
            <div className="cards-list">
              <ul>
                {listData.map((item, index)=>{ return( 
                  <li key={`card_component__${index}`}>
                    <article>
                      <a href={`${item.url}`}></a>
                      <div className="article-image">
                        <img width={710} height={662} src={item.src}/>
                        <div className="article-image-holder" style={{backgroundImage: `url(${item.src})`}}></div>
                      </div>
                      <div className="article-body">
                        <h4>{item.title}</h4>
                        <h6>{item.description}</h6>
                        <p>{item.tag}</p>
                      </div>
                    </article>
                  </li>
                )})}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Badges />
    </>
  )
}

export default Work

Work.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

const listData = [
  {title: "Oscar Stone", description: "King of diamond jewelry", tag: "Front-end Development, Marketing, Graphic Design Photography", src: os.src, url: 'https://oscarstonenyc.com'
  },
  {title: "Jonathan Adler", description: "A fabulous lifestyle.", tag: "Full-Stack Development, Graphic Design, Marketing", src: ja.src, url: 'https://jonathanadler.com'
  },
  {title: "BMCC", description: "Building futures today.", tag: "Front-end Development, Marketing, Graphic Design", src: bmcc.src, url: 'https://www.bmcc.cuny.edu'
  },
  {title: "Dada Daily",description: "A healhtier way to snack.", tag: "Front-end Development, UX Design", src: dada.src, url: 'https://dadadaily.com'
  },
  {title: "Morgan Lane", description: "Be comfortable. Be stylish.", tag: "Front-end Development", src: ml.src, url: 'https://morgan-lane.com'
  },
  {title: "Coco & Breezy", description: "A new look on lenswear.", tag: "Front-end Development", src: coco.src, url: 'https://cocoandbreezy.com'
  },
  {title: "Billy's Bakery NYC", description: "Freshly made for NYC.", tag: "Front-end Development", src: bb.src, url: 'https://billysbakerynyc.com'
  },
  {title: "Sports Science Lab", description: "Pushing the boundaries.", tag: "Front-end Development", src: ssl.src, url: 'https://nysportssciencelab.com/'
  }
]