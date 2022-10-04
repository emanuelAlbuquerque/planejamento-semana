'use strict'
//----------------------VALORES DOS INPUTS-----------------------------
var btnAdicionaAtv = document.getElementById('btn_adicionar-atividade')
var containerAtividades = document.getElementById('container_atividade')
var horarios = document.getElementById('horarios')//Container dos horarios
var btnExcluirAtv = document.getElementById('btn_excluir-todas-atividades')
var salvarLocalStorage = document.getElementById('salvar_local')
var excluirLocalStorage = document.getElementById('excluir_local')

function pegaDiaSemana(){
  let diasSemana = document.getElementById('inserir__dias-semanas');
  let opcaoSemana = diasSemana.options[diasSemana.selectedIndex]

  let diaSemana = opcaoSemana.text
  return diaSemana
}

function pegaHora(){
  let horaAtividade = document.getElementById('hora-escolhida')
  let horaSelecionada = horaAtividade.options[horaAtividade.selectedIndex]

  let horaAtividadeSelecionada = horaSelecionada.text
  return horaAtividadeSelecionada
}
//----------------------------------------------------------------------//

//--------------------DOM - DIA DAS SEMANAS----------------------------
var diaSegunda = document.querySelector('#segunda')
var diaTerca = document.querySelector('#terca')
var diaQuarta = document.querySelector('#quarta')
var diaQuinta = document.querySelector('#quinta')
var diaSexta = document.querySelector('#sexta')
var diaSabado = document.querySelector('#sabado') 
var diaDomingo = document.querySelector('#domingo')

//----------------BANCO DE DADOS-----------------------------
const getLocalSegunda = () => JSON.parse(localStorage.getItem('bdSegunda')) ?? []
const getLocalTerca = () => JSON.parse(localStorage.getItem('bdTerca')) ?? []//Se for vazio vai passar um array vazio
const getLocalQuarta = () => JSON.parse(localStorage.getItem('bdQuarta')) ?? []//Se for vazio vai passar um array vazio
const getLocalQuinta = () => JSON.parse(localStorage.getItem('bdQuinta')) ?? []//Se for vazio vai passar um array vazio
const getLocalSexta = () => JSON.parse(localStorage.getItem('bdSexta')) ?? []//Se for vazio vai passar um array vazio
const getLocalSabado = () => JSON.parse(localStorage.getItem('bdSabado')) ?? []//Se for vazio vai passar um array vazio
const getLocalDomingo = () => JSON.parse(localStorage.getItem('bdDomingo')) ?? []//Se for vazio vai passar um array vazio

const setLocalSegunda = (bdSegunda) => {localStorage.setItem('bdSegunda', JSON.stringify(bdSegunda))}//Joga os dados dentro da chave no localStorage passando como uma string de objetos.
const setLocalTerca = (bdTerca) => {localStorage.setItem('bdTerca', JSON.stringify(bdTerca))}
const setLocalQuarta = (bdQuarta) => {localStorage.setItem('bdQuarta', JSON.stringify(bdQuarta))}
const setLocalQuinta = (bdQuinta) => {localStorage.setItem('bdQuinta', JSON.stringify(bdQuinta))}
const setLocalSexta = (bdSexta) => {localStorage.setItem('bdSexta', JSON.stringify(bdSexta))}
const setLocalSabado = (bdSabado) => {localStorage.setItem('bdSabado', JSON.stringify(bdSabado))}
const setLocalDomingo = (bdDomingo) => {localStorage.setItem('bdDomingo', JSON.stringify(bdDomingo))}

var bdSegunda = getLocalSegunda()
var bdTerca = getLocalTerca()
var bdQuarta = getLocalQuarta()
var bdQuinta = getLocalQuinta()
var bdSexta = getLocalSexta()
var bdSabado = getLocalSabado()
var bdDomingo = getLocalDomingo()
//Sempre que a aplicação começar os banco de dados locais já começa com os dados que estão no localStorage

