let radio = document.querySelector('.manual-btn')
let cont = 1;

document.getElementById('radio1').checked = true

setInverval(()=>{
    proximaImg()
},5000)

function proximaImg(){
    cont++

    if(cont>5)
        cont==1
    
    document.getElementById('radio'+cont).checked = true
}