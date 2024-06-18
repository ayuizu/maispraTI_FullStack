/*let promessa0 = new Promise((resolve, reject) =>{
    try{
        setTimeout(()=>{
            resolve('Promessa bem sucedida')
        },3000)
    }catch{
        setTimeout(()=>{
            reject(e)
        },3000)
    }

});

console.log(promessa0);
*/

let promessa1 = new Promise((resolve, reject) =>{

        setTimeout(()=>{
            let resposta = {}
            if(false){
                resposta = {
                    codigo: 404,
                    erro: 'Objeto não encontrado'
                }
                reject(resposta)
            }
            resposta = {
                1: {id:1, nome:"Caio"},
                2: {id:2, nome:"Leonan"},
                3: {id:3, nome:"Rogerio"}
            }

            resolve(resposta)
        },3000)

}).then((resposta)=>{
    console.log(resposta);
}).then(()=>{

        console.log("then 1")
   
}).then(()=>{
    let promessa2 = new Promise((resolve, reject) =>{

        setTimeout(()=>{
            let resposta = {}
            if(false){
                resposta = {
                    codigo: 1000,
                    erro: 'Assistir One Piece'
                }
                reject(resposta)
            }
            resposta = {
                1: {id:1, nome:"Fernando"},
                2: {id:2, nome:"Vanessa"},
                3: {id:3, nome:"Guilherme"}
            }

            resolve(resposta)
        },3000)
    }).then((dados)=>{ //dados = resposta acima
        console.log(dados);
    }).catch(erro =>{
        console.log(erro);
    })
}).then(()=>{
    console.log("then 2")
    return "then 3"
}).then(param=>{ //then 3 como parametro pra proxima sequencia - param puxa return
    console.log(param)
    return "then 3"
}).catch((erro => {
    console.log("Parametro de erro enviado na promise reject");
}))



console.log(promessa1);