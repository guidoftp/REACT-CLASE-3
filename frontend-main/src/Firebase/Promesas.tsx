
import { addDoc, collection, doc, getDocs } from 'firebase/firestore'
import { db } from "./Firebase";
import { Persona } from '@/Interfaces/interfaces';

export const registrarPersona = async(persona:Persona)=>{
    const docRef = await addDoc(collection(db,"persona"),persona);
}
export const obtenerPersona = async()=>{
        const querySnapshot = await getDocs (collection(db,"persona"));
        let personas:Persona[] = []
    querySnapshot.forEach((doc) => {
        let persona:Persona ={
            apellido:doc.data().apellido,
            correo:doc.data().correo,
            rut:doc.data().rut,
            fechaNacimiento:doc.data().fechaNacimiento,
            nombre:doc.data().nombre,
            edad:doc.data().edad
        }  
        personas.push(persona)
    });
    return personas
}