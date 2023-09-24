import { URLContext } from '../context/URLContext'
import { useContext } from 'react'

export const useUrlContext = () => {
  const context = useContext(URLContext)

  if (!context) {
    throw Error('useUrlContext must be used inside an URLContextProvider')
  }

  return context
}