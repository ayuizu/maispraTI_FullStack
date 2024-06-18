//Exportar função para importar no html
export function getEnderecoByCEP(cep){
    //Fetch é uma promise. Já tratando a resposta como json
    return fetch(`http://viacep.com.br/ws/${cep}/json/`).then(response => response.json())
}

