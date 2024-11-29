import React, { useEffect, useState } from 'react'
import { map, size } from 'lodash'

import { ArticulesItem } from "../../components"
import { Articules } from "../../api/articules"
import { useAuth } from '../../hooks'

const postsController = new Articules()
export function MyArticules() {
    const { user, accessToken } = useAuth()
    console.log(user.id);
    const [list, setList] = useState([])

    //get API
    useEffect(() => {
        (async () => {
            try {
                setList(null)
                const response = await postsController.getMyArticules(accessToken, user.id)
                setList(response)
                console.log(response);

            } catch (error) {
                console.error(error);
            }
        })()
    }, [])

    if (size(list) === 0) return "No tienes articulos para publicados"

    return (
        <div className=' px-36 pt-9'>
            {map(list, (art) => (
                <ArticulesItem key={art.id} articule={art}></ArticulesItem>
            ))}
        </div>
    )
}