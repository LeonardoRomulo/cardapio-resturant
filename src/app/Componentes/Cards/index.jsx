import estilos from "./Cards.module.css";
import Image from "next/image";

export default function Cards({imagem,nome, categoria, descricao, preco}){
    return(
        <div className={estilos.container_cards}>
            <div className={estilos.card_img}>
            <figure>
                <Image src={imagem} alt={nome} />
            </figure>
            </div>

            <div className={estilos. card_info}>
                <h3>{nome}</h3>
                <small>{categoria}</small>
                <p>{descricao}</p>
            </div>
            <div className={estilos.card_preco}>
                <span>{`R$ ${preco}`}</span>
            </div>
        </div>
    )
}