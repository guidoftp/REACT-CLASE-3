import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const Pagina2 = () =>{
    const [edad, setValor1] = useState ("21")
    const [edad2, setValor2] =useState ("22")
    const [nombre, setNombre] = useState("Guido")
    const [apellido, setApellido] = useState("Araya")
    const [eNombre,setENombre]=useState("")
    const Resultado = (valor:string)=>{

        
    }
    const validarNombre = (valor:string)=>{
        if(valor.length<4){
            setENombre("Debes ingresar 4 caracteres")
        }else{
        setENombre("")
        }
        setNombre(valor)
    }
    return (
        <>
        <h1> Registro </h1>
        <h2>Bienvenido {nombre} {apellido} </h2>
        <Form>
            <Form.Group>
            <Form.Label>Nombre: </Form.Label>
            <Form.Control 
                type='text' 
                placeholder='Ingrese su Nombre'
                onChange={(e)=>validarNombre(e.currentTarget.value)}
                />
            <Form.Text>
                {eNombre}
            </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Apellido: </Form.Label>
                <Form.Control type='text'
                 placeholder='Ingrese su Apellido'
                 onChange={(e)=>setApellido(e.currentTarget.value)} //cambiar en tiempo real el nombre y apellido en el form
                 />
            </Form.Group>

            <Form.Group>
            <Form.Label>Valor1: </Form.Label>
            <Form.Control type="text"
            placeholder='Ingrese Valor1'
            onChange={(e)=>setValor1(e.currentTarget.value)}
            />
            </Form.Group>

            <Form.Group>
            <Form.Label>Valor2: </Form.Label>
            <Form.Control type="text"
            placeholder='Ingrese Valor2: '
            onChange={(e)=>setValor2(e.currentTarget.value)}
            />
            </Form.Group>
            
            
            <Button type='button' variant='success'>Registrar</Button>
            <Button type='button' variant='primary'>Sumar</Button>
        </Form>



        </>
    );
}
export default Pagina2