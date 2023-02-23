const listaAvaliacao = document.querySelectorAll('[data-item]')
const elementoCard = document.getElementById("card")
let avaliacao = 0

//Atribindo o evento de click nos números para avaliação
document.addEventListener('click', (item) => {
   const itemAtual = item.target.classList;

   if(!itemAtual.contains('ativo') && itemAtual.contains('card__listaitem')) {
        listaAvaliacao.forEach(function (item){
            item.classList.remove('ativo');
        });
        itemAtual.add('ativo')
        avaliacao = item.target.getAttribute('data-item')
   }
   
})

//Reescrevendo a página após o submit do botao
document.body.addEventListener('click', e =>{
    if (e.target.id == "btn" && avaliacao != 0) {
        elementoCard.innerHTML = `
        <div class="container">
            <img src="./images/illustration-thank-you.svg" class="img-agradecimento" alt="Imagem de um celular">
            <h2 class="rating"> You selected ${avaliacao} out of 5<h2>
            <h3 class="card__titulo"> Thank you! <h3>
            <p class="card__descricao"> We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch! </p>
        </div>    
        `
    }
})
