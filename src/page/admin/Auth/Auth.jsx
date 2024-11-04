import React from 'react'
import LogoColor from "../../../assets/svg/LogoDef.svg"

export function Auth() {
  return (
    <div className=' bg-[#F3F4F6] w-full h-screen flex flex-col justify-center items-center'>
      <img className='h-56' src={LogoColor} alt='logo' />
      <p className='font-semibold text-5xl'>MarketIUSH</p>
      <p className='font-semibold text-2xl mt-5'>Iniciar Sesión</p>
      <div className='card w-1/2 h-1/2'>
        <form className='h-full flex flex-col gap-5 justify-center p-20 border-2 rounded-md'>
          <div className='flex flex-col'>
            <label className='font-medium'>Correo Electronico</label>
            <input className='h-12 px-3 rounded-lg border-[2px] mt-2' placeholder='ejemplo@comunidad.iush.edu.co'></input>
          </div>
          <div className='flex flex-col'>
            <label className='font-medium'>Contraseña</label>
            <input className='h-12 px-3 rounded-lg border-[2px] mt-2' ></input>
            <a href='#'><p className='text-blue-600'>¿Has olvidado tu contraseña?</p></a>
          </div>
          <button className='p-2 bg-blue-600 text-white rounded-lg'>Iniciar Sesión</button>
        </form>
      </div>
    </div>
  )
}
