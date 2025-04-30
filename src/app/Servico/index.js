import { produtos } from "../Dados";
// função que retorna a coleção de produtos da camada de dados
export const retornaProdutos =() =>  produtos;

// função que filtra os produtos pore categorias
export const filtrarCategorias = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria);
}
// função que filtra os produtos através do texto digitado no input do campo de busca
export const buscarProdutos = (textoDigitado) => {
    return produtos.filter((produto) =>  
        produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        produto.categoria.toLowerCase().includes(textoDigitado.toLowerCase()) 
        // || produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
)
}