import Layout from '../../components/layout';
import TextWithImage from "../../components/TextWithImage"
import Gallery from '../../components/Gallery';
import CopyBlock from '../../components/CopyBlock';
import galleryImages from './data';

const About = () => {
  return(
    <div className=''>
      <TextWithImage title='A little about me...' copy="My name is Anthony, and I'm web developer based in New York. I have an educational background in computer programming and business, with a degree in multimedia programming. I've been building online solutions for over 5 years ranging from Shopify storefronts, Salesforce / Wordpress solutions, or custom CMS. Thanks to previous opportunities and collaborators, I've been able to learn and grow in other areas such as marketing, business management, graphic design, and SEO." image='https://live.staticflickr.com/65535/52622750974_fb410da513_b.jpg' position='start'/>
      <TextWithImage title='Hobbies & Interests' copy="My love for coding has brought me this far, but I am more than just a developer. My other interests include photography, skateboarding, music production, sports (mainly basketball), and more. My life is filled with artistic and physical outlets as means of maintaining a healthy work-life balance." image={null} position={null}/>
      <Gallery galleryData={galleryImages}/>
    </div>
  )
}

export default About;

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}