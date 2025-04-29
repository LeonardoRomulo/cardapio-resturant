import estilos from "./Categorias.module.css";
import Image from "next/image";

export default function Categorias() {
  return (
    <section className={estilos.categorias}>
      <button>Entradas</button>
      <button>Massas</button>
      <button>Carnes</button>
      <button>Bebidas</button>
      <button>Saladas</button>
      <button>Sobremesas</button>
    </section>
  );
}
