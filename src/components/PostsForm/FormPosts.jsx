import React, { useState } from 'react'
import "./postForm.css"

import { useForm } from "react-hook-form"



//Toast
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { Articules } from '../../api/articules';
import { useAuth } from '../../hooks';
const postController = new Articules()

export function FormPosts() {

    const { accessToken } = useAuth()

    const { register, setValue, handleSubmit, formState: { errors } } = useForm()

    const [loading, setLoading] = useState(false)
    const [imageURL, setImageURL] = useState('')
    const [image, setImage] = useState('')

    //estado del check
    const [isChecked, setIsChecked] = useState(true);
    // Función para manejar el cambio en el checkbox
    const handleCheckboxChange = () => {
        // Cambiar el valor de isChecked a true si está desactivado (false), o a false si está activado (true)
        setIsChecked(prevState => !prevState);
        if (isChecked) setValue('price', '')
    };


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
            setImageURL(file.secure_url)
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }

    const onSubmit = handleSubmit(async (data) => {
        try {
            await uploadImage(image)
            data['imageUrl'] = imageURL
            data["isExchange"] = false
            data["isRequest"] = false
            data["exchange"] = ""
            data["price"] = 0
            console.log(imageURL);
            console.log(data);
            await postController.createPost(accessToken, data)
            toast.success("Publicación creada", {
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: false,
                closeOnClick: false
            })
        } catch (error) {
            toast.error(error.message, {
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: false,
                closeOnClick: false
            })
        }
    })
    return (
        <>
            <form className='flex justify-center items-center flex-col gap-5' onSubmit={onSubmit}>
                <div className='container'>
                    <label>Nombre del articulo</label>
                    <input type='text' className=' mt-2' {...register("title", { required: { value: true, message: "El nombre es obligatorio" } })}></input>
                    {errors.title && (
                        <span className='text-red-500'>{errors.title.message}</span>
                    )}
                </div>
                <div className='container'>
                    <label>Categoria</label>
                    <input type='text' className=' mt-2' {...register("category", { required: { value: true, message: "La categoria es obligatoria" } })}></input>
                    {errors.category && (
                        <span className='text-red-500'>{errors.category.message}</span>
                    )}
                </div>
                <div className='container'>
                    <label>Descripción</label>
                    <textarea className='h-12 p-3 rounded-lg border-[2px] mt-2 max-h-36 min-h-36' {...register("description")}></textarea>
                </div>
                <div className='container'>
                    <label>¿El producto es gratis?</label>
                    <label className="switch">
                        <input type="checkbox" onClick={handleCheckboxChange}  {...register("isFree")} />
                        <span className="slider"></span>
                    </label>
                </div>
                <div className='container'>
                    <label>Price</label>
                    <input type='number' className=' mt-2' disabled={!isChecked} ></input>
                </div>
                <div className='container'>
                    <label>Estado</label>
                    <select
                        defaultValue=""
                        className='mt-2'
                        {...register("condition", { required: { value: true, message: "El estado es obligatorio" } })}
                    >
                        <option value="" disabled>Seleccione una opción</option>
                        <option value="NUEVO">Nuevo</option>
                        <option value="como_nuevo">Como Nuevo</option>
                        <option value="regular">Regular</option>
                        <option value="malo">Malo</option>
                    </select>
                    {errors.condition && (
                        <span className='text-red-500'>{errors.condition.message}</span>
                    )}
                </div>
                <p className=''>{isChecked}</p>
                <div className='w-full flex flex-col border-[#00386D] border-2 border-dotted rounded-3xl p-5'>
                    <input type='file' accept='image/*' name='file' onChange={(e) => filesForm(e)} />
                    {errors.image && (
                        <span className='text-red-500'>{errors.image.message}</span>
                    )}
                    <div>
                        <img src={imageURL} />
                    </div>
                </div>
                <button type='submit' className='w-full p-2 bg-[#00386D] text-white rounded-lg'>{loading ? (<h1>Load</h1>) : ("Publicar")}</button>
            </form>
            <ToastContainer />
        </>
    )
}