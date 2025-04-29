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
      <Cards />
    </main>
  </>
  );
}
