import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

const URLdetail = ({URL}) => {
    const urlredirect = URL.redirectURL
    const handleClick =() =>{
        window.open(`${urlredirect}`)
    }
    const {user} = useAuthContext()
  return (
   <div className='flex flex-col justify-between bg-light md:mx-20 mx-6 mb-4 p-2 md:p-4 w-full rounded text-[inter] md:font-semibold '>
    
    <div className='font-bold text-xl cursor-pointer ' onClick={handleClick}> nourl.com/{URL.shortId} </div>
    <div className='cursor-pointer' onClick={handleClick}> {URL.redirectURL}</div> 
    <div> Created by {user.username}</div>
   
   
    
   </div>

  )
}

export default URLdetail