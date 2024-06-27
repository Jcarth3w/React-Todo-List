import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {

    return (
        <div className={`Todo ${task.deleted ? 'deleted' : ''}`}>
            <p onClick={() => toggleComplete(task.id)} 
           className={`${task.completed ? 'completed' : ''} ${task.deleted ? 'deleted' : ''}`}>{task.task}</p>
            <div>
                <button onClick={() => editTodo(task.id)} disabled={task.deleted}>
                    <FontAwesomeIcon className='edit-icon' icon={faPenToSquare} />
                </button>
                <button onClick={() => deleteTodo(task.id)} disabled={task.deleted}>
                    <FontAwesomeIcon className='delete-icon' icon={faX}/>
                </button>
            </div>
        </div>
    )
}