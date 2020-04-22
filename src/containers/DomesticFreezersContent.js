import React, {useContext} from 'react'
import {Context} from '../containers/Context'
import DomesticFreezers from '../components/DomesticFreezers'

const DomesticFreezersContent = () => {
	const {allPhotos} = useContext(Context)

	const DomesticFreezerImg = allPhotos.map(data => {
		return (
			data.type === "Domestic Freezer" ?
			<DomesticFreezers 
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
			{DomesticFreezerImg}			
		</div>
	)
}

export default DomesticFreezersContent
