class TarefaView{

  constructor(){
    this._listagem = document.querySelector('#grid')
  }
  templateGrid(tarefas){
    return `
      ${tarefas.listar().map(tarefa => {
        return `
        <section class="task-background d-flex m-3">
        <div>
          <input type="checkbox" class="mt-1">
        </div>
        <div class="flex-fill ml-2 mr-2">
          <div><a href="#" class="link-task">${tarefa.descricao}</a></div>
          <div class="text-muted font-text">${tarefa.data}</div>
          <div class="mt-2 font-text"><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" class ="mr-1">
          <circle cx="4.5" cy="4.5" r="4.5" fill ="${tarefa.cor}"/>
          </svg> ${tarefa.categoria}</div>
        </div>
        <div>
          <a href="#"><img src="assets/images/delete.svg" alt=""></a>
        </div>
      </section>
        `
      }).join('')}
      
    `
  }
  

  montarGrid(tarefas){
    this._listagem.innerHTML=""
    this._listagem.innerHTML = this.templateGrid(tarefas)
  }
}


// return `
//       ${categorias.listar().map(categoria =>{
//         return `
//         <li>
//         <a href="#" class="link-category">
//         <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" class ="mr-1">
//         <circle cx="4.5" cy="4.5" r="4.5" fill ="${categoria.cor}"/>
//         </svg> ${categoria.descricao}
//         </a>
//       </li>
//         `
//       }).join('')}
//     `
