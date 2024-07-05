import { obtenerPersona } from '@/Firebase/Promesas'
import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'

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
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Rut</th>
                    <th>Correo</th>
                    <th>FechaNacimiento</th>
                    <th>Edad</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </Table>
    </>
  )
}

export default Pagina4
