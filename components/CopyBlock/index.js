const CopyBlock = (props) => {
  return(
    <section className="CopyBlock">
      <div className="content">
        <h2>{props.title}</h2>
        <p>
          {props.copy}
        </p>
      </div>
    </section>
  )
}

export default CopyBlock