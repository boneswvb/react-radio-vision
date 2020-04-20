import React from 'react'
import DomesticFridgesContent from '../containers/DomesticFridgesContent'
import DomesticFreezersContent from '../containers/DomesticFreezersContent'
import CommercialFridgesContext from '../containers/CommercialFridgesContext'
import CommercialFreezersContent from '../containers/CommercialFreezersContent'
import CommercialDeepFreezersContent from '../containers/CommercialDeepFreezersContent'
import IcecreamFreezersContent from '../containers/IcecreamFreezersContent'
import BackOfBarFridgesContent from '../containers/BackOfBarFridgesContent'

const Products = () => {
	return(
		<div className="tc">
			<h1>Domestic Fridges</h1>
			<DomesticFridgesContent />
				<hr />
			<h1>Domestic Freezers</h1>
			<DomesticFreezersContent />
			<h1>CommercialFridgesContext</h1>
				<hr />
			<h1>Commercial Fridges</h1>
			<CommercialFridgesContext />
				<hr />
			<h1>Commercial Freezers</h1>
			<CommercialFreezersContent />
				<hr />
			<h1>Commercial Deep Freezers</h1>
			<CommercialDeepFreezersContent />
				<hr />
			<h1>Icecream Freezers</h1>
			<IcecreamFreezersContent />
				<hr />
			<h1>Back Of Bar Fridges</h1>
			<BackOfBarFridgesContent/>
		</div>
	)
}

export default Products