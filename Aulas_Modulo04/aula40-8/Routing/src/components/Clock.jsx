import { useState, useEffect } from "react"

function Clock(){
    

    const [time, setTime] = useState(()=>{
        const currentTime = new Date()
        return [currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds()]
    })

    useEffect(()=>{
        const tictac = () => {
            const currentTime = new Date()
            setTime([currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds()])
        }

        const interval = setInterval(tictac, 1000)

        return()=>{
            clearInterval(interval)
            console.log('Hora atualizada')
        }
    },[time])
    return(
        <div>
            <h2>Horário Atual</h2>
            <h3>{time[0].toString().padStart(2, '0')}:{time[1].toString().padStart(2, '0')}:{time[2].toString().padStart(2, '0')}</h3>
        </div>
    )
}

export default Clock