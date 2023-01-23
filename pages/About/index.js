import Layout from '../../components/layout';
import Grids from '../../components/Grids'
import os from '../../public/images/about/Oscar-stone-marketing.JPG'
import os2 from '../../public/images/about/oscar-stone-marketing-2.png'
import os3 from '../../public/images/about/oscar-stone-marketing-3.jpeg'
import ja from '../../public/images/about/jonathan-adler-marketing.jpeg'
import desk from '../../public/images/about/workspace.jpeg'

const About = () => {
  return(
    <>
      <section className="section-white-header active"></section>
      <section className="section-image section-intro section-about">
        <div class="section-image section-image-dsktp" style={{backgroundImage: `url(https://thelabnyc.com/wp-content/uploads/2023/01/AboutUs_425-1900x625-cropped.jpg)`}}></div>
        <div class="section-image section-image-mobile" style={{backgroundImage: `url(https://thelabnyc.com/wp-content/uploads/2023/01/section-intro-about-mobile-1900x625-cropped.jpg)`}}></div>
      </section>

      {/* Header only row */}
      <Grids 
        enableHeader={true} 
        headerTitle={false} 
        headerSub={'A little about me.'} 
        headerCopy={"I have an educational background in computer programming and business, with a degree in multimedia programming. I've been building online solutions for over 5 years for Shopify, Salesforce, Wordpress, and custom CMS(s). Thanks to previous opportunities and collaborators, I've been able to learn and grow in other areas such as marketing, business management, graphic design, and SEO."}
        enableGrid={false}
        gridCaption={false}
        reverse={false} 
        enableFullImage={false} 
        fullImage={false}
        fullImageCopy={false}
      />

      <Grids 
        enableHeader={false} 
        headerTitle={false} 
        headerSub={false} 
        headerCopy={false}
        enableGrid={true}
        gridImage1={os.src}
        gridImage2={os2.src}
        gridImage3={os3.src}
        gridCaption={`Successful social media campaigns led to me becoming popular amongst Oscar Stone's following and appearing in their marketing campaigns.`}
        reverse={false} 
        enableFullImage={false}
        fullImage={false}
        fullImageCopy={false}
      />
      <Grids 
        enableHeader={false} 
        headerTitle={false} 
        headerSub={false} 
        headerCopy={false} 
        enableGrid={false}
        gridImage1={false}
        gridImage2={false}
        gridImage3={false}
        gridCaption={false}
        reverse={false}
        enableFullImage={true} 
        fullImage={desk.src}
        fullImageCopy={'And when I\'m not hard at work? You might find me doing photography around New York City.'}
      />
    </>
  )
}

export default About

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}