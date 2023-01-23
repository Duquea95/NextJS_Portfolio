import React, {useState, useEffect, useRef} from 'react'
// import { useNavigate } from 'react-router-dom'
import oscar from '../../public/images/expertise/oscar-stone.png'
import ja from '../../public/images/expertise/jonathan-adler.jpeg'
import dada from '../../public/images/expertise/dada.png'
import Copy from '../blocks/Copy'

const HeroList = (prop) => {
  
  const listRef = useRef()
  const [activeIndex, setActiveIndex] = useState( prop.activeIndex || 0)

  const mouseEnter = (event) => {
    setActiveIndex(event.target.parentElement.dataset.index || activeIndex  )
    listRef.current.focus({preventScroll: true});
  }

  const mouseLeave = () => {
    listRef.current.blur();
    console.log(activeIndex)
  }

  return(
    <section className="section-hero-list">
      <div className="hero-list">
        <Copy title="Expertise." sub="My skillset is built for success." copy="I can provide digital solutions to solve any problem a client might have."/>

        <div className="section-body">
          <div className="container">
            <div className="nav-full">
              <ul>
              {listData.map( (item, index) => { return(
                <li key={`heroList_component__${index}`} ref={listRef} data-index={index} className={index == activeIndex ? 'hover' : ''} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} tabIndex={0}>
                  <div className="nav-image" style={{backgroundImage: `url(${item.linkImage})`}}></div>
                  <div className="nav-body" style={{minHeight: '440px'}}>
                    <ul>
                      <li>
                        <span>{item.title}</span>
                        { index < 2 && <p>&nbsp;</p>}
                        <ul>
                          {item.list.map((listItem, index) => { return(
                            <li key={`heroList_list__${index}`}><strong>{listItem}</strong></li>
                            )})}
                        </ul>
                        <a href={false} onClick={()=>{navigate('/work')}} className="bottom-link">Case Study: {item.name}</a>
                        {/* <a href={`/case-study/${item.name}`} className="bottom-link">Case Study: {item.name}</a> */}
                      </li>
                    </ul>
                  </div>
                </li>
                )})}
              </ul>
            </div>
          </div>
          </div>
      </div>
    </section>
  )
}

export default HeroList

const listData = [
  {title: 'Creative', linkImage: oscar.src, linkName: '/oscar-stone', name: 'Oscar Stone',list: [ 'FRONT-END DEVELOPMENT', 'UI/UX DESIGN', 'BRAND, CONTENT + SOCIAL STRATEGY', 'PRODUCT  PHOTOGRAPHY', 'INTEGRATED CAMPAIGNS',]},
  {title: 'Production', linkImage: ja.src, linkName: '/jonathan-adler', name: 'Jonathan Adler',list: ['FRONT-END DEVELOPMENT', 'UX / UI DESIGN', 'DIGITAL MARKETING']},
  {title: 'Technology', linkImage: dada.src, linkName: '/dada-daily', name: 'Dada Daily',list: ['FRONT-END DEVELOPMENT', 'WEB-BASED WORKFLOWS + ASSET MANAGEMENT', 'CONTENT MANAGEMENT']
  },
]