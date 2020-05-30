import React from 'react'

import { Helmet } from 'react-helmet';

const DomesticFridges = ({id, url, modelNum, type, description, price, isFavorite}) => {
		return (
		<div>
		<Helmet>
      <meta name="robots" content="INDEX, FOLLOW" />
      <meta name="keywords" content="service of fridges, service of washing machines,service of dish washer, service of tv, service of hi-fi, 
        service of dvd, service of ice maker, service of inverters, service of tumble drier, insurance assessments, 
        lg, samsung, defy, electrolux, kelvinator, aeg, bosch, siemens, miele, smeg" />
      <meta name="description" content="Agents for LG household appliences and electronics - Radio Vision" />
      <meta name="subject" content="Repairs to digital goods" />
      <title>Domestic Fridges - Radio Vision</title>
    </Helmet>
			<div className="refpic" id="refpic">
        <img className="fridgepic" alt={type} src={url} />					
        <h3>Model num: {modelNum} <br /><br /> {type}</h3>	
        <p>Description: {description}</p>
        <p className="price">Price: {price}</p>
      </div>
		</div>
	)
}

export default DomesticFridges