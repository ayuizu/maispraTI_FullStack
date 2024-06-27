

const fotos = document.querySelectorAll('.carrossel-fotos img');
console.log(fotos);

function next(){
    let nextImages;
    for(let i = 0; i<fotos.length; i++){
        if(i<fotos.length-1)
            nextImages[i].src=fotos[i+1].src;
        else
            nextImages[i].src=fotos[0].src;
    }
}

function back(){
    let backImages=[];
    for(let i = 0; i<fotos.length; i--){
        if(i==0)
            backImages[i].src=fotos[fotos.length-1].src;
        else
            backImages[i]=fotos[i-1];
    }
}