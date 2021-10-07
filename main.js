
import BotaoConclui from './componentes/concluiTarefa.js'   //carrega o botao conclui e suas funcoes
import BotaoDeleta from  './componentes/deletaTarefa.js'    //carrega o botao deleta e suas funcoes

const criarTarefa = (evento) => { 

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')          //  puxa o elemento da lista que serao criados
    const input = document.querySelector('[data-form-input]')    // puxa o input 
    const valor = input.value                                    // cria uma variavel para o que for escrito no input
    
    
    const tarefa = document.createElement('li')                 //cria elemento dentro da lista
    tarefa.classList.add('task')                                //adiciona uma classe css para elee elemnto criado em lista        
    const conteudo = `<p class="content">${valor}</p>`           //cria uma variavel para e comteudo desse elemento usando ${ } para colocar variavel de js dentro do codigo html

    tarefa.innerHTML = conteudo          //imprime o elemeto na lista  com o conteudo 

    tarefa.appendChild(BotaoConclui())  // adiciona botao conclui nesse elemento
    tarefa.appendChild(BotaoDeleta())   //adiciona botao deletar nesse elemento
    lista.appendChild(tarefa)          // adiciona esse elemento todo na lista 
    input.value = " "                  //reseta o valor do campo de preenchimento
}

const novaTarefa = document.querySelector('[data-form-button]')      //puxa o botato "NOVO ITEM"

novaTarefa.addEventListener('click', criarTarefa)                   // aciona um listener no botato NOVO ITEM ao clicar executa funcao criarTarefa





