import estilos from "./Cards.module.css";
import Image from "next/image";

export default function Cards({ imagem, nome, categoria, descricao, preco }) {
  return (
    <div className={estilos.container}>
      <figure>
        <Image src={imagem} alt={nome} />
      </figure>

      <div className={estilos.container_informacoes}>
        <div>
          <h3>{nome}</h3>
          <small>{categoria}</small>
          <p>{descricao}</p>
        </div>
        <div>
          <span>{`R$ ${preco}`}</span>
        </div>
      </div>
    </div>
  );
}
