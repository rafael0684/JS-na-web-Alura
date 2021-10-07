const BotaoConclui = () => {                                   //funcao executa automaticamente funcao sem nome ()=>{}
    const botaoConclui = document.createElement('button')      //cria botao conclui

    botaoConclui.innerText='concluir'                          //adiciona texto no botao / /  adiciona class no botao / / cria um listener que executa conclui=Tarefa
    botaoConclui.classList.add('check-button')
    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui                                      // retorna esse botato todo estilizado.. pra onde???
}

const concluirTarefa = (evento)=> {
    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')
}
export default BotaoConclui