//Quando clicar para aparecer a atividaade, a condição fica verdadeira na atividade clicada
var segunda = false
var terca = false
var quarta = false
var quinta = false
var sexta = false
var sabado = false
var domingo = false
//----------------------------------------------------------


//------------------------------FUNÇÔES------------------------------------------------------//
function recebeDadosUsuario(e){
  var descricaoAtividade = document.getElementById('description-atividade').value
  var minuto = document.getElementById('minuto').value
  if(minuto == ''){
    minuto = '00m'
  }
  var horaSelecionada = pegaHora()  
  var diaSemana = pegaDiaSemana()
  var horaAtividade = horaSelecionada + minuto

  //Se a descrição não for vazia ele joga os dados
  if(descricaoAtividade != '' && minuto != ''){
    adicionaBancoDados(descricaoAtividade, horaAtividade, diaSemana)
    atualizaTela(diaSemana)
  }else{
    alert('Por favor, informe a sua atividade')
  }

}

//Jogar os dados dentro do banco de dados
function adicionaBancoDados(descricao, hora, dia){
  if(dia == 'Segunda-Feira'){
    bdSegunda.push({atividade: descricao, horaAtividade: hora, cor: '#FFA246', dia: dia})
  }else if(dia == 'Terça-Feira'){
    bdTerca.push({atividade: descricao, horaAtividade: hora, cor: '#35E185', dia: dia})
  }
  else if(dia == 'Quarta-Feira'){
    bdQuarta.push({atividade: descricao, horaAtividade: hora, cor: '#6688FF', dia: dia})
  }
  else if(dia == 'Quinta-Feira'){
    bdQuinta.push({atividade: descricao, horaAtividade: hora, cor: '#B266FF', dia: dia})
  }
  else if(dia == 'Sexta-Feira'){
    bdSexta.push({atividade: descricao, horaAtividade: hora, cor: '#66D1FF', dia: dia})
  }
  else if(dia == 'Sábado'){
    bdSabado.push({atividade: descricao, horaAtividade: hora, cor: '#FF66D4', dia: dia})
  }
  else if(dia == "Domingo") {
    bdDomingo.push({atividade: descricao, horaAtividade: hora, cor: '#FF6666', dia: dia})
  }
}


function mostarItem(descricao, horaAtv, cor, indice){
  var listaHorarios = document.createElement('li')
  listaHorarios.classList.add('atividade__horario-hora')

  let horarioItem = document.createElement('p')
  horarioItem.classList.add('horario')
  horarioItem.innerHTML = horaAtv
  listaHorarios.appendChild(horarioItem)

  listaHorarios.style.backgroundColor = cor//Aplica o background nos horários
  horarios.appendChild(listaHorarios)
  //Mostra horario na tela
  

  //Cria o elemento ul das atividades, adiciona as listas de atividades a ele, e joga elas no container do html.
  let listaAtividades = document.createElement('ul')
  listaAtividades.classList.add('atividade_item')
  
  
  let listaAtividadeItem = document.createElement('li')
  listaAtividadeItem.classList.add('atividade')
  listaAtividades.appendChild(listaAtividadeItem)
  
  let descricaoAtv = document.createElement('p')
  descricaoAtv.classList.add("atividade__description")
  descricaoAtv.innerHTML = descricao
                
  listaAtividadeItem.appendChild(descricaoAtv)

  
  var buttonDeletar = document.createElement('button')
  buttonDeletar.classList.add('btn_apagar-atividade')
  buttonDeletar.value = indice
  buttonDeletar.innerHTML = 'Apagar'
  listaAtividadeItem.appendChild(buttonDeletar)
  
  listaAtividadeItem.style.borderLeft = '14px solid ' + cor //Aplica a cor nas bordas
  
  listaAtividades.addEventListener('click', deletaItem)//Quando da o click em toda a lista, identifica se o click foi no botão de deletar e delete os itens.
  containerAtividades.appendChild(listaAtividades)
  
}

