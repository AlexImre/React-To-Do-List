import './Input.css';
import React, {useEffect, useState} from 'react';
import {Task} from './Task';
import {generateId} from './Utilities';

export function Input(props) {
    
    const [listOfTasks, setListOfTasks] = useState([]);
    const addTask = (task) => {
        const toDoTask = {
            task: task,
            id: generateId()
        }
        setListOfTasks((prev) => [toDoTask, ...prev]);
    }

    const [task, setTask] = useState([]);
    const handleChange = (e) => {
        setTask(() => e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask('');
        document.querySelector('input').value = "";

    }


    const completeTask = (taskIdToComplete) => {
        const timeout = setTimeout(() => {
            removeTask(taskIdToComplete)
        }, 1000)
        return () => clearTimeout(timeout);
    };

    const changeColour = () => {
        return 'green';
    }

    const removeTask = (taskIdToRemove) => {
        setListOfTasks(() => listOfTasks.filter((task) => task.id !== taskIdToRemove));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="input" type="text" name="input" placeholder='Add task...' onChange={handleChange}/>
                <input className="submit" type="submit" value="+" />
            </form>
            <div className="tasksContainer">
                {listOfTasks.map((task) => (
                    <Task key={task.id} task={task} completeTask={completeTask} removeTask={removeTask} changeColour={changeColour}/>
                ))}
            </div>
        </div>
    )

}