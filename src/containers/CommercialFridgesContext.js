import React, {useContext} from 'react'
import {Context} from '../containers/Context'
import CommercialFridges from '../components/CommercialFridges'

const CommercialFridgesContext = () => {
	const {allPhotos} = useContext(Context)

	const CommercialFridgesImg = allPhotos.map(data => {
		return (
			data.type === "Commercial Fridge" ?
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
		<div className="tc productDisplay">
			{CommercialFridgesImg}			
		</div>
	)
}

export default CommercialFridgesContext
