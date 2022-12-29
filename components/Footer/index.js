export default function Footer(){
  let footerLinks = [
    {text: 'My Works', url: '/Works'},
    // {text: 'My Articles', url: '/Blog'},
  ]

  let socialLinks = [
    {url: 'https://www.linkedin.com/in/anthony-duque/', linkClasses: 'icon icon--linkedin', iconClasses: 'ri-linkedin-line'}, 
    {url: 'https://github.com/Duquea95', linkClasses: 'icon icon--github', iconClasses: 'ri-github-line'}
  ]

  return(
    <footer>
      <div className='section flex flex-center'>
        <div className='padding content'>
          <div>
            <div>
              <p style={{marginBottom: 25+'px', letterSpacing: .3+'rem'}}>SAY HELLO</p>
              <a href='mailto:duquea95@gmail.com'>Duquea95@gmail.com</a>
            </div>
            <ul className='footer-menu'>
              {footerLinks.map((link,idx) => {
                return <li key={'footer_link__'+idx}><a href={link.url}>{link.text}</a></li>
              })}
            </ul>
          </div>
          <div className='flex-between'>
            <div className='socials-menu flex'>
              {socialLinks.map((link,idx) => {
                return <a key={'social_link__'+idx} className={link.linkClasses} href={link.url}><i className={link.iconClasses}></i></a>
              })}
            </div>
            <div><span className="disclaimer">© Anthony Duque 2022</span></div>
          </div>
        </div>
      </div>
    </footer>
  )
}