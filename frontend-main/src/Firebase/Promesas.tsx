
import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore'
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
            edad:doc.data().edad,
            key:doc.id
        }  
        personas.push(persona)
    });
    return personas
}
export const obtenerPersona = async(key:string) => {
    const docRef = doc (db, "persona", key);
    const docSnap = await getDocs(docRef);

    if (docSnap.exists()) {
        let persona:Persona = {
            apellido:docSnap().apellido,
            correo:docSnap().correo,
            rut:docSnap().rut,
            fechaNacimiento:docSnap().fechaNacimiento,
            nombre:docSnap().nombre,
            edad:docSnap().edad,
            key:docSnap.id
        }
    }
}

export const modificarPersona = async (persona:Persona)=>{
    const ref = doc(collection(db,"persona"),persona.key)
    //con key incluida
    //await updateDoc(ref,{...persona})
    //sin key
    await updateDoc(ref,{
        nombre:persona.nombre,
        apellido:persona.apellido,
        rut:persona.rut,
        edad:persona.rut,
        fechaNacimiento: persona.fechaNacimiento,
        correo: persona.correo
    })
}