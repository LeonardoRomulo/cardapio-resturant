import estilos from "./CampoDeBusca.module.css";
import Image from "next/image";
import Lupa from "../../../../public/lupa.png"

export default function CampoDeBusca({handleBuscarProduto, textoBusca}) { 
  return(
  <section className={estilos.section_busca}>
  <Image src={Lupa} alt="lupa"/>
  <input
  className={estilos.input}
  type="text"
  placeholder="Pesquise aqui um dos pratos do nosso cardápio" 
  value={textoBusca}
  onChange = { (event) => handleBuscarProduto(event.target.value)}
  />
</section>
)}