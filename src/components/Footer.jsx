import React from 'react'
import logo from "../Assets/logo.png"
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'
import Button from '../buttons/Button'

const Footer = () => {

  const {user} = useAuthContext()
  return (
    <div className="text-gray bg-light py-0 font-[inter] text-darkpurp lg:py-16">

  <div className="mx-auto max-w-7xl px-8 pb-10 2xl:px-0">
    <div className="grid lg:grid-cols-6 gap-8">
     
      <div className="col-span-2">
        <div className="h-20 w-20 rounded">
            
        </div>
        <h2 className="mt-4 text-3xl text-darkpurp font-extrabold">
        <img className='w-40 ' src={logo} alt="" /></h2>
        <p className="font-semibold mt-2">
          SAY GOODBYE TO LONG URLS
        </p>
      </div>

      <div className="col-span-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  
        <div>
          <h3 className="font-bold text-lg uppercase tracking-wider">AUTHENTICATION</h3>
          <nav className="mt-4 space-y-3 font-semibold">
            <Link to ='/signin' className="block hover:text-lightpurp hover:underline">
              LOGIN
            </Link>
            <Link to= '/register' className="block hover:text-lightpurp hover:underline">
              REGISTER
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="font-bold text-lg uppercase tracking-wider">LINKS</h3>
          <nav className="mt-4 space-y-3 font-semibold">
            <a href='/' className="block hover:text-lightpurp hover:underline">
              CREATE NEW URL
            </a>
            {user && (
              <Link to ='/link' className="block hover:text-lightpurp hover:underline">
              YOUR LINKS
            </Link>
            )}
            
            <Link to='/whynourl' className="block hover:text-lightpurp hover:underline">
              WHY NO URL
            </Link>
            <Link to='/aboutus' className="block hover:text-lightpurp hover:underline">
              ABOUT US
            </Link>
            
          </nav>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h3 className="font-bold text-lg uppercase tracking-wider">
            Subcribe to our newsletter
          </h3>
          <form className="mt-3">
            <input type="email" placeholder="Your email" className="block w-full rounded py-2 px-3" />
            <button type="submit" className="mt-2 block w-full rounded  py-2.5 text-white">
              <Button text="SUBSCRIBE"></Button>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>


  <div className=" pt-4 pb-4 text-center">
    Copyright &copy; NOURL
  </div>
</div>
  )
}

export default Footer