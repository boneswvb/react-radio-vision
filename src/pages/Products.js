import React from 'react'

import { Helmet } from 'react-helmet';

import DomesticFridgesContent from '../containers/DomesticFridgesContent'
import DomesticFreezersContent from '../containers/DomesticFreezersContent'
import CommercialFridgesContext from '../containers/CommercialFridgesContext'
import CommercialFreezersContent from '../containers/CommercialFreezersContent'
import CommercialDeepFreezersContent from '../containers/CommercialDeepFreezersContent'
import IcecreamFreezersContent from '../containers/IcecreamFreezersContent'
import BackOfBarFridgesContent from '../containers/BackOfBarFridgesContent'

const Products = () => {
	return(
		<div className="products">
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
      <title>New Fridges & Freezers For Sale - Radio Vision</title>
    </Helmet>
		<h1>Domestic Fridges</h1>
	    <div>
				<DomesticFridgesContent />
	    </div>
		<h1>Domestic Freezers</h1>
	    <div>
				<DomesticFreezersContent />
	    </div>
			<h1>Commercial Fridges</h1>
	    <div>
				<CommercialFridgesContext />
	    </div>
			<h1>Commercial Freezers</h1>
	    <div>
				<CommercialFreezersContent />
	    </div>
		<h1>Commercial Deep Freezers</h1>
	    <div>
				<CommercialDeepFreezersContent />
	    </div>
			<h1	>Icecream Freezers</h1>
	    <div>
				<IcecreamFreezersContent />
	    </div>
			<h1>Back Of Bar Fridges</h1>
	    <div>
				<BackOfBarFridgesContent/>
	    </div>
		</div>
	)
}

export default Products