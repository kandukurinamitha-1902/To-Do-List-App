import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from './Components/ToDo-List-Component/ToDo-List';
function App(){
    
    // mock data (fake data) written in a array.
    const todoListArray = [
        {id:1, name: "Pick Milk Every Day", isCompleted: true},
        {id:2, name: "Do Yoga In The Morning",isCompleted: false},
        {id:3, name: "Do walking In The Evening",isCompleted: true},     
    ];
  
    // useState is used to bind data 
    const[task, setTask] = useState([]);
    //useEffect means lifeCycle hook(useeffect to bind the data or call API on  page load )
    useEffect(() =>{
        setTask(todoListArray);
      },[]);
    
  return (
   // browser router use to navigate between pages.
    <BrowserRouter>
      <Routes>
                <Route path='/' element = {<ToDoList task={task} setTask={setTask} />}/>
      </Routes>
    </BrowserRouter>
    
  );
}
export default App;  

