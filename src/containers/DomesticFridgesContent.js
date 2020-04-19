import React, {useContext} from 'react'
import {Context} from '../containers/Context'
import DomesticFridges from '../components/DomesticFridges'

const DomesticFridgesContent = () => {
	const {allPhotos} = useContext(Context)

const DomesticFridgesImg = allPhotos.map(data => {
	return (
		data.type === "Domestic Fridges" ?
		<DomesticFridges 
			key={data.id}
			id={data.id}
			url={data.url}
			modelNum={data.modelNum}
			type={data.type}
			description={data.description}
			price={data.price}
			isFavorite={data.isFavorite}
			alt={data.type}
		/>
		: null
	)
})

	return(
		<div className="tc">
			{DomesticFridgesImg}			
		</div>
	)
}

export default DomesticFridgesContent