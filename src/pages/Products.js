import React from 'react'
import DomesticFridgesContent from '../containers/DomesticFridgesContent'
import DomesticFreezersContent from '../containers/DomesticFreezersContent'
import CommercialFridgesContext from '../containers/CommercialFridgesContext'

const Products = () => {
	return(
		<div className="tc">
			<h1>Domestic Fridges</h1>
			<DomesticFridgesContent />
				<hr />
			<h1>Domestic Freezers</h1>
			<DomesticFreezersContent />
				<hr />
			<h1>Commercial Fridges</h1>
			<CommercialFridgesContext />
				<hr />
			<h1>Commercial Freezers</h1>
				<hr />
			<h1>Commercial Deep Freezers</h1>
				<hr />
			<h1>Icecream Freezers</h1>
				<hr />
			<h1>Back Of Bar Fridges</h1>
	
		</div>
	)
}

export default Products