import React from 'react';
import { useState, useEffect } from 'react';
import CreateTask from '../modals/CreateTask';
import Card from './Card';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import AssignmentIcon from '@mui/icons-material/Assignment';

const ToDoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const toggle = () => {
        setModal(!modal);
    }

    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        if(arr) {
            let getList = JSON.parse(arr)
            setTaskList(getList)
        }
    }, [])

    const deleteTask = (index) => {
        let newList = taskList;
        newList.splice(index,1);
        localStorage.setItem("taskList",JSON.stringify(newList));
        setTaskList(newList);
        // window.location.reload();
        history.go()
    }

    const updateList = (task, index) => {
        let allTask = taskList;
        allTask[index] = task;
        localStorage.setItem("taskList",JSON.stringify(allTask));
        setTaskList(allTask);
        history.go()   
    }

    const saveTask = (task) => {
        let newArr = taskList;
        newArr.push(task);
        localStorage.setItem("taskList",JSON.stringify(newArr));
        setTaskList(newArr)
        setModal(false)
    }

    return (
        <div>
            {!taskList[0] && <div className='empty'>There Are No New Tasks! Be Productive and Add Some Now<LaptopChromebookIcon style={{ fontSize: 50 }} /></div>}
            <div className='header text-center'>
                <h4 className='msg'>Stop Being so Lazy and Get Some Work Done Already! <AssignmentIcon style={{ fontSize: 25 }}/></h4>
                <h2 className='title'>To-Do List</h2>
                <button className='btn btn-primary mt-1' onClick={()=>setModal(true)}>Create Task</button>
            </div>
            <div className='task-container'>
                {taskList[0] && <div className='task-msg'>Here Are The Remaining Task(s)</div>}
                {taskList.map((task, index) => 
                    <Card task={task} index={index} deleteTask={deleteTask} updateList={updateList}/>
                )}
            </div>
            <CreateTask toggle={toggle} modal={modal} saveTask={saveTask}/>
        </div>
    );
};

export default ToDoList;