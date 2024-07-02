import React from 'react' //RAFC

interface Props{
    permiso1:string,
    permiso2:string
}
export const Permisos = (props:Props) => {
  return (
    <>
      <ul>
        <li>Permiso1: {props.permiso1} </li>
        <li>Permiso2: {props.permiso2} </li>
      </ul>
    </>
  )
}
