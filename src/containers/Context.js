import React, {useState, useEffect} from "react"
import productsPicLinksAndData from '../containers/productsPicLinksAndData'

const Context = React.createContext()

const ContextProvider = ({children}) => {
	const [allPhotos, setAllPhotos] = useState([])

	useEffect(() => {		
			setAllPhotos(productsPicLinksAndData)		
	},[])
	
	return(
		<Context.Provider value={{
			allPhotos
		}}>
     {children}
    </Context.Provider>
	)
}

export {ContextProvider, Context}
