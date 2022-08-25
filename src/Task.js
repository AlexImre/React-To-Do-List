import './Task.css';
import React, {useState} from 'react';

export function Task(props) {


    const completeTask = () => {
        props.completeTask(props.task.id);
    }

    let colour = ''
    const changeColour = () => {
        colour = 'green';
        return colour;
    }
    
    const removeTask = () => {
        props.removeTask(props.task.id);
    }

    return (
        <div className={`taskContainer green`}>
            <div className="tasks">
                {props.task.task}
            </div>
            <button onClick={changeColour}>✓</button>
            <button onClick={removeTask}>X</button>
        </div>
    )
}