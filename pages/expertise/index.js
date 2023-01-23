import React from "react";
import Layout from '../../components/layout';
import HeroList from '../../components/HeroList'

const Work = (prop) => {
  return(
    <>
      <section class="section-white-header active"></section>
      <HeroList />
    </>
  )
}

export default Work

Work.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}