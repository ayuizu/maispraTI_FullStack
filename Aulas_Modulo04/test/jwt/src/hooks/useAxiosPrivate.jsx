import { axiosPrivate } from '../api/axios'
import { useEffect } from 'react'
import useRefreshToken from './useRefreshToken'
import useAuth from './useAuth'

const useAxiosPrivate = () =>{
    const refresh = useRefreshToken()
    const {auth} = useAuth()

    useEffect(()=>{

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config =>{
                if(!config.headers['Autorization']){
                    //Se autorização do header não existe, não é uma renovação, é o primeiro acesso
                    config.headers['Autorization'] = `Bearer ${auth?.accessToken}`
                }
                return config
            },(error)=>Promise.reject(error)
        )
        
        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config
                if(error?.response?.status === 403 && !prevRequest?.sent){
                    //Se o acesso for negado por um token expirado e se a requisição anterior n foi enviada
                    //Renovar acesso com refresh
                    prevRequest.set = true
                    const newAccessToken = await refresh()
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                    return axiosPrivate(prevRequest)

                }else{
                    return Promise.reject(error)
                }
                
            }
        )
        return () =>{
            //Limpar
            axiosPrivate.interceptors.request.eject(responseIntercept)
            axiosPrivate.interceptors.response.eject(responseIntercept)
        }

    },[auth,refresh])
    return axiosPrivate
}

export default useAxiosPrivate