import axios from "axios"
import { useState } from "react"

function DeleteBook(){

    const [bookId, setBookId] = useState()
    const [bookData, setBookData ] = useState({})

    //Puxa ID do input
    const getId = (event) => {
        const id = event.target.value
        setBookId(id)
        if(id)
            getData(id)
    }
    //Puxa dados do livro com ID do input
    const getData = (bookId) => {
        if(bookId){
            axios.get('https://reqres.in/api/books/' + bookId)
            //Resposta positiva
            .then(response => {
                setBookData(response.data.data)
                console.log('Dados do livro solicitado: ', JSON.stringify(bookData))
            })
            //Resposta negativa
            .catch(error => {
                console.log('Erro ao recuperar o livro: ', error)
            })
        }

    }

    //Deleta dados do livro
    const sendRequest = () => {
        axios.delete('https://reqres.in/api/books/' + bookId)
            //Resposta positiva
            .then(response => {
                console.log('Dados do livro excluído: ', bookData)
                alert('Livro excluído' + JSON.stringify(bookData))
            })
            //Resposta negativa
            .catch(error => {
                console.log('Erro ao deletar o livro: ', error)
                alert('Erro ao excluir os dados do livro')
            })
    }
    return(
        <div>
            <label><p>Excluir livro por ID:</p>
                <input type="text" name="id" onChange={getId} value={bookId}/>
            </label><br />
            {bookData ? 
                <p>Título: {bookData.name}</p> : <p>Digite um ID válido</p>
            }
            <button onClick={sendRequest}>Excluir livro</button>
        </div>
    )
}

export default DeleteBook