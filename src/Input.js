import './Input.css';
import React, {useState} from 'react';
import {Task} from './Task';

export function Input(props) {
    
    const [listOfTasks, setListOfTasks] = useState([]);
    const addTask = (task) => {
        const toDoTask = {
            task: task
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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="input" placeholder='Add task...' onChange={handleChange}/>
                <input type="submit" value="submit" />
            </form>
            <div className="tasksContainer">
                {listOfTasks.map((task) => {
                    // How to give each Task a unique ID??
                    // Also how to make Tasks appear?
                    <Task task={task}/>
                })}
            </div>
        </div>
    )

}