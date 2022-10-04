var dataContent = document.getElementById('data')
var horaContent = document.getElementById('hora')


function mostraData(){
  let data = new Date()
  const dia = String(data.getDate()).padStart(2, '0')//Os números que não tiverem dois digitos vai começar com 0
  const mes = String(data.getMonth() + 1)//O mês começa com 0, com 0 +1 ele dica normal
  const ano = String(data.getFullYear())
  const mesAtual = descobreMes(mes);
  dataContent. innerHTML = `${dia} de ${mesAtual} de ${ano}`
}


function mostraHora(){
  let horaAtual = new Date()
  let hora = String(horaAtual.getHours())
  let minuto = String(horaAtual.getMinutes()).padStart(2, '0')
  horaContent.innerHTML = `${hora}:${minuto}`

  setTimeout('mostraHora()', 1000);
}



function descobreMes(mes){
  if(mes == 1){
    return 'Janeiro'
  }else if(mes == 2){
    return 'Fevereiro'
  }else if(mes == 3){
    return 'Março'
  }
  else if(mes == 4){
    return 'Abril'
  }
  else if(mes == 5){
    return 'Maio'
  }
  else if(mes == 6){
    return 'Junho'
  }
  else if(mes == 7){
    return 'Julho'
  }
  else if(mes == 8){
    return 'Agosto'
  }
  else if(mes == 9){
    return 'Setembro'
  }
  else if(mes == 10){
    return 'Outubro'
  }
  else if(mes == 11){
    return 'Novembro'
  }
  else {
    return 'Dezembro'
  }
}

mostraData()
mostraHora()
