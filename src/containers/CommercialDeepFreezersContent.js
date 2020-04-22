import React, {useContext} from 'react'
import {Context} from '../containers/Context'
import CommercialDeepFreezers from '../components/CommercialDeepFreezers'

const CommercialDeepFreezersContent = () => {
	const {allPhotos} = useContext(Context)

	const CommercialDeepFreezersContentImg = allPhotos.map(data => {
		return (
			data.type === "Commercial Deep Freezer" ?
			<CommercialDeepFreezers 
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
			{CommercialDeepFreezersContentImg}			
		</div>
	)
}

export default CommercialDeepFreezersContent
