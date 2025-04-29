import estilos from "./CampoDeBusca.module.css";
import Image from "next/image";
import Lupa from "../../../../public/lupa.png"

export default function CampoDeBusca() { 
  return(
  <section className={estilos.section_busca}>
  <Image src={Lupa} alt="lupa"/>
  <input />
</section>
)}