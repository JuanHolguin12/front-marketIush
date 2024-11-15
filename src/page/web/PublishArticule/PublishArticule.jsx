import React from 'react'
import { FormPosts } from '../../../components'



export function PublishArticule() {
    return (
        <div className='p-16 flex flex-col justify-center items-center'>
            <p className='text-3xl'>Publicar Artículo</p>
            <div className='w-3/6'>
                <FormPosts />
            </div>
        </div>
    )
}
