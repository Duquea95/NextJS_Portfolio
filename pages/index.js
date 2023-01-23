import Head from 'next/head';
import Hero from "../components/Hero";
import List from "../components/List";
import Badges from "../components/Badges";

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
    <main>  
      <Hero heroType='jumboText'/>
      <List />
      <Badges/>
    </main>
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