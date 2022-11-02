import Head from 'next/head';
import Banner from '../components/Banner';
import Layout from '../components/layout';
import Mailer from '../components/Mailer';
import Cards from '../components/Cards';
import UserMining from '../components/UserMining';
import TextWithImage from '../components/TextWithImage';
import CreatUserCookies from '../hooks/createUserCookies';

const HomePage =() => {

  return (
    <>
   <Head>
      <title>Anthony Duque | Front-End Engineer</title>
      <meta name='description' content='I am a front-end engineer with a focus on progressive enhancement, design systems & UI Engineering.' key='description'/>
      <meta name='keywords' content='Web Developer, Front End Engineer, Web Development, Javascript, React JS, Git, HTML, CSS, Node JS.' key='keywords'/>
      <meta name='author' content='Anthony Duque' key='author'/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
      <CreatUserCookies/>
    </Head>
    <Banner/>
    <TextWithImage image={true}/>
    <UserMining/>
    <Cards/>
      {/* <Columns colType={'copy'}/>*/}
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