import Head from 'next/head';
import Banner from '../components/Banner';
import Layout from '../components/layout';
import Mailer from '../components/Mailer';
import CopyBlock from '../components/CopyBlock';
import Cards from '../components/Cards';
import Badges from '../components/Badges';
import Skills from '../components/Skills';
import Carousel from '../components/Carousel';

const HomePage =() => {

  return (
    <>
   <Head>
      <title>Anthony Duque | Front-End Engineer</title>
      <meta name='description' content='I am a front-end engineer with a focus on progressive enhancement, design systems & UI Engineering.' key='description'/>
      <meta name='keywords' content='Web Developer, Front End Engineer, Web Development, Javascript, React JS, Git, HTML, CSS, Node JS.' key='keywords'/>
      <meta name='author' content='Anthony Duque' key='author'/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
    </Head>
    <Banner title="Web Developer & Designer" subtitle="Developing user-friendly and memorable experiences with every design."/>
    <CopyBlock title="Hi, I'm Anthony." copy="Since beginning my journey as a web developer, I've worked for agencies, consulted for small businesses, and collaborated with talented people to create digital products for both business and consumer use. I'm confident, naturally curious, and always improving my skills."/>
    <Carousel/>
    <Cards/>
    <Badges />
    <Mailer/>
    </>
  )
}
export default HomePage

HomePage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}