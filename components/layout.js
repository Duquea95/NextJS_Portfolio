import Head from 'next/head'
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <>
      {/* <Header> */}
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      </Head>
      <main>{children}</main>
      <Footer/>
    </>
  )
}