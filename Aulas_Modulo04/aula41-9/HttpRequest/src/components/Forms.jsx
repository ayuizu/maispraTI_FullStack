import { useState } from "react"
import axios from 'axios'
import classes from './Forms.module.css'

function Forms(){

    const [book, setBook]  = useState({
        title:'',
        author:'',
        genre:'',
        country:'',
        year:'',
        rate:'0'
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setBook({
            ...book,
            [name]:value
        })
    }

     //Usa promisses - assincrono
    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            // Post: insere dados no recurso
            const response = await axios.post('https://reqres.in/api/books', book)
            console.log(response.data)
            alert(`Livro cadastrado com sucesso! ID ${response.data.id}, Título ${response.data.title}, Autor(a) ${response.data.author}`)
        }catch(error){
            alert('Erro ao cadastrar livro')
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Registre sua leitura</h1>
                <p>Título</p>
                <input type="text" name="title" value={book.title} onChange={handleChange} />
                <p>Autor(a)</p>
                <input type="text" name="author" value={book.author} onChange={handleChange} />
                <p>Gênero</p>
                <input type="text" name="genre" value={book.genre} onChange={handleChange} />
                <p>País</p>
                <input type="text" name="country" value={book.country} onChange={handleChange} />
                <p>Ano</p>
                <input type="text" name="year" value={book.year} onChange={handleChange} />
                <p>Nota</p>
                <div className={classes.starRating}>
                    <input type="radio" id="sr-0-5" name="rate" value="5" onChange={handleChange} />
                    <label for="sr-0-5">★</label>
                    <input type="radio" id="sr-0-4" name="rate" value="4" onChange={handleChange} />
                    <label for="sr-0-4">★</label>
                    <input type="radio" id="sr-0-3" name="rate" value="3" onChange={handleChange} />
                    <label for="sr-0-3">★</label>
                    <input type="radio" id="sr-0-2" name="rate" value="2" onChange={handleChange} />
                    <label for="sr-0-2">★</label>
                    <input type="radio" id="sr-0-1" name="rate" value="1" onChange={handleChange} />
                    <label for="sr-0-1">★</label>
                    <input type="radio" id="sr-0-0" name="rate" value="0" onChange={handleChange} />
                    <label for="sr-0-0"></label>
                </div>
                 <br />
                <button type="submit">Enviar</button>

            </form>
        </div>
    )

}

export default Forms