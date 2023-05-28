import React from 'react'

const ToDo = ( {toDo}) => {
    return (
        <div className="tarefas">
            <div className="conteudo">
                <p>{toDo.conteudo /* Verificar como fazer isso direito (botões do lado)*/} <button className="edit">Editar</button> <button className="del">Deletar</button></p> 
            </div>
        </div>
        
    )
}

export default ToDo