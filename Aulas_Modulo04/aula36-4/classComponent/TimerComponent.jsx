import { Component } from 'react'

class TimerComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            contagem: 0
        }
    }

    //Três estados: montagem, atualização e desmontagem

    //Quando for montado:
    componentDidMount(){
        this.timerId = setInterval(()=>{
            this.setState(prevState => ({
            contagem: prevState.contagem + 1
             }))
        },1000)
    }

    //Quando for atualizado:
    componentDidUpdate(){
        console.log(`O componente foi atualizado para ${this.state.contagem}`)
    }

    //Quando for desmontado
    componentWillUnmount(){
        clearInterval(this.timerId)
        console.log('Timer limpo')
    }

    render(){
        return(
            <div>
                <h1>Timer</h1>
                <h2>{this.state.contagem}</h2>
            </div>
        )
    }

    
}

export default TimerComponent