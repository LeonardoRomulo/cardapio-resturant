import estilos from "./Categorias.module.css";
import Image from "next/image";

export default function Categorias({handleFiltrarCategorias}) {
  return (
    <section className={estilos.categorias}>
      <button onClick={() => handleFiltrarCategorias("Entradas")}>Entradas</button>
      <button onClick={() => handleFiltrarCategorias("Massas")}>Massas</button>
      <button onClick={() => handleFiltrarCategorias("Carnes")}>Carnes</button>
      <button onClick={() => handleFiltrarCategorias("Bebidas")}>Bebidas</button>
      <button onClick={() => handleFiltrarCategorias("Saladas")}>Saladas</button>
      <button onClick={() => handleFiltrarCategorias("Sobremesas")}>Sobremesas</button>
    </section>
  );
}
