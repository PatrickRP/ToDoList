import React from 'react'

const ToDo = ( {toDo}) => {
    return (
        <div className="tarefas">
            <div className="conteudo">
                <p>{toDo.conteudo}</p> 
                <button className="edit">Editar</button> 
                <button className="del">Deletar</button>
            </div>
        </div>
        
    )
}

export default ToDo