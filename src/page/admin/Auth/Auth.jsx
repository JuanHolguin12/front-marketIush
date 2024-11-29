import React from 'react'
import LogoColor from "../../../assets/svg/LogoDef.svg"


//Components
import { LoginForm } from "../../../components"

export function Auth() {
  return (
    <div className=' bg-[#F3F4F6] w-full max-lg:h-full xl:min-h-screen py-4 flex flex-col justify-center items-center'>
      <img className='h-56' src={LogoColor} alt='logo' />
      <p className='font-semibold text-5xl'>MarketIUSH</p>
      <p className='font-semibold text-2xl mt-5'>Iniciar Sesión</p>
      <div className='card w-1/2 h-1/2'>
        <LoginForm />
      </div>
    </div>
  )
}
