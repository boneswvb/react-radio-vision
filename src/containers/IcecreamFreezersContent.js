import React, {useContext} from 'react'
import {Context} from '../containers/Context'
import IcecreamFreezers from '../components/IcecreamFreezers'

const IcecreamFreezersContent = () => {
	const {allPhotos} = useContext(Context)

	const IcecreamFreezersContentImg = allPhotos.map(data => {
		return (
			data.type === "Icecream Freezer" ?
			<IcecreamFreezers 
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
			{IcecreamFreezersContentImg}			
		</div>
	)
}

export default IcecreamFreezersContent
