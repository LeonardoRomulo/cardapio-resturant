'use client';
import { useState } from "react";
import Image from "next/image";
import estilos from "./page.module.css";
import { produtos } from "./Dados";
import Banner from "../../public/banner.png";
import Categorias from "@/app/Componentes/Categorias"
import CampoDeBusca from "./Componentes/CampoDeBusca";
import Cards from "./Componentes/Cards";
import Header from "./Componentes/Header";
import {retornaProdutos, filtrarEntradas } from "./Servico";

export default function Home() {
const [listarCategoria, setListarCategoria] = useState(produtos.filter((produto) => produto.categoria === "Entradas"));

  const handleFiltrarCategorias = (categorias) => {
    const produtosFiltrados = produtos.filter((produto) => produto.categoria === categorias);
    setListarCategoria(produtosFiltrados)
  }
  return (
    <>
     <Header />

    <main className={estilos.main}>
      <Categorias handleFiltrarCategorias={handleFiltrarCategorias} />
      <CampoDeBusca />
      <div className={estilos.container_cards}>
      {listarCategoria.map((produto, id) => (
        <Cards
        key={produto.id}
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
