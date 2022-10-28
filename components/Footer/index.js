export default function Footer(){
  let footerLinks = [
    {text: 'My Works', url: '/Works'},
    {text: 'My Articles', url: '/Blog'},
    {text: 'My Résumé', url: 'https://docs.google.com/document/d/13FSTyQ1smTcB7zBYIfjpRJ8qC8jU0jqsBgDgvlXDGc4/edit?usp=sharing'}
  ]

  let socialLinks = [
    {alt: 'LI'},
    {alt: 'GH'},
    {alt: 'TW'}
    // {alt: 'LinkedIn'},
    // {alt: 'Github'},
    // {alt: 'Twitter'}
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
            </ul>
          </div>
          <div className='flex-between'>
            <ul className='socials-menu flex'>
              {socialLinks.map(link => {
                return <li>{link.alt}</li>
              })}
            </ul>
            <div><span>© Anthony Duque 2022</span></div>
          </div>
        </div>
      </div>
    </footer>
  )
}