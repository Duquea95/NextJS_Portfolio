import React, { useState } from "react"
import { useRouter } from "next/router"
// import { NavLink } from "react-router-dom";
import Link from 'next/link';
import logo from '../../public/images/anthony-duque-logo.png'

const Header = (prop) =>{
  const router = useRouter();
  const [ menuState, setMenuState ] = useState(false)
  console.log(router.pathname)

  const handleClick = () =>{
    return setMenuState(!menuState)
  }

  return(
    <header>
      <div className="container">
        <div className="logo-container"><Link 
        href='/' className='logo' 
        style={logo ? {backgroundImage: `url(${logo.src})`} : '' }>DigiMedia Creatives</Link></div>
        <a onClick={handleClick} class={`btn-menu${(menuState == true) ? ' active' : ''}`}>
					<span></span>
				</a>
        <nav className={`${menuState == true ? 'show' : ''}`}>
          <div className='nav-container'>
            <ul>
              {navLinks.map( (item,index) => { return(
                <li key={`header-link__${item.name}`}>
                  <Link 
                  onClick={handleClick}
                  href={`/${item.page}`}
                  className={`${router.pathname == `/${item.name}` ? 'current-menu-item' : undefined}`}
                  >
                    {item.name}
                  </Link >
                </li>
              )})}
            </ul>
          </div>
          <div className='nav-mobile'>
            <blockquote>
              <p>
                <strong>let’s talk</strong> 
                <a href="mailto:info@thelabnyc.com">info@thelabnyc.com</a>
              </p>
            </blockquote>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

const navLinks = [
  {name: 'work', page: 'work'},
  {name: 'expertise', page: 'expertise'},
  {name: 'about', page: 'about'},
  // {name: 'careers', page: 'careers'},
]