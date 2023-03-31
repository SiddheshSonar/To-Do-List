import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal, toggle, saveTask}) => {
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

    const handleSave = () => {
      let newTask = {}
      newTask["name"] = taskName
      newTask["desc"] = desc
      saveTask(newTask)
    }

    return (
        <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
            <Button color="primary" onClick={handleSave}>
              Create
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        </div>
    );
};

export default CreateTask;