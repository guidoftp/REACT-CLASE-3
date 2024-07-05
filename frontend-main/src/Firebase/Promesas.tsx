
import { addDoc, collection } from 'firebase/firestore'
import { db } from "./Firebase";
import { Persona } from '@/Interfaces/interfaces';

export const registrarPersona = async(persona:Persona)=>{
    const docRef = await addDoc(collection(db,"persona"),persona);}