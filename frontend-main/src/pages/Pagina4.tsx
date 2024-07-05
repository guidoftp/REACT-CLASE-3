import { obtenerPersona } from '@/Firebase/Promesas'
import React, { useEffect } from 'react'

const Pagina4 = () => {
    useEffect(()=>{
        obtenerPersona().then((personas)=>{
            console.log(personas)
        }).catch((e)=>{
            alert("No se logra cargar los datos")
            console.log(e)
        })
    },[])
  return (
    <>

    </>
  )
}

export default Pagina4
