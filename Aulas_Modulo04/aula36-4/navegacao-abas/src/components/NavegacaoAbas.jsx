import { useState } from "react"
import classes from "../components/NavegacaoAbas.module.css"
import ids from "../components/NavegacaoAbas.module.css"

const conteudos = [
    [
        "AConteudo 0",
        "AConteudo 1",
        "AConteudo 2",
    ],
    [
        "BConteudo 0",
        "BConteudo 1",
        "BConteudo 2",
    ],
    [
        "CConteudo 0",
        "CConteudo 1",
        "CConteudo 2",
    ]
]

function NavegacaoAbas(){
    const [estadoAtual, setEstado] = useState(0)

    return(
        <>
            <div>
                <header>
                    <img src="../src/assets/react.svg" alt="" />
                    <h1>Aula +praTI ReactJS</h1>
                    <p>Exercício para treinar useState</p>
                </header>
            </div>
            <div id="abas" className={classes.abas}>
                <nav>
                    <button className={estadoAtual===0 ? 'classes.active' : ""} onClick={()=>setEstado(0)}>Aba 1</button>
                    <button className={estadoAtual===1 ? 'classes.active' : ""} onClick={()=>setEstado(1)}>Aba 2</button>
                    <button className={estadoAtual===2 ? 'classes.active' : ""} onClick={()=>setEstado(2)}>Aba 3</button>
                </nav>
            </div>
            <div id="conteudo" className={classes.conteudo}>
                <ul>
                    {conteudos[estadoAtual].map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )

}

export default NavegacaoAbas