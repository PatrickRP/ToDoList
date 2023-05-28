import {useSate} from 'react'

const ToDoForm = () => {
  return (
    <div className="form-toDo">
        <form>
            <input type="text" placeholder="Nova tarefa"></input>
            <button className="add" type="submit">Adicionar</button>
        </form>
    </div>
  )
}

export default ToDoForm