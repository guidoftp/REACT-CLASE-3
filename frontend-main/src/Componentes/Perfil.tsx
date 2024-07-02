import React from 'react'
import { Permisos } from './Permisos'

interface Props{
    Nombre:string,
    Apellido:string,
    edad?:number
}
export const Perfil = (props:Props) => {
  return (
    <>
        <h1>Hola!</h1>
        <p>Nombre: {props.Nombre} </p>
        <p>Apellido: {props.Apellido} </p>
        <p>Edad: {props.edad} </p>

        {
            props.edad!=undefined && // && es como se cumple uno y el otro si y & uno no y el otro aun asi se cumple
            props.edad > 18 &&
            <>
            <p>Tienes permitido entrar</p>
            <Permisos permiso1="beber" permiso2="conducir"/>
            </>
        }

{
            props.edad!=undefined &&
            props.edad < 18 &&
            <>
            <p>No tienes permitido entrar</p>
            <Permisos permiso1="menor" permiso2="leche"/>
            </>
        }
    </>
  )
}