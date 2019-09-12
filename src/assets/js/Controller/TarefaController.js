class TarefaController {

  constructor() {
    this._tarefaService = new TarefaService()
    this._tarefas = new Tarefas()
    this._tarefaView = new TarefaView()

  }

  listar(descricao){
    this._tarefaService.listarTodas(descricao)
      .then(Tarefas => Tarefas.map(tarefa =>
          this._tarefas.adicionar(tarefa)))
      .then(() =>this._tarefaView.montarGrid(this._tarefas))
  }
}

