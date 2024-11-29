import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import { Comments as CommentComponent, CommentItem } from "../../../components"

//Controller
import { Articules } from "../../../api/articules"
import { Comments } from "../../../api/comments"
import { useAuth } from '../../../hooks'
import { map } from 'lodash'
const articulesController = new Articules()
const articulesComments = new Comments()

export function ArticuleView() {
    const params = useParams()
    const [articule, setArticule] = useState(null)
    const [comments, setComments] = useState(null)
    const { accessToken, user } = useAuth()

    

    function currencyFormatter({ currency, value }) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            minimumFractionDigits: 0,
            currency
        })
        return formatter.format(value)
    }

    useEffect(() => {
        (async () => {
            try {
                setArticule(null)
                setComments(null)
                const response = await articulesController.getArticulesById(accessToken, params.id)
                setArticule(response)
            } catch (error) {
                console.error(error);
            }
        })()
    }, [])
    useEffect(() => {
        (async () => {
            try {
                setComments(null)
                const responseComments = await articulesComments.getComments(accessToken, params.id)
                setComments(responseComments)
            } catch (error) {
                console.error(error);
            }
        })()
    }, [])
    return (
        <div className='mx-56 my-12 pt-16 border-2 rounded-lg bg-slate-50'>
            <section className='flex justify-center items-center'>
                <img className='h-96 w-3/4' src={articule?.imageUrl} alt='Articule_image' />
            </section>
            <div className='px-12 pb-12'>

                <section className='mt-12'>
                    <p className='font-semibold text-3xl border-b-2'>{articule?.title}</p>
                    <p className=''>{articule?.description}</p>
                    <br></br>
                    <div className='flex'>
                        <span className="material-symbols-outlined">
                            attach_money
                        </span>
                        {articule?.price}
                    </div>
                </section>
                <br></br>
                <section>
                    <p className='text-xl font-extralight'>Categoria del material: <span className='font-bold'>{articule?.category}</span> </p>
                    <p className='text-xl font-extralight'>Estado del material: <span className='font-bold'>{articule?.condition}</span> </p>
                </section>
                <section>
                    {articule?.userId === user.id ? (<><p className='font-bold text-3xl pt-5 border-t-2'>Comentarios</p>{map(comments, (com => (<CommentItem key={com.id} comment={com}/>)))}</>) :
                        (<CommentComponent />)}
                </section>
            </div>
        </div>
    )
}
