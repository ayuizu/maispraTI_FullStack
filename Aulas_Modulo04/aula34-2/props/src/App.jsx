import MovieDetails from "./components/props"
import BookDetails from "./components/BookDetails"
import Footer from "./components/Footer"

// Define um objeto com os detalhes do autor e seu livro favorito
const item = {
    author: 'Ayumi',
    favoriteBook: 'O Gigante Enterrado'
}

const autoria = {
    author: "Izu Tech",
    CNPJ:"00.000.000/0000-00"
}

function App(){
    return(
        <main>
            <h1>Props</h1>
            <p>Enviar parâmetros de um arquivo/componente a outro</p>
            <br />  

            <h2>Objeto</h2>
            <MovieDetails author="Jaques" favoriteMovie="Se7en"/>

            <h2>Desestruturação</h2>
            <p>Pega valores do objeto e trata separadamente</p>
            {/* Passa o objeto item desestruturado como props para o componente BookDetails */}
            <BookDetails author={item.author} favoriteBook={item.favoriteBook} />

            <h2>Diferença pro import</h2>
            <p>Passamos parâmetro diferetamente</p>
            
            <Footer author={autoria.author} CNPJ={autoria.CNPJ}/>
        </main>
    )
}

export default App