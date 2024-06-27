function requisitar(url){
    document.getElementById('content').innerHTML = ''

    let ajax = new XMLHttpRequest()
    
    ajax.open('GET', url)

    console.log(ajax.readyState)

    ajax.onreadystatechange = () => {
        if(ajax.readyState == 4 && ajax.status == 200) {
            document.getElementById('content').innerHTML = ajax.responseText
        }

        if(ajax.readyState == 4 && ajax.status == 404) {
            document.getElementById('content').innerHTML = 'Requisição finalizada, porém o recurso não foi encontrado. Erro 404.'
        }
    }

    setTimeout(() => {
        ajax.send()
    }, 500)
}   

document.addEventListener("DOMContentLoaded", function () {
    const abaBtn = document.querySelectorAll(".aba");

    abaBtn.forEach((button) => {
      button.addEventListener("click", function () {
        //Remove btn-sucess (verde) e adiciona btn-secondary(cinza) se btn não for o button clicado
        abaBtn.forEach((btn) => {
            if(btn!=button){
                btn.classList.remove("btn-success");
                btn.classList.add("btn-secondary")
            }
         });

         //Adiciona btn-sucess e remove btn-secondary ao button clicado
        this.classList.add("btn-success");
        this.classList.remove("btn-secondary")
      });
    });
  });