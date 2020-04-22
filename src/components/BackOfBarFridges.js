import React from 'react'

import { Helmet } from 'react-helmet';

const BackOfBarFridges = ({id, url, modelNum, type, description, price, isFavorite}) => {
		return (
		<div>
		<Helmet>
      <meta name="robots" content="INDEX, FOLLOW" />
      <meta name="keywords" content="service of fridges, service of washing machines,service of dish washer, service of tv, service of hi-fi, 
        service of dvd, service of ice maker, service of inverters, service of tumble drier, insurance assessments, 
        lg, samsung, defy, electrolux, kelvinator, aeg, bosch, siemens, miele, smeg" />
      <meta name="description" content="Agents for LG household appliences and electronics - Radio Vision" />
      <meta name="description" content="A React.js application" />
      <meta name="subject" content="Repairs to digital goods" />
      <meta name="copyright"content="Lesawi Services CC" />
      <meta name="Classification" content="Business" />
      <meta name="author" content="Wim von Benecke, info@lesawi.co.za" />
      <meta name="designer" content="Wim von Benecke" />
      <title>Back Of Bar Fridges - Radio Vision</title>
    </Helmet>
			<div className="refpic1" id="refpic">
        <img className="freezpic" alt={type} src={url} />					
        <h4>Model num: {modelNum} <br /><br /> {type}</h4>	
        <p>Description: {description}</p>
        <p className="price">Price: {price}</p>
      </div>
		</div>
	)
}

export default BackOfBarFridges