var larguraButtonInicial = '140px'
const limpaTarefa = () => {
  while(containerAtividades.firstChild){
    containerAtividades.removeChild(containerAtividades.lastChild)
    horarios.removeChild(horarios.lastChild)
  }//Enquanto tiver um filho, ele pecorre o array removendo o ultimo filho do containerAtividades
  diaSegunda.style.maxWidth = larguraButtonInicial
  diaTerca.style.maxWidth = larguraButtonInicial
  diaQuarta.style.maxWidth = larguraButtonInicial
  diaQuinta.style.maxWidth = larguraButtonInicial
  diaSexta.style.maxWidth = larguraButtonInicial
  diaSabado.style.maxWidth = larguraButtonInicial
  diaDomingo.style.maxWidth = larguraButtonInicial
}

const atualizaTela = (dia) =>{
  if(dia == 'Segunda-Feira'){
    atividadeSegunda()
  }
  else if(dia == 'Terça-Feira'){
    atividadeTerca()
  }
  else if(dia == 'Quarta-Feira'){
    atividadeQuarta()
  }
  else if(dia == 'Quinta-Feira'){
    atividadeQuinta()
  }
  else if(dia == 'Sexta-Feira'){
    atividadeSexta()
  }
  else if(dia == 'Sábado'){
    atividadeSabado()
  }
  else if(dia == 'Domingo'){
    atividadeDomingo()
  }
}//Sempre que adicionar um item irá chamar a função para atualizar a tela


const aumentaButton = (dia) => {
  dia.style.maxWidth = '155px'
}
const atividadeSegunda = () => {
  limpaTarefa()
  bdSegunda.forEach ((item) => mostarItem(item.atividade, item.horaAtividade, item.cor))
  segunda = true
  terca = false
  quarta = false
  quinta = false
  sexta = false
  sabado = false
  domingo = false
  aumentaButton(diaSegunda)
  //Pecorre o array chmando a função de mostrar os itens e vai adicionando eles na tela
}

const atividadeTerca = () => {
  limpaTarefa()
  bdTerca.forEach ((item) => mostarItem(item.atividade, item.horaAtividade, item.cor))
  segunda = false
  terca = true
  quarta = false
  quinta = false
  sexta = false
  sabado = false
  domingo = false
  aumentaButton(diaTerca)
}

const atividadeQuarta = () => {
  limpaTarefa()
  bdQuarta.forEach ((item) => mostarItem(item.atividade, item.horaAtividade, item.cor))
  segunda = false
  terca = false
  quarta = true
  quinta = false
  sexta = false
  sabado = false
  domingo = false
  aumentaButton(diaQuarta)
}
const atividadeQuinta = () => {
  limpaTarefa()
  bdQuinta.forEach ((item) => mostarItem(item.atividade, item.horaAtividade, item.cor))
  segunda = false
  terca = false
  quarta = false
  quinta = true
  sexta = false
  sabado = false
  domingo = false
  aumentaButton(diaQuinta)
}
const atividadeSexta = () => {
  limpaTarefa()
  bdSexta.forEach ((item) => mostarItem(item.atividade, item.horaAtividade, item.cor))
  segunda = false
  terca = false
  quarta = false
  quinta = false
  sexta = true
  sabado = false
  domingo = false
  aumentaButton(diaSexta)
}
const atividadeSabado = () => {
  limpaTarefa()
  bdSabado.forEach ((item) => mostarItem(item.atividade, item.horaAtividade, item.cor))
  segunda = false
  terca = false
  quarta = false
  quinta = false
  sexta = false
  sabado = true
  domingo = false
  aumentaButton(diaSabado)
}
const atividadeDomingo = () => {
  limpaTarefa()
  bdDomingo.forEach ((item) => mostarItem(item.atividade, item.horaAtividade, item.cor))
  segunda = false
  terca = false
  quarta = false
  quinta = false
  sexta = false
  sabado = false
  domingo = true
  aumentaButton(diaDomingo)
}

