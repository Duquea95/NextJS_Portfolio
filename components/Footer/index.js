import React from "react"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {

  return(
    <footer>
      <div className="container">
        <div className="footer-head">
          <blockquote>
            <p><strong>Let’s talk</strong> <a href="mailto:duquea95@gmail.com">duquea95@gmail.com</a></p>
          </blockquote>
          <nav className="nav-socials">
            <ul>
              { socialLinks.map((item, index) => { return (
                <li key={`social-link__${index}`}>
                  <a href={item.link} target="_blank">
                    <i className={`fa`+item.classNames}>{item.icon}</i>
                  </a>
                </li>
              )})
              }
            </ul>
          </nav>
        </div>
        <div className="footer-body">
          <ul>
            <li>
              <p>© 2023 - Anthony Duque.</p>
            </li>
            <li>
              <p>All Rights Reserved.</p>
            </li>
        </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

const socialLinks = [
  {name: 'DigiMedia Creative\'s Facebook', link: 'facebook.com', icon: <FaFacebookF/>, classNames: ' fa-facebook'},
  {name: 'DigiMedia Creative\'s Twitter', link: 'twitter.com', icon: <FaTwitter/>, classNames: ' fa-twitter'},
  {name: 'DigiMedia Creative\'s Instagraam Account', link: 'instagram.com', icon: <FaInstagram/>, classNames: ' fa-instagram'},
  {name: 'DigiMedia Creative\'s LinkedIn Account', link: 'linkedin.com', icon: <FaLinkedinIn/>, classNames: ' fa-linkedin'},
]