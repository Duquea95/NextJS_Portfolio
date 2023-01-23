import React from "react"
import { useRouter } from "next/router"
// import { NavLink } from "react-router-dom";
import Link from 'next/link';
import logo from '../../public/images/anthony-duque-logo.png'

const Header = (prop) =>{
  const router = useRouter();
  console.log(router.pathname)

  return(
    <header>
      <div className="container">
        <div className="logo-container"><Link 
        href='/' className='logo' 
        style={logo ? {backgroundImage: `url(${logo.src})`} : '' }>DigiMedia Creatives</Link></div>
        <nav>
          <div className='nav-container'>
            <ul>
              {navLinks.map( (item,index) => { return(
                <li key={`header-link__${item.name}`}>
                  <Link 
                  href={`/${item.page}`}
                  className={`${router.pathname == `/${item.name}` ? 'current-menu-item' : undefined}`}
                  >
                    {item.name}
                  </Link >
                </li>
              )})}
            </ul>
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