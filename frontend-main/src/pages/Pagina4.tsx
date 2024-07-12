import { obtenerPersona } from '@/Firebase/Promesas'
import { Persona } from '@/Interfaces/interfaces'
import { query } from 'firebase/firestore';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";


const Pagina4 = () => {
    const [personas, setPersonas] = useState<Persona[]>([])
    useEffect(()=>{
        obtenerPersona().then((personas)=>{
            console.log(personas)
            setPersonas(personas)
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
                {
                    personas.map((p)=>{
                        return(
                        <tr>
                            <td>{p.nombre}</td>
                            <td>{p.apellido}</td>
                            <td>{p.rut}</td>
                            <td>{p.correo}</td>
                            <td>{p.fechaNacimiento}</td>
                            <td>{p.edad}</td>
                            <td>
                                <Link href={{pathname:"Pagina5",query:{key:p.key}}}>
                                    <Button variant='success'><FaRegEdit /></Button>
                                </Link>
                                    <Button variant='danger'><MdDeleteOutline /></Button>
                            </td>
                        </tr>
                    )})}
                
                
            </tbody>
        </Table>
    </>
  )
}

export default Pagina4
