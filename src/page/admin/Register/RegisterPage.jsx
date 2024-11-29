import React, { useState } from 'react'
import { useForm } from "react-hook-form"

import LogoColor from "../../../assets/svg/LogoDef.svg"

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { Auth } from "../../../api"

const authController = new Auth()


export function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState('')


  const filesForm = (e) => {
    const files = e.target.files
    setImage(files)
  }
  const presetName = 'Market_Iush'
  const cloudName = 'dimsaa4tv'
  //Subir imagenes  a cloudinary
  const uploadImage = async (files) => {
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', presetName)

    setLoading(true)

    try {
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
      const params = {
        method: 'POST',
        body: data
      }
      const response = await fetch(url, params)
      const file = await response.json()
      //setImageURL(file.secure_url)
      setLoading(false)
      return file.secure_url
    } catch (error) {
      setLoading(false)
      throw error
    }
  }


  const onSubmit = handleSubmit(async (data) => {
    try {
      const uploadedImageURL = await uploadImage(image); // Obtén la URL directamente
      data['profilePicture'] = uploadedImageURL
      data['studentCode'] = Number(data['studentCode']);
      data['isAdmin'] = false
      await authController.register(data)
      toast.success("Usuario Registrado", {
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false,
        closeOnClick: false
      })

    } catch (error) {
      //console.log(error);
      toast.error(error.message, {
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false,
        closeOnClick: false
      })
    }
  })


  return (
    <div className=' bg-[#F3F4F6] w-full py-4 flex flex-col justify-center items-center'>
      <img className='h-56' src={LogoColor} alt='logo' />
      <p className='font-semibold text-5xl'>MarketIUSH</p>
      <p className='font-semibold text-2xl mt-5'>Iniciar Sesión</p>
      <div className='card w-1/2 h-1/2'>
        <form className='h-full flex flex-col gap-5 justify-center p-20 border-2 rounded-md' onSubmit={onSubmit}>
          <div className='flex flex-col'>
            <label className='font-medium'>Correo Electrónico</label>
            <input type="email" className='h-12 px-3 rounded-lg border-[2px] mt-2' placeholder='ejemplo@comunidad.iush.edu.co' {...register("email", { required: { value: true, message: "El email es obligatorio" } })} />
            {errors.email && (
              <span className='text-red-500'>{errors.email.message}</span>
            )}
          </div>
          <div className='flex flex-col'>
            <label className='font-medium'>Código de estudiante</label>
            <input type="studentCode" className='h-12 px-3 rounded-lg border-[2px] mt-2' placeholder='202410122' {...register("studentCode", { required: { value: true, message: "El código de estudiante es obligatorio" } })} />
            {errors.studentCode && (
              <span className='text-red-500'>{errors.studentCode.message}</span>
            )}
          </div>
          <div className='flex flex-col'>
            <label className='font-medium'>Nombre(s)</label>
            <input type="name" className='h-12 px-3 rounded-lg border-[2px] mt-2' placeholder='Jhon' {...register("name", { required: { value: true, message: "El nombre es obligatorio" } })} />
            {errors.name && (
              <span className='text-red-500'>{errors.name.message}</span>
            )}
          </div>
          <div className='flex flex-col'>
            <label className='font-medium'>Apellidos</label>
            <input type="lastname" className='h-12 px-3 rounded-lg border-[2px] mt-2' placeholder='Doe' {...register("lastname", { required: { value: true, message: "El apellido es obligatorio" } })} />
            {errors.lastname && (
              <span className='text-red-500'>{errors.lastname.message}</span>
            )}
          </div>
          <div className='flex flex-col'>
            <label className='font-medium'>Contraseña</label>
            <input type='password' className='h-12 px-3 rounded-lg border-[2px] mt-2' placeholder='************' {...register("password", { required: { value: true, message: "La contraseña es obligatoria" } })}></input>
            {errors.password && (
              <span className='text-red-500'>{errors.password.message}</span>
            )}
          </div>
          <div className='w-full flex flex-col border-[#00386D] border-2 border-dotted rounded-3xl p-5'>
            <input type='file' accept='image/*' name='file' onChange={(e) => filesForm(e)} />
            {errors.image && (
              <span className='text-red-500'>{errors.image.message}</span>
            )}
          </div>
          <button type='submit' className='p-2 bg-blue-600 text-white rounded-lg'>Registrar</button>
          <p>¿Ya tienes cuenta? <a href='/Login'><span className='text-blue-600'>Iniciar Sesión</span></a></p>
          <ToastContainer />
        </form>
      </div>
    </div>
  )
}
