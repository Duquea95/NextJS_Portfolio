import React from "react"
import Copy from '../blocks/Copy'
import BadgeData from './data'

const Badges = () => {
  return(
    <section className="section-badges section-default section-no-animation active">
      <Copy title={null} sub="Where I've Worked"  copy="I'm proud to have collaborated with these awesome companies."/>
      <div className="section-body">
        <div className="container">
          <div className="badges">
            <ul>
              {BadgeData.map((item,index) => {return(
                <li key={'badge_'+index}>
                  <span style={{backgroundImage: `url(${item.src})`}}>
                    <img width="400" height="300" src={item.src} className="attachment-full size-full" alt=""/>
                  </span>
                </li>
              )})}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Badges