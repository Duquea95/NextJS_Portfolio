import Head from 'next/head'
import anthony from'../public/images/anthony.jpg' 
import Navbar from './Navbar';
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <>
      {/* <Header> */}
      <Head>
        <meta property="og:image" content={anthony.src} />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}