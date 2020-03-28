import React from 'react'

const Context = React.createContext()

const ContextProvider = ({children}) => {
	return(
		<Context.Provider value={""}>
     {children}
    </Context.Provider>
	)
}

export {ContextProvider, Context}
