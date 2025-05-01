'use client';
import { useState } from "react";
import Image from "next/image";
import estilos from "./page.module.css";
import { produtos } from "./Dados";
import Banner from "../../public/banner.png";
import Categorias from "@/app/Componentes/Categorias"
import CampoDeBusca from "./Componentes/CampoDeBusca";
import Cards from "./Componentes/Cards";
import Header from "./Componentes/Banner";
import {retornaProdutos,filtrarCategorias, buscarProdutos } from "./Servico";

export default function Home() {
  // o state já iniciando com o valor das categorias em entradas

const [listarCategoria, setListarCategoria] = useState(produtos.filter((produto) => produto.categoria === "Entradas"));

//Estado que amarzena o texto digitado

const [textoBusca, setTextoBusca] = useState("");

//Função para buscar os produtos conforme o texto digitado

const handleBuscarProduto = (textoDigitado) => {
  setTextoBusca(textoDigitado);

  //condicional na qual permite que as buscas inicie apenas após o usuário ter digitado três letras

  if(textoDigitado.length < 3) {

    return;
  }

const produtosFiltrados = buscarProdutos(textoDigitado);
setListarCategoria(produtosFiltrados);
}

//função que realiza a busca dos produtos por categoria 

  const handleFiltrarCategorias = (categorias) => {
    const produtosFiltrados = produtos.filter((produto) => produto.categoria === categorias);
    setListarCategoria(produtosFiltrados);
    setTextoBusca("")
  }
  return (
    <>
     <Header />

    <main className={estilos.main}>
      {/* passando a função handleFiltrarCategorias por props para a o compnente categorias */}
      <Categorias handleFiltrarCategorias={handleFiltrarCategorias} /> 

      {/* Passando por props a função handleBuscarProduto e a variável de estado textoBusca para serem utilizadas no campo de busca */}
      <CampoDeBusca handleBuscarProduto = {handleBuscarProduto}
      textoBusca={textoBusca}
      />
      <h2>Cardápio</h2>
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
