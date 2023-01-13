import Head from 'next/head';
import Banner from '../components/Banner';
import Layout from '../components/layout';
import Mailer from '../components/Mailer';
import CopyBlock from '../components/CopyBlock';
import Cards from '../components/Cards';
import Badges from '../components/Badges';
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
    <CopyBlock title="Welcome" copy="For years, I have been consulting for small businesses. Collaborating with agencies and creatives to generate digital products for consumer use has led to a confidence that drives consistent improvements to my skillset."/>
    <Carousel/>
    <Cards title='Recent Work' copy='Here are some of my most recent work. Want so see more?' email='duquea95@gmail.com'/>
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