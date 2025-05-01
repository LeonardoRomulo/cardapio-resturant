import { useState } from "react";
import estilos from "./Categorias.module.css";
import Image from "next/image";
import Entradas from "../../../../public/entrada.png";
import Massas from "../../../../public/massa.png";
import Carnes from "../../../../public/carne.png";
import Bebidas from "../../../../public/bebidas.png";
import Saladas from "../../../../public/salada.png";
import Sobremesas from "../../../../public/sobremesa.png";

export default function Categorias({handleFiltrarCategorias}) {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Entradas");
  const handleClick = (categoria) => {
    setCategoriaSelecionada(categoria);
    handleFiltrarCategorias(categoria);
  }

  return (
    <section className={estilos.categorias}>
      <button className ={`${estilos.btn} ${ categoriaSelecionada === "Entradas" ? estilos.selecionado : ""}`} onClick={() => handleClick("Entradas")}>
        <Image src={Entradas} alt="entradas "/> Entradas
        </button>
      <button className = {`${estilos.btn} ${categoriaSelecionada === "Massas" ? estilos.selecionado : ""}`} onClick={() => handleClick("Massas")}>
        <Image src={Massas} alt="massas "/> Massas
      </button>
      <button className = {`${estilos.btn} ${ categoriaSelecionada === "Carnes" ? estilos.selecionado : ""}`} onClick={() => handleClick("Carnes")}>
        <Image src={Carnes} alt="carnes "/> Carnes
      </button>
      <button className = {`${estilos.btn} ${ categoriaSelecionada === "Bebidas" ? estilos.selecionado : ""}`} onClick={() => handleClick("Bebidas")}>
        <Image src={Bebidas} alt="bebidas "/> Bebidas
      </button>
      <button className = {`${estilos.btn} ${ categoriaSelecionada === "Saladas" ? estilos.selecionado : ""}`} onClick={() => handleClick("Saladas")}>
        <Image src={Saladas} alt="saladas" />Saladas
      </button>
      <button className = {`${estilos.btn} ${ categoriaSelecionada === "Sobremesas" ? estilos.selecionado : ""}`} onClick={() => handleClick("Sobremesas")}>
        <Image src={Sobremesas} alt="sobremeas "/> Sobremesas
      </button>
    </section>
  );
}
