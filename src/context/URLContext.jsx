import { createContext, useReducer } from 'react'

export const URLContext = createContext()

export const URLReducer = (state,action) =>{
    switch(action.type){
        case 'CREATE_URL':
            return {
                Urls:[action.payload,...state.Urls]
            }
        case 'SET_URLS':
            return {
                Urls:action.payload
            }
            default:
                return state
    }

}

export const URLProvider =({children}) =>{
    const [state, dispatch] = useReducer(URLReducer, {
        Urls: null
      })
      
    
      return (
        <URLContext.Provider value={{...state, dispatch}}>
          { children }
        </URLContext.Provider>
      )
}