import Image from 'next/image';
import React, {useState, useEffect } from 'react';
import { tabNames, tabData, servicesData } from './data';

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (id, name) => {
    if(!name) return 
    setActiveIndex(id);
  }

  const createTabs = () =>{

    return(
      tabData.map((tab, index) => {
        return (
          <div key={'tab_'+index} className={'tab' + (index == activeIndex ? ' active' : '')} onClick={event => handleTabClick(index, tab.name)}>
            <div className='inner-tab'>
              <div style={{textAlign: 'center'}}>
                <Image src={tab.image} width={50} height={50} alt={tab.name} />
                <h2>{tab.name}</h2>
              </div>
              <div style={{marginTop: '1.5rem', textAlign: 'center'}}>
                <p>{tab.description}</p>
              </div>
              <div style={{marginTop: '3rem'}}>
                { tab.skills.map(skill => {
                  let pillCSS = getPillClasses(skill);
                  return(
                    <div key={'pill_'+skill} className='skill flex'>
                      <div className='pill-name'><p>{skill}</p></div>
                      <div className='pill'><div className={`pill-fill` + (pillCSS ? (' ' + pillCSS) : '')}></div></div>
                    </div>
                )})}
              </div>
            </div>
          </div>
        )
      })
    )
  }

  const getPillClasses = (skill) => {
    switch(skill){
      case 'HTML':
      case 'Shopify':
        return 'pillFull';

      case 'CSS':
        return 'pill90';
          
      case 'Javascript': 
      case 'React':
      case 'Photography':
      case 'Figma': 
        return 'pill82';
            
      case 'Adobe Photoshop': 
      case 'SEO': 
      case 'Node JS':
      case 'Social Media Marketing':
        return 'pill75';
          
      case 'Google Ads & Analytics':
      case 'MongoDB': 
      case 'Sketch': 
        return 'pill65';
          
      case 'Ruby on Rails':
      case 'PHP':
        return 'pillHalf';
    }
  }

  return(
   <div className="section flex tabs">
      <div className='content'>
        <div>
          <div className='flex container'>
              {createTabs()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills