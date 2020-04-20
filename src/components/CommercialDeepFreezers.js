import React from 'react'

const CommercialDeepFreezers = ({id, url, modelNum, type, description, price, isFavorite}) => {
		return (
		<div>
			<div className="refpic1" id="refpic">
        <h3>Model numumber: {modelNum} - {type}</h3>	
        <img className="freezpic" alt={type} src={url} />					
        <p>Description: {description}</p>
        <p>Price: {price}</p>
      </div>
		</div>
	)
}

export default CommercialDeepFreezers