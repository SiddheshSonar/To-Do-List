import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({modal, toggle, updateTask, task}) => {
    const [taskName, setTaskName] = useState('')
    const [desc, setDesc] = useState('')

    const handleChange = (e) => {
        const {name , value} = e.target

        if(name === "taskName") {
            setTaskName(value)
        }
        else {
            setDesc(value)
        }
    }

    useEffect(() => {
        setTaskName(task.name)
        setDesc(task.desc)
    },[])

    const handleUpdate = (event) => {
        event.preventDefault();
        let updatedList = {};
        updatedList['name'] = taskName;
        updatedList['desc'] = desc;
        updateTask(updatedList)
    }

    return (
        <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Update Task</ModalHeader>
          <ModalBody>
            <form action="">
                <div className='form-group'>
                    <label>Task Name</label>
                    <input type="text" name='taskName' value={taskName} onChange={handleChange} className='form-control'/>
                </div>
                <div className='form-group mt-3'>
                    <label>Task Description</label>
                    <textarea value={desc} name='description' onChange={handleChange} cols="30" rows="10" className='form-control'></textarea>
                </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>
              Update
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        </div>
    );
};

export default EditTask;