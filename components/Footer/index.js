export default function Footer(){
  let footerLinks = [
    {text: 'My Works', url: '/Works'},
    {text: 'My Articles', url: '/Blog'},
    {text: 'My Résumé', url: '/myResume.pdf' }
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
              {footerLinks.map(link => {
                return <li><a href={link.url}>{link.text}</a></li>
              })}
                <a
    href="/files/file_name.pdf"
    alt="alt text"
    target="_blank"
    rel="noopener noreferrer"
  >Download FIle</a>
            </ul>
          </div>
          <div className='flex-between'>
            <div className='socials-menu flex'>
              {socialLinks.map(link => {
                return <a className={link.linkClasses} href={link.url}><i className={link.iconClasses}></i></a>
              })}
            </div>
            <div><span className="copyright">© Anthony Duque 2022</span></div>
          </div>
        </div>
      </div>
    </footer>
  )
}