import { useState } from "react";
//Importa a função useState do react
//Se for 'export function Counter(){}' em vez do default, teria que importar como 'import {Counter} from ".."'

function Counter(){
    //const stateData = useState()
    //console.log(stateData) -> 0, f (função); atualiza -> 1, f -> 2, f
    //useState() retorna estado atual + função pra atualizar ele
    
    //Desestruturado:
    const [count, setCount] = useState(0)
    //Estado atual - count = 0; setCount vai incrementar count


    return(
        <div>
            <p>Você cliclou {count} vezes</p>
            {/* Sem arrow function não funciona*/}
            <button onClick={()=>setCount(count+1)}>
                Clique aqui
            </button>
        </div>
    )
}

export default Counter