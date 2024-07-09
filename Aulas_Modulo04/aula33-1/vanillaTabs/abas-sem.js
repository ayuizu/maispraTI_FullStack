const conteudos = [
    [
        "JS Grécia me lembra filosofia",
        "JS Japão me lembra monte Fuji",
        "JS Coreia do Sul me lembra kpop"
    ],
    [
        "React Alvorada me lembra minha vozinha",
        "React Itália me lembra verão e cabriolet",
        "React Florianópolis me lembra praia"
    ],
    [
        "Node Torres me lembra balonismo",
        "Node Portugal me lembra Nazaré",
        "Node Rio de Janeiro me lembra da minha sogra"
    ]
]

const btnTab1 = document.getElementById('btn-tab1')
const btnTab2 = document.getElementById('btn-tab2')
const btnTab3 = document.getElementById('btn-tab3')
const content = document.getElementById('content')

//Mostar conteúdo
function displayContent(items){
    let listaConteudo = ""
    for (const item of items){
        listaConteudo+=`<li>${item}</li>`
    }
    const lista = document.createElement('ul')
    content.innerHTML=listaConteudo
    content.append(lista)
    
}

//Active só para o btn ativo
function activateButton(btn){
    btnTab1.className=""
    btnTab2.className=""
    btnTab3.className=""
    btn.className="active"
}

//Manipula click -- evento=objeto , target = alvo, captura caract especificas do Id
function handleClick(event){
    /*
    const btnId= botaoClicado
    activateButton(botaoClicado)
    */
    const btnId= event.target.id
    activateButton(event.target)

    if(btnId==='btn-tab1'){
        displayContent(conteudos[0])
    }else if(btnId==='btn-tab2'){
        displayContent(conteudos[1])
    }else if(btnId==='btn-tab3'){
        displayContent(conteudos[2])
    }
}

displayContent(conteudos[0])

btnTab1.addEventListener("click", handleClick)
btnTab2.addEventListener("click", handleClick)
btnTab3.addEventListener("click", handleClick)