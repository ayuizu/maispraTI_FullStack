import axios from "axios"
import { useState } from "react"


function GetBook(){

    const [bookId, setBookId] = useState(0)

    const getId = (event) => {
        setBookId(event.target.value)
        
    }

    const sendRequest = (event) => {
        event.preventDefault()    
        
        axios.get('https://reqres.in/api/books/' + bookId)
        //Resposta positiva
        .then(response => {
            console.log('Dados do livro solicitado: ', response.data)
            alert('Livro recuperado' + JSON.stringify(response.data))
        })
        //Resposta negativa
        .catch(error => {
            console.log('Erro ao recuperar o livro: ', error)
            alert('Erro ao recuperar os dados do livro')
        })
    }
    return(
        <div>
            <label><p>Buscar livro por ID:</p>
                <input type="text" name="id" onChange={getId}/>
            </label><br />
            <button onClick={sendRequest}>Encontrar livro</button>
        </div>
    )
}

export default GetBook