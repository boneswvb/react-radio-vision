import React, {useContext} from 'react'
import {Context} from '../containers/Context'
import BackOfBarFridges from '../components/BackOfBarFridges'

const BackOfBarFridgesContent = () => {
	const {allPhotos} = useContext(Context)

	const CommercialDeepFreezersContentImg = allPhotos.map(data => {
		return (
			data.type === "Back Of Bar Unit" ?
			<BackOfBarFridges 
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
			{CommercialDeepFreezersContentImg}			
		</div>
	)
}

export default BackOfBarFridgesContent
