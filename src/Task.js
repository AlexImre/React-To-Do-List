import './Task.css';
import React from 'react';

export function Task(props) {
    const {
        text,
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
        <>
        <div className={`taskContainer`} id="taskContainer">
            <div className={`tasks ${colour}`} id="tasks">
                {text}
            </div>
            <button className="button-30" onClick={completeTask}>✓</button>
            <button className="button-30" onClick={removeTask}>X</button>
        </div>
        </>
    )
}