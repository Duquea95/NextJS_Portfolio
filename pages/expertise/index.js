import React from "react";
import Layout from '../../components/layout';
import HeroList from '../../components/HeroList'

const Expertise = (prop) => {
  return(
    <>
      <section class="section-white-header active"></section>
      <HeroList />
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