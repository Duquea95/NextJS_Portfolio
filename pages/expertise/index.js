import React from "react";
import { useRouter } from "next/router"
import Layout from '../../components/layout';
import HeroList from '../../components/HeroList'

const Expertise = (prop) => {
  const router = useRouter();

  // console.log(router.query.activeIndex)
  return(
    <>
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