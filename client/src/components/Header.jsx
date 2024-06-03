import {  LogIn } from 'lucide-react'
import React from 'react'
import Login from '../pages/auth/Login'

function Header() {

  const [showLogin, setShowlogin] = React.useState(false)
  return (
    <div className='w-full bg-white/90 shadow-sm sticky top-0 h-[60px] flex items-center  justify-between contain z-50 '>

        <h1 className='text-xl font-bold text-green-600'>Guilty<span className=' text-black font-bold'>Domain</span> </h1>
        

        <button className='bg-green-600 flex gap-x-1 p-[5px] rounded-md text-white text-md font-bold hover:bg-green-500 transition-all' onClick={()=> setShowlogin(true)}>
            Login <LogIn/>
        </button>

      <Login setShowlogin={setShowlogin} showLogin={showLogin} />
        
       
    </div>
  )
}

export default Header