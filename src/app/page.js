import Image from "next/image";
import estilos from "./page.module.css";
import { produtos } from "./Dados";
import Banner from "../../public/banner.png";
import Categorias from "@/app/Componentes/Categorias"
import CampoDeBusca from "./Componentes/CampoDeBusca";
import Cards from "./Componentes/Cards";
import Header from "./Componentes/Header";

export default function Home() {
  return (
    <>
     <Header />

    <main className={estilos.main}>
      <Categorias />
      <CampoDeBusca />
      <div className={estilos.container_cards}>
      {produtos.map((produto, index) => (
        <Cards
        key={index}
        imagem = {produto.imagem}
        nome = {produto.nome}
        categoria = {produto.categoria}
        descricao = {produto.descricao}
        preco = {produto.preco}
        />
      ))}

      </div>
    </main>
  </>
  );
}
