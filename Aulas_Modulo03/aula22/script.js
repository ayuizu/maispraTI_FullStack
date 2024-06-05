//Criação da classe Despesa e seu método construtor
//Aqui o this tbm significa que se refere ao atributo da classe, e não ao valor inserido
class Despesa {
  constructor(year, month, day, type, description, valor) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.type = type;
    this.description = description;
    this.valor = valor;
  }
  //Função para validar os dados inseridos
  validateData() {
    for (let i in this) {
      if (this[i] === undefined || this[i] === "") {
        return false;
      }
    }
    return true;
  }
}

//Função de FRONT para registar as depsesas. Atribui valores aos atributos de um objeto da classe Despesa
function registrarDespesa() {
  const year = document.getElementById("year").value;
  const month = document.getElementById("month").value;
  const day = document.getElementById("day").value;
  const type = document.getElementById("type").value;
  const description = document.getElementById("description").value;
  const valor = document.getElementById("valor").value;

  const despesa = new Despesa(year, month, day, type, description, valor);

  if (despesa.validateData()) {
    Database.criarDespesa(despesa);
  }
}

//Cria uma classe Database com o método criarDespesa
class Database {
  // Função de BACK
  criarDespesa(despesa) {
    //localStorage. = Acessar local storage do navegador
    //JSON = Javascript object notation = comunicação de dados entre objetos (JS não é objeto, é string)
    //JSON.stringify() = transforma objeto Despesa em uma String JSON
    //Contrario = JSON.parse() (String para objeto)
    //id = precisa automatizar
    localStorage.setItem(id, JSON.stringify(despesa));
  }
}
