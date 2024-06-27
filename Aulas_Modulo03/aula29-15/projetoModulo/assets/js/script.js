

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });

//* Codigo do Pedro + Prof + Vitti + Caio

let space1control = 1;
let space2control = 2;
let space3control = 3;

const images = document.querySelectorAll('.carousel-images img');
let slideIndex = 1;

function next(){

    for (let i = 0; i<images.length; i++){
        images[i].src='.assets/images/op' + Math.abs((slideIndex +1) % images.length) + '.jpeg';
    }
    slideIndex++;
}

function back(){
    let space1 = document. getElementById("space1");
    let space2 = document. getElementById("space2");
    let space3 = document. getElementById("space3");

    space1control--;
    space2control--;
    space3control--;

    if(space1control <1 ){
        space1control=3;
    }
    if(space2control <1 ){
        space2control=3;
    }
    if(space3control <1 ){
        space3control=3;
    }

    space1.src='.assets/images/op' + space1control + '.jpeg';
    space2.src='.assets/images/op' + space3control + '.jpeg';
    space3.src='.assets/images/op' + space2control + '.jpeg';
}

// *Código Pedro + Prof

// let space1control = 1;
// let space2control = 2;
// let space3control = 3;

// function next(){
//     let space1 = document. getElementById("space1");
//     let space2 = document. getElementById("space2");
//     let space3 = document. getElementById("space3");

//     space1control++;
//     space2control++;
//     space3control++;

//     if(space1control >3 ){
//         space1control=1;
//     }
//     if(space2control >3 ){
//         space2control=1;
//     }
//     if(space3control >3 ){
//         space3control=1;
//     }

//     space1.src='.assets/images/op' + space1control + '.jpeg';
//     space2.src='.assets/images/op' + space3control + '.jpeg';
//     space3.src='.assets/images/op' + space2control + '.jpeg';
// }

// function back(){
//     let space1 = document. getElementById("space1");
//     let space2 = document. getElementById("space2");
//     let space3 = document. getElementById("space3");

//     space1control--;
//     space2control--;
//     space3control--;

//     if(space1control <1 ){
//         space1control=3;
//     }
//     if(space2control <1 ){
//         space2control=3;
//     }
//     if(space3control <1 ){
//         space3control=3;
//     }

//     space1.src='.assets/images/op' + space1control + '.jpeg';
//     space2.src='.assets/images/op' + space3control + '.jpeg';
//     space3.src='.assets/images/op' + space2control + '.jpeg';
// }