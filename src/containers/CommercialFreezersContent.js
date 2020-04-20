import React, {useContext} from 'react'
import {Context} from '../containers/Context'
import CommercialFreezers from '../components/CommercialFreezers'

const CommercialFreezersContent = () => {
	const {allPhotos} = useContext(Context)

	const CommercialFreezersContentImg = allPhotos.map(data => {
		return (
			data.type === "Comercial Freezer" ?
			<CommercialFreezers 
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
			{CommercialFreezersContentImg}			
		</div>
	)
}

export default CommercialFreezersContent
