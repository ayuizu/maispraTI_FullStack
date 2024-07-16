import { Component } from "react";

//Componentes de classe são filhas da classe Component
class MyComponent extends Component {

    //Método construtor
    constructor(props){
        //Sem isso não renderiza. Inicia o componente pai. Props seria como 'event'
        super(props)
        //Propriedade específica do Component
        this.state = {
            contador: 0
        }
    }
    //Incrementar valor ao contador. Será uma função anônima
    add = () => {
        //Método específico do Component
        this.setState({contador: this.state.contador +1})
    }

    render(){
        return(
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={this.add}>Incrementar</button>
            </div>
        )
    }
}

export default MyComponent