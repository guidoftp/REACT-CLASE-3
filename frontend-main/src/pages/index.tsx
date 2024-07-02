import { Perfil } from "@/Componentes/Perfil";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <nav>
        <Link href="/Pagina1">Pagina 1</Link> 
        <Link href="/Pagina2">Registrar</Link> 

      </nav>
    <Perfil Nombre="Guido Andres" Apellido="Araya Gutierrez" edad={21}/>
    <Perfil Nombre="Luis Sebastian" Apellido="Araya Moreno" edad={10}/>
    </>
  );
}