import { createGlobalStyle } from 'styled-components';
 
const fontUrl = 'https://fonts.googleapis.com/css2?family=Raleway+&display=swap';

const GlobalStyle = createGlobalStyle`
  @import url(${fontUrl});
  
  *{
    margin:0;
    padding:0;
    font-family: Raleway, sans-serif;margin-block-start: 0;margin-block-end: 0;
    text-decoration: none;
  }
  .inherit{
    height: inherit;
  }
  main{
    background:#F9F9F9;
  }
  .title-slider{
    opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    position: relative;
    overflow: hidden;
    width: 100%;
    max-height: 5em;
  }
  .navigation{
    width: 100%;
    height: 5px;
    display: flex;
    max-height: 12rem;
    justify-content: space-between;
    align-items: center;  
    font-size: 1rem;
    height: 11.2em;
    position: fixed;
    padding-left: 6em;
    z-index: 1000;
    padding-right: 6em;
  }
  .navigation ul{
    flex-wrap: wrap;
    float: right;
    margin: 20px 0;
    padding: 0 25px;
  }
  .navigation ul li{
    list-style-type:none;
    padding-right: 10px;
  }
  .banner h1{
    color: #F9F9F9;
    font-size: 5em;
  }
  .main-lg{
    font-size: 5em;
    text-transform: uppercase;
    line-height: 100%;
  }

  .column-items,.__cards, .__copyImage, .__copy{
    height: inherit;
  }
  .col-card{
    padding: 7em 5em;
  }
  .__cards h1, .__cards a, .section-mailer h1,form input, form input:focus, .mainColor{
    color: #77A68B;
  }
  .__cards h1, .section-mailer h1{
    font-size: 48px;
    margin-bottom: 0.5em;
    line-height: 1.05em;
  }
  .__cards p, .section-mailer p,form input::placeholder, form label, .footer-section a:hover{
    color: #40594B;
  }
  .__cards p{
    font-size: 1.45em;
    letter-spacing: 0.05em;
    font-weight: lighter;
    margin-bottom: 1em;
  }

  // Mailer Form Styling
  form{
    width: 60%;
    min-width: 500px;
    margin: 4em auto;
  }
  
  form label{
    display: block;
    opacity: .8;
  }
  form input{
    border: none;
    background: inherit;
    margin: 0;
    border-bottom: 1px solid #40594B;
    width: 100%;
    padding: 15px 0;
    font-size: 1em;
  }
  form input::placeholder{
    transition: opacity .5s linear;
  }
  form input:focus{
    outline: none;
  }
  form input:focus::placeholder{
    opacity:0;
  }
  form .row{
    padding-right: 0.3em;
    padding-left: 0;
    width: 45%;
  }
  form div:first-child{
    justify-content: space-between;
  }
  form .justify-center:nth-child(2) .row{
    width: 100%;
  }
  form .row:last-child{
    padding: 0;
  }
  form .justify-center:nth-child(2){
    margin: 3em auto;
  }
  form .justify-center, .column-items .col-card{
    justify-content: center;
  }
  form .justify-center:first-child{
    padding-top: 35px;
  }

  // Footer Styling
  .footer-section{
    display: flex;
    align-items: center;
    width: 100%;
    background: #77A68B;
  }
  .footer-section li, .footer-section a{
    color: rgb(249,249,249);
    position: relative;
  }
  .footer-menu li{
    margin-bottom: 20px;
  }
`;
 
export default GlobalStyle;