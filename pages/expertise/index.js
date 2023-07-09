import React from "react";
import Head from 'next/head'
import { useRouter } from "next/router"
import Layout from '../../components/layout';
import HeroList from '../../components/HeroList'

const Expertise = (prop) => {
  const router = useRouter();

  return(
    <>
      <Head>
        <title>Expertise | Anthony Duque Front-end Engineer</title>
        <meta name='description' content='From developing custom web applications to improving existing eCommerce websites, my skillset allows me to push your brand to the next level and engage a wider audience to improve ROIs.' key='description'/>
        <meta name='keywords' content='Web Developer, Front End Engineer, Web Development, Javascript, React JS, Git, HTML, CSS, Node JS, SEO.' key='keywords'/>
        <meta name='author' content='Anthony Duque' key='author'/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
      </Head>
      <section class="section-white-header active"></section>
      <HeroList 
        activeIndex={router.query.activeIndex}
      />
    </>
  )
}

export default Expertise

Expertise.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}