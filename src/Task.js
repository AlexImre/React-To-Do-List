import './Task.css';
import React from 'react';

export function Task(props) {
    const {
        task,
        id,
        colour
    } = props.task;

    const completeTask = () => {
        props.completeTask(id);
    }

    const removeTask = () => {
        props.removeTask(id);
    }

    return (
        <div className={`taskContainer`} id="taskContainer">
            <div className="tasks" id="tasks">
                {task}
            </div>
            <button onClick={completeTask}>✓</button>
            <button onClick={removeTask}>X</button>
        </div>
    )
}