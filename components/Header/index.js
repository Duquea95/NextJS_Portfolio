import React, { useState } from "react"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
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
        <a onClick={handleClick} className={`btn-menu${(menuState == true) ? ' active' : ''}`}>
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
                  className={`${router.pathname == `/${item.page}` ? 'current-menu-item' : undefined}`}
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
                <a href="mailto:Duquea95@gmail.com">Duquea95@gmail.com</a>
              </p>
            </blockquote>
            <ul className="nav-socials">
              { socialLinks.map((item, index) => { return (
                <li key={`social-link__${index}`}>
                  <a href={`https://${item.link}`} target="_blank">
                    <i className={`fa`+item.classNames}>{item.icon}</i>
                  </a>
                </li>
              )})
              }
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

const navLinks = [
  {name: 'work', page: 'Work'},
  {name: 'expertise', page: 'expertise'},
  {name: 'about', page: 'About'},
  // {name: 'careers', page: 'careers'},
]

const socialLinks = [
  // {name: 'DigiMedia Creative\'s Facebook', link: 'facebook.com', icon: <FaFacebookF/>, classNames: ' fa-facebook'},
  // {name: 'DigiMedia Creative\'s Twitter', link: 'twitter.com', icon: <FaTwitter/>, classNames: ' fa-twitter'},
  // {name: 'DigiMedia Creative\'s Instagraam Account', link: 'instagram.com', icon: <FaInstagram/>, classNames: ' fa-instagram'},
  {name: 'Anthony Duque\'s LinkedIn Profile', link: 'linkedin.com/in/anthony-duque', icon: <FaLinkedinIn/>, classNames: ' fa-linkedin'},
]