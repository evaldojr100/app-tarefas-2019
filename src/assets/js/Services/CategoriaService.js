//Criação da Classe CategoriaService herdando a clase Service
class CategoriaService extends Service{
  //Criando Contrutor para copiar os atributos e metodos da classe Service
  constructor(){
    super()
    // Criando Variavel path que concatena url com /categoria
    this._path = `${this._url}/categorias`
  }

  listarTodas(){
    return fetch(`${this._path}`)
              .then(res => res.json())
              .catch(error => console.log(error))
  }




}
