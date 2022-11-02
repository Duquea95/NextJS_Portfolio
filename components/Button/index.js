const Button = (props) => {
  const handleMailer = (e) =>{
    e.preventDefault();
    props?.mailerClicked();
  }
  return(
    <div>
      <button>
        <a href={props?.link} onClick={props?.mailerClicked && handleMailer} className={props?.sendMail ? 'mail-sent' : ''}>
          <span>{props.text}</span>
        </a>
      </button>
    </div>
  )
}

export default Button;