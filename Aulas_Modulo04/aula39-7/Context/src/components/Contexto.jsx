//Context: cria objetos que podem ser compartilhados entre os componentes (em vez de fazer props drill)


//1º passo - Importar API do React e criar um objeto de contexto
import { createContext } from "react"
export const MyContext = createContext()

//2º passo - definir um provedor MyProvider - componente que envolve todos os componentes filhos
//Envolve componente filho com a propriedade name
export const MyProvider = (props) => {
    return(
        <MyContext.Provider value = {{ name: 'Ayumi'}}>
            {props.children}
        </MyContext.Provider>
    )
}

// export default MyContext
// export default MyProvider
//Se não exporta MyProvider ou MyContext, não consegue acessar 'name' -- exportar os 2