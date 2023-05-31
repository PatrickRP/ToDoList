import {useState} from "react"

const ToDoForm = () => {
  const [value, setValue] = useState([])
  const submit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <div className="form-toDo">
        <form onSubmit={submit}>
            <input type="text" placeholder="Nova tarefa" onChange={(e) => setValue(e.target.value)}></input>
            <button className="add" type="submit">Adicionar</button>
        </form>
    </div>
  )
}

export default ToDoForm