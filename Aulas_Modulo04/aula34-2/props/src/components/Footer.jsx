import "./Footer.module.css"

function Footer({author, CNPJ}){
    return(
        <footer> 
            <div>
                <p>Desenvolvido por {author}</p>
                <p>CNPJ {CNPJ}</p>
            </div>

        </footer>
    )
}

export default Footer