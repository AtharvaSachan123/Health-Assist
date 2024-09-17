import React, { useCallback } from 'react'
import { search } from '../assets'
import CustomButton from './CustomButton'
import { usePrivy } from '@privy-io/react-auth'

const Navbar = () => {

    const { ready,authenticated,login,user,logout } = usePrivy();

    const handleLoginLogout=useCallback(()=>{
        if(authenticated){
            logout()
        }else{
            login().then((user)=>{ 
                if(user){
                    console.log(user);
                    
                    // login success
                }
             }
        ) }
    },[authenticated,login,logout,user])

  return (
    <div className='mb-[35px] flex flex-col-reverse justify-between gap-6 md:flex-row'>
            {/* Search Bar */}
            <div className='flex h-[52px] max-w-[458px] flex-row rounded-full bg-[#1c1c24] py-2 pl-4 pr-2 lg:flex-1'>

                <input
                type='text'
                placeholder='Search for anything'
                className='flex w-full bg-transparent font-epilogue tex-[14px] font-normal text-white outline-none placeholder:text-[#4b5264] '
                />
                <div className='flex h-full w-[72px] cursor-pointer items-center justify-center rounded-[20px] bg-[#4acd48]'>
                    <img 
                    src={search}
                    alt='search'
                    className='h-[15px] w-[15px] object-contain'/>
                </div>
            </div>



            {/* Profile */}
            <div className='hidden flex-row justify-end gap-2 sm:flex'>
            <CustomButton 
            btnType={'button'}
            title={authenticated ? 'Logout' : 'Login'}
            styles={authenticated?'bg-[#1dc071]':'bg-[#8c6dfd]'}
            handleClick={handleLoginLogout}
            
            />

            </div>

    </div>
  )
}

export default Navbar