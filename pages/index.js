import styled, {css, keyframes} from 'styled-components'
import { createElement, useEffect, useState, useRef } from 'react'
// import GlobalStyle from './globalStyles';
import Banner from '../components/Banner';
import Layout from '../components/layout';
import Mailer from '../components/Mailer';
import Cards from '../components/Cards';
import TextWithImage from '../components/TextWithImage';

const HomePage =() => {
  return (
    <>
    <Banner/>
    <TextWithImage image={true}/>
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