import { initialStatePersona } from '@/EstadosIniciales/Persona'
import { modificarPersona, obtenerPersona } from '@/Firebase/Promesas'
import { Persona } from '@/Interfaces/interfaces'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export const Pagina5 = () => {
    const [persona, SetPersona] = useState<Persona>(initialStatePersona)
    const handlePersona = (name:string,value:string)=>{
        SetPersona({...persona,[name]:value})
    }
    const router = useRouter()
    useEffect(()=>{
        const key = router.query.key;
        if (typeof key == "string"){
            obtenerPersona(key).then((p)=>{
                if(p!=undefined){
                    setPersona(p)
                }else{
                    //devolver tabla
                }
    
        })
    }else{
        //Devolver la tabla
    }

    },[])

    const handleModificar =()=>{
        modificarPersona(persona).then(()=>{
            alert("Se ha modificado con exito")
        }).catch((e)=>}
            console.log(e)
            alert("Algo ocurrio")
        })
    }
  return (
    <>
      <Form>
            <Form.Group>
                <Form.Label> Nombre: </Form.Label>
                <Form.Control type="text" placeholder="Ingrese Nombre: "
                value={persona.nombre}
                name="nombre"
                onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label> Apellido: </Form.Label>
                <Form.Control type="text" placeholder="Ingrese Apellido: "
                value={persona.apellido}
                name="apellido"
                onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label> Correo: </Form.Label>
                <Form.Control type="text" placeholder="Ingrese Correo: "
                value={persona.correo}
                name="correo"
                onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label> Rut: </Form.Label>
                <Form.Control type="text" placeholder="Ingrese Rut: "
                value={persona.rut}
                name="rut"
                onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/>
                <Form.Text></Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label> FechaNacimiento: </Form.Label>
                <Form.Control type="date" placeholder="Fecha de nacimiento : "
                value={persona.fechaNacimiento}
                name="fechaNacimiento"
                onChange={(e)=>handlePersona(e.currentTarget.name,e.currentTarget.value)}/>
                <Form.Text></Form.Text>
            </Form.Group>

            <Button type="button" variant='primary'
            onClick={handleModificar}>Modificar </Button>
        </Form>
    </>
  )
}
export default Pagina5
