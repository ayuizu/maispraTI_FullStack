// Define um componente funcional chamado BooKDetails que recebe um objeto props como argumento e o desestrutura. 
// Lembrando que as chaves são utilizadas para que seja permitido inserir expressões JS em arquivos JSX

function BookDetails({author,favoriteBook}){
    return(
        <div>
             {/* Renderiza um parágrafo com o autor recebido via props */}
            <p>Nome: {author}</p>
            {/* Renderiza um parágrafo com o livro favorito recebido via props */}
            <p>Livro favorito: {favoriteBook}</p>
            <br />
        </div>
    )
}

// Exporta o componente BooKDetails para ser usado em outros arquivos
export default BookDetails