//Acha o item de acordo com o value que é inserido no botão ao criar o item
const achaItem = (item, banco) => {
  if(item.classList[0] == 'btn_apagar-atividade'){//Pega o click no botão
    let index = parseInt(item.value)
    if(index == 0){
      banco.shift()
    }else{
      banco.splice(banco.indexOf(index), 1);
    }
  }
}


const deletaItem = (e) => {
  let item = e.target
  if(segunda){
    achaItem(item, bdSegunda)
    setLocalSegunda(bdSegunda)
    atividadeSegunda()
    //Quando o item é apagado do banco de dados local, ele é enviado para o LocalStorage para atualizar caso ele esteja lá
  }
  if(terca){
    achaItem(item, bdTerca)
    setLocalTerca(bdTerca)
    atividadeTerca()
  }
  if(quarta){
    achaItem(item, bdQuarta)
    setLocalQuarta(bdQuarta)
    atividadeQuarta()
  }
  if(quinta){
    achaItem(item, bdQuinta)
    setLocalQuinta(bdQuinta)
    atividadeQuinta()
  }
  if(sexta){
    achaItem(item, bdSexta)
    setLocalSexta(bdSexta)
    atividadeSexta()
  }
  if(sabado){
    achaItem(item, bdSabado)
    setLocalSabado(bdSabado)
    atividadeSabado()
  }
  if(domingo){
    achaItem(item, bdDomingo)
    setLocalDomingo(bdDomingo)
    atividadeDomingo()
  }
}

const excluirAtividades = () => {
  if(segunda){
    bdSegunda = []
    atividadeSegunda()
    //Esvazia o array e atualiza a tela
  }
  if(terca){
    bdTerca = []
    atividadeTerca()
  }
  if(quarta){
    bdQuarta = []
    atividadeQuarta()
  }
  if(quinta){
    bdQuinta = []
    atividadeQuinta()
  }
  if(sexta){
    bdSexta = []
    atividadeSexta()
  }
  if(sabado){
    bdSabado = []
    atividadeSabado()
  }
  if(domingo){
    bdDomingo = []
    atividadeDomingo()
  }
}

const salvaLocal = () => {
  setLocalSegunda(bdSegunda)
  setLocalTerca(bdTerca)
  setLocalQuarta(bdQuarta)
  setLocalQuinta(bdQuinta)
  setLocalSexta(bdSexta)
  setLocalSabado(bdSabado)
  setLocalDomingo(bdDomingo)
  //Salva os itens no localStorage
}

const deletaLocal = () => {
    localStorage.clear()
    limpaTarefa()
}

//------------CHAMADA DE FUNÇÕES-----------------------------------
btnAdicionaAtv.addEventListener('click', recebeDadosUsuario)
diaSegunda.addEventListener('click', atividadeSegunda)
diaTerca.addEventListener('click', atividadeTerca)
diaQuarta.addEventListener('click', atividadeQuarta)
diaQuinta.addEventListener('click', atividadeQuinta)
diaSexta.addEventListener('click', atividadeSexta)
diaSabado.addEventListener('click', atividadeSabado)
diaDomingo.addEventListener('click', atividadeDomingo)
btnExcluirAtv.addEventListener('click', excluirAtividades)
salvarLocalStorage.addEventListener('click', salvaLocal)
excluirLocalStorage.addEventListener('click', deletaLocal)

if(bdSegunda.length > 0){
  atividadeSegunda()
}else if(bdTerca.lenght > 0){
  atividadeTerca()
}else if(bdQuarta.lenght > 0){
  atividadeQuarta()
}else if(bdQuinta.lenght > 0){
  atividadeQuinta()
}else if(bdSexta.lenght > 0){
  atividadeSexta()
}else if(bdSabado.lenght > 0){
  atividadeSabado()
}else if(bdDomingo.lenght > 0){
  atividadeDomingo()
}

//-----------------------------------------------------------------




