import { useState } from "react";
import ToDo  from './componentes/ToDo'
import './App.css';
import ToDoForm from "./componentes/ToDoForm";

function App() {
  //só pra ver como estava ficando. Povavelmente vamos pegar esses dados direto do BD
  const [toDo, setToDo] = useState([
    {
      id: 1,
      conteudo: "Tarefa 01",
      categoria: "Tarefa" 
    }
  ]) 

  return (
    <div className="app">
      <h1>TO DO LIST</h1>
      <ToDoForm />
      <div>
        {toDo.map((toDo) => (
          <ToDo toDo={toDo} />
        ))}  
      </div>    
    </div>
    
  );
}

export default App;
