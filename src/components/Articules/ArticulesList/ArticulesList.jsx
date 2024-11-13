import React, { useEffect, useState } from 'react'
import { ArticuleCard } from '../ArticuleCard/ArticuleCard'
import { map } from 'lodash'


import { Articules } from "../../../api/articules"
import { useAuth } from '../../../hooks'

const postsController = new Articules()

/* const list = [
  {
    id: 1,
    img: "",
    articuleName: "Libro",
    price: 100,
    description: "Esta es la descripción del articulo"
  },
  {
    id: 2,
    img: "",
    articuleName: "Diccionario",
    price: 200,
    description: "Esta es la descripción del articulo"
  },
  {
    id: 3,
    img: "",
    articuleName: "Lapiz",
    price: 300,
    description: "Esta es la descripción del articulo"
  },
] */

export function ArticulesList() {
  const { accessToken } = useAuth()

  const [list, setList] = useState([])

  //get API
  useEffect(() => {
    (async () => {
      try {
        setList(null)
        const response = await postsController.getArticules(accessToken)
        setList(response)
      } catch (error) {
        console.error(error);
      }
    })()
  }, [])
  return (
    <div className='grid grid-cols-3 gap-9 px-36 pt-9'>
      {map(list, (art) => (
        <ArticuleCard key={art.id} articule={art} />
      ))}
    </div>
  )
}
