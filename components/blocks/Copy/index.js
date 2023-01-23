import React from "react"

const Copy = (prop) => {
  return(
   	<div className="section-head">
      <div className="container">
        {(prop.title != null) && <h1>{prop.title}</h1>}
        {(prop.sub != null) && <h3>{prop.sub}</h3>}
        {prop?.copy && <p>{prop.copy}</p>}
      </div>
		</div>
  )
}

export default Copy