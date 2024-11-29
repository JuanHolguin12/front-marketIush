import React from 'react'

export function Comments() {
    return (
        <div className='mt-5'>
            <form>
                <textarea className='min-h-56 max-h-56 min-w-full p-6' placeholder='Escribe un comentario'></textarea>
                <button className='w-full p-2 bg-[#00386D] text-white rounded-lg'>Comentar</button>
            </form>
        </div>
    )
}
