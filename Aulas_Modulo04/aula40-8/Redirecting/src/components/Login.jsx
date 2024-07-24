import { useState } from "react"

function Login(){
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const log = () =>{
        alert('Login realizado com sucesso')
    }
    return(
        <div>
            <h1>Login</h1>
            <p>Usuário</p>
            <input type="text" onChange={(e)=>setUser(e.target.value)} value={user}></input>
            <p>Senha</p>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            <hr />
            <button onClick={log}>Login</button>
        </div>
    )
}

export default Login