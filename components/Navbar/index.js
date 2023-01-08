import React, {useState, useEffect} from "react"
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDropdown = () => {
    console.log('menu open')
    return setIsMenuOpen(!isMenuOpen);
  }

  return(
    <header>
      <div className="flex flex-between">
        <div>
          <Link href='/'>
          <Image alt='Anthony Duque - Front-End Engineer' priority src={logo.src} width={75} height={31}/>
          </Link>
        </div>
        <nav>
          <div className="dropdown-cta">
            <div onClick={handleDropdown}>X</div>
          </div>
          <div className={`menu ${isMenuOpen ? ' open' : ''}`}>
            <ul>
              <li><Link onClick={isMenuOpen ? handleDropdown : ''} href='/Work'>Work</Link></li>
              <li><Link onClick={isMenuOpen ? handleDropdown : ''} href='/About'>About</Link></li>
              <li className="nav-cta"><Link onClick={isMenuOpen ? handleDropdown : ''} href='/Contact'>Say Hello</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar