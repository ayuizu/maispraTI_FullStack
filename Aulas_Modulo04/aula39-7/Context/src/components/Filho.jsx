import { useContext } from "react"
import { MyContext } from './Contexto'
// import MyContext from './Contexto'

const MyChildren = () =>{
    //Qual contexto estou usando
    const context = useContext(MyContext)
    //Qual atributo estou acessando através do contexto
    return <div>Meu nome é {context.name}</div>
}

export default MyChildren