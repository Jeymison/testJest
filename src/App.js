import { useState } from "react";


function App() {
  const [tarefa, setTarefa] = useState([])
  const [tarefaTemp, setTarefaTemp] = useState('')


  // A funcao abaixc vai cadastrar a const Tarefa e limpar o campo da const TarefaTemp
  function cadastrarTarefa() {
    setTarefa([...tarefa, tarefaTemp]) // adicionar
    setTarefaTemp('') // limpar
  }

  return (
    <div className="App">
      <input data-testid="campo-tarefa" type="text" value={tarefaTemp} onChange={evento => setTarefaTemp(evento.target.value)} />
      <button data-testid="btn-cadastrar" onClick={cadastrarTarefa} type="button">cadastrar</button>
      <ul>
        {tarefa.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
