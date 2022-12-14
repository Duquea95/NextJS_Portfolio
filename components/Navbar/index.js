import React, {useState, useEffect} from "react"
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDropdown = () => {
    return setIsMenuOpen(!isMenuOpen);
  }
  
  const handleLogoClick = () => {
    return setIsMenuOpen(false);
  }

  return(
    <header>
      <div className="flex flex-between">
        <div>
          <Link href='/' onClick={handleLogoClick}>
            <Image alt='Anthony Duque - Front-End Engineer' priority src={logo.src} width={75} height={31}/>
          </Link>
        </div>
        <nav>
          <div className={`dropdown-cta hamburger${isMenuOpen ? ' is-active' : ''}`}>
            <div className="hamburger-box">
              <div className="hamburger-inner" onClick={handleDropdown}></div>
            </div>
          </div>
          <div className={`menu ${isMenuOpen ? ' open' : ''}`}>
            <ul>
              <li><Link onClick={isMenuOpen ? handleDropdown : ''} href='/About'>About</Link></li>
              <li><p className="inactive">Work</p></li>
              {/* <li><p onClick={isMenuOpen ? handleDropdown : ''}>Work</p></li> */}
              <li className={isMenuOpen ? '' : "nav-cta"}><Link onClick={isMenuOpen ? handleDropdown : ''} href='/Contact'>Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar