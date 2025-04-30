import { produtos } from "../Dados";

export const retornaProdutos =() =>  produtos;

export const filtrarCategorias = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria);
}