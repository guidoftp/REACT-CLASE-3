import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export const Pagina5 = () => {
    const router = useRouter()
    useEffect(()=>{
        console.log(router.query)
    },[])
  return (
    <>
      
    </>
  )
}
export default Pagina5
