import estilos from "./Cards.module.css";
import Image from "next/image";

export default function Cards({imagem,nome, categoria, descricao, preco}){
    return(
        <div className={estilos.container_cards}>
            <figure>
                <Image src={imagem} alt={nome} />
            </figure>
            <div>
                <h3>{nome}</h3>
                <small>{categoria}</small>
                <p>{descricao}</p>
            </div>
            <div>
                <span>{preco}</span>
            </div>
        </div>
    )
}