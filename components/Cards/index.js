import Button from '../Button';

const Cards = (props) => {

  let cardElements = [
    {
      titleText: <h1>I build &<br/>design stuff</h1>,
      subText: <p>Open source<br/>projects, web apps,<br/>and experimentals.</p>,
      buttonText: <Button link ='/Works' text='View My Work'/>,
    },
    {
      titleText: <h1>I write<br/>sometimes</h1>,
      subText: <p>About design,<br/>frontend dev,<br/>learning and life.</p>,
      buttonText: <Button link='/Blog' text='Read My Blog'/>,
    }
  ]

  return(
    <div className="section flex flex-center">
       {cardElements.map(card =>{
        return(
        <div className='card'>
          <article>
            <div>
              {card.titleText}
              {card.subText}
            </div>
              {card.buttonText}
          </article>
        </div>)
      })}
    </div>
  )
}

export default Cards;