import React from 'react'
import { useForm } from "react-hook-form"

import { Auth } from "../../api"
import { useAuth } from "../../hooks"

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const authController = new Auth()

export function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { login } = useAuth()


    const onSubmit = handleSubmit(async (data) => {
        try {
            const r = await authController.login(data)
            authController.setAccessToken(r.access_token, data.email)
            login(r.access_token, data.email)
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
        <form className='h-full flex flex-col gap-5 justify-center p-20 border-2 rounded-md' onSubmit={onSubmit}>
            <div className='flex flex-col'>
                <label className='font-medium'>Correo Electronico</label>
                <input type="email" className='h-12 px-3 rounded-lg border-[2px] mt-2' placeholder='ejemplo@comunidad.iush.edu.co' {...register("email", { required: { value: true, message: "El email es obligatorio" } })} />
                {errors.email && (
                    <span className='text-red-500'>{errors.email.message}</span>
                )}
            </div>
            <div className='flex flex-col'>
                <label className='font-medium'>Contraseña</label>
                <input type='password' className='h-12 px-3 rounded-lg border-[2px] mt-2' placeholder='************' {...register("password", { required: { value: true, message: "La contraseña es obligatoria" } })}></input>
                {errors.email && (
                    <span className='text-red-500'>{errors.password.message}</span>
                )}
                <a href='#'><p className='text-blue-600'>¿Has olvidado tu contraseña?</p></a>
            </div>
            <button type='submit' className='p-2 bg-blue-600 text-white rounded-lg'>Iniciar Sesión</button>
            <ToastContainer/>
        </form>
    )
}
