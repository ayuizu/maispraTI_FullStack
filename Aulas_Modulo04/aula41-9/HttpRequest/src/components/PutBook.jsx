import axios from "axios"
import { useState } from "react"


function PutBook(){

    const newData = {
        title:'Diorama',
        author:'Carol Beninson',
        genre:'Drama',
        country:'Brasil',
        year:'2017',
        rate:'3.5'
    }

    const [bookId, setBookId] = useState(0)

    const getId = (event) => {
        setBookId(event.target.value)
    }

    const sendRequest = () => {
    
        axios.put(`https://reqres.in/api/books/${bookId}`, newData)
        //Resposta positiva
        .then(response => {
            console.log('Dados do livro: ', response.data)
            alert('Livro atualizado' + JSON.stringify(response.data))
        })
        //Resposta negativa
        .catch(error => {
            console.log('Erro ao recuperar o livro: ', error)
            alert('Erro ao atualizar os dados do livro')
        })
    }
    return(
        <div>
            <label><p>Atualizar livro por ID:</p>
                <input type="text" name="id" onChange={getId}/>
            </label><br />
            <button onClick={sendRequest}>Atualizar livro</button>
        </div>
    )
}

export default PutBook