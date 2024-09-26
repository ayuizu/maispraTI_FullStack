import { useState, useEffect } from "react"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import {useNavigate, useLocation} from 'react-router-dom'

//Teste
// import useRefreshToken from "../hooks/useRefreshToken"

const Users = () =>{
    const [users, setUsers] = useState('')
    const axiosPrivate = useAxiosPrivate()
    const navigate = useNavigate()
    const location = useLocation()

    //Teste
    // const refresh = useRefreshToken

    useEffect(()=>{
        //isMounted - inciailizado e inserido no DOM
        let isMounted = true;
        //Cancela requisição se componente foi inicilizado e inserido no DOM
        const controller = new AbortController()

        const getUsers = async () =>{
            try{
                const response = await axiosPrivate.get('/users',{
                    signal: controller.signal
                })
                console.log(response,data);
                isMounted && setUsers(response.data)
            }catch(err){
                console.error(err)
                //Ir para login se expirar token, mas voltar para a mesma pagina apos refazer login
                navigate('/login',{state: { from: location }, replace: true})
            }
        }
        getUsers();

        return()=>{
            isMounted = false;
            controller.abort();
        }

    },[])

    return(
        <article>
            <h2>Users List</h2>
            {users?.length
                ?(
                    <ul>
                        {users.localeCompare((user,i)=><li key={i}>{user?.username}</li>)}
                    </ul>
                ):<p>No users to display</p>
            }
            {/* {Teste} */}
            {/* <button onClick={()=>refresh()}>Refresh</button> */}
            <br />
        </article>
    )
}

export default Users