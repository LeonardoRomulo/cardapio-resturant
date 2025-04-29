import estilos from "./Header.module.css";
import Image from "next/image";
import Banner from "../../../../public/banner.png";

export default function Header (){
    return(
         <header>
        <Image src={Banner} alt= "banner" />
        <div className={estilos.titulo}>
          <h1></h1>
          <p></p>
        </div>
      </header>
    )
}