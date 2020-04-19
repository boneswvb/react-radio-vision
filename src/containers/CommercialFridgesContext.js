import React, {useContext} from 'react'
import {Context} from '../containers/Context'
import CommercialFridges from '../components/CommercialFridges'

const CommercialFridgesContext = () => {
	const {allPhotos} = useContext(Context)

	const DomesticFreezerImg = allPhotos.map(data => {
		return (
			data.type === "Commercial Fridges" ?
			<CommercialFridges 
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
	}
)

	return(
		<div className="tc">
			{DomesticFreezerImg}			
		</div>
	)
}

export default CommercialFridgesContext
