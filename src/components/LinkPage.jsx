import React from 'react'
import { useUrlContext } from '../hooks/useUrlContext'
import URLdetail from './URLdetail'
import { useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

export const LinkPage = () => {
    const { Urls, dispatch } = useUrlContext();
    const { user } = useAuthContext();
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const finalUrl = baseUrl + '/user/' + `${user.userID}`

  useEffect(() => {
    const fetchURLS = async () => {
      const response = await fetch(
        finalUrl,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      const json = await response.json();
      const flag =0
      if(json.length==0){
       
      }
      if (response.ok) {
        dispatch({ type: "SET_URLS", payload: json });

      }
    };

    if (user) {
      try {
        fetchURLS();
      } catch (error) {
        console.log("Server down")
      }
      
    }
  }, [dispatch, user]);

  return (
    <div className='bg-darkpurp w-full h-full'>
      <div className='flex justify-center text-2xl text-light pt-4 md:text-3xl font-bold uppercase font-[inter] '> Your Links</div>
        <div className='md:p-4 justify-centre md:pt-8 pt-4 flex flex-row w-full flex-wrap'>
        
        {Urls && Urls.map((URL) => (
            
                <URLdetail key={URL._id} URL={URL} />
            
          
        ))}
        
        </div>
    </div>
  )
}
