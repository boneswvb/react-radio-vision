import React from 'react'

const DomesticFridges = ({id, url, modelNum, type, description, price, isFavorite}) => {
		return (
		<div>
			<div className="refpic" id="refpic">
        <h3>Model numumber: {modelNum} - {type}</h3>	
        <img className="fridgepic" alt={type} src={url} />					
        <p>Description: {description}</p>
        <p>Price: {price}</p>
      </div>
		</div>
	)
}

export default DomesticFridges