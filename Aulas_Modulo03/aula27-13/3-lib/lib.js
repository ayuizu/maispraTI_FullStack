//Exportar função para importar no html
function getEnderecoByCEP(cep){
    //Fetch é uma promise. Já tratando a resposta como json
    return fetch('viacep.com.br/ws/${cep}/json/').then(response => response.json())
}

module.exports = {getEnderecoByCEP};