import estilos from "./Cards.module.css";
import Image from "next/image";

export default function Cards({titulo, categoria, descricao, preco}){
    return(
        <div className={estilos.container_cards}>
            <figure></figure>
            <div>
                <h3>{titulo}</h3>
                <small>{categoria}</small>
                <p>{descricao}</p>
            </div>
            <div>
                <span>{preco}</span>
            </div>
        </div>
    )
}