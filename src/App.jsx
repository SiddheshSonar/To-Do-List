import React from 'react'
import { useState } from 'react'
import ToDoList from './components/ToDoList'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div>
      <ToDoList />
    </div>
  )
}

export default App
