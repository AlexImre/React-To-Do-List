import './Input.css';
import React, {useState} from 'react';
import {Task} from './Task';
import {generateId} from './Utilities';

export function Input(props) {
    
    const [listOfTasks, setListOfTasks] = useState([]);
    const addTask = (task) => {
        setListOfTasks((prev) => [task, ...prev]);
    }

    const [task, setTask] = useState({});
    const handleChange = (e) => {
        setTask({
            text: e.target.value,
            id: 0,
            colour: ''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.text.length < 1){
            return;
        }
        setTask(task.id = generateId())

        addTask(task);
        setTask('');
        document.querySelector('input').value = "";
    }

    const completeTask = (taskIdToComplete) => {

        const taskToComplete = listOfTasks.filter((task) => task.id === taskIdToComplete);
        taskToComplete[0].colour = 'green';
        setListOfTasks((prev) => [...prev]);
        // HOW TO STOP TIMEOUT BUGS? E.G> Doesnt work if press quickly + text gets shuffled?
        // const timeout = setTimeout(() => {
        //     removeTask(taskIdToComplete)
        // }, 2000)
        // return () => clearTimeout(timeout);
    };

    const removeTask = (taskIdToRemove) => {
        setListOfTasks(() => listOfTasks.filter((task) => task.id !== taskIdToRemove));
    }

    return (
        <>
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <input className="input" type="text" name="input" placeholder='Add task...' onChange={handleChange}/>
                <button class="button-29">
                    Add
                </button>
            </form>
        </div>
        <div className={`tasksContainer`}>
                {listOfTasks.map((task) => (
                    <Task className={`task ${task.colour}`} id="task" key={task.id} task={task} completeTask={completeTask} removeTask={removeTask}/>
                ))}
        </div>
        </>
    )

}