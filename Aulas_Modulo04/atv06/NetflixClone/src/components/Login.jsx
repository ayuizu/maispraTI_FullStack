import { useState, useContext } from "react"
import styled from 'styled-components'
import { AuthContext, useAuth } from "./Authentication"
import { useNavigate } from "react-router-dom"
import Footer from './Footer'
import classes from './Login.module.css'

import classNames from 'classnames'

const Success = styled.p`
    color: green;
`

const Failed = styled.p`
    color: red;
`

const Login = () =>{
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const {setIsLoggedIn} = useContext(AuthContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(user == "admin" && password == "12345"){
            console.log("Logged in")
            setIsLoggedIn(true)
            navigate('/')
        }
        else{
            console.log("Error")
            setError(false)
        }
    }
    const [captchaText, setCaptchaText] = useState(false)
    const handleCaptcha = () =>{

        setCaptchaText(true)
    }
    return(
        <div className={classes.loginMain}>
            <div className={classes.logo}><img src="./src/assets/logo-shadow2x.png" /></div>

            <div className={classes.container}>
                <h1>Entrar </h1>
                <form>

                    <div>
                        <input type="text" value={user} onChange={(e)=>setUser(e.target.value)} className={classes.inputText} placeholder=" " />
                        <span className={classes.floatingLabel1}>Email ou número de celular</span>
                    </div>

                    <div>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className={classes.inputText} placeholder=" "/>
                        <span className={classes.floatingLabel2} >Senha</span>
                    </div>

                    <button className={classes.btn1} onClick={handleSubmit}>Entrar</button>
                    <p className={classes.center}>OU</p>
                    <button className={classes.btn2} onClick={handleSubmit}>Usar um código de acesso</button>  
                    {error && <Failed>Erro</Failed>}
                    <p className={classes.center}>Esqueceu a senha?</p>
                    <p><input type="checkbox" className={classes.checkBox} ></input> Lembre-se de mim</p>
                    <p>Novo por aqui? <span className={classes.bold}>Assine agora</span>.</p>
                    <p className={classes.light}>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. {!captchaText && <a href="#" onClick={handleCaptcha} className={classes.blueLink}>Saiba mais.</a>}</p>
                      { captchaText && <p className={classes.light}><br/>As informações recolhidas pelo Google reCAPTCHA estão sujeitas à <a className={classes.blueLink} href="https://https://policies.google.com/privacy" target="_blank">Política de Privacidade</a> e <a className={classes.blueLink} href="https://policies.google.com/terms" target="_blank">Termos de Uso</a>, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).</p>}  
                </form>
            </div>

            <div>
             <Footer />
            </div>
        </div>
    )
}

export default Login
