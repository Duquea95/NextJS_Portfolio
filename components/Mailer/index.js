import Button from '../Button';
import { useState, useRef} from 'react'

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

  let topLeft, topRight, bottom;

  {formCopy.map(copy  =>{
    if(copy.labelFor=='message'){
      bottom =
        <div className='justify-center'>
          <div className='row' key={'form-row__'+copy.labelFor}>
            <label htmlFor={copy.labelFor}>{copy.labelCopy}</label>
            <textarea ref={copy.inputRef} type={copy.inputType} placeholder={copy.inputPlaceholder} name={copy.labelFor} onFocus={focusLabelColor} onBlur={blurLabelColor}/>
          </div>
        </div>;
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

  let topInputs = <div className='flex flex-between'>{topLeft}{topRight}</div>

  const RenderButton = () =>{
    if(sendMail != true) return <Button text={'Shoot'} mailerClicked={mailerClicked} sendMail={sendMail}/>

    return <Button text={'Thank you!'} mailerClicked={mailerClicked} sendMail={sendMail}/>
  }

  return(
    <div className='section mailer flex flex-center'>
      <div>
        <div className='form-copy' style={{textAlign: 'center',marginBottom: 5+'rem'}}>
          <h1>Send me a message!</h1>
          <p>Got a question or proposal, or just want <br/> to say hello? Go ahead.</p>
        </div>
        <form>
          {topInputs}
          {bottom}
          <div className='justify-center'>
            {sendMail ? 
              <Button text={'Thank you!'} mailerClicked={mailerClicked} sendMail={sendMail}/> :
              <Button text={'Shoot!'} mailerClicked={mailerClicked} sendMail={sendMail}/>
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default Mailer

  // const RenderButton = () =>{
  //   if(sendMail != true) return <Button text={'Shoot'} mailerClicked={mailerClicked} sendMail={sendMail}/>

  //   return <Button text={'Thank you!'} mailerClicked={mailerClicked} sendMail={sendMail}/>
  // }