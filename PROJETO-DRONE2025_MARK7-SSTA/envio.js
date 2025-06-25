var botaoSubir = document.getElementById("botaoSubir")
  var botaoDescer = document.getElementById("botaoDescer")
  var botaoVirarEsquerda = document.getElementById("botaoVirarEsquerda")
  var botaoVirarDireita = document.getElementById("botaoVirarDireita")
  var botaoSoltarProjetil = document.getElementById("botaoSoltarProjetil")
  var botaoVoltarCasa = document.getElementById("botaoVoltarCasa")
  var botaoAtivarModoCabeca = document.getElementById("botaoAtivarModoCabeca")
  var botaoLigar = document.getElementById("botaoLigar")
  var botaoDesligar = document.getElementById("botaoDesligar")

  botaoSubir.addEventListener("click", function(){
    fetch("/subir").then(response => {
      if(response.ok){
        console.log("Comando subir enviado")
      }
    });
  });

  botaoDescer.addEventListener("click", function(){
  fetch("/descer").then(response => {
    if(response.ok){
      console.log("Comando descer enviado")
    }
  });
});

  botaoVirarEsquerda.addEventListener("click", function(){
    fetch("/esquerda").then(response => {
      if(response.ok){
        console.log("Comando esquerda enviado")
      }
    });
});

botaoVirarDireita.addEventListener("click", function(){
    fetch("/direita").then(response => {
      if(response.ok){
        console.log("Comando direita enviado")
      }
    });
});


botaoSoltarProjetil.addEventListener("click", function(){
    fetch("/projetil").then(response => {
      if(response.ok){
        console.log("Comando soltar projetil enviado")
      }
    });
});


botaoVoltarCasa.addEventListener("click", function(){
    fetch("/casa").then(response => {
      if(response.ok){
        console.log("Comando voltar casa enviado")
      }
    });
});

botaoAtivarModoCabeca.addEventListener("click", function(){
    fetch("/modocabeca").then(response => {
      if(response.ok){
        console.log("Comando modo cabeca enviado")
      }
    });
});

botaoLigar.addEventListener("click", function(){
  fetch("/ligar").then(response => {
    if(response.ok){
      console.log("Comando ligar enviado")
    }
  });
});

botaoDesligar.addEventListener("click", function(){
  fetch("/desligar").then(response => {
    if(response.ok){
      console.log("Comando desligar enviado")
    }
  });
});