import React from "react"
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import Link from 'next/link'

const Navbar = () => {
  return(
    <header>
      <div className="flex flex-between">
        <div>
          <Link href='/'>
        <Image alt='Anthony Duque - Front-End Engineer' priority src={logo.src} width={100} height={41}/>
          </Link>
        </div>
        <nav>
          <ul className="flex">
            <li><Link href='/Work'>Work</Link></li>
            <li><Link href='/About'>About</Link></li>
            <li className="nav-cta"><Link href='/Contact'>Say Hello</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar