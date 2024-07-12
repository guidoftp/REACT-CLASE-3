import React, { useState } from 'react'
import  Form from 'react-bootstrap/Form'
import  Button from 'react-bootstrap/Button'
import { Persona } from '@/Interfaces/interfaces'
import { initialStatePersona } from '@/EstadosIniciales/Persona'
import { registrarPersona } from '@/Firebase/Promesas'


const Pagina3 = () => {
    const [persona, SetPersona] = useState<Persona>(initialStatePersona)
    const handlePersona = (name:string,value:string)=>{
        SetPersona({...persona,[name]:value})
        
    }
    const handleRegistrar = ()=>{
        registrarPersona(persona).then(()=>{
            alert("Se registro con exito!")
        }).catch((e)=>{
            alert("Algo ocurrio")
            console.log(e)
        })
    }
  return (
    <>
        <Form>
            <Form.Group>
                <Form.Label> Nombre: </Form.Label>
                <Form.Control type="text" placeholder="Ingrese Nombre: "
                name="nombre"
                onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label> Apellido: </Form.Label>
                <Form.Control type="text" placeholder="Ingrese Apellido: "
                name="apellido"
                onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label> Correo: </Form.Label>
                <Form.Control type="text" placeholder="Ingrese Correo: "
                name="correo"
                onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label> Rut: </Form.Label>
                <Form.Control type="text" placeholder="Ingrese Rut: "
                name="rut"
                onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label> FechaNacimiento: </Form.Label>
                <Form.Control type="date" placeholder="Fecha de nacimiento : "
                name="fechaNacimiento"
                onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/>
                <Form.Text></Form.Text>
            </Form.Group>

            <Button type="button" variant='primary'>Registrar </Button>
        </Form>
    </>
  )
}

export default Pagina3
