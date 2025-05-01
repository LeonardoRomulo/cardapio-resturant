import estilos from "./Banner.module.css";
import Image from "next/image";
import Banner from "../../../../public/banner.png";

export default function Header (){
    return(
         <header className={estilos.header}>
        <div className={estilos.titulo}>
          <h1>Restaurant</h1>
          <p>De pratos clássicos a criações surpreendentes nosso cardápio é um requinte de sabores refinados.</p>
        </div>
      </header>
    )
}