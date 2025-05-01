import estilos from "./Banner.module.css";
import Image from "next/image";
import Banner from "../../../../public/banner.png";

export default function Header (){
    return(
         <header>
        <Image src={Banner} alt= "banner" />
        <div className={estilos.titulo}>
          <h1>Resturant</h1>
          <p>De pratos clássicos a crialões surpreedentes nosso cardápio é um requinte de sabores refinados.</p>
        </div>
      </header>
    )
}