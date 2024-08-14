import classes from './Footer.module.css'

const Footer = () =>{
return(
    <div className={classes.footer}>
        <div className={classes.telephoneNumber}>
            Dúvidas? Ligue <a href="">0800 591 2876</a>
        </div>
        <div className={classes.linkList}>
            <div><a href="">Perguntas frequentes</a></div>
            <div><a href="">Central de Ajuda</a></div>
            <div><a href="">Termos de Uso</a></div>
            <div><a href="">Privacidade</a></div>
            <div><a href="">Preferências de cookies</a></div>
            <div><a href="">Informações corporativas</a></div>
        </div>
    </div>
)
}

export default Footer