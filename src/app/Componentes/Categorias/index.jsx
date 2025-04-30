import estilos from "./Categorias.module.css";
import Image from "next/image";
import Entradas from "../../../../public/entrada.png";
import Massas from "../../../../public/massa.png";
import Carnes from "../../../../public/carne.png";
import Bebidas from "../../../../public/bebidas.png";
import Saladas from "../../../../public/salada.png";
import Sobremesas from "../../../../public/sobremesa.png";

export default function Categorias({handleFiltrarCategorias}) {
  return (
    <section className={estilos.categorias}>
      <button onClick={() => handleFiltrarCategorias("Entradas")}>
        <Image src={Entradas} alt="entradas "/> Entradas
        </button>
      <button onClick={() => handleFiltrarCategorias("Massas")}>
        <Image src={Massas} alt="massas "/> Massas
      </button>
      <button onClick={() => handleFiltrarCategorias("Carnes")}>
        <Image src={Carnes} alt="carnes "/> Carnes
      </button>
      <button onClick={() => handleFiltrarCategorias("Bebidas")}>
        <Image src={Bebidas} alt="bebidas "/> Bebidas
      </button>
      <button onClick={() => handleFiltrarCategorias("Saladas")}>
        <Image src={Saladas} alt="saladas" />Saladas
      </button>
      <button onClick={() => handleFiltrarCategorias("Sobremesas")}>
        <Image src={Sobremesas} alt="sobremeas "/> Sobremesas
      </button>
    </section>
  );
}
