import './Task.css';
import React, {useState} from 'react';

export function Task(props) {


    return (
        <div>
            <p>
                {props.task};
            </p>
        </div>
    )
}