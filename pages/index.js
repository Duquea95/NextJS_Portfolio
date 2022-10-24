import styled, {css, keyframes} from 'styled-components'
import Image from 'next/image'
import anthony from'../public/images/anthony.jpg' 
import { createElement, useEffect, useState, useRef } from 'react'
import GlobalStyle from './globalStyles';

const HomePage =() => {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}
export default HomePage

const Mailer = () =>{
  const [sendMail, setSendMail] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const mailerClicked = () =>{
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
    setSendMail(true);
  }

  const focusLabelColor = (e) =>{
    e.target.previousSibling.classList.add('mainColor');
  }
  const blurLabelColor = (e) =>{
    console.log(e.target.previousSibling)
    e.target.previousSibling.classList.remove('mainColor');
  }

  const RenderButton = () =>{
    if(sendMail != true) return <Button text={'Shoot'} mailerClicked={mailerClicked} sendMail={sendMail}/>

    return <Button text={'Thank you!'} mailerClicked={mailerClicked} sendMail={sendMail}/>
  }

  const Form = () =>{
    const htmlForm = null;
    const formCopy = [
      {
        labelCopy: 'Your Name:',
        labelFor: 'name',
        inputRef: nameRef,
        inputType: 'text',
        inputPlaceholder: 'Enter Your Name',

      },
      {
        labelCopy: 'Email',
        labelFor: 'email',
        inputRef: emailRef,
        inputType: 'text',
        inputPlaceholder: 'Enter Your Email:',

      },
      {
        labelCopy: 'Your Message:',
        labelFor: 'message',
        inputRef: messageRef,
        inputType: 'textarea',
        inputPlaceholder: 'Hi, I need a custom plugin for my e-commerce website. When are you available to discuss this?',

      },
    ]

    const createFormInputs = () => {

      let topLeft, topRight, bottom;

      {formCopy.map(copy  =>{

        if(copy.labelFor=='message'){
          bottom =
            <FlexDiv className='justify-center'>
              <div className='row' key={'form-row__'+copy.labelFor}>
                <label htmlFor={copy.labelFor}>{copy.labelCopy}</label>
                <input ref={copy.inputRef} type={copy.inputType} placeholder={copy.inputPlaceholder} name={copy.labelFor} onFocus={focusLabelColor} onBlur={blurLabelColor}/>
              </div>
            </FlexDiv>
          ;
        }else if(copy.labelFor=='email'){
          topRight =
              <div className='row' key={'form-row__'+copy.labelFor}>
                <label htmlFor={copy.labelFor}>{copy.labelCopy}</label>
                <input ref={copy.inputRef} type={copy.inputType} placeholder={copy.inputPlaceholder} name={copy.labelFor} onFocus={focusLabelColor} onBlur={blurLabelColor}/>
              </div>;
        }else{
          topLeft =
              <div className='row' key={'form-row__'+copy.labelFor}>
                <label htmlFor={copy.labelFor}>{copy.labelCopy}</label>
                <input ref={copy.inputRef} type={copy.inputType} placeholder={copy.inputPlaceholder} name={copy.labelFor} onFocus={focusLabelColor} onBlur={blurLabelColor}/>
              </div>;
        }
 
      })}

      let container = <FlexDiv>{topLeft}{topRight}</FlexDiv>
      
      return(
        <>
          {container}
          {bottom}
        </>
      )
    }


    return(
      <MailerForm>
          {createFormInputs()}
        <FlexDiv className='justify-center'>
          {RenderButton()}
        </FlexDiv>
      </MailerForm>
    )
  }

  return(
    <StyleSection className='section-mailer'>
      <WidthDiv className='inherit' $width={100+'%'}>
        <FlexDiv className='inherit' $section={'alignCenter'}>
          <WidthDiv $width={100+'%'}>
            <div style={{textAlign: 'center',marginBottom: 30+'px'}}>
              <TitleH1 style={{marginBottom: 15+'px'}}>Send me a message!</TitleH1>
              <p style={{fontSize: 24+'px'}}>Got a question or proposal, or just want <br/> to say hello? Go ahead.</p>
            </div>
            <Form/>
          </WidthDiv>
        </FlexDiv>
      </WidthDiv>
    </StyleSection>
  )
}
const Banner = () => {
  const[activeIndex, setActiveIndex] = useState(0); 
  const [count, setCount] = useState(0)
  let texts = ['People', 'Impact', 'Change', 'Action', 'Good', 'People'];

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(activeIndex);
      if(activeIndex == texts.length-1){
        setCount(count+1);
        return setActiveIndex(0);
        
      }else{
        return setActiveIndex(activeIndex+1);
      }
    }, 2500);
    
    return () => clearInterval(interval);
  }, [activeIndex])

  return(
    <StyleSection className='banner grad' style={{willChange: 'opacity', opacity: 1}}>
      <WidthDiv $width={100+'%'}>
        <FlexDiv $section={'alignCenter'}>
          <WidthDiv $width={50+'%'} style={{padding: '4em'}}>
            <p style={{marginBottom: '1.2em'}}>Anthony Duque <span>Frontend Developer</span></p>
            <h1 className='main-lg'>Design<br/>For<br/></h1>
            <div className='title-slider'>
              {texts.map((text,idx) => {return (
                  <TitleH1
                  key={idx} 
                  className={`main-lg ${(idx == 0 && count == 0) ? 'slideIn-start' : ''} ${idx == 0 ? 'start' : 'hide-slide'} ${idx==activeIndex ? 'active': 'inactive'} ${idx <= activeIndex ? 'hide-slideUp' : ''} ${idx == text.length-1 ? 'last' : ''}
                  `} $transform={idx*100}>{text}</TitleH1>
              )
              })}
            </div>
          </WidthDiv>
          <WidthDiv $width={50+'%'} className='sub-banner' style={{justifyContent: 'space-between', padding:'2em'}}><Image src={anthony.src} width={300} height={350}/></WidthDiv>
        </FlexDiv>
      </WidthDiv>
    </StyleSection>
  )
}
const Columns = ({colType}) => {
  const ColumnCard = ({type}) =>{

    let titleText;
    let subText;
    let button;

    if(type=='work'){
      titleText = <TitleH1>I build &<br/>design stuff</TitleH1>;
      subText = <p>Open source<br/>projects, web apps,<br/>and experimentals.</p>;
      button = <Button text='View My Work' $link='/Works'/>;
    }else{
      titleText = <TitleH1>I write,<br/>sometimes</TitleH1>;
      subText = <p>About design,<br/>frontend dev,<br/>learning and life.</p>;
      button = <Button text='Read My Blog' $link='/Blog'/>;
    }

    return(
      <WidthDiv className='col-card' $width={50+'%'} style={{background: 'white'}}>
        <article>
          <div>
            {titleText}
            {subText}
          </div>
          {button}
        </article>
      </WidthDiv>
    )
  }

  const ColumnCopy = ({type}) => {
    return(
      <WidthDiv className='columnCopy' $width={50+'%'} style={{justifyContent: type == 'engineering' ? 'end' : 'initial'}}>
        <div>
          <div>
            <TitleH1>
              {(type == 'design') && <>Design</>}
              {(type == 'engineering') && <>Engineering</>}
            </TitleH1>
            <p>
              {(type == 'design') && <>I'm probably not the typical designer positioned behind an<br/>Illustrator artboard adjusting pixels, but I design. Immersed in<br/>stylesheets tweaking font sizes and contemplating layouts is<br/>where you'll find me (~_^). I'm committed to creating fluent user<br/>experiences while staying fashionable.</>}
              {(type == 'engineering') && <>In building JavaScript applications, I'm equipped with just the<br/>right tools, and can absolutely function independently of them<br/>to deliver fast, resilient solutions optimized for scale —<br/>performance and scalabilty are priorities on my radar.</>}
            </p>
          </div>
        </div>
      </WidthDiv>
    )
  }

  const ColumnCopyImage = ({type}) => {
    return(
      <WidthDiv className='columnCopy' $width={50+'%'}>
        <div>
          <div>
            {type=='copy' &&
            <>
            <TitleH1>Over the past<br/>5 years</TitleH1>
            <p>
              I've built products for companies and businesses<br/>around the globe ranging from marketing websites to<br/>complex solutions and enterprise apps with focus on<br/>fast, elegant and accessible user experiences.
              <br/>
              Currently, I work at Shopify as a Senior UX Developer<br/>and Accessibility advocate crafting thoughtful and<br/>inclusive experiences that adhere to web standards<br/>for over a million merchants across the world.
              <br/>
              Before now, I was Principal Frontend Engineer at<br/>hellotax, where I worked on a suite of tools and<br/>services tailored at providing fast, automated VAT<br/>Registration / filings & Returns solutions for multi-<br/>channel sellers across Europe.
              <br/>
              Prior to hellotax, I was Senior frontend engineering<br/>contractor with Pixel2HTML, building JavaScript<br/>applications and interfaces for orgs and individuals.
              <br/>
              I once also led the frontend team at a Russian<br/>startup, Conectar through building multiple React<br/>applications into a single robust learning platform.
            </p>
            </>
            }
            {type=='image' &&
            <>
            {/* <Image/> */}
            </>
            }
          </div>
        </div>
      </WidthDiv>
    )
  }

  return(
  <StyleSection className='columns'>
    <WidthDiv $width={100+'%'} style={{height: 'inherit'}}>
      <FlexDiv className={`__${colType}`}>
        {colType == 'copyImage' &&
          <>
            <ColumnCopyImage type={'copy'}/>
            <ColumnCopyImage type={'image'}/>
          </>
        }
        {colType == 'cards' &&
          <>
            <ColumnCard type={'work'}/>
            <ColumnCard type={'blog'}/>
          </>
        }
        {colType == 'copy' &&
          <>
            <ColumnCopy type={'design'}/>
            <ColumnCopy type={'engineering'}/>
          </>
        }
      </FlexDiv>
    </WidthDiv>
  </StyleSection>
  )
}
const Main = () => {
  return(
    <main>
      <Banner/>
      <Columns colType={'copy'}/>
      <Columns colType={'copyImage'}/>
      <Columns colType={'cards'}/>
      <Mailer/>
    </main>
  )
}
const Button = (props) => {
  const handleMailer = (e) =>{
    e.preventDefault();
    props?.mailerClicked();
  }
  return(
    <div>
      <StyledButton>
        <InnerBtn as='a' href={props.$link} onClick={props?.mailerClicked && handleMailer} className={props?.sendMail ? 'mail-sent' : ''}>
        <span>{props.text}</span> <span style={{marginLeft:15+'px'}}>
          {/* <img src='https://cdn-icons-png.flaticon.com/512/3183/3183364.png' width={20} height={20}/> */}
        </span>
        </InnerBtn>
      </StyledButton>
    </div>
  )
}
const Header = () => {
  return(
    <header className='navigation'>
      <div>
        <span>Duqué</span>
      </div>
      <div>
        <span>-</span>
        <span>-</span>
        <span>-</span>
      </div>
    </header>
  )
}
const Footer = () => {
  return(
    <footer>
      <StyleSection as='div' className='footer-section'>
        <WidthDiv $width={100+'%'} style={{padding: 0}}>
          <FlexDiv $section='footer'>
            <div style={{marginRight: 18+'vw'}}>
              <p style={{marginBottom: 25+'px', letterSpacing: .3+'rem'}}>SAY HELLO</p>
              <a href='mailto:duquea95@gmail.com'>Duquea95@gmail</a>
            </div>
            <ul className='footer-menu' style={{listStyle: 'none', marginTop: 2.5+'em'}}>
              <li><a href='/Works'>My Works</a></li>
              <li><a>My Articles (Coming Soon)</a></li>
              <li><a href='https://docs.google.com/document/d/13FSTyQ1smTcB7zBYIfjpRJ8qC8jU0jqsBgDgvlXDGc4/edit?usp=sharing'>My Résumé</a></li>
            </ul>
          </FlexDiv>
          <FlexDiv $section='footer'>
            <div><span>© Anthony Duque 2022</span></div>
            <div>
              <FlexDiv as='ul'>
                <li>GH</li>
                <li>TW</li>
                <li>LN</li>
              </FlexDiv>
            </div>
          </FlexDiv>
        </WidthDiv>
      </StyleSection>
    </footer>
  )
}

const titleSlideOut = keyframes`{
  0% {transform: translate3d(0px, 0%, 0px)}
  50% {transform: translate3d(0px, -50%, 0px)}
  100% {transform: translate3d(0px, -100%, 0px)}
}`
const titleSlideIn = keyframes`{
  0% {transform: translate3d(0px, 100%, 0px)}
  50% {transform: translate3d(0px, 50%, 0px)}
  100% {transform: translate3d(0px, 0%, 0px)}
}`
const gradient = keyframes`{
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
`
const StyleSection = styled.section`
height: 100vh;
width: 100%;

  &.grad{
    background: linear-gradient(-45deg, #47C5CF, #94DABC, #FFCF54, #FAD1E2);
    background-size: 400% 400%;
    animation: ${gradient} 10s ease infinite;
  }
`
const WidthDiv = styled.div`
  width: ${(props) => props.$width || 'auto'};

  .col-card{
    background: 'white';
  }

  .banner < &, .section-mailer < & {
    height:inherit;
  }

  &.columnCopy:last-child{
  display: flex;
  align-items: end;
  }

  .__copy &.columnCopy{
  padding: 12em 0;
  }
`
const FlexDiv = styled.div`
display: flex;

& li:not(:last-of-type){
  margin-right: 15px;
}
.columns:nth-child(3) ${WidthDiv} &:last-child, &.__copy{
  padding: 0em 10em;
}

.columns ${WidthDiv} & ${WidthDiv}.col-card:first-child{
  border-right: 2px solid #9cdab6;
}
&.__cards, &.__copyImage,.banner ${WidthDiv} &{
  align-items: center;
}
&.__copyImage,&.column-items{
  padding: 0 7em;
}
&.__cards{
  padding: 0 4em;
}
.banner ${WidthDiv} &{
  padding: 7em;
}
footer ${StyleSection} ${WidthDiv} &:nth-child(2){
  padding: 3em 8em 0;
}
${(props) => {
  switch(props.$section){
    case 'alignCenter':
      return css`
      align-items: center;
      `
    case 'mailer':
      return css`
      height: inherit;
      align-items:center;
      padding: 0 10rem;
      width: 60%;
      min-width: 500px;
      margin: 0 auto;
      `
    case 'footer':
      return css`
      position: relative;
      font-size: 1.2rem;
      
      footer &:last-child{
        justify-content:space-between;
        list-style: none;
      }
      ${StyleSection.props == 'footer'} &:first-child{
        border-bottom: 1px solid black;
        margin: 0 8em;
        padding-bottom: 7em;
      }
    `
  }
}}
`
const TitleH1 = styled.h1`
  font-size: 52px;
  margin-bottom: 0.5em;
  font-weight: bold;
  
  &.main-lg{
    margin-bottom:0;
  }
  &.main-lg.hide-slide{
    position:absolute;
    left: 0;top: 0;
    right: auto;
    bottom: auto;
    transform: translate3d(0px, 100%, 0px);
  }

  &.main-lg.start{
    transform: translate3d(0px, 0%, 0px);
  }
  &.main-lg.slideIn-start.start.active{
    animation: ${titleSlideIn} 1.5s forwards;
  }
  &.main-lg.hide-slide.active{
    animation: ${titleSlideIn} 1.5s forwards;
  }
  &.main-lg.hide-slide.inactive.hide-slideUp{
    animation: ${titleSlideOut} 1.5s forwards;
  }
  &.main-lg.start.inactive{
    animation: ${titleSlideOut} 1.5s forwards;
  }
`
const MailerForm = styled.form`
  padding: 0 3em;
`
const StyledButton = styled.button`
  position:relative;
  border: none;
  letter-spacing: 0.15em;
  font-size: 0.7em;
  font-weight: bold;
  user-select:none;
  min-width: 23.222em;
  display: inline-flex;
  overflow: hidden;
  background: transparent;
  white-space: nowrap;
  padding-top: 3.5em;
  text-transform: uppercase;

  form &{
    padding-top: 1.5em;
  }
`
const InnerBtn = styled.div`
  z-index: 1;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 1.5em;
  width: 100%;
  border: 2px solid #77A68B;
  color:#77A68B;

  &:before{
  content: '';
  width: 101%;
  height: 108%;
  pointer-events: none;
  z-index: -1;
  position: absolute;
  top: -0.1em;
  bottom: 0;
  left: 0;
  right: 0;
  background: transparent;
  transition: transform 0.3s linear;
  transform: translateX(-100%);
  }

  ${StyledButton}:hover &{
    color: #fff;
  }

  ${StyledButton}:hover &:before{
    transition: transform 0.3s linear;
    transform: translateX(0);
    background: #77A68B;
  }
`